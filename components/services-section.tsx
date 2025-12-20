import { Card, CardContent } from "@/components/ui/card"
import { Target, Search, Code, Share2, DollarSign, Briefcase } from "lucide-react"

const services = [
  {
    icon: Target,
    title: "Digital Marketing",
    description: "Strategic campaigns that drive engagement and convert leads into loyal customers.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your online visibility and rank higher on search engines with proven techniques.",
  },
  {
    icon: Code,
    title: "Website Development",
    description: "Custom, responsive websites built with modern technologies for optimal performance.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Build your brand presence across all major social platforms with engaging content.",
  },
  {
    icon: DollarSign,
    title: "PPC Advertising",
    description: "Maximize ROI with targeted pay-per-click campaigns that reach your ideal audience.",
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    description: "Expert guidance to streamline operations and accelerate your business growth.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
