"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Flag, MoreVertical, Save, Share2, User } from "lucide-react";
import Image from "next/image";

interface YouTubeCardProps {
    thumbnailUrl: string;
    videoTitle: string;
    channelName: string;
    views: number;
    uploadTime: string;
    channelAvatarUrl?: string;
}

export function YouTubeCard({
    thumbnailUrl,
    videoTitle,
    channelName,
    views,
    uploadTime,
    channelAvatarUrl,
}: YouTubeCardProps) {
    return (
        <Card className="w-full max-w-sm overflow-hidden border-none rounded-none md:rounded-xl">
            <div className="relative aspect-video">
                <Image
                    src={thumbnailUrl}
                    alt={videoTitle}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex mt-2">
                <Avatar className="h-9 w-9 mr-3">
                    <AvatarImage src={channelAvatarUrl} alt={channelName} />
                    <AvatarFallback>
                        <User />
                    </AvatarFallback>
                </Avatar>
                <div className="flex-grow">
                    <h3 className="font-semibold text-sm line-clamp-2">
                        {videoTitle}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                        {channelName}
                    </p>
                    <p className="text-xs text-muted-foreground">
                        {views.toLocaleString()} views • {uploadTime}
                    </p>
                </div>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">More options</span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-48" align="end">
                        <div className="grid gap-1">
                            <Button
                                variant="ghost"
                                className="flex items-center justify-start gap-2"
                            >
                                <Save className="h-4 w-4" />
                                Save
                            </Button>
                            <Button
                                variant="ghost"
                                className="flex items-center justify-start gap-2"
                            >
                                <Share2 className="h-4 w-4" />
                                Share
                            </Button>
                            <Button
                                variant="ghost"
                                className="flex items-center justify-start gap-2"
                            >
                                <Flag className="h-4 w-4" />
                                Report
                            </Button>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </Card>
    );
}
