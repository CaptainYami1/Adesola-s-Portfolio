import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Core",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
      color: "bg-blue-500/10 text-blue-700 border-blue-200"
    },
    {
      title: "Frameworks & Libraries", 
      skills: ["React.js", "Redux", "Redux Toolkit", "React Router"],
      color: "bg-purple-500/10 text-purple-700 border-purple-200"
    },
    {
      title: "Styling & Design",
      skills: ["Tailwind CSS", "Bootstrap", "CSS Modules", "Responsive Design"],
      color: "bg-green-500/10 text-green-700 border-green-200"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Chrome DevTools"],
      color: "bg-orange-500/10 text-orange-700 border-orange-200"
    },
    {
      title: "Development Practices",
      skills: ["RESTful APIs", "Component Architecture", "Agile/Scrum", "Code Reviews"],
      color: "bg-pink-500/10 text-pink-700 border-pink-200"
    },
    {
      title: "UI/UX Skills",
      skills: ["Wireframing", "Prototyping", "User-Centered Design", "Mobile-First Design"],
      color: "bg-indigo-500/10 text-indigo-700 border-indigo-200"
    }
  ];

  const proficiencyLevels = [
    { skill: "React.js", level: 90 },
    { skill: "JavaScript", level: 88 },
    { skill: "CSS/Tailwind", level: 92 },
    { skill: "TypeScript", level: 75 },
    { skill: "Redux", level: 85 },
    { skill: "RESTful APIs", level: 87 }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Categories */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Core Competencies</h3>
            <div className="grid gap-6">
              {skillCategories.map((category, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-smooth shadow-card border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4 text-foreground text-lg">{category.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="outline"
                          className="px-3 py-1 hover:scale-105 transition-transform cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Proficiency Levels */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Proficiency Levels</h3>
            <Card className="shadow-elegant border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {proficiencyLevels.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{item.skill}</span>
                        <span className="text-sm text-muted-foreground">{item.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="h-2 bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="shadow-elegant border-0 bg-gradient-primary text-white">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-semibold mb-4">Always Learning</h4>
                <p className="leading-relaxed opacity-90">
                  Continuously expanding my skill set through online courses, 
                  bootcamps, and hands-on projects. Currently exploring advanced React patterns 
                  and modern animation libraries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;