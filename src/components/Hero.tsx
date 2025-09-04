import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
let today = new Date();
const CurrentExperienceYear = today.getFullYear() - 2023;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* Location & Status */}
          <div className="flex items-center justify-center gap-2 mb-6 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Lagos, Nigeria</span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-2"></span>
            <span className="text-green-600 font-medium">Available for opportunities</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            ADESOLA SOLARIN
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
            Front-End Engineer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {CurrentExperienceYear}+ years of crafting beautiful, responsive web applications with React.js, 
            JavaScript, and modern development tools. Passionate about creating exceptional user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-smooth px-8 py-6 text-lg font-medium"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/20 hover:border-primary transition-smooth px-8 py-6 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a 
              href="https://github.com/CaptainYami1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-card transition-smooth shadow-card hover:shadow-elegant group"
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://www.linkedin.com/in/adesola-solarin-42692522a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-card transition-smooth shadow-card hover:shadow-elegant group"
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="mailto:adesolasolarin@gmail.com"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-card transition-smooth shadow-card hover:shadow-elegant group"
            >
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-primary-glow/10 rounded-full animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;