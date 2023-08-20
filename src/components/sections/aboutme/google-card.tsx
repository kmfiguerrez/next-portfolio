import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,  
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const GoogleCard = () => {
  return (
    <Card className="sm:w-[380px] bg-transparent border-zinc-500 text-zinc-100">
      <CardHeader>
        <div className='relative h-[220px] mb-1'>
          <Image 
            src='/images/google.png'
            alt='Google IT Support logo'
            fill
            sizes='100%'            
          />
        </div>  
        <CardTitle className='tracking-wide'>Google IT Support</CardTitle>
        <CardDescription>Google certification card</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          I'm taking Google IT Support certification
          as one of chosen scholars.
        </p>
      </CardContent>      
    </Card>
  )
}

export default GoogleCard