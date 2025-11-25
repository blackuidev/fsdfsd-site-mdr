"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    tags?: string[];
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-white/10">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-grow flex-col p-6">
        <CardTitle className="mb-2 text-xl font-semibold">
          {project.title}
        </CardTitle>
        <CardDescription className="mb-4 flex-grow text-gray-600 dark:text-gray-400">
          {project.description}
        </CardDescription>
        {project.tags && project.tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={project.link} passHref className="w-full">
          <Button className="w-full" variant="default">
            View Project
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
