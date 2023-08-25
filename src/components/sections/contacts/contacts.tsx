

const ContactSection = () => {
  return (
    <div id="contacts" className="min-h-screen border border-blue-500">
      {/* Section Title*/}
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-8">
        CONTACTS
      </h2>
      {/* Flex */}
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div>
          {/* Sub Heading */}
          <h3 className="text-lg md:text-2xl text-blue-600 mb-8">
            SOCIALS
          </h3>

        </div>
        <div>
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