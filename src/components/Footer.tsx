import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Portfolio
            </div>
            <p className="text-muted-foreground">
              Crafting exceptional digital experiences with passion and precision.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/imrika23" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/erika-joy-guamos-123456789/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=guamoserikajoy@gmail.com&su=Inquiry%20Regarding%20Your%20Portfolio&body=Dear%20Erika%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20was%20impressed%20with%20your%20work.%20I%20would%20like%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0D%0A%0D%0APlease%20let%20me%20know%20a%20convenient%20time%20to%20connect.%0D%0A%0D%0ABest%20regards%2C%0D%0A%5BYour%20Name%5D"
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              guamoserikajoy@gmail.com
            </p>
          </div>
        </div>
        
        <hr className="my-8 border-border" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center">
            Made with <Heart size={16} className="mx-1 text-red-500" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;