import { UtensilsCrossed, Clock, Star, MapPin, ShoppingBag, Heart } from "lucide-react";

export function FoodHubThumbnail() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 flex items-center justify-center p-8">
      <div className="flex gap-4 items-center justify-center scale-90">
        {/* iPhone Mockup - Browse */}
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
              <div className="px-3 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[6px] opacity-90">Delivering to</p>
                    <div className="flex items-center gap-0.5">
                      <MapPin className="w-2 h-2" />
                      <span className="text-[8px] font-bold">123 Oxford St</span>
                    </div>
                  </div>
                  <div className="relative">
                    <ShoppingBag className="w-4 h-4" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
                      <span className="text-[6px] text-orange-600 font-bold">3</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-3">
                {/* Quick Reorder */}
                <div className="mb-2">
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-[8px] font-bold text-gray-900">Quick Reorder</p>
                    <span className="text-[6px] text-orange-600 font-semibold">⚡ Fast</span>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-xl p-2">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white text-[10px]">
                        🍕
                      </div>
                      <div className="flex-1">
                        <p className="text-[7px] font-bold text-gray-900">Pizza Express</p>
                        <p className="text-[6px] text-gray-600">Last ordered 2 days ago</p>
                      </div>
                      <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                    </div>
                    <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg py-1.5 text-center">
                      <span className="text-[7px] text-white font-bold">Reorder in 1 tap</span>
                    </div>
                  </div>
                </div>

                {/* Dietary Filters */}
                <div className="mb-2">
                  <p className="text-[8px] font-bold text-gray-900 mb-1.5">Filter by Diet</p>
                  <div className="flex gap-1.5 overflow-x-auto pb-0.5">
                    {[
                      { emoji: '🥗', label: 'Vegan', active: true },
                      { emoji: '🌾', label: 'Gluten-Free', active: false },
                      { emoji: '🥛', label: 'Dairy-Free', active: false }
                    ].map((filter, i) => (
                      <div key={i} className={`flex items-center gap-1 px-2 py-1 rounded-full whitespace-nowrap ${filter.active ? 'bg-green-100 border border-green-500' : 'bg-gray-100'}`}>
                        <span className="text-[9px]">{filter.emoji}</span>
                        <span className={`text-[6px] font-semibold ${filter.active ? 'text-green-700' : 'text-gray-700'}`}>{filter.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Restaurant Cards */}
                <div>
                  <p className="text-[8px] font-bold text-gray-900 mb-1.5">Popular Near You</p>
                  <div className="space-y-1.5">
                    {[
                      { name: 'Green Bistro', cuisine: 'Vegan', rating: '4.8', time: '20-30 min', emoji: '🥗' },
                      { name: 'Spice Kitchen', cuisine: 'Indian', rating: '4.7', time: '25-35 min', emoji: '🍛' }
                    ].map((restaurant, i) => (
                      <div key={i} className="bg-white border border-gray-200 rounded-xl p-2 flex items-center gap-1.5">
                        <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-base flex-shrink-0">
                          {restaurant.emoji}
                        </div>
                        <div className="flex-1">
                          <p className="text-[8px] font-bold text-gray-900">{restaurant.name}</p>
                          <p className="text-[6px] text-gray-600">{restaurant.cuisine}</p>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <div className="flex items-center gap-0.5">
                              <Star className="w-2 h-2 text-amber-400 fill-amber-400" />
                              <span className="text-[6px] font-semibold">{restaurant.rating}</span>
                            </div>
                            <span className="text-[6px] text-gray-500">•</span>
                            <div className="flex items-center gap-0.5">
                              <Clock className="w-2 h-2 text-gray-400" />
                              <span className="text-[6px] text-gray-600">{restaurant.time}</span>
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

        {/* iPhone Mockup - Order */}
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
              <div className="px-3 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[6px] opacity-90">Green Bistro</p>
                    <p className="text-[9px] font-bold">Your Order</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-3">
                {/* Order Items */}
                <div className="space-y-1.5 mb-2">
                  {[
                    { name: 'Buddha Bowl', desc: 'Extra avocado', price: '£12.50', qty: 1, emoji: '🥗' },
                    { name: 'Green Smoothie', desc: 'No ice', price: '£5.50', qty: 1, emoji: '🥤' }
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-2">
                      <div className="flex gap-1.5 mb-1">
                        <div className="w-9 h-9 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center text-[12px]">
                          {item.emoji}
                        </div>
                        <div className="flex-1">
                          <p className="text-[7px] font-bold text-gray-900">{item.name}</p>
                          <p className="text-[6px] text-gray-600">{item.desc}</p>
                          <p className="text-[8px] font-bold text-orange-600 mt-0.5">{item.price}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 bg-gray-200 rounded flex items-center justify-center">
                            <span className="text-[8px] font-bold">-</span>
                          </div>
                          <span className="text-[7px] font-bold">{item.qty}</span>
                          <div className="w-4 h-4 bg-orange-600 text-white rounded flex items-center justify-center">
                            <span className="text-[8px] font-bold">+</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Delivery Time */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-2 mb-2">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <div className="flex-1">
                      <p className="text-[6px] text-blue-900 font-bold">Estimated Delivery</p>
                      <p className="text-[8px] font-bold text-gray-900">20-30 minutes</p>
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="bg-white border-2 border-gray-200 rounded-xl p-2 mb-2">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[7px]">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold">£18.00</span>
                    </div>
                    <div className="flex justify-between text-[7px]">
                      <span className="text-gray-600">Delivery</span>
                      <span className="font-semibold">£2.50</span>
                    </div>
                    <div className="pt-1.5 border-t border-gray-200 flex justify-between">
                      <span className="text-[8px] font-bold text-gray-900">Total</span>
                      <span className="text-[9px] font-bold text-orange-600">£20.50</span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl py-2.5 text-center shadow-lg">
                  <span className="text-[8px] text-white font-bold">Place Order • £20.50</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* iPhone Mockup - Tracking */}
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

              {/* Map Area */}
              <div className="h-20 bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, #10b981 0px, transparent 1px, transparent 12px), repeating-linear-gradient(0deg, #10b981 0px, transparent 1px, transparent 12px)',
                  }}></div>
                </div>
                <div className="absolute bottom-2 left-2 w-4 h-4 bg-orange-600 rounded-full border-2 border-white shadow-lg"></div>
                <div className="absolute top-2 right-3 w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-lg"></div>
              </div>

              {/* Content */}
              <div className="p-3">
                {/* Status */}
                <div className="mb-2">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-[9px] font-bold text-gray-900">Order Status</p>
                    <span className="px-1.5 py-0.5 bg-green-100 text-green-700 rounded-full text-[6px] font-bold">On the way</span>
                  </div>
                  <p className="text-[7px] text-gray-600">Being prepared and will be delivered soon</p>
                </div>

                {/* Progress Steps */}
                <div className="space-y-2 mb-2">
                  {[
                    { label: 'Order Confirmed', time: '2:15 PM', active: true, complete: true },
                    { label: 'Preparing Food', time: '2:18 PM', active: true, complete: true },
                    { label: 'Out for Delivery', time: '2:35 PM', active: true, complete: false },
                    { label: 'Delivered', time: 'Est. 2:50 PM', active: false, complete: false }
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${step.complete ? 'bg-green-500' : step.active ? 'bg-orange-500 ring-2 ring-orange-100' : 'bg-gray-200'}`}>
                        {step.complete ? (
                          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <div className={`w-1.5 h-1.5 rounded-full ${step.active ? 'bg-white' : 'bg-gray-400'}`}></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className={`text-[7px] font-semibold ${step.active ? 'text-gray-900' : 'text-gray-500'}`}>{step.label}</p>
                        <p className="text-[6px] text-gray-500">{step.time}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Driver Info */}
                <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-[7px]">
                      MK
                    </div>
                    <div className="flex-1">
                      <p className="text-[7px] font-bold text-gray-900">Michael is delivering</p>
                      <p className="text-[6px] text-gray-600">⭐ 4.9 • 340 deliveries</p>
                    </div>
                    <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center border border-gray-300">
                      <span className="text-[10px]">💬</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
