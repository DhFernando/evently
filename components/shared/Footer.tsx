'use client' 
import Image from "next/image"
import Link from "next/link"

function Footer() {
  return (
    <footer className=" w-full border-t px-10 py-2" >
      <div className="grid md:grid-cols-3 gap-4">
        <div className="flex justify-center md:justify-start  items-center">
          <Link href='/' >
              <Image src="/assets/images/logo.svg" alt="eventlu-logo" width={100} height={30}></Image>
          </Link>    
        </div>  
        <div className="flex justify-center items-center">
          <p className="text-xs text-gray-600">2024 Evently. @ All Rights reserved</p>  
        </div> 
      </div> 
    </footer>
  )
}

export default Footer