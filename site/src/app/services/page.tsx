import { Metadata } from "next";
import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services",
  description: `Professional asphalt paving services from ${COMPANY.name}. Driveways, parking lots, sealcoating, repairs, and striping. Serving Ada, Oklahoma and surrounding areas.`,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-[#ebf725]">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            From new installations to repairs and maintenance, we offer a
            complete range of asphalt paving services for residential and
            commercial properties.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={service.slug}
                className="group bg-[#f5f5f5] rounded-2xl overflow-hidden hover:shadow-xl transition-all"
              >
                {/* PLACEHOLDER: Add service image */}
                <div className="w-full h-64 bg-[#cfcfcf] flex items-center justify-center text-[#616d6d]">
                  <span>Image: {service.title}</span>
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#616d6d] transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-[#616d6d] mb-4">{service.shortDescription}</p>
                  <span className="inline-flex items-center gap-2 text-[#1a1a1a] font-semibold group-hover:gap-4 transition-all">
                    Learn More
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-12 text-center">
            Our Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Free Consultation",
                description:
                  "Contact us to discuss your project. We'll answer your questions and schedule a site visit.",
              },
              {
                step: "2",
                title: "Site Assessment",
                description:
                  "We evaluate your property, take measurements, and discuss your options and budget.",
              },
              {
                step: "3",
                title: "Detailed Quote",
                description:
                  "Receive a comprehensive quote with no hidden fees. We explain everything clearly.",
              },
              {
                step: "4",
                title: "Quality Installation",
                description:
                  "Our experienced crew completes your project with professional equipment and premium materials.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-[#ebf725] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#1a1a1a]">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#616d6d]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Contact us today for a free estimate on your paving project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY.phone.mainRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-[#ebf725] text-[#1a1a1a] px-8 py-4 rounded-full font-semibold hover:bg-[#d4e020] transition-colors text-lg"
            >
              Call {COMPANY.phone.main}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#1a1a1a] transition-colors text-lg"
            >
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
