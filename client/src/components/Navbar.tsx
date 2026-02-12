import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: '소개', href: '#intro' },
        { name: '특징', href: '#features' },
        { name: '비교', href: '#comparison' },
        { name: '시스템', href: '#system' },
        { name: '가격', href: '#pricing' },
        { name: '위치', href: '#location' },
        { name: '후기', href: '#reviews' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <header className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/0",
            scrolled ? "bg-black/80 backdrop-blur-md border-white/10" : "bg-transparent"
        )} role="banner">
            <nav aria-label="메인 네비게이션" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 font-pretendard tracking-tighter" aria-label="강남 달토 홈으로 이동" data-testid="link-nav-home">
                            강남 달토
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white hover:text-glow transition-all px-3 py-2 rounded-md text-sm font-medium"
                                    data-testid={`link-nav-${link.name}`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <a
                            href="tel:01023033778"
                            className="flex items-center gap-2 bg-gradient-to-r from-brand-accent to-brand-primary hover:from-brand-primary hover:to-brand-accent text-white px-4 py-2 rounded-full font-medium transition-all shadow-[0_0_15px_rgba(225,29,72,0.4)] hover:shadow-[0_0_25px_rgba(225,29,72,0.6)]"
                            aria-label="강남 달토 전화문의 010-2303-3778"
                            data-testid="link-nav-phone"
                        >
                            <Phone size={16} aria-hidden="true" />
                            <span>010.2303.3778</span>
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2"
                            aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
                            aria-expanded={isOpen}
                            data-testid="button-menu-toggle"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                className={cn("md:hidden absolute w-full bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ease-in-out", isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none")}
                role="navigation"
                aria-label="모바일 네비게이션"
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            data-testid={`link-nav-${link.name}`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="tel:01023033778"
                        className="flex items-center justify-center gap-2 mt-4 bg-gradient-to-r from-brand-accent to-brand-primary text-white w-full py-3 rounded-lg font-bold"
                        aria-label="강남 달토 전화문의 010-2303-3778"
                        data-testid="link-nav-phone"
                    >
                        <Phone size={18} aria-hidden="true" />
                        010.2303.3778
                    </a>
                </div>
            </div>
        </header>
    );
}
