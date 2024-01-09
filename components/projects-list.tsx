import Image from "next/image"
import Link from "next/link"
import { Badge } from "./ui/badge"

const projectData = [
  {
    id: 1,
    name: "Yu",
    imageUrl: "/projects/yu-2.png",
    technologiesUsed: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    description:
      "I embarked on creating a personal blog platform aimed at sharing insights, experiences, and tech-related knowledge. This project serves as a creative outlet and a means to connect with a diverse online community.",
    githubLink: "https://github.com/piotrszubert",
  },
  {
    id: 2,
    name: "MindCanvas",
    imageUrl: "/projects/yu-2.png",
    technologiesUsed: ['Next.js', 'TypeScript', 'Tailwind CSS', 'TypeScript', 'Tailwind CSS', 'TypeScript', 'Tailwind CSS'],
    description:
      "I embarked on creating a personal blog platform aimed at sharing insights, experiences, and tech-related knowledge. This project serves as a creative outlet and a means to connect with a diverse online community.",
    githubLink: "https://github.com/piotrszubert",
  },
  {
    id: 3,
    name: "DevPortfolio",
    imageUrl: "/projects/yu-2.png",
    technologiesUsed: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    description:
      "I embarked on creating a personal blog platform aimed at sharing insights, experiences, and tech-related knowledge. This project serves as a creative outlet and a means to connect with a diverse online community.",
    githubLink: "https://github.com/piotrszubert",
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
          <Link className="absolute inset-0" href={project.githubLink}></Link>
          <Image
            src={project.imageUrl}
            width="100"
            height="100"
            className="flex-shrink-0 rounded-xl"
            alt={project.name}
          />
          <div className="flex flex-col">
            <h3 className="text-lg font-bold">{project.name}</h3>
            { project.technologiesUsed && (
            <div className="flex flex-wrap gap-1 py-2">
                {project.technologiesUsed.map((tech) => (
                  <Badge className="px-2 py-[1px]" variant="secondary">
                    {tech}
                  </Badge>
                ))}
            </div>
            )
            }
            <p className="text-xs text-muted-foreground">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
