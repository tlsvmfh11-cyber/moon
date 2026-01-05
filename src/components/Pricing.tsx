import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Pricing() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section id="pricing" ref={ref} className="min-h-screen relative flex items-center justify-center py-24 overflow-hidden">
            {/* Background with grainy noise overlay for texture */}
            <div className="absolute inset-0 bg-[#050505]">
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                {/* Abstract blobs */}
                <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[150px] animate-pulse delay-700" />
            </div>

            <div className="relative z-10 w-full max-w-5xl px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Text */}
                    <motion.div style={{ y }} className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                            강남 달토 가격 안내
                        </h2>
                        <div className="h-1 w-20 bg-white"></div>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                            강남 달토 가격은 ‘무조건 싸다’가 아니라<br />
                            <span className="text-white font-bold">합리적인 선에서 만족도가 높은 구조</span>를 기준으로 합니다.<br />
                            투명한 정찰제로 내상 없는 밤을 약속합니다.
                        </p>
                        <a href="tel:01023033778" className="inline-flex items-center gap-3 text-brand-primary font-bold text-lg hover:text-white transition-colors group">
                            상세 견적 문의하기
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </motion.div>

                    {/* Right Pricing Card - Glassmorphism */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Glowing border effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-3xl opacity-30 blur-lg"></div>

                        <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
                            <div className="text-center mb-10">
                                <p className="text-sm font-medium text-brand-accent tracking-widest uppercase mb-2">Signature Course</p>
                                <h3 className="text-3xl font-bold text-white">현금가/카드가 동일</h3>
                            </div>

                            <div className="space-y-6">
                                <div className="flex justify-between items-center py-4 border-b border-white/5 hover:bg-white/5 px-4 rounded-lg transition-colors">
                                    <span className="text-gray-300">기본 주대 (12년산)</span>
                                    <span className="text-white font-bold text-xl">문의</span>
                                </div>
                                <div className="flex justify-between items-center py-4 border-b border-white/5 hover:bg-white/5 px-4 rounded-lg transition-colors">
                                    <span className="text-gray-300">매니저 T/C</span>
                                    <span className="text-white font-bold text-xl">정찰제</span>
                                </div>
                                <div className="flex justify-between items-center py-4 border-b border-white/5 hover:bg-white/5 px-4 rounded-lg transition-colors">
                                    <span className="text-gray-300">룸 T/C</span>
                                    <span className="text-white font-bold text-xl">정찰제</span>
                                </div>
                            </div>

                            <div className="mt-10 pt-8 border-t border-white/10 text-center">
                                <p className="text-gray-500 text-sm mb-4">
                                    * 인원 및 시간대에 따라 변동될 수 있습니다.<br />
                                    전화 문의 시 가장 정확합니다.
                                </p>
                                <a href="tel:01023033778" className="block w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors">
                                    010.2303.3778
                                </a>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
