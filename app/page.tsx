import { YouTubeCard } from "@/components/common/card";
import { Tags } from "@/components/common/tags";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React from "react";

export default function Home() {
    return (
        <div className="p-4 md:pl-24 space-y-5">
            <Tags />
            <ScrollArea className=" md:h-[70vh] pb-20">
                <div className="space-y-5">
                    <h1 className="text-lg font-semibold mb-6">Trending</h1>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <YouTubeCard
                            thumbnailUrl="https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            videoTitle="Amazing Next.js Tutorial for Beginners"
                            channelName="Next.js Enthusiast"
                            views={1234567}
                            uploadTime="2 weeks ago"
                            channelAvatarUrl="/placeholder.svg?height=36&width=36"
                        />
                        <YouTubeCard
                            thumbnailUrl="https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            videoTitle="10 Tailwind CSS Tips You Need to Know"
                            channelName="CSS Wizard"
                            views={987654}
                            uploadTime="3 days ago"
                            channelAvatarUrl="/placeholder.svg?height=36&width=36"
                        />
                        <YouTubeCard
                            thumbnailUrl="https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            videoTitle="Building Accessible Web Applications"
                            channelName="A11y Advocate"
                            views={456789}
                            uploadTime="1 month ago"
                            channelAvatarUrl="/placeholder.svg?height=36&width=36"
                        />
                        <YouTubeCard
                            thumbnailUrl="https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            videoTitle="Amazing Next.js Tutorial for Beginners"
                            channelName="Next.js Enthusiast"
                            views={1234567}
                            uploadTime="2 weeks ago"
                            channelAvatarUrl="/placeholder.svg?height=36&width=36"
                        />
                        <YouTubeCard
                            thumbnailUrl="https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            videoTitle="10 Tailwind CSS Tips You Need to Know"
                            channelName="CSS Wizard"
                            views={987654}
                            uploadTime="3 days ago"
                            channelAvatarUrl="/placeholder.svg?height=36&width=36"
                        />
                        <YouTubeCard
                            thumbnailUrl="https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            videoTitle="Building Accessible Web Applications"
                            channelName="A11y Advocate"
                            views={456789}
                            uploadTime="1 month ago"
                            channelAvatarUrl="/placeholder.svg?height=36&width=36"
                        />
                    </div>

                    <h1 className="text-lg font-semibold mb-6">Trending</h1>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <YouTubeCard
                            thumbnailUrl="https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            videoTitle="Amazing Next.js Tutorial for Beginners"
                            channelName="Next.js Enthusiast"
                            views={1234567}
                            uploadTime="2 weeks ago"
                            channelAvatarUrl="/placeholder.svg?height=36&width=36"
                        />
                        <YouTubeCard
                            thumbnailUrl="https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            videoTitle="10 Tailwind CSS Tips You Need to Know"
                            channelName="CSS Wizard"
                            views={987654}
                            uploadTime="3 days ago"
                            channelAvatarUrl="/placeholder.svg?height=36&width=36"
                        />
                        <YouTubeCard
                            thumbnailUrl="https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            videoTitle="Building Accessible Web Applications"
                            channelName="A11y Advocate"
                            views={456789}
                            uploadTime="1 month ago"
                            channelAvatarUrl="/placeholder.svg?height=36&width=36"
                        />
                        <YouTubeCard
                            thumbnailUrl="https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            videoTitle="Amazing Next.js Tutorial for Beginners"
                            channelName="Next.js Enthusiast"
                            views={1234567}
                            uploadTime="2 weeks ago"
                            channelAvatarUrl="/placeholder.svg?height=36&width=36"
                        />
                        <YouTubeCard
                            thumbnailUrl="https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            videoTitle="10 Tailwind CSS Tips You Need to Know"
                            channelName="CSS Wizard"
                            views={987654}
                            uploadTime="3 days ago"
                            channelAvatarUrl="/placeholder.svg?height=36&width=36"
                        />
                        <YouTubeCard
                            thumbnailUrl="https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            videoTitle="Building Accessible Web Applications"
                            channelName="A11y Advocate"
                            views={456789}
                            uploadTime="1 month ago"
                            channelAvatarUrl="/placeholder.svg?height=36&width=36"
                        />
                    </div>
                </div>
                <ScrollBar orientation="vertical" />
            </ScrollArea>
        </div>
    );
}
