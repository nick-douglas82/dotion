import {
  ChatBubbleBottomCenterTextIcon,
  ClockIcon,
  StarIcon,
} from '@heroicons/react/24/outline'
import { DotsHorizontalIcon } from '@/app/_components/icons/DotsHorizontal'

export const Header = () => {
  return (
    <header className="flex h-11 items-center justify-between">
      <div className="px-3">header</div>
      <div className="px-3">
        <ul className="flex items-center gap-1 text-sm">
          <li className="mr-3">
            <p className="text-neutral-400">Edited just now</p>
          </li>
          <li>
            <button className="rounded-md p-1 hover:bg-neutral-100">
              <p className="text-neutral-600">Share</p>
            </button>
          </li>
          <li>
            <button className="rounded-md p-1 hover:bg-neutral-100">
              <ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-neutral-600" />
            </button>
          </li>
          <li>
            <button className="rounded-md p-1 hover:bg-neutral-100">
              <ClockIcon className="h-5 w-5 text-neutral-600" />
            </button>
          </li>
          <li>
            <button className="rounded-md p-1 hover:bg-neutral-100">
              <StarIcon className="h-5 w-5 text-neutral-600" />
            </button>
          </li>
          <li>
            <button className="rounded-md p-1 hover:bg-neutral-100">
              <DotsHorizontalIcon className="h-5 w-5 text-neutral-600" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}
