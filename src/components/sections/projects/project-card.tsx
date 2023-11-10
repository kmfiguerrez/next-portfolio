'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import Ipv4DialogContent from './ipv4-dialog-content'
import ProjectDialog from './project-dialog'
import {
  Card,
  CardContent,
  CardDescription,  
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import IPv6DialogContent from './ipv6-dialog-content'


interface ProjCardProps {
  imgSrc: string,
  imgAlt: string,
  title: string,
  description: string,
  dialog: string,
}

const ProjectCard = ({imgSrc, imgAlt, title, description, dialog}: ProjCardProps) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <Card 
      className='max-sm:mx-auto w-[320px]' 
      onMouseEnter={() => setIsHover(true)} 
      onMouseLeave={() => setIsHover(false)}      
      >
      <CardHeader>
        <div className='relative h-[100px] mb-4'>
          <Image src={imgSrc} alt={imgAlt} fill />
        </div>
        <Separator />
        <CardTitle className='text-lg font-bold tracking-wide'>{title}</CardTitle>
        <CardDescription>
          {isHover ? '"Click the button for Info"' : description}
        </CardDescription>
      </CardHeader>

      <CardContent>        
        <div className='flex justify-between'>
          <p className=' text-blue-500 font-semibold'>                        
            Web App
          </p>
          {/* Will render ipv4 or ipv6 dialog */}
          {dialog === 'ipv4' ? 
            <ProjectDialog 
              className={`${isHover ? 'transition delay-75 scale-150 animate-pulse' : ''}`}
              title='IPV4 SUBNETTING'
              codeLink='https://github.com/kmfiguerrez/IPv4-Subnetting'
              demoLink='https://ipv4subnetting.netlify.app/'
            >
              <Ipv4DialogContent />
            </ProjectDialog>
            : 
            <ProjectDialog 
              className={`${isHover ? 'transition delay-75 scale-150 animate-pulse' : ''}`}
              title='IPV6 SUBNETTING'
              codeLink='https://github.com/kmfiguerrez/IPv6-Subnetting'
              demoLink='https://ipv6subnetting.netlify.app/'              
            >
              <IPv6DialogContent />
            </ProjectDialog>
          }          
        </div>        
      </CardContent>
    </Card>
  )
}

export default ProjectCard