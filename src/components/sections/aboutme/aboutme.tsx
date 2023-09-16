import WebDevCard from './webdev-card'
import GoogleCard from './google-card'
import SkillsTabs from './skills-tabs'
import ITFundCard from './itsupport-card'
import ITNetworkCard from './itnetwork-card'


const AboutMeSection = () => {
  return (
    <section id='about-me' className="min-h-screen">
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold mb-8 md:mb-16 md:text-5xl">
        ABOUT ME
      </h2>

      {/* What I'm Working On block */}
      <div id='wiwo-block' className='mb-10'>     
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

      {/* Certs block */}
      <div id='certs-block' className='mb-10'>
        {/* Sub Heading */}
        <h3 className="text-lg md:text-2xl text-blue-600 mb-8">CERTIFICATIONS</h3>
        
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className='mb-8'>
            <a href="https://www.coursera.org/account/accomplishments/certificate/ZY64XF5TJLAK" target='_blank'>
              <ITFundCard />
            </a>            
          </div>
          <div className='md:basis-1/2'>
            <a href="https://www.coursera.org/account/accomplishments/certificate/TRF9KUAM8W48" target='_blank'>
              <ITNetworkCard />
            </a>            
          </div>          
        </div>
      </div>

      {/* Skills block */}
      <div id='skills-block' className='mb-32'>

        {/* Sub Heading */}
        <h3 className="text-xl text-blue-600 mb-6 md:text-2xl md:mb-8">
          SKILLS
        </h3>
                
        <SkillsTabs />

      </div>

    </section>
  )
}

export default AboutMeSection