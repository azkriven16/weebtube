import { RecentAnimeContainer } from "@/components/anime/recent-anime";
import { Tags } from "@/components/common/tags";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default async function Home() {
    return (
        <div className="p-4 md:pl-24 space-y-5">
            <Tags />
            <ScrollArea className=" md:h-[70vh] pb-20">
                <div className="space-y-5">
                    <RecentAnimeContainer containerStyles="grid gap-6 md:grid-cols-2 lg:grid-cols-3" />
                </div>
                <ScrollBar orientation="vertical" />
            </ScrollArea>
        </div>
    );
}
