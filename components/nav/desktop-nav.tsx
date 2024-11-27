"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    Bell,
    Home,
    Layers,
    LucideIcon,
    MenuIcon,
    Search,
    UserCircle,
} from "lucide-react";
import Link from "next/link";
import { Logo } from "../common/logo";
import { ModeToggle } from "../common/mode-toggle";
import { usePathname } from "next/navigation";

export const DesktopNav = () => {
    const pathname = usePathname();
    return (
        <div>
            <nav className="flex items-center justify-between gap-5 p-4">
                <div className="flex items-center">
                    <Menu />
                    <Logo />
                </div>
                <SearchBar />

                <div className="flex gap-5">
                    <ModeToggle />
                    <div className="bg-primary rounded-full h-8 w-8"></div>
                </div>
            </nav>

            {pathname === "/" && (
                <aside className="fixed left-0 w-20 space-y-5">
                    <NavItem Icon={Home} href="/" text="Home" />
                    <NavItem Icon={Layers} href="/" text="Subscriptions" />
                    <NavItem Icon={Bell} href="/" text="Notifications" />
                    <NavItem Icon={UserCircle} href="/" text="You" />
                </aside>
            )}
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
                <span className="text-xs">{text}</span>
            </Link>
        </Button>
    );
}

function SearchBar() {
    return (
        <div className="flex">
            <Input
                placeholder="Search"
                className="rounded-full rounded-r-none md:w-[30rem] h-10 md:text-base"
            />
            <Button
                className="h-10 rounded-full rounded-l-none"
                variant="secondary"
            >
                <Search className="h-20 w-20" />
            </Button>
        </div>
    );
}

function Menu() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="[&_svg]:size-6">
                    <MenuIcon />
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when
                        you're done.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="name"
                            value="Pedro Duarte"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input
                            id="username"
                            value="@peduarte"
                            className="col-span-3"
                        />
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
