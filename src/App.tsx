import { CTA } from './components/CTA';
import { Features } from './components/Features';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
    </div>
  );
}

export default App;
