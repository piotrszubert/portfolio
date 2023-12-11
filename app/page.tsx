import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Hero } from "@/components/ui/hero"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl border-x">
      {/* <div className="">
        <div className="p-3 my-3 bg-black">

        </div>
      </div> */}
      <div className="flex flex-col items-end">
        <ThemeToggle />
      </div>
      <div className="px-5 py-10 md:px-10 md:py-12">
        <Hero />
      </div>
      <Separator />
      <div className=" space-y-3 px-5 py-10 md:px-10 md:py-12">
        <div className="text-2xl font-bold">Projects</div>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          inventore nesciunt cum ipsam repellat deleniti sed tempore tempora
          quaerat dolore.
        </p>
      </div>
      <Separator />
      <div className="space-y-3 px-5 py-10 md:px-10 md:py-12">
        <div className="text-2xl font-bold">About</div>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          quaerat veniam aperiam inventore tempore repellat vero nisi saepe
          similique velit.
        </p>
      </div>
    </main>
  )
}
