import Link from "next/link"
import { Badge } from "./ui/badge"

const projectData = [
  {
    id: 1,
    name: "Yu",
    imageUrl: "/projects/yu-2.png",
    technologiesUsed: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Daisy UI",
      "MDX",
      "Contentlayer",
    ],
    description:
      "Personal blog template created in Next.js using new app router, multiple themes to choose from, OG image generator, syntax highlight, SEO features.",
    githubLink: "https://github.com/piotrszubert/yu-blog",
  },
  {
    id: 2,
    name: "Dev portfolio",
    imageUrl: "/projects/yu-2.png",
    technologiesUsed: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "MDX",
      "Contentlayer",
    ],
    description:
      "Developer personal portfolio with blog, originally created under pages router, migrated to app router. Dark mode included.",
    githubLink: "https://github.com/piotrszubert/nextjs-dev-portfolio",
  },
  {
    id: 3,
    name: "MindCanvas",
    imageUrl: "/projects/yu-2.png",
    technologiesUsed: [
      "Vite.js",
      "Bootstrap 5",
      "SCSS",
      "JavaScript",
      "VanillaTilt",
      "AOS",
    ],
    description:
      "SaaS site example landing page, build using Vite, bootstrap and vanilla JavaScript",
    githubLink: "https://github.com/piotrszubert/mind-canvas",
  },
  {
    id: 4,
    name: "Simple blog template",
    imageUrl: "/projects/yu-2.png",
    technologiesUsed: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "MDX",
      "Contentlayer",
    ],
    description:
      "Personal blog template created in Next.js using new app router, syntax highlight, originally created under pages router, migrated to app router.",
    githubLink: "https://github.com/piotrszubert/simple-blog-template",
  },
  {
    id: 5,
    name: "Password generator",
    imageUrl: "/projects/yu-2.png",
    technologiesUsed: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Hook Form",
      "zod",
    ],
    description:
      "Simple password generator, create to show usage of React Hook Form and validation library - zod",
    githubLink: "https://github.com/piotrszubert/password-generator",
  },
]

export const ProjectsList = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="mb-6 space-y-3">
        <div className="text-2xl font-bold">Projects</div>
        <p className="text-muted-foreground">
          In my journey as a web developer, I&apos;ve had the opportunity to
          work on a variety of exciting projects. Each project showcases my
          skills in creating visually stunning and highly functional websites.
          Here are a few notable projects that highlight my expertise:
        </p>
      </div>

      {projectData.map((project) => (
        <div
          key={project.id}
          className="relative flex flex-wrap items-center gap-6 rounded-xl border p-4 duration-500 hover:border-dashed md:flex-nowrap hover:md:translate-x-3 "
        >
          <Link
            className="absolute inset-0"
            target="_blank"
            href={project.githubLink}
          ></Link>
          {/* <Image
            src={project.imageUrl}
            width="100"
            height="100"
            className="flex-shrink-0 rounded-xl"
            alt={project.name}
          /> */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold">{project.name}</h3>
            {project.technologiesUsed && (
              <div className="flex flex-wrap gap-1 py-2">
                {project.technologiesUsed.map((tech) => (
                  <Badge
                    key={tech}
                    className="px-2 py-[1px]"
                    variant="secondary"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
            <p className="text-xs text-muted-foreground">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
