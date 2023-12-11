import { ReactNode } from "react"

type SectionProps = {
  children: ReactNode
}

export const Section = ({ children }: SectionProps) => {
  return <section className="px-5 py-10 md:px-10 md:py-12">{children}</section>
}
