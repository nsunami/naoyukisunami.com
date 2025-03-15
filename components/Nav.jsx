import React from "react"
import Image from "next/image"
import Logo from "../public/logo.png"

export default function Nav({ navItems }) {
  return (
    <div
      id="navbar"
      className="flex w-full flex-row justify-between px-12 pt-6"
    >
      <div className="h-8 w-8">
        <Image src={Logo} alt="logo" />
      </div>
      <div className="font-grotesque text-xl">
        <ul className="space-x-5">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="float-left underline decoration-dotted hover:cursor-pointer hover:text-peach"
            >
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
