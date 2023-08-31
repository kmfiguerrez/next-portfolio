import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import { cn } from '@/lib/utils'

// type imageProps = React.ImgHTMLAttributes<HTMLImageElement>

const IPv4Dialog = ({ className }: {className: string}) => {
  

  return (
    <Dialog>

      <DialogTrigger>
        <Image 
           src='/icons/plus-circle.svg'
           alt='Plus-Circle icon'
           height={30}
           width={30}
           className={className}     
        />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader className="border-b pb-2">
          <DialogTitle className="text-black font-bold text-lg">IPV4 SUBNETTING</DialogTitle>          
        </DialogHeader>
        
        {/* Body */}
        <div className="py-4 px-1 text-black h-[350px] max-h-[400px] overflow-y-scroll">
          
          <h5 className="font-semibold mb-2">DESCRIPTION</h5>          
          <p>
            IPv4 Address subnetting is the process of splitting a network into smaller networks known as Subnets.
            This project is a web app and can be used by anyone whether they're learning or practicing subnetting
            for free.
            <br />
            <br />
            I developed this project as one of my personal project to help me check my work or whenever I'm
            practicing ipv4 subnetting.
            <br />
            <br />
            This also useful to anyone who's going for the CCNA exam or any other equivalent certifications.
            <br />
            <br />
            <strong>Note:</strong> This app is on a free hosting plan so access to this app is limited.            
          </p>
          <br />
          <h5 className="font-semibold mb-2">TECH USED</h5>
          <ul className="list-inside list-disc ps-4">
            <li>HTML</li>
            <li>SASS</li>
            <li>Bootstrap 5</li>
            <li>Vanilla Javascript</li>
          </ul>
          <br />
          <h5 className="font-semibold mb-2">FEATURES</h5>
          <ul className="list-inside list-disc ps-4">
            <li>Conversions</li>
            <li>Validations</li>
          </ul>
        </div>
        
        <DialogFooter className="flex-row justify-center text-black border-t pt-4 space-x-8">
          <div className='flex space-x-2'>
            <Image 
              src='/icons/code.svg'
              alt='A code icon'
              height={25}
              width={25}
            />
            <a href="https://github.com/kmfiguerrez/IPv4-Subnetting" target="_blank" className='hover:font-semibold'>
              Code
            </a>            
          </div>
          <div className='flex space-x-2'>
            <Image 
              src='/icons/demo.svg'
              alt='A code icon'
              height={25}
              width={25}
            />
            <a href="https://ipv4subnetting.netlify.app/" target="_blank" className='hover:font-semibold'>
              Demo
            </a>
          </div>
        </DialogFooter>
        
      </DialogContent>

    </Dialog>

  )
}

export default IPv4Dialog