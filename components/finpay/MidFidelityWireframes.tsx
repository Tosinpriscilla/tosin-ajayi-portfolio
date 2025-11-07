import { Home, Send, CreditCard, User, Bell, Search, Plus, ArrowRight, ArrowLeft, Check, Fingerprint } from "lucide-react";

export function MidFidelityWireframes() {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Mid-Fi 1 - Home Screen */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="aspect-[9/16] bg-gray-50 relative">
            {/* Status Bar */}
            <div className="h-8 bg-gray-800 flex items-center justify-between px-4 text-xs text-white">
              <span>9:41</span>
              <div className="flex gap-2">
                <div className="w-4 h-3 bg-white rounded-sm" />
                <div className="w-4 h-3 bg-white rounded-sm" />
              </div>
            </div>

            {/* Header */}
            <div className="px-5 py-4 bg-white flex justify-between items-center border-b">
              <div>
                <div className="w-24 h-4 bg-gray-300 rounded mb-1" />
                <div className="w-28 h-3 bg-gray-200 rounded" />
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <Bell className="w-4 h-4 text-gray-600" />
                </div>
                <div className="w-8 h-8 bg-gray-300 rounded-full" />
              </div>
            </div>

            {/* Balance Card */}
            <div className="px-5 py-5">
              <div className="bg-gray-800 text-white rounded-2xl p-5 shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Total Balance</p>
                    <h2 className="text-3xl mb-1">£12,485.00</h2>
                    <div className="flex gap-4 text-xs mt-2">
                      <div>
                        <p className="text-gray-400">Income</p>
                        <p className="text-gray-300">+£3,200</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Expenses</p>
                        <p className="text-gray-300">-£1,850</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gray-700 rounded-lg" />
                </div>
              </div>
            </div>

            {/* Quick Transfer CTA */}
            <div className="px-5 mb-4">
              <div className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl p-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Quick Transfer</p>
                    <p className="text-xs text-gray-300">Send money instantly</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="px-5 mb-4">
              <div className="flex gap-3">
                {[
                  { icon: CreditCard, label: 'Cards' },
                  { icon: User, label: 'Profile' },
                  { icon: Plus, label: 'More' }
                ].map((action, i) => (
                  <div key={i} className="flex-1 bg-white border-2 border-gray-200 rounded-xl p-3 text-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <action.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <p className="text-xs text-gray-700">{action.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="px-5 pb-20">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm text-gray-900 font-medium">Recent Activity</h3>
                <button className="text-xs text-gray-500">View All</button>
              </div>
              <div className="space-y-2">
                {[
                  { name: 'Tesco Supermarket', amount: '-£42.50', icon: '🛒' },
                  { name: 'Salary Deposit', amount: '+£3,200.00', icon: '💰' },
                ].map((tx, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-lg p-3 flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-base">
                        {tx.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-900">{tx.name}</p>
                        <p className="text-xs text-gray-500">Today, 14:23</p>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {tx.amount}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
              <div className="flex justify-around">
                <div className="flex flex-col items-center">
                  <Home className="w-6 h-6 text-gray-900" />
                  <div className="w-1 h-1 bg-gray-900 rounded-full mt-1" />
                </div>
                <Send className="w-6 h-6 text-gray-400" />
                <CreditCard className="w-6 h-6 text-gray-400" />
                <User className="w-6 h-6 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="p-3 bg-gray-50 border-t">
            <p className="text-center text-sm text-gray-700">Home Screen - Redesign</p>
          </div>
        </div>

        {/* Mid-Fi 2 - Transfer Screen */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="aspect-[9/16] bg-gray-50 relative">
            {/* Status Bar */}
            <div className="h-8 bg-gray-800 flex items-center justify-between px-4 text-xs text-white">
              <span>9:41</span>
              <div className="flex gap-2">
                <div className="w-4 h-3 bg-white rounded-sm" />
              </div>
            </div>

            {/* Header */}
            <div className="px-5 py-4 bg-white flex items-center gap-4 border-b">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </div>
              <h2 className="text-base text-gray-900 font-medium">Quick Transfer</h2>
            </div>

            {/* Progress Steps */}
            <div className="px-5 py-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex-1 h-2 bg-gray-800 rounded-full" />
                <div className="flex-1 h-2 bg-gray-200 rounded-full" />
                <div className="flex-1 h-2 bg-gray-200 rounded-full" />
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-900">Recipient</span>
                <span className="text-gray-400">Amount</span>
                <span className="text-gray-400">Confirm</span>
              </div>
            </div>

            {/* Search */}
            <div className="px-5 mb-4">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                <div className="w-full h-11 bg-white border-2 border-gray-200 rounded-xl pl-10" />
                <div className="absolute left-11 top-3 w-24 h-4 bg-gray-200 rounded" />
              </div>
            </div>

            {/* Recent Contacts */}
            <div className="px-5 mb-5">
              <h3 className="text-xs text-gray-700 mb-3 font-medium">Recent Contacts</h3>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {[
                  { name: 'Sarah M.', initials: 'SM' },
                  { name: 'John D.', initials: 'JD' },
                  { name: 'Emma W.', initials: 'EW' },
                  { name: 'Mike R.', initials: 'MR' },
                ].map((contact, i) => (
                  <div key={i} className="flex flex-col items-center min-w-[60px]">
                    <div className="w-14 h-14 bg-gray-800 text-white rounded-full flex items-center justify-center mb-2 text-sm font-medium">
                      {contact.initials}
                    </div>
                    <p className="text-xs text-gray-700 text-center whitespace-nowrap">{contact.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Saved Payees */}
            <div className="px-5 pb-24">
              <h3 className="text-xs text-gray-700 mb-3 font-medium">Saved Payees</h3>
              <div className="space-y-2">
                {[
                  { name: 'Sarah Mitchell', account: '****1234', initials: 'SM' },
                  { name: 'John Davis', account: '****5678', initials: 'JD' },
                ].map((payee, i) => (
                  <div key={i} className="bg-white border-2 border-gray-200 rounded-xl p-3 flex items-center justify-between hover:border-gray-400 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium text-gray-700">
                        {payee.initials}
                      </div>
                      <div>
                        <p className="text-sm text-gray-900 font-medium">{payee.name}</p>
                        <p className="text-xs text-gray-500">{payee.account}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Action */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-5 py-4">
              <div className="w-full h-12 bg-gray-800 text-white rounded-xl flex items-center justify-center text-sm font-medium">
                Continue
              </div>
            </div>
          </div>
          <div className="p-3 bg-gray-50 border-t">
            <p className="text-center text-sm text-gray-700">Transfer - Step 1: Recipient</p>
          </div>
        </div>

        {/* Mid-Fi 3 - Confirmation Screen */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="aspect-[9/16] bg-gray-50 relative">
            {/* Status Bar */}
            <div className="h-8 bg-gray-800 flex items-center justify-between px-4 text-xs text-white">
              <span>9:41</span>
              <div className="flex gap-2">
                <div className="w-4 h-3 bg-white rounded-sm" />
              </div>
            </div>

            {/* Header */}
            <div className="px-5 py-4 bg-white flex items-center gap-4 border-b">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </div>
              <h2 className="text-base text-gray-900 font-medium">Confirm Transfer</h2>
            </div>

            {/* Progress Steps */}
            <div className="px-5 py-4">
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-800 rounded-full" />
                <div className="flex-1 h-2 bg-gray-800 rounded-full" />
                <div className="flex-1 h-2 bg-gray-800 rounded-full" />
              </div>
            </div>

            {/* Amount Display */}
            <div className="px-5 py-6 text-center">
              <p className="text-sm text-gray-500 mb-2">You're sending</p>
              <h1 className="text-5xl text-gray-900 mb-1 font-bold">£150.00</h1>
              <p className="text-sm text-gray-500">to Sarah Mitchell</p>
            </div>

            {/* Recipient Details */}
            <div className="px-5 mb-5">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-4">
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium text-gray-700">
                    SM
                  </div>
                  <div>
                    <p className="text-sm text-gray-900 font-medium">Sarah Mitchell</p>
                    <p className="text-xs text-gray-500">Account ****1234</p>
                  </div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Reference</span>
                    <span className="text-gray-900">Lunch payment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Date</span>
                    <span className="text-gray-900">Today, 14:23</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Fee</span>
                    <span className="text-gray-900">£0.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Info */}
            <div className="px-5 mb-5">
              <div className="bg-gray-50 border border-gray-300 rounded-xl p-3 flex gap-3">
                <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <p className="text-xs text-gray-700">
                  Protected by 256-bit encryption. Transfer is instant.
                </p>
              </div>
            </div>

            {/* Biometric Prompt */}
            <div className="px-5 pb-28">
              <div className="bg-white border-2 border-gray-300 rounded-xl p-4 text-center">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Fingerprint className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-gray-900 font-medium mb-1">Touch ID to Confirm</p>
                <p className="text-xs text-gray-500">Or enter your PIN</p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-5 py-3.5">
              <div className="flex gap-3">
                <button className="flex-1 h-11 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium flex items-center justify-center">
                  Cancel
                </button>
                <button className="flex-1 h-11 bg-gray-800 text-white rounded-xl text-sm font-medium flex items-center justify-center">
                  Confirm Transfer
                </button>
              </div>
            </div>
          </div>
          <div className="p-3 bg-gray-50 border-t">
            <p className="text-center text-sm text-gray-700">Transfer - Step 3: Confirm</p>
          </div>
        </div>
      </div>

      {/* Design Notes */}
      <div className="bg-gray-50 border-2 border-gray-300 rounded-xl p-6">
        <h4 className="mb-4 text-slate-900">Mid-Fidelity Design Decisions</h4>
        <div className="grid md:grid-cols-2 gap-6 text-slate-700 text-sm">
          <div>
            <h5 className="text-sm text-slate-900 mb-2 font-medium">Information Architecture</h5>
            <ul className="space-y-1">
              <li className="flex gap-2">
                <span className="text-gray-700">•</span>
                <span>Quick Transfer elevated to primary action on home screen</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-700">•</span>
                <span>Reduced navigation depth from 3 levels to 2</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-700">•</span>
                <span>Consolidated actions into 3 clear categories</span>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm text-slate-900 mb-2 font-medium">Interaction Patterns</h5>
            <ul className="space-y-1">
              <li className="flex gap-2">
                <span className="text-gray-700">•</span>
                <span>3-step transfer flow with progress indicators</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-700">•</span>
                <span>Biometric authentication for security and speed</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-700">•</span>
                <span>Recent contacts visible immediately</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
