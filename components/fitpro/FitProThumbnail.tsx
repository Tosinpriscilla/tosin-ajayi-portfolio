import { Dumbbell, Play, CheckCircle } from "lucide-react";

export function FitProThumbnail() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 flex items-center justify-center p-8">
      <div className="flex gap-4 items-center justify-center scale-90">
        {/* iPhone Mockup - Dashboard */}
        <div className="relative">
          <div className="w-[140px] bg-slate-900 rounded-[28px] p-2 shadow-2xl">
            <div className="bg-white rounded-[20px] overflow-hidden relative">
              {/* Status Bar */}
              <div className="px-4 py-1.5 flex justify-between items-center text-[8px]">
                <span className="text-slate-900">9:41</span>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-2 border border-slate-900 rounded-sm relative">
                    <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-slate-900 rounded-l"></div>
                  </div>
                </div>
              </div>

              {/* Header */}
              <div className="px-3 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[7px] opacity-90">Welcome back,</p>
                    <p className="text-[9px]">Lauren</p>
                  </div>
                  <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full border border-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-3">
                {/* Today's Workout */}
                <div className="mb-2.5">
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-[8px] font-bold text-gray-900">Today's Workout</p>
                    <span className="text-[6px] text-purple-600 font-semibold">💪 Let's go!</span>
                  </div>
                  <div className="bg-gradient-to-br from-violet-50 to-purple-50 border-2 border-purple-200 rounded-xl p-2.5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-9 h-9 bg-purple-500 rounded-lg flex items-center justify-center">
                        <Dumbbell className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[8px] font-bold text-gray-900">Upper Body Strength</p>
                        <p className="text-[6px] text-gray-600">45 min • 8 exercises</p>
                      </div>
                      <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center border-2 border-purple-500">
                        <Play className="w-3.5 h-3.5 text-purple-600 fill-purple-600" />
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-1.5 mb-1.5">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-[6px] text-gray-600">Progress</span>
                        <span className="text-[6px] font-bold text-purple-600">3/8 exercises</span>
                      </div>
                      <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-violet-600 to-purple-600 rounded-full" style={{ width: '37%' }}></div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg py-1.5 text-center">
                      <span className="text-[7px] text-white font-bold">Continue Workout</span>
                    </div>
                  </div>
                </div>

                {/* Weekly Stats */}
                <div className="mb-2">
                  <p className="text-[8px] font-bold text-gray-900 mb-1.5">This Week</p>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { icon: '🔥', label: 'Streak', value: '12 days' },
                      { icon: '💪', label: 'Workouts', value: '4/5' },
                      { icon: '⏱️', label: 'Time', value: '180 min' }
                    ].map((stat, i) => (
                      <div key={i} className="bg-white border border-gray-200 rounded-lg p-1.5 text-center">
                        <div className="text-base mb-0.5">{stat.icon}</div>
                        <p className="text-[7px] font-bold text-gray-900">{stat.value}</p>
                        <p className="text-[5px] text-gray-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trainer Message */}
                <div>
                  <p className="text-[8px] font-bold text-gray-900 mb-1.5">From Your Trainer</p>
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-2">
                    <div className="flex items-start gap-1.5">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-[6px] flex-shrink-0">
                        TR
                      </div>
                      <div className="flex-1">
                        <p className="text-[7px] font-bold text-gray-900 mb-0.5">Tom Richardson</p>
                        <p className="text-[6px] text-gray-700">"Great progress this week!"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* iPhone Mockup - Workout */}
        <div className="relative">
          <div className="w-[140px] bg-slate-900 rounded-[28px] p-2 shadow-2xl">
            <div className="bg-white rounded-[20px] overflow-hidden relative">
              {/* Status Bar */}
              <div className="px-4 py-1.5 flex justify-between items-center text-[8px]">
                <span className="text-slate-900">9:41</span>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-2 border border-slate-900 rounded-sm relative">
                    <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-slate-900 rounded-l"></div>
                  </div>
                </div>
              </div>

              {/* Video Area */}
              <div className="h-24 bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 relative flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
                <div className="absolute top-2 left-2 bg-black/50 backdrop-blur px-1.5 py-0.5 rounded-full">
                  <span className="text-[6px] text-white font-bold">Exercise 4/8</span>
                </div>
                <div className="absolute top-2 right-2 bg-black/50 backdrop-blur px-1.5 py-0.5 rounded-full">
                  <span className="text-[6px] text-white font-bold">2:34</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-3">
                {/* Exercise Info */}
                <div className="mb-2">
                  <h3 className="text-[9px] font-bold text-gray-900 mb-0.5">Dumbbell Chest Press</h3>
                  <p className="text-[7px] text-gray-600">3 sets × 12 reps • 15kg each</p>
                </div>

                {/* Sets Tracker */}
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 border border-purple-200 rounded-xl p-2 mb-2">
                  <p className="text-[7px] text-purple-900 font-bold mb-1.5">Track Your Sets</p>
                  <div className="space-y-1.5">
                    {[
                      { set: 1, reps: 12, complete: true },
                      { set: 2, reps: 12, complete: true },
                      { set: 3, reps: 12, complete: false }
                    ].map((set, i) => (
                      <div key={i} className={`flex items-center justify-between p-1.5 rounded-lg ${set.complete ? 'bg-green-100 border border-green-300' : 'bg-white border border-gray-300'}`}>
                        <span className="text-[7px] font-semibold">Set {set.set}</span>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[7px] text-gray-700">{set.reps} reps</span>
                          {set.complete ? (
                            <CheckCircle className="w-3 h-3 text-green-600" />
                          ) : (
                            <div className="w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-2.5 h-2.5 text-white" />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tips */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-1.5 mb-2">
                  <div className="flex gap-1.5">
                    <span className="text-[10px]">💡</span>
                    <div>
                      <p className="text-[6px] font-bold text-blue-900 mb-0.5">Trainer Tip</p>
                      <p className="text-[6px] text-blue-800">Keep your back flat and core engaged</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="bg-white border border-gray-300 rounded-lg py-1.5 text-center">
                    <span className="text-[7px] font-semibold">Skip Exercise</span>
                  </div>
                  <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg py-1.5 text-center">
                    <span className="text-[7px] text-white font-bold">Next Exercise</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
