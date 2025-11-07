import { motion } from "motion/react";
import { Calendar, Users, Wrench, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ProjectOverviewProps {
  role: string;
  team: string[];
  tools: string[];
  timeline: string;
  objective: string;
}

export function ProjectOverview({ role, team, tools, timeline, objective }: ProjectOverviewProps) {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-1 bg-slate-900 rounded-full" />
              <span className="text-slate-500 uppercase tracking-wider">Project Overview</span>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {/* My Role */}
              <Card className="p-6 border-l-4 border-slate-900 bg-gradient-to-br from-slate-50 to-white hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">My Role</h4>
                </div>
                <p className="text-slate-900 font-medium">{role}</p>
              </Card>

              {/* Timeline */}
              <Card className="p-6 border-l-4 border-slate-700 bg-gradient-to-br from-slate-50 to-white hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Timeline</h4>
                </div>
                <p className="text-slate-900 font-medium">{timeline}</p>
              </Card>

              {/* Team */}
              <Card className="p-6 border-l-4 border-slate-600 bg-gradient-to-br from-slate-50 to-white hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Team</h4>
                </div>
                <div className="space-y-1">
                  {team.map((member, i) => (
                    <p key={i} className="text-slate-700 text-sm">{member}</p>
                  ))}
                </div>
              </Card>

              {/* Tools */}
              <Card className="p-6 border-l-4 border-slate-500 bg-gradient-to-br from-slate-50 to-white hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-slate-500 rounded-lg flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Tools</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </Card>
            </div>

            {/* Objective */}
            <Card className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white border-0 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wide mb-2">Project Objective</h4>
                  <p className="text-white text-lg leading-relaxed">{objective}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
