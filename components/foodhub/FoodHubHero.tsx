import { motion } from "motion/react";
import { UtensilsCrossed, Clock, Star, MapPin, ShoppingBag, Heart } from "lucide-react";

export function FoodHubHero() {
  return (
    <section className="relative pt-32 mb-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="rounded-3xl overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 border-8 border-white shadow-2xl"
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
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Fast Food Ordering Experience</h3>
                  <p className="text-slate-600">From browsing to delivery in under 3 minutes</p>
                </motion.div>
              </div>

              {/* Mobile Mockups */}
              <div className="flex justify-center items-end gap-6 flex-wrap">
                {/* iPhone 1 - Browse */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative"
                >
                  <div className="relative w-[240px]">
                    <div className="relative bg-slate-900 rounded-[38px] p-2.5 shadow-2xl">
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10" />
                      
                      <div className="bg-white rounded-[30px] overflow-hidden relative">
                        <div className="aspect-[9/19.5]">
                          {/* Header */}
                          <div className="px-4 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white pt-10">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <p className="text-[8px] opacity-90">Delivering to</p>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-2.5 h-2.5" />
                                  <span className="text-xs font-bold">123 Oxford St, London</span>
                                </div>
                              </div>
                              <div className="relative">
                                <ShoppingBag className="w-5 h-5" />
                                <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center">
                                  <span className="text-[8px] text-orange-600 font-bold">3</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="px-4 py-3">
                            {/* Quick Reorder */}
                            <div className="mb-3">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="text-[10px] font-bold text-gray-900">Quick Reorder</h3>
                                <span className="text-[8px] text-orange-600 font-semibold">⚡ Fast</span>
                              </div>
                              <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-xl p-3">
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white text-sm">
                                    🍕
                                  </div>
                                  <div className="flex-1">
                                    <p className="text-[9px] font-bold text-gray-900">Pizza Express</p>
                                    <p className="text-[8px] text-gray-600">Last ordered 2 days ago</p>
                                  </div>
                                  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                                </div>
                                <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg py-2 text-center">
                                  <span className="text-[9px] text-white font-bold">Reorder in 1 tap</span>
                                </div>
                              </div>
                            </div>

                            {/* Dietary Filters */}
                            <div className="mb-3">
                              <h3 className="text-[10px] font-bold text-gray-900 mb-2">Filter by Diet</h3>
                              <div className="flex gap-2 overflow-x-auto pb-1">
                                {[
                                  { emoji: '🥗', label: 'Vegan', active: true },
                                  { emoji: '🌾', label: 'Gluten-Free', active: false },
                                  { emoji: '🥛', label: 'Dairy-Free', active: false },
                                  { emoji: '🥩', label: 'Keto', active: false }
                                ].map((filter, i) => (
                                  <div key={i} className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full whitespace-nowrap ${filter.active ? 'bg-green-100 border-2 border-green-500' : 'bg-gray-100'}`}>
                                    <span className="text-xs">{filter.emoji}</span>
                                    <span className={`text-[8px] font-semibold ${filter.active ? 'text-green-700' : 'text-gray-700'}`}>{filter.label}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Restaurant Cards */}
                            <div className="mb-2">
                              <h3 className="text-[10px] font-bold text-gray-900 mb-2">Popular Near You</h3>
                              <div className="space-y-2">
                                {[
                                  { name: 'Green Bistro', cuisine: 'Vegan', rating: '4.8', time: '20-30 min', emoji: '🥗' },
                                  { name: 'Spice Kitchen', cuisine: 'Indian', rating: '4.7', time: '25-35 min', emoji: '🍛' }
                                ].map((restaurant, i) => (
                                  <div key={i} className="bg-white border border-gray-200 rounded-xl p-2.5 flex items-center gap-2">
                                    <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                                      {restaurant.emoji}
                                    </div>
                                    <div className="flex-1">
                                      <p className="text-[10px] font-bold text-gray-900">{restaurant.name}</p>
                                      <p className="text-[8px] text-gray-600">{restaurant.cuisine}</p>
                                      <div className="flex items-center gap-2 mt-1">
                                        <div className="flex items-center gap-0.5">
                                          <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                                          <span className="text-[8px] font-semibold">{restaurant.rating}</span>
                                        </div>
                                        <span className="text-[8px] text-gray-500">•</span>
                                        <div className="flex items-center gap-0.5">
                                          <Clock className="w-2.5 h-2.5 text-gray-400" />
                                          <span className="text-[8px] text-gray-600">{restaurant.time}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* iPhone 2 - Order */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="relative"
                >
                  <div className="relative w-[240px]">
                    <div className="relative bg-slate-900 rounded-[38px] p-2.5 shadow-2xl">
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10" />
                      
                      <div className="bg-white rounded-[30px] overflow-hidden relative">
                        <div className="aspect-[9/19.5]">
                          {/* Header */}
                          <div className="px-4 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white pt-10">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-[8px] opacity-90">Green Bistro</p>
                                <p className="text-xs font-bold">Your Order</p>
                              </div>
                            </div>
                          </div>

                          <div className="px-4 py-3">
                            {/* Order Items */}
                            <div className="space-y-2 mb-3">
                              {[
                                { name: 'Buddha Bowl', desc: 'Extra avocado', price: '£12.50', qty: 1 },
                                { name: 'Green Smoothie', desc: 'No ice', price: '£5.50', qty: 1 }
                              ].map((item, i) => (
                                <div key={i} className="bg-gray-50 rounded-lg p-2.5">
                                  <div className="flex gap-2 mb-2">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center text-lg">
                                      {i === 0 ? '🥗' : '🥤'}
                                    </div>
                                    <div className="flex-1">
                                      <p className="text-[9px] font-bold text-gray-900">{item.name}</p>
                                      <p className="text-[8px] text-gray-600">{item.desc}</p>
                                      <p className="text-[10px] font-bold text-orange-600 mt-1">{item.price}</p>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                      <button className="w-5 h-5 bg-gray-200 rounded flex items-center justify-center">
                                        <span className="text-[10px] font-bold">-</span>
                                      </button>
                                      <span className="text-[9px] font-bold">{item.qty}</span>
                                      <button className="w-5 h-5 bg-orange-600 text-white rounded flex items-center justify-center">
                                        <span className="text-[10px] font-bold">+</span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Delivery Time */}
                            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-3 mb-3">
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-blue-600" />
                                <div className="flex-1">
                                  <p className="text-[8px] text-blue-900 font-bold">Estimated Delivery</p>
                                  <p className="text-[10px] font-bold text-gray-900">20-30 minutes</p>
                                </div>
                              </div>
                            </div>

                            {/* Order Summary */}
                            <div className="bg-white border-2 border-gray-200 rounded-xl p-3 mb-3">
                              <div className="space-y-2">
                                <div className="flex justify-between text-[9px]">
                                  <span className="text-gray-600">Subtotal</span>
                                  <span className="font-semibold">£18.00</span>
                                </div>
                                <div className="flex justify-between text-[9px]">
                                  <span className="text-gray-600">Delivery</span>
                                  <span className="font-semibold">£2.50</span>
                                </div>
                                <div className="pt-2 border-t border-gray-200 flex justify-between">
                                  <span className="text-[10px] font-bold text-gray-900">Total</span>
                                  <span className="text-xs font-bold text-orange-600">£20.50</span>
                                </div>
                              </div>
                            </div>

                            {/* Checkout Button */}
                            <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl py-3.5 text-xs font-bold shadow-lg shadow-orange-500/30">
                              Place Order • £20.50
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* iPhone 3 - Tracking */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="relative"
                >
                  <div className="relative w-[240px]">
                    <div className="relative bg-slate-900 rounded-[38px] p-2.5 shadow-2xl">
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10" />
                      
                      <div className="bg-white rounded-[30px] overflow-hidden relative">
                        <div className="aspect-[9/19.5]">
                          {/* Map Area */}
                          <div className="h-32 bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 relative overflow-hidden pt-10">
                            <div className="absolute inset-0 opacity-20">
                              <div className="absolute inset-0" style={{
                                backgroundImage: 'repeating-linear-gradient(90deg, #10b981 0px, transparent 1px, transparent 20px), repeating-linear-gradient(0deg, #10b981 0px, transparent 1px, transparent 20px)',
                              }}></div>
                            </div>
                            <div className="absolute bottom-4 left-4 w-6 h-6 bg-orange-600 rounded-full border-4 border-white shadow-lg"></div>
                            <div className="absolute top-8 right-6 w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
                          </div>

                          <div className="px-4 py-4">
                            {/* Status */}
                            <div className="mb-4">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xs font-bold text-gray-900">Order Status</h3>
                                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-[8px] font-bold">On the way</span>
                              </div>
                              <p className="text-[9px] text-gray-600">Your food is being prepared and will be delivered soon</p>
                            </div>

                            {/* Progress Steps */}
                            <div className="space-y-3 mb-4">
                              {[
                                { label: 'Order Confirmed', time: '2:15 PM', active: true, complete: true },
                                { label: 'Preparing Food', time: '2:18 PM', active: true, complete: true },
                                { label: 'Out for Delivery', time: '2:35 PM', active: true, complete: false },
                                { label: 'Delivered', time: 'Est. 2:50 PM', active: false, complete: false }
                              ].map((step, i) => (
                                <div key={i} className="flex items-center gap-3">
                                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${step.complete ? 'bg-green-500' : step.active ? 'bg-orange-500 ring-4 ring-orange-100' : 'bg-gray-200'}`}>
                                    {step.complete ? (
                                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                      </svg>
                                    ) : (
                                      <div className={`w-2 h-2 rounded-full ${step.active ? 'bg-white' : 'bg-gray-400'}`}></div>
                                    )}
                                  </div>
                                  <div className="flex-1">
                                    <p className={`text-[9px] font-semibold ${step.active ? 'text-gray-900' : 'text-gray-500'}`}>{step.label}</p>
                                    <p className="text-[8px] text-gray-500">{step.time}</p>
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Driver Info */}
                            <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-3">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                  MK
                                </div>
                                <div className="flex-1">
                                  <p className="text-[9px] font-bold text-gray-900">Michael is delivering</p>
                                  <p className="text-[8px] text-gray-600">⭐ 4.9 • 340 deliveries</p>
                                </div>
                                <button className="w-8 h-8 bg-white rounded-lg flex items-center justify-center border border-gray-300">
                                  <span className="text-sm">💬</span>
                                </button>
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
                  <p className="text-2xl font-bold text-orange-600">2m 54s</p>
                  <p className="text-xs text-gray-600 mt-1">Avg. Order Time</p>
                </div>
                <div className="text-center bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm">
                  <p className="text-2xl font-bold text-amber-600">4.8★</p>
                  <p className="text-xs text-gray-600 mt-1">App Store Rating</p>
                </div>
                <div className="text-center bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm">
                  <p className="text-2xl font-bold text-green-600">230+</p>
                  <p className="text-xs text-gray-600 mt-1">Restaurant Partners</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
