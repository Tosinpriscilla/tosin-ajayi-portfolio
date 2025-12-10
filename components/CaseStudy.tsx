import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { ReactNode } from "react";
import Link from "next/link";

interface CaseStudyProps {
  title: string;
  description: string;
  image: string;
  customThumbnail?: ReactNode;
  tags: string[];
  outcome: string;
  index: number;
  comingSoon?: boolean;
  slug?: string;
}

export function CaseStudy({
  title,
  description,
  image,
  customThumbnail,
  tags,
  outcome,
  index,
  comingSoon,
  slug,
}: CaseStudyProps) {
  const cardContent = (
    <Card
      className={`overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 group h-full flex flex-col w-full ${comingSoon ? "" : "cursor-pointer"}`}
    >
      <div className="relative overflow-hidden aspect-video">
        {customThumbnail ? (
          <div className="w-full h-full">{customThumbnail}</div>
        ) : (
          <ImageWithFallback
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
          <div className="flex flex-wrap gap-2 mb-2 sm:mb-3">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-white/90 text-slate-900 backdrop-blur-sm max-w-full truncate"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 flex flex-col flex-grow min-w-0">
        <h3 className="mb-3 text-slate-900 group-hover:text-slate-700 transition-colors break-words">
          {title}
        </h3>
        <p className="text-slate-600 mb-4 flex-grow break-words overflow-wrap-anywhere">
          {description}
        </p>
        <div className="mb-4 p-3 sm:p-4 bg-slate-50 rounded-lg min-w-0">
          <p className="text-slate-500 mb-1">Outcome</p>
          <p className="text-slate-900 break-words overflow-wrap-anywhere">
            {outcome}
          </p>
        </div>
        {comingSoon ? (
          <div className="flex items-center text-red-600">
            <span>Coming Soon</span>
          </div>
        ) : (
          <div className="flex items-center text-slate-900 group-hover:text-slate-700 transition-colors">
            <span className="mr-2">View Case Study</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        )}
      </div>
    </Card>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full w-full min-w-0"
    >
      {comingSoon || !slug ? (
        cardContent
      ) : (
        <Link
          href={`/case-studies/${slug}`}
          className="block h-full w-full min-w-0"
        >
          {cardContent}
        </Link>
      )}
    </motion.div>
  );
}
