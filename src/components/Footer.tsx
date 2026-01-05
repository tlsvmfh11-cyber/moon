import { Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-brand-dark py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">강남 달토 예약 및 문의</h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                    현재 출근 상황, 주대, 대기 여부까지 솔직하게 말씀드립니다.<br />
                    처음 방문이든, 오랜만의 술자리든 편하게 문의 주세요.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <a
                        href="tel:01023033778"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary rounded-xl text-white font-bold hover:bg-brand-primary/90 transition-colors"
                    >
                        <Phone size={20} />
                        전화 문의 010.2303.3778
                    </a>
                    <a
                        href="https://t.me/hscompanyshs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-brand-gray border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-colors"
                    >
                        <MessageCircle size={20} />
                        텔레그램 @hscompanyshs
                    </a>
                </div>

                <div className="text-xs text-gray-600">
                    <p>© 2025 강남 달토 (달리는토끼). All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
