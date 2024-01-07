'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { useSession } from 'next-auth/react'
import { NavBar } from '@/app/_components/navigation/NavBar'

export default function Home() {
  const { data: session, status } = useSession()
  console.log('status', status)
  console.log('session', session)
  return (
    <>
      <NavBar />
      <main className="flex h-full flex-col items-center justify-center">
        <header className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-6xl font-semibold leading-tight tracking-tighter">
            Write, plan, share.
            <br />
            With AI at your side.
          </h1>
          <p className="mb-2 text-2xl font-medium tracking-tight">
            Dotion is the connected workspace where better, faster work happens.
          </p>

          <Link
            href="/login"
            className="flex items-center rounded-md bg-neutral-900 px-4 py-1.5 text-base font-medium text-white"
          >
            <span>Get Dotion free</span>
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </header>

        <picture className="relative mx-auto mt-10 block h-[234px] w-full max-w-[640px]">
          <Image
            src="/images/home-hero.webp"
            alt="Hero Image"
            fill
            className="left-0 top-0 h-full w-full rounded-2xl object-cover"
          />
        </picture>
      </main>
    </>
  )
}
