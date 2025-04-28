"use client";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  date: string;
  description: string;
  image?: string;
  tech: string[];
  links?: {
    website?: string;
    source?: string;
  };
}

export default function ProjectCard({
  title,
  date,
  description,
  image,
  tech,
  links,
}: ProjectCardProps) {
  return (
    <div className="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-black shadow-md">
      {image && (
        <div className="w-full h-48 bg-neutral-100 dark:bg-neutral-800 relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{date}</p>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map((t, idx) => (
            <span
              key={idx}
              className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded text-xs font-medium text-neutral-700 dark:text-neutral-300"
            >
              {t}
            </span>
          ))}
        </div>
        {links && (
          <div className="flex gap-3 pt-3">
            {links.website && (
              <Link
                href={links.website}
                className="text-sm px-3 py-1 rounded-full bg-black text-white dark:bg-white dark:text-black"
                target="_blank"
              >
                🌐 Website
              </Link>
            )}
            {links.source && (
              <Link
                href={links.source}
                className="text-sm px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-600 text-neutral-600 dark:text-neutral-300"
                target="_blank"
              >
                🔗 Source
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
