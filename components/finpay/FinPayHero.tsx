import { motion } from "motion/react";
import { Home, Send, CreditCard, User, Bell, Eye, TrendingUp } from "lucide-react";

export function FinPayHero() {
  return (
    <section className="relative pt-32 mb-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-8 border-white shadow-2xl"
        >
          <div className="py-16 px-6">
            <div className="max-w-5xl mx-auto">
              {/* Title Section */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Redesigned Mobile Experience</h3>
                  <p className="text-slate-600">From cluttered interface to streamlined banking</p>
                </motion.div>
              </div>

              {/* iPhone Mockups */}
              <div className="flex justify-center items-end gap-6 flex-wrap">
                {/* iPhone 1 - Home Screen */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative"
                >
                  <div className="relative w-[240px]">
                    {/* iPhone Frame */}
                    <div className="relative bg-slate-900 rounded-[38px] p-2.5 shadow-2xl">
                      {/* Dynamic Island */}
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10" />
                      
                      {/* Screen Content */}
                      <div className="bg-gradient-to-b from-indigo-50 to-white rounded-[30px] overflow-hidden relative">
                        <div className="aspect-[9/19.5]">
                          {/* Status Bar */}
                          <div className="h-10 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-between px-5 pt-5 text-xs text-white">
                            <span className="font-medium text-[10px]">9:41</span>
                            <div className="flex gap-1 items-center">
                              <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                              </svg>
                              <div className="w-4 h-1.5 border border-white rounded-sm relative">
                                <div className="absolute right-0 top-0 bottom-0 w-2.5 bg-white rounded-l"></div>
                              </div>
                            </div>
                          </div>

                          {/* Header */}
                          <div className="px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="text-[9px] opacity-90">Welcome back,</p>
                                <p className="text-xs font-semibold">Priscilla Ajayi</p>
                              </div>
                              <div className="flex gap-1.5">
                                <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                                  <Bell className="w-2.5 h-2.5" />
                                </div>
                                <div className="w-5 h-5 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full" />
                              </div>
                            </div>
                          </div>

                          {/* Balance Card */}
                          <div className="px-4 -mt-2 mb-2.5">
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-3 shadow-xl relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-12 h-12 bg-indigo-500/10 rounded-full -mr-6 -mt-6" />
                              
                              <div className="relative">
                                <div className="flex justify-between items-start mb-1.5">
                                  <div>
                                    <div className="flex items-center gap-1 mb-0.5">
                                      <p className="text-gray-400 text-[9px]">Total Balance</p>
                                      <Eye className="w-1.5 h-1.5 text-gray-400" />
                                    </div>
                                    <h2 className="text-base font-bold">£12,485</h2>
                                    <div className="flex items-center gap-0.5 text-green-400 text-[9px] mt-0.5">
                                      <TrendingUp className="w-1.5 h-1.5" />
                                      <span>+12.5%</span>
                                    </div>
                                  </div>
                                  <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                                    <CreditCard className="w-3 h-3" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Quick Transfer CTA */}
                          <div className="px-4 mb-2.5">
                            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-2.5 flex items-center justify-between text-white shadow-lg">
                              <div className="flex items-center gap-1.5">
                                <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                                  <Send className="w-3 h-3" />
                                </div>
                                <div>
                                  <p className="text-[9px] font-semibold">Quick Transfer</p>
                                  <p className="text-[8px] opacity-80">Send instantly</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Quick Actions */}
                          <div className="px-4 mb-2.5">
                            <div className="grid grid-cols-3 gap-1.5">
                              {[
                                { icon: CreditCard, label: 'Cards', color: 'from-blue-500 to-cyan-500' },
                                { icon: User, label: 'Profile', color: 'from-purple-500 to-pink-500' },
                                { icon: TrendingUp, label: 'Stats', color: 'from-green-500 to-emerald-500' }
                              ].map((action, i) => (
                                <div key={i} className="bg-white rounded-lg p-1.5 text-center shadow-sm border border-gray-100">
                                  <div className={`w-5 h-5 bg-gradient-to-br ${action.color} rounded-md flex items-center justify-center mx-auto mb-0.5`}>
                                    <action.icon className="w-2.5 h-2.5 text-white" />
                                  </div>
                                  <p className="text-[8px] text-gray-700">{action.label}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Recent Activity */}
                          <div className="px-4 pb-12">
                            <h3 className="text-[9px] text-gray-900 font-semibold mb-1.5">Recent</h3>
                            <div className="space-y-1.5">
                              {[
                                { name: 'Tesco', amount: '-£42.50', icon: '🛒' },
                                { name: 'Salary', amount: '+£3,200', icon: '💰' }
                              ].map((tx, i) => (
                                <div key={i} className="bg-white rounded-lg p-1.5 flex justify-between items-center shadow-sm border border-gray-100">
                                  <div className="flex gap-1.5 items-center">
                                    <div className="w-5 h-5 bg-gray-100 rounded-md flex items-center justify-center text-[8px]">
                                      {tx.icon}
                                    </div>
                                    <p className="text-[9px] text-gray-900 font-medium">{tx.name}</p>
                                  </div>
                                  <p className={`text-[9px] font-semibold ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-gray-900'}`}>
                                    {tx.amount}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Bottom Nav */}
                          <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-gray-200 px-3 py-1.5 rounded-b-[30px]">
                            <div className="flex justify-around items-center">
                              <div className="flex flex-col items-center">
                                <div className="w-5 h-5 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-md flex items-center justify-center">
                                  <Home className="w-2.5 h-2.5 text-white" />
                                </div>
                              </div>
                              <Send className="w-3.5 h-3.5 text-gray-400" />
                              <CreditCard className="w-3.5 h-3.5 text-gray-400" />
                              <User className="w-3.5 h-3.5 text-gray-400" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* iPhone 2 - Transfer Screen */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="relative"
                >
                  <div className="relative w-[240px]">
                    {/* iPhone Frame */}
                    <div className="relative bg-slate-900 rounded-[38px] p-2.5 shadow-2xl">
                      {/* Dynamic Island */}
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10" />
                      
                      {/* Screen Content */}
                      <div className="bg-white rounded-[30px] overflow-hidden relative">
                        <div className="aspect-[9/19.5]">
                          {/* Status Bar */}
                          <div className="h-10 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-between px-5 pt-5 text-xs text-white">
                            <span className="font-medium text-[10px]">9:41</span>
                            <div className="flex gap-1 items-center">
                              <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                              </svg>
                              <div className="w-4 h-1.5 border border-white rounded-sm relative">
                                <div className="absolute right-0 top-0 bottom-0 w-2.5 bg-white rounded-l"></div>
                              </div>
                            </div>
                          </div>

                          {/* Header */}
                          <div className="px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                              </div>
                              <p className="text-xs font-semibold">Quick Transfer</p>
                            </div>
                          </div>

                          {/* Transfer Form */}
                          <div className="px-4 py-4">
                            <div className="mb-3">
                              <p className="text-[9px] text-gray-600 mb-1.5">Send to</p>
                              <div className="bg-gray-50 rounded-lg p-2.5 border border-gray-200">
                                <div className="flex items-center gap-2">
                                  <div className="w-7 h-7 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-[9px] font-semibold">
                                    JD
                                  </div>
                                  <div>
                                    <p className="text-[9px] font-semibold text-gray-900">John Doe</p>
                                    <p className="text-[8px] text-gray-500">**** 4532</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="mb-3">
                              <p className="text-[9px] text-gray-600 mb-1.5">Amount</p>
                              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 text-center">
                                <p className="text-2xl font-bold text-slate-900">£250</p>
                              </div>
                            </div>

                            <div className="mb-3">
                              <p className="text-[9px] text-gray-600 mb-1.5">Note (optional)</p>
                              <div className="bg-gray-50 rounded-lg p-2.5 border border-gray-200">
                                <p className="text-[9px] text-gray-400">Add a note...</p>
                              </div>
                            </div>

                            {/* Recent Contacts */}
                            <div className="mb-16">
                              <p className="text-[9px] text-gray-900 font-semibold mb-2">Recent contacts</p>
                              <div className="flex gap-2">
                                {['SJ', 'MK', 'RL'].map((initials, i) => (
                                  <div key={i} className="flex flex-col items-center">
                                    <div className="w-9 h-9 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center text-gray-700 text-[9px] font-semibold">
                                      {initials}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Send Button */}
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-3 text-center shadow-lg">
                                <p className="text-xs font-semibold text-white">Send £250</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* iPhone 3 - Confirmation Screen */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="relative"
                >
                  <div className="relative w-[240px]">
                    {/* iPhone Frame */}
                    <div className="relative bg-slate-900 rounded-[38px] p-2.5 shadow-2xl">
                      {/* Dynamic Island */}
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10" />
                      
                      {/* Screen Content */}
                      <div className="bg-white rounded-[30px] overflow-hidden relative">
                        <div className="aspect-[9/19.5] flex flex-col items-center justify-center px-4">
                          {/* Success Icon */}
                          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>

                          <h3 className="text-base font-bold text-slate-900 mb-1.5">Transfer Complete!</h3>
                          <p className="text-[10px] text-gray-600 mb-6">Your money is on its way</p>

                          {/* Transfer Details */}
                          <div className="w-full bg-gray-50 rounded-xl p-4 mb-4">
                            <div className="flex justify-between items-center mb-2">
                              <p className="text-[9px] text-gray-600">Sent to</p>
                              <p className="text-[10px] font-semibold text-gray-900">John Doe</p>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                              <p className="text-[9px] text-gray-600">Amount</p>
                              <p className="text-[10px] font-semibold text-gray-900">£250.00</p>
                            </div>
                            <div className="flex justify-between items-center">
                              <p className="text-[9px] text-gray-600">Time</p>
                              <p className="text-[10px] font-semibold text-gray-900">2:34 PM</p>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="absolute bottom-4 left-4 right-4 space-y-2">
                            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-3 text-center shadow-lg">
                              <p className="text-xs font-semibold text-white">Done</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-xl p-2.5 text-center">
                              <p className="text-[10px] font-semibold text-gray-700">Share Receipt</p>
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
                  <p className="text-2xl font-bold text-indigo-600">65%</p>
                  <p className="text-xs text-gray-600 mt-1">Faster Transfers</p>
                </div>
                <div className="text-center bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm">
                  <p className="text-2xl font-bold text-green-600">89%</p>
                  <p className="text-xs text-gray-600 mt-1">User Satisfaction</p>
                </div>
                <div className="text-center bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm">
                  <p className="text-2xl font-bold text-purple-600">3 Steps</p>
                  <p className="text-xs text-gray-600 mt-1">From 5 Steps</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
