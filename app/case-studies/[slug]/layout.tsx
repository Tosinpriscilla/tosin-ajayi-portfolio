import { Metadata } from "next";
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/lib/case-studies";
import { generateCaseStudyMetadata } from "@/lib/metadata";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return generateCaseStudyMetadata(caseStudy);
}

export default function CaseStudyLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
