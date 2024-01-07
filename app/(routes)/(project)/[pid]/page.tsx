import { Header } from '@/app/_components/project/Header'
import { PageControls } from '@/app/_components/project/PageControls'

export default function Project() {
  return (
    <>
      <Header />
      <div className="h-full">
        <div className="layout h-full">
          <div className="layout-content">
            <PageControls />
            <input
              placeholder="Untitled"
              className="w-full max-w-full whitespace-pre-wrap text-4xl font-bold text-gray-950 caret-neutral-300 outline-none placeholder:text-neutral-300"
            />
          </div>
        </div>
      </div>
    </>
  )
}
