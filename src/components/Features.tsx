import { BarChart3, Shield, TrendingUp, Users } from 'lucide-react';

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-linear-to-b from-transparent via-orange-50/30 to-transparent dark:via-orange-950/10">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Powerful{' '}
            <span className="bg-linear-to-r from-orange-600 to-coral-600 bg-clip-text text-transparent">
              Analytics Tools
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Advanced features designed to uncover suspicious trading patterns and hold Congress accountable
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {/* Feature 1 */}
          <div className="group p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-orange-300 dark:hover:border-orange-700 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <div className="mb-4 sm:mb-6 inline-flex p-3 sm:p-4 rounded-xl bg-orange-100 dark:bg-orange-950/50 group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors">
              <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Real-Time Tracking</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Monitor congressional trades in real-time with instant notifications when new transactions are filed
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-coral-300 dark:hover:border-coral-700 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <div className="mb-4 sm:mb-6 inline-flex p-3 sm:p-4 rounded-xl bg-coral-100 dark:bg-coral-950/50 group-hover:bg-coral-200 dark:group-hover:bg-coral-900/50 transition-colors">
              <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-coral-600 dark:text-coral-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Pattern Detection</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              AI-powered analysis identifies suspicious patterns in trading behavior and stock performance
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-orange-300 dark:hover:border-orange-700 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <div className="mb-4 sm:mb-6 inline-flex p-3 sm:p-4 rounded-xl bg-orange-100 dark:bg-orange-950/50 group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Member Profiles</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Comprehensive profiles for every member with detailed trading history and performance metrics
            </p>
          </div>

          {/* Feature 4 */}
          <div className="group p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-coral-300 dark:hover:border-coral-700 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <div className="mb-4 sm:mb-6 inline-flex p-3 sm:p-4 rounded-xl bg-coral-100 dark:bg-coral-950/50 group-hover:bg-coral-200 dark:group-hover:bg-coral-900/50 transition-colors">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-coral-600 dark:text-coral-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Data Integrity</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Verified data sources and transparent methodology ensure accuracy and reliability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
