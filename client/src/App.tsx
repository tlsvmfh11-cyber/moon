import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import BrandStory from './components/BrandStory';
import Features from './components/Features';
import Comparison from './components/Comparison';
import System from './components/System';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Target from './components/Target';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { Phone, MessageSquare } from 'lucide-react';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = '강남 달토 | 강남 하이퍼블릭 가라오케 1위 - 달리는토끼 공식';

    const preventCopy = (e: ClipboardEvent) => e.preventDefault();
    const preventContext = (e: MouseEvent) => e.preventDefault();
    const preventSelect = (e: Event) => e.preventDefault();
    const preventKeyboard = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        ['c', 'a', 'u', 's', 'p'].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
      }
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['i', 'j', 'c'].includes(e.key.toLowerCase()))) {
        e.preventDefault();
      }
    };
    const preventDrag = (e: DragEvent) => e.preventDefault();

    document.addEventListener('copy', preventCopy);
    document.addEventListener('cut', preventCopy);
    document.addEventListener('contextmenu', preventContext);
    document.addEventListener('selectstart', preventSelect);
    document.addEventListener('keydown', preventKeyboard);
    document.addEventListener('dragstart', preventDrag);

    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';

    return () => {
      document.removeEventListener('copy', preventCopy);
      document.removeEventListener('cut', preventCopy);
      document.removeEventListener('contextmenu', preventContext);
      document.removeEventListener('selectstart', preventSelect);
      document.removeEventListener('keydown', preventKeyboard);
      document.removeEventListener('dragstart', preventDrag);
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-pretendard">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-primary focus:text-white focus:px-4 focus:py-2 focus:rounded">
        본문 바로가기
      </a>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <Intro />
        <BrandStory />
        <Features />
        <Comparison />
        <System />
        <Pricing />
        <Location />
        <Target />
        <Reviews />
        <FAQ />
      </main>
      <Footer />

      {/* Floating Action Buttons for Mobile */}
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden flex" role="complementary" aria-label="모바일 문의 버튼">
        <a
          href="tel:01023033778"
          className="flex-1 bg-brand-primary flex items-center justify-center gap-2 py-4 text-white font-bold text-lg"
          aria-label="강남 달토 전화문의 010-2303-3778"
          data-testid="link-mobile-call"
        >
          <Phone size={20} className="fill-current" />
          전화문의
        </a>
        <a
          href="sms:01023033778"
          className="flex-1 bg-brand-accent flex items-center justify-center gap-2 py-4 text-white font-bold text-lg"
          aria-label="강남 달토 문자문의 010-2303-3778"
          data-testid="link-mobile-sms"
        >
          <MessageSquare size={20} className="fill-current" />
          문자문의
        </a>
      </div>
    </div>
  );
}

export default App;
