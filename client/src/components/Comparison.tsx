import { motion } from 'framer-motion';
import { Check, X as XIcon } from 'lucide-react';

const comparisonPoints = [
    {
        category: '가격 투명성',
        dalto: '정찰제 운영, 사전 안내 기준 정산',
        others: '현장 추가금, 가격 변동 가능성',
        daltoGood: true,
    },
    {
        category: '담당 시스템',
        dalto: '예약~퇴장까지 전담 책임 담당',
        others: '담당 부재 또는 중간 교체',
        daltoGood: true,
    },
    {
        category: '라인업 규모',
        dalto: '대형 업장, 매일 높은 출근율 유지',
        others: '출근 인원 불안정, 선택 폭 제한',
        daltoGood: true,
    },
    {
        category: '초이스 방식',
        dalto: '매직미러 + 쇼업, 부담 없는 진행',
        others: '강요 초이스, 불편한 분위기',
        daltoGood: true,
    },
    {
        category: '사전 브리핑',
        dalto: '방문 전 현재 상황 솔직 안내',
        others: '과장 홍보, 현장 가봐야 확인 가능',
        daltoGood: true,
    },
    {
        category: '연장 선택',
        dalto: '고객 자유 결정, 강요 없음',
        others: '연장 압박, 분위기상 거절 어려움',
        daltoGood: true,
    },
];

export default function Comparison() {
    return (
        <section id="comparison" aria-label="강남 하이퍼블릭 선택 기준 비교" className="py-24 bg-black border-t border-white/5">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-brand-accent font-bold tracking-widest uppercase mb-4 text-xs">Why Dalto</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" data-testid="heading-comparison">
                        강남 하이퍼블릭 선택 기준
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        강남 하이퍼블릭 가라오케를 처음 알아보시는 분들이 가장 많이 비교하는 항목을 정리했습니다.
                        강남 달토는 모든 항목에서 <span className="text-white font-medium">고객 중심 기준</span>을 적용합니다.
                    </p>
                </div>

                <div className="hidden md:block overflow-hidden rounded-2xl border border-white/10">
                    <div className="grid grid-cols-3 bg-white/5 text-sm font-bold text-gray-300">
                        <div className="p-5 border-r border-white/5">항목</div>
                        <div className="p-5 border-r border-white/5 text-brand-primary">강남 달토</div>
                        <div className="p-5 text-gray-500">일반 하이퍼블릭</div>
                    </div>
                    {comparisonPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="grid grid-cols-3 border-t border-white/5 hover:bg-white/[0.02] transition-colors"
                        >
                            <div className="p-5 border-r border-white/5 font-medium text-white text-sm">{point.category}</div>
                            <div className="p-5 border-r border-white/5 flex items-start gap-2 text-sm">
                                <Check className="text-brand-primary flex-shrink-0 mt-0.5" size={16} aria-hidden="true" />
                                <span className="text-gray-300">{point.dalto}</span>
                            </div>
                            <div className="p-5 flex items-start gap-2 text-sm">
                                <XIcon className="text-gray-600 flex-shrink-0 mt-0.5" size={16} aria-hidden="true" />
                                <span className="text-gray-500">{point.others}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="md:hidden space-y-4">
                    {comparisonPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white/[0.03] border border-white/10 rounded-xl p-5"
                        >
                            <p className="text-white font-bold text-sm mb-3">{point.category}</p>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <Check className="text-brand-primary flex-shrink-0 mt-0.5" size={14} aria-hidden="true" />
                                    <span className="text-gray-300 text-sm">달토: {point.dalto}</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <XIcon className="text-gray-600 flex-shrink-0 mt-0.5" size={14} aria-hidden="true" />
                                    <span className="text-gray-500 text-sm">일반: {point.others}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-500 text-sm">
                        강남 하이퍼블릭 가라오케 선택 시 가장 중요한 것은 <span className="text-white">사전 정보의 투명성</span>과 <span className="text-white">현장에서의 일관성</span>입니다.<br />
                        강남 달토는 이 두 가지를 가장 중요한 운영 기준으로 삼고 있습니다.
                    </p>
                </div>
            </div>
        </section>
    );
}
