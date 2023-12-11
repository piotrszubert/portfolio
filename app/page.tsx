import { Header } from "@/components/header"
import { Section } from "@/components/section"
import { Hero } from "@/components/ui/hero"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl border-x border-dashed">
      <Header />
      <Separator />
      <Section>
        <Hero />
      </Section>
      <Separator />
      <Section>
        <div className="max-w-xl space-y-3">
          <div className="text-2xl font-bold">Projects</div>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            inventore nesciunt cum ipsam repellat deleniti sed tempore tempora
            quaerat dolore.
          </p>
        </div>
      </Section>
      <Separator />
      <Section>
        <div className="maxw-xl space-y-3">
          <div className="text-2xl font-bold">About</div>
          <p className="text-muted-foreground">
            Over the past three years, I've focused on crafting visually
            appealing websites and creating dynamic user interfaces. Driven by a
            strong passion, my main priority is to deliver top-notch
            performance, ensuring smooth and lightning-fast user experiences. I
            am dedicated to adopting an inclusive design approach, placing a
            high emphasis on accessibility for all users.{" "}
          </p>
        </div>
      </Section>
    </main>
  )
}
