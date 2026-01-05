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
                    <h2 className="text-3xl md:text-5xl font-medium text-white leading-snug font-pretendard">
                        "강남에서 술자리를 알아볼 때<br />
                        가장 많이 걱정하는 부분은<br />
                        <span className="text-white font-bold">가격, 주대, 내상</span>입니다."
                    </h2>
                    <div className="h-20 w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent mx-auto my-12"></div>
                    <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                        달토는 한 번 오고 끝나는 곳이 아니라,<br />
                        <span className="text-white font-medium">편하게 다시 찾을 수 있는 술자리</span>를<br />
                        목표로 운영하고 있습니다.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
