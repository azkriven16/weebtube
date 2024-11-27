"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getAnimeEpisodeStreaming, getAnimeInfo } from "@/lib/queries";
import { getAnimeTitle, popularityFormater } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bookmark, ExternalLink, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hls from "hls.js";
import dynamic from "next/dynamic";

const Player = dynamic(() => import("./player"), {
    ssr: false,
});

export default function WatchPageContent() {
    const searchParams = useSearchParams();
    const episode = searchParams.get("episode")!;
    const animeId = searchParams.get("id")!;

    const animeInfo = useQuery({
        queryKey: ["anime-info"],
        queryFn: async () => getAnimeInfo(animeId),
    });

    const animeStream = useQuery({
        queryKey: ["anime-stream"],
        queryFn: async () => getAnimeEpisodeStreaming(episode),
    });

    return (
        <div className="w-full">
            <Player
                source="https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8"
                color="#ff0000"
                autoPlay
                subtitle={[
                    {
                        lang: "Fr",
                        url: "/fr.vtt",
                    },
                    {
                        lang: "En",
                        url: "/en.vtt",
                    },
                ]}
                Hls={Hls}
            />
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
                                    Episode {animeInfo?.data?.currentEpisode}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    {popularityFormater.format(
                                        Number(animeInfo.data?.popularity)
                                    )}{" "}
                                    popularity
                                </p>
                            </div>
                            <Button>{animeInfo?.data?.status}</Button>
                        </div>
                    </div>
                    <div className="space-x-5">
                        <Button variant="secondary">
                            <ExternalLink /> Share
                        </Button>
                        <Button variant="secondary">
                            <Bookmark />
                            Save
                        </Button>
                    </div>
                </div>
                <div className="bg-secondary p-4 rounded-xl text-sm">
                    <p className="font-semibold">Description</p>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: animeInfo?.data?.description || "",
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
