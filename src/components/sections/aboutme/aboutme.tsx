import Image from 'next/image'
import WebDevCard from './webdev-card'
import GoogleCard from './google-card'


const AboutMeSection = () => {
  return (
    <div id='about-me' className="min-h-screen">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-8">
        ABOUT ME
      </h2>

      {/* What I'm Working On block */}
      <div id='wiwo-block' className='mb-8'>     
        {/* Sub Heading */}
        <h3 className="text-lg md:text-2xl text-blue-600 mb-8">
          WHAT I'M WORKING ON
        </h3>

        <div className="flex flex-col md:flex-row md:justify-between">
          <div className='mb-8'>
            <WebDevCard />
          </div>
          <div className='md:basis-1/2'>
            <GoogleCard />
          </div>
        </div>

      </div>

      {/* Skills block */}
      <div id='skills-block' className='mb-32'>
        {/* Sub Heading */}
        <h3 className="text-xl md:text-2xl text-blue-600 mb-8">
          SKILLS
        </h3>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8">

          <div className='flex items-center'>
            <Image 
              src='/logos/html5.svg'
              alt='HTML 5 Logo'
              height={23}
              width={23}
            />
            <p className='ms-2'>HTML</p>
          </div>
          <div className='flex items-center'>
            <Image 
              src='/logos/css.svg'
              alt='CSS 3 Logo'
              height={23}
              width={23}
            />
            <p className='ms-2'>CSS</p>
          </div>
          <div className='flex items-center'>
            <Image 
              src='/logos/sass.svg'
              alt='SASS Logo'
              height={28}
              width={28}            
            />
            <p className='ms-2'>SASS</p>
          </div>
          <div className='flex items-center'>
            <Image 
              src='/logos/tailwind.svg'
              alt='Tailwind Logo'
              height={28}
              width={28}            
            />
            <p className='ms-2'>Tailwind</p>
          </div>
          <div className='flex items-center'>
            <Image 
              src='/logos/bootstrap.svg'
              alt='Bootstrap Logo'
              height={30}
              width={30}
            />
            <p className='ms-2'>Bootstrap</p>
          </div>          
          <div className='flex items-center'>
            <Image 
              src='/logos/javascript.svg'
              alt='Javascript Logo'
              height={25}
              width={25}
            />
            <p className='ms-2'>Javascript</p>
          </div>
          <div className='flex items-center'>
            <Image 
              src='/logos/typescript.svg'
              alt='Typescript Logo'
              height={25}
              width={25}
            />
            <p className='ms-2'>Typescript</p>
          </div>
          <div className='flex items-center'>
            <Image 
              src='/logos/zod.svg'
              alt='Zod Logo'
              height={25}
              width={25}
            />
            <p className='ms-2'>Zod</p>
          </div>
          <div className='flex items-center'>
            <Image 
              src='/logos/react.svg'
              alt='React Logo'
              height={25}
              width={25}
            />
            <p className='ms-2'>React</p>
          </div>
          <div className='flex items-center'>
            <Image 
              src='/logos/next.svg'
              alt='Next.js Logo'
              height={25}
              width={25}
            />
            <p className='ms-2'>NEXT</p>
          </div>                  
          <div className='flex items-center'>
            <Image 
              src='/logos/express.svg'
              alt='Express.js Logo'
              height={25}
              width={25}
            />
            <p className='ms-2'>Express</p>
          </div>
          <div className='flex items-center'>
            <Image 
              src='/logos/mongodb.svg'
              alt='MongoDB Logo'
              height={28}
              width={28}
            />
            <p className='ms-1'>MongoDB</p>
          </div>
          <div className='flex items-center'>
            <Image 
              src='/logos/node.svg'
              alt='Node.js Logo'
              height={28}
              width={28}
            />
            <p className='ms-2'>Node</p>
          </div>
          <div className='flex items-center'>
            <Image 
              src='/logos/vite.svg'
              alt='Vite Logo'
              height={28}
              width={28}
            />
            <p className='ms-2'>Vite</p>
          </div>
          <div className='flex items-center'>
            <Image 
              src='/logos/git.svg'
              alt='Git Logo'
              height={28}
              width={28}
            />
            <p className='ms-2'>GIT</p>
          </div>
          <div className='flex items-center'>
            <Image 
              src='/logos/github.svg'
              alt='Git Logo'
              height={28}
              width={28}
            />
            <p className='ms-2'>GitHub</p>
          </div>        

        </div>

      </div>
    </div>
  )
}

export default AboutMeSection