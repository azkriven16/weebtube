import { useState, useEffect } from "react";

/**
 * A custom React hook to determine if the screen width is considered "mobile".
 * @param breakpoint - The maximum width (in pixels) for a screen to be considered mobile.
 * @returns `true` if the screen width is below the breakpoint, `false` otherwise.
 */
const useIsMobile = (breakpoint: number = 900): boolean => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const updateIsMobile = () => {
            setIsMobile(window.innerWidth <= breakpoint);
        };

        // Initial check
        updateIsMobile();

        // Add event listener to handle resize
        window.addEventListener("resize", updateIsMobile);

        // Cleanup on unmount
        return () => {
            window.removeEventListener("resize", updateIsMobile);
        };
    }, [breakpoint]);

    return isMobile;
};

export default useIsMobile;
