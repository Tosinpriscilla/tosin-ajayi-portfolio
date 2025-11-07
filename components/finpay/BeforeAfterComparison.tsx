import { ArrowRight, Bell, CreditCard, Home, Send, User, TrendingUp, Eye } from "lucide-react";

export function BeforeAfterComparison() {
  return (
    <div className="space-y-8">
      {/* Comparison Header */}
      <div className="text-center mb-12">
        <h3 className="text-3xl text-slate-900 mb-4">Design Evolution</h3>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          A complete redesign based on user research and testing, resulting in a 65% faster task completion and 89% user satisfaction score.
        </p>
      </div>

      {/* Home Screen Comparison */}
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
        <h4 className="text-xl text-slate-900 mb-8 text-center font-semibold">Home Screen Transformation</h4>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Before */}
          <div>
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4 mb-4">
              <p className="text-sm text-red-800 font-semibold text-center">❌ Before - Cluttered Interface</p>
            </div>
            
            <div className="bg-slate-100 rounded-2xl p-6 border-2 border-slate-300">
              <div className="aspect-[9/16] bg-gray-50 rounded-2xl shadow-2xl overflow-hidden relative">
                {/* Status Bar */}
                <div className="h-8 bg-blue-700 flex items-center justify-between px-4 text-xs text-white">
                  <span className="font-medium">9:41</span>
                  <div className="flex gap-2 items-center">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                    <div className="w-5 h-2 border-2 border-white rounded-sm relative">
                      <div className="absolute right-0 top-0 bottom-0 w-3 bg-white rounded-l"></div>
                    </div>
                  </div>
                </div>

                {/* Header - Flat design */}
                <div className="px-4 py-3 bg-blue-700 text-white flex justify-between items-center">
                  <div>
                    <p className="text-xs opacity-80">My Account</p>
                    <p className="text-base font-semibold">Alex Thompson</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center">
                      <Bell className="w-4 h-4" />
                    </div>
                    <div className="w-7 h-7 bg-orange-400 rounded-full flex items-center justify-center text-xs font-bold text-white">
                      AT
                    </div>
                  </div>
                </div>

                {/* Small Balance Card - Buried at top */}
                <div className="px-4 py-3 bg-white border-b border-gray-200">
                  <p className="text-xs text-gray-500 mb-1">Current Balance</p>
                  <p className="text-xl font-bold text-gray-900">£12,485.00</p>
                  <div className="flex gap-4 text-xs mt-2">
                    <span className="text-green-600">Income: +£3,200</span>
                    <span className="text-red-600">Spent: -£1,850</span>
                  </div>
                </div>

                {/* Overwhelming 6-icon grid */}
                <div className="px-4 py-3 bg-gray-50">
                  <p className="text-xs text-gray-600 mb-2 font-medium">Services</p>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { icon: Send, label: 'Transfer', color: 'bg-blue-500' },
                      { icon: CreditCard, label: 'Cards', color: 'bg-green-500' },
                      { icon: User, label: 'Profile', color: 'bg-purple-500' },
                      { icon: TrendingUp, label: 'Stats', color: 'bg-orange-500' },
                      { icon: Bell, label: 'Alerts', color: 'bg-red-500' },
                      { icon: Home, label: 'More', color: 'bg-gray-500' }
                    ].map((item, i) => (
                      <div key={i} className="bg-white border border-gray-200 rounded-lg p-3 text-center shadow-sm">
                        <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <p className="text-xs text-gray-700">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dense transaction list */}
                <div className="px-4 py-3 pb-16 bg-white">
                  <p className="text-xs text-gray-600 mb-2 font-medium">Recent Transactions</p>
                  <div className="space-y-1.5">
                    {[
                      { name: 'Tesco Supermarket', date: '23 Oct', amount: '-£42.50', icon: '🛒', bg: 'bg-green-100' },
                      { name: 'Salary - Acme Corp', date: '23 Oct', amount: '+£3,200.00', icon: '💼', bg: 'bg-blue-100' },
                      { name: 'Netflix Subscription', date: '22 Oct', amount: '-£9.99', icon: '📺', bg: 'bg-red-100' },
                      { name: 'Amazon Purchase', date: '22 Oct', amount: '-£34.99', icon: '📦', bg: 'bg-orange-100' },
                      { name: 'Starbucks', date: '21 Oct', amount: '-£4.50', icon: '☕', bg: 'bg-yellow-100' }
                    ].map((tx, i) => (
                      <div key={i} className="flex justify-between items-center py-2 px-3 bg-gray-50 border border-gray-200 rounded">
                        <div className="flex gap-2 items-center flex-1 min-w-0">
                          <div className={`w-8 h-8 ${tx.bg} rounded flex items-center justify-center flex-shrink-0`}>
                            <span className="text-sm">{tx.icon}</span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs text-gray-900 font-medium truncate">{tx.name}</p>
                            <p className="text-xs text-gray-500">{tx.date}</p>
                          </div>
                        </div>
                        <p className={`text-xs font-semibold ml-2 ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-gray-900'}`}>
                          {tx.amount}
                        </p>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-2 py-2 text-xs text-blue-600 font-medium border border-blue-200 rounded bg-blue-50">
                    View All Transactions
                  </button>
                </div>

                {/* Bottom Navigation */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-300 px-4 py-2.5 shadow-lg">
                  <div className="flex justify-around items-center">
                    {[
                      { icon: Home, label: 'Home', active: true },
                      { icon: Send, label: 'Send', active: false },
                      { icon: CreditCard, label: 'Cards', active: false },
                      { icon: User, label: 'Account', active: false }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <item.icon className={`w-5 h-5 ${item.active ? 'text-blue-600' : 'text-gray-400'}`} />
                        <span className={`text-xs ${item.active ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <p className="flex gap-2">
                <span className="text-red-600">•</span>
                <span>Overwhelming 6-icon grid caused confusion</span>
              </p>
              <p className="flex gap-2">
                <span className="text-red-600">•</span>
                <span>Small balance card hidden at top</span>
              </p>
              <p className="flex gap-2">
                <span className="text-red-600">•</span>
                <span>Transfer buried 3 levels deep</span>
              </p>
              <p className="flex gap-2">
                <span className="text-red-600">•</span>
                <span>Dense transaction list hard to scan</span>
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex justify-center">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="md:hidden flex justify-center my-6">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl rotate-90">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* After */}
          <div>
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4 mb-4">
              <p className="text-sm text-green-800 font-semibold text-center">✓ After - Streamlined Design</p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-6 border-2 border-indigo-200">
              <div className="aspect-[9/16] bg-gradient-to-b from-indigo-50 to-white rounded-2xl shadow-2xl overflow-hidden relative">
                {/* Status Bar */}
                <div className="h-8 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-between px-4 text-xs text-white">
                  <span className="font-medium">9:41</span>
                  <div className="flex gap-2 items-center">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                    <div className="w-5 h-2 border-2 border-white rounded-sm relative">
                      <div className="absolute right-0 top-0 bottom-0 w-3 bg-white rounded-l"></div>
                    </div>
                  </div>
                </div>

                {/* Header */}
                <div className="px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs opacity-90">Welcome back,</p>
                      <p className="text-base font-semibold">Alex Thompson</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-7 h-7 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Bell className="w-4 h-4" />
                      </div>
                      <div className="w-7 h-7 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Balance Card */}
                <div className="px-4 -mt-4 mb-3">
                  <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-4 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/10 rounded-full -mr-10 -mt-10" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-500/10 rounded-full -ml-8 -mb-8" />
                    
                    <div className="relative">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="flex items-center gap-1 mb-1">
                            <p className="text-gray-400 text-xs">Total Balance</p>
                            <Eye className="w-3 h-3 text-gray-400" />
                          </div>
                          <h2 className="text-2xl font-bold mb-0.5">£12,485.00</h2>
                          <div className="flex items-center gap-1 text-green-400 text-xs">
                            <TrendingUp className="w-3 h-3" />
                            <span>+12.5% this month</span>
                          </div>
                        </div>
                        <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                          <CreditCard className="w-5 h-5" />
                        </div>
                      </div>
                      
                      <div className="flex gap-4 text-xs">
                        <div>
                          <p className="text-gray-400 text-xs mb-0.5">Income</p>
                          <p className="text-green-400 font-medium">+£3,200</p>
                        </div>
                        <div className="h-8 w-px bg-gray-700" />
                        <div>
                          <p className="text-gray-400 text-xs mb-0.5">Expenses</p>
                          <p className="text-red-400 font-medium">-£1,850</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Transfer CTA */}
                <div className="px-4 mb-3">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-3 flex items-center justify-between text-white shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Send className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold">Quick Transfer</p>
                        <p className="text-xs text-indigo-100">Send money instantly</p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="px-4 mb-3">
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { icon: CreditCard, label: 'My Cards', color: 'from-blue-500 to-cyan-500' },
                      { icon: User, label: 'Profile', color: 'from-purple-500 to-pink-500' },
                      { icon: TrendingUp, label: 'Analytics', color: 'from-green-500 to-emerald-500' }
                    ].map((action, i) => (
                      <div key={i} className="bg-white rounded-xl p-2 text-center shadow-sm border border-gray-100">
                        <div className={`w-8 h-8 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mx-auto mb-1.5 shadow-md`}>
                          <action.icon className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-xs text-gray-700 font-medium">{action.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="px-4 pb-14">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xs text-gray-900 font-semibold">Recent Activity</h3>
                    <button className="text-xs text-indigo-600 font-medium">View All</button>
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: 'Tesco Supermarket', time: 'Today, 14:23', amount: '-£42.50', icon: '🛒', color: 'from-green-400 to-emerald-500' },
                      { name: 'Salary Deposit', time: 'Today, 09:00', amount: '+£3,200.00', icon: '💰', color: 'from-blue-400 to-cyan-500' },
                    ].map((tx, i) => (
                      <div key={i} className="bg-white rounded-xl p-2.5 flex justify-between items-center shadow-sm border border-gray-100">
                        <div className="flex gap-2 items-center">
                          <div className={`w-8 h-8 bg-gradient-to-br ${tx.color} rounded-xl flex items-center justify-center text-sm shadow-sm`}>
                            {tx.icon}
                          </div>
                          <div>
                            <p className="text-xs text-gray-900 font-medium">{tx.name}</p>
                            <p className="text-xs text-gray-500">{tx.time}</p>
                          </div>
                        </div>
                        <p className={`text-xs font-semibold ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-gray-900'}`}>
                          {tx.amount}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 px-5 py-2.5 rounded-t-2xl shadow-xl">
                  <div className="flex justify-around items-center">
                    <div className="flex flex-col items-center gap-0.5">
                      <div className="w-7 h-7 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                        <Home className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs text-indigo-600 font-medium">Home</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <Send className="w-5 h-5 text-gray-400" />
                      <span className="text-xs text-gray-400">Transfer</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <CreditCard className="w-5 h-5 text-gray-400" />
                      <span className="text-xs text-gray-400">Cards</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <User className="w-5 h-5 text-gray-400" />
                      <span className="text-xs text-gray-400">Profile</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <p className="flex gap-2">
                <span className="text-green-600">•</span>
                <span>Quick Transfer as hero element (1-tap access)</span>
              </p>
              <p className="flex gap-2">
                <span className="text-green-600">•</span>
                <span>Large balance card for instant visibility</span>
              </p>
              <p className="flex gap-2">
                <span className="text-green-600">•</span>
                <span>Simplified 3-button layout (tested better)</span>
              </p>
              <p className="flex gap-2">
                <span className="text-green-600">•</span>
                <span>Visual gradients improve scannability</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Transfer Flow Comparison */}
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
        <h4 className="text-xl text-slate-900 mb-8 text-center font-semibold">Transfer Flow Optimization</h4>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Before - 5 Steps */}
          <div>
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-3 mb-4">
              <p className="text-sm text-red-800 font-semibold text-center">Before: 5 Steps</p>
            </div>
            
            <div className="space-y-3">
              {[
                'Navigate to Transfer',
                'Select Transfer Type',
                'Choose Recipient',
                'Enter Amount & Details',
                'Confirm Transfer'
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-semibold">
                    {i + 1}
                  </div>
                  <p className="text-sm text-gray-700">{step}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 bg-red-50 rounded-xl border border-red-200">
              <p className="text-sm text-red-800 font-semibold mb-2">User Feedback:</p>
              <p className="text-sm text-gray-700">"Too many steps to send money to someone I transfer to regularly"</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <ArrowRight className="w-12 h-12 text-indigo-600" />
          </div>

          {/* After - 3 Steps */}
          <div>
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-3 mb-4">
              <p className="text-sm text-green-800 font-semibold text-center">After: 3 Steps (40% Faster)</p>
            </div>
            
            <div className="space-y-3">
              {[
                'Quick Transfer (Home)',
                'Choose Recipient',
                'Confirm with Biometric'
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border-2 border-indigo-200 shadow-sm">
                  <div className="w-7 h-7 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  <p className="text-sm text-gray-900 font-medium">{step}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-200">
              <p className="text-sm text-green-800 font-semibold mb-2">User Feedback:</p>
              <p className="text-sm text-gray-700">"So much faster! I can send money in seconds now. Love the Touch ID option"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Improvements Summary */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 border-2 border-indigo-200">
        <h4 className="text-xl text-slate-900 mb-6 text-center font-semibold">Key Improvements Summary</h4>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-4xl mb-3 text-center">⚡</div>
            <h5 className="font-semibold text-slate-900 mb-2 text-center">65% Faster</h5>
            <p className="text-sm text-slate-600 text-center">
              Task completion time reduced from average 2.5 minutes to 52 seconds
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-4xl mb-3 text-center">😊</div>
            <h5 className="font-semibold text-slate-900 mb-2 text-center">89% Satisfaction</h5>
            <p className="text-sm text-slate-600 text-center">
              User satisfaction score improved from 62% to 89% post-redesign
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-4xl mb-3 text-center">🎯</div>
            <h5 className="font-semibold text-slate-900 mb-2 text-center">95% Success Rate</h5>
            <p className="text-sm text-slate-600 text-center">
              First-time success rate increased from 73% to 95% in usability tests
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
