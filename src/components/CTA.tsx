import { Button } from './ui/button';

export function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Expose the Truth?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join now to start holding Congress accountable. Get instant alerts when suspicious trading patterns are
            detected.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Start Tracking Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent text-white border-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
