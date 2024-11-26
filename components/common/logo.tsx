import { Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export const Logo = () => {
    return (
        <Button asChild variant="ghost" className="[&_svg]:size-10">
            <Link href="/">
                <Youtube className="fill-red-500 text-foreground" />
                <span className="font-semibold text-2xl">WeebTube</span>
            </Link>
        </Button>
    );
};
