import { Calendar, FileText, Pill, User, Bell, CheckCircle, Clock } from "lucide-react";

export function HealthHubThumbnail() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 flex items-center justify-center p-8">
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
              <div className="px-3 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[7px] opacity-90">HealthHub</p>
                    <p className="text-[9px]">Welcome, Margaret</p>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                      <Bell className="w-2 h-2" />
                    </div>
                    <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                      <User className="w-2 h-2" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-3">
                {/* Next Appointment */}
                <div className="bg-gradient-to-r from-blue-50 to-teal-50 border-2 border-blue-200 rounded-xl p-2.5 mb-3">
                  <div className="flex items-start gap-2 mb-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[7px] font-bold text-blue-900 mb-0.5">Next Appointment</p>
                      <p className="text-[8px] font-bold text-gray-900">Dr. Sarah Johnson</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <Clock className="w-2 h-2 text-gray-600" />
                        <span className="text-[6px] text-gray-600">Mon, 10:30 AM</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="bg-blue-600 rounded-md py-1 text-center">
                      <span className="text-[7px] text-white font-semibold">View</span>
                    </div>
                    <div className="bg-white border border-gray-300 rounded-md py-1 text-center">
                      <span className="text-[7px] text-gray-700 font-semibold">Cancel</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mb-3">
                  <p className="text-[8px] font-bold text-gray-900 mb-1.5">Quick Actions</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { icon: Calendar, color: "from-blue-500 to-cyan-500" },
                      { icon: FileText, color: "from-teal-500 to-green-500" },
                      { icon: Pill, color: "from-purple-500 to-pink-500" },
                      { icon: User, color: "from-orange-500 to-red-500" }
                    ].map((action, i) => {
                      const IconComponent = action.icon;
                      return (
                        <div key={i} className="bg-white border border-gray-200 rounded-lg p-1.5">
                          <div className={`w-6 h-6 bg-gradient-to-br ${action.color} rounded-md flex items-center justify-center mx-auto`}>
                            <IconComponent className="w-3 h-3 text-white" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Recent Activity */}
                <div>
                  <p className="text-[8px] font-bold text-gray-900 mb-1.5">Recent Activity</p>
                  <div className="space-y-1">
                    <div className="bg-green-50 rounded-lg p-1.5 flex items-center gap-1.5">
                      <div className="w-5 h-5 bg-green-100 rounded-md flex items-center justify-center flex-shrink-0">
                        <FileText className="w-2.5 h-2.5 text-green-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[7px] text-gray-900 truncate">Blood Test Results</p>
                        <p className="text-[6px] text-gray-500">2 days ago</p>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-1.5 flex items-center gap-1.5">
                      <div className="w-5 h-5 bg-blue-100 rounded-md flex items-center justify-center flex-shrink-0">
                        <Pill className="w-2.5 h-2.5 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[7px] text-gray-900 truncate">Prescription Ready</p>
                        <p className="text-[6px] text-gray-500">5 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* iPhone Mockup - Booking */}
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
              <div className="px-3 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
                <p className="text-[9px] text-center">Book Appointment</p>
              </div>

              {/* Content */}
              <div className="p-3">
                {/* Step Indicator */}
                <div className="flex items-center gap-1 mb-2">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <div className="flex-1 h-0.5 bg-blue-600"></div>
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-[7px] font-bold">
                    2
                  </div>
                  <div className="flex-1 h-0.5 bg-gray-300"></div>
                  <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                </div>

                <p className="text-[8px] font-bold text-gray-900 mb-2">Choose Time</p>

                {/* Doctor Info */}
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-lg p-2 mb-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-7 h-7 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-[7px]">
                      SJ
                    </div>
                    <div>
                      <p className="text-[8px] font-bold text-gray-900">Dr. Sarah Johnson</p>
                      <p className="text-[6px] text-gray-600">General Practitioner</p>
                    </div>
                  </div>
                </div>

                {/* Time Slots */}
                <div className="grid grid-cols-3 gap-1 mb-2">
                  {['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'].map((time, i) => (
                    <div
                      key={time}
                      className={`py-1.5 rounded-md text-[7px] font-semibold text-center border ${
                        i === 3
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-gray-200 bg-white text-gray-900'
                      }`}
                    >
                      {time}
                    </div>
                  ))}
                </div>

                {/* Confirmation */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-1.5 mb-2">
                  <div className="flex items-start gap-1">
                    <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-[7px] font-bold text-green-900">Time Selected</p>
                      <p className="text-[6px] text-green-800">Mon 4th Nov, 10:30 AM</p>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-1">
                  <div className="border border-gray-300 rounded-md py-1.5 text-center">
                    <span className="text-[7px] font-semibold">Back</span>
                  </div>
                  <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-md py-1.5 text-center">
                    <span className="text-[7px] text-white font-bold">Continue</span>
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
