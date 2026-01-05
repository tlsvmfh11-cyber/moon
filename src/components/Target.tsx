import { User, DollarSign, Heart, GlassWater } from 'lucide-react';

const targets = [
    { icon: DollarSign, text: '가격과 주대를 미리 알고 싶으신 분' },
    { icon: GlassWater, text: '가성비 있는 술자리를 원하시는 분' },
    { icon: Heart, text: '편안한 분위기를 선호하시는 분' },
    { icon: User, text: '혼자 방문이 걱정되시는 분' },
];

export default function Target() {
    return (
        <section className="py-24 bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Who is it for?</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
                    {targets.map((item, index) => (
                        <div
                            key={index}
                            className="bg-black p-8 flex flex-col items-center text-center gap-4 hover:bg-white/5 transition-colors group aspect-square justify-center"
                        >
                            <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <item.icon className="text-white group-hover:text-brand-primary" size={20} />
                            </div>
                            <span className="text-gray-400 font-medium group-hover:text-white transition-colors">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
