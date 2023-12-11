import { ThemeToggle } from "./theme-toggle"

export const Header = () => {
  return (
    <header>
      <div className="flex flex-col items-end px-5 py-3 md:px-10">
        <ThemeToggle />
      </div>
    </header>
  )
}
