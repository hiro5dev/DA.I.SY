"use client"

import Image from 'next/image'
import { ThemeToggleBtn } from '@/components/themeToggleButton'
import { SampleComponent } from '@/components/SampleComponent'
import { SampleComponentApiConsumer } from "@/components/SampleComponentApiConsumer"

import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-2 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <p className="text-2xl font-bold text-gray-800 dark:text-white px-4">My APP</p>
        </div>
        <div className="flex flex-row items-center justify-between p-1">
          <ConnectButton />
          <ThemeToggleBtn />
        </div>
      </div>
      {/* <SampleComponent title='hello' subtitle='world'/> */}
      <SampleComponentApiConsumer title='hello' subtitle='world'/>
    </main>
  )
}
