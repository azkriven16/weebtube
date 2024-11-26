import React from "react";
import { Logo } from "../common/logo";
import { SearchIcon } from "lucide-react";
import { ModeToggle } from "../common/mode-toggle";

const MobileNav = () => {
    return (
        <nav className="flex items-center justify-between gap-5 p-4">
            <div className="flex items-center scale-75 -translate-x-10">
                <Logo />
            </div>

            <div className="flex items-center gap-5">
                <ModeToggle />
                <SearchIcon className="size-5" />
            </div>
        </nav>
    );
};

export default MobileNav;
