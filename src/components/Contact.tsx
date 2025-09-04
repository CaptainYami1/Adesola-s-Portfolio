import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  Send,
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "adesolasolarin@gmail.com",
      href: "mailto:adesolasolarin@gmail.com",
      primary: true,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 9063 2686 09",
      href: "tel:+2349063268609",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lagos, Nigeria",
      note: "Open to remote opportunities worldwide",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@CaptainYami1",
      href: "https://github.com/CaptainYami1",
      description: "View my code repositories and contributions",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "Adesola Solarin",
      href: "https://www.linkedin.com/in/adesola-solarin-42692522a",
      description: "Connect with me professionally",
    },
  ];

  const opportunities = [
    "Full-time Front-End Engineer positions",
    "Remote-first international opportunities",
    "Freelance and contract projects",
    "Collaborative development partnerships",
    "VanHack-partnered companies",
    "Japanese tech companies and startups",
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to contribute to forward-thinking engineering teams. Let's
            discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card
                    key={index}
                    className={`group hover:shadow-elegant transition-smooth shadow-card border-0 bg-card/50 backdrop-blur-sm ${
                      method.primary ? "ring-2 ring-primary/20" : ""
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            method.primary
                              ? "bg-gradient-primary text-white"
                              : "bg-muted"
                          } group-hover:scale-110 transition-transform`}
                        >
                          <method.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">
                            {method.label}
                          </h4>
                          {method.href ? (
                            <a
                              href={method.href}
                              className="text-primary hover:underline font-medium"
                            >
                              {method.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">
                              {method.value}
                            </p>
                          )}
                          {method.note && (
                            <p className="text-sm text-muted-foreground mt-1">
                              {method.note}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-elegant transition-smooth shadow-card border-0 bg-card/50 backdrop-blur-sm"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <social.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h4 className="font-semibold text-foreground">
                              {social.label}
                            </h4>
                            <Badge variant="outline" className="text-xs">
                              {social.username}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {social.description}
                          </p>
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline text-sm font-medium"
                          >
                            Visit Profile →
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Opportunities & CTA */}
          <div className="space-y-8">
            <Card className="shadow-elegant border-0 bg-gradient-primary text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Currently Seeking
                </h3>
                <p className="opacity-90 mb-6 leading-relaxed">
                  I'm actively looking for exciting opportunities to contribute
                  to innovative projects and collaborate with passionate teams
                  worldwide.
                </p>
                <ul className="space-y-3 mb-8">
                  {opportunities.map((opportunity, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 opacity-90"
                    >
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{opportunity}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="secondary"
                    className="flex-1 bg-white text-primary hover:bg-gray-100"
                    asChild
                  >
                    <a href="mailto:adesolasolarin@gmail.com">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 bg-white text-primary flex-row hover:bg-white/10"
                  >
                    <a
                      href="../../public/ADESOLA SOLARIN resume July 2025.pdf"
                      download="Adesola-Solarin-CV.pdf"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download CV
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Education & Certifications
                </h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">
                      B.Sc. in Accounting
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Ajayi Crowther University, Nigeria
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Analytical & problem-solving foundations
                    </p>
                  </div>
                  <div className="border-l-2 border-accent pl-4">
                    <h4 className="font-semibold text-foreground">
                      Meta Front-End Developer
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Coursera Specialization
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      React, Advanced Patterns, State Management
                    </p>
                  </div>
                  <div className="border-l-2 border-primary-glow pl-4">
                    <h4 className="font-semibold text-foreground">
                      Front-End Bootcamp
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Udemy Certification
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      HTML, CSS, JavaScript, UI/UX Best Practices
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
