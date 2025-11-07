import { motion } from "motion/react";
import { Lightbulb, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

interface SolutionSectionProps {
  description: string;
  keyFeatures: { title: string; description: string }[];
  designDecisions: string[];
}

export function SolutionSection({ description, keyFeatures, designDecisions }: SolutionSectionProps) {
  return (
    <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-1 bg-green-600 rounded-full" />
              <span className="text-green-700 uppercase tracking-wider font-semibold">The Solution</span>
            </div>

            {/* Solution Description */}
            <Card className="p-8 bg-white border-l-4 border-green-600 shadow-lg mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-slate-900 mb-3">The Approach</h3>
                  <p className="text-slate-700 text-lg leading-relaxed">{description}</p>
                </div>
              </div>
            </Card>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {keyFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="p-6 bg-white border-l-4 border-green-400 hover:shadow-lg transition-shadow h-full">
                    <div className="flex items-start gap-3 mb-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <h4 className="text-slate-900 font-semibold">{feature.title}</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Design Decisions */}
            <Card className="p-8 bg-gradient-to-br from-green-900 to-emerald-900 text-white border-0 shadow-xl">
              <h4 className="text-sm font-semibold text-green-300 uppercase tracking-wide mb-4">Key Design Decisions</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {designDecisions.map((decision, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-green-50 text-sm leading-relaxed">{decision}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
