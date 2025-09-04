import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Smartphone, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, well-structured code following best practices"
    },
    {
      icon: Smartphone,
      title: "Responsive Design", 
      description: "Creating seamless experiences across all devices and screen sizes"
    },
    {
      icon: Globe,
      title: "Modern Tech",
      description: "Leveraging cutting-edge frameworks and tools for optimal performance"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborating effectively in Agile environments and remote teams"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a passionate Front-End Engineer with over <strong className="text-foreground">2 years of hands-on experience</strong> 
              designing, developing, and maintaining responsive web applications. My journey in web development 
              has been driven by a love for creating intuitive, user-friendly interfaces that deliver exceptional experiences.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              Currently working with fintech solutions at <strong className="text-foreground">Mecator</strong>, 
              I specialize in building scalable React.js applications with modern tools and best practices. 
              I'm passionate about clean code architecture, performance optimization, and staying current with 
              emerging technologies.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">What I bring to the table:</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React.js & Redux", "TypeScript", "Tailwind CSS", "RESTful APIs", 
                  "Responsive Design", "Agile/Scrum", "Git & GitHub", "Performance Optimization"
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm actively seeking opportunities with forward-thinking engineering teams, 
              including international and remote-first environments. Let's build something amazing together!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-smooth shadow-card border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <highlight.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;