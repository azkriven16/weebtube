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
import { MenuIcon, Search } from "lucide-react";
import { Logo } from "../common/logo";
import { ModeToggle } from "../common/mode-toggle";

export const DesktopNav = () => {
    return (
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
    );
};

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
