import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    { q: '혼자 방문해도 가능한가요?', a: '가능합니다. 실제로 1인 방문 고객도 많으며, 담당이 처음부터 끝까지 안내합니다.' },
    { q: '강남 달리는토끼랑 달토는 다른 곳인가요?', a: '동일 업장으로 불리며, ‘달토’, ‘달리는토끼’ 모두 같은 의미로 사용됩니다.' },
    { q: '처음 가도 부담 없을까요?', a: '시스템, 가격, 주대 모두 사전 설명 후 진행되기 때문에 부담 없이 이용 가능합니다.' },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-black">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white text-center mb-12">강남 달토 자주 묻는 질문 (FAQ)</h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="text-lg font-bold text-white">Q. {faq.q}</span>
                                <ChevronDown
                                    className={`text-gray-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: 'auto' }}
                                        exit={{ height: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                                            A. {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
