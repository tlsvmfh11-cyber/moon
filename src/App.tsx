import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Features from './components/Features';
import System from './components/System';
import Pricing from './components/Pricing';
import Target from './components/Target';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { Phone, MessageSquare } from 'lucide-react';

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-pretendard">
      <Navbar />
      <Hero />
      <Intro />
      <Features />
      <System />
      <Pricing />
      <Target />
      <FAQ />
      <Footer />

      {/* Floating Action Buttons for Mobile */}
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden flex">
        <a
          href="tel:01023033778"
          className="flex-1 bg-brand-primary flex items-center justify-center gap-2 py-4 text-white font-bold text-lg"
        >
          <Phone size={20} className="fill-current" />
          전화문의
        </a>
        <a
          href="sms:01023033778"
          className="flex-1 bg-brand-accent flex items-center justify-center gap-2 py-4 text-white font-bold text-lg"
        >
          <MessageSquare size={20} className="fill-current" />
          문자문의
        </a>
      </div>
    </div>
  );
}

export default App;
