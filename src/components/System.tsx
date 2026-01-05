import { motion } from 'framer-motion';

const steps = [
    {
        id: "01",
        title: '예약 문의',
        desc: '인원/시간/스타일 전달',
        detail: '방문 전 전화주시면 현재 상황을 솔직히 브리핑합니다.'
    },
    {
        id: "02",
        title: '입장 & 미팅',
        desc: '웨이팅 없이 즉시 안내',
        detail: '도착 즉시 룸으로 안내하며, 담당과 주대 재확인.'
    },
    {
        id: "03",
        title: '초이스',
        desc: '매직미러 & 쇼업',
        detail: '다양한 조의 매니저들을 직접 보고 선택합니다.'
    },
    {
        id: "04",
        title: '음주가무',
        desc: '즐거운 파티 진행',
        detail: '눈치보지 말고 편안하게 즐기시면 됩니다.'
    },
];

export default function System() {
    return (
        <section id="system" className="py-32 bg-brand-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20">
                    <h2 className="text-8xl font-black text-white/5 absolute -translate-y-1/2 select-none">SYSTEM</h2>
                    <h2 className="text-4xl font-bold text-white relative pl-2 border-l-4 border-brand-primary">
                        이용 안내 프로세스
                    </h2>
                    <p className="mt-4 text-gray-400 relative">처음 오셔도 자연스럽게.</p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
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
        </section>
    );
}
