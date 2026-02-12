import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    { q: '혼자 방문해도 가능한가요?', a: '가능합니다. 실제로 1인 방문 고객도 많으며, 담당이 처음부터 끝까지 안내합니다. 혼자 오셔도 편하게 즐기실 수 있도록 세팅해 드립니다.' },
    { q: '강남 달리는토끼랑 달토는 다른 곳인가요?', a: '동일 업장으로 불리며, \'달토\', \'달리는토끼\' 모두 같은 의미로 사용됩니다. 강남 달토가 줄임말이고, 정식 명칭은 달리는토끼입니다.' },
    { q: '처음 가도 부담 없을까요?', a: '시스템, 가격, 주대 모두 사전 설명 후 진행되기 때문에 부담 없이 이용 가능합니다. 하이퍼블릭 가라오케가 처음이신 분들도 담당이 전 과정을 안내합니다.' },
    { q: '강남 달토 가격은 얼마인가요?', a: '강남 달토는 투명한 정찰제로 운영되며 현금가와 카드가가 동일합니다. 인원 및 시간대에 따라 변동될 수 있으니 전화 문의(010-2303-3778) 시 가장 정확한 안내를 받으실 수 있습니다.' },
    { q: '강남 달토는 어디에 있나요?', a: '강남 달토(달리는토끼)는 서울 강남구에 위치한 하이퍼블릭 가라오케입니다. 강남역, 신논현역 인근으로 교통이 편리합니다. 정확한 위치는 전화 문의(010-2303-3778) 시 안내해 드립니다.' },
    { q: '당일 예약도 가능한가요?', a: '당일 예약도 가능합니다. 다만 주말이나 금요일 저녁 등 피크 시간대에는 대기가 발생할 수 있으므로 사전 예약을 추천드립니다. 전화 한 통이면 현재 대기 상황을 바로 확인하실 수 있습니다.' },
    { q: '강남 하이퍼블릭과 쩜오, 텐프로의 차이가 뭔가요?', a: '하이퍼블릭 가라오케는 가라오케(노래방) 형태의 프라이빗 룸에서 매니저와 함께 즐기는 시스템입니다. 쩜오(0.5)나 텐프로(10%)와는 운영 방식, 가격 구조, 분위기가 다릅니다. 강남 달토는 하이퍼블릭 가라오케로 정찰제 기반의 투명한 시스템을 운영합니다.' },
    { q: '초이스는 어떻게 진행되나요?', a: '강남 달토의 초이스는 매직미러와 쇼업 방식으로 진행됩니다. 담당이 고객의 선호 스타일을 파악한 후 추천하며, 부담 없는 분위기에서 자연스럽게 진행됩니다. 강요는 절대 없습니다.' },
    { q: '단체(회식) 방문도 가능한가요?', a: '가능합니다. 소규모 모임부터 10인 이상 단체까지 수용 가능하며, 사전에 인원수를 알려주시면 룸과 세팅을 미리 준비해 드립니다. 회식 2차 장소로도 많이 이용하십니다.' },
    { q: '주차가 가능한가요?', a: '인근 주차장 이용이 가능하며, 주차 및 발렛 안내는 전화 문의 시 상세하게 안내해 드립니다.' },
    { q: '카드 결제가 가능한가요?', a: '가능합니다. 강남 달토는 현금가와 카드가가 동일하며, 카드 결제 시에도 추가 비용이 발생하지 않습니다.' },
    { q: '영업시간이 어떻게 되나요?', a: '강남 달토는 매일 저녁부터 새벽까지 운영됩니다. 정확한 영업시간 및 당일 운영 현황은 전화 문의(010-2303-3778)로 확인하실 수 있습니다.' },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" aria-label="강남 달토 자주 묻는 질문" className="py-24 bg-black">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p className="text-brand-primary font-bold tracking-widest uppercase mb-4 text-xs">FAQ</p>
                    <h2 className="text-3xl font-bold text-white mb-4" data-testid="heading-faq">강남 달토 자주 묻는 질문</h2>
                    <p className="text-gray-400">
                        강남 하이퍼블릭 가라오케, 강남 달토에 대해 자주 묻는 질문들을 모았습니다.
                    </p>
                </div>

                <div className="space-y-3" role="list">
                    {faqs.map((faq, index) => (
                        <article key={index} className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.02]" role="listitem" itemScope itemType="https://schema.org/Question">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 text-left"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                                data-testid={`button-faq-${index}`}
                            >
                                <span className="text-base font-bold text-white pr-4" itemProp="name">Q. {faq.q}</span>
                                <ChevronDown
                                    className={`text-gray-400 transition-transform flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                                    size={18}
                                    aria-hidden="true"
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        id={`faq-answer-${index}`}
                                        initial={{ height: 0 }}
                                        animate={{ height: 'auto' }}
                                        exit={{ height: 0 }}
                                        className="overflow-hidden"
                                        itemScope
                                        itemType="https://schema.org/Answer"
                                        itemProp="acceptedAnswer"
                                    >
                                        <div className="p-5 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5" itemProp="text">
                                            A. {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
