export function LowFidelityWireframes() {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Sketch 1 - Home Screen */}
        <div className="bg-white p-6 rounded-xl border-2 border-dashed border-slate-300">
          <div className="aspect-[9/16] bg-slate-50 rounded-lg p-4 border-2 border-slate-300 relative">
            {/* Header - Sketchy style */}
            <div className="flex justify-between items-center mb-4 pb-3 border-b-2 border-slate-300">
              <div className="w-20 h-5 bg-slate-300 rounded" style={{ transform: 'rotate(-1deg)' }} />
              <div className="w-7 h-7 rounded-full bg-slate-300" />
            </div>

            {/* Balance Card - Rough sketch */}
            <div className="mb-5 p-4 bg-slate-200 rounded border-2 border-slate-400" style={{ transform: 'rotate(0.5deg)' }}>
              <div className="w-16 h-3 bg-slate-400 rounded mb-2" />
              <div className="w-28 h-7 bg-slate-400 rounded mb-1" />
              <div className="w-20 h-2 bg-slate-300 rounded" />
            </div>

            {/* Quick Transfer CTA - EMPHASIZED */}
            <div className="mb-4 p-5 bg-slate-400 rounded-xl border-4 border-slate-500" style={{ transform: 'rotate(-0.5deg)' }}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="w-24 h-4 bg-slate-600 rounded mb-1" />
                  <div className="w-20 h-2 bg-slate-500 rounded" />
                </div>
                <div className="w-8 h-8 bg-slate-600 rounded-full" />
              </div>
            </div>

            {/* Quick Actions - Streamlined */}
            <div className="flex gap-2 mb-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex-1 p-3 bg-slate-200 rounded-lg border-2 border-slate-300 text-center">
                  <div className="w-6 h-6 bg-slate-400 rounded-full mx-auto mb-1" />
                  <div className="w-10 h-2 bg-slate-400 rounded mx-auto" />
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="space-y-2 pb-16">
              <div className="w-24 h-3 bg-slate-400 rounded mb-2" />
              {[1, 2].map((i) => (
                <div key={i} className="flex justify-between items-center p-2 bg-slate-100 rounded">
                  <div className="flex gap-2">
                    <div className="w-7 h-7 bg-slate-300 rounded-full" />
                    <div className="w-16 h-2 bg-slate-400 rounded mt-2" />
                  </div>
                  <div className="w-10 h-3 bg-slate-400 rounded" />
                </div>
              ))}
            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-4 left-4 right-4 h-12 bg-slate-200 rounded-lg border-2 border-slate-300">
              <div className="flex justify-around items-center h-full px-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div className={`w-5 h-5 ${i === 1 ? 'bg-slate-500' : 'bg-slate-300'} rounded`} />
                    <div className={`w-1 h-1 ${i === 1 ? 'bg-slate-500' : 'bg-transparent'} rounded-full`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center mt-3 text-slate-600 text-sm">Home Screen</p>
        </div>

        {/* Sketch 2 - Transfer Flow */}
        <div className="bg-white p-6 rounded-xl border-2 border-dashed border-slate-300">
          <div className="aspect-[9/16] bg-slate-50 rounded-lg p-4 border-2 border-slate-300 relative">
            {/* Header with Back */}
            <div className="flex items-center mb-4 pb-3 border-b-2 border-slate-300">
              <div className="w-6 h-6 bg-slate-300 rounded mr-3" />
              <div className="w-24 h-4 bg-slate-400 rounded" />
            </div>

            {/* Step Indicator */}
            <div className="flex gap-2 mb-6">
              <div className="flex-1 h-1 bg-slate-400 rounded" />
              <div className="flex-1 h-1 bg-slate-300 rounded" />
              <div className="flex-1 h-1 bg-slate-300 rounded" />
            </div>

            {/* Search Bar */}
            <div className="mb-4 h-10 bg-slate-200 rounded-lg border-2 border-slate-300" />

            {/* Recent Contacts */}
            <div className="mb-5">
              <div className="w-28 h-3 bg-slate-400 rounded mb-3" />
              <div className="flex gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="text-center">
                    <div className="w-12 h-12 bg-slate-300 rounded-full mx-auto mb-1" />
                    <div className="w-12 h-2 bg-slate-300 rounded" />
                  </div>
                ))}
              </div>
            </div>

            {/* Saved Payees */}
            <div className="mb-4">
              <div className="w-24 h-3 bg-slate-400 rounded mb-2" />
              {[1, 2].map((i) => (
                <div key={i} className="mb-2 p-3 bg-slate-100 rounded-lg border-2 border-slate-300 flex justify-between items-center">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-slate-300 rounded-full" />
                    <div className="w-20 h-2 bg-slate-400 rounded mt-2" />
                  </div>
                  <div className="w-4 h-4 bg-slate-400 rounded" />
                </div>
              ))}
            </div>

            {/* Continue Button CTA */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="h-11 bg-slate-500 rounded-xl border-3 border-slate-600 flex items-center justify-center" style={{ transform: 'rotate(-0.3deg)' }}>
                <div className="w-16 h-3 bg-slate-700 rounded" />
              </div>
            </div>
          </div>
          <p className="text-center mt-3 text-slate-600 text-sm">Transfer - Recipient</p>
        </div>

        {/* Sketch 3 - Confirmation */}
        <div className="bg-white p-6 rounded-xl border-2 border-dashed border-slate-300">
          <div className="aspect-[9/16] bg-slate-50 rounded-lg p-4 border-2 border-slate-300 relative">
            {/* Header */}
            <div className="flex items-center mb-4 pb-3 border-b-2 border-slate-300">
              <div className="w-6 h-6 bg-slate-300 rounded mr-3" />
              <div className="w-24 h-4 bg-slate-400 rounded" />
            </div>

            {/* Progress - All filled */}
            <div className="flex gap-2 mb-6">
              <div className="flex-1 h-1 bg-slate-400 rounded" />
              <div className="flex-1 h-1 bg-slate-400 rounded" />
              <div className="flex-1 h-1 bg-slate-400 rounded" />
            </div>

            {/* Success Icon & Amount */}
            <div className="text-center mb-5">
              <div className="w-14 h-14 bg-slate-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                <div className="w-7 h-7 bg-slate-500 rounded-full" />
              </div>
              <div className="w-16 h-2 bg-slate-300 rounded mx-auto mb-2" />
              <div className="w-28 h-7 bg-slate-400 rounded mx-auto mb-2" />
              <div className="w-24 h-2 bg-slate-300 rounded mx-auto" />
            </div>

            {/* Details Card */}
            <div className="mb-4 p-4 bg-slate-100 rounded-xl border-2 border-slate-300">
              <div className="flex gap-3 mb-3 pb-3 border-b-2 border-slate-300">
                <div className="w-11 h-11 bg-slate-300 rounded-full" />
                <div>
                  <div className="w-20 h-3 bg-slate-400 rounded mb-1" />
                  <div className="w-16 h-2 bg-slate-300 rounded" />
                </div>
              </div>
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex justify-between">
                    <div className="w-14 h-2 bg-slate-300 rounded" />
                    <div className="w-18 h-2 bg-slate-400 rounded" />
                  </div>
                ))}
              </div>
            </div>

            {/* Security Notice */}
            <div className="mb-4 p-3 bg-slate-100 rounded-lg border-2 border-slate-300 flex gap-2">
              <div className="w-4 h-4 bg-slate-400 rounded-full flex-shrink-0" />
              <div className="flex-1 space-y-1">
                <div className="w-full h-2 bg-slate-300 rounded" />
                <div className="w-3/4 h-2 bg-slate-300 rounded" />
              </div>
            </div>

            {/* Biometric */}
            <div className="p-3 bg-slate-200 rounded-xl border-2 border-slate-400 text-center mb-4">
              <div className="w-10 h-10 bg-slate-400 rounded-full mx-auto mb-2" />
              <div className="w-20 h-2 bg-slate-400 rounded mx-auto mb-1" />
              <div className="w-14 h-2 bg-slate-300 rounded mx-auto" />
            </div>

            {/* CTA Buttons */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex gap-2">
                <div className="flex-1 h-9 bg-slate-200 rounded-lg border-2 border-slate-300 flex items-center justify-center" style={{ transform: 'rotate(0.3deg)' }}>
                  <div className="w-10 h-2 bg-slate-400 rounded" />
                </div>
                <div className="flex-1 h-9 bg-slate-500 rounded-lg border-3 border-slate-600 flex items-center justify-center" style={{ transform: 'rotate(-0.3deg)' }}>
                  <div className="w-12 h-2 bg-slate-700 rounded" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-center mt-3 text-slate-600 text-sm">Confirmation</p>
        </div>
      </div>

      {/* Annotation Section */}
      <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
        <h4 className="mb-4 text-slate-900">Early Exploration Notes</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-2 text-slate-700 text-sm">
            <li className="flex gap-3">
              <span className="text-amber-600">→</span>
              <span>Explored different home screen layouts - decided on simplified version with Quick Transfer as hero element</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600">→</span>
              <span>Tested 6-icon grid vs 3-button layout - 3 buttons tested better with users</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600">→</span>
              <span>Transfer flow reduced from 5 steps to 3 based on user feedback</span>
            </li>
          </ul>
          <ul className="space-y-2 text-slate-700 text-sm">
            <li className="flex gap-3">
              <span className="text-amber-600">→</span>
              <span>Recent contacts visible immediately - no search needed for 78% of transfers</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600">→</span>
              <span>Biometric confirmation preferred by 92% of users over PIN entry</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600">→</span>
              <span>15+ concept iterations led to final simplified architecture</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
