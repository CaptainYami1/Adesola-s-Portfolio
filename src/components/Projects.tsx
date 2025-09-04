import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ShoppingCart, Building, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "React E-Commerce Store",
      description: "A fully functional online shopping interface with cart management, product listings, and checkout flow using React and Context API.",
      icon: ShoppingCart,
      features: [
        "Dynamic product listings with filtering and search",
        "Shopping cart with local storage persistence",
        "Checkout process with form validation",
        "Responsive design with mobile-first approach",
        "Reusable component architecture"
      ],
      technologies: ["React.js", "Context API", "React Router", "Tailwind CSS", "Local Storage"],
      githubUrl: "https://github.com/CaptainYami1/ecommerce",
      status: "Completed"
    },
    {
      title: "Reliance Imperial Cleaning Services",
      description: "Professional website for UK-based cleaning services with modern design, responsive layout, and optimized user experience.",
      icon: Building,
      features: [
        "Modern, professional design tailored for service industry",
        "Responsive layout optimized for all devices",
        "Contact forms with validation and OTP system",
        "Service showcase with detailed descriptions",
        "SEO optimized for local search visibility"
      ],
      technologies: ["React.js", "JavaScript", "Responsive Design", "Form Validation", "SEO"],
      liveUrl: "https://relianceimperial.co.uk",
      status: "Completed"
    },
    {
      title: "Fintech Dashboard (Mecator)",
      description: "Secure, scalable fintech dashboard for POS management and payment processing with real-time data visualization.",
      icon: Globe,
      features: [
        "Real-time payment processing interface",
        "Secure user authentication and data handling",
        "Dynamic dashboard with data visualization",
        "POS management system integration", 
        "Redux state management for complex data flows"
      ],
      technologies: ["React.js", "Redux Toolkit", "Tailwind CSS", "RESTful APIs", "Fintech Security"],
      status: "In Production",
      isPrivate: true
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of real-world applications built with modern technologies and best practices
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-smooth shadow-card border-0 bg-card/50 backdrop-blur-sm flex flex-col h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={project.status === 'Live Production' ? 'default' : project.status === 'In Production' ? 'secondary' : 'outline'}
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                    {project.isPrivate && (
                      <Badge variant="outline" className="text-xs">
                        Private
                      </Badge>
                    )}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <div className="mb-6 flex-1">
                  <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs px-2 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/20 hover:border-primary transition-colors"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-primary hover:shadow-glow transition-smooth"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.isPrivate && (
                    <div className="flex-1 text-center">
                      <Badge variant="secondary" className="w-full justify-center py-2">
                        Private Repository
                      </Badge>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my GitHub for additional projects and contributions.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/20 hover:border-primary transition-colors px-8"
            asChild
          >
            <a href="https://github.com/CaptainYami1" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;