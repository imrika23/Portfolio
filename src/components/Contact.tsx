import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_guamos23', 
        'template_57ka6tf',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'GwmrbAXy5oTz9biT8'
      );

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "guamoserikajoy@gmail.com",
      target: "_blank",
      rel: "noopener noreferrer",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=guamoserikajoy@gmail.com&su=Inquiry%20Regarding%20Your%20Portfolio&body=Dear%20Erika%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20was%20impressed%20with%20your%20work.%20I%20would%20like%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0D%0A%0D%0APlease%20let%20me%20know%20a%20convenient%20time%20to%20connect.%0D%0A%0D%0ABest%20regards%2C%0D%0A%5BYour%20Name%5D"
    },

    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+63 965 068 0895",
      target: "_blank",
      rel: "noopener noreferrer",
      link: "tel:+639650680895"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Oriental Mindoro, Philippines",
      target: "_blank",
      rel: "noopener noreferrer",
      link: "https://www.google.com/maps/place/Oriental+Mindoro/@12.8697888,120.5113681,9z/data=!3m1!4b1!4m6!3m5!1s0x33bb61471e778851:0x94f1306262b234f!8m2!3d13.0564598!4d121.4069417!16zL20vMDFtdzdj?entry=ttu&g_ep=EgoyMDI1MDcyMi4wIKXMDSoASAFQAw%3D%3D"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
            Let's Work Together
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 border-border/50 hover:shadow-glow transition-all duration-300 animate-slide-in">
              <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
            
            {/* Contact Info */}
            <div className="animate-fade-in">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
                <p className="text-muted-foreground text-lg">
                  I'm always open to discussing new opportunities, creative projects, 
                  or just having a friendly chat about technology and development.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <Card 
                    key={info.title}
                    className="p-6 border-border/50 hover:border-primary hover:shadow-glow transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">{info.title}</h4>
                        <a 
                          href={info.link}
                          target={info.target}
                          rel={info.rel}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <Card className="p-6 mt-8 border-border/50 bg-gradient-subtle">
                <h4 className="font-semibold mb-2">Available for freelance work</h4>
                <p className="text-muted-foreground text-sm">
                  I'm currently accepting new projects and would love to hear about yours. 
                  Let's create something amazing together!
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;