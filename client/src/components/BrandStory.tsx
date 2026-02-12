import { motion } from 'framer-motion';
import { Shield, Users, RefreshCw, Award } from 'lucide-react';

const principles = [
    {
        icon: Shield,
        title: '정찰제 원칙',
        desc: '강남 달토는 처음부터 정찰제를 원칙으로 운영합니다. 현장에서 가격이 바뀌거나 추가금이 발생하는 일은 없습니다. 주대, 룸 TC, 매니저 TC 모두 사전 안내된 기준 그대로 정산됩니다.',
    },
    {
        icon: Users,
        title: '책임 담당제',
        desc: '예약 문의부터 퇴장까지 한 명의 담당이 끝까지 책임집니다. 중간에 담당이 바뀌거나 떠넘기는 구조가 아닌, 고객 한 팀에 전담 매니저가 배정되는 시스템입니다.',
    },
    {
        icon: RefreshCw,
        title: '재방문 중심 운영',
        desc: '강남 달토는 한 번 오고 끝나는 곳이 아닙니다. 재방문율이 높은 이유는 매번 같은 기준, 같은 서비스를 유지하기 때문입니다. 일회성 매출이 아닌 신뢰 기반 운영을 지향합니다.',
    },
    {
        icon: Award,
        title: '솔직한 브리핑',
        desc: '컨디션이 좋지 않은 날엔 솔직히 말씀드립니다. 과장된 홍보로 기대치를 높이고 실망시키는 방식은 강남 달토의 운영 방침에 맞지 않습니다.',
    },
];

export default function BrandStory() {
    return (
        <section id="brand" aria-label="강남 달토 운영 원칙" className="py-24 bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-brand-primary font-bold tracking-widest uppercase mb-4 text-xs">Our Principles</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" data-testid="heading-principles">
                        강남 달토 운영 원칙
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        강남 하이퍼블릭 가라오케 업계에서 <span className="text-white font-medium">정직 1위</span>를 자부하는 이유,
                        달리는토끼가 지켜온 4가지 운영 원칙입니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {principles.map((item, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-brand-primary/30 transition-colors"
                        >
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                                    <item.icon className="text-brand-primary" size={22} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
                        강남 달토(달리는토끼)는 2025년 현재까지 이 원칙을 유지하며 강남 하이퍼블릭 가라오케 업계에서 신뢰를 쌓아왔습니다.
                        처음 방문하시는 분도, 다시 찾아주시는 분도 같은 기준으로 모십니다.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
