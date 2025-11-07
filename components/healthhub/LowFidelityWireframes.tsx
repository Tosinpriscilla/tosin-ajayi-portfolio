import { motion } from "motion/react";

export function LowFidelityWireframes() {
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
          <div className="bg-white rounded-xl border-2 border-gray-300 p-6 aspect-[3/4]">
            <div className="space-y-4 h-full flex flex-col justify-between">
              {/* Logo/Illustration */}
              <div className="flex-1 flex flex-col items-center justify-center space-y-3">
                <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
                <div className="w-32 h-4 bg-gray-400 rounded"></div>
                <div className="w-full h-3 bg-gray-300 rounded"></div>
                <div className="w-4/5 h-3 bg-gray-300 rounded"></div>
              </div>
              
              {/* Progress dots */}
              <div className="flex justify-center gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
              </div>
              
              {/* CTA */}
              <div className="h-10 bg-gray-400 rounded flex items-center justify-center">
                <div className="w-16 h-2 bg-gray-600 rounded"></div>
              </div>
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
          <div className="bg-white rounded-xl border-2 border-gray-300 p-6 aspect-[3/4]">
            <div className="space-y-4">
              {/* Header */}
              <div className="space-y-2">
                <div className="w-28 h-4 bg-gray-400 rounded"></div>
                <div className="w-40 h-3 bg-gray-300 rounded"></div>
              </div>
              
              {/* Form Fields */}
              <div className="space-y-3">
                <div>
                  <div className="w-24 h-2 bg-gray-300 rounded mb-1"></div>
                  <div className="h-10 bg-gray-200 rounded-lg border-2 border-gray-300"></div>
                </div>
                <div>
                  <div className="w-20 h-2 bg-gray-300 rounded mb-1"></div>
                  <div className="h-10 bg-gray-200 rounded-lg border-2 border-gray-300"></div>
                </div>
                <div>
                  <div className="w-28 h-2 bg-gray-300 rounded mb-1"></div>
                  <div className="h-10 bg-gray-200 rounded-lg border-2 border-gray-300"></div>
                </div>
                <div>
                  <div className="w-20 h-2 bg-gray-300 rounded mb-1"></div>
                  <div className="h-10 bg-gray-200 rounded-lg border-2 border-gray-300"></div>
                </div>
              </div>

              {/* Terms checkbox */}
              <div className="flex gap-2 items-start">
                <div className="w-4 h-4 bg-gray-300 rounded flex-shrink-0"></div>
                <div className="flex-1 space-y-1">
                  <div className="w-full h-2 bg-gray-300 rounded"></div>
                  <div className="w-3/4 h-2 bg-gray-300 rounded"></div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="h-10 bg-gray-400 rounded flex items-center justify-center mt-6">
                <div className="w-20 h-2 bg-gray-600 rounded"></div>
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
          <div className="bg-white rounded-xl border-2 border-gray-300 p-6 aspect-[3/4]">
            <div className="space-y-4">
              {/* Header */}
              <div className="space-y-2">
                <div className="w-32 h-4 bg-gray-400 rounded"></div>
                <div className="w-40 h-3 bg-gray-300 rounded"></div>
              </div>
              
              {/* Alert Banner */}
              <div className="border-2 border-gray-400 rounded-lg p-3 space-y-2">
                <div className="w-28 h-3 bg-gray-400 rounded"></div>
                <div className="w-full h-2 bg-gray-300 rounded"></div>
                <div className="w-3/4 h-2 bg-gray-300 rounded"></div>
                <div className="flex gap-2 mt-3">
                  <div className="flex-1 h-8 bg-gray-400 rounded flex items-center justify-center">
                    <div className="w-16 h-2 bg-gray-600 rounded"></div>
                  </div>
                  <div className="flex-1 h-8 bg-gray-200 rounded flex items-center justify-center">
                    <div className="w-12 h-2 bg-gray-400 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Quick Actions Grid */}
              <div className="space-y-2">
                <div className="w-28 h-3 bg-gray-300 rounded"></div>
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="border-2 border-gray-300 rounded-lg p-3 space-y-2">
                      <div className="w-10 h-10 bg-gray-300 rounded"></div>
                      <div className="w-20 h-2 bg-gray-300 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* List Items */}
              <div className="space-y-2">
                <div className="w-28 h-3 bg-gray-300 rounded"></div>
                {[1, 2].map((i) => (
                  <div key={i} className="bg-gray-100 rounded-lg p-3 flex gap-3">
                    <div className="w-10 h-10 bg-gray-300 rounded flex-shrink-0"></div>
                    <div className="flex-1 space-y-2">
                      <div className="w-full h-2 bg-gray-300 rounded"></div>
                      <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                    </div>
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
          <div className="bg-white rounded-xl border-2 border-gray-300 p-6 aspect-[3/4]">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
                <div className="w-32 h-4 bg-gray-400 rounded"></div>
              </div>

              {/* Search Bar */}
              <div className="h-10 bg-gray-200 rounded-lg border-2 border-gray-300"></div>

              {/* Specialty Selector */}
              <div className="space-y-2">
                <div className="w-24 h-3 bg-gray-300 rounded"></div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="border-2 border-gray-300 rounded-lg p-2 space-y-1">
                      <div className="w-6 h-6 bg-gray-300 rounded mx-auto"></div>
                      <div className="w-full h-2 bg-gray-300 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Doctor Cards */}
              <div className="space-y-2">
                <div className="w-32 h-3 bg-gray-300 rounded"></div>
                {[1, 2].map((i) => (
                  <div key={i} className="border-2 border-gray-300 rounded-lg p-3">
                    <div className="flex gap-3 mb-3">
                      <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                      <div className="flex-1 space-y-2">
                        <div className="w-32 h-3 bg-gray-400 rounded"></div>
                        <div className="w-24 h-2 bg-gray-300 rounded"></div>
                        <div className="flex gap-1">
                          {[1,2,3,4,5].map(j => (
                            <div key={j} className="w-2 h-2 bg-gray-300 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="h-8 bg-gray-400 rounded flex items-center justify-center">
                      <div className="w-20 h-2 bg-gray-600 rounded"></div>
                    </div>
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
          <div className="bg-white rounded-xl border-2 border-gray-300 p-6 aspect-[3/4]">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
                <div className="w-32 h-4 bg-gray-400 rounded"></div>
              </div>

              {/* Doctor Info */}
              <div className="border-2 border-gray-300 rounded-lg p-3">
                <div className="flex gap-3 mb-3">
                  <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                  <div className="flex-1 space-y-2">
                    <div className="w-32 h-4 bg-gray-400 rounded"></div>
                    <div className="w-28 h-2 bg-gray-300 rounded"></div>
                    <div className="w-24 h-2 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Date/Time Selection */}
              <div className="space-y-2">
                <div className="w-24 h-3 bg-gray-300 rounded"></div>
                <div className="h-40 bg-gray-200 rounded-lg border-2 border-gray-300"></div>
              </div>

              {/* Time Slots */}
              <div className="space-y-2">
                <div className="w-20 h-3 bg-gray-300 rounded"></div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className={`h-8 ${i === 2 ? 'bg-gray-400' : 'bg-gray-200'} rounded flex items-center justify-center`}>
                      <div className="w-8 h-2 bg-gray-600 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="h-10 bg-gray-400 rounded flex items-center justify-center mt-4">
                <div className="w-20 h-2 bg-gray-600 rounded"></div>
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
          <div className="bg-white rounded-xl border-2 border-gray-300 p-6 aspect-[3/4]">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
                <div className="w-28 h-4 bg-gray-400 rounded"></div>
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-2">
                <div className="flex-1 h-8 bg-gray-400 rounded flex items-center justify-center">
                  <div className="w-6 h-2 bg-gray-600 rounded"></div>
                </div>
                <div className="flex-1 h-8 bg-gray-200 rounded flex items-center justify-center">
                  <div className="w-10 h-2 bg-gray-400 rounded"></div>
                </div>
                <div className="flex-1 h-8 bg-gray-200 rounded flex items-center justify-center">
                  <div className="w-10 h-2 bg-gray-400 rounded"></div>
                </div>
              </div>

              {/* Test Result Cards */}
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-2 border-gray-300 rounded-lg p-3 space-y-2">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="w-28 h-3 bg-gray-400 rounded"></div>
                        <div className="w-20 h-2 bg-gray-300 rounded"></div>
                      </div>
                      <div className="w-12 h-5 bg-gray-300 rounded-full"></div>
                    </div>
                    
                    {/* Progress/Stats */}
                    <div className="space-y-1">
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="w-3/4 h-2 bg-gray-400 rounded-full"></div>
                      </div>
                      <div className="flex justify-between">
                        <div className="w-16 h-2 bg-gray-300 rounded"></div>
                        <div className="w-16 h-2 bg-gray-300 rounded"></div>
                      </div>
                    </div>

                    <div className="h-7 bg-gray-300 rounded mt-2 flex items-center justify-center">
                      <div className="w-20 h-2 bg-gray-500 rounded"></div>
                    </div>
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
          <div className="bg-white rounded-xl border-2 border-gray-300 p-6 aspect-[3/4]">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-300 rounded"></div>
                  <div className="w-28 h-4 bg-gray-400 rounded"></div>
                </div>
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
              </div>

              {/* Categories */}
              <div className="flex gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`flex-1 h-8 ${i === 1 ? 'bg-gray-400' : 'bg-gray-200'} rounded flex items-center justify-center`}>
                    <div className="w-12 h-2 bg-gray-600 rounded"></div>
                  </div>
                ))}
              </div>

              {/* Record Cards */}
              <div className="space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="border-2 border-gray-300 rounded-lg p-3">
                    <div className="flex gap-3 items-start">
                      <div className="w-10 h-10 bg-gray-300 rounded"></div>
                      <div className="flex-1 space-y-2">
                        <div className="w-32 h-3 bg-gray-400 rounded"></div>
                        <div className="w-24 h-2 bg-gray-300 rounded"></div>
                        <div className="w-20 h-2 bg-gray-300 rounded"></div>
                      </div>
                      <div className="w-6 h-6 bg-gray-300 rounded"></div>
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
          <div className="bg-white rounded-xl border-2 border-gray-300 p-6 aspect-[3/4]">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
                <div className="w-28 h-4 bg-gray-400 rounded"></div>
              </div>

              {/* Active Prescriptions */}
              <div className="space-y-2">
                <div className="w-32 h-3 bg-gray-300 rounded"></div>
                {[1, 2].map((i) => (
                  <div key={i} className="border-2 border-gray-400 rounded-lg p-3 bg-gray-50">
                    <div className="flex gap-3">
                      <div className="w-12 h-12 bg-gray-300 rounded-lg"></div>
                      <div className="flex-1 space-y-2">
                        <div className="w-28 h-3 bg-gray-400 rounded"></div>
                        <div className="w-24 h-2 bg-gray-300 rounded"></div>
                        <div className="w-20 h-2 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                    <div className="h-8 bg-gray-400 rounded mt-3 flex items-center justify-center">
                      <div className="w-16 h-2 bg-gray-600 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Past Prescriptions */}
              <div className="space-y-2">
                <div className="w-28 h-3 bg-gray-300 rounded"></div>
                {[1, 2].map((i) => (
                  <div key={i} className="bg-gray-100 rounded-lg p-3 flex gap-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-lg"></div>
                    <div className="flex-1 space-y-2">
                      <div className="w-28 h-2 bg-gray-300 rounded"></div>
                      <div className="w-20 h-2 bg-gray-200 rounded"></div>
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
          <div className="bg-white rounded-xl border-2 border-gray-300 p-6 aspect-[3/4]">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
                <div className="w-24 h-4 bg-gray-400 rounded"></div>
              </div>

              {/* Profile Photo */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
                <div className="w-20 h-2 bg-gray-300 rounded"></div>
              </div>

              {/* Settings List */}
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="bg-gray-100 rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-300 rounded"></div>
                      <div className="w-24 h-2 bg-gray-300 rounded"></div>
                    </div>
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  </div>
                ))}
              </div>

              {/* Logout */}
              <div className="h-10 bg-gray-300 rounded flex items-center justify-center mt-6">
                <div className="w-16 h-2 bg-gray-500 rounded"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
