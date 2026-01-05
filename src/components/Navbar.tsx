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
        { name: '시스템', href: '#system' },
        { name: '가격', href: '#pricing' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <nav className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/0",
            scrolled ? "bg-black/80 backdrop-blur-md border-white/10" : "bg-transparent"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 font-pretendard tracking-tighter">
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
                        >
                            <Phone size={16} />
                            <span>010.2303.3778</span>
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={cn("md:hidden absolute w-full bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ease-in-out", isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none")}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="tel:01023033778"
                        className="flex items-center justify-center gap-2 mt-4 bg-gradient-to-r from-brand-accent to-brand-primary text-white w-full py-3 rounded-lg font-bold"
                    >
                        <Phone size={18} />
                        010.2303.3778
                    </a>
                </div>
            </div>
        </nav>
    );
}
