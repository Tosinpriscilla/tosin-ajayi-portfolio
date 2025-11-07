/**
 * SEO Metadata Utilities
 *
 * This file contains helper functions for generating Next.js metadata
 * for case studies and other pages in the portfolio.
 */

import type { Metadata } from 'next';
import { CaseStudy } from './case-studies';

/**
 * Generate SEO metadata for a case study page
 * @param caseStudy - The case study object
 * @returns Next.js Metadata object with SEO tags
 */
export function generateCaseStudyMetadata(caseStudy: CaseStudy): Metadata {
  return {
    title: `${caseStudy.title} | Priscilla Ajayi`,
    description: caseStudy.description,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.description,
      images: [caseStudy.image],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: caseStudy.title,
      description: caseStudy.description,
      images: [caseStudy.image],
    },
  };
}

/**
 * Generate SEO metadata for the home page
 * @returns Next.js Metadata object for home page
 */
export function generateHomeMetadata(): Metadata {
  return {
    title: 'Priscilla Ajayi | UX/UI Designer Portfolio',
    description:
      'Senior UX/UI Designer specializing in user-centered design, accessibility, and creating intuitive digital experiences. View my portfolio of mobile apps, web applications, and design case studies.',
    openGraph: {
      title: 'Priscilla Ajayi | UX/UI Designer Portfolio',
      description:
        'Senior UX/UI Designer specializing in user-centered design, accessibility, and creating intuitive digital experiences.',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Priscilla Ajayi | UX/UI Designer Portfolio',
      description:
        'Senior UX/UI Designer specializing in user-centered design, accessibility, and creating intuitive digital experiences.',
    },
  };
}
