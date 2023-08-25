import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Ipv4Card = () => {
  return (
    <Card className='sm:w-[320px]'>
      <CardHeader>
        <div className='relative h-[100px] mb-4'>
          <Image 
            src='/logos/ipv4.svg'
            alt='Ipv4 logo'
            fill
          />
        </div>
        <Separator />
        <CardTitle className='text-lg font-bold'>IPV4 SUBNETTING</CardTitle>
        <CardDescription>IPv4 subnetting card</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex justify-between'>
          <p className='text-blue-500 font-semibold'>Web App</p>
          <Image 
           src='/icons/plus-circle.svg'
           alt='Plus-Circle icon'
           height={30}
           width={30}
          //  className='stroke-blue-500'
          />
        </div>        
      </CardContent>      
    </Card>
  )
}

export default Ipv4Card