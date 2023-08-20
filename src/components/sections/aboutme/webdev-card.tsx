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
    <Card className="sm:w-[380px] bg-transparent border-zinc-500 text-zinc-100">
      <CardHeader>
        <div className='relative h-[220px] mb-1'>
          <Image 
            src='/images/web-dev.jpg'
            alt='Web Development logo'
            fill
            sizes='100%'            
          />
        </div>  
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