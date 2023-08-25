import Image from 'next/image'
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
        <div className='relative h-[100px] mb-1'>
          <Image 
            src='/logos/ipv4.svg'
            alt='Ipv4 logo'
            fill
          />
        </div>
        <CardTitle>IPv4 Subnetting</CardTitle>
        <CardDescription>Ipv4 subnetting card</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}

export default Ipv4Card