import { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Project Gallery",
  description: `View our asphalt paving projects. Driveways, parking lots, and more from ${COMPANY.name}. Serving Ada, Oklahoma and surrounding areas.`,
};

// PLACEHOLDER: Replace with actual project images
const PROJECTS = [
  {
    id: 1,
    title: "Residential Driveway - Ada",
    category: "driveway",
    description: "New asphalt driveway installation for residential property.",
  },
  {
    id: 2,
    title: "Commercial Parking Lot - OKC",
    category: "parking-lot",
    description: "Large commercial parking lot with striping.",
  },
  {
    id: 3,
    title: "Driveway Resurfacing - Norman",
    category: "driveway",
    description: "Resurfacing of existing asphalt driveway.",
  },
  {
    id: 4,
    title: "Church Parking Lot - Ada",
    category: "parking-lot",
    description: "Parking lot paving and striping for local church.",
  },
  {
    id: 5,
    title: "Sealcoating Project - Edmond",
    category: "sealcoating",
    description: "Commercial sealcoating to protect parking surface.",
  },
  {
    id: 6,
    title: "Pothole Repair - Shawnee",
    category: "repair",
    description: "Professional pothole repair for business parking lot.",
  },
  {
    id: 7,
    title: "New Driveway - Moore",
    category: "driveway",
    description: "Beautiful new residential driveway installation.",
  },
  {
    id: 8,
    title: "Parking Lot Striping - Ada",
    category: "striping",
    description: "Fresh striping for improved parking lot organization.",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "driveway", label: "Driveways" },
  { id: "parking-lot", label: "Parking Lots" },
  { id: "sealcoating", label: "Sealcoating" },
  { id: "repair", label: "Repairs" },
  { id: "striping", label: "Striping" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Project <span className="text-[#ebf725]">Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Browse our completed asphalt paving projects. From residential
            driveways to commercial parking lots, see the quality work we
            deliver.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter - Currently static, can be made interactive */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  category.id === "all"
                    ? "bg-[#1a1a1a] text-white"
                    : "bg-[#f5f5f5] text-[#616d6d] hover:bg-[#e5e5e5]"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="group bg-[#f5f5f5] rounded-2xl overflow-hidden hover:shadow-xl transition-all"
              >
                {/* PLACEHOLDER: Replace with actual project images */}
                <div className="relative w-full h-64 bg-[#cfcfcf] flex items-center justify-center text-[#616d6d]">
                  <span className="text-sm text-center px-4">
                    Image: {project.title}
                  </span>
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-[#1a1a1a] text-white text-xs px-3 py-1 rounded-full">
                    {CATEGORIES.find((c) => c.id === project.category)?.label}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-[#1a1a1a] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#616d6d] text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Note about placeholder */}
          <div className="mt-12 text-center p-8 bg-[#f5f5f5] rounded-2xl">
            <p className="text-[#616d6d]">
              <strong>Note:</strong> Project images coming soon. Contact us to
              see examples of our work in your area.
            </p>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 px-4 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-12 text-center">
            Before & After
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* PLACEHOLDER: Add before/after comparison images */}
            <div className="bg-white rounded-2xl p-4">
              <div className="w-full h-64 bg-[#cfcfcf] rounded-xl mb-4 flex items-center justify-center text-[#616d6d]">
                <span>Before Image</span>
              </div>
              <p className="text-center font-medium text-[#1a1a1a]">Before</p>
            </div>
            <div className="bg-white rounded-2xl p-4">
              <div className="w-full h-64 bg-[#cfcfcf] rounded-xl mb-4 flex items-center justify-center text-[#616d6d]">
                <span>After Image</span>
              </div>
              <p className="text-center font-medium text-[#1a1a1a]">After</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#ebf725]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">
            Ready for Your Project?
          </h2>
          <p className="text-[#1a1a1a] text-lg mb-8">
            Contact us today for a free estimate. We&apos;d love to add your
            project to our gallery!
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
