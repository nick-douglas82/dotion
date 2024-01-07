import { SideNav } from '../../_components/navigation/SideNav'

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid h-full grid-cols-[240px,_1fr]">
      <SideNav />
      <main className="flex h-full flex-col">{children}</main>
    </div>
  )
}
