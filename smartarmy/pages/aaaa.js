import { getSession } from "next-auth/react"
import { NextResponse } from "next/server"

/** @param {import("next/server").NextRequest} req */

export async function middleware(req) {
  // return early if url isn't supposed to be protected
   // Doesn't work here 
  if (req.url.includes("/login")) {
    return NextResponse.next()
  }

  const session = await getSession({req})
  // You could also check for any property on the session object,
  // like role === "admin" or name === "John Doe", etc.
  if (!session) return NextResponse.redirect("/login")

  // If user is authenticated, continue.
  return NextResponse.next()
}