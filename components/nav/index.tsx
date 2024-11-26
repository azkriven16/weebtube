"use client";

import React from "react";
import { DesktopNav } from "./desktop-nav";
import MobileNav from "./mobile-nav";
import useIsMobile from "@/hooks/is-mobile";

export const Nav = () => {
    const isMobile = useIsMobile();
    return <div>{isMobile ? <MobileNav /> : <DesktopNav />}</div>;
};
