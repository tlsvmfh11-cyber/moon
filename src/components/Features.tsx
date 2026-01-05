import ParallaxSection from './ParallaxSection';
// import { motion } from 'framer-motion';

export default function Features() {
    return (
        <section id="features" className="bg-black">

            {/* Feature 1: Scale & Lineup - Already good, keeping similar but refining transparency if needed */}
            <ParallaxSection
                bgImage="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
                className="min-h-screen flex items-center"
            >
                <div className="max-w-7xl mx-auto px-4 w-full grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1" />
                    <div className="order-1 md:order-2 bg-gradient-to-l from-black via-black/80 to-transparent p-8 md:p-12 md:rounded-l-3xl">
                        <h3 className="text-brand-primary font-bold tracking-wider mb-2 uppercase text-sm">Massive Scale</h3>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-pretendard">
                            압도적인<br />
                            <span className="text-gray-400">출근율과 라인업</span>
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            달토는 대형 하이퍼블릭 가라오케로 매일 평균 150명 이상의 출근 인원을 자랑합니다.
                            선택의 폭이 압도적으로 넓습니다.
                        </p>
                        <ul className="space-y-4">
                            {[
                                '일 평균 150+ 출근',
                                '빠른 로테이션 시스템',
                                '다양한 스타일 매니저 보유'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white text-lg font-medium">
                                    <span className="text-brand-primary">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </ParallaxSection>

            {/* Feature 2: Honest System - Redesigned to remove "Card" feel */}
            <ParallaxSection
                bgImage="https://images.unsplash.com/photo-1582234386866-2391ce424a66?q=80&w=2068&auto=format&fit=crop"
                className="min-h-screen flex items-center"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
                    <div className="max-w-2xl">
                        <h3 className="text-white/60 font-medium tracking-[0.2em] mb-4 uppercase text-sm border-l-2 border-brand-accent pl-3">No Hidden Costs</h3>
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[0.9]">
                            투명한 정찰제<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">내상 없는 술자리</span>
                        </h2>

                        <p className="text-xl text-gray-300 leading-relaxed mb-12 border-l border-white/20 pl-6">
                            "현장에서의 갑작스러운 추가금?<br />
                            강남 달토에는 절대 없습니다."
                        </p>

                        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                            <div className="flex flex-col gap-2">
                                <span className="text-5xl font-bold text-gray-700">NO</span>
                                <span className="text-lg font-medium text-white">강제 추가금 요구</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-5xl font-bold text-brand-accent">YES</span>
                                <span className="text-lg font-medium text-white">사전 브리핑 준수</span>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxSection>

            {/* Feature 3: Full Care - Redesigned to smooth editorial style */}
            <ParallaxSection
                bgImage="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
                className="min-h-screen flex items-end md:items-center justify-center pb-20 md:pb-0"
            >
                {/* Cinematic gradient from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <div className="inline-block px-3 py-1 mb-6 rounded-full border border-white/30 text-white text-xs tracking-widest uppercase backdrop-blur-md">Premium Care Service</div>

                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                        책임지고 모십니다
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-light drop-shadow-lg opacity-90">
                        단순 입장 안내가 끝이 아닙니다.<br />
                        <span className="font-medium text-white">예약</span>부터 <span className="font-medium text-white">귀가</span>까지, 담당이 전 과정을 케어합니다.
                    </p>

                    <a href="tel:01023033778" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-transparent border-2 border-white/80 rounded-full hover:bg-white hover:text-black">
                        <span>담당 통화 연결하기</span>
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </ParallaxSection>

        </section>
    );
}
