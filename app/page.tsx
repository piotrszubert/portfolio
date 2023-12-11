import { Hero } from "@/components/ui/hero"

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl border">
      {/* <div className="">
        <div className="p-3 my-3 bg-black">

        </div>
      </div> */}
      <div className="min-h-[12rem] px-5 py-10 md:px-10 md:py-12">
        <Hero />
      </div>
      <div className="min-h-[12rem] border-x-0 border-t px-5 py-10 md:px-10 md:py-12">
        <div className="text-2xl font-bold">Projects</div>
        box content
      </div>
      <div className="min-h-[12rem] border border-x-0 px-5 py-10 md:px-10 md:py-12">
        <div className="text-2xl font-bold">About</div>
        box content
      </div>
    </main>
  )
}
