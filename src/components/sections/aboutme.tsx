import Image from 'next/image'

const AboutMeSection = () => {
  return (
    <div id='about-me' className="min-h-screen border border-blue-500">

      <h2 className="
        text-center
        text-3xl
        md:text-5xl
        font-bold
        mb-8

      ">
        ABOUT ME
      </h2>

      {/* What I'm Working On block */}
      <div id='wiwo-block' className='mb-8'>      
        <p className="
          text-blue-600
          md:text-2xl
        ">
          WHAT I'M WORKING ON
        </p>
        <div className="
          flex
          flex-col
        ">
          <div>
            WEB DEVELOPMENT
          </div>
          <div>
            CISCO
          </div>
        </div>
      </div>

      {/* Skills block */}
      <div id='skills-block'>
        {/* Heading */}
        <h2 className="
          text-blue-600
          md:text-2xl
          mb-8
        ">
          SKILLS
        </h2>
        {/* Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-5">

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
              src='/logos/bootstrap.svg'
              alt='Bootstrap Logo'
              height={30}
              width={30}
            />
            <p className='ms-2'>Bootstrap</p>
          </div>
          <div className='flex items-center'>
            <Image 
              src='/logos/tailwind1.svg'
              alt='Tailwind Logo'
              height={28}
              width={28}            
            />
            <p className='ms-2'>Tailwind</p>
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