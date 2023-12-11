import { Hero } from "@/components/ui/hero"

export default function Home() {
  return (
    <main className="borde theme-border mx-auto min-h-screen max-w-3xl">
      {/* <div className="">
        <div className="p-3 my-3 bg-black theme-border">

        </div>
      </div> */}
      <div className=" theme-border min-h-[12rem] px-5 py-10 md:px-10 md:py-12">
        <Hero />
      </div>
      <div className="theme-border min-h-[12rem] border-x-0 border-t px-5 py-10 md:px-10 md:py-12">
        box content
      </div>
      <div className="theme-border min-h-[12rem] border border-x-0 px-5 py-10 md:px-10 md:py-12">
        box content
      </div>
      {/* <div className="px-2">
        <div className='bg-primary/30 h-3 border border-x-0 mt-2 theme-border'>
        </div>
      </div>
      <div className="px-4">
        <div className='bg-primary/40 h-3 border border-x-0 mt-2 theme-border'>
        </div>
      </div>
      <div className="px-8">
        <div className='bg-primary h-3 border border-x-0 mt-2 theme-border'>
        </div>
      </div> */}
    </main>
  )
}
