import { Suspense } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import WatchPageContent from "./_components/watch";
import { RecentAnimeContainer } from "@/components/anime/recent-anime";

export default function WatchPage() {
    return (
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-10">
            <Suspense fallback={<div>Loading...</div>}>
                <WatchPageContent />
            </Suspense>

            <div className="md:w-2/3 pb-20">
                <ScrollArea className="md:h-[150vh] w-full pb-20 p-4 md:p-0">
                    <div className="space-y-5">
                        <RecentAnimeContainer
                            cardType="side"
                            containerStyles="grid gap-6 md:grid-cols-2 lg:grid-cols-1"
                        />
                    </div>
                    <ScrollBar orientation="vertical" />
                </ScrollArea>
            </div>
        </div>
    );
}
