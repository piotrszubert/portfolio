import { Hero } from "@/components/ui/hero";

export default function Home() {
  return (
    <main className="border-x theme-border max-w-3xl mx-auto min-h-screen">
      {/* <div className="">
        <div className="p-3 my-3 bg-black theme-border">

        </div>
      </div> */}
      <div className=' min-h-[12rem] px-5 py-10 md:px-10 md:py-12 theme-border'>
        <Hero />
      </div>
      <div className='min-h-[12rem] px-5 py-10 md:px-10 md:py-12 border-t border-x-0 theme-border'>
        box content
      </div>
      <div className='min-h-[12rem] px-5 py-10 md:px-10 md:py-12 border border-x-0 theme-border'>
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
