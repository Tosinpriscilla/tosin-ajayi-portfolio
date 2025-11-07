import { motion } from "motion/react";
import { Play, CheckCircle, TrendingUp, Dumbbell, Award, Heart, Calendar } from "lucide-react";

export function HighFidelityDesigns() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full mb-4">
              <span className="text-sm uppercase tracking-wider">High Fidelity</span>
            </div>
            <h2 className="text-slate-900 mb-4">Final Polished Designs</h2>
            <p className="text-slate-600 text-lg max-w-3xl">
              The final designs incorporate brand colors, polished UI elements, micro-interactions, and full visual treatment. Every detail was crafted to create an engaging, motivating, and accessible fitness experience.
            </p>
          </motion.div>

          {/* Design Set 1: Onboarding */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <h3 className="text-slate-900 mb-6">Welcoming Onboarding Flow</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Screen 1: Splash */}
              <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 rounded-2xl p-6 border-2 border-violet-200 shadow-xl">
                <div className="aspect-[9/19.5] bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 border-4 border-slate-900 rounded-3xl p-5 flex flex-col relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl"></div>
                  
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-8 relative z-10">
                    <span className="text-[8px] text-white/90">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-2 bg-white/80 rounded-sm"></div>
                      <div className="w-3 h-2 bg-white/80 rounded-sm"></div>
                      <div className="w-3 h-2 bg-white/80 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col items-center justify-center px-4 relative z-10">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="w-24 h-24 bg-white rounded-3xl mb-6 flex items-center justify-center shadow-2xl"
                    >
                      <Dumbbell className="w-12 h-12 text-violet-600" />
                    </motion.div>
                    <h2 className="text-lg font-bold text-white mb-2 text-center">FitPro</h2>
                    <p className="text-[10px] text-white/90 text-center leading-relaxed max-w-[180px]">
                      Your personal trainer in your pocket. Get fit with expert guidance.
                    </p>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-3 relative z-10">
                    <button className="w-full h-12 bg-white text-violet-600 rounded-2xl text-[11px] font-bold shadow-lg hover:shadow-xl transition-shadow text-center flex items-center justify-center">
                      Get Started
                    </button>
                    <button className="w-full h-12 border-2 border-white/30 backdrop-blur-sm bg-white/10 text-white rounded-2xl text-[11px] font-semibold text-center flex items-center justify-center">
                      I Have an Account
                    </button>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-4 text-center">Welcome Screen</p>
              </div>

              {/* Screen 2: Goals */}
              <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 rounded-2xl p-6 border-2 border-violet-200 shadow-xl">
                <div className="aspect-[9/19.5] bg-white border-4 border-slate-900 rounded-3xl p-5 flex flex-col">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[8px] text-slate-600">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-12 h-1 bg-violet-600 rounded-full"></div>
                      <div className="w-12 h-1 bg-slate-200 rounded-full"></div>
                      <div className="w-12 h-1 bg-slate-200 rounded-full"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-sm font-bold text-slate-900 mb-1">What's your goal?</h3>
                  <p className="text-[9px] text-slate-600 mb-6">Select your primary fitness objective</p>
                  
                  {/* Goals */}
                  <div className="flex-1 space-y-3">
                    {[
                      { icon: '💪', title: 'Build Muscle', desc: 'Strength & hypertrophy training', gradient: 'from-blue-50 to-cyan-50', border: 'border-blue-200' },
                      { icon: '🔥', title: 'Lose Weight', desc: 'Fat loss & conditioning', active: true, gradient: 'from-violet-100 to-purple-100', border: 'border-violet-500' },
                      { icon: '🏃', title: 'Get Fit', desc: 'General fitness & health', gradient: 'from-green-50 to-emerald-50', border: 'border-green-200' },
                      { icon: '⚡', title: 'Improve Performance', desc: 'Athletic development', gradient: 'from-amber-50 to-orange-50', border: 'border-amber-200' }
                    ].map((goal, i) => (
                      <div 
                        key={i} 
                        className={`p-4 rounded-2xl border-2 transition-all ${
                          goal.active 
                            ? `${goal.border} bg-gradient-to-r ${goal.gradient} shadow-lg scale-[1.02]` 
                            : `${goal.border} bg-gradient-to-r ${goal.gradient}`
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                            <span className="text-2xl">{goal.icon}</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-[10px] font-bold text-slate-900">
                              {goal.title}
                            </p>
                            <p className="text-[8px] text-slate-600 leading-relaxed">{goal.desc}</p>
                          </div>
                          {goal.active && (
                            <div className="w-6 h-6 bg-violet-600 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="w-full h-12 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl text-[11px] font-bold shadow-lg mt-4 text-center flex items-center justify-center">
                    Continue
                  </button>
                </div>
                <p className="text-sm text-slate-600 mt-4 text-center">Goal Selection</p>
              </div>

              {/* Screen 3: Trainer Match */}
              <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 rounded-2xl p-6 border-2 border-violet-200 shadow-xl">
                <div className="aspect-[9/19.5] bg-white border-4 border-slate-900 rounded-3xl p-5 flex flex-col">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[8px] text-slate-600">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-12 h-1 bg-violet-600 rounded-full"></div>
                      <div className="w-12 h-1 bg-violet-600 rounded-full"></div>
                      <div className="w-12 h-1 bg-violet-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-sm font-bold text-slate-900 mb-1">Meet your trainer</h3>
                  <p className="text-[9px] text-slate-600 mb-6">Based on your goals, we matched you with:</p>
                  
                  {/* Trainer Card */}
                  <div className="bg-gradient-to-br from-violet-100 via-purple-100 to-fuchsia-100 border-2 border-violet-300 rounded-3xl p-5 mb-6 shadow-lg">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                          TR
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 border-4 border-white rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">Tom Richardson</h4>
                      <p className="text-[8px] text-violet-700 font-semibold mb-3">Certified Strength Coach • 8 years exp</p>
                      <p className="text-[9px] text-slate-700 leading-relaxed mb-4">
                        Specializes in fat loss programs and has helped 200+ clients achieve their goals.
                      </p>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-2 w-full">
                        {[
                          { icon: '⭐', value: '4.9' },
                          { icon: '👥', value: '215' },
                          { icon: '🏆', value: '89%' }
                        ].map((stat, i) => (
                          <div key={i} className="bg-white/70 backdrop-blur rounded-xl py-2 px-1">
                            <div className="text-sm mb-1">{stat.icon}</div>
                            <p className="text-[9px] font-bold text-slate-900">{stat.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-2.5">
                    <button className="w-full h-12 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl text-[11px] font-bold shadow-lg text-center flex items-center justify-center">
                      Start with Tom
                    </button>
                    <button className="w-full h-10 text-violet-600 rounded-2xl text-[10px] font-semibold text-center flex items-center justify-center">
                      See Other Trainers
                    </button>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-4 text-center">Trainer Match</p>
              </div>
            </div>
          </motion.div>

          {/* Design Set 2: Core Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-slate-900 mb-6">Polished User Experience</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Screen 4: Dashboard (Full Design) */}
              <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 rounded-2xl p-6 border-2 border-violet-200 shadow-xl">
                <div className="aspect-[9/19.5] bg-white border-4 border-slate-900 rounded-3xl overflow-hidden flex flex-col">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-5 pt-8 pb-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[8px] text-white/80">Welcome back,</p>
                        <p className="text-xs font-bold text-white">Lauren</p>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full border-3 border-white shadow-lg"></div>
                    </div>
                  </div>
                  
                  <div className="flex-1 px-5 py-4 overflow-auto">
                    {/* Today's Workout */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-[10px] font-bold text-slate-900">Today's Workout</h4>
                        <span className="text-[8px] text-violet-600 font-semibold">💪 Let's go!</span>
                      </div>
                      <div className="bg-gradient-to-br from-violet-50 to-purple-50 border-2 border-violet-300 rounded-2xl p-4 shadow-md">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <Dumbbell className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-[10px] font-bold text-slate-900 mb-1">Upper Body Strength</p>
                            <p className="text-[8px] text-slate-600">45 min • 8 exercises</p>
                          </div>
                          <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center border-2 border-violet-500 shadow-md">
                            <Play className="w-5 h-5 text-violet-600 fill-violet-600" />
                          </div>
                        </div>
                        <div className="bg-white rounded-xl p-2.5 mb-3 shadow-sm">
                          <div className="flex justify-between items-center mb-1.5">
                            <span className="text-[8px] text-slate-600">Progress</span>
                            <span className="text-[8px] font-bold text-violet-600">3/8 exercises</span>
                          </div>
                          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-violet-600 to-purple-600 rounded-full shadow-sm" style={{ width: '37%' }}></div>
                          </div>
                        </div>
                        <button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl py-2.5 text-[10px] font-bold shadow-lg hover:shadow-xl transition-shadow text-center flex items-center justify-center">
                          Continue Workout
                        </button>
                      </div>
                    </div>

                    {/* Weekly Stats */}
                    <div className="mb-4">
                      <h4 className="text-[10px] font-bold text-slate-900 mb-2">This Week</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { emoji: '🔥', label: 'Streak', value: '12 days', gradient: 'from-orange-50 to-red-50', border: 'border-orange-200' },
                          { emoji: '💪', label: 'Workouts', value: '4/5', gradient: 'from-blue-50 to-cyan-50', border: 'border-blue-200' },
                          { emoji: '��️', label: 'Time', value: '180 min', gradient: 'from-green-50 to-emerald-50', border: 'border-green-200' }
                        ].map((stat, i) => (
                          <div key={i} className={`bg-gradient-to-br ${stat.gradient} border ${stat.border} rounded-xl p-2.5 text-center shadow-sm`}>
                            <div className="text-base mb-1">{stat.emoji}</div>
                            <p className="text-[10px] font-bold text-slate-900">{stat.value}</p>
                            <p className="text-[7px] text-slate-600">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Trainer Message */}
                    <div>
                      <h4 className="text-[10px] font-bold text-slate-900 mb-2">From Your Trainer</h4>
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-3 shadow-sm">
                        <div className="flex items-start gap-2.5">
                          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-[9px] flex-shrink-0 shadow-md">
                            TR
                          </div>
                          <div className="flex-1">
                            <p className="text-[9px] font-bold text-slate-900 mb-1">Tom Richardson</p>
                            <p className="text-[9px] text-slate-700 leading-relaxed">"Great progress this week! Keep pushing! 💪"</p>
                            <p className="text-[7px] text-slate-500 mt-1.5">2 hours ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Nav */}
                  <div className="border-t border-slate-200 px-5 py-3 bg-white">
                    <div className="flex justify-around items-center">
                      {[
                        { icon: '🏠', active: true },
                        { icon: '📊', active: false },
                        { icon: '💬', active: false },
                        { icon: '👤', active: false }
                      ].map((nav, i) => (
                        <button key={i} className={`text-lg ${nav.active ? 'opacity-100 scale-110' : 'opacity-40'} transition-all`}>
                          {nav.icon}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-4 text-center">Dashboard</p>
              </div>

              {/* Screen 5: Active Workout */}
              <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 rounded-2xl p-6 border-2 border-violet-200 shadow-xl">
                <div className="aspect-[9/19.5] bg-white border-4 border-slate-900 rounded-3xl overflow-hidden flex flex-col">
                  {/* Video Area with Gradient Overlay */}
                  <div className="h-40 bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 relative">
                    {/* Decorative blur */}
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-900/50 to-transparent"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
                      >
                        <Play className="w-8 h-8 text-white fill-white" />
                      </motion.div>
                    </div>
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
                      <span className="text-[8px] text-white font-bold">Exercise 4/8</span>
                    </div>
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
                      <span className="text-[8px] text-white font-bold">⏱ 2:34</span>
                    </div>
                  </div>

                  <div className="flex-1 px-5 py-4">
                    {/* Exercise Info */}
                    <div className="mb-4">
                      <h3 className="text-xs font-bold text-slate-900 mb-1">Dumbbell Chest Press</h3>
                      <p className="text-[9px] text-slate-600">3 sets × 12 reps • 15kg each</p>
                    </div>

                    {/* Sets Tracker */}
                    <div className="bg-gradient-to-br from-violet-50 to-purple-50 border-2 border-violet-300 rounded-2xl p-4 mb-4 shadow-md">
                      <p className="text-[9px] text-violet-900 font-bold mb-3">Track Your Sets</p>
                      <div className="space-y-2">
                        {[
                          { set: 1, reps: 12, complete: true },
                          { set: 2, reps: 12, complete: true },
                          { set: 3, reps: 12, complete: false }
                        ].map((item, i) => (
                          <div 
                            key={i} 
                            className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                              item.complete 
                                ? 'bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-400 shadow-sm' 
                                : 'bg-white border-2 border-slate-300'
                            }`}
                          >
                            <span className="text-[10px] font-bold text-slate-900">Set {item.set}</span>
                            <div className="flex items-center gap-3">
                              <span className="text-[9px] text-slate-700 font-semibold">{item.reps} reps</span>
                              {item.complete ? (
                                <CheckCircle className="w-5 h-5 text-green-600" />
                              ) : (
                                <button className="w-7 h-7 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                                  <CheckCircle className="w-4 h-4 text-white" />
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Trainer Tip */}
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-2xl p-3 mb-4 shadow-sm">
                      <div className="flex gap-2.5">
                        <div className="w-8 h-8 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <span className="text-sm">💡</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-[8px] font-bold text-blue-900 mb-1">Trainer Tip</p>
                          <p className="text-[8px] text-blue-800 leading-relaxed">Keep your back flat and core engaged throughout the movement</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      <button className="bg-white border-2 border-slate-300 rounded-2xl py-3 text-[10px] font-semibold text-slate-700 hover:border-slate-400 transition-colors shadow-sm text-center flex items-center justify-center">
                        Skip Exercise
                      </button>
                      <button className="bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl py-3 text-[10px] font-bold shadow-lg hover:shadow-xl transition-shadow text-center flex items-center justify-center">
                        Next Exercise
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-4 text-center">Active Workout</p>
              </div>

              {/* Screen 6: Progress Dashboard */}
              <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 rounded-2xl p-6 border-2 border-violet-200 shadow-xl">
                <div className="aspect-[9/19.5] bg-white border-4 border-slate-900 rounded-3xl overflow-hidden flex flex-col">
                  {/* Header */}
                  <div className="px-5 pt-8 pb-4 border-b border-slate-200">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-bold text-slate-900">Progress</h3>
                      <button className="flex items-center gap-1 px-3 py-1.5 bg-violet-100 text-violet-700 rounded-lg text-[8px] font-semibold">
                        <Calendar className="w-3 h-3" />
                        <span>This Month</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex-1 px-5 py-4 overflow-auto">
                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      {[
                        { label: 'Workouts', value: '18', icon: '💪', gradient: 'from-violet-100 to-purple-100', border: 'border-violet-300' },
                        { label: 'Total Time', value: '810min', icon: '⏱️', gradient: 'from-blue-100 to-cyan-100', border: 'border-blue-300' },
                        { label: 'Streak', value: '12 days', icon: '🔥', gradient: 'from-orange-100 to-red-100', border: 'border-orange-300' },
                        { label: 'Calories', value: '6.2K', icon: '🎯', gradient: 'from-green-100 to-emerald-100', border: 'border-green-300' }
                      ].map((stat, i) => (
                        <div key={i} className={`bg-gradient-to-br ${stat.gradient} border-2 ${stat.border} rounded-2xl p-3 text-center shadow-md`}>
                          <div className="text-xl mb-1">{stat.icon}</div>
                          <p className="text-sm font-bold text-slate-900">{stat.value}</p>
                          <p className="text-[8px] text-slate-600">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Activity Chart */}
                    <div className="mb-5">
                      <h4 className="text-[10px] font-bold text-slate-900 mb-3">Weekly Activity</h4>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 rounded-2xl p-4 shadow-sm">
                        <div className="h-28 flex items-end justify-around gap-1.5">
                          {[
                            { height: 40, day: 'M' },
                            { height: 60, day: 'T' },
                            { height: 50, day: 'W' },
                            { height: 80, day: 'T' },
                            { height: 70, day: 'F' },
                            { height: 90, day: 'S' },
                            { height: 85, day: 'S' }
                          ].map((bar, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-1">
                              <div 
                                className="w-full bg-gradient-to-t from-violet-600 to-purple-500 rounded-t-lg shadow-md transition-all hover:from-violet-700 hover:to-purple-600" 
                                style={{ height: `${bar.height}%` }}
                              ></div>
                              <span className="text-[8px] text-slate-600 font-semibold">{bar.day}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-[10px] font-bold text-slate-900 mb-3">Recent Achievements</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { icon: '🏆', title: 'First Week', gradient: 'from-amber-100 to-orange-100', border: 'border-amber-300' },
                          { icon: '🔥', title: '7 Day Streak', gradient: 'from-red-100 to-rose-100', border: 'border-red-300' },
                          { icon: '💪', title: 'Strong Start', gradient: 'from-blue-100 to-cyan-100', border: 'border-blue-300' }
                        ].map((achievement, i) => (
                          <div key={i} className={`bg-gradient-to-br ${achievement.gradient} border-2 ${achievement.border} rounded-2xl p-3 text-center shadow-md`}>
                            <div className="text-2xl mb-1">{achievement.icon}</div>
                            <p className="text-[7px] font-bold text-slate-900 leading-tight">{achievement.title}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Nav */}
                  <div className="border-t border-slate-200 px-5 py-3 bg-white">
                    <div className="flex justify-around items-center">
                      {[
                        { icon: '🏠', active: false },
                        { icon: '📊', active: true },
                        { icon: '💬', active: false },
                        { icon: '👤', active: false }
                      ].map((nav, i) => (
                        <button key={i} className={`text-lg ${nav.active ? 'opacity-100 scale-110' : 'opacity-40'} transition-all`}>
                          {nav.icon}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-4 text-center">Progress Tracking</p>
              </div>
            </div>
          </motion.div>

          {/* Design System Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-slate-900 via-violet-900 to-purple-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
          >
            <h3 className="mb-6">Design System & Visual Language</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-violet-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🎨</span>
                  </div>
                  <div>
                    <h4 className="text-violet-300 mb-2">Energizing Color Palette</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Vibrant violet-to-purple gradients create energy and motivation, while softer pastels ensure accessibility and reduce eye strain during workouts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">✨</span>
                  </div>
                  <div>
                    <h4 className="text-violet-300 mb-2">Micro-interactions</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Subtle animations on button presses, progress updates, and achievement unlocks provide satisfying feedback and celebrate user accomplishments.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-fuchsia-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">📐</span>
                  </div>
                  <div>
                    <h4 className="text-violet-300 mb-2">Rounded, Friendly UI</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Generous corner radius (12-20px) creates an approachable, non-intimidating interface—critical for beginners who may feel overwhelmed by fitness apps.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🎯</span>
                  </div>
                  <div>
                    <h4 className="text-violet-300 mb-2">Action-Oriented CTAs</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      All primary actions use motivating language ("Let's go!", "Continue Workout") combined with prominent gradient buttons to drive engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
