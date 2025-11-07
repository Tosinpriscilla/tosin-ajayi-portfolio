import { motion } from "motion/react";
import { ShoppingCart, Heart, Search, User, Star, Truck, Shield, RotateCcw, ArrowLeft } from "lucide-react";

export function HighFidelityDesigns() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Product Page High-Fi */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-2xl"
      >
        <div className="relative h-full">
          {/* Header */}
          <div className="border-b border-gray-200 px-5 py-3 bg-white sticky top-0 z-10">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <ArrowLeft className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900 transition-colors" />
                <h2 className="text-base font-bold text-rose-600">ShopSphere</h2>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 rounded-full px-4 py-1.5 flex items-center gap-2">
                  <Search className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-[10px] text-gray-500">Search products...</span>
                </div>
                <Heart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-rose-600 transition-colors" />
                <div className="relative cursor-pointer">
                  <ShoppingCart className="w-5 h-5 text-gray-600" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-[9px] text-white font-bold">3</span>
                  </div>
                </div>
                <User className="w-5 h-5 text-gray-600" />
              </div>
            </div>
            
            {/* Breadcrumb */}
            <div className="flex gap-1.5 text-[10px] text-gray-500">
              <span className="hover:text-gray-900 cursor-pointer">Home</span>
              <span>›</span>
              <span className="hover:text-gray-900 cursor-pointer">Clothing</span>
              <span>›</span>
              <span className="text-gray-900 font-semibold">Premium Cotton Shirt</span>
            </div>
          </div>

          {/* Product Content */}
          <div className="px-5 py-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Image Gallery */}
              <div className="space-y-2">
                <div className="aspect-square bg-gradient-to-br from-rose-100 via-pink-50 to-amber-100 rounded-xl relative overflow-hidden border border-gray-200 shadow-sm">
                  <div className="absolute top-3 right-3 z-10">
                    <div className="bg-white/90 backdrop-blur px-2 py-1 rounded-full shadow-lg">
                      <span className="text-[8px] font-bold text-rose-600">30% OFF</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-20 h-20 text-rose-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                    </svg>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`aspect-square rounded-lg ${i === 1 ? 'bg-gradient-to-br from-rose-100 to-pink-100 ring-2 ring-rose-500 ring-offset-2' : 'bg-gray-100 hover:ring-2 hover:ring-gray-300 hover:ring-offset-2'} transition-all cursor-pointer`}></div>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-3">
                <div>
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-600 rounded-full text-[9px] font-bold mb-2">
                    NEW ARRIVAL
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">Premium Cotton Shirt</h3>
                  <p className="text-[9px] text-gray-600 leading-relaxed">
                    Crafted from 100% organic cotton with a modern slim fit
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[9px] text-gray-600">(127 reviews)</span>
                  <span className="text-[9px] text-green-600 font-semibold">• In Stock</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-gray-900">£45.00</span>
                  <span className="text-[10px] text-gray-500 line-through">£65.00</span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-[8px] font-bold">Save 30%</span>
                </div>

                {/* Size Selector */}
                <div className="space-y-1.5">
                  <p className="text-[9px] text-gray-700 font-semibold">Select Size</p>
                  <div className="flex gap-2">
                    {['S', 'M', 'L', 'XL'].map((size) => (
                      <button
                        key={size}
                        className={`w-9 h-9 flex items-center justify-center rounded-lg border-2 ${
                          size === 'M'
                            ? 'border-rose-600 bg-gradient-to-r from-rose-50 to-pink-50 text-rose-600 shadow-sm'
                            : 'border-gray-300 text-gray-700 hover:border-rose-400 hover:bg-gray-50'
                        } text-[9px] font-bold transition-all cursor-pointer`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selector */}
                <div className="space-y-1.5">
                  <p className="text-[9px] text-gray-700 font-semibold">Color: <span className="text-gray-600">Blue</span></p>
                  <div className="flex gap-2">
                    {[
                      { color: 'bg-blue-500', name: 'Blue' },
                      { color: 'bg-gray-800', name: 'Black' },
                      { color: 'bg-white', name: 'White' }
                    ].map((color, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-full ${color.color} ${i === 0 ? 'ring-2 ring-rose-500 ring-offset-2' : 'hover:ring-2 hover:ring-gray-400 hover:ring-offset-2'} ${color.color === 'bg-white' ? 'border-2 border-gray-300' : ''} transition-all cursor-pointer shadow-sm`}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 pt-2">
                  <button className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-xl py-2.5 text-[10px] font-bold shadow-lg shadow-rose-500/30 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center">
                    Add to Cart
                  </button>
                  <button className="w-full border-2 border-gray-300 rounded-xl py-2.5 text-[10px] font-bold hover:bg-gray-50 hover:border-gray-400 transition-all flex items-center justify-center">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { icon: Truck, text: 'Free Delivery', sub: 'Over £50' },
                { icon: Shield, text: 'Secure Payment', sub: '100% Safe' },
                { icon: RotateCcw, text: 'Easy Returns', sub: '30 Days' }
              ].map((feature, i) => (
                <div key={i} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-2.5 text-center">
                  <feature.icon className="w-4 h-4 text-rose-600 mx-auto mb-1" />
                  <p className="text-[8px] font-bold text-gray-900">{feature.text}</p>
                  <p className="text-[7px] text-gray-600">{feature.sub}</p>
                </div>
              ))}
            </div>

            {/* Delivery Banner */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-[10px] text-green-900 font-bold">Free Standard Delivery</p>
                  <p className="text-[9px] text-green-700">On orders over £50 • Arrives in 2-3 working days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Checkout Page High-Fi */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-2xl"
      >
        <div className="relative h-full">
          {/* Header */}
          <div className="border-b border-gray-200 px-5 py-3 bg-white">
            <div className="flex items-center gap-3 mb-3">
              <ArrowLeft className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900 transition-colors" />
              <h3 className="text-sm font-bold text-gray-900">Checkout</h3>
            </div>
            <div className="flex items-center gap-1">
              {['Cart', 'Details', 'Payment'].map((step, i) => (
                <div key={step} className="flex items-center gap-1.5">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    i === 1
                      ? 'bg-gradient-to-r from-rose-600 to-pink-600 shadow-lg'
                      : i < 1
                      ? 'bg-green-500'
                      : 'bg-gray-300'
                  } text-white`}>
                    {i < 1 ? (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-[9px] font-bold">{i + 1}</span>
                    )}
                  </div>
                  <span className={`text-[9px] font-semibold ${i === 1 ? 'text-rose-600' : i < 1 ? 'text-green-600' : 'text-gray-500'}`}>
                    {step}
                  </span>
                  {i < 2 && (
                    <div className={`w-8 h-0.5 ${i < 1 ? 'bg-green-500' : 'bg-gray-300'} mx-1 transition-all`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="px-5 py-4 space-y-4">
            {/* Shipping Address */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 border-2 border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-[10px] font-bold text-gray-900">Shipping Address</h4>
                <div className="flex items-center gap-1 text-green-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[8px] font-semibold">Verified</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-white border-2 border-gray-300 rounded-lg text-[9px] font-medium focus:border-rose-500 focus:outline-none transition-colors"
                    value="Emily Parker"
                    readOnly
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    className="w-full px-3 py-2 bg-white border-2 border-gray-300 rounded-lg text-[9px] font-medium focus:border-rose-500 focus:outline-none transition-colors"
                    value="emily.parker@email.com"
                    readOnly
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-white border-2 border-gray-300 rounded-lg text-[9px] font-medium focus:border-rose-500 focus:outline-none transition-colors"
                    value="123 Oxford Street"
                    readOnly
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    className="px-3 py-2 bg-white border-2 border-gray-300 rounded-lg text-[9px] font-medium focus:border-rose-500 focus:outline-none transition-colors"
                    value="London"
                    readOnly
                  />
                  <input
                    type="text"
                    className="px-3 py-2 bg-white border-2 border-gray-300 rounded-lg text-[9px] font-medium focus:border-rose-500 focus:outline-none transition-colors"
                    value="W1D 1BS"
                    readOnly
                  />
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-4 border-2 border-rose-200">
              <h4 className="text-[10px] font-bold text-rose-900 mb-3">Order Summary</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 pb-3 border-b border-rose-200">
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-100 to-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-rose-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-[9px] text-gray-900 font-bold">Premium Cotton Shirt</p>
                    <p className="text-[8px] text-gray-600 mt-0.5">Size M • Blue • Qty 1</p>
                  </div>
                  <p className="text-[11px] font-bold text-gray-900">£45.00</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[9px]">
                    <span className="text-gray-700">Subtotal</span>
                    <span className="font-semibold text-gray-900">£45.00</span>
                  </div>
                  <div className="flex justify-between text-[9px]">
                    <span className="text-gray-700">Delivery</span>
                    <span className="font-bold text-green-600">FREE</span>
                  </div>
                  <div className="flex justify-between text-[9px]">
                    <span className="text-gray-700">VAT (20%)</span>
                    <span className="font-semibold text-gray-900">£9.00</span>
                  </div>
                  <div className="pt-3 border-t-2 border-rose-300 flex justify-between items-center">
                    <span className="text-[10px] font-bold text-rose-900">Total</span>
                    <span className="text-lg font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">£54.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 border-2 border-gray-200">
              <h4 className="text-[10px] font-bold text-gray-900 mb-3">Payment Method</h4>
              <div className="flex items-center gap-3 p-3 bg-white border border-gray-300 rounded-lg">
                <div className="w-10 h-7 bg-gradient-to-r from-blue-600 to-blue-700 rounded flex items-center justify-center">
                  <span className="text-[8px] text-white font-bold">VISA</span>
                </div>
                <div className="flex-1">
                  <p className="text-[9px] text-gray-900 font-semibold">•••• •••• •••• 4532</p>
                  <p className="text-[8px] text-gray-500">Expires 12/25</p>
                </div>
                <button className="text-[8px] text-rose-600 font-semibold hover:underline">Change</button>
              </div>
            </div>

            {/* Security Badge */}
            <div className="flex items-center justify-center gap-2 py-2">
              <Shield className="w-4 h-4 text-green-600" />
              <p className="text-[8px] text-gray-600">
                <span className="font-semibold text-green-600">Secure Payment</span> • Your data is encrypted
              </p>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 text-white rounded-xl py-4 text-[11px] font-bold shadow-xl shadow-rose-500/30 hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center">
              Place Order • £54.00
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
