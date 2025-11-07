import { Plane, Calendar, MapPin, User, CheckCircle } from "lucide-react";

export function TravelEaseThumbnail() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 flex items-center justify-center p-8">
      <div className="flex gap-4 items-center justify-center scale-90">
        {/* iPhone Mockup - Search */}
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
              <div className="h-8 bg-gradient-to-r from-sky-600 to-blue-600 flex items-center px-3 text-white">
                <span className="text-[9px] font-semibold">TravelEase</span>
              </div>

              {/* Content */}
              <div className="p-3">
                <h2 className="text-[10px] font-bold text-gray-900 mb-0.5">Book Your Flight</h2>
                <p className="text-[7px] text-gray-500 mb-2.5">Search thousands of destinations</p>

                {/* Search Form */}
                <div className="space-y-2">
                  {/* From/To */}
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-2 relative">
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 bg-sky-100 rounded-full flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                    <div className="space-y-1.5">
                      <div>
                        <p className="text-[6px] text-gray-500 mb-0.5">From</p>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-2.5 h-2.5 text-sky-600" />
                          <span className="text-[8px] font-semibold">London (LHR)</span>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 pt-1.5">
                        <p className="text-[6px] text-gray-500 mb-0.5">To</p>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-2.5 h-2.5 text-gray-400" />
                          <span className="text-[8px] font-semibold">New York (JFK)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Date Picker */}
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-2">
                    <p className="text-[6px] text-gray-500 mb-1.5">Dates</p>
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="bg-sky-50 border border-sky-200 rounded-lg p-1.5">
                        <p className="text-[6px] text-sky-700 font-semibold mb-0.5">Departure</p>
                        <div className="flex items-center gap-0.5">
                          <Calendar className="w-2 h-2 text-sky-600" />
                          <span className="text-[7px] font-bold text-gray-900">15 Dec</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-1.5">
                        <p className="text-[6px] text-gray-500 font-semibold mb-0.5">Return</p>
                        <div className="flex items-center gap-0.5">
                          <Calendar className="w-2 h-2 text-gray-400" />
                          <span className="text-[7px] font-bold text-gray-900">22 Dec</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Passengers */}
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-2">
                    <p className="text-[6px] text-gray-500 mb-1">Passengers</p>
                    <div className="flex items-center gap-1.5">
                      <User className="w-2.5 h-2.5 text-gray-400" />
                      <span className="text-[8px] font-semibold">2 Adults, Economy</span>
                    </div>
                  </div>

                  {/* Search Button */}
                  <div className="pt-1">
                    <div className="bg-gradient-to-r from-sky-600 to-blue-600 rounded-xl py-2.5 text-center shadow-lg">
                      <span className="text-[8px] text-white font-bold">Search Flights</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* iPhone Mockup - Results */}
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
              <div className="px-3 py-2 bg-gradient-to-r from-sky-600 to-blue-600 text-white">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[6px] opacity-90">LHR → JFK</p>
                    <p className="text-[9px] font-bold">Best Options</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-3">
                {/* Filters */}
                <div className="flex gap-1 mb-2 overflow-x-auto">
                  {['Best', 'Cheapest', 'Fastest'].map((filter, i) => (
                    <div key={filter} className={`px-2 py-1 rounded-full text-[6px] font-semibold whitespace-nowrap ${i === 0 ? 'bg-sky-600 text-white' : 'bg-gray-100 text-gray-700'}`}>
                      {filter}
                    </div>
                  ))}
                </div>

                {/* Flight Cards */}
                <div className="space-y-1.5">
                  {[
                    { airline: 'British Airways', price: '£342', time: '8h 15m', stops: 'Direct' },
                    { airline: 'Virgin Atlantic', price: '£365', time: '8h 30m', stops: 'Direct' },
                    { airline: 'American Airlines', price: '£298', time: '10h 45m', stops: '1 stop' }
                  ].map((flight, i) => (
                    <div key={i} className={`bg-white border-2 ${i === 0 ? 'border-sky-500 bg-sky-50/50' : 'border-gray-200'} rounded-xl p-2`}>
                      <div className="flex justify-between items-start mb-1.5">
                        <div>
                          <p className="text-[7px] font-bold text-gray-900">{flight.airline}</p>
                          <div className="flex items-center gap-1.5 mt-1">
                            <span className="text-[6px] text-gray-600">07:30</span>
                            <div className="flex items-center gap-0.5">
                              <div className="h-px bg-gray-300 w-4"></div>
                              <Plane className="w-2 h-2 text-gray-400" />
                              <div className="h-px bg-gray-300 w-4"></div>
                            </div>
                            <span className="text-[6px] text-gray-600">15:45</span>
                          </div>
                          <p className="text-[6px] text-gray-500 mt-0.5">{flight.time} • {flight.stops}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] font-bold text-sky-600">{flight.price}</p>
                          <p className="text-[5px] text-gray-500">per person</p>
                        </div>
                      </div>
                      {i === 0 && (
                        <div className="pt-1.5 border-t border-sky-200">
                          <div className="bg-gradient-to-r from-sky-600 to-blue-600 rounded-lg py-1 text-center">
                            <span className="text-[7px] text-white font-bold">Select Flight</span>
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

        {/* iPhone Mockup - Confirmation */}
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

              {/* Success Content */}
              <div className="p-3 text-center flex flex-col items-center justify-center h-[calc(100%-24px)]">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-[10px] font-bold text-gray-900 mb-0.5">Booking Confirmed!</h3>
                <p className="text-[7px] text-gray-600 mb-3 text-center">Your flight is booked and<br/>confirmation sent to email</p>

                {/* Booking Summary */}
                <div className="w-full bg-gradient-to-br from-sky-50 to-blue-50 border-2 border-sky-200 rounded-xl p-2.5 mb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center">
                      <Plane className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[8px] font-bold text-gray-900">British Airways</p>
                      <p className="text-[7px] text-gray-600">BA 0178</p>
                    </div>
                  </div>
                  <div className="space-y-1.5 pt-2 border-t border-sky-200">
                    <div className="flex justify-between">
                      <span className="text-[7px] text-gray-600">Route</span>
                      <span className="text-[7px] font-semibold text-gray-900">LHR → JFK</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[7px] text-gray-600">Date</span>
                      <span className="text-[7px] font-semibold text-gray-900">15 Dec 2024</span>
                    </div>
                    <div className="flex justify-between pt-1.5 border-t border-sky-200">
                      <span className="text-[7px] font-bold text-gray-900">Total</span>
                      <span className="text-[9px] font-bold text-sky-600">£684.00</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="w-full space-y-1">
                  <div className="bg-gradient-to-r from-sky-600 to-blue-600 rounded-xl py-2 text-center shadow-lg">
                    <span className="text-[8px] text-white font-bold">View Booking</span>
                  </div>
                  <div className="bg-white border border-gray-300 rounded-xl py-1.5 text-center">
                    <span className="text-[7px] font-semibold">Download Receipt</span>
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
