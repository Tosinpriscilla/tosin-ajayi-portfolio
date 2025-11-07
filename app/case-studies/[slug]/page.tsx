"use client";

import { notFound, useRouter } from "next/navigation";
import { CaseStudyDetail } from "@/components/CaseStudyDetail";
import { Navigation } from "@/components/Navigation";
import { Contact } from "@/components/Contact";
import { getCaseStudyBySlug } from "@/lib/case-studies";

interface PageProps {
  params: { slug: string };
}

export default function CaseStudyPage({ params }: PageProps) {
  const router = useRouter();
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  // Convert CaseStudy type to the format expected by CaseStudyDetail component
  const caseStudyData = {
    ...caseStudy,
    category: caseStudy.tags[0] || "Design",
    color: "slate",
  };

  const handleBack = () => {
    router.push("/#work");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <CaseStudyDetail caseStudy={caseStudyData} onBack={handleBack} />
      <Contact />
    </div>
  );
}
