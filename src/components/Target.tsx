import { User, DollarSign, Heart, GlassWater } from 'lucide-react';

const targets = [
    { icon: DollarSign, text: '가격과 주대를 미리 알고 이용하고 싶은 분' },
    { icon: GlassWater, text: '쩜오·텐프로 대비 부담은 줄이고 싶은 분' },
    { icon: Heart, text: '초이스, 시스템이 처음이라 걱정되는 분' },
    { icon: User, text: '혼자 방문하거나 소규모 모임 장소를 찾는 분' },
];

export default function Target() {
    return (
        <section className="py-24 bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-brand-primary font-bold tracking-widest uppercase mb-4 text-xs">Recommended For</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">강남 달토 추천 대상 - 이런 분들께 추천합니다</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden mb-12">
                    {targets.map((item, index) => (
                        <div
                            key={index}
                            className="bg-black p-8 flex flex-col items-center text-center gap-4 hover:bg-white/5 transition-colors group aspect-square justify-center"
                        >
                            <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <item.icon className="text-white group-hover:text-brand-primary" size={20} />
                            </div>
                            <span className="text-gray-400 font-medium group-hover:text-white transition-colors break-keep">{item.text}</span>
                        </div>
                    ))}
                </div>

                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-xl text-white font-medium mb-2">"내상 없는 술자리를 원하시는 분"</p>
                    <p className="text-gray-400">
                        특정 분위기를 강요하지 않고<br />
                        편하게 즐길 수 있는 술자리를 찾는 분들께 잘 맞습니다.
                    </p>
                </div>
            </div>
        </section>
    );
}
