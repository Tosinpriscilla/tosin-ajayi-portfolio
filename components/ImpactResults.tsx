import { motion } from "motion/react";
import { TrendingUp, Award, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Metric {
  value: string;
  label: string;
  change?: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface ImpactResultsProps {
  metrics: Metric[];
  outcomes: string[];
  testimonial?: Testimonial;
}

export function ImpactResults({ metrics, outcomes, testimonial }: ImpactResultsProps) {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-1 bg-blue-400 rounded-full" />
              <span className="text-blue-300 uppercase tracking-wider font-semibold">Impact & Results</span>
            </div>

            <h2 className="text-white mb-6">Measurable Impact</h2>
            <p className="text-blue-200 text-lg mb-12 max-w-3xl">
              Success is measured not just in aesthetics, but in real user outcomes and business value delivered.
            </p>

            {/* Metrics Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="p-8 text-center bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all shadow-xl h-full">
                    <div className="flex justify-center mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="mb-2 text-white text-4xl font-bold">{metric.value}</div>
                    {metric.change && (
                      <div className="text-green-400 text-sm font-semibold mb-2">{metric.change}</div>
                    )}
                    <p className="text-blue-200">{metric.label}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Outcomes */}
            <Card className="p-8 bg-white/5 backdrop-blur-sm border-white/10 shadow-xl mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-white">Key Outcomes</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-blue-100 leading-relaxed">{outcome}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Testimonial */}
            {testimonial && (
              <Card className="p-8 bg-white text-slate-900 border-0 shadow-2xl">
                <div className="flex items-start gap-4">
                  <Quote className="w-12 h-12 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-slate-700 text-lg italic leading-relaxed mb-4">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{testimonial.author.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{testimonial.author}</p>
                        <p className="text-sm text-slate-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
