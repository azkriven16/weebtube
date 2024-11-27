import { Bell, Home, Layers, LucideIcon, SearchIcon, User } from "lucide-react";
import Link from "next/link";
import { Logo } from "../common/logo";
import { ModeToggle } from "../common/mode-toggle";
import { Button } from "../ui/button";

export const MobileNav = () => {
    return (
        <div>
            <nav className="flex items-center justify-between gap-5 p-4 sticky">
                <div className="flex items-center scale-75 -translate-x-10">
                    <Logo />
                </div>

                <div className="flex items-center gap-5">
                    <ModeToggle />
                    <SearchIcon className="size-5" />
                </div>
            </nav>

            <div className="fixed bottom-0 border-t border-secondary w-full flex z-10 bg-background">
                <NavItem Icon={Home} href="/" text="Home" />
                <NavItem Icon={Layers} href="/" text="Subscriptions" />
                <NavItem Icon={Bell} href="/" text="Notifications" />
                <NavItem Icon={User} href="/" text="You" />
            </div>
        </div>
    );
};

function NavItem({
    href,
    text,
    Icon,
}: {
    href: string;
    text: string;
    Icon: LucideIcon;
}) {
    return (
        <Button
            asChild
            variant="ghost"
            className="flex-col w-full h-full rounded-none [&_svg]:size-5"
        >
            <Link href={href}>
                <Icon />
                <span className="text-sm">{text}</span>
            </Link>
        </Button>
    );
}
