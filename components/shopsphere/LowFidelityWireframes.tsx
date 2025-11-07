import { motion } from "motion/react";

export function LowFidelityWireframes() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Product Page Wireframe */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-xl border-2 border-gray-300 p-8"
      >
        <h4 className="text-sm font-semibold text-gray-900 mb-6">Product Page - Low-Fi</h4>
        <div className="space-y-4">
          {/* Header */}
          <div className="flex justify-between items-center pb-4 border-b-2 border-gray-300">
            <div className="w-24 h-5 bg-gray-300 rounded"></div>
            <div className="flex gap-3">
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
            </div>
          </div>
          
          {/* Breadcrumb */}
          <div className="flex gap-2">
            <div className="w-16 h-3 bg-gray-200 rounded"></div>
            <div className="w-16 h-3 bg-gray-200 rounded"></div>
          </div>

          {/* Product Layout */}
          <div className="grid grid-cols-2 gap-6 pt-4">
            {/* Images */}
            <div className="space-y-3">
              <div className="aspect-square bg-gray-200 rounded-lg border-2 border-gray-300"></div>
              <div className="flex gap-2">
                <div className="w-16 h-16 bg-gray-200 rounded border-2 border-gray-300"></div>
                <div className="w-16 h-16 bg-gray-200 rounded"></div>
                <div className="w-16 h-16 bg-gray-200 rounded"></div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-3">
              <div className="w-32 h-4 bg-gray-300 rounded"></div>
              <div className="w-full h-3 bg-gray-200 rounded"></div>
              <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
              
              <div className="pt-2">
                <div className="w-24 h-6 bg-gray-300 rounded mb-3"></div>
              </div>

              {/* Size selector */}
              <div className="space-y-2">
                <div className="w-12 h-3 bg-gray-200 rounded"></div>
                <div className="flex gap-2">
                  <div className="w-10 h-10 border-2 border-gray-300 rounded"></div>
                  <div className="w-10 h-10 border-2 border-gray-300 rounded"></div>
                  <div className="w-10 h-10 border-2 border-gray-300 rounded"></div>
                  <div className="w-10 h-10 border-2 border-gray-300 rounded"></div>
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-2 pt-3">
                <div className="w-full h-10 bg-gray-300 rounded"></div>
                <div className="w-full h-10 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="border-2 border-gray-300 rounded-lg p-4 mt-4">
            <div className="w-32 h-3 bg-gray-300 rounded mb-2"></div>
            <div className="w-full h-3 bg-gray-200 rounded"></div>
          </div>
        </div>
      </motion.div>

      {/* Checkout Page Wireframe */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-white rounded-xl border-2 border-gray-300 p-8"
      >
        <h4 className="text-sm font-semibold text-gray-900 mb-6">Checkout - Low-Fi</h4>
        <div className="space-y-4">
          {/* Header */}
          <div className="border-b-2 border-gray-300 pb-4">
            <div className="w-24 h-4 bg-gray-300 rounded mb-3"></div>
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-gray-300"></div>
              <div className="flex-1 h-1 bg-gray-300 my-auto"></div>
              <div className="w-6 h-6 rounded-full bg-gray-300"></div>
              <div className="flex-1 h-1 bg-gray-200 my-auto"></div>
              <div className="w-6 h-6 rounded-full bg-gray-200"></div>
            </div>
          </div>

          {/* Form Sections */}
          <div className="space-y-4">
            {/* Shipping */}
            <div className="border-2 border-gray-300 rounded-lg p-4">
              <div className="w-32 h-4 bg-gray-300 rounded mb-3"></div>
              <div className="space-y-2">
                <div className="w-full h-8 bg-gray-200 rounded"></div>
                <div className="w-full h-8 bg-gray-200 rounded"></div>
                <div className="w-full h-8 bg-gray-200 rounded"></div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-8 bg-gray-200 rounded"></div>
                  <div className="h-8 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="border-2 border-gray-300 rounded-lg p-4">
              <div className="w-32 h-4 bg-gray-300 rounded mb-3"></div>
              <div className="flex items-center gap-3 pb-3 border-b border-gray-300">
                <div className="w-16 h-16 bg-gray-200 rounded"></div>
                <div className="flex-1 space-y-2">
                  <div className="w-full h-3 bg-gray-200 rounded"></div>
                  <div className="w-2/3 h-3 bg-gray-200 rounded"></div>
                </div>
                <div className="w-12 h-4 bg-gray-300 rounded"></div>
              </div>
              <div className="pt-3 space-y-2">
                <div className="flex justify-between">
                  <div className="w-16 h-3 bg-gray-200 rounded"></div>
                  <div className="w-12 h-3 bg-gray-200 rounded"></div>
                </div>
                <div className="flex justify-between">
                  <div className="w-16 h-3 bg-gray-200 rounded"></div>
                  <div className="w-12 h-3 bg-gray-200 rounded"></div>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-300">
                  <div className="w-12 h-4 bg-gray-300 rounded"></div>
                  <div className="w-16 h-4 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="w-full h-12 bg-gray-300 rounded mt-4"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
