
import Ipv4Card from "./ipv4-card"


const ProjectSection = () => {
  return (
    <div id="projects" className="min-h-screen border border-blue-500">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-8">
        PROJECTS
      </h2>
      {/* Project Cards */}
      <div className="grid grid-cols-3 gap-4 border ">
        <div>
          <Ipv4Card />
        </div>
        <div>project 2</div>
        <div>project 3</div>
      </div>

      


    </div>
  )
}

export default ProjectSection