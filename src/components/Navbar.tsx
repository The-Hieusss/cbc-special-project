import { Button } from './ui/button';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold">
              Congress<span className="text-primary">Watch</span>
            </div>
          </div>
          <Button variant="outline">Get Started</Button>
        </div>
      </div>
    </nav>
  );
}
