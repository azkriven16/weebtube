import { AnimeResponse, RecentAnime } from "@/types";
import axios from "axios";

export const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export const default_provider = "gogoanime";

export const getRecentAnime = async (limit: number = 20, page: number = 1) => {
    const response = await client.get<AnimeResponse<RecentAnime>>(
        "/recent-episodes",
        {
            params: {
                page: page,
                perPage: limit,
                provider: default_provider,
            },
        }
    );
    return response.data.results;
};
