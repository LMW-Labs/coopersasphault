import { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${COMPANY.name} - family owned and operated asphalt paving company serving Oklahoma for over 35 years. Quality workmanship and customer satisfaction guaranteed.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-[#ebf725]">Cooper Asphalt Paving</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Family owned and operated for over 35 years, we&apos;ve built our
            reputation on quality workmanship, honest pricing, and treating
            every customer like family.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-[#616d6d] text-lg leading-relaxed">
                <p>
                  For over three decades, Cooper Asphalt Paving has been a
                  trusted name in Oklahoma&apos;s paving industry. What started as a
                  small family operation has grown into one of the most reliable
                  asphalt paving companies in the state.
                </p>
                <p>
                  Based in Ada, Oklahoma, we&apos;ve paved countless driveways,
                  parking lots, and roads across the state. Our commitment to
                  quality has never wavered - we use the same premium materials
                  and careful attention to detail on every project, big or
                  small.
                </p>
                <p>
                  As a family-owned business, we understand the importance of
                  trust. When you hire Cooper Asphalt, you&apos;re not just getting a
                  contractor - you&apos;re getting neighbors who take pride in their
                  work and stand behind every job we complete.
                </p>
              </div>
            </div>

            {/* PLACEHOLDER: Add company/family photo */}
            <div className="w-full h-96 bg-[#f5f5f5] rounded-2xl flex items-center justify-center text-[#616d6d]">
              <span>Image: Company or family photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-12 text-center">
            What Sets Us Apart
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "35+ Years Experience",
                description:
                  "Three generations of expertise means we've seen it all and know how to handle any paving challenge.",
                icon: "🏆",
              },
              {
                title: "Family Values",
                description:
                  "We treat every property like it's our own. That's the Cooper family promise.",
                icon: "👨‍👩‍👧‍👦",
              },
              {
                title: "Quality Materials",
                description:
                  "We never cut corners. Premium asphalt and proper techniques ensure lasting results.",
                icon: "⭐",
              },
              {
                title: "Fair & Transparent Pricing",
                description:
                  "No hidden fees, no surprises. We provide detailed quotes and stick to them.",
                icon: "💰",
              },
              {
                title: "Licensed & Insured",
                description:
                  "Fully licensed and insured for your protection and peace of mind.",
                icon: "✅",
              },
              {
                title: "Statewide Service",
                description:
                  "Based in Ada, we serve all of Oklahoma and surrounding states for the right project.",
                icon: "🗺️",
              },
            ].map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                  {value.title}
                </h3>
                <p className="text-[#616d6d]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6 text-center">
            Meet the Team
          </h2>
          <p className="text-[#616d6d] text-lg text-center max-w-2xl mx-auto mb-12">
            Our experienced team brings decades of combined expertise to every
            project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Richard",
                role: "Owner",
                phone: COMPANY.phone.main,
              },
              {
                name: "Blake",
                role: "Operations",
                phone: COMPANY.phone.blake,
              },
              {
                name: "Riley",
                role: "Operations",
                phone: COMPANY.phone.riley,
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                {/* PLACEHOLDER: Add team member photo */}
                <div className="w-40 h-40 bg-[#f5f5f5] rounded-full mx-auto mb-4 flex items-center justify-center text-[#616d6d]">
                  <span className="text-sm">Photo</span>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a]">
                  {member.name}
                </h3>
                <p className="text-[#616d6d] mb-2">{member.role}</p>
                <a
                  href={`tel:${member.phone.replace(/[^0-9]/g, "")}`}
                  className="text-[#1a1a1a] hover:text-[#616d6d] font-medium"
                >
                  {member.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 px-4 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Proudly Serving Oklahoma
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Based in Ada, we travel throughout Oklahoma and surrounding states.
            From small residential driveways to large commercial parking lots,
            no job is too big or too small.
          </p>
          <div className="bg-[#333] rounded-2xl p-8 max-w-lg mx-auto">
            <h3 className="font-bold text-xl mb-4">Our Location</h3>
            <p className="text-gray-300 mb-4">{COMPANY.address.full}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address.full)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#ebf725] hover:underline"
            >
              Get Directions
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#ebf725]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-[#1a1a1a] text-lg mb-8">
            Contact us today for a free estimate. We&apos;d love to hear about your
            project!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY.phone.mainRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#333] transition-colors text-lg"
            >
              Call {COMPANY.phone.main}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1a1a1a] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg border-2 border-[#1a1a1a]"
            >
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
