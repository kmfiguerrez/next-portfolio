'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import IPv6Dialog from './ipv6-dialog'
import {
  Card,
  CardContent,
  CardDescription,  
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const Ipv6Card = () => {
  const [isHover, setIsHover] = useState(false)

  return (
    <Card 
      className='sm:w-[320px]' 
      onMouseEnter={() => setIsHover(true)} 
      onMouseLeave={() => setIsHover(false)}      
      >

      <CardHeader>
        <div className='relative h-[100px] mb-4'>
          <Image 
            src='/logos/ipv6.svg'
            alt='Ipv4 logo'
            fill
          />
        </div>
        <Separator />
        <CardTitle className='text-lg font-bold tracking-wide'>IPV6 SUBNETTING</CardTitle>
        <CardDescription>
          {isHover ? '"Click the button for Info"' : 'IPv6 subnetting card'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex justify-between'>
          <p className=' text-blue-500 font-semibold'>                        
            Web App
          </p>          
          <IPv6Dialog 
            className={`
              ${isHover ? 'transition delay-75 scale-150 animate-pulse' : ''}
            `}
          />
        </div>        
      </CardContent>
    </Card>
  )
}

export default Ipv6Card