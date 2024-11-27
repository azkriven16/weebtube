"use client";

import { getRecentAnime } from "@/lib/queries";
import { cn, getAnimeTitle } from "@/lib/utils";
import { useInfiniteQuery } from "@tanstack/react-query";
import { AlertCircle, RefreshCw } from "lucide-react";
import React from "react";
import { RecentCardMain, RecentCardSide } from "../common/card";
import { Button } from "../ui/button";
import { AnimeCardLoaderMain, AnimeCardLoaderSide } from "./anime-card-loader";

interface RecentAnimeContainerProps {
    containerStyles?: string;
    cardType?: "side" | "main";
}

export const RecentAnimeContainer = ({
    containerStyles,
    cardType,
}: RecentAnimeContainerProps) => {
    const fetchRecentAnime = async ({ pageParam = 1 }) => {
        return getRecentAnime(20, pageParam);
    };

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
        refetch,
    } = useInfiniteQuery({
        queryKey: ["recent-anime"],
        queryFn: fetchRecentAnime,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length === 20 ? allPages.length + 1 : undefined;
        },
    });

    if (status === "pending") {
        return (
            <div>
                <h1 className="text-lg font-semibold mb-6">Trending</h1>
                <div
                    className={cn(
                        cardType === "main"
                            ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                            : "flex flex-col gap-5"
                    )}
                >
                    {[...Array(6)].map((_, index) => (
                        <>
                            {cardType === "main" ? (
                                <AnimeCardLoaderMain key={index} />
                            ) : (
                                <AnimeCardLoaderSide key={index} />
                            )}
                        </>
                    ))}
                </div>
            </div>
        );
    }

    if (status === "error") {
        return (
            <div className="flex flex-col items-center justify-center h-[50vh] text-center">
                <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
                <h2 className="text-xl font-semibold mb-2">
                    Oops! Something went wrong
                </h2>
                <p className="text-muted-foreground mb-4">
                    We couldn't load the anime. Please try again.
                </p>
                <Button onClick={() => refetch()} variant="secondary">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Retry
                </Button>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-lg font-semibold mb-6">Recently Released</h1>
            <div className={cn(containerStyles)}>
                {data?.pages.map((group, pageIndex) => (
                    <React.Fragment key={pageIndex}>
                        {group.map((anime, animeIndex) => (
                            <>
                                {cardType === "main" ? (
                                    <RecentCardMain
                                        href={`/watch?id=${anime.id}&episode=${anime.episodeId}`}
                                        key={`${pageIndex}-${animeIndex}`}
                                        image={anime.image}
                                        episodeTitle={anime.episodeTitle}
                                        animeTitle={getAnimeTitle(anime.title)}
                                        avatar={anime.image}
                                    />
                                ) : (
                                    <RecentCardSide
                                        href={`/watch?id=${anime.id}&episode=${anime.episodeId}`}
                                        key={`${pageIndex}-${animeIndex}`}
                                        image={anime.image}
                                        episodeTitle={anime.episodeTitle}
                                        animeTitle={getAnimeTitle(anime.title)}
                                        avatar={anime.image}
                                    />
                                )}
                            </>
                        ))}
                    </React.Fragment>
                ))}
            </div>
            <div className="mt-4">
                <Button
                    className="w-full"
                    variant="secondary"
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                >
                    {isFetchingNextPage
                        ? "Loading more..."
                        : hasNextPage
                        ? "Load More"
                        : "Nothing more to load"}
                </Button>
            </div>
            <div>
                {isFetching && !isFetchingNextPage ? "Fetching..." : null}
            </div>
        </div>
    );
};
