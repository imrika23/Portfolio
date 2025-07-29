import { Card } from "./ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate web developer with over a year of experience 
                creating digital solutions that make an impact. I specialize in 
                front-end development using modern web technologies, and I love 
                bringing ideas to life through clean, user-friendly code. I'm 
                currently expanding my skills toward full-stack development and 
                always eager to learn, grow, and contribute to meaningful projects.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center border-border/50 hover:border-primary transition-colors">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </Card>
                <Card className="p-4 text-center border-border/50 hover:border-primary transition-colors">
                  <div className="text-2xl font-bold text-primary">1</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </Card>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <Card className="p-8 border-border/50 hover:shadow-glow transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">What I Do</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Frontend Development with HTML, CSS, JavaScript, Java, and React
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Backend Development with Node.js, MySQL, Firebase and Python
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;