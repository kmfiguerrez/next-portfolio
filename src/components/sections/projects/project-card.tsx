'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import IPv4Dialog from './ipv4-dialog'
import IPv6Dialog from './ipv6-dialog'
import {
  Card,
  CardContent,
  CardDescription,  
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ProjCardProps {
  imgSrc: string,
  imgAlt: string,
  title: string,  
  dialog: string,
}


const ProjectCard = ({imgSrc, imgAlt, title, dialog}: ProjCardProps) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <Card 
      className='max-sm:mx-auto w-[320px]' 
      onMouseEnter={() => setIsHover(true)} 
      onMouseLeave={() => setIsHover(false)}      
      >

      <CardHeader>
        <div className='relative h-[100px] mb-4'>
          <Image 
            src={imgSrc}
            alt={imgAlt}
            fill
          />
        </div>
        <Separator />
        <CardTitle className='text-lg font-bold tracking-wide'>{title}</CardTitle>
        <CardDescription>
          {isHover ? '"Click the button for Info"' : 'IPv4 subnetting card'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex justify-between'>
          <p className=' text-blue-500 font-semibold'>                        
            Web App
          </p>
          {/* Will render ipv4 or ipv6 dialog */}
          {dialog === 'ipv4' ? 
            <IPv4Dialog 
              className={`${isHover ? 'transition delay-75 scale-150 animate-pulse' : ''}`} /> 
            : 
            <IPv6Dialog className={`${isHover ? 'transition delay-75 scale-150 animate-pulse' : ''}`} />
          }          
        </div>        
      </CardContent>
    </Card>
  )
}

export default ProjectCard