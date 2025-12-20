export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">About OSKAR ENTERPRISES</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-center">
              At OSKAR ENTERPRISES, we are committed to delivering exceptional digital and business solutions that help
              growing businesses achieve their goals. Our team of experienced professionals works tirelessly to ensure
              every project is completed on time and exceeds expectations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Timely Delivery</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We understand the importance of deadlines and consistently deliver projects on schedule.
                </p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Transparency</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Clear communication and honest reporting throughout every stage of your project.
                </p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Client Satisfaction</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your success is our priority. We go above and beyond to ensure your complete satisfaction.
                </p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Long-term Partnerships</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Building lasting relationships based on trust, quality, and consistent results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
