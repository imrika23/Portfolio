import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Point of Sale System",
      description: "A full-stack point of sale system with MySQL and Visual Studio. Features include user authentication, payment processing, and admin dashboard.",
      image: "/POS.jpg",
      tech: ["MySQL", "Visual Basic", "Visual Studio"],
      github: "https://github.com/imrika23/Point-of-Sale.git",
      /*demo: "https://demo.com",*/
      featured: true
    },
    {
      title: "Calculator",
      description: "A simple calculator application built with HTML, CSS and JavaScript.",
      image: "/calculator.png",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/imrika23/Calculator.git",
      /*demo: "https://demo.com",*/
      featured: true
    },
    {
      title: "FaceRe",
      description: "Face recognition app use for attendance tracking with secure data storage using Firebase.",
      image: "/facere.png",
      tech: ["React Native", "Node.js", "Firebase"],
      github: "https://github.com/imrika23/FaceRe",
      /*demo: "https://demo.com",*/
      featured: true
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
            Featured Projects
          </h2>
          
          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card 
                key={project.title}
                className="overflow-hidden border-border/50 hover:border-primary hover:shadow-glow transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-video bg-muted relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button variant="secondary" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                          Code
                        </a>
                      </Button>
                      {/*<Button variant="hero" size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      </Button>*/}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Other Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <Card 
                key={project.title}
                className="p-6 border-border/50 hover:border-primary hover:shadow-glow transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-xs text-muted-foreground">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-3">
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                    </a>
                  </Button>
                  {/*<Button variant="ghost" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                    </a>
                  </Button>*/}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
