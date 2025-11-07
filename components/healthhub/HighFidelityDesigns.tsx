import { motion } from "motion/react";
import { Calendar, Heart, Activity, FileText, User, Clock, Star, ChevronRight, Bell, Search, Download, CheckCircle, AlertCircle, Shield, Pill, Settings, LogOut, Check, ArrowRight } from "lucide-react";

export function HighFidelityDesigns() {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Onboarding - Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-sm font-semibold text-gray-900 mb-4">Onboarding - Welcome</h4>
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl border border-gray-200 overflow-hidden aspect-[3/4] shadow-2xl">
            <div className="h-full p-6 flex flex-col justify-between">
              {/* Content */}
              <div className="flex-1 flex flex-col items-center justify-center space-y-4 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-teal-200">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-gray-900">Welcome to HealthHub</h2>
                  <p className="text-[11px] text-gray-600 mt-2 px-6 leading-relaxed">
                    Manage your healthcare appointments, view test results, and access your medical records—all in one secure place
                  </p>
                </div>
                
                {/* Feature Pills */}
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  <div className="bg-white/80 backdrop-blur-sm border border-teal-200 rounded-full px-3 py-1 flex items-center gap-1.5 shadow-sm">
                    <Shield className="w-3 h-3 text-teal-600" />
                    <span className="text-[8px] font-semibold text-teal-700">Secure</span>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-3 py-1 flex items-center gap-1.5 shadow-sm">
                    <CheckCircle className="w-3 h-3 text-blue-600" />
                    <span className="text-[8px] font-semibold text-blue-700">Easy to Use</span>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-full px-3 py-1 flex items-center gap-1.5 shadow-sm">
                    <Heart className="w-3 h-3 text-green-600" />
                    <span className="text-[8px] font-semibold text-green-700">Trusted</span>
                  </div>
                </div>
              </div>
              
              {/* Progress dots */}
              <div className="flex justify-center gap-2 mb-4">
                <div className="w-8 h-1.5 bg-teal-600 rounded-full shadow-sm"></div>
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
              </div>
              
              {/* CTA */}
              <button className="w-full h-12 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl text-[11px] font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Registration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4 className="text-sm font-semibold text-gray-900 mb-4">Registration</h4>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden aspect-[3/4] shadow-2xl">
            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-teal-600 to-blue-600 px-4 py-3 text-white">
                <h2 className="text-xs font-bold">Create Your Account</h2>
                <p className="text-[9px] opacity-90 mt-0.5">Please enter your details to register</p>
              </div>

              {/* Content */}
              <div className="flex-1 px-4 py-4 overflow-auto bg-gray-50">
                <div className="space-y-3">
                  <div>
                    <label className="text-[9px] text-gray-700 font-bold mb-1.5 block">NHS Number</label>
                    <input 
                      type="text"
                      placeholder="e.g. 123 456 7890"
                      className="w-full h-10 px-3 bg-white border-2 border-gray-200 rounded-lg text-[10px] placeholder:text-gray-400 focus:border-teal-400 focus:outline-none transition-colors shadow-sm"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="text-[9px] text-gray-700 font-bold mb-1.5 block">Full Name</label>
                    <input 
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full h-10 px-3 bg-white border-2 border-gray-200 rounded-lg text-[10px] placeholder:text-gray-400 focus:border-teal-400 focus:outline-none transition-colors shadow-sm"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="text-[9px] text-gray-700 font-bold mb-1.5 block">Date of Birth</label>
                    <input 
                      type="text"
                      placeholder="DD/MM/YYYY"
                      className="w-full h-10 px-3 bg-white border-2 border-gray-200 rounded-lg text-[10px] placeholder:text-gray-400 focus:border-teal-400 focus:outline-none transition-colors shadow-sm"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="text-[9px] text-gray-700 font-bold mb-1.5 block">Email Address</label>
                    <input 
                      type="email"
                      placeholder="your@email.com"
                      className="w-full h-10 px-3 bg-white border-2 border-gray-200 rounded-lg text-[10px] placeholder:text-gray-400 focus:border-teal-400 focus:outline-none transition-colors shadow-sm"
                      readOnly
                    />
                  </div>
                </div>

                {/* Terms checkbox */}
                <div className="flex gap-2 items-start bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-blue-200 rounded-xl p-3 mt-4 shadow-sm">
                  <div className="w-5 h-5 bg-gradient-to-br from-teal-600 to-blue-600 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <p className="text-[9px] text-gray-700 leading-relaxed">
                    I agree to the <span className="font-bold text-teal-700">Terms of Service</span> and <span className="font-bold text-teal-700">Privacy Policy</span>
                  </p>
                </div>
                
                {/* CTA */}
                <button className="w-full h-11 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl text-[10px] font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-4 group">
                  <span>Create Account</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-sm font-semibold text-gray-900 mb-4">Dashboard</h4>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden aspect-[3/4] shadow-2xl">
            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-teal-600 to-blue-600 px-4 py-3 text-white">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h2 className="text-xs font-bold">HealthHub</h2>
                    <p className="text-[9px] opacity-90 mt-0.5">Welcome back, Margaret</p>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="relative w-7 h-7 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Bell className="w-4 h-4" />
                      <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
                    </div>
                    <div className="w-7 h-7 bg-white/20 backdrop-blur rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-teal-200 to-blue-200"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 px-4 py-3 overflow-auto bg-gray-50">
                {/* Next Appointment Banner */}
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-blue-200 rounded-xl p-3 mb-3 shadow-sm">
                  <div className="flex items-start gap-2 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[9px] font-bold text-blue-900">Your Next Appointment</p>
                      <p className="text-[10px] font-bold text-gray-900 mt-0.5">Dr. Sarah Johnson</p>
                      <div className="flex gap-2 mt-1">
                        <span className="text-[8px] text-gray-600 flex items-center gap-0.5">
                          <Calendar className="w-2.5 h-2.5" />
                          Monday, 4th Nov
                        </span>
                        <span className="text-[8px] text-gray-600 flex items-center gap-0.5">
                          <Clock className="w-2.5 h-2.5" />
                          10:30 AM
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    <button className="bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg py-1.5 text-[8px] font-semibold shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-1">
                      <span>View Details</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                    <button className="bg-white border-2 border-gray-300 text-gray-700 rounded-lg py-1.5 text-[8px] font-semibold hover:border-gray-400 transition-colors flex items-center justify-center">
                      Cancel
                    </button>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mb-3">
                  <h3 className="text-[10px] font-bold text-gray-900 mb-2">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: Calendar, label: 'Book Appointment', gradient: 'from-blue-500 to-cyan-500', shadow: 'shadow-blue-200' },
                      { icon: FileText, label: 'Test Results', gradient: 'from-teal-500 to-green-500', shadow: 'shadow-teal-200' },
                      { icon: Pill, label: 'Prescriptions', gradient: 'from-purple-500 to-pink-500', shadow: 'shadow-purple-200' },
                      { icon: User, label: 'My Records', gradient: 'from-orange-500 to-red-500', shadow: 'shadow-orange-200' }
                    ].map((action, i) => (
                      <button key={i} className="bg-white border-2 border-gray-200 rounded-xl p-2.5 hover:border-teal-400 hover:shadow-lg transition-all group">
                        <div className={`w-9 h-9 bg-gradient-to-br ${action.gradient} rounded-lg flex items-center justify-center mb-1.5 shadow-md ${action.shadow} group-hover:scale-110 transition-transform`}>
                          <action.icon className="w-5 h-5 text-white" />
                        </div>
                        <p className="text-[8px] font-semibold text-gray-900">{action.label}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div>
                  <h3 className="text-[10px] font-bold text-gray-900 mb-2">Recent Activity</h3>
                  <div className="space-y-2">
                    {[
                      { icon: Activity, title: 'Blood Test Results Available', time: '2 days ago', bg: 'bg-green-50', iconBg: 'from-green-400 to-emerald-400', border: 'border-green-200' },
                      { icon: FileText, title: 'Prescription Ready for Pickup', time: '5 days ago', bg: 'bg-blue-50', iconBg: 'from-blue-400 to-cyan-400', border: 'border-blue-200' }
                    ].map((item, i) => (
                      <button key={i} className={`w-full ${item.bg} border-2 ${item.border} rounded-xl p-2.5 flex items-center gap-2 hover:shadow-md transition-all group`}>
                        <div className={`w-8 h-8 bg-gradient-to-br ${item.iconBg} rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm`}>
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 text-left">
                          <p className="text-[9px] font-semibold text-gray-900">{item.title}</p>
                          <p className="text-[8px] text-gray-500 mt-0.5 flex items-center gap-0.5">
                            <Clock className="w-2.5 h-2.5" />
                            {item.time}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-teal-600 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Book Appointment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="text-sm font-semibold text-gray-900 mb-4">Book Appointment</h4>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden aspect-[3/4] shadow-2xl">
            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-teal-600 to-blue-600 px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <button className="w-7 h-7 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                    <ChevronRight className="w-4 h-4 rotate-180" />
                  </button>
                  <h2 className="text-xs font-bold flex-1">Book Appointment</h2>
                  <div className="w-7 h-7 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                    <Calendar className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 px-4 py-3 overflow-auto bg-gray-50">
                {/* Search Bar */}
                <div className="relative mb-3">
                  <input 
                    type="text" 
                    placeholder="Search doctors or specialists..."
                    className="w-full h-10 px-3 pl-9 bg-white border-2 border-gray-200 rounded-lg text-[10px] placeholder:text-gray-400 focus:border-teal-400 focus:outline-none transition-colors shadow-sm"
                    readOnly
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>

                {/* Specialty Selector */}
                <div className="mb-3">
                  <h3 className="text-[10px] font-bold text-gray-900 mb-2">Select Specialty</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: 'General', icon: User, active: true },
                      { label: 'Cardiology', icon: Heart, active: false },
                      { label: 'Dentistry', icon: Activity, active: false }
                    ].map((spec, i) => (
                      <button key={i} className={`${spec.active ? 'bg-gradient-to-br from-teal-50 to-blue-50 border-teal-400 shadow-md' : 'bg-white border-gray-200'} border-2 rounded-xl p-2 text-center hover:border-teal-400 transition-all`}>
                        <div className={`w-8 h-8 ${spec.active ? 'bg-gradient-to-br from-teal-500 to-blue-500' : 'bg-gray-100'} rounded-lg mx-auto mb-1 flex items-center justify-center shadow-sm`}>
                          <spec.icon className={`w-4 h-4 ${spec.active ? 'text-white' : 'text-gray-500'}`} />
                        </div>
                        <p className={`text-[8px] font-semibold ${spec.active ? 'text-teal-700' : 'text-gray-700'}`}>{spec.label}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Available Doctors */}
                <div>
                  <h3 className="text-[10px] font-bold text-gray-900 mb-2">Available Doctors</h3>
                  <div className="space-y-2">
                    {[
                      { name: 'Dr. Sarah Johnson', specialty: 'General Practitioner', rating: 4.8, reviews: 127, available: 'Today, 2:30 PM' },
                      { name: 'Dr. Michael Chen', specialty: 'General Practitioner', rating: 4.9, reviews: 143, available: 'Tomorrow, 10:00 AM' }
                    ].map((doctor, i) => (
                      <div key={i} className="bg-white border-2 border-gray-200 rounded-xl p-3 hover:border-teal-400 hover:shadow-lg transition-all">
                        <div className="flex gap-3 mb-2">
                          <div className="w-12 h-12 bg-gradient-to-br from-teal-200 to-blue-200 rounded-full flex-shrink-0 shadow-md overflow-hidden">
                            <div className="w-full h-full flex items-center justify-center">
                              <User className="w-6 h-6 text-teal-600" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-[10px] font-bold text-gray-900">{doctor.name}</h4>
                            <p className="text-[8px] text-gray-600 mt-0.5">{doctor.specialty}</p>
                            <div className="flex items-center gap-1 mt-1">
                              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                              <span className="text-[8px] font-semibold text-gray-700">{doctor.rating}</span>
                              <span className="text-[8px] text-gray-500">({doctor.reviews} reviews)</span>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-1.5 mb-2">
                          <p className="text-[8px] text-gray-600 flex items-center gap-1">
                            <Clock className="w-3 h-3 text-teal-600" />
                            <span className="font-semibold text-gray-900">Next available:</span>
                            {doctor.available}
                          </p>
                        </div>
                        <button className="w-full h-8 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg text-[9px] font-semibold shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-1">
                          <span>Book Appointment</span>
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Appointment Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 className="text-sm font-semibold text-gray-900 mb-4">Appointment Details</h4>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden aspect-[3/4] shadow-2xl">
            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-teal-600 to-blue-600 px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <button className="w-7 h-7 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                    <ChevronRight className="w-4 h-4 rotate-180" />
                  </button>
                  <h2 className="text-xs font-bold flex-1">Select Time Slot</h2>
                  <div className="w-7 h-7 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 px-4 py-3 overflow-auto bg-gray-50">
                {/* Doctor Info */}
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-teal-200 rounded-xl p-3 mb-3 shadow-sm">
                  <div className="flex gap-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-300 to-blue-300 rounded-full flex items-center justify-center shadow-lg">
                      <User className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[11px] font-bold text-gray-900">Dr. Sarah Johnson</h4>
                      <p className="text-[9px] text-gray-600 mt-0.5">General Practitioner</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                        <span className="text-[8px] font-semibold text-gray-700">4.8</span>
                        <span className="text-[8px] text-gray-500">(127 reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Date Selection */}
                <div className="mb-3">
                  <h3 className="text-[10px] font-bold text-gray-900 mb-2">Select Date</h3>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-2 shadow-sm">
                    <div className="grid grid-cols-7 gap-1">
                      {[...Array(7)].map((_, i) => (
                        <button key={i} className={`aspect-square ${i === 3 ? 'bg-gradient-to-br from-teal-600 to-blue-600 text-white shadow-md' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'} rounded-lg flex flex-col items-center justify-center transition-all`}>
                          <span className="text-[7px] opacity-70">{['M','T','W','T','F','S','S'][i]}</span>
                          <span className="text-[9px] font-bold">{i + 4}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Time Slots */}
                <div className="mb-3">
                  <h3 className="text-[10px] font-bold text-gray-900 mb-2">Available Time Slots</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'].map((time, i) => (
                      <button key={i} className={`h-9 ${i === 2 ? 'bg-gradient-to-br from-teal-600 to-blue-600 text-white shadow-md' : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-teal-400'} rounded-lg text-[9px] font-bold flex items-center justify-center transition-all`}>
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-blue-200 rounded-xl p-3 mb-3 shadow-sm">
                  <p className="text-[8px] text-gray-600 mb-1">Appointment Summary:</p>
                  <p className="text-[10px] font-bold text-gray-900">Thursday, 7th Nov at 10:00 AM</p>
                  <p className="text-[9px] text-gray-700 mt-0.5">with Dr. Sarah Johnson</p>
                </div>

                {/* CTA */}
                <button className="w-full h-11 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl text-[10px] font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Confirm Appointment</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Test Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h4 className="text-sm font-semibold text-gray-900 mb-4">Test Results</h4>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden aspect-[3/4] shadow-2xl">
            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-teal-600 to-blue-600 px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <button className="w-7 h-7 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                    <ChevronRight className="w-4 h-4 rotate-180" />
                  </button>
                  <h2 className="text-xs font-bold flex-1">Test Results</h2>
                  <div className="w-7 h-7 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                    <Activity className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 px-4 py-3 overflow-auto bg-gray-50">
                {/* Filter Tabs */}
                <div className="flex gap-2 mb-3">
                  <button className="flex-1 h-8 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg text-[9px] font-semibold shadow-md flex items-center justify-center">
                    All Results
                  </button>
                  <button className="flex-1 h-8 bg-white border-2 border-gray-200 text-gray-700 rounded-lg text-[9px] font-semibold hover:border-teal-400 transition-colors flex items-center justify-center">
                    Recent
                  </button>
                  <button className="flex-1 h-8 bg-white border-2 border-gray-200 text-gray-700 rounded-lg text-[9px] font-semibold hover:border-teal-400 transition-colors flex items-center justify-center">
                    Pending
                  </button>
                </div>

                {/* Test Result Cards */}
                <div className="space-y-2">
                  {[
                    { 
                      test: 'Complete Blood Count (CBC)', 
                      date: 'October 20, 2024', 
                      status: 'Normal', 
                      statusColor: 'bg-green-100 text-green-700 border-green-300',
                      icon: Activity,
                      iconGradient: 'from-green-400 to-emerald-400',
                      details: ['WBC: 7.2 K/uL', 'RBC: 4.8 M/uL'],
                      progress: 100
                    },
                    { 
                      test: 'Chest X-Ray', 
                      date: 'October 15, 2024', 
                      status: 'Normal', 
                      statusColor: 'bg-green-100 text-green-700 border-green-300',
                      icon: FileText,
                      iconGradient: 'from-blue-400 to-cyan-400',
                      details: ['No abnormalities detected'],
                      progress: 100
                    },
                    { 
                      test: 'Blood Pressure Monitoring', 
                      date: 'October 10, 2024', 
                      status: 'Needs Review', 
                      statusColor: 'bg-amber-100 text-amber-700 border-amber-300',
                      icon: Heart,
                      iconGradient: 'from-amber-400 to-orange-400',
                      details: ['Systolic: 138 mmHg', 'Diastolic: 88 mmHg'],
                      progress: 100
                    }
                  ].map((result, i) => (
                    <div key={i} className="bg-white border-2 border-gray-200 rounded-xl p-3 hover:border-teal-400 hover:shadow-lg transition-all">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex gap-2 flex-1">
                          <div className={`w-10 h-10 bg-gradient-to-br ${result.iconGradient} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md`}>
                            <result.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-[10px] font-bold text-gray-900">{result.test}</h4>
                            <p className="text-[8px] text-gray-600 mt-0.5 flex items-center gap-0.5">
                              <Clock className="w-2.5 h-2.5" />
                              {result.date}
                            </p>
                          </div>
                        </div>
                        <div className={`px-2 py-0.5 ${result.statusColor} border-2 rounded-full text-[7px] font-bold flex items-center gap-0.5 shadow-sm`}>
                          {result.status === 'Normal' ? (
                            <CheckCircle className="w-2.5 h-2.5" />
                          ) : (
                            <AlertCircle className="w-2.5 h-2.5" />
                          )}
                          {result.status}
                        </div>
                      </div>
                      
                      {/* Details */}
                      <div className="bg-gray-50 rounded-lg p-2 mb-2">
                        {result.details.map((detail, j) => (
                          <p key={j} className="text-[8px] text-gray-700 font-medium">• {detail}</p>
                        ))}
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-1 mb-2">
                        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-teal-500 to-blue-500 rounded-full transition-all duration-500" 
                            style={{ width: `${result.progress}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-[7px] text-gray-600">
                          <span>Analysis Complete</span>
                          <span className="font-semibold">{result.progress}%</span>
                        </div>
                      </div>

                      <button className="w-full h-7 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg text-[8px] font-semibold shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-1">
                        <Download className="w-3 h-3" />
                        <span>Download Full Report</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Medical Records */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h4 className="text-sm font-semibold text-gray-900 mb-4">Medical Records</h4>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden aspect-[3/4] shadow-2xl">
            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-teal-600 to-blue-600 px-4 py-3 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button className="w-7 h-7 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                      <ChevronRight className="w-4 h-4 rotate-180" />
                    </button>
                    <h2 className="text-xs font-bold">My Records</h2>
                  </div>
                  <button className="w-7 h-7 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 px-4 py-3 overflow-auto bg-gray-50">
                {/* Categories */}
                <div className="flex gap-2 mb-3">
                  {['All', 'Reports', 'Images'].map((cat, i) => (
                    <button key={i} className={`flex-1 h-8 ${i === 0 ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-md' : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-teal-400'} rounded-lg text-[9px] font-semibold flex items-center justify-center transition-all`}>
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Record Cards */}
                <div className="space-y-2">
                  {[
                    { icon: FileText, title: 'Blood Test Report', date: 'Oct 20, 2024', size: '2.4 MB', gradient: 'from-blue-400 to-cyan-400' },
                    { icon: FileText, title: 'X-Ray Results', date: 'Oct 15, 2024', size: '5.1 MB', gradient: 'from-teal-400 to-green-400' },
                    { icon: FileText, title: 'Prescription History', date: 'Oct 10, 2024', size: '1.2 MB', gradient: 'from-purple-400 to-pink-400' },
                    { icon: FileText, title: 'Consultation Notes', date: 'Oct 5, 2024', size: '0.8 MB', gradient: 'from-orange-400 to-red-400' }
                  ].map((record, i) => (
                    <div key={i} className="bg-white border-2 border-gray-200 rounded-xl p-3 hover:border-teal-400 hover:shadow-lg transition-all group">
                      <div className="flex gap-3 items-center">
                        <div className={`w-10 h-10 bg-gradient-to-br ${record.gradient} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md`}>
                          <record.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[10px] font-bold text-gray-900">{record.title}</h4>
                          <p className="text-[8px] text-gray-600 mt-0.5">{record.date}</p>
                          <p className="text-[7px] text-gray-500 mt-0.5">{record.size}</p>
                        </div>
                        <button className="w-7 h-7 bg-gradient-to-br from-teal-600 to-blue-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                          <Download className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Prescriptions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h4 className="text-sm font-semibold text-gray-900 mb-4">Prescriptions</h4>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden aspect-[3/4] shadow-2xl">
            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-teal-600 to-blue-600 px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <button className="w-7 h-7 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                    <ChevronRight className="w-4 h-4 rotate-180" />
                  </button>
                  <h2 className="text-xs font-bold flex-1">Prescriptions</h2>
                  <div className="w-7 h-7 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                    <Pill className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 px-4 py-3 overflow-auto bg-gray-50">
                {/* Active Prescriptions */}
                <div className="mb-3">
                  <h3 className="text-[11px] font-bold text-gray-900 mb-2">Active Prescriptions</h3>
                  <div className="space-y-2">
                    {[
                      { name: 'Metformin', dosage: '500mg, twice daily', expires: '30 days left', color: 'from-teal-500 to-blue-500' },
                      { name: 'Lisinopril', dosage: '10mg, once daily', expires: '15 days left', color: 'from-purple-500 to-pink-500' }
                    ].map((med, i) => (
                      <div key={i} className="bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-blue-200 rounded-xl p-3 shadow-sm">
                        <div className="flex gap-3 mb-2">
                          <div className={`w-12 h-12 bg-gradient-to-br ${med.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md`}>
                            <Pill className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-[10px] font-bold text-gray-900">{med.name}</h4>
                            <p className="text-[9px] text-gray-600 mt-0.5">{med.dosage}</p>
                            <div className="flex items-center gap-1 mt-1">
                              <Clock className="w-3 h-3 text-teal-600" />
                              <span className="text-[8px] text-teal-700 font-bold">{med.expires}</span>
                            </div>
                          </div>
                        </div>
                        <button className="w-full h-8 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg text-[9px] font-semibold shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-1">
                          <span>Request Renewal</span>
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Past Prescriptions */}
                <div>
                  <h3 className="text-[11px] font-bold text-gray-900 mb-2">Past Prescriptions</h3>
                  <div className="space-y-2">
                    {[
                      { name: 'Amoxicillin', dosage: '250mg capsules', date: 'September 2024' },
                      { name: 'Paracetamol', dosage: '500mg tablets', date: 'August 2024' }
                    ].map((med, i) => (
                      <div key={i} className="bg-white border-2 border-gray-200 rounded-xl p-3 flex gap-3 items-center hover:border-gray-300 transition-colors">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Pill className="w-5 h-5 text-gray-500" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[9px] font-bold text-gray-900">{med.name}</h4>
                          <p className="text-[8px] text-gray-600 mt-0.5">{med.dosage}</p>
                          <p className="text-[7px] text-gray-500 mt-0.5">{med.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Profile Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h4 className="text-sm font-semibold text-gray-900 mb-4">Profile Settings</h4>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden aspect-[3/4] shadow-2xl">
            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-teal-600 to-blue-600 px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <button className="w-7 h-7 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                    <ChevronRight className="w-4 h-4 rotate-180" />
                  </button>
                  <h2 className="text-xs font-bold flex-1">Settings</h2>
                  <div className="w-7 h-7 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                    <Settings className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 px-4 py-3 overflow-auto bg-gray-50">
                {/* Profile Photo */}
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-teal-200 rounded-xl p-4 mb-3 shadow-sm">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-300 to-blue-300 rounded-full flex items-center justify-center shadow-lg">
                      <User className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-[11px] font-bold text-gray-900">Margaret Wilson</h3>
                    <p className="text-[8px] text-gray-600">NHS: 123 456 7890</p>
                    <button className="text-[9px] text-teal-600 font-bold hover:text-teal-700 transition-colors">Change Photo</button>
                  </div>
                </div>

                {/* Settings List */}
                <div className="space-y-2 mb-3">
                  {[
                    { icon: User, label: 'Personal Information', gradient: 'from-blue-400 to-cyan-400' },
                    { icon: Shield, label: 'Privacy & Security', gradient: 'from-teal-400 to-green-400' },
                    { icon: Bell, label: 'Notifications', gradient: 'from-purple-400 to-pink-400' },
                    { icon: FileText, label: 'Download My Data', gradient: 'from-orange-400 to-red-400' },
                    { icon: Heart, label: 'Health Preferences', gradient: 'from-red-400 to-pink-400' }
                  ].map((item, i) => (
                    <button key={i} className="w-full bg-white border-2 border-gray-200 rounded-xl p-3 flex items-center justify-between hover:border-teal-400 hover:shadow-lg transition-all group">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center shadow-md`}>
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[9px] font-bold text-gray-900">{item.label}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-teal-600 transition-colors" />
                    </button>
                  ))}
                </div>

                {/* Logout */}
                <button className="w-full h-11 bg-white border-2 border-gray-300 rounded-xl text-[10px] text-gray-700 flex items-center justify-center font-bold gap-2 hover:bg-gray-50 hover:border-gray-400 transition-all">
                  <LogOut className="w-4 h-4" />
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
