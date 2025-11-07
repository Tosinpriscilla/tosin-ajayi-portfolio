import { ShoppingCart, Heart, Search, CreditCard, Package, Star, TrendingUp, CheckCircle2 } from "lucide-react";

export function ShopSphereThumbnail() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-rose-500 via-pink-500 to-orange-500 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center p-6 pt-12">
        {/* Main Content */}
        <div className="relative flex items-center gap-6 mt-8">
          {/* Left Device - Mobile Product View */}
          <div className="relative transform -rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="w-40 bg-slate-900 rounded-2xl p-2 shadow-2xl">
              <div className="bg-white rounded-xl overflow-hidden">
                {/* Mobile Header */}
                <div className="bg-gradient-to-r from-rose-600 to-pink-600 px-3 py-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[11px] font-bold text-white">ShopSphere</h3>
                    <div className="flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 text-white" fill="white" />
                      <div className="relative">
                        <ShoppingCart className="w-3.5 h-3.5 text-white" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full flex items-center justify-center">
                          <span className="text-[7px] text-slate-900 font-bold">3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Card */}
                <div className="p-2.5">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg aspect-square mb-2 flex items-center justify-center relative overflow-hidden">
                    <Package className="w-12 h-12 text-gray-400" />
                    <div className="absolute top-1.5 right-1.5 bg-rose-600 text-white px-2 py-0.5 rounded text-[7px] font-bold">
                      NEW
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <h4 className="text-[9px] font-bold text-gray-900">Premium Shirt</h4>
                    <div className="flex items-center gap-0.5">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-2.5 h-2.5 text-amber-400" fill="#fbbf24" />
                      ))}
                      <span className="text-[7px] text-gray-500 ml-0.5">(127)</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-[13px] font-bold text-rose-600">£45</span>
                      <span className="text-[8px] text-gray-400 line-through">£65</span>
                    </div>
                    <div className="bg-rose-600 rounded-md py-1.5 text-center">
                      <span className="text-[8px] text-white font-semibold">Add to Cart</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Device - Success State */}
          <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="w-32 bg-slate-900 rounded-2xl p-1.5 shadow-2xl">
              <div className="bg-white rounded-xl overflow-hidden">
                {/* Success Header */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-3 py-2">
                  <h3 className="text-[9px] font-bold text-white">Order Complete</h3>
                </div>

                {/* Success Content */}
                <div className="p-3 text-center">
                  <div className="w-12 h-12 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-7 h-7 text-green-600" />
                  </div>
                  <h4 className="text-[8px] font-bold text-gray-900 mb-1">Payment Successful!</h4>
                  <p className="text-[6px] text-gray-600 mb-2">Your order is confirmed</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-1.5 mt-3">
                    <div className="bg-rose-50 rounded-lg p-1.5">
                      <div className="text-[10px] font-bold text-rose-600">28%</div>
                      <div className="text-[5px] text-gray-600">Higher Conv.</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-1.5">
                      <div className="text-[10px] font-bold text-green-600">45%</div>
                      <div className="text-[5px] text-gray-600">Less Drops</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Badge */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-1.5 flex items-center gap-1.5 shadow-lg border border-white/30">
            <TrendingUp className="w-3.5 h-3.5 text-white" />
            <span className="text-[9px] font-bold text-white">58% Faster Checkout</span>
          </div>
        </div>
      </div>
    </div>
  );
}
