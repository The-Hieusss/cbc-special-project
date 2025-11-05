import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CTA } from './components/CTA';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CTA />
    </div>
  );
}

export default App;
