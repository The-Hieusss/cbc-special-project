import { TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-linear-to-b from-orange-50/50 via-transparent to-transparent dark:from-orange-950/20 pointer-events-none" />

      <div className="container relative mx-auto max-w-6xl">
        <div className="text-center space-y-6 sm:space-y-8 md:space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800 animate-in fade-in slide-in-from-top-3 duration-700">
            <TrendingUp className="h-4 w-4 text-orange-600 dark:text-orange-400" />
            <span className="text-sm font-medium text-orange-700 dark:text-orange-300">
              Real-time Congressional Trading Analytics
            </span>
          </div>

          {/* Main heading */}
          <div className="space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-top-4 duration-700 delay-100">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight">
              Uncover Congressional
              <span className="block mt-2 bg-linear-to-r from-orange-600 via-coral-600 to-orange-600 bg-clip-text text-transparent animate-gradient">
                Insider Trading
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              We analyze historic stock data to identify suspicious trading patterns
              by members of Congress. Track when stocks surge after their trades.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-in fade-in slide-in-from-top-5 duration-700 delay-200 px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Start Investigating
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 hover:bg-accent/50 transition-all hover:scale-105"
            >
              View Latest Cases
            </Button>
          </div>          
        </div>
      </div>
    </section>
  );
}
