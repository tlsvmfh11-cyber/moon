import ParallaxSection from './ParallaxSection';
// import { motion } from 'framer-motion';

export default function Features() {
    return (
        <section id="features" className="bg-black">
            <h2 className="sr-only">강남 달토 특징 - 라인업, 투명한 가격, 책임 서비스</h2>

            {/* Feature 1: Scale & Lineup (달토 라인업.jpg) */}
            <ParallaxSection
                bgImage="/assets/lineup.jpg"
                className="min-h-screen flex items-center"
            >
                <div className="max-w-7xl mx-auto px-4 w-full grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1" />
                    <div className="order-1 md:order-2 bg-gradient-to-l from-black via-black/50 to-transparent p-8 md:p-12 md:rounded-l-3xl">
                        <p className="text-brand-primary font-bold tracking-wider mb-2 uppercase text-sm">Massive Scale</p>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-pretendard">
                            강남 달토 라인업<br />
                            <span className="text-gray-400">압도적인 출근율</span>
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            강남 달토는 대형 하이퍼블릭 가라오케로 매일 출근 인원·라인업·회전율에서 차이가 납니다.
                            ‘오늘 컨디션이 애매한데 그냥 가볼까?’가 아니라 미리 상황을 알고 결정할 수 있습니다.
                        </p>
                        <ul className="space-y-4">
                            {[
                                '하루 평균 높은 출근율로 선택 폭이 넓음',
                                '대기 없는 빠른 로테이션 시스템',
                                '다양한 스타일의 매니저 구성으로 취향 대응 가능'
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

            {/* Feature 2: Honest System (달토 내상없는술자리.jpg) */}
            <ParallaxSection
                bgImage="/assets/honesty.jpg"
                className="min-h-screen flex items-center"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
                    <div className="max-w-2xl text-left">
                        <p className="text-white/60 font-medium tracking-[0.2em] mb-4 uppercase text-sm border-l-2 border-brand-accent pl-3">No Hidden Costs</p>
                        <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                            강남 달토 가격<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">투명한 정찰제</span><br />
                            <span className="text-gray-400 text-3xl md:text-4xl">내상 없는 술자리</span>
                        </h3>

                        <p className="text-xl text-gray-300 leading-relaxed mb-12 border-l border-white/20 pl-6">
                            "현장에서의 갑작스러운 추가금이나 강요는 없습니다.<br />
                            가격과 주대를 숨기지 않습니다."
                        </p>

                        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                            <div className="flex flex-col gap-2">
                                <span className="text-5xl font-bold text-gray-700">NO</span>
                                <span className="text-lg font-medium text-white">현장 추가금·강요</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-5xl font-bold text-brand-accent">YES</span>
                                <span className="text-lg font-medium text-white">사전 안내 기준 정산</span>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxSection>

            {/* Feature 3: Full Care (달토 책임지고모십니다.jpg) */}
            <ParallaxSection
                bgImage="/assets/care.jpg"
                className="min-h-screen flex items-end md:items-center justify-center pb-20 md:pb-0"
            >
                {/* Cinematic gradient from bottom - reduced for card visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />

                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <div className="bg-black/70 backdrop-blur-md p-10 md:p-16 rounded-[2rem] border border-white/10 shadow-2xl">
                        <p className="inline-block px-3 py-1 mb-6 rounded-full border border-white/30 text-white text-xs tracking-widest uppercase backdrop-blur-md">Premium Care Service</p>

                        <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
                            강남 달토 서비스<br />
                            <span className="text-gray-300">책임지고 모십니다</span>
                        </h3>

                        <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-light opacity-90">
                            담당이 처음부터 끝까지 책임지고 진행합니다.<br />
                            <span className="font-medium text-white">편하게 다시 찾을 수 있는 술자리</span>를 목표로 합니다.
                        </p>

                        <a href="tel:01023033778" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-transparent border-2 border-white/80 rounded-full hover:bg-white hover:text-black">
                            <span>담당 통화 연결하기</span>
                            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>
                </div>
            </ParallaxSection>

        </section>
    );
}
