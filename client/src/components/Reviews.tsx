import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const reviews = [
    {
        text: '처음 강남 하이퍼블릭 갔는데 담당분이 처음부터 끝까지 신경 써주셔서 편했습니다. 주대도 미리 설명해주시고 추가금 없이 깔끔하게 끝났어요.',
        tag: '첫 방문 고객',
    },
    {
        text: '강남에서 여러 곳 다녀봤는데 달토가 가격 대비 라인업이 좋습니다. 무엇보다 정찰제라서 내상 없이 즐길 수 있는 게 가장 큰 장점입니다.',
        tag: '재방문 고객',
    },
    {
        text: '혼자 갔는데도 전혀 불편하지 않았습니다. 1인 방문도 많다고 하시더라고요. 시스템이 잘 돼 있어서 처음이라도 어색하지 않았어요.',
        tag: '1인 방문 고객',
    },
    {
        text: '회식 2차로 갔는데 단체도 수용 가능하고 룸도 넓어서 좋았습니다. 사전에 전화로 인원수 말씀드리니까 알아서 세팅해주셨어요.',
        tag: '단체 방문 고객',
    },
    {
        text: '다른 데는 전화하면 무조건 오라고 하는데 달토는 오늘 컨디션 솔직히 말해줘서 오히려 신뢰가 갔습니다. 다음에 다시 갈 예정입니다.',
        tag: '솔직 브리핑 경험',
    },
    {
        text: '강남 가라오케 가격이 걱정됐는데 전화 상담 때 주대, TC 다 알려주시고 현장에서도 안내받은 그대로 정산돼서 만족했습니다.',
        tag: '가격 투명성 경험',
    },
];

export default function Reviews() {
    return (
        <section id="reviews" aria-label="강남 달토 고객 후기" className="py-24 bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-brand-accent font-bold tracking-widest uppercase mb-4 text-xs">Customer Voice</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" data-testid="heading-reviews">
                        강남 달토 고객 후기
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        강남 달토(달리는토끼)를 직접 방문하신 고객분들의 실제 후기입니다.
                        재방문율이 높은 이유를 확인해 보세요.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="bg-white/[0.03] border border-white/10 rounded-2xl p-7 hover:border-white/20 transition-colors flex flex-col"
                        >
                            <MessageSquare className="text-brand-primary/40 mb-4 flex-shrink-0" size={24} aria-hidden="true" />
                            <blockquote className="text-gray-300 text-sm leading-relaxed mb-5 flex-1">
                                "{review.text}"
                            </blockquote>
                            <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                                <span className="text-xs text-brand-primary font-medium px-2.5 py-1 bg-brand-primary/10 rounded-full">{review.tag}</span>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
                        강남 달토는 고객 후기를 바탕으로 서비스를 지속적으로 개선하고 있습니다.
                        강남 하이퍼블릭 가라오케, 강남 가라오케 후기가 궁금하시다면 직접 전화 문의 후 방문해 보시길 추천드립니다.
                    </p>
                </div>
            </div>
        </section>
    );
}
