import { motion } from "motion/react";
import { CheckCircle2, XCircle, TrendingUp, Target } from "lucide-react";

interface Competitor {
  name: string;
  rating: string;
  strengths: string[];
  weaknesses: string[];
}

interface CompetitiveAnalysisProps {
  title?: string;
  competitors: Competitor[];
  keyInsight: string;
}

export function CompetitiveAnalysis({ 
  title = "Competitive Landscape", 
  competitors, 
  keyInsight 
}: CompetitiveAnalysisProps) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full mb-4">
              <Target className="w-4 h-4" />
              <span className="text-sm uppercase tracking-wider">Market Analysis</span>
            </div>
            <h2 className="text-slate-900 mb-4">{title}</h2>
            <p className="text-slate-600 text-lg max-w-3xl">
              I analyzed key competitors to understand market positioning and identify opportunities for differentiation.
            </p>
          </motion.div>

          {/* Competitors Table - Modern Card Style */}
          <div className="grid gap-4 mb-12">
            {/* Header Row */}
            <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-3">
              <div className="col-span-3">
                <p className="text-xs uppercase tracking-wider text-slate-500">Competitor</p>
              </div>
              <div className="col-span-1 text-center">
                <p className="text-xs uppercase tracking-wider text-slate-500">Rating</p>
              </div>
              <div className="col-span-4">
                <p className="text-xs uppercase tracking-wider text-slate-500">Strengths</p>
              </div>
              <div className="col-span-4">
                <p className="text-xs uppercase tracking-wider text-slate-500">Gaps & Weaknesses</p>
              </div>
            </div>

            {/* Competitor Rows */}
            {competitors.map((competitor, index) => (
              <motion.div
                key={competitor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all p-6"
              >
                <div className="grid md:grid-cols-12 gap-6">
                  {/* Name & Rating */}
                  <div className="col-span-12 md:col-span-3">
                    <h4 className="text-slate-900 mb-2">{competitor.name}</h4>
                    <div className="flex items-center gap-2 md:hidden mb-4">
                      <div className="flex items-center gap-1 px-3 py-1.5 bg-amber-100 text-amber-700 rounded-lg">
                        <span className="text-lg">⭐</span>
                        <span className="font-semibold">{competitor.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rating - Desktop */}
                  <div className="hidden md:flex md:col-span-1 items-start justify-center">
                    <div className="flex items-center gap-1 px-3 py-1.5 bg-amber-100 text-amber-700 rounded-lg">
                      <span className="text-sm">⭐</span>
                      <span className="text-sm font-semibold">{competitor.rating}</span>
                    </div>
                  </div>

                  {/* Strengths */}
                  <div className="col-span-12 md:col-span-4">
                    <div className="md:hidden mb-2">
                      <p className="text-xs uppercase tracking-wider text-slate-500">Strengths</p>
                    </div>
                    <div className="space-y-2">
                      {competitor.strengths.map((strength, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700 leading-relaxed">{strength}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Weaknesses */}
                  <div className="col-span-12 md:col-span-4">
                    <div className="md:hidden mb-2">
                      <p className="text-xs uppercase tracking-wider text-slate-500">Gaps & Weaknesses</p>
                    </div>
                    <div className="space-y-2">
                      {competitor.weaknesses.map((weakness, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-600 leading-relaxed">{weakness}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Insight - Standout Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 border-4 border-slate-700 shadow-2xl"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '30px 30px'
              }} />
            </div>

            <div className="relative flex items-start gap-6">
              <div className="hidden md:flex w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl items-center justify-center flex-shrink-0 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="md:hidden w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-emerald-400 uppercase tracking-wider">Key Opportunity</h3>
                </div>
                <p className="text-white text-lg leading-relaxed">
                  {keyInsight}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
