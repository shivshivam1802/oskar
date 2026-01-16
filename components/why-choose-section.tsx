import { CheckCircle, Users, DollarSign, Target, TrendingUp } from "lucide-react"

const features = [
  {
    icon: CheckCircle,
    title: "On-Time Project Delivery",
    description: "We pride ourselves on meeting deadlines without compromising quality.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Industry veterans with years of expertise in digital solutions.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Competitive rates that deliver exceptional value for your investment.",
  },
  {
    icon: Target,
    title: "Client-First Approach",
    description: "Your needs and goals drive every decision we make.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Track record of successful projects and satisfied clients.",
  },
]

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Why Choose YASH EVER FRESH BAKERY GUNA</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">What sets us apart from the competition</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-card transition-colors"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <feature.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
