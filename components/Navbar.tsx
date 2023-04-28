"use client"

import { useEffect, useState } from "react";
import { MenuIcon, CloseIcon } from '@sanity/icons';
import Link from "next/link";
import Header from "./Header";

export default function Navbar({navigation}: any) {
  const handleOpen = () => {
    setOpen(true)
    setIcon(<CloseIcon className='absolute top-2 right-2 md:hidden z-[999]' height={40} width={40} onClick={handleClose} />)
  }

  const handleClose = () => {
      setOpen(false)
      setIcon(<MenuIcon className='absolute top-2 right-2 md:hidden z-[999]' height={40} width={40} onClick={handleOpen} />)
  }

  const [open, setOpen] = useState(null || Boolean);
  const [icon, setIcon] = useState(<MenuIcon className="absolute top-2 right-2 md:hidden z-[999]" width={40} height={40} onClick={handleOpen} />);

  useEffect(() => {
    if (open) {
        document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    } else {
        document.getElementsByTagName('html')[0].style.overflow = 'unset';
    }
  }, [open])

  return (
    <div className="relative">
      {icon}
      <nav className={`${open ? 'visible' : 'hidden'} h-screen bg-zinc-700 md:visible md:h-10 md:bg-transparent`}>
        <div className="flex flex-col justify-center items-center h-full md:flex-row md:justify-around">
          {navigation.navigation.map((item: any, index: any) => (
            <li key={index} className={`list-none text-3xl font-bold py-8 md:text-base md:font-normal`}>
              <Link href={`/${item.slug.current}`} className="hover:underline">
                {item.title}
              </Link>
            </li>
          ))}
        </div>
        <div className="absolute bottom-6 md:hidden" >
          Email me
        </div>
      </nav>
    </div>
  )
}
