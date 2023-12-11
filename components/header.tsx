import { ThemeToggle } from "./theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
export const Header = () => {
  return (
    <header>
      <div className="mx-auto mt-2 max-w-2xl translate-y-3 items-end rounded-2xl border border-dashed px-5 py-3 md:px-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">

          <Avatar>
            <AvatarImage
              src="https://github.com/piotrszubert.png"
              alt="@ps777"
              />
            <AvatarFallback>PS</AvatarFallback>
          </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-bold">Piotr Szubert</span>
              <span className="text-xs text-muted-foreground">@ps777</span>
            </div>
            </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
