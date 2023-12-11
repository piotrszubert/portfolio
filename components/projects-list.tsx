import Image from "next/image"
import Link from "next/link"

export const ProjectsList = () => {
  return (
    <div>
      <div className="mb-6 space-y-3">
        <div className="text-2xl font-bold">Projects</div>
        <p className="text-muted-foreground">
          In my journey as a web developer, I've had the opportunity to work on
          a variety of exciting projects. Each project showcases my skills in
          creating visually stunning and highly functional websites. Here are a
          few notable projects that highlight my expertise:
        </p>
      </div>
      <div className="relative flex items-center gap-6 rounded-xl border p-4">
        <Link
          className="absolute inset-0"
          href="https://github.com/piotrszubert"
        ></Link>
        <Image
          src="/projects/yu-2.png"
          width="100"
          height="100"
          className="flex-shrink-0 rounded-xl"
          alt="yu"
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">Yu</h3>
          <p className="text-xs text-muted-foreground">
            I embarked on creating a personal blog platform aimed at sharing
            insights, experiences, and tech-related knowledge. This project
            serves as a creative outlet and a means to connect with a diverse
            online community.
          </p>
        </div>
      </div>
    </div>
  )
}
