import { motion } from "motion/react";
import { ShoppingCart, Heart, Search, Menu, User, CheckCircle, CreditCard, Package } from "lucide-react";

export function ShopSphereHero() {
  return (
    <section className="relative pt-32 mb-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="rounded-3xl overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 border-8 border-white shadow-2xl"
        >
          <div className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
              {/* Title Section */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Streamlined E-commerce Experience</h3>
                  <p className="text-slate-600">From abandoned carts to completed purchases</p>
                </motion.div>
              </div>

              {/* Desktop Mockups */}
              <div className="flex justify-center items-start gap-8 flex-wrap">
                {/* Desktop 1 - Product Page */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative"
                >
                  <div className="relative w-[360px]">
                    <div className="relative bg-slate-900 rounded-t-xl p-1 shadow-2xl">
                      <div className="flex gap-1.5 px-2 py-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                      
                      <div className="bg-white overflow-hidden relative">
                        <div className="aspect-[16/10]">
                          {/* Header */}
                          <div className="border-b border-gray-200 px-4 py-2.5 bg-white">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-3">
                                <Menu className="w-4 h-4 text-gray-600" />
                                <h2 className="text-sm font-bold text-rose-600">ShopSphere</h2>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="bg-gray-100 rounded-full px-3 py-1 flex items-center gap-1.5">
                                  <Search className="w-3 h-3 text-gray-400" />
                                  <span className="text-[10px] text-gray-500">Search products...</span>
                                </div>
                                <Heart className="w-4 h-4 text-gray-600" />
                                <div className="relative">
                                  <ShoppingCart className="w-4 h-4 text-gray-600" />
                                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-rose-600 rounded-full flex items-center justify-center">
                                    <span className="text-[8px] text-white font-bold">3</span>
                                  </div>
                                </div>
                                <User className="w-4 h-4 text-gray-600" />
                              </div>
                            </div>
                          </div>

                          {/* Product Display */}
                          <div className="px-4 py-3">
                            <div className="grid grid-cols-2 gap-3">
                              <div className="col-span-1">
                                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-2 flex items-center justify-center">
                                  <Package className="w-12 h-12 text-gray-400" />
                                </div>
                                <div className="grid grid-cols-3 gap-1">
                                  {[1, 2, 3].map((i) => (
                                    <div key={i} className="aspect-square bg-gray-100 rounded"></div>
                                  ))}
                                </div>
                              </div>
                              <div className="col-span-1">
                                <div className="mb-2">
                                  <span className="inline-block px-2 py-0.5 bg-rose-100 text-rose-600 rounded text-[8px] font-semibold mb-1">
                                    NEW ARRIVAL
                                  </span>
                                  <h3 className="text-xs font-bold text-gray-900 mb-1">Premium Cotton Shirt</h3>
                                  <div className="flex items-center gap-1 mb-2">
                                    <div className="flex">
                                      {[1, 2, 3, 4, 5].map((star) => (
                                        <span key={star} className="text-amber-400 text-[10px]">★</span>
                                      ))}
                                    </div>
                                    <span className="text-[8px] text-gray-500">(127)</span>
                                  </div>
                                  <div className="mb-2">
                                    <div className="text-xl font-bold text-gray-900">£45.00</div>
                                    <div className="text-[9px] text-gray-500 line-through">£65.00</div>
                                  </div>
                                  <div className="mb-2">
                                    <p className="text-[8px] text-gray-600 mb-1">Size</p>
                                    <div className="flex gap-1">
                                      {['S', 'M', 'L'].map((size) => (
                                        <div key={size} className={`w-6 h-6 rounded border ${size === 'M' ? 'border-rose-600 bg-rose-50' : 'border-gray-300'} flex items-center justify-center`}>
                                          <span className="text-[8px] font-semibold">{size}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  <div className="space-y-1">
                                    <div className="bg-rose-600 rounded-lg py-1.5 text-center">
                                      <span className="text-[9px] text-white font-semibold">Add to Cart</span>
                                    </div>
                                    <div className="border border-gray-300 rounded-lg py-1.5 text-center">
                                      <span className="text-[9px] text-gray-700 font-semibold">Buy Now</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Delivery Info */}
                            <div className="mt-3 bg-green-50 border border-green-200 rounded-lg p-2">
                              <div className="flex items-center gap-1.5">
                                <CheckCircle className="w-3 h-3 text-green-600" />
                                <div>
                                  <p className="text-[9px] text-green-800 font-semibold">Free Delivery</p>
                                  <p className="text-[8px] text-green-700">On orders over £50 • Arrives in 2-3 days</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Desktop 2 - Checkout Page */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="relative"
                >
                  <div className="relative w-[360px]">
                    <div className="relative bg-slate-900 rounded-t-xl p-1 shadow-2xl">
                      <div className="flex gap-1.5 px-2 py-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                      
                      <div className="bg-white overflow-hidden relative">
                        <div className="aspect-[16/10]">
                          {/* Header */}
                          <div className="border-b border-gray-200 px-4 py-2 bg-white">
                            <h3 className="text-xs font-bold text-gray-900">Checkout</h3>
                            <div className="flex gap-2 mt-2">
                              {['Cart', 'Details', 'Payment'].map((step, i) => (
                                <div key={step} className="flex items-center gap-1">
                                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${i === 1 ? 'bg-rose-600' : 'bg-green-600'} text-white`}>
                                    {i < 2 ? <CheckCircle className="w-3 h-3" /> : <span className="text-[8px] font-bold">{i + 1}</span>}
                                  </div>
                                  <span className={`text-[8px] ${i === 1 ? 'text-rose-600 font-semibold' : 'text-gray-500'}`}>{step}</span>
                                  {i < 2 && <div className="w-4 h-px bg-gray-300 mx-1"></div>}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="px-4 py-3 overflow-auto max-h-full">
                            {/* Single Page Checkout Form */}
                            <div className="space-y-2.5">
                              {/* Shipping Address */}
                              <div className="bg-gray-50 rounded-lg p-2.5 border border-gray-200">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="text-[9px] font-bold text-gray-900">Shipping Address</h4>
                                  <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                                </div>
                                <div className="space-y-1">
                                  <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full px-2 py-1 bg-white border border-gray-300 rounded text-[8px]"
                                    defaultValue="Emily Parker"
                                  />
                                  <input
                                    type="text"
                                    placeholder="Address"
                                    className="w-full px-2 py-1 bg-white border border-gray-300 rounded text-[8px]"
                                    defaultValue="123 Oxford Street"
                                  />
                                  <div className="grid grid-cols-2 gap-1">
                                    <input
                                      type="text"
                                      placeholder="City"
                                      className="px-2 py-1 bg-white border border-gray-300 rounded text-[8px]"
                                      defaultValue="London"
                                    />
                                    <input
                                      type="text"
                                      placeholder="Postcode"
                                      className="px-2 py-1 bg-white border border-gray-300 rounded text-[8px]"
                                      defaultValue="W1D 1BS"
                                    />
                                  </div>
                                </div>
                              </div>

                              {/* Order Summary */}
                              <div className="bg-gray-50 rounded-lg p-2.5 border border-gray-200">
                                <h4 className="text-[9px] font-bold text-gray-900 mb-2">Order Summary</h4>
                                <div className="space-y-1.5">
                                  <div className="flex items-center gap-2 pb-1.5 border-b border-gray-200">
                                    <div className="w-10 h-10 bg-gray-200 rounded"></div>
                                    <div className="flex-1">
                                      <p className="text-[8px] text-gray-900 font-semibold">Premium Cotton Shirt</p>
                                      <p className="text-[8px] text-gray-500">Size M • Qty 1</p>
                                    </div>
                                    <p className="text-[9px] font-bold">£45.00</p>
                                  </div>
                                  <div className="flex justify-between text-[8px] text-gray-600">
                                    <span>Subtotal</span>
                                    <span>£45.00</span>
                                  </div>
                                  <div className="flex justify-between text-[8px] text-green-600 font-semibold">
                                    <span>Delivery</span>
                                    <span>FREE</span>
                                  </div>
                                  <div className="pt-1.5 border-t border-gray-300 flex justify-between">
                                    <span className="text-[9px] font-bold text-gray-900">Total</span>
                                    <span className="text-xs font-bold text-gray-900">£45.00</span>
                                  </div>
                                </div>
                              </div>

                              {/* Payment */}
                              <div className="bg-rose-600 rounded-lg py-2 text-center">
                                <p className="text-[10px] font-bold text-white">Continue to Payment</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
              >
                <div className="text-center bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm">
                  <p className="text-2xl font-bold text-rose-600">28%</p>
                  <p className="text-xs text-gray-600 mt-1">Conversion Increase</p>
                </div>
                <div className="text-center bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm">
                  <p className="text-2xl font-bold text-green-600">45%</p>
                  <p className="text-xs text-gray-600 mt-1">Less Abandonment</p>
                </div>
                <div className="text-center bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm">
                  <p className="text-2xl font-bold text-amber-600">100%</p>
                  <p className="text-xs text-gray-600 mt-1">WCAG AA Compliant</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
