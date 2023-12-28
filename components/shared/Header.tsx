'use client'

import Link from "next/link"
import { Button } from "../ui/button"
import Image from "next/image"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

function Header() {
  return (
    <header className="bg-red-100 w-full border-b" >
        <div className="wrapper flex items-center justify-between">
            <Link href='/' >
                <Image src="/assets/images/logo.svg" alt="eventlu-logo" width={128} height={38}></Image>
            </Link>
            
            <div className="flex w-32 justify-end gap-3">

            <SignedIn>
                <nav className="md:flex-between hidden w-full max-w-xs">
                    <NavItems></NavItems>
                </nav>
            </SignedIn>

            <SignedIn>
                <UserButton afterSignOutUrl="/" /> 
                <MobileNav />
            </SignedIn>
            <SignedOut>
                <Button asChild className="rounded-full" size="lg">
                <Link href="/sign-in">
                    Login
                </Link>
                </Button>
            </SignedOut>
            </div>
        </div>
    </header>
  )
}

export default Header