import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ExternalLink } from "lucide-react";

const Experience = () => {
  let today = new Date();
  const CurrentExperienceYear = today.getFullYear() - 2023;
  const experiences = [
    {
      title: "Software Engineer",
      company: "Mercator Solution",
      location: "Lagos, Nigeria",
      period: "Sep 2025 - Present",
      type: "Full-time",
      description: "Developing and maintaining scalable fintech web applications, including POS management and prepaid payment systems.",
      achievements: [
        "Engineered reusable React.js components with Tailwind CSS, delivering dynamic dashboards and intuitive payment interfaces that enhanced user engagement",
        "Collaborated with backend teams to integrate secure RESTful APIs for real-time payment processing, transaction history, and user authentication",
        "Optimized state management using Redux Toolkit to ensure seamless handling of complex financial data across application components",
        "Partnered with UI/UX designers to translate Figma prototypes into high-fidelity, production-ready fintech solutions",
        "Participated in Agile ceremonies and conducted peer code reviews to maintain high code quality and streamline development workflows",
        "Architected and implemented role-based access control (RBAC) for a nation-wide fintech platform, ensuring secure data isolation between bank and partner tiers",
        "Strengthened platform security and compliance by implementing robust RBAC, successfully passing security audits and eliminating unauthorized access risks"
      ],
      technologies: ["React.js", "C# ASP.NET Core", "Redux Toolkit", "Tailwind CSS", "RESTful APIs", "Agile", "Razor"]
    },
    {
      title: "Front-End Developer",
      company: "NLPC Pension Fund Administrators (PFA)",
      location: "Lagos, Nigeria",
      period: "Jan 2024 – Dec 2024",
      type: "Full-time",
      description: "Developed dynamic, reusable components for pension management systems with focus on accessibility and performance standards.",
      achievements: [
        "Utilized React.js to build dynamic, reusable components aligned with accessibility and performance standards",
        "Worked closely with UX designers to convert high-fidelity Figma prototypes into responsive web pages using Tailwind CSS and React",
        "Integrated RESTful APIs to display and manage real-time user pension data securely and efficiently",
        "Collaborated in daily stand-ups and sprint reviews within an Agile team, contributing to planning and estimation",
        "Conducted peer code reviews, implemented best practices for state management, and contributed to version control workflows using Git"
      ],
      technologies: ["React.js", "Tailwind CSS", "Figma", "RESTful APIs", "Git", "Agile"]
    },
    {
      title: "Front-End Developer (Volunteer)",
      company: "Gospool (Ride-sharing Platform)",
      location: "Remote",
      period: "Jul 2025 – Jan 2026",
      type: "Volunteer",
      description: "Contributed to mobile application development using React Native for cross-platform ride-sharing solution.",
      achievements: [
        "Contributed to the development of Gospool's mobile application using React Native, ensuring cross-platform compatibility (iOS/Android)",
        "Built reusable UI components (modals, buttons, navigation flows) with a focus on performance and mobile responsiveness",
        "Integrated RESTful APIs to handle real-time ride requests, driver matching, and payment workflows",
        "Implemented state management and conditional rendering to enhance booking, scheduling, and waiting screen flows"
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
            {CurrentExperienceYear}+ years of building impactful web applications across fintech, pension management, and international markets
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