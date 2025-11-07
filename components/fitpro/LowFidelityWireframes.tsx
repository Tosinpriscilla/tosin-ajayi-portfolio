import { motion } from "motion/react";

export function LowFidelityWireframes() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full mb-4">
              <span className="text-sm uppercase tracking-wider">Low Fidelity</span>
            </div>
            <h2 className="text-slate-900 mb-4">Initial Wireframes</h2>
            <p className="text-slate-600 text-lg max-w-3xl">
              I started with low-fidelity sketches to rapidly explore layout concepts and user flows before investing in detailed design. These wireframes focused on information hierarchy and core functionality.
            </p>
          </motion.div>

          {/* Wireframe Set 1: Onboarding Flow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <h3 className="text-slate-900 mb-6">Onboarding Flow</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Screen 1: Welcome */}
              <div className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200">
                <div className="aspect-[9/19.5] bg-white border-4 border-slate-800 rounded-3xl p-4 flex flex-col">
                  {/* Status bar */}
                  <div className="h-6 border-b-2 border-slate-300 mb-6"></div>
                  
                  {/* Logo placeholder */}
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="w-24 h-24 border-4 border-slate-400 rounded-full mb-6"></div>
                    <div className="w-40 h-6 bg-slate-300 rounded mb-2"></div>
                    <div className="w-32 h-4 bg-slate-200 rounded mb-12"></div>
                  </div>

                  {/* CTA */}
                  <div className="space-y-3">
                    <div className="h-12 bg-slate-800 rounded-lg"></div>
                    <div className="h-12 border-2 border-slate-400 rounded-lg"></div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-4 text-center">Welcome Screen</p>
              </div>

              {/* Screen 2: Goals Selection */}
              <div className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200">
                <div className="aspect-[9/19.5] bg-white border-4 border-slate-800 rounded-3xl p-4 flex flex-col">
                  {/* Header */}
                  <div className="h-6 border-b-2 border-slate-300 mb-4"></div>
                  <div className="w-32 h-6 bg-slate-300 rounded mb-6"></div>
                  
                  {/* Goals grid */}
                  <div className="flex-1 space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`h-16 ${i === 2 ? 'bg-slate-800' : 'border-2 border-slate-300'} rounded-lg`}></div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="h-12 bg-slate-400 rounded-lg"></div>
                </div>
                <p className="text-sm text-slate-600 mt-4 text-center">Fitness Goals</p>
              </div>

              {/* Screen 3: Level Selection */}
              <div className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200">
                <div className="aspect-[9/19.5] bg-white border-4 border-slate-800 rounded-3xl p-4 flex flex-col">
                  {/* Header */}
                  <div className="h-6 border-b-2 border-slate-300 mb-4"></div>
                  <div className="w-32 h-6 bg-slate-300 rounded mb-6"></div>
                  
                  {/* Level cards */}
                  <div className="flex-1 space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className={`h-20 ${i === 1 ? 'bg-slate-800' : 'border-2 border-slate-300'} rounded-lg p-3`}>
                        <div className="w-20 h-4 bg-slate-300 rounded mb-2"></div>
                        <div className="w-32 h-3 bg-slate-200 rounded"></div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="h-12 bg-slate-800 rounded-lg"></div>
                </div>
                <p className="text-sm text-slate-600 mt-4 text-center">Fitness Level</p>
              </div>
            </div>
          </motion.div>

          {/* Wireframe Set 2: Main App Flow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-slate-900 mb-6">Core User Experience</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Screen 4: Dashboard */}
              <div className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200">
                <div className="aspect-[9/19.5] bg-white border-4 border-slate-800 rounded-3xl p-4 flex flex-col">
                  {/* Header */}
                  <div className="h-16 bg-slate-300 rounded-lg mb-4"></div>
                  
                  {/* Today's workout card */}
                  <div className="h-32 border-2 border-slate-400 rounded-lg p-3 mb-4">
                    <div className="flex gap-2 mb-3">
                      <div className="w-12 h-12 bg-slate-400 rounded"></div>
                      <div className="flex-1">
                        <div className="w-24 h-4 bg-slate-300 rounded mb-2"></div>
                        <div className="w-20 h-3 bg-slate-200 rounded"></div>
                      </div>
                    </div>
                    <div className="h-8 bg-slate-800 rounded"></div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-16 border-2 border-slate-300 rounded"></div>
                    ))}
                  </div>

                  {/* Message card */}
                  <div className="h-20 border-2 border-slate-300 rounded-lg"></div>

                  {/* Bottom nav */}
                  <div className="mt-auto pt-4">
                    <div className="h-12 border-t-2 border-slate-300 flex justify-around items-center">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-6 h-6 bg-slate-300 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-4 text-center">Home Dashboard</p>
              </div>

              {/* Screen 5: Workout Detail */}
              <div className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200">
                <div className="aspect-[9/19.5] bg-white border-4 border-slate-800 rounded-3xl p-4 flex flex-col">
                  {/* Video placeholder */}
                  <div className="h-40 bg-slate-800 rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-white rounded-full"></div>
                  </div>
                  
                  {/* Exercise title */}
                  <div className="w-32 h-5 bg-slate-300 rounded mb-2"></div>
                  <div className="w-24 h-4 bg-slate-200 rounded mb-4"></div>

                  {/* Sets tracker */}
                  <div className="border-2 border-slate-300 rounded-lg p-3 mb-4">
                    <div className="w-20 h-4 bg-slate-300 rounded mb-3"></div>
                    <div className="space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className={`h-10 ${i <= 2 ? 'bg-slate-400' : 'border-2 border-slate-300'} rounded`}></div>
                      ))}
                    </div>
                  </div>

                  {/* Tip box */}
                  <div className="h-16 border-2 border-slate-300 rounded-lg mb-4"></div>

                  {/* Action buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-12 border-2 border-slate-400 rounded-lg"></div>
                    <div className="h-12 bg-slate-800 rounded-lg"></div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-4 text-center">Exercise Screen</p>
              </div>

              {/* Screen 6: Progress */}
              <div className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200">
                <div className="aspect-[9/19.5] bg-white border-4 border-slate-800 rounded-3xl p-4 flex flex-col">
                  {/* Header */}
                  <div className="h-6 border-b-2 border-slate-300 mb-4"></div>
                  <div className="w-24 h-6 bg-slate-300 rounded mb-6"></div>
                  
                  {/* Stats cards */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-20 border-2 border-slate-300 rounded-lg"></div>
                    ))}
                  </div>

                  {/* Chart placeholder */}
                  <div className="h-40 border-2 border-slate-300 rounded-lg mb-4 flex items-end justify-around p-3">
                    {[40, 60, 50, 80, 70, 90, 85].map((height, i) => (
                      <div key={i} className="w-6 bg-slate-400 rounded-t" style={{ height: `${height}%` }}></div>
                    ))}
                  </div>

                  {/* Achievement badges */}
                  <div className="flex gap-2 mb-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-12 h-12 border-2 border-slate-400 rounded-full"></div>
                    ))}
                  </div>

                  {/* Bottom nav */}
                  <div className="mt-auto">
                    <div className="h-12 border-t-2 border-slate-300 flex justify-around items-center">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-6 h-6 bg-slate-300 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-4 text-center">Progress Tracking</p>
              </div>
            </div>
          </motion.div>

          {/* Key Decisions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 border-2 border-violet-200"
          >
            <h3 className="text-slate-900 mb-4">Key Wireframe Decisions</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-slate-900 mb-2">Prioritized Quick Access</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Placed "Today's Workout" prominently on the dashboard after research showed 89% of users wanted to start exercising immediately upon opening the app.
                </p>
              </div>
              <div>
                <h4 className="text-slate-900 mb-2">Simplified Progress Tracking</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Reduced progress metrics to 3-4 key indicators after testing revealed users abandoned apps with overwhelming data tracking.
                </p>
              </div>
              <div>
                <h4 className="text-slate-900 mb-2">Streamlined Onboarding</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Limited onboarding to 3 essential screens (goals, level, preferences) to prevent drop-off, reducing from the initial 7-screen flow.
                </p>
              </div>
              <div>
                <h4 className="text-slate-900 mb-2">Trainer Visibility</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Integrated trainer messages directly on dashboard to reinforce accountability and maintain the human connection throughout the experience.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
