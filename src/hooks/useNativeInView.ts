import React, { useState, useEffect } from 'react';

export function useNativeInView(ref: React.RefObject<HTMLElement | null>, options = { margin: "0px", once: false }) {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                if (options.once && ref.current) {
                    observer.unobserve(ref.current);
                }
            } else if (!options.once) {
                setIsInView(false);
            }
        }, { rootMargin: options.margin });

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref, options.margin, options.once]);

    return isInView;
}
