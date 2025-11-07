import { motion } from "motion/react";
import { Calendar, FileText, Pill, User, Bell, Clock, CheckCircle, AlertCircle, Heart } from "lucide-react";

export function HealthHubHero() {
  return (
    <section className="relative pt-32 mb-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 border-8 border-white shadow-2xl"
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
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Accessible Patient Portal</h3>
                  <p className="text-slate-600">Designed for all ages and abilities</p>
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
                          <div className="bg-gradient-to-r from-teal-600 to-blue-600 px-4 py-3 text-white pt-10">
                            <div className="flex justify-between items-center">
                              <div>
                                <h2 className="text-xs font-bold">HealthHub</h2>
                                <p className="text-[8px] opacity-90 mt-0.5">Welcome back, Margaret</p>
                              </div>
                              <div className="flex gap-1.5">
                                <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                                  <Bell className="w-3 h-3" />
                                </div>
                                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                                  <User className="w-3 h-3" />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Main Content */}
                          <div className="px-4 py-3">
                            {/* Next Appointment Banner */}
                            <div className="bg-gradient-to-r from-blue-50 to-teal-50 border-2 border-blue-200 rounded-xl p-3 mb-3">
                              <div className="flex items-start gap-2">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <Calendar className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-[8px] font-bold text-blue-900 mb-1">Your Next Appointment</p>
                                  <p className="text-[10px] font-bold text-gray-900">Dr. Sarah Johnson</p>
                                  <div className="flex items-center gap-1.5 mt-1">
                                    <div className="flex items-center gap-0.5 text-gray-600">
                                      <Calendar className="w-2.5 h-2.5" />
                                      <span className="text-[8px]">Mon, 4th Nov</span>
                                    </div>
                                    <div className="flex items-center gap-0.5 text-gray-600">
                                      <Clock className="w-2.5 h-2.5" />
                                      <span className="text-[8px]">10:30 AM</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-1.5 mt-2">
                                <button className="bg-blue-600 text-white rounded-lg py-1.5 text-[8px] font-semibold flex items-center justify-center">
                                  View Details
                                </button>
                                <button className="bg-white border border-gray-300 rounded-lg py-1.5 text-[8px] font-semibold flex items-center justify-center">
                                  Cancel
                                </button>
                              </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="mb-3">
                              <h3 className="text-[10px] font-bold text-gray-900 mb-2">Quick Actions</h3>
                              <div className="grid grid-cols-2 gap-2">
                                {[
                                  { icon: Calendar, label: 'Book Appointment', color: 'from-blue-500 to-cyan-500' },
                                  { icon: FileText, label: 'View Test Results', color: 'from-teal-500 to-green-500' },
                                  { icon: Pill, label: 'Order Prescription', color: 'from-purple-500 to-pink-500' },
                                  { icon: User, label: 'Medical Records', color: 'from-orange-500 to-red-500' }
                                ].map((action, i) => {
                                  const IconComponent = action.icon;
                                  return (
                                    <div key={i} className="bg-white border-2 border-gray-200 rounded-xl p-2.5 hover:border-blue-400 transition-all cursor-pointer">
                                      <div className={`w-8 h-8 bg-gradient-to-br ${action.color} rounded-lg flex items-center justify-center mb-1.5`}>
                                        <IconComponent className="w-4 h-4 text-white" />
                                      </div>
                                      <p className="text-[8px] font-semibold text-gray-900 leading-tight">{action.label}</p>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Recent Activity */}
                            <div>
                              <h3 className="text-[10px] font-bold text-gray-900 mb-2">Recent Activity</h3>
                              <div className="space-y-1.5">
                                {[
                                  { icon: FileText, text: 'Blood Test Results Available', time: '2 days ago', status: 'success' },
                                  { icon: Pill, text: 'Prescription Ready for Collection', time: '5 days ago', status: 'info' }
                                ].map((item, i) => {
                                  const IconComponent = item.icon;
                                  return (
                                    <div key={i} className="bg-gray-50 rounded-lg p-2 flex items-center gap-2">
                                      <div className={`w-7 h-7 ${item.status === 'success' ? 'bg-green-100' : 'bg-blue-100'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                        <IconComponent className={`w-3.5 h-3.5 ${item.status === 'success' ? 'text-green-600' : 'text-blue-600'}`} />
                                      </div>
                                      <div className="flex-1">
                                        <p className="text-[8px] font-semibold text-gray-900">{item.text}</p>
                                        <p className="text-[7px] text-gray-500 mt-0.5">{item.time}</p>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* iPhone 2 - Book Appointment */}
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
                          {/* Header */}
                          <div className="bg-gradient-to-r from-teal-600 to-blue-600 px-4 py-3 text-white pt-10">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                              </div>
                              <h2 className="text-xs font-bold">Book an Appointment</h2>
                            </div>
                          </div>

                          {/* Form Content */}
                          <div className="px-4 py-3">
                            {/* Step Indicator */}
                            <div className="flex items-center gap-1.5 mb-3">
                              <div className="flex items-center gap-1.5 flex-1">
                                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white">
                                  <CheckCircle className="w-3.5 h-3.5" />
                                </div>
                                <div className="flex-1 h-0.5 bg-blue-600"></div>
                              </div>
                              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-[9px] font-bold">
                                2
                              </div>
                              <div className="flex-1 h-0.5 bg-gray-300"></div>
                              <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-[9px] font-bold">
                                3
                              </div>
                            </div>

                            <div className="mb-3">
                              <p className="text-[9px] text-gray-500 mb-0.5">Step 2 of 3</p>
                              <h3 className="text-xs font-bold text-gray-900">Choose Your Appointment Time</h3>
                            </div>

                            {/* Doctor Info */}
                            <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-xl p-2.5 mb-3">
                              <div className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-[9px]">
                                  SJ
                                </div>
                                <div>
                                  <p className="text-[10px] font-bold text-gray-900">Dr. Sarah Johnson</p>
                                  <p className="text-[8px] text-gray-600">General Practitioner</p>
                                </div>
                              </div>
                            </div>

                            {/* Time Slots */}
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <p className="text-[9px] font-bold text-gray-900">Available Times - Monday 4th Nov</p>
                              </div>
                              <div className="grid grid-cols-3 gap-1.5 mb-3">
                                {['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'].map((time, i) => (
                                  <button
                                    key={time}
                                    className={`py-2 rounded-lg text-[9px] font-semibold border-2 ${
                                      i === 3
                                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                                        : 'border-gray-200 bg-white text-gray-900 hover:border-blue-300'
                                    } flex items-center justify-center`}
                                  >
                                    {time}
                                  </button>
                                ))}
                              </div>

                              {/* Confirmation Section */}
                              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-2.5 mb-3">
                                <div className="flex items-start gap-1.5">
                                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <p className="text-[9px] font-bold text-green-900">Time Selected</p>
                                    <p className="text-[8px] text-green-800 mt-0.5">Monday 4th November at 10:30 AM</p>
                                  </div>
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-1.5">
                                <button className="border-2 border-gray-300 rounded-xl py-2.5 text-[9px] font-semibold flex items-center justify-center">
                                  Back
                                </button>
                                <button className="bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl py-2.5 text-[9px] font-bold shadow-lg flex items-center justify-center">
                                  Continue
                                </button>
                              </div>
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
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
              >
                <div className="text-center bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm">
                  <p className="text-2xl font-bold text-teal-600">95%</p>
                  <p className="text-xs text-gray-600 mt-1">User Satisfaction</p>
                </div>
                <div className="text-center bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm">
                  <p className="text-2xl font-bold text-blue-600">52,000+</p>
                  <p className="text-xs text-gray-600 mt-1">Active Users</p>
                </div>
                <div className="text-center bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm">
                  <p className="text-2xl font-bold text-green-600">43%</p>
                  <p className="text-xs text-gray-600 mt-1">Fewer Phone Calls</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
