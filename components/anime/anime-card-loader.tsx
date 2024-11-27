import { Skeleton } from "@/components/ui/skeleton";

export const AnimeCardLoaderMain = () => {
    return (
        <div className="space-y-3">
            <Skeleton className="h-[180px] w-full rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
            </div>
        </div>
    );
};

export const AnimeCardLoaderSide = () => {
    return (
        <div className="flex gap-10">
            <Skeleton className="h-28 w-full rounded-xl" />
        </div>
    );
};
