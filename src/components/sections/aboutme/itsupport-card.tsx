import Image from "next/image"
import {
  Card,  
  CardDescription,  
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const ITFundCard = () => {
  return (
    <Card className="bg-transparent border-zinc-500 text-zinc-100 max-w-fit">
      <CardHeader className="flex-row space-x-1">
        <Image src='/next-portfolio/logos/google.svg' alt="Google logo" height={50} width={50}/>
        <div>
          <CardTitle>IT Support Fundamentals</CardTitle>
          <CardDescription>Google</CardDescription>
        </div>        
      </CardHeader>
    </Card>
  )
}

export default ITFundCard