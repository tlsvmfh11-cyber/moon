import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Pricing() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section id="pricing" ref={ref} aria-label="강남 달토 가격 안내" className="min-h-screen relative flex items-center justify-center py-24 overflow-hidden">
            <div className="absolute inset-0 bg-[#050505]">
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" aria-hidden="true"></div>
                <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[150px] animate-pulse" aria-hidden="true" />
                <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[150px] animate-pulse delay-700" aria-hidden="true" />
            </div>

            <div className="relative z-10 w-full max-w-5xl px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <motion.div style={{ y }} className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                            강남 달토 가격 안내
                        </h2>
                        <div className="h-1 w-20 bg-white" aria-hidden="true"></div>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                            강남 달토 가격은 '무조건 싸다'가 아니라<br />
                            <span className="text-white font-bold">합리적인 선에서 만족도가 높은 구조</span>를 기준으로 합니다.<br />
                            투명한 정찰제로 내상 없는 밤을 약속합니다.
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                            강남 하이퍼블릭 가격, 강남 가라오케 가격이 궁금하시다면 전화 한 통으로 주대, 룸 TC, 매니저 TC까지 상세하게 안내받으실 수 있습니다. 현금가와 카드가 동일하며 현장 추가금은 없습니다.
                        </p>
                        <a href="tel:01023033778" className="inline-flex items-center gap-3 text-brand-primary font-bold text-lg hover:text-white transition-colors group" aria-label="강남 달토 상세 견적 문의하기 010-2303-3778" data-testid="call-estimate">
                            상세 견적 문의하기
                            <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-3xl opacity-30 blur-lg" aria-hidden="true"></div>

                        <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
                            <div className="text-center mb-10">
                                <p className="text-sm font-medium text-brand-accent tracking-widest uppercase mb-2">Signature Course</p>
                                <h3 className="text-3xl font-bold text-white">현금가/카드가 동일</h3>
                            </div>

                            <dl className="space-y-6">
                                <div className="flex justify-between items-center py-4 border-b border-white/5 hover:bg-white/5 px-4 rounded-lg transition-colors">
                                    <dt className="text-gray-300">기본 주대 (12년산)</dt>
                                    <dd className="text-white font-bold text-xl">문의</dd>
                                </div>
                                <div className="flex justify-between items-center py-4 border-b border-white/5 hover:bg-white/5 px-4 rounded-lg transition-colors">
                                    <dt className="text-gray-300">매니저 T/C</dt>
                                    <dd className="text-white font-bold text-xl">정찰제</dd>
                                </div>
                                <div className="flex justify-between items-center py-4 border-b border-white/5 hover:bg-white/5 px-4 rounded-lg transition-colors">
                                    <dt className="text-gray-300">룸 T/C</dt>
                                    <dd className="text-white font-bold text-xl">정찰제</dd>
                                </div>
                            </dl>

                            <div className="mt-10 pt-8 border-t border-white/10 text-center">
                                <p className="text-gray-500 text-sm mb-4">
                                    * 인원 및 시간대에 따라 변동될 수 있습니다.<br />
                                    전화 문의 시 가장 정확합니다.
                                </p>
                                <a href="tel:01023033778" className="block w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors" aria-label="강남 달토 가격 문의 전화 010-2303-3778" data-testid="call-price">
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
