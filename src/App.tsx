import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Conditions from '@/components/Conditions';
import Videos from '@/components/Videos';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import AnimatedBackground from '@/components/AnimatedBackground';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Conditions />
        <Videos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
