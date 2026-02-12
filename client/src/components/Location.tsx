import { motion } from 'framer-motion';
import { MapPin, Train, Car, Clock } from 'lucide-react';

const accessInfo = [
    {
        icon: Train,
        title: '지하철',
        desc: '강남역, 신논현역에서 도보 이동 가능. 역삼역에서도 가까운 거리에 위치해 있어 대중교통 이용이 편리합니다.',
    },
    {
        icon: Car,
        title: '주차 안내',
        desc: '인근 주차장 이용 가능하며, 발렛 서비스에 대한 안내는 전화 문의 시 상세히 안내해 드립니다.',
    },
    {
        icon: Clock,
        title: '영업시간',
        desc: '매일 저녁부터 새벽까지 운영합니다. 정확한 영업시간 및 당일 컨디션은 전화 문의 시 안내받으실 수 있습니다.',
    },
    {
        icon: MapPin,
        title: '정확한 위치',
        desc: '서울 강남구 소재. 정확한 주소 및 약도는 전화 문의(010-2303-3778) 시 안내해 드립니다.',
    },
];

export default function Location() {
    return (
        <section id="location" aria-label="강남 달토 위치 및 오시는 길" className="py-24 bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-brand-primary font-bold tracking-widest uppercase mb-4 text-xs">Location & Access</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" data-testid="heading-location">
                        강남 달토 위치 안내 · 오시는 길
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        강남 달토(달리는토끼)는 <span className="text-white font-medium">서울 강남구</span> 중심부에 위치해 있습니다.
                        강남역, 신논현역 인근으로 교통이 편리합니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {accessInfo.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-5 bg-white/[0.03] border border-white/10 rounded-2xl p-7 hover:border-brand-primary/20 transition-colors"
                        >
                            <div className="w-11 h-11 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                                <item.icon className="text-brand-primary" size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 border border-white/10 rounded-2xl p-8 text-center"
                >
                    <p className="text-white font-bold text-lg mb-2">방문 전 전화 한 통이면 충분합니다</p>
                    <p className="text-gray-400 text-sm mb-6">
                        현재 출근 상황, 대기 여부, 정확한 위치 안내까지 한 번에 확인하실 수 있습니다.<br />
                        강남 하이퍼블릭 가라오케 방문이 처음이시라면 전화 상담을 추천드립니다.
                    </p>
                    <a
                        href="tel:01023033778"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary rounded-xl text-white font-bold hover:bg-brand-primary/90 transition-colors"
                        aria-label="강남 달토 위치 문의 전화 010-2303-3778"
                        data-testid="call-location"
                    >
                        <MapPin size={18} aria-hidden="true" />
                        위치 안내 받기 010.2303.3778
                    </a>
                </motion.div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 text-xs leading-relaxed max-w-xl mx-auto">
                        강남 달토는 강남역 주변, 신논현역 인근, 역삼동 일대에서 접근이 용이한 강남 하이퍼블릭 가라오케입니다.
                        강남 2차 장소, 강남 술자리 장소를 찾고 계신 분들께 최적의 위치에 자리하고 있습니다.
                    </p>
                </div>
            </div>
        </section>
    );
}
