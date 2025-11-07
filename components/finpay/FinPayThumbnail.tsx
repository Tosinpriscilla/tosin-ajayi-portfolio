import { Home, Send, CreditCard, User, Bell } from "lucide-react";

export function FinPayThumbnail() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-8">
      <div className="flex gap-4 items-center justify-center scale-90">
        {/* iPhone Mockup - Home Screen */}
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
              <div className="px-3 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[7px] opacity-90">Welcome back,</p>
                    <p className="text-[9px]">Priscilla Ajayi</p>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                      <Bell className="w-2 h-2" />
                    </div>
                    <div className="w-4 h-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Balance Card */}
              <div className="p-3">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-3 text-white shadow-lg">
                  <p className="text-[7px] opacity-90 mb-0.5">Total Balance</p>
                  <p className="text-lg">£12,847.50</p>
                  <div className="flex gap-1.5 mt-2">
                    <div className="flex-1 bg-white/20 rounded-lg p-1.5 backdrop-blur">
                      <p className="text-[6px] opacity-80">Income</p>
                      <p className="text-[9px]">£4,200</p>
                    </div>
                    <div className="flex-1 bg-white/20 rounded-lg p-1.5 backdrop-blur">
                      <p className="text-[6px] opacity-80">Expenses</p>
                      <p className="text-[9px]">£1,850</p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-4 gap-1.5 mt-3">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-0.5">
                      <Send className="w-3 h-3 text-indigo-600" />
                    </div>
                    <p className="text-[6px] text-slate-600">Send</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-0.5">
                      <CreditCard className="w-3 h-3 text-purple-600" />
                    </div>
                    <p className="text-[6px] text-slate-600">Cards</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-0.5">
                      <User className="w-3 h-3 text-pink-600" />
                    </div>
                    <p className="text-[6px] text-slate-600">Payees</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-0.5">
                      <Home className="w-3 h-3 text-amber-600" />
                    </div>
                    <p className="text-[6px] text-slate-600">More</p>
                  </div>
                </div>

                {/* Recent Transactions */}
                <div className="mt-3">
                  <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg mb-1">
                    <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[8px]">💰</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[7px] text-slate-900 truncate">Salary Payment</p>
                      <p className="text-[6px] text-slate-500">Today</p>
                    </div>
                    <p className="text-[8px] text-green-600">+£4,200</p>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
                    <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[8px]">🛒</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[7px] text-slate-900 truncate">Tesco</p>
                      <p className="text-[6px] text-slate-500">Yesterday</p>
                    </div>
                    <p className="text-[8px] text-slate-900">-£45.20</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* iPhone Mockup - Transfer Screen */}
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
              <div className="px-3 py-3 bg-white border-b border-slate-200">
                <p className="text-[10px] text-slate-900 text-center">Send Money</p>
              </div>

              {/* Content */}
              <div className="p-3">
                <div className="text-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mx-auto mb-2" />
                  <p className="text-[9px] text-slate-900">Sarah Johnson</p>
                  <p className="text-[7px] text-slate-500">sarah.j@email.com</p>
                </div>

                <div className="mb-3">
                  <p className="text-[7px] text-slate-500 mb-1">Amount</p>
                  <div className="bg-slate-50 rounded-xl p-3 text-center">
                    <p className="text-2xl text-slate-900">£250.00</p>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-[7px] text-slate-500 mb-1">Note (Optional)</p>
                  <div className="bg-slate-50 rounded-xl p-2">
                    <p className="text-[8px] text-slate-400">Dinner split</p>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl py-2.5 text-[9px] shadow-lg">
                  Continue
                </button>
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
              <div className="p-3 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 mt-8">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[11px] text-slate-900 mb-1">Transfer Successful!</p>
                <p className="text-[7px] text-slate-500 mb-4">Your money is on its way</p>

                <div className="bg-slate-50 rounded-xl p-3 mb-3">
                  <div className="flex justify-between mb-2">
                    <p className="text-[7px] text-slate-500">Amount</p>
                    <p className="text-[8px] text-slate-900">£250.00</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="text-[7px] text-slate-500">To</p>
                    <p className="text-[8px] text-slate-900">Sarah Johnson</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[7px] text-slate-500">Date</p>
                    <p className="text-[8px] text-slate-900">Oct 27, 2025</p>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl py-2.5 text-[9px] shadow-lg mb-2">
                  Done
                </button>
                <button className="w-full text-slate-600 text-[8px]">
                  Share Receipt
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
