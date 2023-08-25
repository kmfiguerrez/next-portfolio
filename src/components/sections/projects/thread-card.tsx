import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardContent,
  CardDescription,  
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const ThreadCard = () => {
  return (
    <Card className='sm:w-[320px]'>
      <CardHeader>        
        <Image 
          src='/icons/gear.svg'
          alt='Ipv4 logo'
          height={70}
          width={70}
          className='animate-spin-slow mx-auto mb-7'
        />        
        <Separator />
        <CardTitle className='text-lg font-bold tracking-wide'>THREAD CLONE</CardTitle>
        <CardDescription>UNDER CONSTRUCTION</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex justify-between'>
          <p className='text-red-500 font-semibold'>
            Both UI and logic are not yet finished
          </p>
          <Image 
           src='/icons/warning.svg'
           alt='Plus-Circle icon'
           height={30}
           width={30}          
          />
        </div>        
      </CardContent>      
    </Card>
  )
}

export default ThreadCard