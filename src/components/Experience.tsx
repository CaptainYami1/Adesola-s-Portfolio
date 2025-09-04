import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Front-End Developer",
      company: "Mecator (Fintech Solutions)",
      location: "Lagos, Nigeria",
      period: "June 2025 - Present",
      type: "Full-time",
      description: "Developing and maintaining responsive fintech web applications with focus on scalability, security, and seamless user experience.",
      achievements: [
        "Built reusable React.js components integrated with Tailwind CSS for dynamic dashboards and payment interfaces",
        "Collaborated with backend engineers to integrate RESTful APIs for payment processing and user authentication",
        "Implemented state management with Redux Toolkit for smooth financial data handling",
        "Transformed Figma prototypes into production-ready fintech solutions",
        "Contributed to Agile ceremonies and performed peer code reviews"
      ],
      technologies: ["React.js", "Redux Toolkit", "Tailwind CSS", "RESTful APIs", "Fintech", "Agile"]
    },
    {
      title: "Front-End Developer",
      company: "NLPC Pension Fund Administrators (PFA)",
      location: "Lagos, Nigeria", 
      period: "Jan 2024 – Dec 2024",
      type: "Full-time",
      description: "Developed dynamic, reusable components for pension management systems with focus on accessibility and performance standards.",
      achievements: [
        "Utilized React.js to build components aligned with accessibility and performance standards",
        "Converted high-fidelity Figma prototypes into responsive web pages using Tailwind CSS",
        "Integrated RESTful APIs to display and manage real-time user pension data securely",
        "Collaborated in Agile team environments with daily stand-ups and sprint reviews",
        "Conducted peer code reviews and implemented state management best practices"
      ],
      technologies: ["React.js", "Tailwind CSS", "Figma", "RESTful APIs", "Git", "Agile"]
    },
    {
      title: "Front-End Developer (Freelance)",
      company: "Various International Clients",
      location: "Remote",
      period: "Jan 2023 – Dec 2023", 
      type: "Freelance",
      description: "Delivered end-to-end development for international clients, including UK-based cleaning services platform.",
      achievements: [
        "Developed live production website for UK cleaning services (relianceimperial.co.uk)",
        "Transformed design concepts into responsive interfaces with React and vanilla JavaScript",
        "Built custom forms with OTP and password validation, reusable components",
        "Managed projects using GitHub for version control and documentation",
        "Collaborated with international clients across different time zones"
      ],
      technologies: ["React.js", "JavaScript", "GitHub", "Remote Collaboration", "Custom Forms"],
      link: "https://relianceimperial.co.uk"
    },
    {
      title: "Front-End Developer (Volunteer)",
      company: "Gospool (Ride-sharing Platform)",
      location: "Remote",
      period: "2023",
      type: "Volunteer",
      description: "Contributed to mobile application development using React Native for cross-platform ride-sharing solution.",
      achievements: [
        "Developed React Native components ensuring iOS/Android compatibility",
        "Built reusable UI components (modals, buttons, navigation) with mobile responsiveness focus",
        "Integrated RESTful APIs for real-time ride requests and driver matching",
        "Implemented state management and conditional rendering for booking flows",
        "Collaborated with designers and backend engineers in Agile workflow"
      ],
      technologies: ["React Native", "Cross-platform", "RESTful APIs", "State Management", "Mobile Development"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            2+ years of building impactful web applications across fintech, pension management, and international markets
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background hidden md:block" style={{ top: '24px' }}></div>
                  
                  <Card className="md:ml-16 shadow-elegant hover:shadow-glow transition-smooth border-0 bg-card/50 backdrop-blur-sm group">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                            <span>{exp.company}</span>
                            {exp.link && (
                              <a 
                                href={exp.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 hover:underline"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            )}
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.period}</span>
                            </div>
                            <Badge variant="outline" className="w-fit">
                              {exp.type}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="px-3 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;