"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getAnimeEpisodeStreaming, getAnimeInfo } from "@/lib/queries";
import { getAnimeTitle, popularityFormater } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bookmark, ExternalLink, Loader2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hls from "hls.js";
import dynamic from "next/dynamic";
import { Suspense, useState, useRef, useCallback, useEffect } from "react";

const Player = dynamic(() => import("./player"), {
    ssr: false,
});

export default function WatchPageContent() {
    const searchParams = useSearchParams();
    const episode = searchParams.get("episode");
    const animeId = searchParams.get("id");

    if (!episode || !animeId) {
        return <div className="p-4 text-center">Invalid URL parameters</div>;
    }

    return (
        <Suspense fallback={<LoadingFallback />}>
            <WatchPageContentInner episode={episode} animeId={animeId} />
        </Suspense>
    );
}

function WatchPageContentInner({
    episode,
    animeId,
}: {
    episode: string;
    animeId: string;
}) {
    const [isWatchIframe, setIsWatchIframe] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const playerRef = useRef<HTMLVideoElement | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const animeInfo = useQuery({
        queryKey: ["anime-info", animeId],
        queryFn: () => getAnimeInfo(animeId),
    });

    const animeStream = useQuery({
        queryKey: ["anime-stream", episode],
        queryFn: () => getAnimeEpisodeStreaming(episode),
    });

    const handlePlay = useCallback(() => {
        setIsPlaying(true);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }, []);

    const handlePause = useCallback(() => {
        setIsPlaying(false);
    }, []);

    useEffect(() => {
        if (animeStream.data && !isWatchIframe && !isPlaying) {
            timeoutRef.current = setTimeout(() => {
                setIsWatchIframe(true);
            }, 3000);
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [animeStream.data, isWatchIframe, isPlaying]);

    const renderVideoPlayer = useCallback(() => {
        if (!episode) {
            return (
                <h5 className="text-sm font-semibold">
                    Please select the episode
                </h5>
            );
        }

        if (animeStream.isError) {
            return (
                <h5 className="text-sm font-semibold">
                    Failed to load episode data
                </h5>
            );
        }

        if (animeStream.isLoading) {
            return (
                <div className="flex flex-col items-center justify-center">
                    <Loader2 className="w-10 h-10 animate-spin mb-2" />
                    <h5 className="text-sm font-semibold">
                        Loading episode data
                    </h5>
                </div>
            );
        }

        if (
            !animeStream.isError &&
            !animeStream.isLoading &&
            episode &&
            animeStream.data
        ) {
            return (
                <div className="w-full h-full">
                    {isWatchIframe ? (
                        <iframe
                            src={animeStream.data?.headers?.Referer}
                            className="w-full h-full"
                            allowFullScreen
                            title="Anime Episode"
                        />
                    ) : (
                        <Player
                            Hls={Hls}
                            source={animeStream.data?.sources?.map((item) => ({
                                label: item?.quality,
                                url: item?.url,
                            }))}
                            color="#FF0000"
                            poster={animeInfo.data?.image}
                            className="w-full h-full"
                            playerRef={playerRef}
                            onPlay={handlePlay}
                            onPause={handlePause}
                            autoPlay
                        />
                    )}
                </div>
            );
        }

        return null;
    }, [
        episode,
        animeStream.isError,
        animeStream.isLoading,
        animeStream.data,
        isWatchIframe,
        animeInfo.data?.image,
        handlePlay,
        handlePause,
    ]);

    const toggleIframe = useCallback(() => {
        setIsWatchIframe((prev) => !prev);
    }, []);

    if (animeInfo.isLoading) {
        return <LoadingFallback />;
    }

    if (animeInfo.isError) {
        return <ErrorFallback />;
    }

    return (
        <div className="w-full">
            <div className="w-full bg-[#222] z-[9999] aspect-video flex items-center justify-center">
                {renderVideoPlayer()}
            </div>
            <div className="flex flex-col gap-5 p-4 md:p-0 md:py-5">
                <h1 className="font-semibold text-xl">
                    {getAnimeTitle(animeInfo.data?.title!)}
                </h1>
                <div className="flex flex-wrap gap-y-10 justify-between">
                    <div className="flex">
                        <Avatar className="h-9 w-9 mr-3">
                            <AvatarImage
                                src={animeInfo.data?.image}
                                alt={getAnimeTitle(animeInfo.data?.title!)}
                            />
                            <AvatarFallback>
                                <User />
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex items-center gap-5">
                            <div>
                                <p className="font-semibold text-sm">
                                    Episode {animeInfo.data?.currentEpisode}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    {popularityFormater.format(
                                        Number(animeInfo.data?.popularity)
                                    )}{" "}
                                    popularity
                                </p>
                            </div>
                            <Button>{animeInfo.data?.status}</Button>
                        </div>
                    </div>
                    <div className="space-x-5">
                        <Button variant="secondary">
                            <ExternalLink className="mr-2" /> Share
                        </Button>
                        <Button variant="secondary">
                            <Bookmark className="mr-2" /> Save
                        </Button>
                        {animeStream.data?.headers?.Referer && (
                            <Button variant="secondary" onClick={toggleIframe}>
                                {isWatchIframe ? "Disable" : "Enable"} iframe
                            </Button>
                        )}
                    </div>
                </div>
                <div className="bg-secondary p-4 rounded-xl text-sm">
                    <p className="font-semibold">Description</p>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: animeInfo.data?.description || "",
                        }}
                    />
                </div>
                <div className="bg-secondary p-4 rounded-xl text-sm">
                    <p>Comments Section</p>
                </div>
            </div>
        </div>
    );
}

function LoadingFallback() {
    return (
        <div className="flex items-center justify-center h-screen">
            <Loader2 className="w-10 h-10 animate-spin" />
            <span className="sr-only">Loading...</span>
        </div>
    );
}

function ErrorFallback() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-xl font-semibold mb-4">
                An error occurred while loading the content.
            </p>
            <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
    );
}
