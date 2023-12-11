import Link from "next/link"
import { Separator } from "./ui/separator"

export const Footer = () => {
  return (
    <footer className="mx-auto max-w-2xl mb-2 rounded-2xl -mt-2 border border-dashed">
      {/* <Separator /> */}
      <div className="flex items-center justify-center gap-6 py-6">
        <div className="text-2xl font-bold">Let&apos;s connect</div>
        <div className="flex items-center gap-3">
          <Link
            target="_blank"
            href="https://github.com/piotrszubert"
            className="block h-6 w-6 cursor-pointer text-muted-foreground hover:text-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              fill="currentColor"
              viewBox="0 0 512 462.799"
            >
              <path
                fillRule="nonzero"
                d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
              />
            </svg>
          </Link>
          <Separator className="h-5" orientation="vertical" />
          <Link
            target="_blank"
            href="https://github.com/piotrszubert"
            className="block h-6 w-6 text-muted-foreground hover:text-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              fill="currentColor"
              viewBox="0 0 640 640"
            >
              <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
            </svg>
          </Link>
        </div>
      </div>
      {/* <Separator /> */}
      <div className="px-5 py-2 text-xs border-t border-dashed text-muted-foreground md:px-10">
        Copyright ps777 &copy; 2023
      </div>
    </footer>
  )
}
