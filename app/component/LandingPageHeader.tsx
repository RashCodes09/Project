"use client"
import logo from "@/public/logo.png"

import React from 'react'
import Button from './Button'
import { MdAppRegistration, MdPerson2 } from 'react-icons/md'
import Link from 'next/link'
import Image from "next/image"

const LandingPageHeader = () => {
  return (
    <div className='w-full flex h-[70px] justify-center items-center'> 
    <div className='w-[90%] h-full flex justify-between items-center'>
      <div className='text-[35px] '><Image src={logo} width={100} height={100} alt="image" /></div>
      <div className='flex items-center gap-5 text-[16px]' >
        <Link href = "/signin">
        <Button  className="text-neutral-900 bg-white">Login</Button>
        </Link>
  <Link href = "/register">
  <Button >Register</Button>
  </Link>
      </div>
    </div>
    </div>
  )
}

export default LandingPageHeader
