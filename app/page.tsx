import { YouTubeCard } from "@/components/common/card";
import { CardContainer } from "@/components/common/card-container";
import { Tags } from "@/components/common/tags";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { getRecentAnime } from "@/lib/queries";

export default async function Home() {
    const anime = await getRecentAnime();
    console.log(anime);
    return (
        <div className="p-4 md:pl-24 space-y-5">
            <Tags />
            <ScrollArea className=" md:h-[70vh] pb-20">
                <div className="space-y-5">
                    <CardContainer />
                    <CardContainer />
                </div>
                <ScrollBar orientation="vertical" />
            </ScrollArea>
        </div>
    );
}
