import { ProjectsList } from "@/components/projects-list"
import { Section } from "@/components/section"
import { Hero } from "@/components/ui/hero"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl border-x border-dashed">
      <Section>
        <Hero />
      </Section>
      <Separator />
      <Section>
        <div className="space-y-3">
          <div className="text-2xl font-bold">About</div>
          <p className="text-muted-foreground">
            Over the past three years, I&apos;ve focused on crafting visually
            appealing websites and creating dynamic user interfaces. Driven by a
            strong passion, my main priority is to deliver top-notch
            performance, ensuring smooth and lightning-fast user experiences. I
            am dedicated to adopting an inclusive design approach, placing a
            high emphasis on accessibility for all users.{" "}
          </p>
        </div>
      </Section>
      <Separator />
      <Section>
        <ProjectsList />
      </Section>
    </main>
  )
}
