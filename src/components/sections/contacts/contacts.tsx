import Image from "next/image"


const ContactSection = () => {
  return (
    <div id="contacts" className="min-h-screen border border-blue-500">
      {/* Section Title*/}
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-8">
        CONTACTS
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-16">

        <div className="border">
          {/* Sub Heading */}
          <h3 className="text-lg md:text-2xl text-blue-600 mb-8">
            SOCIALS
          </h3>
          <div className="relative h-[300px] border border-blue-700 sm:w-[380px] sm:mx-auto">
            <Image 
              src='/images/socials.svg'
              alt="Socials Image"
              fill              
            />
          </div>

        </div>

        <div className="border">
          {/* Sub Heading */}
          <h3 className="text-lg md:text-2xl text-blue-600 mb-8">
            SEND ME A MESSAGE
          </h3>
          
        </div>





      </div>

    </div>
  )
}

export default ContactSection