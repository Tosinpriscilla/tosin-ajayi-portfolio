import { motion } from "motion/react";

export function HealthHubWireframes() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {/* Low Fidelity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h4 className="text-sm font-semibold text-gray-900 mb-4">Low Fidelity</h4>
        <div className="bg-white rounded-xl border-2 border-gray-300 p-6 aspect-[3/4]">
          <div className="space-y-4">
            {/* Header */}
            <div className="h-12 bg-gray-300 rounded-lg"></div>
            
            {/* Alert Banner */}
            <div className="border-2 border-gray-400 rounded-lg p-3 space-y-2">
              <div className="w-24 h-3 bg-gray-400 rounded"></div>
              <div className="w-full h-2 bg-gray-300 rounded"></div>
              <div className="w-3/4 h-2 bg-gray-300 rounded"></div>
              <div className="flex gap-2 mt-2">
                <div className="flex-1 h-8 bg-gray-300 rounded"></div>
                <div className="flex-1 h-8 bg-gray-200 rounded"></div>
              </div>
            </div>

            {/* Quick Actions Grid */}
            <div className="space-y-2">
              <div className="w-24 h-2 bg-gray-300 rounded"></div>
              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="border-2 border-gray-300 rounded-lg p-3 space-y-2">
                    <div className="w-8 h-8 bg-gray-300 rounded"></div>
                    <div className="w-20 h-2 bg-gray-300 rounded"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* List Items */}
            <div className="space-y-2">
              <div className="w-24 h-2 bg-gray-300 rounded"></div>
              {[1, 2].map((i) => (
                <div key={i} className="bg-gray-100 rounded-lg p-3 flex gap-3">
                  <div className="w-8 h-8 bg-gray-300 rounded flex-shrink-0"></div>
                  <div className="flex-1 space-y-1.5">
                    <div className="w-full h-2 bg-gray-300 rounded"></div>
                    <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mid Fidelity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h4 className="text-sm font-semibold text-gray-900 mb-4">Mid Fidelity</h4>
        <div className="bg-white rounded-xl border-2 border-gray-400 p-6 aspect-[3/4] shadow-lg">
          <div className="space-y-4">
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg p-3 flex justify-between items-center">
              <div>
                <div className="text-xs font-bold">HealthHub</div>
                <div className="text-[9px] opacity-90 mt-0.5">Welcome, Margaret</div>
              </div>
              <div className="flex gap-1.5">
                <div className="w-6 h-6 bg-white/20 rounded"></div>
                <div className="w-6 h-6 bg-white/20 rounded-full"></div>
              </div>
            </div>
            
            {/* Next Appointment */}
            <div className="border-2 border-blue-300 bg-blue-50 rounded-lg p-3 space-y-2">
              <div className="flex gap-2">
                <div className="w-10 h-10 bg-blue-500 rounded flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="text-[9px] text-blue-900 font-semibold mb-1">Next Appointment</div>
                  <div className="text-[10px] font-bold">Dr. Sarah Johnson</div>
                  <div className="text-[8px] text-gray-600 mt-1">Monday, 4th Nov • 10:30 AM</div>
                </div>
              </div>
              <div className="flex gap-1.5">
                <div className="flex-1 h-6 bg-blue-600 rounded text-[8px] text-white flex items-center justify-center font-semibold">View</div>
                <div className="flex-1 h-6 bg-white border border-gray-300 rounded text-[8px] flex items-center justify-center font-semibold">Cancel</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              <div className="text-[10px] font-bold">Quick Actions</div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'Book Appointment', color: 'from-blue-400 to-cyan-400' },
                  { label: 'Test Results', color: 'from-teal-400 to-green-400' },
                  { label: 'Prescription', color: 'from-purple-400 to-pink-400' },
                  { label: 'Records', color: 'from-orange-400 to-red-400' }
                ].map((action, i) => (
                  <div key={i} className="border-2 border-gray-300 rounded-lg p-2 space-y-1.5">
                    <div className={`w-8 h-8 bg-gradient-to-br ${action.color} rounded`}></div>
                    <div className="text-[8px] font-semibold">{action.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="space-y-2">
              <div className="text-[10px] font-bold">Recent Activity</div>
              {['Blood Test Results', 'Prescription Ready'].map((item, i) => (
                <div key={i} className="bg-gray-100 rounded-lg p-2 flex gap-2">
                  <div className={`w-7 h-7 ${i === 0 ? 'bg-green-100' : 'bg-blue-100'} rounded flex-shrink-0`}></div>
                  <div className="flex-1">
                    <div className="text-[9px] font-semibold">{item}</div>
                    <div className="text-[8px] text-gray-500 mt-0.5">{i === 0 ? '2 days ago' : '5 days ago'}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* High Fidelity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h4 className="text-sm font-semibold text-gray-900 mb-4">High Fidelity</h4>
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden aspect-[3/4] shadow-2xl">
          <div className="relative h-full flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 px-4 py-3 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xs font-bold">HealthHub</h2>
                  <p className="text-[9px] opacity-90 mt-0.5">Welcome back, Margaret</p>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-6 h-6 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/>
                    </svg>
                  </div>
                  <div className="w-6 h-6 bg-white/20 backdrop-blur rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 px-4 py-3 overflow-auto">
              {/* Next Appointment Banner */}
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 border-2 border-blue-200 rounded-xl p-3 mb-3">
                <div className="flex items-start gap-2 mb-2">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-[9px] font-bold text-blue-900">Your Next Appointment</p>
                    <p className="text-[10px] font-bold text-gray-900 mt-0.5">Dr. Sarah Johnson</p>
                    <div className="flex gap-2 mt-1">
                      <span className="text-[8px] text-gray-600">📅 Monday, 4th Nov</span>
                      <span className="text-[8px] text-gray-600">🕐 10:30 AM</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <button className="bg-blue-600 text-white rounded-lg py-1.5 text-[8px] font-semibold shadow-sm">
                    View Details
                  </button>
                  <button className="bg-white border border-gray-300 rounded-lg py-1.5 text-[8px] font-semibold">
                    Cancel
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mb-3">
                <h3 className="text-[10px] font-bold text-gray-900 mb-2">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { icon: '📅', label: 'Book Appointment', color: 'from-blue-500 to-cyan-500' },
                    { icon: '📋', label: 'Test Results', color: 'from-teal-500 to-green-500' },
                    { icon: '💊', label: 'Prescription', color: 'from-purple-500 to-pink-500' },
                    { icon: '👤', label: 'Records', color: 'from-orange-500 to-red-500' }
                  ].map((action, i) => (
                    <div key={i} className="bg-white border-2 border-gray-200 rounded-lg p-2.5 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer">
                      <div className={`w-8 h-8 bg-gradient-to-br ${action.color} rounded-lg flex items-center justify-center mb-1.5`}>
                        <span className="text-sm">{action.icon}</span>
                      </div>
                      <p className="text-[8px] font-semibold text-gray-900">{action.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h3 className="text-[10px] font-bold text-gray-900 mb-2">Recent Activity</h3>
                <div className="space-y-1.5">
                  {[
                    { emoji: '🩺', title: 'Blood Test Results Available', time: '2 days ago', bg: 'bg-green-50', iconBg: 'bg-green-100' },
                    { emoji: '💊', title: 'Prescription Ready', time: '5 days ago', bg: 'bg-blue-50', iconBg: 'bg-blue-100' }
                  ].map((item, i) => (
                    <div key={i} className={`${item.bg} rounded-lg p-2 flex items-center gap-2`}>
                      <div className={`w-7 h-7 ${item.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <span className="text-xs">{item.emoji}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-[9px] font-semibold text-gray-900">{item.title}</p>
                        <p className="text-[8px] text-gray-500 mt-0.5">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
