import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import hexagonalBackground from "@/assets/hexagonal-background.png";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen pt-20 flex items-center justify-center relative">
      {/* Background with hexagonal pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${hexagonalBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
      {/* Profile photo */}
      <div className="max-w-5xl mx-auto animate-fade-in flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Profile Image on the Left */}
        <img 
          src="/erika.jpg" 
          alt="Erika Joy Guamos" 
          className="w-52 h-60 rounded-full object-cover object-top border-2 border-primary hover:shadow-glow transition-all hover:scale-105 duration-300"
        />

        {/* Text Content on the Right */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="inline-block mb-6 transition duration-300 hover:brightness-125 hover:scale-105">
              Erika Joy Guamos
            </span>
            <span className="block text-3xl md:text-5xl bg-gradient-primary bg-clip-text text-transparent mb-4 transition duration-300 hover:brightness-125 hover:scale-105">
              Web Developer
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Crafting exceptional digital experiences with modern technologies and clean, scalable code.
          </p>
        </div>
      </div>

    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
      <Button
        variant="hero"
              size="lg" 
              onClick={scrollToProjects}
              className="hover:shadow-glow"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
            >
              Let's Talk
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/imrika23" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-colors hover:shadow-glow"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/erika-joy-guamos-bba943376/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-colors hover:shadow-glow"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=guamoserikajoy@gmail.com&su=Inquiry%20Regarding%20Your%20Portfolio&body=Dear%20Erika%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20was%20impressed%20with%20your%20work.%20I%20would%20like%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0D%0A%0D%0APlease%20let%20me%20know%20a%20convenient%20time%20to%20connect.%0D%0A%0D%0ABest%20regards%2C%0D%0A%5BYour%20Name%5D"
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-colors hover:shadow-glow"
            >
              <Mail size={24} />
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="animate-float">
            <ArrowDown size={32} className="mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;