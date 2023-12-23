// import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,  
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


interface WiwoCardProps {
  imgSrc: string,
  imgAlt: string,
  title: string,
  description: string,
  content: string,
}

const WiwoCard = ({imgSrc, imgAlt, title, description, content}: WiwoCardProps) => {
  return (
    <Card className="bg-transparent border-zinc-500 text-zinc-100 sm:w-[380px]">
      <CardHeader>
        <img src={imgSrc} alt={imgAlt} />
        <CardTitle className='tracking-wide'>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>      
    </Card>

  )
}

export default WiwoCard