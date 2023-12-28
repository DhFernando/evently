'use client'
import React from 'react'
import { headerLinks } from '@/constants' 
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function NavItems() {

    const pathname = usePathname()

  return (
    <ul className='md:flex-between flex space-x-10 flex-col md:flex-row items-start'>
        {headerLinks.map((link, index) =>{
            const isActive = pathname === link.route;
            return (
                <li key={index} className={`${isActive && 'text-primary font-extrabold'}`}>
                    <Link href={link.route} >{link.label}</Link>
                </li>
                
            )
        })}   
    </ul>
  )
}
