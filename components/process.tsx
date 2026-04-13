"use client"

const steps = [
  {
    number: "01",
    title: "Strategy & Brand Discovery",
    description: "We dive deep into understanding your business, audience, and goals to create a tailored strategy.",
  },
  {
    number: "02",
    title: "Digital System Development",
    description: "We build the digital infrastructure and tools needed to support your growth objectives.",
  },
  {
    number: "03",
    title: "Content & Marketing Execution",
    description: "We create and deploy compelling content and marketing campaigns across all channels.",
  },
  {
    number: "04",
    title: "Performance Optimization",
    description: "We continuously monitor, analyze, and optimize for maximum results and ROI.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-20 lg:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            A Proven Framework for Digital Success
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Our strategic approach ensures consistent results and measurable business impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border" />
              )}
              <div className="relative bg-background rounded-2xl p-8 border border-border h-full hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
                <div className="text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
