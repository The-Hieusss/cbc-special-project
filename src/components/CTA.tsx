import { ArrowRight, Bell } from 'lucide-react';
import { Button } from './ui/button';

export function CTA() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-linear-to-br from-orange-100/50 via-coral-100/50 to-orange-100/50 dark:from-orange-950/30 dark:via-coral-950/30 dark:to-orange-950/30 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl animate-blob dark:mix-blend-lighten" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-coral-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000 dark:mix-blend-lighten" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000 dark:mix-blend-lighten" />
      </div>

      <div className="container relative mx-auto max-w-5xl">
        <div className="relative bg-linear-to-r from-orange-600 via-coral-600 to-orange-600 rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 text-center space-y-6 sm:space-y-8 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-700">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />

          {/* Content */}
          <div className="relative z-10 space-y-6 sm:space-y-8">
            {/* Icon Badge */}
            <div className="inline-flex items-center justify-center p-3 sm:p-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <Bell className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>

            {/* Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight px-4">
                Ready to Expose the Truth?
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed px-4">
                Join now to start holding Congress accountable. Get instant alerts when suspicious trading patterns are
                detected.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6 px-4">
              <Button
                size="lg"
                variant="secondary"
                className="group w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-white text-orange-600 hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Start Tracking Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-transparent text-white border-2 border-white hover:bg-white/10 transition-all hover:scale-105"
              >
                Learn More
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

