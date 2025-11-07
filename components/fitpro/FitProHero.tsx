import { motion } from "motion/react";
import { Dumbbell, TrendingUp, Award, Play, CheckCircle, Target } from "lucide-react";

export function FitProHero() {
  return (
    <section className="relative pt-32 mb-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="rounded-3xl overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 border-8 border-white shadow-2xl"
        >
          <div className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
              {/* Title Section */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Personalised Fitness Coaching</h3>
                  <p className="text-slate-600">Connecting trainers with clients for sustainable results</p>
                </motion.div>
              </div>

              {/* Mobile Mockups */}
              <div className="flex justify-center items-end gap-8 flex-wrap">
                {/* iPhone 1 - Dashboard */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative"
                >
                  <div className="relative w-[280px]">
                    <div className="relative bg-slate-900 rounded-[38px] p-2.5 shadow-2xl">
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10" />
                      
                      <div className="bg-white rounded-[30px] overflow-hidden relative">
                        <div className="aspect-[9/19.5]">
                          {/* Header */}
                          <div className="px-4 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white pt-10">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <p className="text-[8px] opacity-90">Welcome back,</p>
                                <p className="text-xs font-bold">Lauren</p>
                              </div>
                              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full border-2 border-white"></div>
                            </div>
                          </div>

                          <div className="px-4 py-3">
                            {/* Today's Workout */}
                            <div className="mb-3">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="text-[10px] font-bold text-gray-900">Today's Workout</h3>
                                <span className="text-[8px] text-purple-600 font-semibold">💪 Let's go!</span>
                              </div>
                              <div className="bg-gradient-to-br from-violet-50 to-purple-50 border-2 border-purple-200 rounded-xl p-3">
                                <div className="flex items-center gap-2 mb-3">
                                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                                    <Dumbbell className="w-6 h-6 text-white" />
                                  </div>
                                  <div className="flex-1">
                                    <p className="text-[9px] font-bold text-gray-900">Upper Body Strength</p>
                                    <p className="text-[8px] text-gray-600">45 min • 8 exercises</p>
                                  </div>
                                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-purple-500">
                                    <Play className="w-4 h-4 text-purple-600 fill-purple-600" />
                                  </div>
                                </div>
                                <div className="bg-white rounded-lg p-2 mb-2">
                                  <div className="flex justify-between items-center mb-1">
                                    <span className="text-[8px] text-gray-600">Progress</span>
                                    <span className="text-[8px] font-bold text-purple-600">3/8 exercises</span>
                                  </div>
                                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-violet-600 to-purple-600 rounded-full" style={{ width: '37%' }}></div>
                                  </div>
                                </div>
                                <button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg py-2 text-[9px] font-bold shadow-lg text-center">
                                  Continue Workout
                                </button>
                              </div>
                            </div>

                            {/* Weekly Stats */}
                            <div className="mb-3">
                              <h3 className="text-[10px] font-bold text-gray-900 mb-2">This Week</h3>
                              <div className="grid grid-cols-3 gap-2">
                                {[
                                  { icon: '🔥', label: 'Streak', value: '12 days' },
                                  { icon: '💪', label: 'Workouts', value: '4/5' },
                                  { icon: '⏱️', label: 'Time', value: '180 min' }
                                ].map((stat, i) => (
                                  <div key={i} className="bg-white border border-gray-200 rounded-lg p-2 text-center">
                                    <div className="text-lg mb-1">{stat.icon}</div>
                                    <p className="text-[9px] font-bold text-gray-900">{stat.value}</p>
                                    <p className="text-[7px] text-gray-500">{stat.label}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Trainer Message */}
                            <div className="mb-2">
                              <h3 className="text-[10px] font-bold text-gray-900 mb-2">From Your Trainer</h3>
                              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-3">
                                <div className="flex items-start gap-2">
                                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-[8px] flex-shrink-0">
                                    TR
                                  </div>
                                  <div className="flex-1">
                                    <p className="text-[8px] font-bold text-gray-900 mb-1">Tom Richardson</p>
                                    <p className="text-[8px] text-gray-700">"Great progress this week! Keep pushing! 💪"</p>
                                    <p className="text-[7px] text-gray-500 mt-1">2 hours ago</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="grid grid-cols-2 gap-2">
                              <button className="bg-white border border-gray-300 rounded-lg py-2 text-[9px] font-semibold text-center">
                                📊 View Progress
                              </button>
                              <button className="bg-white border border-gray-300 rounded-lg py-2 text-[9px] font-semibold text-center">
                                💬 Message Trainer
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* iPhone 2 - Workout Screen */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="relative"
                >
                  <div className="relative w-[280px]">
                    <div className="relative bg-slate-900 rounded-[38px] p-2.5 shadow-2xl">
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10" />
                      
                      <div className="bg-white rounded-[30px] overflow-hidden relative">
                        <div className="aspect-[9/19.5]">
                          {/* Video Area */}
                          <div className="h-40 bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 relative pt-10">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                                <Play className="w-8 h-8 text-white fill-white" />
                              </div>
                            </div>
                            <div className="absolute top-12 left-3 bg-black/50 backdrop-blur px-2 py-1 rounded-full">
                              <span className="text-[8px] text-white font-bold">Exercise 4/8</span>
                            </div>
                            <div className="absolute top-12 right-3 bg-black/50 backdrop-blur px-2 py-1 rounded-full">
                              <span className="text-[8px] text-white font-bold">2:34</span>
                            </div>
                          </div>

                          <div className="px-4 py-3">
                            {/* Exercise Info */}
                            <div className="mb-3">
                              <h3 className="text-sm font-bold text-gray-900 mb-1">Dumbbell Chest Press</h3>
                              <p className="text-[9px] text-gray-600">3 sets × 12 reps • 15kg each</p>
                            </div>

                            {/* Sets Tracker */}
                            <div className="bg-gradient-to-br from-violet-50 to-purple-50 border border-purple-200 rounded-xl p-3 mb-3">
                              <p className="text-[8px] text-purple-900 font-bold mb-2">Track Your Sets</p>
                              <div className="space-y-2">
                                {[
                                  { set: 1, reps: 12, complete: true },
                                  { set: 2, reps: 12, complete: true },
                                  { set: 3, reps: 12, complete: false }
                                ].map((set, i) => (
                                  <div key={i} className={`flex items-center justify-between p-2 rounded-lg ${set.complete ? 'bg-green-100 border border-green-300' : 'bg-white border border-gray-300'}`}>
                                    <span className="text-[9px] font-semibold">Set {set.set}</span>
                                    <div className="flex items-center gap-2">
                                      <span className="text-[9px] text-gray-700">{set.reps} reps</span>
                                      {set.complete && <CheckCircle className="w-4 h-4 text-green-600" />}
                                      {!set.complete && (
                                        <button className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                                          <CheckCircle className="w-3.5 h-3.5 text-white" />
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Tips */}
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-2.5 mb-3">
                              <div className="flex gap-2">
                                <span className="text-sm">💡</span>
                                <div>
                                  <p className="text-[8px] font-bold text-blue-900 mb-1">Trainer Tip</p>
                                  <p className="text-[8px] text-blue-800">Keep your back flat and core engaged throughout the movement</p>
                                </div>
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="grid grid-cols-2 gap-2">
                              <button className="bg-white border border-gray-300 rounded-lg py-2.5 text-[9px] font-semibold text-center">
                                Skip Exercise
                              </button>
                              <button className="bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg py-2.5 text-[9px] font-bold shadow-lg text-center">
                                Next Exercise
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
              >
                <div className="text-center bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm">
                  <p className="text-2xl font-bold text-violet-600">85%</p>
                  <p className="text-xs text-gray-600 mt-1">User Retention</p>
                </div>
                <div className="text-center bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm">
                  <p className="text-2xl font-bold text-purple-600">15,000+</p>
                  <p className="text-xs text-gray-600 mt-1">Active Users</p>
                </div>
                <div className="text-center bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm">
                  <p className="text-2xl font-bold text-fuchsia-600">500+</p>
                  <p className="text-xs text-gray-600 mt-1">Certified Trainers</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
