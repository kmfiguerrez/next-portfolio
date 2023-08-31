import DisappearingText from "@/components/sections/home/disappearing-text.tsx";
import Link from 'next/link'

const HomeSection = () => {
  return (
    <div id="home" className="flex items-center min-h-screen">      
      {/* This outer div is a flex item. */}
      <div>
        <div>
          <Link
            href={'/#about-me'}
            className="
                      transition-colors
                      inline-block border 
                      border-blue-600 
                      rounded-md 
                      py-2
                      px-3
                      text-blue-600
                      hover:bg-blue-500
                      hover:text-white
                      hover:border-zinc-950
                      my-3
                    "
          >
            Hi, I'm
          </Link>
        </div>
        {/* Name. */}
        <p className="
              text-3xl
              sm:text-4xl
              md:text-7xl
              font-bold 
              tracking-wider 
              mb-4
            ">
          KARL MICHAEL FIGUERREZ
        </p>
        {/* Disappearing text. */}
        <DisappearingText />
      </div>
    </div>    
  )
}

export default HomeSection