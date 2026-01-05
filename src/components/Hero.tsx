import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
    const ref = useRef(null);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <div ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Parallax Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 w-full h-[120%] -top-[10%] bg-[url('/assets/intro.jpg')] bg-cover bg-center"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <div className="mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-sm font-medium tracking-wide text-brand-primary uppercase">
                        Hyper Public Karaoke
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8 mix-blend-overlay opacity-90">
                        <span className="sr-only">강남 달토 - 하이퍼블릭 가라오케 1위</span>
                        GANGNAM<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-white to-brand-accent">DALTO</span>
                    </h1>

                    <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-300 font-light tracking-wide leading-relaxed mb-12">
                        <strong>강남 달토</strong>는 시스템을 속이지 않는 정직 1위 <strong>하이퍼블릭 가라오케</strong>입니다.<br />
                        내상 없는 밤을 약속합니다.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                        <a
                            href="tel:01023033778"
                            className="px-10 py-5 bg-brand-primary hover:bg-brand-primary/90 text-white text-lg font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(225,29,72,0.4)]"
                        >
                            예약 문의하기
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <ArrowDown size={20} />
            </motion.div>
        </div>
    );
}
