'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import {
  ClockIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon as SearchIcon,
} from '@heroicons/react/24/outline'
import { PlusCircleIcon } from '@heroicons/react/24/solid'

export const SideNav = () => {
  const { data: session } = useSession()

  return (
    <nav className="flex flex-col gap-y-3 border border-r-neutral-100 bg-neutral-50 p-2">
      <div className="flex items-center px-2">
        <Image
          src={session?.user?.image || '/images/hero.png'}
          alt="Hero Image"
          width={20}
          height={20}
          className="mr-2 h-5 w-5 rounded-md"
        />
        <div className="text-sm font-semibold">
          {session?.user?.name}&apos;s Dotion
        </div>
      </div>
      <ul className="flex flex-col text-sm font-medium text-neutral-500">
        <li className="px-2 hover:bg-gray-100">
          <button className="flex w-full items-center py-1.5">
            <SearchIcon className="mr-3 h-4 w-4" />
            Search
          </button>
        </li>
        <li className="px-2 hover:bg-gray-100">
          <button className="flex w-full items-center py-1.5">
            <ClockIcon className="mr-3 h-4 w-4" />
            Updates
          </button>
        </li>
        <li className="px-2 hover:bg-gray-100">
          <button className="flex w-full items-center py-1.5">
            <Cog6ToothIcon className="mr-3 h-4 w-4" />
            Settings & Members
          </button>
        </li>
        <li className="px-2 hover:bg-gray-100">
          <button className="flex w-full items-center py-1.5">
            <PlusCircleIcon className="mr-3 h-4 w-4" />
            New Page
          </button>
        </li>
      </ul>
    </nav>
  )
}
