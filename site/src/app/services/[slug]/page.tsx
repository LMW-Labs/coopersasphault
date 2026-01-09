import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COMPANY, SERVICES } from "@/lib/constants";

// Service details with full descriptions
const SERVICE_DETAILS: Record<
  string,
  {
    title: string;
    heroDescription: string;
    fullDescription: string[];
    benefits: string[];
    process: { title: string; description: string }[];
    faqs: { question: string; answer: string }[];
  }
> = {
  "asphalt-paving": {
    title: "Asphalt Paving",
    heroDescription:
      "Professional asphalt paving for driveways, parking lots, roads, and more. Quality installation that lasts for decades.",
    fullDescription: [
      "Asphalt paving is our specialty. With over 35 years of experience, Cooper Asphalt Paving delivers professional-grade asphalt installation for residential and commercial properties throughout Oklahoma.",
      "We use only premium hot-mix asphalt and professional-grade equipment to ensure your pavement is built to last. Our experienced crews take pride in every project, from small residential driveways to large commercial parking lots.",
      "Proper installation is critical for asphalt longevity. We prepare the base correctly, apply the right thickness for your traffic needs, and compact everything to professional standards. This attention to detail is what sets us apart.",
    ],
    benefits: [
      "Durable surface that lasts 20-30 years with proper maintenance",
      "Cost-effective compared to concrete alternatives",
      "Quick installation with minimal disruption",
      "Smooth, professional finish",
      "Excellent for Oklahoma's climate",
      "Easy to repair and maintain",
    ],
    process: [
      {
        title: "Site Preparation",
        description:
          "We clear the area, remove old pavement if necessary, and prepare the subgrade.",
      },
      {
        title: "Base Installation",
        description:
          "A proper gravel base is installed and compacted for stability and drainage.",
      },
      {
        title: "Asphalt Application",
        description:
          "Hot-mix asphalt is applied at the correct temperature and thickness.",
      },
      {
        title: "Compaction",
        description:
          "Heavy rollers compact the asphalt for a smooth, durable finish.",
      },
    ],
    faqs: [
      {
        question: "How long does asphalt paving take?",
        answer:
          "Most residential driveways can be completed in 1-2 days. Larger commercial projects may take longer depending on size and complexity.",
      },
      {
        question: "When can I drive on new asphalt?",
        answer:
          "We recommend waiting 2-3 days before driving on new asphalt. In hot weather, you may need to wait longer for the surface to fully cure.",
      },
      {
        question: "How thick should asphalt be?",
        answer:
          "Residential driveways typically need 2-3 inches of asphalt. For heavy vehicles or commercial use, we recommend 4+ inches.",
      },
    ],
  },
  sealcoating: {
    title: "Sealcoating",
    heroDescription:
      "Protect your asphalt investment with professional sealcoating. Extends pavement life and restores that fresh, black appearance.",
    fullDescription: [
      "Sealcoating is one of the most important maintenance steps you can take to protect your asphalt. A proper sealcoat creates a protective barrier against water, UV rays, oil, and chemicals that break down asphalt over time.",
      "At Cooper Asphalt Paving, we use commercial-grade sealcoating materials applied with professional equipment. Our sealcoating service includes thorough cleaning, crack filling, and even application for maximum protection.",
      "Regular sealcoating every 2-3 years can double the life of your asphalt pavement. It's a small investment that pays big dividends in the long run by preventing costly repairs and replacement.",
    ],
    benefits: [
      "Protects against water damage and oxidation",
      "Blocks harmful UV rays",
      "Resists oil and chemical spills",
      "Restores rich, black appearance",
      "Extends pavement life by years",
      "Cost-effective maintenance",
    ],
    process: [
      {
        title: "Surface Cleaning",
        description:
          "We thoroughly clean the surface of dirt, debris, and loose material.",
      },
      {
        title: "Crack Filling",
        description:
          "Existing cracks are filled to prevent water infiltration.",
      },
      {
        title: "Sealcoat Application",
        description:
          "Commercial-grade sealcoat is applied evenly across the surface.",
      },
      {
        title: "Curing Time",
        description:
          "Allow 24-48 hours for the sealcoat to fully cure before use.",
      },
    ],
    faqs: [
      {
        question: "How often should I sealcoat my driveway?",
        answer:
          "We recommend sealcoating every 2-3 years for residential driveways, and every 1-2 years for high-traffic commercial lots.",
      },
      {
        question: "When is the best time to sealcoat?",
        answer:
          "Sealcoating requires temperatures above 50°F and dry conditions. Late spring through early fall is ideal in Oklahoma.",
      },
      {
        question: "How long does sealcoating take to dry?",
        answer:
          "Sealcoat typically dries within 4-8 hours but requires 24-48 hours before vehicle traffic.",
      },
    ],
  },
  "parking-lot-paving": {
    title: "Parking Lot Paving",
    heroDescription:
      "Commercial parking lot installation and repair for businesses. Professional results that make a great first impression.",
    fullDescription: [
      "Your parking lot is often the first thing customers see when they visit your business. A well-maintained parking lot projects professionalism and shows you care about your property and customers.",
      "Cooper Asphalt Paving specializes in commercial parking lot installation for businesses throughout Oklahoma. We work with property managers, business owners, and contractors to deliver quality results on schedule and within budget.",
      "From small business lots to large retail centers, we have the equipment and expertise to handle projects of any size. We also provide ongoing maintenance services to keep your lot looking great year after year.",
    ],
    benefits: [
      "Professional appearance for your business",
      "Proper drainage design",
      "ADA-compliant installations available",
      "Striping and marking services",
      "Minimal business disruption",
      "Maintenance programs available",
    ],
    process: [
      {
        title: "Site Survey",
        description:
          "We assess your property, drainage needs, and traffic patterns.",
      },
      {
        title: "Design & Planning",
        description:
          "Develop a layout that maximizes parking spaces and traffic flow.",
      },
      {
        title: "Installation",
        description:
          "Professional installation with quality materials and equipment.",
      },
      {
        title: "Striping & Marking",
        description:
          "Apply parking lines, handicap markings, and directional arrows.",
      },
    ],
    faqs: [
      {
        question: "How long does parking lot paving take?",
        answer:
          "Project duration depends on size and complexity. Small lots may take 2-3 days, while larger projects can take a week or more.",
      },
      {
        question: "Can you work around our business hours?",
        answer:
          "Yes, we can often schedule work during off-hours to minimize disruption to your customers and employees.",
      },
      {
        question: "Do you provide ADA-compliant handicap spaces?",
        answer:
          "Absolutely. We ensure your parking lot meets all ADA requirements for accessible parking.",
      },
    ],
  },
  "driveway-paving": {
    title: "Driveway Paving",
    heroDescription:
      "Transform your home's curb appeal with a beautiful new asphalt driveway. Professional installation that lasts for decades.",
    fullDescription: [
      "A new asphalt driveway is one of the best investments you can make in your home. It enhances curb appeal, provides a smooth driving surface, and can last 20-30 years with proper maintenance.",
      "Cooper Asphalt Paving has been installing residential driveways in Oklahoma for over 35 years. We understand that your home is your biggest investment, and we treat every property with the care and respect it deserves.",
      "Whether you need a new driveway, resurfacing of an existing driveway, or repairs to damaged areas, we have the expertise to get the job done right. We offer free estimates and honest advice about the best solution for your situation.",
    ],
    benefits: [
      "Increases home value and curb appeal",
      "Smooth, comfortable driving surface",
      "Quick installation (typically 1-2 days)",
      "Long-lasting (20-30 years with maintenance)",
      "Lower cost than concrete",
      "Easy to maintain and repair",
    ],
    process: [
      {
        title: "Free Estimate",
        description:
          "We visit your property, assess your needs, and provide a detailed quote.",
      },
      {
        title: "Preparation",
        description:
          "Remove old driveway, grade the area, and install proper base.",
      },
      {
        title: "Paving",
        description:
          "Apply hot-mix asphalt at proper thickness and temperature.",
      },
      {
        title: "Finishing",
        description:
          "Compact, edge, and clean up for a beautiful finished product.",
      },
    ],
    faqs: [
      {
        question: "How much does a new driveway cost?",
        answer:
          "Driveway costs vary based on size, site conditions, and thickness required. Contact us for a free estimate specific to your property.",
      },
      {
        question: "Should I repair or replace my driveway?",
        answer:
          "We'll assess your driveway and give you an honest recommendation. Sometimes repairs make sense; other times replacement is more cost-effective.",
      },
      {
        question: "Do you remove old driveways?",
        answer:
          "Yes, we handle complete removal and disposal of old concrete or asphalt driveways.",
      },
    ],
  },
  "asphalt-repair": {
    title: "Asphalt Repair & Patching",
    heroDescription:
      "Fix potholes, cracks, and damaged areas before they get worse. Professional repairs that extend your pavement's life.",
    fullDescription: [
      "Small problems become big problems if left unaddressed. Cracks allow water to penetrate the base, leading to potholes and structural failure. Early repair is always more cost-effective than waiting.",
      "Cooper Asphalt Paving provides professional asphalt repair services for both residential and commercial properties. From crack filling to pothole patching to full section replacement, we have solutions for every level of damage.",
      "Our repair work is done right the first time. We use quality materials and proven techniques to ensure repairs blend with existing pavement and last for years. Don't let small problems turn into expensive replacements.",
    ],
    benefits: [
      "Prevents small problems from becoming major repairs",
      "Extends the life of your existing pavement",
      "Improves safety by eliminating trip hazards",
      "More cost-effective than full replacement",
      "Quick turnaround on most repairs",
      "Protects your property investment",
    ],
    process: [
      {
        title: "Assessment",
        description:
          "We evaluate the damage and recommend the appropriate repair method.",
      },
      {
        title: "Preparation",
        description:
          "Clean and prepare the damaged area for repair.",
      },
      {
        title: "Repair",
        description:
          "Apply appropriate repair method (crack filling, patching, or replacement).",
      },
      {
        title: "Finishing",
        description:
          "Compact and seal for a durable, long-lasting repair.",
      },
    ],
    faqs: [
      {
        question: "When should I repair vs. replace my asphalt?",
        answer:
          "If damage is limited to specific areas and the base is still solid, repairs are usually best. Widespread damage or base failure typically requires replacement.",
      },
      {
        question: "How long do repairs last?",
        answer:
          "Properly done repairs can last many years. We use quality materials and techniques to ensure lasting results.",
      },
      {
        question: "Can you match the color of existing asphalt?",
        answer:
          "New asphalt starts darker and lightens over time. Repairs may look different initially but will blend as the new material weathers.",
      },
    ],
  },
  striping: {
    title: "Striping & Line Marking",
    heroDescription:
      "Professional parking lot striping and pavement markings. Clear lines for safety and compliance.",
    fullDescription: [
      "Clear, visible striping is essential for parking lot safety and organization. Faded lines create confusion, reduce parking efficiency, and can lead to liability issues if handicap spaces aren't properly marked.",
      "Cooper Asphalt Paving provides professional striping services for parking lots, driveways, and roadways. We use durable traffic paint and precision equipment to deliver crisp, long-lasting lines.",
      "Whether you need a new layout, restriping of existing lines, or custom markings, we can help. We ensure your striping meets all applicable codes and ADA requirements.",
    ],
    benefits: [
      "Improves traffic flow and parking efficiency",
      "Enhances safety for drivers and pedestrians",
      "Ensures ADA compliance",
      "Professional appearance for your business",
      "Durable, long-lasting paint",
      "Custom layouts and markings available",
    ],
    process: [
      {
        title: "Layout Planning",
        description:
          "Design optimal parking layout and traffic flow patterns.",
      },
      {
        title: "Surface Preparation",
        description:
          "Clean the surface for proper paint adhesion.",
      },
      {
        title: "Striping",
        description:
          "Apply durable traffic paint with precision equipment.",
      },
      {
        title: "Special Markings",
        description:
          "Add handicap symbols, arrows, and other required markings.",
      },
    ],
    faqs: [
      {
        question: "How long does parking lot striping last?",
        answer:
          "Striping typically lasts 1-3 years depending on traffic volume, weather exposure, and paint quality used.",
      },
      {
        question: "Can you stripe over existing lines?",
        answer:
          "Yes, if existing lines are in the correct position, we can apply new paint over them. We can also remove old lines if layout changes are needed.",
      },
      {
        question: "Do you handle ADA compliance?",
        answer:
          "Yes, we ensure all handicap spaces, access aisles, and signage meet current ADA requirements.",
      },
    ],
  },
};

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_DETAILS[slug];
  if (!service) return {};

  return {
    title: service.title,
    description: `${service.heroDescription} ${COMPANY.name} serves Ada, Oklahoma and surrounding areas.`,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICE_DETAILS[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="mb-6">
            <Link href="/services" className="text-gray-400 hover:text-white">
              Services
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-[#ebf725]">{service.title}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            {service.heroDescription}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* PLACEHOLDER: Add service-specific image */}
              <div className="w-full h-80 bg-[#f5f5f5] rounded-2xl mb-8 flex items-center justify-center text-[#616d6d]">
                <span>Image: {service.title}</span>
              </div>

              <div className="prose prose-lg max-w-none">
                {service.fullDescription.map((paragraph, index) => (
                  <p key={index} className="text-[#616d6d] mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Benefits */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">
                  Benefits
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#ebf725] rounded-full flex items-center justify-center mt-0.5">
                        <svg
                          className="w-4 h-4 text-[#1a1a1a]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-[#616d6d]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">
                  Our Process
                </h2>
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div key={step.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1a1a1a] mb-1">
                          {step.title}
                        </h3>
                        <p className="text-[#616d6d]">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {service.faqs.map((faq) => (
                    <div key={faq.question} className="bg-[#f5f5f5] rounded-xl p-6">
                      <h3 className="font-bold text-[#1a1a1a] mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-[#616d6d]">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA Card */}
                <div className="bg-[#1a1a1a] text-white rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-4">Get a Free Estimate</h3>
                  <p className="text-gray-300 mb-6">
                    Contact us today for a free, no-obligation estimate on your
                    project.
                  </p>
                  <a
                    href={`tel:${COMPANY.phone.mainRaw}`}
                    className="block w-full bg-[#ebf725] text-[#1a1a1a] text-center px-6 py-4 rounded-full font-semibold hover:bg-[#d4e020] transition-colors mb-4"
                  >
                    Call {COMPANY.phone.main}
                  </a>
                  <Link
                    href="/contact"
                    className="block w-full bg-transparent border-2 border-white text-white text-center px-6 py-4 rounded-full font-semibold hover:bg-white hover:text-[#1a1a1a] transition-colors"
                  >
                    Request Estimate Online
                  </Link>
                </div>

                {/* Quick Info */}
                <div className="bg-[#f5f5f5] rounded-2xl p-6">
                  <h3 className="font-bold text-[#1a1a1a] mb-4">Quick Info</h3>
                  <ul className="space-y-3 text-[#616d6d]">
                    <li className="flex items-center gap-2">
                      <span className="text-[#ebf725]">✓</span>
                      Free Estimates
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#ebf725]">✓</span>
                      35+ Years Experience
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#ebf725]">✓</span>
                      Licensed & Insured
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#ebf725]">✓</span>
                      Credit Cards Accepted
                    </li>
                  </ul>
                </div>

                {/* Other Services */}
                <div className="bg-[#f5f5f5] rounded-2xl p-6">
                  <h3 className="font-bold text-[#1a1a1a] mb-4">
                    Other Services
                  </h3>
                  <ul className="space-y-2">
                    {SERVICES.filter((s) => s.id !== slug).map((s) => (
                      <li key={s.id}>
                        <Link
                          href={s.slug}
                          className="text-[#616d6d] hover:text-[#1a1a1a] transition-colors"
                        >
                          {s.title} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
