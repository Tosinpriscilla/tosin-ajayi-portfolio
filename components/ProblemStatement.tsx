import { motion } from "motion/react";
import { AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ProblemStatementProps {
  challenge: string;
  context: string;
  userNeeds: string[];
}

export function ProblemStatement({ challenge, context, userNeeds }: ProblemStatementProps) {
  return (
    <section className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-1 bg-orange-600 rounded-full" />
              <span className="text-orange-700 uppercase tracking-wider font-semibold">The Problem</span>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Challenge */}
              <Card className="p-8 bg-white border-l-4 border-orange-600 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 mb-3">The Challenge</h3>
                    <p className="text-slate-700 leading-relaxed">{challenge}</p>
                  </div>
                </div>
              </Card>

              {/* Context */}
              <Card className="p-8 bg-white border-l-4 border-orange-500 shadow-lg">
                <h4 className="text-sm font-semibold text-orange-700 uppercase tracking-wide mb-3">Business Context</h4>
                <p className="text-slate-700 leading-relaxed">{context}</p>
              </Card>
            </div>

            {/* User Needs */}
            <Card className="mt-8 p-8 bg-white border-2 border-orange-200 shadow-lg">
              <h4 className="text-sm font-semibold text-orange-700 uppercase tracking-wide mb-4">User Needs Identified</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {userNeeds.map((need, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-700 text-sm leading-relaxed">{need}</p>
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
