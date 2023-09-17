import Image from "next/image"
import {
  Card,  
  CardDescription,  
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CertCardProps {
  title: string,
  imgSrc: string,  
  h: number,
  w: number
  titleSize?: string,
}

const CertCard = ( {title, imgSrc, h, w, titleSize=''}: CertCardProps ) => {
  return (
    <Card className="bg-transparent border-zinc-500 text-zinc-100 max-w-fit">
      <CardHeader className="flex-row space-x-1">
        <Image src={imgSrc} alt='Google logo' height={h} width={w}/>
        <div>
          <CardTitle className={titleSize}>{title}</CardTitle>
          <CardDescription>Google</CardDescription>
        </div>        
      </CardHeader>
    </Card>
  )
}

export default CertCard