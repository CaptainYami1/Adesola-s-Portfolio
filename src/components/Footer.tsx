import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  const socialLinks = [
    { 
      href: "https://github.com/CaptainYami1", 
      icon: Github, 
      label: "GitHub",
      username: "@CaptainYami1"
    },
    { 
      href: "https://www.linkedin.com/in/adesola-solarin-42692522a", 
      icon: Linkedin, 
      label: "LinkedIn",
      username: "Adesola Solarin"
    },
    { 
      href: "mailto:adesolasolarin@gmail.com", 
      icon: Mail, 
      label: "Email",
      username: "adesolasolarin@gmail.com"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-card border-t border-border/10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-card opacity-50"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              ADESOLA SOLARIN
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Front-End Engineer passionate about creating beautiful, functional web applications. 
              Always ready to tackle new challenges and contribute to innovative projects.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using React & TypeScript</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <social.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span>{social.username}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/10 gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Adesola Solarin. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>Lagos, Nigeria</span>
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-green-600 font-medium">Available for opportunities</span>
            </div>
          </div>
          
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-primary/20 hover:border-primary transition-colors"
          >
            <ArrowUp className="h-4 w-4 mr-1" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;