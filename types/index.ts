export interface Layout {
    children: React.ReactNode;
}

export interface AnimeResponse<T> {
    currentPage: number;
    hasNextPage: boolean;
    totalPages: number;
    totalResults: number;
    results: T[];
}

export interface Title {
    romaji: string;
    english?: string;
    native: string;
    userPreferred: string;
}

export interface Trailer {
    id: string;
    site: string;
    thumbnail: string;
}

export interface SearchAdvancedQuery {
    query?: string;
    type?: "ANIME" | "MANGA";
    page?: number;
    perPage?: number;
    season?: string;
    format?: string;
    sort?: string;
    genres?: string;
    year?: number;
    status?: string;
}

export interface StartDate {
    year: number;
    month: number;
    day: number;
}

export interface EndDate {
    year: any;
    month: any;
    day: any;
}

export interface NextAiringEpisode {
    airingTime: number;
    timeUntilAiring: number;
    episode: number;
}

export interface Character {
    id: number;
    role: string;
    name: Name;
    image: string;
    voiceActors: VoiceActor[];
}

export interface Name {
    first: string;
    last?: string;
    full: string;
    native?: string;
    userPreferred: string;
}

export interface VoiceActor {
    id: number;
    language: string;
    name: Name;
    image: string;
}

export interface Mappings {
    mal: number;
    anidb: number;
    kitsu: number;
    anilist: number;
    thetvdb: number;
    anisearch: number;
    livechart: number;
    "notify.moe": string;
    "anime-planet": string;
}

export interface Episode {
    id: string;
    title: string;
    description: string;
    number: number;
    image: string;
    airDate: string;
}

interface Plyr {
    main: string;
    backup: string;
}

export interface Source {
    url: string;
    isM3U8: boolean;
    quality: string;
}

export interface Subtitle {
    url: string;
    lang: string;
}

export interface Filter {
    label: string;
    value: string;
}

export interface Intro {
    start: number;
    end: number;
}

export interface Name {
    first: string;
    last?: string | undefined;
    full: string;
    native?: string | undefined;
    userPreferred: string;
    alternative: any[];
    alternativeSpoiler: string[];
}

export interface DateOfBirth {
    year: any;
    month: number;
    day: number;
}

export interface RecentAnime {
    id: string;
    malId: number;
    title: Title;
    image: string;
    rating?: number;
    color: string;
    episodeId: string;
    episodeTitle: string;
    episodeNumber: number;
    genres: string[];
    type: string;
}

export interface Anime {
    id: string;
    malId: number;
    title: Title;
    image: string;
    trailer: Trailer;
    description: string;
    status: string;
    cover: string;
    rating: number;
    releaseDate: number;
    color: string;
    genres: string[];
    totalEpisodes: number;
    duration: number;
    type: string;
}

export interface AnimeInfo {
    id: string;
    title: Title;
    malId: number;
    synonyms: string[];
    isLicensed: boolean;
    isAdult: boolean;
    countryOfOrigin: string;
    image: string;
    popularity: number;
    color: string;
    cover: string;
    description: string;
    status: string;
    releaseDate: number;
    startDate: StartDate;
    endDate: EndDate;
    nextAiringEpisode: NextAiringEpisode;
    totalEpisodes: number;
    currentEpisode: number;
    rating: number;
    duration: number;
    genres: string[];
    season: string;
    studios: string[];
    subOrDub: string;
    type: string;
    recommendations: Recommendation[];
    characters: Character[];
    relations: Relation[];
    mappings: Mappings;
    episodes: Episode[];
}

export interface Recommendation {
    id: number;
    malId: number;
    title: Title;
    status: string;
    episodes: number;
    image: string;
    cover: string;
    rating: number;
    type: string;
}

export interface Relation {
    id: number;
    relationType: string;
    malId?: number;
    title: Title;
    status: string;
    episodes?: number;
    image: string;
    color: string;
    type: string;
    cover: string;
    rating: number;
}

export interface AnimeEpisodeStreaming {
    headers: {
        Referer: string;
    };
    sources: Source[];
    download: string;
}
