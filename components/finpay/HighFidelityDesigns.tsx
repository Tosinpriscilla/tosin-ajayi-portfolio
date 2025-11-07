import { Home, Send, CreditCard, User, Bell, Search, ArrowRight, ArrowLeft, Check, TrendingUp, Eye, Fingerprint } from "lucide-react";

export function HighFidelityDesigns() {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        {/* High-Fi 1 - Home Screen */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="aspect-[9/16] bg-gradient-to-b from-indigo-50 to-white relative">
            {/* Status Bar */}
            <div className="h-10 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-between px-6 text-xs text-white">
              <span className="font-medium">9:41</span>
              <div className="flex gap-2 items-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                <div className="w-6 h-3 border-2 border-white rounded-sm relative">
                  <div className="absolute right-0 top-0 bottom-0 w-4 bg-white rounded-l"></div>
                </div>
              </div>
            </div>

            {/* Header */}
            <div className="px-6 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm opacity-90">Welcome back,</p>
                  <h2 className="text-xl font-semibold">Alex Thompson</h2>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Bell className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full" />
                </div>
              </div>
            </div>

            {/* Balance Card */}
            <div className="px-6 -mt-6 mb-4">
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full -mr-16 -mt-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full -ml-12 -mb-12" />
                
                <div className="relative">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <p className="text-gray-400 text-xs">Total Balance</p>
                        <Eye className="w-4 h-4 text-gray-400" />
                      </div>
                      <h2 className="text-4xl font-bold mb-1">£12,485.00</h2>
                      <div className="flex items-center gap-1 text-green-400 text-xs">
                        <TrendingUp className="w-4 h-4" />
                        <span>+12.5% this month</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <CreditCard className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <div className="flex gap-6 text-sm">
                    <div>
                      <p className="text-gray-400 text-xs mb-1">Income</p>
                      <p className="text-green-400 font-medium">+£3,200</p>
                    </div>
                    <div className="h-10 w-px bg-gray-700" />
                    <div>
                      <p className="text-gray-400 text-xs mb-1">Expenses</p>
                      <p className="text-red-400 font-medium">-£1,850</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Transfer CTA */}
            <div className="px-6 mb-4">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-5 flex items-center justify-between text-white shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Send className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Quick Transfer</p>
                    <p className="text-sm text-indigo-100">Send money instantly</p>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="px-6 mb-5">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: CreditCard, label: 'My Cards', color: 'from-blue-500 to-cyan-500' },
                  { icon: User, label: 'Profile', color: 'from-purple-500 to-pink-500' },
                  { icon: TrendingUp, label: 'Analytics', color: 'from-green-500 to-emerald-500' }
                ].map((action, i) => (
                  <div key={i} className="bg-white rounded-2xl p-4 text-center shadow-md border border-gray-100">
                    <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs text-gray-700 font-medium">{action.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="px-6 pb-20">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base text-gray-900 font-semibold">Recent Activity</h3>
                <button className="text-sm text-indigo-600 font-medium">View All</button>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Tesco Supermarket', time: 'Today, 14:23', amount: '-£42.50', icon: '🛒', color: 'from-green-400 to-emerald-500' },
                  { name: 'Salary Deposit', time: 'Today, 09:00', amount: '+£3,200.00', icon: '💰', color: 'from-blue-400 to-cyan-500' },
                ].map((tx, i) => (
                  <div key={i} className="bg-white rounded-2xl p-4 flex justify-between items-center shadow-md border border-gray-100">
                    <div className="flex gap-3 items-center">
                      <div className={`w-12 h-12 bg-gradient-to-br ${tx.color} rounded-2xl flex items-center justify-center text-xl shadow-md`}>
                        {tx.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-900 font-medium">{tx.name}</p>
                        <p className="text-xs text-gray-500">{tx.time}</p>
                      </div>
                    </div>
                    <p className={`text-sm font-semibold ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-gray-900'}`}>
                      {tx.amount}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 px-8 py-4 rounded-t-3xl shadow-2xl">
              <div className="flex justify-around items-center">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Home className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-indigo-600 font-medium">Home</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Send className="w-6 h-6 text-gray-400" />
                  <span className="text-xs text-gray-400">Transfer</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <CreditCard className="w-6 h-6 text-gray-400" />
                  <span className="text-xs text-gray-400">Cards</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <User className="w-6 h-6 text-gray-400" />
                  <span className="text-xs text-gray-400">Profile</span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 bg-slate-50 text-center border-t">
            <p className="text-sm text-slate-700 font-medium">Home Screen - Final Design</p>
          </div>
        </div>

        {/* High-Fi 2 - Transfer Screen */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="aspect-[9/16] bg-white relative">
            {/* Status Bar */}
            <div className="h-10 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-between px-6 text-xs text-white">
              <span className="font-medium">9:41</span>
              <div className="flex gap-2 items-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                <div className="w-6 h-3 border-2 border-white rounded-sm relative">
                  <div className="absolute right-0 top-0 bottom-0 w-4 bg-white rounded-l"></div>
                </div>
              </div>
            </div>

            {/* Header */}
            <div className="px-6 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center gap-4">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold">Quick Transfer</h2>
            </div>

            {/* Progress Steps */}
            <div className="px-6 py-5 bg-gradient-to-b from-indigo-50 to-white">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex-1 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-md" />
                <div className="flex-1 h-2 bg-gray-200 rounded-full" />
                <div className="flex-1 h-2 bg-gray-200 rounded-full" />
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-indigo-600 font-semibold">Recipient</span>
                <span className="text-gray-400">Amount</span>
                <span className="text-gray-400">Confirm</span>
              </div>
            </div>

            {/* Search */}
            <div className="px-6 mb-5">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search contacts or account number"
                  className="w-full h-14 bg-gray-50 border-2 border-gray-200 rounded-2xl pl-12 pr-4 text-sm"
                />
              </div>
            </div>

            {/* Recent Contacts */}
            <div className="px-6 mb-6">
              <h3 className="text-sm text-gray-700 mb-4 font-semibold">Recent Contacts</h3>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {[
                  { name: 'Sarah M.', color: 'from-pink-400 to-rose-500' },
                  { name: 'John D.', color: 'from-blue-400 to-cyan-500' },
                  { name: 'Emma W.', color: 'from-purple-400 to-indigo-500' },
                  { name: 'Mike R.', color: 'from-green-400 to-emerald-500' },
                ].map((contact, i) => (
                  <div key={i} className="flex flex-col items-center min-w-[70px]">
                    <div className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center mb-2 shadow-lg text-white`}>
                      <span className="text-sm font-semibold">{contact.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <p className="text-xs text-gray-700 text-center font-medium">{contact.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Saved Payees */}
            <div className="px-6 pb-28">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm text-gray-700 font-semibold">Saved Payees</h3>
                <button className="text-xs text-indigo-600 font-medium">View All</button>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Sarah Mitchell', account: '****1234', color: 'from-pink-400 to-rose-500' },
                  { name: 'John Davis', account: '****5678', color: 'from-blue-400 to-cyan-500' },
                ].map((payee, i) => (
                  <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-4 flex items-center justify-between hover:border-indigo-300 hover:shadow-lg transition-all cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${payee.color} rounded-2xl flex items-center justify-center text-white shadow-md`}>
                        <span className="text-sm font-semibold">{payee.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-900 font-semibold">{payee.name}</p>
                        <p className="text-xs text-gray-500">{payee.account}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Action */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 px-6 py-4 rounded-t-3xl shadow-2xl">
              <button className="w-full h-14 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl shadow-lg font-semibold text-sm flex items-center justify-center">
                Continue
              </button>
            </div>
          </div>
          <div className="px-6 py-4 bg-slate-50 text-center border-t">
            <p className="text-sm text-slate-700 font-medium">Transfer - Select Recipient</p>
          </div>
        </div>

        {/* High-Fi 3 - Confirmation Screen */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="aspect-[9/16] bg-gradient-to-b from-green-50 to-white relative">
            {/* Status Bar */}
            <div className="h-10 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-between px-6 text-xs text-white">
              <span className="font-medium">9:41</span>
              <div className="flex gap-2 items-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                <div className="w-6 h-3 border-2 border-white rounded-sm relative">
                  <div className="absolute right-0 top-0 bottom-0 w-4 bg-white rounded-l"></div>
                </div>
              </div>
            </div>

            {/* Header */}
            <div className="px-6 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center gap-4">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold">Confirm Transfer</h2>
            </div>

            {/* Progress Steps */}
            <div className="px-6 py-5 bg-gradient-to-b from-indigo-50 to-transparent">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex-1 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-md" />
                <div className="flex-1 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-md" />
                <div className="flex-1 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-md" />
              </div>
            </div>

            {/* Success Icon & Amount */}
            <div className="px-6 py-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Check className="w-10 h-10 text-white" />
              </div>
              <p className="text-sm text-gray-600 mb-2">You're sending</p>
              <h1 className="text-6xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">£150.00</h1>
              <p className="text-sm text-gray-600">to Sarah Mitchell</p>
            </div>

            {/* Recipient Card */}
            <div className="px-6 mb-6">
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center gap-4 mb-5 pb-5 border-b border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <span className="text-lg font-bold">SM</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-base text-gray-900 font-semibold">Sarah Mitchell</p>
                    <p className="text-sm text-gray-500">Account ****1234</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Reference</span>
                    <span className="text-gray-900 font-semibold">Lunch payment</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Date & Time</span>
                    <span className="text-gray-900 font-semibold">Today, 14:23</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Transfer Fee</span>
                    <span className="text-green-600 font-semibold">£0.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="px-6 mb-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-4 flex gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">
                  This transfer is protected by 256-bit encryption and will appear in your account instantly.
                </p>
              </div>
            </div>

            {/* Biometric Auth */}
            <div className="px-6 pb-28">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-center shadow-2xl">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <Fingerprint className="w-10 h-10 text-white" />
                </div>
                <p className="text-base text-white font-semibold mb-2">Touch ID to Confirm</p>
                <p className="text-sm text-gray-400">Or enter your PIN below</p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 px-6 py-4 rounded-t-3xl shadow-2xl">
              <div className="flex gap-3">
                <button className="flex-1 h-14 bg-gray-100 text-gray-700 rounded-2xl font-semibold hover:bg-gray-200 transition-colors text-sm flex items-center justify-center">
                  Cancel
                </button>
                <button className="flex-1 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl shadow-lg font-semibold text-sm flex items-center justify-center">
                  Confirm Transfer
                </button>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 bg-slate-50 text-center border-t">
            <p className="text-sm text-slate-700 font-medium">Transfer - Confirmation</p>
          </div>
        </div>
      </div>

      {/* Design System & Specifications */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Color Palette */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h4 className="mb-6 text-slate-900 font-bold">Colour Palette</h4>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2 font-medium">Primary Gradient</p>
              <div className="flex gap-2">
                <div className="flex-1 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-md" />
              </div>
              <p className="text-xs text-gray-500 mt-2 font-mono">#4F46E5 → #9333EA</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2 font-medium">Secondary Gradients</p>
              <div className="flex gap-2">
                <div className="flex-1 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-lg shadow-md" />
                <div className="flex-1 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg shadow-md" />
                <div className="flex-1 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg shadow-md" />
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2 font-medium">Neutrals</p>
              <div className="flex gap-2">
                <div className="flex-1 h-12 bg-slate-900 rounded-lg" />
                <div className="flex-1 h-12 bg-slate-600 rounded-lg" />
                <div className="flex-1 h-12 bg-gray-300 rounded-lg" />
                <div className="flex-1 h-12 bg-gray-100 rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Typography & Components */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h4 className="mb-6 text-slate-900 font-bold">Typography & Components</h4>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-500 mb-2">Font Family</p>
              <p className="text-base text-gray-900 font-semibold">Inter - Variable Font</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2">Heading / Display</p>
              <p className="text-3xl text-gray-900 font-bold">Aa</p>
              <p className="text-xs text-gray-600 mt-1">Inter Bold, 36px</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2">Border Radius</p>
              <p className="text-base text-gray-900">16px - 24px (Rounded)</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2">Button Height</p>
              <p className="text-base text-gray-900">56px (Touch-friendly)</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2">Accessibility</p>
              <p className="text-base text-gray-900">WCAG 2.1 AA Compliant</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Design Principles */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-8">
        <h4 className="mb-6 text-slate-900 font-bold">Design Principles & Rationale</h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h5 className="text-sm text-slate-900 mb-2 font-semibold">Visual Hierarchy</h5>
            <p className="text-sm text-slate-700">
              Gradient backgrounds and card elevations create clear visual separation. Quick Transfer prominently positioned as primary action based on user research.
            </p>
          </div>
          <div>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
              <Fingerprint className="w-6 h-6 text-white" />
            </div>
            <h5 className="text-sm text-slate-900 mb-2 font-semibold">Accessibility & Security</h5>
            <p className="text-sm text-slate-700">
              WCAG 2.1 AA compliant with high contrast ratios (4.5:1 minimum), large touch targets (56px), and biometric authentication options for speed and security.
            </p>
          </div>
          <div>
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h5 className="text-sm text-slate-900 mb-2 font-semibold">Modern Aesthetic</h5>
            <p className="text-sm text-slate-700">
              Gradient buttons, rounded corners (16-24px), subtle shadows with proper elevation, and smooth transitions create a premium, contemporary feel that builds trust.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
