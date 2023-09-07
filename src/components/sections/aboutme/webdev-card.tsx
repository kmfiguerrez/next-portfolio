import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,  
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



const WebDevCard = () => {
  return (
    <Card className="bg-transparent border-zinc-500 text-zinc-100 sm:w-[380px]">
      <CardHeader>
        {/* <div className='relative h-[220px] mb-1'>
          <Image 
            src='/images/web-dev.jpg'
            alt='Web Development logo'
            fill
            sizes='100%'            
          />
        </div> */}
        <img src="/next-portfolio/images/web-dev.jpg" alt="Web Development Logo" />
        <CardTitle className='tracking-wide'>Web Development</CardTitle>
        <CardDescription>Web Development card</CardDescription>
      </CardHeader>
      <CardContent>
        <p>I'm doing Web Development projects.</p>
      </CardContent>      
    </Card>

  )
}

export default WebDevCard