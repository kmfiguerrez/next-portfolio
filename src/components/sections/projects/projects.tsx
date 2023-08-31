import IPv4Dialog from "./ipv4-dialog"
import Ipv4Card from "./ipv4-card"
import Ipv6Card from "./ipv6-card"
import ThreadCard from "./thread-card"


const ProjectSection = () => {
  return (
    <div id="projects" className="min-h-screen">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-8">
        PROJECTS
      </h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 gap-y-8 mb-16 md:grid-cols-2 md:gap-4 lg:grid-cols-3">

        <div>
          <Ipv4Card />
        </div>
        <div>
          <Ipv6Card />
        </div>
        <div>
          <ThreadCard />
        </div>        
      </div>

    </div>
  )
}

export default ProjectSection