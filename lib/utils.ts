import { Title } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getAnimeTitle = (title: Title) => {
    return typeof title !== "string"
        ? title.english || title.native || title.romaji || title.userPreferred
        : title;
};
