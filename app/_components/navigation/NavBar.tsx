import Link from 'next/link'

export const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full p-4">
      <ul className="flex items-center justify-end gap-x-4">
        <li>
          <Link
            href="/login"
            className="flex h-[30px] items-center justify-center rounded-md px-[10px] text-[15px] hover:bg-gray-50"
          >
            Log in
          </Link>
        </li>
        <li>
          <Link
            href="/login"
            className="inline-flex items-center rounded-md bg-neutral-900 px-4 py-1.5 text-[13px] font-medium text-white"
          >
            <span>Get Dotion free</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
