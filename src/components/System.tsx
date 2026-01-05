import { motion } from 'framer-motion';


const steps = [
    {
        id: "01",
        title: '사전 예약 및 문의',
        desc: '인원, 시간, 선호 스타일 전달',
        detail: '방문 전 전화주시면 현재 상황을 솔직히 브리핑합니다.'
    },
    {
        id: "02",
        title: '룸 안내 및 주류 선택',
        desc: '웨이팅 없이 즉시 안내',
        detail: '도착 후 바로 룸 입장, 주대 설명을 상세히 진행합니다.'
    },
    {
        id: "03",
        title: '초이스 진행',
        desc: '매직미러 & 쇼업',
        detail: '담당이 취향에 맞게 추천하며 부담 없는 초이스가 가능합니다.'
    },
    {
        id: "04",
        title: '이용 및 연장 선택',
        desc: '자유로운 연장 결정',
        detail: '필요 시 연장 여부는 고객이 자유롭게 선택합니다.'
    },
    {
        id: "05",
        title: '정산 및 마무리',
        desc: '깔끔한 정산',
        detail: '사전 안내된 기준 그대로 깔끔하게 정산합니다.'
    },
];

export default function System() {
    return (
        <section id="system" className="py-24 bg-black overflow-hidden border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16">
                    <span className="text-6xl md:text-8xl font-black text-white/5 absolute -translate-y-1/2 select-none" aria-hidden="true">SYSTEM</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white relative pl-2 border-l-4 border-brand-primary">
                        강남 달토 이용 안내 프로세스
                    </h2>
                    <p className="mt-4 text-gray-400 relative">처음 오셔도 자연스럽게, 복잡하지 않습니다.</p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />

                    <div className="grid md:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative z-10 group"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-[#111] border border-white/10 group-hover:border-brand-primary transition-colors flex items-center justify-center mb-8 shadow-lg z-10 mx-auto md:mx-0">
                                    <span className="text-2xl font-bold text-white group-hover:text-brand-primary transition-colors">{step.id}</span>
                                </div>

                                <div className="text-center md:text-left">
                                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-brand-primary font-medium text-sm mb-4">{step.desc}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed">{step.detail}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
