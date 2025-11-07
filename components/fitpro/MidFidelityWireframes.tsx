import { motion } from "motion/react";
import { Play, CheckCircle, TrendingUp, Dumbbell } from "lucide-react";

export function MidFidelityWireframes() {
  return (
    <section className="py-20 bg-slate-50">
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
              <span className="text-sm uppercase tracking-wider">Mid Fidelity</span>
            </div>
            <h2 className="text-slate-900 mb-4">Refined Wireframes</h2>
            <p className="text-slate-600 text-lg max-w-3xl">
              With validated layouts, I added hierarchy, typography, and basic styling to test information clarity and visual flow. This phase incorporated user feedback on content placement and interaction patterns.
            </p>
          </motion.div>

          {/* Wireframe Set 1: Onboarding Refined */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <h3 className="text-slate-900 mb-6">Onboarding Experience</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Screen 1: Welcome */}
              <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-lg">
                <div className="aspect-[9/19.5] bg-gradient-to-br from-slate-100 to-slate-50 border-4 border-slate-900 rounded-3xl p-5 flex flex-col">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-[8px] text-slate-600">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-2 bg-slate-400 rounded-sm"></div>
                      <div className="w-3 h-2 bg-slate-400 rounded-sm"></div>
                      <div className="w-3 h-2 bg-slate-400 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col items-center justify-center px-4">
                    <div className="w-20 h-20 bg-slate-700 rounded-full mb-6 flex items-center justify-center">
                      <Dumbbell className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-2 text-center">Welcome to FitPro</h3>
                    <p className="text-[9px] text-slate-600 text-center mb-8">
                      Your personal trainer in your pocket. Get fit with expert guidance.
                    </p>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-2.5">
                    <button className="w-full h-11 bg-slate-800 text-white rounded-xl text-[10px] font-bold flex items-center justify-center">
                      Get Started
                    </button>
                    <button className="w-full h-11 border-2 border-slate-300 rounded-xl text-[10px] font-semibold text-slate-700 flex items-center justify-center">
                      I Have an Account
                    </button>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-4 text-center">Welcome Screen</p>
              </div>

              {/* Screen 2: Goals Selection */}
              <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-lg">
                <div className="aspect-[9/19.5] bg-white border-4 border-slate-900 rounded-3xl p-5 flex flex-col">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[8px] text-slate-600">9:41</span>
                    <span className="text-[9px] text-slate-500">Step 1 of 3</span>
                  </div>
                  
                  <h3 className="text-xs font-bold text-slate-900 mb-1">What's your goal?</h3>
                  <p className="text-[8px] text-slate-600 mb-5">Select your primary fitness objective</p>
                  
                  {/* Goals */}
                  <div className="flex-1 space-y-2.5">
                    {[
                      { icon: '💪', title: 'Build Muscle', desc: 'Strength & hypertrophy training' },
                      { icon: '🔥', title: 'Lose Weight', desc: 'Fat loss & conditioning', active: true },
                      { icon: '🏃', title: 'Get Fit', desc: 'General fitness & health' },
                      { icon: '⚡', title: 'Improve Performance', desc: 'Athletic development' }
                    ].map((goal, i) => (
                      <div 
                        key={i} 
                        className={`p-3 rounded-xl border-2 ${
                          goal.active 
                            ? 'border-slate-800 bg-slate-100' 
                            : 'border-slate-200 bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{goal.icon}</span>
                          <div className="flex-1">
                            <p className="text-[9px] font-bold text-slate-900">
                              {goal.title}
                            </p>
                            <p className="text-[8px] text-slate-600">{goal.desc}</p>
                          </div>
                          {goal.active && <CheckCircle className="w-4 h-4 text-slate-800" />}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="w-full h-11 bg-slate-300 text-slate-500 rounded-xl text-[10px] font-bold flex items-center justify-center">
                    Continue
                  </button>
                </div>
                <p className="text-sm text-slate-600 mt-4 text-center">Goal Selection</p>
              </div>

              {/* Screen 3: Level Selection */}
              <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-lg">
                <div className="aspect-[9/19.5] bg-white border-4 border-slate-900 rounded-3xl p-5 flex flex-col">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[8px] text-slate-600">9:41</span>
                    <span className="text-[9px] text-slate-500">Step 2 of 3</span>
                  </div>
                  
                  <h3 className="text-xs font-bold text-slate-900 mb-1">Your fitness level?</h3>
                  <p className="text-[8px] text-slate-600 mb-5">Help us personalize your plan</p>
                  
                  {/* Levels */}
                  <div className="flex-1 space-y-3">
                    {[
                      { title: 'Beginner', desc: 'New to fitness or returning after a break', active: true },
                      { title: 'Intermediate', desc: 'Regular workouts, comfortable with basics' },
                      { title: 'Advanced', desc: 'Experienced, looking for next level' }
                    ].map((level, i) => (
                      <div 
                        key={i} 
                        className={`p-4 rounded-xl border-2 ${
                          level.active 
                            ? 'border-slate-800 bg-slate-100' 
                            : 'border-slate-200 bg-white'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-1">
                          <p className="text-[10px] font-bold text-slate-900">
                            {level.title}
                          </p>
                          {level.active && <CheckCircle className="w-4 h-4 text-slate-800" />}
                        </div>
                        <p className="text-[8px] text-slate-600 leading-relaxed">{level.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="w-full h-11 bg-slate-800 text-white rounded-xl text-[10px] font-bold flex items-center justify-center">
                    Continue
                  </button>
                </div>
                <p className="text-sm text-slate-600 mt-4 text-center">Level Selection</p>
              </div>
            </div>
          </motion.div>

          {/* Wireframe Set 2: Main Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-slate-900 mb-6">Main Application Flow</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Screen 4: Dashboard */}
              <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-lg">
                <div className="aspect-[9/19.5] bg-white border-4 border-slate-900 rounded-3xl p-5 flex flex-col">
                  {/* Header */}
                  <div className="bg-slate-100 -mx-5 -mt-5 px-5 pt-8 pb-4 rounded-t-[26px] mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-[7px] text-slate-600">Welcome back,</p>
                        <p className="text-[10px] font-bold text-slate-900">Lauren</p>
                      </div>
                      <div className="w-8 h-8 bg-slate-700 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Today's Workout */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-[9px] font-bold text-slate-900">Today's Workout</h4>
                      <span className="text-[7px] text-slate-700 font-semibold">💪 Let's go!</span>
                    </div>
                    <div className="border-2 border-slate-300 bg-slate-50 rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                          <Dumbbell className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-[8px] font-bold text-slate-900">Upper Body Strength</p>
                          <p className="text-[7px] text-slate-600">45 min • 8 exercises</p>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-2 mb-2">
                        <div className="flex justify-between mb-1">
                          <span className="text-[7px] text-slate-600">Progress</span>
                          <span className="text-[7px] font-bold text-slate-800">3/8</span>
                        </div>
                        <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-slate-800 rounded-full" style={{ width: '37%' }}></div>
                        </div>
                      </div>
                      <button className="w-full bg-slate-800 text-white rounded-lg py-2 text-[8px] font-bold flex items-center justify-center">
                        Continue Workout
                      </button>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mb-3">
                    <h4 className="text-[9px] font-bold text-slate-900 mb-2">This Week</h4>
                    <div className="grid grid-cols-3 gap-1.5">
                      {[
                        { label: 'Streak', value: '12 days' },
                        { label: 'Workouts', value: '4/5' },
                        { label: 'Time', value: '180min' }
                      ].map((stat, i) => (
                        <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-2 text-center">
                          <p className="text-[8px] font-bold text-slate-900">{stat.value}</p>
                          <p className="text-[7px] text-slate-600">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Trainer Message */}
                  <div className="mb-auto">
                    <h4 className="text-[9px] font-bold text-slate-900 mb-2">From Your Trainer</h4>
                    <div className="bg-slate-50 border border-slate-300 rounded-lg p-2.5">
                      <div className="flex gap-2">
                        <div className="w-6 h-6 bg-slate-600 rounded-full flex-shrink-0"></div>
                        <div>
                          <p className="text-[7px] font-bold text-slate-900">Tom Richardson</p>
                          <p className="text-[7px] text-slate-700">"Great progress! 💪"</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Nav */}
                  <div className="flex justify-around items-center pt-3 border-t border-slate-200 mt-3">
                    {['🏠', '📊', '💬', '👤'].map((icon, i) => (
                      <button key={i} className={`text-sm ${i === 0 ? 'opacity-100' : 'opacity-40'}`}>
                        {icon}
                      </button>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-4 text-center">Dashboard</p>
              </div>

              {/* Screen 5: Workout Screen */}
              <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-lg">
                <div className="aspect-[9/19.5] bg-white border-4 border-slate-900 rounded-3xl p-5 flex flex-col">
                  {/* Video Area */}
                  <div className="h-32 bg-slate-800 rounded-xl mb-3 relative flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                    <div className="absolute top-2 left-2 bg-black/50 backdrop-blur px-2 py-1 rounded-full">
                      <span className="text-[7px] text-white font-bold">Exercise 4/8</span>
                    </div>
                    <div className="absolute top-2 right-2 bg-black/50 backdrop-blur px-2 py-1 rounded-full">
                      <span className="text-[7px] text-white font-bold">2:34</span>
                    </div>
                  </div>

                  {/* Exercise Info */}
                  <div className="mb-3">
                    <h3 className="text-[10px] font-bold text-slate-900 mb-1">Dumbbell Chest Press</h3>
                    <p className="text-[8px] text-slate-600">3 sets × 12 reps • 15kg each</p>
                  </div>

                  {/* Sets Tracker */}
                  <div className="border-2 border-slate-300 bg-slate-50 rounded-xl p-3 mb-3">
                    <p className="text-[8px] text-slate-900 font-bold mb-2">Track Your Sets</p>
                    <div className="space-y-1.5">
                      {[
                        { set: 1, complete: true },
                        { set: 2, complete: true },
                        { set: 3, complete: false }
                      ].map((item, i) => (
                        <div 
                          key={i} 
                          className={`flex items-center justify-between p-2 rounded-lg ${
                            item.complete ? 'bg-slate-200 border border-slate-400' : 'bg-white border border-slate-300'
                          }`}
                        >
                          <span className="text-[8px] font-semibold">Set {item.set}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-[8px] text-slate-700">12 reps</span>
                            {item.complete ? (
                              <CheckCircle className="w-3.5 h-3.5 text-slate-700" />
                            ) : (
                              <div className="w-5 h-5 bg-slate-800 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-3 h-3 text-white" />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tip */}
                  <div className="bg-slate-100 border border-slate-300 rounded-lg p-2 mb-3">
                    <div className="flex gap-2">
                      <span className="text-xs">💡</span>
                      <div>
                        <p className="text-[7px] font-bold text-slate-900 mb-1">Trainer Tip</p>
                        <p className="text-[7px] text-slate-700">Keep your back flat and core engaged</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 mt-auto">
                    <button className="bg-white border-2 border-slate-300 rounded-xl py-2.5 text-[8px] font-semibold text-slate-700 flex items-center justify-center">
                      Skip Exercise
                    </button>
                    <button className="bg-slate-800 text-white rounded-xl py-2.5 text-[8px] font-bold flex items-center justify-center">
                      Next Exercise
                    </button>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-4 text-center">Exercise Screen</p>
              </div>

              {/* Screen 6: Progress */}
              <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-lg">
                <div className="aspect-[9/19.5] bg-white border-4 border-slate-900 rounded-3xl p-5 flex flex-col">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xs font-bold text-slate-900">Progress</h3>
                    <button className="text-[7px] text-slate-700 font-semibold">This Month ▼</button>
                  </div>
                  
                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {[
                      { label: 'Workouts', value: '18' },
                      { label: 'Total Time', value: '810min' },
                      { label: 'Streak', value: '12 days' },
                      { label: 'Calories', value: '6.2K' }
                    ].map((stat, i) => (
                      <div key={i} className="bg-slate-50 border border-slate-300 rounded-lg p-3 text-center">
                        <p className="text-xs font-bold text-slate-900">{stat.value}</p>
                        <p className="text-[7px] text-slate-600">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div className="mb-4">
                    <h4 className="text-[9px] font-bold text-slate-900 mb-2">Weekly Activity</h4>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 h-32 flex items-end justify-around gap-1">
                      {[40, 60, 50, 80, 70, 90, 85].map((height, i) => (
                        <div key={i} className="flex-1 bg-slate-700 rounded-t" style={{ height: `${height}%` }}></div>
                      ))}
                    </div>
                    <div className="flex justify-around mt-1">
                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                        <span key={i} className="text-[7px] text-slate-600">{day}</span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-auto">
                    <h4 className="text-[9px] font-bold text-slate-900 mb-2">Recent Achievements</h4>
                    <div className="flex gap-2">
                      {['🏆', '🔥', '💪'].map((icon, i) => (
                        <div key={i} className="w-10 h-10 bg-slate-100 border border-slate-300 rounded-xl flex items-center justify-center">
                          <span className="text-sm">{icon}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Nav */}
                  <div className="flex justify-around items-center pt-3 border-t border-slate-200 mt-3">
                    {['🏠', '📊', '💬', '👤'].map((icon, i) => (
                      <button key={i} className={`text-sm ${i === 1 ? 'opacity-100' : 'opacity-40'}`}>
                        {icon}
                      </button>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-4 text-center">Progress Dashboard</p>
              </div>
            </div>
          </motion.div>

          {/* Iterations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white"
          >
            <h3 className="mb-4">Design Iterations Based on Testing</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-slate-300 mb-2">Enhanced Visual Hierarchy</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Added stronger borders to highlight "Today's Workout" card after 76% of users initially missed it among other content.
                </p>
              </div>
              <div>
                <h4 className="text-slate-300 mb-2">Simplified Set Tracking</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Replaced numeric input with simple tap-to-complete after observing users struggled with typing during workouts.
                </p>
              </div>
              <div>
                <h4 className="text-slate-300 mb-2">Progress Indicators</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Added "Step X of Y" in onboarding after 62% of users wanted to know how long setup would take.
                </p>
              </div>
              <div>
                <h4 className="text-slate-300 mb-2">Trainer Presence</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Moved trainer messages to dashboard main view after users reported feeling "alone" when messages were in separate tab.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
