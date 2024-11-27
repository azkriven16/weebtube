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
import Link from "next/link";

interface YouTubeCardProps {
    image: string;
    animeTitle: string;
    episodeTitle: string;
    avatar?: string;
    href: string;
}

export function RecentCardMain({
    image,
    animeTitle,
    episodeTitle,
    avatar,
    href,
}: YouTubeCardProps) {
    return (
        <Link href={href}>
            <Card className="w-full max-w-sm overflow-hidden border-none rounded-none md:rounded-xl">
                <div className="relative aspect-video">
                    <Image
                        src={image}
                        alt={animeTitle}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex mt-2">
                    <Avatar className="h-9 w-9 mr-3">
                        <AvatarImage src={avatar} alt={episodeTitle} />
                        <AvatarFallback>
                            <User />
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex-grow">
                        <h3 className="font-semibold text-sm line-clamp-2">
                            {animeTitle}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                            {episodeTitle}
                        </p>
                    </div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                            >
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
        </Link>
    );
}

export function RecentCardSide({
    image,
    animeTitle,
    episodeTitle,
    avatar,
    href,
}: YouTubeCardProps) {
    return (
        <Link href={href}>
            <Card className="w-full max-w-sm overflow-hidden border-none rounded-none md:rounded-xl flex gap-2">
                <div className="relative aspect-video h-20">
                    <Image
                        src={image}
                        alt={animeTitle}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex">
                    <div className="flex-grow">
                        <h3 className="font-semibold text-sm line-clamp-2">
                            {animeTitle}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                            {episodeTitle}
                        </p>
                    </div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                            >
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
        </Link>
    );
}
