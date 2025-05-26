"use client"
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"
 


export default function Header() {

  const session = useSession();

  return (
    <header className="sticky top-0 z-50 bg-green-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Next Blog</h1>
        <nav>
          <div className="flex items-center justify-end gap-4 p-1 bg-gray-100 rounded-lg shadow-md">
            {session?.data && (
              <Link
                href="/admin"
                className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
              >
                Admin
              </Link>
            )}

            {session?.data ? (
              <Link
                href="#"
                onClick={() => signOut({ callbackUrl: "/" })}
                className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 transition"
              >
                Sign Out
              </Link>
            ) : (
              <Link
                href="/api/auth/signin"
                className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700 transition"
              >
                Sign In
              </Link>
            )}
          </div>

        </nav>
      </div>
    </header>
  );
}
