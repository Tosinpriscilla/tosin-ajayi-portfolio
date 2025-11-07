import { motion } from "motion/react";
import { Plane, Calendar, User, MapPin, CreditCard, CheckCircle } from "lucide-react";

export function TravelEaseHero() {
  return (
    <section className="relative pt-32 mb-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="rounded-3xl overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 border-8 border-white shadow-2xl"
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
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Streamlined Flight Booking</h3>
                  <p className="text-slate-600">Mobile-first design that makes booking effortless</p>
                </motion.div>
              </div>

              {/* Mobile Mockups */}
              <div className="flex justify-center items-end gap-6 flex-wrap">
                {/* iPhone 1 - Search */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative"
                >
                  <div className="relative w-[240px]">
                    <div className="relative bg-slate-900 rounded-[38px] p-2.5 shadow-2xl">
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10" />
                      
                      <div className="bg-white rounded-[30px] overflow-hidden relative">
                        <div className="aspect-[9/19.5]">
                          {/* Header */}
                          <div className="h-10 bg-gradient-to-r from-sky-600 to-blue-600 flex items-center justify-between px-5 pt-5 text-xs text-white">
                            <span className="font-medium text-[10px]">9:41</span>
                          </div>

                          <div className="px-4 py-4">
                            <h2 className="text-base font-bold text-gray-900 mb-1">Book Your Flight</h2>
                            <p className="text-[9px] text-gray-500 mb-4">Search thousands of destinations</p>

                            {/* Search Form */}
                            <div className="space-y-2.5">
                              {/* From/To */}
                              <div className="bg-white border-2 border-gray-200 rounded-xl p-3 relative">
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center">
                                  <svg className="w-3 h-3 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                  </svg>
                                </div>
                                <div className="space-y-2">
                                  <div>
                                    <p className="text-[8px] text-gray-500 mb-1">From</p>
                                    <div className="flex items-center gap-2">
                                      <MapPin className="w-3 h-3 text-sky-600" />
                                      <span className="text-[10px] font-semibold">London (LHR)</span>
                                    </div>
                                  </div>
                                  <div className="border-t border-gray-200 pt-2">
                                    <p className="text-[8px] text-gray-500 mb-1">To</p>
                                    <div className="flex items-center gap-2">
                                      <MapPin className="w-3 h-3 text-gray-400" />
                                      <span className="text-[10px] font-semibold">New York (JFK)</span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Date Picker */}
                              <div className="bg-white border-2 border-gray-200 rounded-xl p-3">
                                <p className="text-[8px] text-gray-500 mb-2">Dates</p>
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="bg-sky-50 border border-sky-200 rounded-lg p-2">
                                    <p className="text-[8px] text-sky-700 font-semibold mb-0.5">Departure</p>
                                    <div className="flex items-center gap-1">
                                      <Calendar className="w-2.5 h-2.5 text-sky-600" />
                                      <span className="text-[9px] font-bold text-gray-900">15 Dec</span>
                                    </div>
                                  </div>
                                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-2">
                                    <p className="text-[8px] text-gray-500 font-semibold mb-0.5">Return</p>
                                    <div className="flex items-center gap-1">
                                      <Calendar className="w-2.5 h-2.5 text-gray-400" />
                                      <span className="text-[9px] font-bold text-gray-900">22 Dec</span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Passengers */}
                              <div className="bg-white border-2 border-gray-200 rounded-xl p-3">
                                <p className="text-[8px] text-gray-500 mb-1">Passengers</p>
                                <div className="flex items-center gap-2">
                                  <User className="w-3 h-3 text-gray-400" />
                                  <span className="text-[10px] font-semibold">2 Adults, Economy</span>
                                </div>
                              </div>

                              {/* Search Button */}
                              <div className="pt-2">
                                <button className="w-full bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-xl py-3.5 text-xs font-bold shadow-lg shadow-sky-500/30">
                                  Search Flights
                                </button>
                              </div>
                            </div>

                            {/* Recent Searches */}
                            <div className="mt-4">
                              <h3 className="text-[9px] font-bold text-gray-900 mb-2">Recent Searches</h3>
                              <div className="space-y-1.5">
                                {[
                                  { from: 'LHR', to: 'NYC', date: '15 Dec' },
                                  { from: 'LHR', to: 'PAR', date: '20 Nov' }
                                ].map((search, i) => (
                                  <div key={i} className="bg-gray-50 rounded-lg p-2 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                      <Plane className="w-3 h-3 text-gray-400" />
                                      <span className="text-[9px] font-semibold text-gray-700">{search.from} → {search.to}</span>
                                    </div>
                                    <span className="text-[8px] text-gray-500">{search.date}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* iPhone 2 - Results */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="relative"
                >
                  <div className="relative w-[240px]">
                    <div className="relative bg-slate-900 rounded-[38px] p-2.5 shadow-2xl">
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10" />
                      
                      <div className="bg-white rounded-[30px] overflow-hidden relative">
                        <div className="aspect-[9/19.5]">
                          {/* Header */}
                          <div className="px-4 py-3 bg-gradient-to-r from-sky-600 to-blue-600 text-white pt-10">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <p className="text-[8px] opacity-90">LHR → JFK</p>
                                <p className="text-xs font-bold">Best Options</p>
                              </div>
                            </div>
                          </div>

                          <div className="px-4 py-3">
                            {/* Filters */}
                            <div className="flex gap-1.5 mb-3 overflow-x-auto">
                              {['Best', 'Cheapest', 'Fastest'].map((filter, i) => (
                                <div key={filter} className={`px-2.5 py-1.5 rounded-full text-[8px] font-semibold whitespace-nowrap ${i === 0 ? 'bg-sky-600 text-white' : 'bg-gray-100 text-gray-700'}`}>
                                  {filter}
                                </div>
                              ))}
                            </div>

                            {/* Flight Cards */}
                            <div className="space-y-2">
                              {[
                                { airline: 'British Airways', price: '£342', time: '8h 15m', stops: 'Direct' },
                                { airline: 'Virgin Atlantic', price: '£365', time: '8h 30m', stops: 'Direct' },
                                { airline: 'American Airlines', price: '£298', time: '10h 45m', stops: '1 stop' }
                              ].map((flight, i) => (
                                <div key={i} className={`bg-white border-2 ${i === 0 ? 'border-sky-500 bg-sky-50/50' : 'border-gray-200'} rounded-xl p-3`}>
                                  <div className="flex justify-between items-start mb-2">
                                    <div>
                                      <p className="text-[9px] font-bold text-gray-900">{flight.airline}</p>
                                      <div className="flex items-center gap-2 mt-1">
                                        <span className="text-[8px] text-gray-600">07:30</span>
                                        <div className="flex-1 flex items-center gap-1">
                                          <div className="h-px bg-gray-300 w-8"></div>
                                          <Plane className="w-2.5 h-2.5 text-gray-400" />
                                          <div className="h-px bg-gray-300 w-8"></div>
                                        </div>
                                        <span className="text-[8px] text-gray-600">15:45</span>
                                      </div>
                                      <p className="text-[8px] text-gray-500 mt-1">{flight.time} • {flight.stops}</p>
                                    </div>
                                    <div className="text-right">
                                      <p className="text-sm font-bold text-sky-600">{flight.price}</p>
                                      <p className="text-[7px] text-gray-500">per person</p>
                                    </div>
                                  </div>
                                  {i === 0 && (
                                    <div className="pt-2 border-t border-sky-200">
                                      <div className="bg-gradient-to-r from-sky-600 to-blue-600 rounded-lg py-1.5 text-center">
                                        <span className="text-[9px] text-white font-bold">Select Flight</span>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* iPhone 3 - Confirmation */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="relative"
                >
                  <div className="relative w-[240px]">
                    <div className="relative bg-slate-900 rounded-[38px] p-2.5 shadow-2xl">
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10" />
                      
                      <div className="bg-white rounded-[30px] overflow-hidden relative">
                        <div className="aspect-[9/19.5] flex flex-col items-center justify-center px-4 py-8">
                          {/* Success Icon */}
                          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4">
                            <CheckCircle className="w-8 h-8 text-white" />
                          </div>

                          <h3 className="text-base font-bold text-gray-900 mb-1">Booking Confirmed!</h3>
                          <p className="text-[10px] text-gray-600 mb-6 text-center">Your flight is booked and confirmation<br/>has been sent to your email</p>

                          {/* Booking Summary */}
                          <div className="w-full bg-gradient-to-br from-sky-50 to-blue-50 border-2 border-sky-200 rounded-xl p-4 mb-4">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center">
                                <Plane className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <p className="text-xs font-bold text-gray-900">British Airways</p>
                                <p className="text-[9px] text-gray-600">BA 0178</p>
                              </div>
                            </div>
                            <div className="space-y-2 pt-3 border-t border-sky-200">
                              <div className="flex justify-between">
                                <span className="text-[9px] text-gray-600">Route</span>
                                <span className="text-[9px] font-semibold text-gray-900">LHR → JFK</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-[9px] text-gray-600">Date</span>
                                <span className="text-[9px] font-semibold text-gray-900">15 Dec 2024</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-[9px] text-gray-600">Passengers</span>
                                <span className="text-[9px] font-semibold text-gray-900">2 Adults</span>
                              </div>
                              <div className="flex justify-between pt-2 border-t border-sky-200">
                                <span className="text-[9px] font-bold text-gray-900">Total</span>
                                <span className="text-xs font-bold text-sky-600">£684.00</span>
                              </div>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="w-full space-y-2">
                            <button className="w-full bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-xl py-3 text-xs font-bold shadow-lg">
                              View Booking
                            </button>
                            <button className="w-full bg-white border border-gray-300 rounded-xl py-2.5 text-xs font-semibold">
                              Download Receipt
                            </button>
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
                  <p className="text-2xl font-bold text-sky-600">60%</p>
                  <p className="text-xs text-gray-600 mt-1">Faster Bookings</p>
                </div>
                <div className="text-center bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm">
                  <p className="text-2xl font-bold text-blue-600">45%</p>
                  <p className="text-xs text-gray-600 mt-1">Mobile Conversions↑</p>
                </div>
                <div className="text-center bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm">
                  <p className="text-2xl font-bold text-green-600">38%</p>
                  <p className="text-xs text-gray-600 mt-1">Less Abandonment</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
