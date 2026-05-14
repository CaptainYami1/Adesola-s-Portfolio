import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ShoppingCart, Building, Globe } from "lucide-react";

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    let accumulator = 0;
    const speed = 30; // pixels per second

    if (el.scrollLeft === 0) {
      el.scrollLeft = el.scrollWidth / 3;
    }

    const scroll = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!isHovered && !isDragging) {
        accumulator -= speed * delta;
        if (Math.abs(accumulator) >= 1) {
          el.scrollLeft += Math.trunc(accumulator);
          accumulator -= Math.trunc(accumulator);
        }
      }

      const third = el.scrollWidth / 3;
      if (el.scrollLeft <= 1) {
        el.scrollLeft += third;
      } else if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
        el.scrollLeft -= third;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeftState(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeftState - walk;
  };

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
      title: "Personal Portfolio",
      description: "A mobile-first personal portfolio website to showcase professional projects, resume, and contact form.",
      icon: Globe,
      features: [
        "Clean UI, smooth animations, and responsive design",
        "Seamless user experience across devices",
        "Reusable components and optimized layout",
        "Performance and accessibility optimization"
      ],
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Responsive Design"],
      githubUrl: "https://github.com/CaptainYami1/Adesola-s-Portfolio",
      liveUrl: "https://adesola-s-portfolio.vercel.app/",
      status: "Completed"
    },
    {
      title: "Real-estate Website",
      description: "A responsive real-estate web application showcasing properties with advanced filtering and search functionality.",
      icon: Building,
      features: [
        "Advanced property filtering and search",
        "Responsive design for all devices",
        "Detailed property listings",
        "Modern and intuitive user interface"
      ],
      technologies: ["React.js", "Tailwind CSS", "RESTful APIs", "Responsive Design"],
      status: "Completed"
    },
    {
      title: "Cleaning Service Website",
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

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="relative overflow-x-auto w-full py-4 cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <div className="flex gap-8 w-max">
            {[...projects, ...projects, ...projects].map((project, index) => (
              <Card key={index} className="w-[320px] md:w-[400px] shrink-0 group hover:shadow-elegant transition-smooth shadow-card border-0 bg-card/50 backdrop-blur-sm flex flex-col h-full whitespace-normal">
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
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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