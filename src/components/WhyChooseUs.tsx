export default function WhyChooseUs() {
  const features = [
    {
      title: "Impact-Driven Solutions",
      description:
        "Every product we build is custom-crafted to create real business impact.",
    },
    {
      title: "Fast & Reliable Delivery",
      description:
        "Get high-quality results in days or weeks, not months.",
    },
    {
      title: "Transparent & Fair Pricing",
      description:
        "Honest, customized pricing with no hidden fees or surprises.",
    },
    {
      title: "Expert Problem Solvers",
      description:
        "We tackle technical and creative challenges with innovative solutions.",
    },
    {
      title: "Seamless Collaboration",
      description:
        "Clear communication and feedback at every stage of the project.",
    },
    {
      title: "Direct Access to Top Talent",
      description:
        "Work directly with senior experts—no long-term hiring needed.",
    },
  ];

  return (
    <section className="py-24 px-6 grid-background">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose agency?
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the advantages of partnering with a tech team built for
            results and client success.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-12">

          {features.map((feature, index) => (
            <div key={index} className="text-center">

              <div className="w-14 h-14 mx-auto mb-6 bg-gray-800 rounded-lg"></div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}