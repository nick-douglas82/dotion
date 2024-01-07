'use client'

import { signIn } from 'next-auth/react'
import { GoogleIcon, GithubIcon } from '@/app/_components/icons'
import { NavBar } from '@/app/_components/navigation/NavBar'

export default function Login() {
  return (
    <>
      <NavBar />
      <main className="flex h-full flex-col items-center justify-center">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h1 className="mb-6 text-5xl font-semibold leading-tight tracking-tighter">
            Log in
          </h1>

          <div className="flex w-full max-w-80 flex-col gap-4">
            <button
              className="flex h-9 w-full items-center justify-center rounded-md border border-neutral-200 px-3 text-center text-sm font-medium shadow-sm hover:bg-neutral-100 focus:bg-neutral-200"
              onClick={() => signIn('google', { callbackUrl: '/p' })}
            >
              <GoogleIcon className="mr-2 block h-[14px] w-[14px] shrink-0 fill-inherit" />
              <span>Continue with Google</span>
            </button>
            <button
              className="flex h-9 w-full items-center justify-center rounded-md border border-neutral-200 px-3 text-center text-sm font-medium shadow-sm hover:bg-neutral-100 focus:bg-neutral-200"
              onClick={() => signIn('github', { callbackUrl: '/p' })}
            >
              <GithubIcon className="mr-2 block h-[14px] w-[14px] shrink-0 fill-inherit" />
              <span>Continue with Github</span>
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
