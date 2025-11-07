import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

export function MidFidelityWireframes() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Product Page Mid-Fi */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-xl border-2 border-gray-400 p-8 shadow-lg"
      >
        <h4 className="text-sm font-semibold text-gray-900 mb-6">Product Page - Mid-Fi (Greyscale)</h4>
        <div className="space-y-4">
          {/* Header */}
          <div className="flex justify-between items-center pb-4 border-b border-gray-300">
            <div className="flex items-center gap-3">
              <ArrowLeft className="w-4 h-4 text-gray-600" />
              <div className="font-bold text-xs text-gray-900">ShopSphere</div>
            </div>
            <div className="flex gap-3">
              <div className="w-5 h-5 bg-gray-200 rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              </div>
              <div className="w-5 h-5 bg-gray-200 rounded relative">
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gray-700 rounded-full"></div>
              </div>
              <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
            </div>
          </div>
          
          {/* Breadcrumb */}
          <div className="flex gap-1 text-[8px] text-gray-500">
            <span>Home</span>
            <span>›</span>
            <span>Clothing</span>
            <span>›</span>
            <span className="text-gray-900 font-semibold">Shirt</span>
          </div>

          {/* Product Display */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            {/* Image Gallery */}
            <div className="space-y-2">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg relative overflow-hidden border border-gray-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-24 bg-white/50 rounded"></div>
                </div>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`w-12 h-12 rounded ${i === 1 ? 'bg-gray-300 border-2 border-gray-900' : 'bg-gray-100'}`}></div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-2">
              <div className="px-2 py-0.5 bg-gray-800 text-white rounded text-[7px] font-semibold inline-block">
                NEW ARRIVAL
              </div>
              <div className="text-[10px] font-bold text-gray-900">Premium Cotton Shirt</div>
              <div className="flex items-center gap-1">
                <div className="flex text-[8px] text-gray-600">★★★★★</div>
                <span className="text-[7px] text-gray-500">(127)</span>
              </div>
              
              <div className="flex items-center gap-2 pt-1">
                <span className="text-sm font-bold text-gray-900">£45.00</span>
                <span className="text-[8px] text-gray-400 line-through">£65.00</span>
              </div>

              {/* Size Selector */}
              <div className="space-y-1 pt-2">
                <p className="text-[7px] text-gray-600">Size</p>
                <div className="flex gap-1.5">
                  {['S', 'M', 'L', 'XL'].map((size) => (
                    <div key={size} className={`w-7 h-7 border ${size === 'M' ? 'border-gray-900 bg-gray-200' : 'border-gray-300'} rounded text-[7px] flex items-center justify-center font-semibold`}>
                      {size}
                    </div>
                  ))}
                </div>
              </div>

              {/* Color Selector */}
              <div className="space-y-1 pt-2">
                <p className="text-[7px] text-gray-600">Color</p>
                <div className="flex gap-1.5">
                  {['bg-gray-700', 'bg-gray-800', 'bg-white'].map((color, i) => (
                    <div key={i} className={`w-6 h-6 rounded-full ${color} ${i === 0 ? 'ring-2 ring-gray-900 ring-offset-2' : ''} ${color === 'bg-white' ? 'border border-gray-300' : ''}`}></div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-1.5 pt-3">
                <div className="bg-gray-900 text-white rounded-lg py-2 text-[8px] text-center font-semibold">
                  Add to Cart
                </div>
                <div className="border border-gray-400 rounded-lg py-2 text-[8px] text-center font-semibold">
                  Buy Now
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-3 mt-4">
            <p className="text-[8px] text-gray-900 font-semibold mb-0.5">✓ Free Delivery</p>
            <p className="text-[7px] text-gray-600">On orders over £50 • Arrives in 2-3 days</p>
          </div>

          {/* Product Details Tabs */}
          <div className="pt-4 border-t border-gray-200">
            <div className="flex gap-4 mb-3">
              {['Description', 'Details', 'Reviews'].map((tab, i) => (
                <div key={tab} className={`text-[8px] ${i === 0 ? 'font-bold text-gray-900 border-b-2 border-gray-900' : 'text-gray-500'} pb-1`}>
                  {tab}
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <div className="w-full h-2 bg-gray-200 rounded"></div>
              <div className="w-full h-2 bg-gray-200 rounded"></div>
              <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Checkout Page Mid-Fi */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-white rounded-xl border-2 border-gray-400 p-8 shadow-lg"
      >
        <h4 className="text-sm font-semibold text-gray-900 mb-6">Checkout - Mid-Fi (Greyscale)</h4>
        <div className="space-y-4">
          {/* Header */}
          <div className="border-b border-gray-300 pb-4">
            <div className="flex items-center gap-3 mb-3">
              <ArrowLeft className="w-4 h-4 text-gray-600" />
              <h3 className="text-xs font-bold text-gray-900">Checkout</h3>
            </div>
            <div className="flex items-center gap-2">
              {['Cart', 'Details', 'Payment'].map((step, i) => (
                <div key={step} className="flex items-center gap-1.5">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${i === 1 ? 'bg-gray-900' : i < 1 ? 'bg-gray-600' : 'bg-gray-300'} text-white`}>
                    {i < 1 ? (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-[8px] font-bold">{i + 1}</span>
                    )}
                  </div>
                  <span className={`text-[8px] ${i === 1 ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>{step}</span>
                  {i < 2 && <div className={`w-6 h-px ${i < 1 ? 'bg-gray-600' : 'bg-gray-300'} mx-1`}></div>}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="space-y-3">
            {/* Shipping Address */}
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-[9px] font-bold text-gray-900">Shipping Address</h4>
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="space-y-1.5">
                <input
                  type="text"
                  className="w-full px-2 py-1.5 bg-white border border-gray-300 rounded text-[8px]"
                  placeholder="Full Name"
                  value="Emily Parker"
                  readOnly
                />
                <input
                  type="email"
                  className="w-full px-2 py-1.5 bg-white border border-gray-300 rounded text-[8px]"
                  placeholder="Email"
                  value="emily.parker@email.com"
                  readOnly
                />
                <input
                  type="text"
                  className="w-full px-2 py-1.5 bg-white border border-gray-300 rounded text-[8px]"
                  placeholder="Address"
                  value="123 Oxford Street"
                  readOnly
                />
                <div className="grid grid-cols-2 gap-1.5">
                  <input
                    type="text"
                    className="px-2 py-1.5 bg-white border border-gray-300 rounded text-[8px]"
                    placeholder="City"
                    value="London"
                    readOnly
                  />
                  <input
                    type="text"
                    className="px-2 py-1.5 bg-white border border-gray-300 rounded text-[8px]"
                    placeholder="Postcode"
                    value="W1D 1BS"
                    readOnly
                  />
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <h4 className="text-[9px] font-bold text-gray-900 mb-2">Order Summary</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                  <div className="w-12 h-12 bg-gray-200 rounded"></div>
                  <div className="flex-1">
                    <p className="text-[8px] text-gray-900 font-semibold">Premium Cotton Shirt</p>
                    <p className="text-[8px] text-gray-500">Size M • Blue • Qty 1</p>
                  </div>
                  <p className="text-[9px] font-bold">£45.00</p>
                </div>
                <div className="flex justify-between text-[8px] text-gray-600">
                  <span>Subtotal</span>
                  <span>£45.00</span>
                </div>
                <div className="flex justify-between text-[8px]">
                  <span className="text-gray-600">Delivery</span>
                  <span className="text-gray-900 font-semibold">FREE</span>
                </div>
                <div className="flex justify-between text-[8px]">
                  <span className="text-gray-600">VAT (20%)</span>
                  <span>£9.00</span>
                </div>
                <div className="pt-2 border-t border-gray-300 flex justify-between">
                  <span className="text-[9px] font-bold text-gray-900">Total</span>
                  <span className="text-xs font-bold text-gray-900">£54.00</span>
                </div>
              </div>
            </div>

            {/* Payment Method Preview */}
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <h4 className="text-[9px] font-bold text-gray-900 mb-2">Payment Method</h4>
              <div className="flex items-center gap-2">
                <div className="w-8 h-6 bg-gray-300 rounded"></div>
                <span className="text-[8px] text-gray-600">•••• •••• •••• 4532</span>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gray-900 rounded-lg py-3 text-center mt-4">
              <p className="text-[10px] font-bold text-white">Continue to Payment</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
