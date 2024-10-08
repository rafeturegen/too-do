import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import mainImage from "@/public/mainImage.png"

export default function Hero() {
  return (
    <section className='max-w-6xl mx-auto flex lg:flex-row flex-col md:mt-24 lg: items-center mt-8 md:px-12 px-2'>
        <div className='flex-col flex gap-2'>
            <h1 className='text-5xl tracking-tighter font-bold md:w-[648px]'>Take control of your day, one task at time.</h1>
            <p className='text-lg tracking-tight md:w-[729px]'>Stay organized and productive with our intuitive To-Do List App. Easily manage tasks, set deadlines, and categorize your work to stay on top of your day. Whether it's personal errands or work projects, this app helps you track everything in one simple, user-friendly interface.</p>   
            <div className='flex gap-1 items-center mt-2'>
                <Link href="/sign-up" className='px-3 py-1.5 bg-black text-white tracking-tight rounded-[0.55rem] '>Let's get started</Link>
                <p className='text-sm'>Over 10,000 tasks organized with our app already!</p>
            </div>
        </div>
        <Image src={mainImage} alt='main image' className='md:w-[500px] xl:ml-12'/>
    </section>
  )
}
