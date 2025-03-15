import React from "react"
import Image from "next/image"
import Wave1 from "../public/wave.svg"

export const Hero = () => {
  return (
    <div
      id="hero"
      className="relative mt-32 flex h-96 w-2/3 flex-col whitespace-nowrap"
    >
      <div id="name" className="">
        <div className="font-shippori text-7xl text-gray-100">角南直幸</div>
        <div
          className="mt-4 bg-gradient-to-r from-orange-700 
    to-orange-50 bg-clip-text font-notoserif text-2xl text-transparent sm:text-4xl"
        >
          Naoyuki Sunami, PhD
        </div>
        <div className="text-md relative font-grotesque text-xl sm:text-5xl">
          Data Steward
        </div>
        <button
          className="mt-20 rounded-full border-2 px-6 pt-2 pb-3 font-grotesque text-2xl hover:bg-gradient-to-r
     hover:from-orange-500 hover:to-peach"
          onClick={() => (location.href = "https://blog.namisunami.com")}
        >
          Read Nami&apos;s blog <span className="font-serif">&rarr;</span>
        </button>
      </div>
      <div className="absolute -right-1/4 -top-20 h-96 w-3/4 -rotate-6">
        <Image src={Wave1} alt="wave" layout="fill" />
      </div>
    </div>
  )
}
