import Link from "next/link";
import { Button } from "../ui/button";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export const Tags = () => {
    const tags = [
        { href: "/", text: "Trending" },
        { href: "/", text: "Latest" },
        { href: "/", text: "Popular" },
        { href: "/", text: "Attack on Titan" },
        { href: "/", text: "Full Metal Alchemist" },
        { href: "/", text: "Demon Slayer" },
        { href: "/", text: "Naruto" },
        { href: "/", text: "One Piece" },
        { href: "/", text: "Jujutsu Kaisen" },
        { href: "/", text: "Hunter x Hunter" },
        { href: "/", text: "Bleach" },
        { href: "/", text: "Tokyo Ghoul" },
        { href: "/", text: "My Hero Academia" },
        { href: "/", text: "Death Note" },
        { href: "/", text: "Dragon Ball Z" },
        { href: "/", text: "Sword Art Online" },
        { href: "/", text: "Chainsaw Man" },
        { href: "/", text: "Vinland Saga" },
    ];
    return (
        <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex flex-wrap gap-2 w-max pb-4">
                {tags.map((tag, index) => (
                    <TagButton key={index} href={tag.href} text={tag.text} />
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
};

function TagButton({ href, text }: { href: string; text: string }) {
    return (
        <Button asChild variant="secondary">
            <Link href={href}>{text}</Link>
        </Button>
    );
}
