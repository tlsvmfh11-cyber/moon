import { Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-brand-dark py-12 border-t border-white/10" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">강남 달토 예약 및 문의</h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                    현재 출근 상황, 주대, 대기 여부까지 솔직하게 말씀드립니다.<br />
                    처음 방문이든, 오랜만의 술자리든 편하게 문의 주세요.
                </p>

                <nav className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12" aria-label="문의 방법">
                    <a
                        href="tel:01023033778"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary rounded-xl text-white font-bold hover:bg-brand-primary/90 transition-colors"
                        aria-label="강남 달토 전화 문의 010-2303-3778"
                        data-testid="link-footer-phone"
                    >
                        <Phone size={20} aria-hidden="true" />
                        전화 문의 010.2303.3778
                    </a>
                    <a
                        href="https://t.me/hscompanyshs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-brand-gray border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-colors"
                        aria-label="강남 달토 텔레그램 문의"
                        data-testid="link-footer-telegram"
                    >
                        <MessageCircle size={20} aria-hidden="true" />
                        텔레그램 @hscompanyshs
                    </a>
                </nav>

                <nav className="mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500" aria-label="페이지 내 바로가기">
                    <a href="#intro" className="hover:text-gray-300 transition-colors" data-testid="link-footer-intro">소개</a>
                    <a href="#brand" className="hover:text-gray-300 transition-colors" data-testid="link-footer-brand">운영 원칙</a>
                    <a href="#features" className="hover:text-gray-300 transition-colors" data-testid="link-footer-features">특징</a>
                    <a href="#comparison" className="hover:text-gray-300 transition-colors" data-testid="link-footer-comparison">비교</a>
                    <a href="#system" className="hover:text-gray-300 transition-colors" data-testid="link-footer-system">시스템</a>
                    <a href="#pricing" className="hover:text-gray-300 transition-colors" data-testid="link-footer-pricing">가격</a>
                    <a href="#location" className="hover:text-gray-300 transition-colors" data-testid="link-footer-location">위치</a>
                    <a href="#reviews" className="hover:text-gray-300 transition-colors" data-testid="link-footer-reviews">후기</a>
                    <a href="#faq" className="hover:text-gray-300 transition-colors" data-testid="link-footer-faq">FAQ</a>
                </nav>

                <div className="mb-8 max-w-2xl mx-auto">
                    <p className="text-gray-600 text-xs leading-relaxed">
                        강남 달토(달리는토끼)는 서울 강남구에 위치한 하이퍼블릭 가라오케로, 투명한 정찰제와 책임 담당제를 원칙으로 운영합니다.
                        강남 하이퍼블릭 추천, 강남 가라오케 추천, 강남 술자리 추천, 강남 2차 장소를 찾고 계신 분들께 최적의 선택입니다.
                        내상 없는 술자리, 부담 없는 초이스, 합리적인 주대로 편하게 다시 찾을 수 있는 곳을 지향합니다.
                        강남역, 신논현역 인근에서 접근이 편리하며, 1인 방문부터 단체 회식 2차까지 폭넓게 이용 가능합니다.
                    </p>
                </div>

                <address className="not-italic text-xs text-gray-600">
                    <p>&copy; 2025-2026 강남 달토 (달리는토끼). All rights reserved.</p>
                    <p className="mt-1">서울특별시 강남구 | 대표번호: <a href="tel:01023033778" className="hover:text-gray-400">010-2303-3778</a></p>
                </address>
            </div>
        </footer>
    );
}
