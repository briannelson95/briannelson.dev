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

  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState(<MenuIcon className="absolute top-2 right-2 md:hidden z-[999]" width={40} height={40} onClick={handleOpen} />);

  useEffect(() => {
    if (open) {
        document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    } else {
        document.getElementsByTagName('html')[0].style.overflow = 'unset';
    }
  }, [open])

  return (
    <nav>
      <ul className="relative">
        {icon}
        <div className={`
          absolute bg-zinc-700 w-full h-screen ${open ? 'opacity-100' : 'opacity-0'} flex flex-col justify-center items-center
          md:static md:top-auto md:opacity-100 md:h-8 md:flex-row md:justify-around md:bg-transparent
        `}>
          {navigation.navigation.map((item: any, index: any) => (
            <li key={index}>
              <Link href={`/${item.slug.current}`} className="hover:underline">
                {item.title}
              </Link>
            </li>
          ))}
          <div className="absolute bottom-6 md:hidden" >
            Email me
          </div>
        </div>
      </ul>
    </nav>
  )
}
