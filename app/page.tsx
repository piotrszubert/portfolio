import { Header } from "@/components/header"
import { Section } from "@/components/section"
import { Hero } from "@/components/ui/hero"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl border-x border-dashed">
      <Header />
      <Separator />
      <Section>
        <Hero />
      </Section>
      <Separator />
      <Section>
        <div className="space-y-3 max-w-xl">
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
        <div className="space-y-3 max-w-xl">
          <div className="text-2xl font-bold">About</div>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            quaerat veniam aperiam inventore tempore repellat vero nisi saepe
            similique velit.
          </p>
        </div>
      </Section>
    </main>
  )
}
