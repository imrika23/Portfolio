import { Card } from "./ui/card";
import { Code, Database, Cloud, Smartphone, Globe, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Java"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database size={32} />,
      title: "Backend Development",
      skills: ["Node.js", "MySQL", "Firebase", "Python"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Development",
      skills: ["Flutter", "iOS", "Android"],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Globe size={32} />,
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "WebSockets"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: <Zap size={32} />,
      title: "Tools & Others",
      skills: ["Git", "GitHub", "VSCode", "Figma"],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className="p-6 border-border/50 hover:border-primary hover:shadow-glow transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                
                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;