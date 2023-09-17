import SkillsTabs from './skills-tabs'
import CertAlertDialog from './cert-alert-dialog'
import CertCard from './cert-card'
import WiwoCard from './wiwo-card'


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
            <WiwoCard 
              imgSrc='/next-portfolio/images/web-dev.jpg'
              imgAlt='Web Development Logo'
              title='Web Development'
              description='Web Development card'
              content="I'm doing Web Development projects."
            />
          </div>
          <div className='md:basis-1/2'>
            <WiwoCard 
              imgSrc='/next-portfolio/images/google.png'
              imgAlt='Google IT Support Logo'
              title='Google IT Support'
              description='Google certification card'
              content="I'm taking Google IT Support certification as one of chosen scholars."
            />
          </div>
        </div>

      </div>

      {/* Certs block */}
      <div id='certs-block' className='mb-10'>
        {/* Sub Heading */}
        <h3 className="text-lg md:text-2xl text-blue-600 mb-8">CERTIFICATIONS</h3>
        
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className='mb-8'>            
            <CertAlertDialog webLink='https://www.coursera.org/account/accomplishments/certificate/ZY64XF5TJLAK'>
              <CertCard 
                title='IT Support Fundamentals'
                imgSrc='/next-portfolio/logos/google.svg'
                h={50}
                w={50}
              />
            </CertAlertDialog>
          </div>
          <div className='md:basis-1/2'>            
            <CertAlertDialog webLink='https://www.coursera.org/account/accomplishments/certificate/TRF9KUAM8W48'>
              <CertCard
                title='The Bits and Bytes of Computer Networking'
                imgSrc='/next-portfolio/logos/google.svg'
                h={50}
                w={50}
                titleSize='text-xl'
              />
            </CertAlertDialog>
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