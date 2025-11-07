import { motion } from "motion/react";
import { X, AlertCircle, TrendingDown, TrendingUp, CheckCircle } from "lucide-react";

export function BeforeAfterComparison() {
  return (
    <div className="space-y-8">
      {/* Comparison Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* BEFORE - Old Design */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -top-3 -left-3 z-10">
            <div className="bg-red-500 text-white px-4 py-1.5 rounded-full shadow-lg">
              <span className="text-xs font-bold">BEFORE</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl border-2 border-red-200 overflow-hidden shadow-lg">
            <div className="relative">
              {/* Old Checkout Design */}
              <div className="p-6 bg-gray-50">
                <h4 className="text-sm font-semibold text-gray-900 mb-4">Old Checkout Flow</h4>
                
                {/* Multi-page indicator */}
                <div className="flex gap-2 mb-4 text-[8px]">
                  <div className="px-2 py-1 bg-gray-300 rounded">Page 1: Cart</div>
                  <div className="px-2 py-1 bg-gray-300 rounded">Page 2: Shipping</div>
                  <div className="px-2 py-1 bg-gray-300 rounded">Page 3: Payment</div>
                  <div className="px-2 py-1 bg-gray-300 rounded">Page 4: Review</div>
                  <div className="px-2 py-1 bg-gray-300 rounded">Page 5: Complete</div>
                </div>

                {/* Cluttered form */}
                <div className="space-y-3 bg-white p-4 rounded-lg border border-gray-300">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-[10px] font-semibold">Shipping Information</span>
                    <span className="text-[8px] text-gray-500">Step 2 of 5</span>
                  </div>
                  
                  <div className="space-y-2">
                    {/* Too many form fields */}
                    <input type="text" placeholder="First Name" className="w-full px-2 py-1.5 border border-gray-300 rounded text-[8px] bg-white" />
                    <input type="text" placeholder="Last Name" className="w-full px-2 py-1.5 border border-gray-300 rounded text-[8px] bg-white" />
                    <input type="text" placeholder="Email Address" className="w-full px-2 py-1.5 border border-gray-300 rounded text-[8px] bg-white" />
                    <input type="text" placeholder="Phone Number" className="w-full px-2 py-1.5 border border-gray-300 rounded text-[8px] bg-white" />
                    <input type="text" placeholder="Address Line 1" className="w-full px-2 py-1.5 border border-gray-300 rounded text-[8px] bg-white" />
                    <input type="text" placeholder="Address Line 2" className="w-full px-2 py-1.5 border border-gray-300 rounded text-[8px] bg-white" />
                    <input type="text" placeholder="City" className="w-full px-2 py-1.5 border border-gray-300 rounded text-[8px] bg-white" />
                    <input type="text" placeholder="County" className="w-full px-2 py-1.5 border border-gray-300 rounded text-[8px] bg-white" />
                    <input type="text" placeholder="Postcode" className="w-full px-2 py-1.5 border border-gray-300 rounded text-[8px] bg-white" />
                  </div>

                  {/* Hidden cost warning */}
                  <div className="mt-4 p-2 bg-yellow-50 border border-yellow-200 rounded flex items-start gap-2">
                    <AlertCircle className="w-3 h-3 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-[8px] text-yellow-800">Delivery costs calculated on next page</p>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 px-3 py-2 border border-gray-400 rounded text-[9px] font-semibold flex items-center justify-center">Back</button>
                    <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded text-[9px] font-semibold flex items-center justify-center">Continue</button>
                  </div>
                </div>
              </div>

              {/* Problems overlay */}
              <div className="absolute inset-0 bg-red-500/5 pointer-events-none"></div>
            </div>
          </div>

          {/* Issues List */}
          <div className="mt-4 space-y-2">
            <div className="flex items-start gap-2 text-red-600">
              <X className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <p className="text-xs">5-page checkout process causing high abandonment</p>
            </div>
            <div className="flex items-start gap-2 text-red-600">
              <X className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <p className="text-xs">Hidden delivery costs revealed too late</p>
            </div>
            <div className="flex items-start gap-2 text-red-600">
              <X className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <p className="text-xs">Mandatory account creation frustrating users</p>
            </div>
            <div className="flex items-start gap-2 text-red-600">
              <X className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <p className="text-xs">No form validation until final submission</p>
            </div>
          </div>
        </motion.div>

        {/* AFTER - New Design */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -top-3 -left-3 z-10">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1.5 rounded-full shadow-lg">
              <span className="text-xs font-bold">AFTER</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border-2 border-green-200 overflow-hidden shadow-lg">
            <div className="relative">
              {/* New Checkout Design */}
              <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                <h4 className="text-sm font-semibold text-gray-900 mb-4">New Single-Page Checkout</h4>
                
                {/* Clear progress */}
                <div className="flex items-center gap-2 mb-4">
                  {['Details', 'Payment', 'Done'].map((step, i) => (
                    <div key={step} className="flex items-center gap-1.5">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${i === 0 ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white' : i < 0 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                        <span className="text-[8px] font-bold">{i + 1}</span>
                      </div>
                      <span className={`text-[8px] ${i === 0 ? 'text-rose-600 font-semibold' : 'text-gray-500'}`}>{step}</span>
                      {i < 2 && <div className="w-4 h-px bg-gray-300"></div>}
                    </div>
                  ))}
                </div>

                {/* Streamlined form */}
                <div className="space-y-3">
                  {/* Shipping - Smart Fields */}
                  <div className="bg-white p-3 rounded-lg border-2 border-green-200 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="text-[9px] font-bold text-gray-900">Shipping Address</h5>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                        <span className="text-[8px] text-green-600 font-semibold">Auto-filled</span>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <input type="text" value="Emily Parker" className="w-full px-2 py-1.5 border-2 border-green-300 rounded text-[8px] font-medium bg-green-50" readOnly />
                      <input type="email" value="emily.parker@email.com" className="w-full px-2 py-1.5 border-2 border-green-300 rounded text-[8px] font-medium bg-green-50" readOnly />
                      <input type="text" value="123 Oxford Street" className="w-full px-2 py-1.5 border-2 border-green-300 rounded text-[8px] font-medium bg-green-50" readOnly />
                      <div className="grid grid-cols-2 gap-1.5">
                        <input type="text" value="London" className="px-2 py-1.5 border-2 border-green-300 rounded text-[8px] font-medium bg-green-50" readOnly />
                        <input type="text" value="W1D 1BS" className="px-2 py-1.5 border-2 border-green-300 rounded text-[8px] font-medium bg-green-50" readOnly />
                      </div>
                    </div>
                  </div>

                  {/* Order Summary with Upfront Costs */}
                  <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-3 rounded-lg border-2 border-rose-200">
                    <h5 className="text-[9px] font-bold text-rose-900 mb-2">Order Summary</h5>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[8px]">
                        <span className="text-gray-700">Subtotal</span>
                        <span className="font-semibold">£45.00</span>
                      </div>
                      <div className="flex justify-between text-[8px]">
                        <span className="text-gray-700">Delivery</span>
                        <span className="font-bold text-green-600">FREE</span>
                      </div>
                      <div className="flex justify-between text-[8px]">
                        <span className="text-gray-700">VAT (20%)</span>
                        <span className="font-semibold">£9.00</span>
                      </div>
                      <div className="pt-2 border-t-2 border-rose-300 flex justify-between">
                        <span className="text-[9px] font-bold text-rose-900">Total</span>
                        <span className="text-xs font-bold text-rose-600">£54.00</span>
                      </div>
                    </div>
                  </div>

                  {/* Guest checkout */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-blue-600" />
                    <p className="text-[8px] text-blue-800 font-semibold">Guest checkout enabled - No account required</p>
                  </div>

                  <button className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-lg py-2.5 text-[9px] font-bold shadow-lg shadow-rose-500/30 flex items-center justify-center">
                    Continue to Payment
                  </button>
                </div>
              </div>

              {/* Success overlay */}
              <div className="absolute inset-0 bg-green-500/5 pointer-events-none"></div>
            </div>
          </div>

          {/* Improvements List */}
          <div className="mt-4 space-y-2">
            <div className="flex items-start gap-2 text-green-600">
              <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <p className="text-xs">Single-page checkout reduced steps by 60%</p>
            </div>
            <div className="flex items-start gap-2 text-green-600">
              <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <p className="text-xs">All costs shown upfront with clear breakdown</p>
            </div>
            <div className="flex items-start gap-2 text-green-600">
              <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <p className="text-xs">Guest checkout option increased conversions by 22%</p>
            </div>
            <div className="flex items-start gap-2 text-green-600">
              <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <p className="text-xs">Real-time validation improved error recovery by 58%</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Impact Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-3 gap-6 mt-12"
      >
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingUp className="w-6 h-6 text-green-600" />
            <span className="text-3xl font-bold text-green-600">28%</span>
          </div>
          <p className="text-sm font-semibold text-gray-900 mb-1">Conversion Rate Increase</p>
          <p className="text-xs text-gray-600">From 5.2% to 6.7%</p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingDown className="w-6 h-6 text-blue-600 rotate-180" />
            <span className="text-3xl font-bold text-blue-600">45%</span>
          </div>
          <p className="text-sm font-semibold text-gray-900 mb-1">Less Cart Abandonment</p>
          <p className="text-xs text-gray-600">Dropped from 73% to 40%</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            <span className="text-3xl font-bold text-purple-600">58%</span>
          </div>
          <p className="text-sm font-semibold text-gray-900 mb-1">Faster Checkout Time</p>
          <p className="text-xs text-gray-600">From 6m 42s to 2m 48s</p>
        </div>
      </motion.div>
    </div>
  );
}
