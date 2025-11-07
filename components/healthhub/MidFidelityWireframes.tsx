import { motion } from "motion/react";
import { Calendar, Heart, Activity, FileText, User, Clock, Star, ChevronRight, Shield, Pill, Download, Settings, LogOut, Check } from "lucide-react";

export function MidFidelityWireframes() {
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
          <div className="bg-white rounded-xl border-2 border-gray-400 p-6 aspect-[3/4] shadow-lg">
            <div className="space-y-4 h-full flex flex-col justify-between">
              {/* Content */}
              <div className="flex-1 flex flex-col items-center justify-center space-y-3">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-gray-900">Welcome to HealthHub</div>
                  <p className="text-[10px] text-gray-600 mt-2 px-4">
                    Manage your healthcare appointments, view test results, and access your medical records securely
                  </p>
                </div>
              </div>
              
              {/* Progress dots */}
              <div className="flex justify-center gap-2">
                <div className="w-6 h-1.5 bg-gray-800 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
              </div>
              
              {/* CTA */}
              <button className="w-full h-10 bg-gray-800 rounded-lg text-[10px] text-white flex items-center justify-center font-semibold">
                Get Started
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
          <div className="bg-white rounded-xl border-2 border-gray-400 p-6 aspect-[3/4] shadow-lg">
            <div className="space-y-4">
              {/* Header */}
              <div>
                <div className="text-sm font-bold text-gray-900">Create Account</div>
                <div className="text-[10px] text-gray-600 mt-0.5">Please fill in your details</div>
              </div>
              
              {/* Form Fields */}
              <div className="space-y-3">
                <div>
                  <label className="text-[9px] text-gray-700 font-semibold mb-1 block">NHS Number</label>
                  <input 
                    type="text"
                    placeholder="e.g. 123 456 7890"
                    className="w-full h-10 px-3 bg-gray-100 border-2 border-gray-300 rounded-lg text-[10px] placeholder:text-gray-500"
                    readOnly
                  />
                </div>
                <div>
                  <label className="text-[9px] text-gray-700 font-semibold mb-1 block">Full Name</label>
                  <input 
                    type="text"
                    placeholder="Margaret Wilson"
                    className="w-full h-10 px-3 bg-gray-100 border-2 border-gray-300 rounded-lg text-[10px] placeholder:text-gray-500"
                    readOnly
                  />
                </div>
                <div>
                  <label className="text-[9px] text-gray-700 font-semibold mb-1 block">Date of Birth</label>
                  <input 
                    type="text"
                    placeholder="DD/MM/YYYY"
                    className="w-full h-10 px-3 bg-gray-100 border-2 border-gray-300 rounded-lg text-[10px] placeholder:text-gray-500"
                    readOnly
                  />
                </div>
                <div>
                  <label className="text-[9px] text-gray-700 font-semibold mb-1 block">Email</label>
                  <input 
                    type="email"
                    placeholder="margaret@email.com"
                    className="w-full h-10 px-3 bg-gray-100 border-2 border-gray-300 rounded-lg text-[10px] placeholder:text-gray-500"
                    readOnly
                  />
                </div>
              </div>

              {/* Terms checkbox */}
              <div className="flex gap-2 items-start bg-gray-100 border-2 border-gray-300 rounded-lg p-2">
                <div className="w-4 h-4 bg-gray-800 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <p className="text-[8px] text-gray-700">
                  I agree to the Terms of Service and Privacy Policy
                </p>
              </div>
              
              {/* CTA */}
              <button className="w-full h-10 bg-gray-800 rounded-lg text-[10px] text-white flex items-center justify-center font-semibold mt-6">
                Create Account
              </button>
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
          <div className="bg-white rounded-xl border-2 border-gray-400 p-6 aspect-[3/4] shadow-lg">
            <div className="space-y-4">
              {/* Header */}
              <div>
                <div className="text-sm font-bold text-gray-900">HealthHub</div>
                <div className="text-[10px] text-gray-600 mt-0.5">Welcome back, Margaret</div>
              </div>
              
              {/* Next Appointment */}
              <div className="border-2 border-gray-400 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-3 space-y-2">
                <div className="flex gap-2">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[9px] text-gray-900 font-semibold">Next Appointment</div>
                    <div className="text-[11px] font-bold text-gray-900 mt-0.5">Dr. Sarah Johnson</div>
                    <div className="text-[9px] text-gray-600 mt-1">Mon, 4th Nov • 10:30 AM</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 h-7 bg-gray-800 rounded-md text-[9px] text-white flex items-center justify-center font-semibold">
                    View Details
                  </button>
                  <button className="flex-1 h-7 bg-white border-2 border-gray-300 rounded-md text-[9px] text-gray-700 flex items-center justify-center font-semibold">
                    Cancel
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <div className="text-[11px] font-bold text-gray-900">Quick Actions</div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { icon: Calendar, label: 'Book Appointment', color: 'from-gray-400 to-gray-500' },
                    { icon: FileText, label: 'Test Results', color: 'from-gray-500 to-gray-600' },
                    { icon: Pill, label: 'Prescriptions', color: 'from-gray-600 to-gray-700' },
                    { icon: User, label: 'My Records', color: 'from-gray-500 to-gray-600' }
                  ].map((action, i) => (
                    <div key={i} className="border-2 border-gray-300 rounded-lg p-2.5 space-y-1.5 hover:border-gray-500 transition-colors">
                      <div className={`w-9 h-9 bg-gradient-to-br ${action.color} rounded-lg flex items-center justify-center`}>
                        <action.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-[9px] font-semibold text-gray-900">{action.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="space-y-2">
                <div className="text-[11px] font-bold text-gray-900">Recent Activity</div>
                {[
                  { icon: Activity, label: 'Blood Test Results', time: '2 days ago', bg: 'bg-gray-100', iconBg: 'bg-gray-200' },
                  { icon: FileText, label: 'Prescription Ready', time: '5 days ago', bg: 'bg-gray-100', iconBg: 'bg-gray-200' }
                ].map((item, i) => (
                  <div key={i} className={`${item.bg} rounded-lg p-2.5 flex gap-2 items-center`}>
                    <div className={`w-8 h-8 ${item.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="w-4 h-4 text-gray-700" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[9px] font-semibold text-gray-900">{item.label}</div>
                      <div className="text-[8px] text-gray-600 mt-0.5">{item.time}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
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
          <div className="bg-white rounded-xl border-2 border-gray-400 p-6 aspect-[3/4] shadow-lg">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm font-bold text-gray-900">Book Appointment</div>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search doctors or specialists..."
                  className="w-full h-10 px-3 pr-10 bg-gray-100 border-2 border-gray-300 rounded-lg text-[10px] placeholder:text-gray-500"
                  readOnly
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-400 rounded"></div>
              </div>

              {/* Specialty Selector */}
              <div className="space-y-2">
                <div className="text-[10px] font-semibold text-gray-900">Select Specialty</div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'General', color: 'bg-gray-200 border-gray-500' },
                    { label: 'Cardiology', color: 'bg-gray-100 border-gray-300' },
                    { label: 'Dentistry', color: 'bg-gray-100 border-gray-300' }
                  ].map((spec, i) => (
                    <div key={i} className={`${spec.color} border-2 rounded-lg p-2 text-center`}>
                      <div className="w-7 h-7 bg-white rounded-lg mx-auto mb-1"></div>
                      <div className="text-[8px] font-semibold text-gray-900">{spec.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Available Doctors */}
              <div className="space-y-2">
                <div className="text-[10px] font-semibold text-gray-900">Available Doctors</div>
                {[
                  { name: 'Dr. Sarah Johnson', specialty: 'General Practitioner', rating: 4.8 },
                  { name: 'Dr. Michael Chen', specialty: 'General Practitioner', rating: 4.9 }
                ].map((doctor, i) => (
                  <div key={i} className="border-2 border-gray-300 rounded-lg p-3 hover:border-gray-500 transition-colors">
                    <div className="flex gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="text-[10px] font-bold text-gray-900">{doctor.name}</div>
                        <div className="text-[8px] text-gray-600 mt-0.5">{doctor.specialty}</div>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-3 h-3 text-gray-500 fill-gray-500" />
                          <span className="text-[8px] font-semibold text-gray-700">{doctor.rating}</span>
                          <span className="text-[8px] text-gray-500">(120+ reviews)</span>
                        </div>
                      </div>
                    </div>
                    <button className="w-full h-7 bg-gray-800 rounded-md text-[9px] text-white flex items-center justify-center font-semibold">
                      Book Appointment
                    </button>
                  </div>
                ))}
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
          <div className="bg-white rounded-xl border-2 border-gray-400 p-6 aspect-[3/4] shadow-lg">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm font-bold text-gray-900">Select Time</div>
              </div>

              {/* Doctor Info */}
              <div className="border-2 border-gray-300 rounded-lg p-3 bg-gray-50">
                <div className="flex gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                    <User className="w-7 h-7 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] font-bold text-gray-900">Dr. Sarah Johnson</div>
                    <div className="text-[9px] text-gray-600 mt-0.5">General Practitioner</div>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3 h-3 text-gray-500 fill-gray-500" />
                      <span className="text-[8px] font-semibold text-gray-700">4.8</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Date Selection */}
              <div className="space-y-2">
                <div className="text-[10px] font-semibold text-gray-900">Select Date</div>
                <div className="grid grid-cols-7 gap-1">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className={`aspect-square ${i === 3 ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-700'} rounded-lg flex items-center justify-center`}>
                      <span className="text-[8px] font-semibold">{i + 4}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div className="space-y-2">
                <div className="text-[10px] font-semibold text-gray-900">Available Times</div>
                <div className="grid grid-cols-3 gap-2">
                  {['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'].map((time, i) => (
                    <button key={i} className={`h-8 ${i === 2 ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-700 border-2 border-gray-300'} rounded-lg text-[9px] font-semibold flex items-center justify-center`}>
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button className="w-full h-10 bg-gray-800 rounded-lg text-[10px] text-white flex items-center justify-center font-semibold mt-4">
                Confirm Appointment
              </button>
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
          <div className="bg-white rounded-xl border-2 border-gray-400 p-6 aspect-[3/4] shadow-lg">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm font-bold text-gray-900">Test Results</div>
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-2">
                <button className="flex-1 h-8 bg-gray-800 rounded-lg text-[9px] text-white flex items-center justify-center font-semibold">
                  All
                </button>
                <button className="flex-1 h-8 bg-gray-100 border-2 border-gray-300 rounded-lg text-[9px] text-gray-700 flex items-center justify-center font-semibold">
                  Recent
                </button>
                <button className="flex-1 h-8 bg-gray-100 border-2 border-gray-300 rounded-lg text-[9px] text-gray-700 flex items-center justify-center font-semibold">
                  Pending
                </button>
              </div>

              {/* Test Result Cards */}
              <div className="space-y-3">
                {[
                  { test: 'Blood Test', date: 'Oct 20, 2024', status: 'Normal', color: 'bg-gray-200 text-gray-700 border-gray-400', progress: '75%' },
                  { test: 'X-Ray Chest', date: 'Oct 15, 2024', status: 'Normal', color: 'bg-gray-200 text-gray-700 border-gray-400', progress: '85%' },
                  { test: 'Blood Pressure', date: 'Oct 10, 2024', status: 'Review', color: 'bg-gray-300 text-gray-800 border-gray-500', progress: '60%' }
                ].map((result, i) => (
                  <div key={i} className="border-2 border-gray-300 rounded-lg p-3 space-y-2 hover:border-gray-500 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-[10px] font-bold text-gray-900">{result.test}</div>
                        <div className="text-[8px] text-gray-600 mt-0.5 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {result.date}
                        </div>
                      </div>
                      <div className={`px-2 py-0.5 ${result.color} border-2 rounded-full text-[8px] font-semibold`}>
                        {result.status}
                      </div>
                    </div>
                    
                    {/* Progress/Stats */}
                    <div className="space-y-1">
                      <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gray-600 rounded-full" 
                          style={{ width: result.progress }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-[8px] text-gray-600">
                        <span>Completion</span>
                        <span className="font-semibold">{result.progress}</span>
                      </div>
                    </div>

                    <button className="w-full h-7 bg-gray-800 rounded-md text-[9px] text-white flex items-center justify-center font-semibold mt-2">
                      View Full Report
                    </button>
                  </div>
                ))}
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
          <div className="bg-white rounded-xl border-2 border-gray-400 p-6 aspect-[3/4] shadow-lg">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-sm font-bold text-gray-900">My Records</div>
                </div>
                <button className="w-8 h-8 bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                  <Download className="w-4 h-4 text-gray-700" />
                </button>
              </div>

              {/* Categories */}
              <div className="flex gap-2">
                {['All', 'Reports', 'Images'].map((cat, i) => (
                  <button key={i} className={`flex-1 h-8 ${i === 0 ? 'bg-gray-800 text-white' : 'bg-gray-100 border-2 border-gray-300 text-gray-700'} rounded-lg text-[9px] font-semibold flex items-center justify-center`}>
                    {cat}
                  </button>
                ))}
              </div>

              {/* Record Cards */}
              <div className="space-y-2">
                {[
                  { icon: FileText, title: 'Blood Test Report', date: 'Oct 20, 2024', size: '2.4 MB' },
                  { icon: FileText, title: 'X-Ray Results', date: 'Oct 15, 2024', size: '5.1 MB' },
                  { icon: FileText, title: 'Prescription History', date: 'Oct 10, 2024', size: '1.2 MB' },
                  { icon: FileText, title: 'Consultation Notes', date: 'Oct 5, 2024', size: '0.8 MB' }
                ].map((record, i) => (
                  <div key={i} className="border-2 border-gray-300 rounded-lg p-3 hover:border-gray-500 transition-colors">
                    <div className="flex gap-3 items-start">
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <record.icon className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[10px] font-bold text-gray-900">{record.title}</div>
                        <div className="text-[8px] text-gray-600 mt-0.5">{record.date}</div>
                        <div className="text-[8px] text-gray-500 mt-0.5">{record.size}</div>
                      </div>
                      <button className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
                        <Download className="w-3.5 h-3.5 text-white" />
                      </button>
                    </div>
                  </div>
                ))}
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
          <div className="bg-white rounded-xl border-2 border-gray-400 p-6 aspect-[3/4] shadow-lg">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                  <Pill className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm font-bold text-gray-900">Prescriptions</div>
              </div>

              {/* Active Prescriptions */}
              <div className="space-y-2">
                <div className="text-[11px] font-bold text-gray-900">Active Prescriptions</div>
                {[
                  { name: 'Metformin', dosage: '500mg, twice daily', expires: '30 days left' },
                  { name: 'Lisinopril', dosage: '10mg, once daily', expires: '15 days left' }
                ].map((med, i) => (
                  <div key={i} className="border-2 border-gray-400 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-3">
                    <div className="flex gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Pill className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[10px] font-bold text-gray-900">{med.name}</div>
                        <div className="text-[9px] text-gray-600 mt-0.5">{med.dosage}</div>
                        <div className="text-[8px] text-gray-700 mt-1 font-semibold">{med.expires}</div>
                      </div>
                    </div>
                    <button className="w-full h-8 bg-gray-800 rounded-lg text-[9px] text-white flex items-center justify-center font-semibold">
                      Request Renewal
                    </button>
                  </div>
                ))}
              </div>

              {/* Past Prescriptions */}
              <div className="space-y-2">
                <div className="text-[11px] font-bold text-gray-900">Past Prescriptions</div>
                {[
                  { name: 'Amoxicillin', date: 'Sept 2024' },
                  { name: 'Paracetamol', date: 'Aug 2024' }
                ].map((med, i) => (
                  <div key={i} className="bg-gray-100 rounded-lg p-3 flex gap-3 items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Pill className="w-5 h-5 text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[9px] font-semibold text-gray-900">{med.name}</div>
                      <div className="text-[8px] text-gray-600 mt-0.5">{med.date}</div>
                    </div>
                  </div>
                ))}
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
          <div className="bg-white rounded-xl border-2 border-gray-400 p-6 aspect-[3/4] shadow-lg">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm font-bold text-gray-900">Settings</div>
              </div>

              {/* Profile Photo */}
              <div className="flex flex-col items-center gap-2 border-2 border-gray-200 rounded-lg p-4">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-gray-600" />
                </div>
                <div className="text-[10px] font-bold text-gray-900">Margaret Wilson</div>
                <button className="text-[9px] text-gray-700 font-semibold">Change Photo</button>
              </div>

              {/* Settings List */}
              <div className="space-y-2">
                {[
                  { icon: User, label: 'Personal Information' },
                  { icon: Shield, label: 'Privacy & Security' },
                  { icon: Calendar, label: 'Notification Settings' },
                  { icon: FileText, label: 'Download My Data' },
                  { icon: Heart, label: 'Health Preferences' }
                ].map((item, i) => (
                  <button key={i} className="w-full bg-gray-100 rounded-lg p-3 flex items-center justify-between hover:bg-gray-200 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center border-2 border-gray-200">
                        <item.icon className="w-4 h-4 text-gray-700" />
                      </div>
                      <span className="text-[9px] font-semibold text-gray-900">{item.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>
                ))}
              </div>

              {/* Logout */}
              <button className="w-full h-10 bg-gray-200 border-2 border-gray-300 rounded-lg text-[10px] text-gray-700 flex items-center justify-center font-semibold gap-2 mt-6">
                <LogOut className="w-4 h-4" />
                Log Out
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
