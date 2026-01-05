import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
    bgImage?: string;
    strength?: number;
}

export default function ParallaxSection({ children, className = "", bgImage, strength = 200 }: Props) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            {bgImage && (
                <motion.div
                    style={{ y, backgroundImage: `url(${bgImage})` }}
                    className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center bg-no-repeat z-0 opacity-100"
                >
                    {/* Optional lightweight overlay if needed for text, but keeping it minimal as requested */}
                    <div className="absolute inset-0 bg-black/30" />
                </motion.div>
            )}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
}
