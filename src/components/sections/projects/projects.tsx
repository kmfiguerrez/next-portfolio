import ThreadCard from "./thread-card"
import ProjectCard from "./project-card"



const ProjectSection = () => {
  return (
    <section id="projects" className="min-h-screen">
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold mb-8 md:text-5xl md:mb-16">
        PROJECTS
      </h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 gap-y-8 mb-16 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
        <div>
          <ProjectCard
            imgSrc="/next-portfolio/logos/ipv4.svg"
            imgAlt="A microservice picture."
            title="MICROSERVICES"
            description="#coding"
            dialog='microservice'
          />
        </div>

        <div>
          <ProjectCard
            imgSrc="/next-portfolio/logos/ipv4.svg"
            imgAlt="Ipv4 logo"
            title="IPV4 SUBNETTING"
            description="#coding"
            dialog='ipv4'
          />
        </div>

        <div>
          <ProjectCard
            imgSrc="/next-portfolio/logos/ipv6.svg"
            imgAlt="Ipv6 logo"
            title="IPV6 SUBNETTING"
            description="#coding"
            dialog="ipv6"
          />
        </div>
        <div>
          <ThreadCard />
        </div>        
      </div>

    </section>
  )
}

export default ProjectSection