'use client'

import Link from "next/link"
import { Button } from "../ui/button"
import Image from "next/image"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

function Header() {
  return (
    <header className=" w-full border-b" >
        <div className="wrapper flex justify-between items-center">
            <Link href='/' >
                <Image src="/assets/images/logo.svg" alt="eventlu-logo" width={128} height={38}></Image>
            </Link> 
            <SignedIn>
                <nav className="justify-center flex items-center  w-full max-w-7xl invisible sm:invisible md:visible lg:visible xl:visible" >
                    <NavItems></NavItems>
                </nav>
            </SignedIn>
            <div className="flex w-32  gap-3">
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