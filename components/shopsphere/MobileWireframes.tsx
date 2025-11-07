import { motion } from "motion/react";
import { ShoppingCart, Heart, Search, Star, Truck, Shield, RotateCcw, Menu, ArrowLeft } from "lucide-react";

export function MobileWireframes() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Mobile Responsive Design</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          ShopSphere is a fully responsive web application optimized for mobile, tablet, and desktop experiences
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Mobile Product Page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xl"
        >
          <div className="relative">
            {/* Mobile Frame */}
            <div className="aspect-[9/19] bg-white border-8 border-gray-900 rounded-[3rem] p-2 shadow-2xl">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl"></div>
              
              {/* Screen Content */}
              <div className="h-full bg-gradient-to-b from-gray-50 to-white rounded-[2rem] overflow-hidden relative">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-4 pt-6 pb-2 bg-white">
                  <span className="text-[8px] font-semibold">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  </div>
                </div>

                {/* Header */}
                <div className="px-4 py-3 bg-white border-b border-gray-200 flex items-center justify-between">
                  <ArrowLeft className="w-5 h-5 text-gray-900" />
                  <h1 className="text-sm font-bold text-rose-600">ShopSphere</h1>
                  <div className="flex gap-2">
                    <Heart className="w-5 h-5 text-gray-600" />
                    <div className="relative">
                      <ShoppingCart className="w-5 h-5 text-gray-600" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-rose-600 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Product Image */}
                <div className="px-4 py-3">
                  <div className="aspect-square bg-gradient-to-br from-rose-100 via-pink-50 to-amber-100 rounded-xl relative overflow-hidden">
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-full">
                      <span className="text-[7px] font-bold text-rose-600">30% OFF</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-16 h-16 text-rose-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                      </svg>
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="flex gap-1.5 mt-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`flex-1 aspect-square rounded-lg ${i === 1 ? 'bg-gradient-to-br from-rose-100 to-pink-100 ring-1 ring-rose-500' : 'bg-gray-100'}`}></div>
                    ))}
                  </div>
                </div>

                {/* Product Info */}
                <div className="px-4 space-y-2">
                  <div>
                    <span className="inline-block px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[7px] font-bold mb-1">
                      NEW ARRIVAL
                    </span>
                    <h2 className="text-xs font-bold text-gray-900">Premium Cotton Shirt</h2>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-[7px] text-gray-600">(127)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-gray-900">£45.00</span>
                    <span className="text-[8px] text-gray-500 line-through">£65.00</span>
                  </div>

                  {/* Size Selector */}
                  <div>
                    <p className="text-[8px] text-gray-700 font-semibold mb-1">Size</p>
                    <div className="flex gap-1.5">
                      {['S', 'M', 'L', 'XL'].map((size) => (
                        <div key={size} className={`w-8 h-8 flex items-center justify-center rounded-lg border ${size === 'M' ? 'border-rose-600 bg-rose-50 text-rose-600' : 'border-gray-300 text-gray-700'} text-[8px] font-bold`}>
                          {size}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Fixed Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
                  <button className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-xl py-3 text-[10px] font-bold shadow-lg flex items-center justify-center">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 text-center">
            <p className="text-xs font-semibold text-gray-900">Mobile Product Page</p>
            <p className="text-[10px] text-gray-600">375px viewport</p>
          </div>
        </motion.div>

        {/* Mobile Checkout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xl"
        >
          <div className="relative">
            {/* Mobile Frame */}
            <div className="aspect-[9/19] bg-white border-8 border-gray-900 rounded-[3rem] p-2 shadow-2xl">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl"></div>
              
              {/* Screen Content */}
              <div className="h-full bg-gradient-to-b from-gray-50 to-white rounded-[2rem] overflow-y-auto">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-4 pt-6 pb-2 bg-white sticky top-0 z-10">
                  <span className="text-[8px] font-semibold">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  </div>
                </div>

                {/* Header */}
                <div className="px-4 py-3 bg-white border-b border-gray-200 sticky top-10 z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <ArrowLeft className="w-4 h-4 text-gray-900" />
                    <h2 className="text-xs font-bold text-gray-900">Checkout</h2>
                  </div>
                  <div className="flex items-center gap-1">
                    {['Cart', 'Details', 'Payment'].map((step, i) => (
                      <div key={step} className="flex items-center gap-1">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${i === 1 ? 'bg-rose-600' : i < 1 ? 'bg-green-500' : 'bg-gray-300'} text-white`}>
                          <span className="text-[7px] font-bold">{i + 1}</span>
                        </div>
                        {i < 2 && <div className="w-3 h-px bg-gray-300"></div>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3 pb-24">
                  {/* Shipping */}
                  <div className="bg-white rounded-xl p-3 border border-gray-200">
                    <h3 className="text-[9px] font-bold text-gray-900 mb-2">Shipping Address</h3>
                    <div className="space-y-1.5">
                      <input type="text" value="Emily Parker" className="w-full px-2 py-1.5 border border-gray-300 rounded text-[8px] bg-white" readOnly />
                      <input type="email" value="emily.parker@email.com" className="w-full px-2 py-1.5 border border-gray-300 rounded text-[8px] bg-white" readOnly />
                      <input type="text" value="123 Oxford Street" className="w-full px-2 py-1.5 border border-gray-300 rounded text-[8px] bg-white" readOnly />
                      <div className="grid grid-cols-2 gap-1.5">
                        <input type="text" value="London" className="px-2 py-1.5 border border-gray-300 rounded text-[8px] bg-white" readOnly />
                        <input type="text" value="W1D 1BS" className="px-2 py-1.5 border border-gray-300 rounded text-[8px] bg-white" readOnly />
                      </div>
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-3 border border-rose-200">
                    <h3 className="text-[9px] font-bold text-rose-900 mb-2">Order Summary</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 pb-2 border-b border-rose-200">
                        <div className="w-10 h-10 bg-rose-100 rounded"></div>
                        <div className="flex-1">
                          <p className="text-[8px] font-bold text-gray-900">Premium Cotton Shirt</p>
                          <p className="text-[7px] text-gray-600">M • Blue • Qty 1</p>
                        </div>
                        <p className="text-[9px] font-bold">£45.00</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-[8px]">
                          <span className="text-gray-700">Subtotal</span>
                          <span>£45.00</span>
                        </div>
                        <div className="flex justify-between text-[8px]">
                          <span className="text-gray-700">Delivery</span>
                          <span className="text-green-600 font-bold">FREE</span>
                        </div>
                        <div className="flex justify-between text-[8px]">
                          <span className="text-gray-700">VAT</span>
                          <span>£9.00</span>
                        </div>
                        <div className="pt-1 border-t border-rose-300 flex justify-between">
                          <span className="text-[9px] font-bold">Total</span>
                          <span className="text-[10px] font-bold text-rose-600">£54.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fixed Bottom Button */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
                  <button className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-xl py-3 text-[10px] font-bold shadow-lg flex items-center justify-center">
                    Continue to Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 text-center">
            <p className="text-xs font-semibold text-gray-900">Mobile Checkout</p>
            <p className="text-[10px] text-gray-600">375px viewport</p>
          </div>
        </motion.div>

        {/* Tablet View */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xl"
        >
          <div className="relative">
            {/* Tablet Frame */}
            <div className="aspect-[3/4] bg-white border-8 border-gray-800 rounded-2xl p-2 shadow-2xl">
              {/* Screen Content */}
              <div className="h-full bg-white rounded-xl overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-200 bg-white">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <ArrowLeft className="w-5 h-5 text-gray-600" />
                      <h1 className="text-lg font-bold text-rose-600">ShopSphere</h1>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-gray-100 rounded-full px-5 py-2 flex items-center gap-2">
                        <Search className="w-4 h-4 text-gray-400" />
                        <span className="text-xs text-gray-500">Search...</span>
                      </div>
                      <Heart className="w-5 h-5 text-gray-600" />
                      <div className="relative">
                        <ShoppingCart className="w-5 h-5 text-gray-600" />
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-rose-600 rounded-full flex items-center justify-center">
                          <span className="text-[8px] text-white font-bold">3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Grid */}
                <div className="p-6 grid grid-cols-2 gap-4">
                  {/* Main Product */}
                  <div className="space-y-3">
                    <div className="aspect-square bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl relative">
                      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-full">
                        <span className="text-[8px] font-bold text-rose-600">30% OFF</span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-20 h-20 text-rose-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                        </svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-1.5">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className={`aspect-square rounded ${i === 1 ? 'bg-rose-100 ring-1 ring-rose-500' : 'bg-gray-100'}`}></div>
                      ))}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-3">
                    <div>
                      <span className="inline-block px-2 py-1 bg-rose-100 text-rose-600 rounded-full text-[8px] font-bold mb-2">
                        NEW ARRIVAL
                      </span>
                      <h2 className="text-sm font-bold text-gray-900 mb-1">Premium Cotton Shirt</h2>
                      <div className="flex items-center gap-1">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-3 h-3 text-amber-400 fill-amber-400" />
                          ))}
                        </div>
                        <span className="text-[8px] text-gray-600">(127 reviews)</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold">£45.00</span>
                      <span className="text-[9px] text-gray-500 line-through">£65.00</span>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-[7px] font-bold">Save 30%</span>
                    </div>

                    {/* Size */}
                    <div>
                      <p className="text-[9px] font-semibold text-gray-700 mb-1.5">Select Size</p>
                      <div className="flex gap-2">
                        {['S', 'M', 'L', 'XL'].map((size) => (
                          <div key={size} className={`w-10 h-10 flex items-center justify-center rounded-lg border ${size === 'M' ? 'border-rose-600 bg-rose-50 text-rose-600' : 'border-gray-300'} text-[9px] font-bold`}>
                            {size}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Color */}
                    <div>
                      <p className="text-[9px] font-semibold text-gray-700 mb-1.5">Color</p>
                      <div className="flex gap-2">
                        {[
                          { color: 'bg-blue-500' },
                          { color: 'bg-gray-800' },
                          { color: 'bg-white' }
                        ].map((color, i) => (
                          <div key={i} className={`w-8 h-8 rounded-full ${color.color} ${i === 0 ? 'ring-2 ring-rose-500 ring-offset-2' : ''} ${color.color === 'bg-white' ? 'border-2 border-gray-300' : ''}`}></div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <button className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-lg py-2.5 text-[10px] font-bold flex items-center justify-center shadow-lg">
                        Add to Cart
                      </button>
                      <button className="w-full border-2 border-gray-300 rounded-lg py-2.5 text-[10px] font-bold flex items-center justify-center">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 text-center">
            <p className="text-xs font-semibold text-gray-900">Tablet View</p>
            <p className="text-[10px] text-gray-600">768px viewport</p>
          </div>
        </motion.div>
      </div>

      {/* Responsive Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 grid md:grid-cols-3 gap-6"
      >
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h4 className="text-sm font-bold text-gray-900 mb-2">Mobile-First Design</h4>
          <p className="text-xs text-gray-600">Optimized touch targets and navigation for mobile users</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h4 className="text-sm font-bold text-gray-900 mb-2">Adaptive Layouts</h4>
          <p className="text-xs text-gray-600">Fluid grids that adapt seamlessly across all screen sizes</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h4 className="text-sm font-bold text-gray-900 mb-2">Fast Performance</h4>
          <p className="text-xs text-gray-600">Optimized images and lazy loading for quick page loads</p>
        </div>
      </motion.div>
    </div>
  );
}
