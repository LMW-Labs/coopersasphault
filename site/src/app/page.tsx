import Image from "next/image";
import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#1a1a1a] text-white min-h-[600px] flex items-center">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/90 to-transparent z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-placeholder.jpg')", // PLACEHOLDER: Add hero image
          }}
        />

        <div className="relative z-20 max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <p className="text-[#ebf725] font-semibold mb-4 text-lg">
              {COMPANY.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Asphalt Paving in{" "}
              <span className="text-[#ebf725]">Oklahoma</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From driveways to parking lots, we deliver quality asphalt paving
              services you can trust. Serving Ada and all of Oklahoma for over
              35 years.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${COMPANY.phone.mainRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-[#ebf725] text-[#1a1a1a] px-8 py-4 rounded-full font-semibold hover:bg-[#d4e020] transition-colors text-lg"
              >
                <PhoneIcon />
                {COMPANY.phone.main}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#1a1a1a] transition-colors text-lg"
              >
                Get Free Estimate
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-10 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckIcon />
                <span>Free Estimates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon />
                <span>35+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon />
                <span>Credit Cards Accepted</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
              Our Paving Services
            </h2>
            <p className="text-[#616d6d] text-lg max-w-2xl mx-auto">
              We offer a complete range of asphalt paving services for
              residential and commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={service.slug}
                className="group bg-[#f5f5f5] rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                {/* PLACEHOLDER: Add service image */}
                <div className="w-full h-48 bg-[#cfcfcf] rounded-xl mb-6 flex items-center justify-center text-[#616d6d]">
                  <span className="text-sm">Image: {service.title}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#616d6d] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#616d6d] mb-4">{service.shortDescription}</p>
                <span className="inline-flex items-center gap-2 text-[#1a1a1a] font-semibold group-hover:gap-4 transition-all">
                  Learn More
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Cooper Generations?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                For over 35 years, our family has been paving driveways, parking
                lots, and roads across Oklahoma. We take pride in every project,
                treating your property like our own.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "35+ Years of Experience",
                    description:
                      "Three generations of paving expertise serving Oklahoma families and businesses.",
                  },
                  {
                    title: "Family Owned & Operated",
                    description:
                      "We're not a big corporation. We're your neighbors who take pride in our work.",
                  },
                  {
                    title: "Quality Materials & Equipment",
                    description:
                      "We use only premium asphalt materials and maintain professional-grade equipment.",
                  },
                  {
                    title: "Free Estimates, Fair Pricing",
                    description:
                      "Transparent pricing with no hidden fees. We'll give you an honest quote upfront.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#ebf725] rounded-full flex items-center justify-center">
                      <CheckIcon className="text-[#1a1a1a]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Logo */}
            <div className="w-full h-96 bg-[#333] rounded-2xl flex items-center justify-center p-8">
              <Image
                src="/logo.svg"
                alt="Cooper Generations Asphalt Company"
                width={400}
                height={400}
                className="w-full h-full object-contain max-w-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-[#ebf725]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "35+", label: "Years Experience" },
              { number: "1000+", label: "Projects Completed" },
              { number: "100%", label: "Satisfaction Rate" },
              { number: "50+", label: "Cities Served" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#616d6d] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
              Serving All of Oklahoma
            </h2>
            <p className="text-[#616d6d] text-lg max-w-2xl mx-auto">
              Based in Ada, we travel throughout Oklahoma and surrounding states
              for your paving needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* PLACEHOLDER: Add Oklahoma map or service area graphic */}
            <div className="w-full h-80 bg-[#f5f5f5] rounded-2xl flex items-center justify-center text-[#616d6d]">
              <span>Image: Oklahoma service area map</span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">
                Cities We Serve
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Ada",
                  "Oklahoma City",
                  "Norman",
                  "Edmond",
                  "Moore",
                  "Shawnee",
                  "Durant",
                  "Ardmore",
                  "Lawton",
                  "Stillwater",
                  "Tulsa",
                  "And More...",
                ].map((city) => (
                  <div key={city} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#ebf725] rounded-full" />
                    <span className="text-[#1a1a1a]">{city}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#616d6d] mt-6">
                Don&apos;t see your city? Give us a call - we&apos;re willing to travel
                for the right project!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
              What Our Customers Say
            </h2>
            <p className="text-[#616d6d] text-lg">
              Don&apos;t just take our word for it - hear from our satisfied
              customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Cooper Asphalt did an amazing job on our driveway. Professional, on time, and the quality is outstanding. Highly recommend!",
                author: "Satisfied Customer",
                location: "Ada, OK",
              },
              {
                quote:
                  "We've used them for our business parking lot twice now. Fair pricing and excellent workmanship. They stand behind their work.",
                author: "Business Owner",
                location: "Oklahoma City, OK",
              },
              {
                quote:
                  "Family owned and it shows. They treated our property with respect and the new driveway looks fantastic. Will use again!",
                author: "Happy Homeowner",
                location: "Norman, OK",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="text-[#616d6d] mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <div className="font-bold text-[#1a1a1a]">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-[#616d6d]">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#ebf725] rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="w-8 h-8 text-[#1a1a1a]" />
              </div>
              <h3 className="font-bold text-xl text-[#1a1a1a] mb-2">Call Us</h3>
              <a
                href={`tel:${COMPANY.phone.mainRaw}`}
                className="text-[#616d6d] hover:text-[#1a1a1a] text-lg"
              >
                {COMPANY.phone.main}
              </a>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#ebf725] rounded-full flex items-center justify-center mx-auto mb-4">
                <LocationIcon className="w-8 h-8 text-[#1a1a1a]" />
              </div>
              <h3 className="font-bold text-xl text-[#1a1a1a] mb-2">Visit Us</h3>
              <p className="text-[#616d6d]">{COMPANY.address.full}</p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#ebf725] rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-8 h-8 text-[#1a1a1a]" />
              </div>
              <h3 className="font-bold text-xl text-[#1a1a1a] mb-2">Hours</h3>
              <p className="text-[#616d6d]">
                Monday - Friday: 7am - 6pm
                <br />
                Saturday: By Appointment
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Icons
function PhoneIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function CheckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-5 h-5 text-[#ebf725]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function LocationIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ClockIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
