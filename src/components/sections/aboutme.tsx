

const AboutMeSection = () => {
  return (
    <div className="min-h-screen border border-blue-500">

      <h2 className="
        text-center
        text-3xl
        md:text-5xl
        font-bold
        mb-8

      ">
        ABOUT ME
      </h2>
      
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
      
      <h2 className="
        text-blue-600
        md:text-2xl
      ">
        SKILLS
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  )
}

export default AboutMeSection