import { motion } from 'framer-motion';

export default function Intro() {
    return (
        <section className="py-32 bg-black flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-brand-primary font-bold tracking-widest uppercase mb-6 text-sm">Our Philosophy</p>
                    <h2 className="text-3xl md:text-5xl font-medium text-white leading-snug font-pretendard mb-12">
                        강남 달토 철학 - <span className="text-white font-bold border-b-2 border-brand-primary">가격, 주대, 내상</span> 걱정 없는 술자리
                    </h2>
                    <p className="text-2xl md:text-3xl text-gray-300 leading-snug mb-8">
                        "강남에서 술자리를 알아볼 때<br />
                        가장 많이 걱정하는 부분을 해결합니다."
                    </p>

                    <div className="space-y-6 text-xl text-gray-400 font-light leading-relaxed">
                        <p>
                            강남 달토는 이런 불안부터 줄이기 위해 시작된<br className="hidden md:block" />
                            <span className="text-white font-medium">하이퍼블릭 가라오케</span>입니다.
                        </p>
                        <p>
                            과장된 홍보나 애매한 표현 없이<br />
                            이용 방식·가격 구조·주대 기준을 미리 설명하고,<br />
                            고객 상황에 맞지 않으면 무리하게 진행하지 않습니다.
                        </p>
                    </div>

                    <div className="h-20 w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent mx-auto my-12"></div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl md:text-3xl font-medium text-white italic"
                    >
                        "달토는 한 번 오고 끝나는 곳이 아니라,<br />
                        편하게 다시 찾을 수 있는 술자리를 목표로 운영하고 있습니다."
                    </motion.p>

                </motion.div>
            </div>
        </section>
    );
}
