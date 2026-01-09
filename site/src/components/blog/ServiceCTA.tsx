// Service CTA Component for Blog Posts
// Use this in MDX files to promote Cooper Asphalt services

import Link from "next/link";
import { COMPANY } from "@/lib/constants";

interface ServiceCTAProps {
  service?: string;
  message?: string;
}

export default function ServiceCTA({ service, message }: ServiceCTAProps) {
  const defaultMessage = service
    ? `Need ${service.toLowerCase()} for your property?`
    : "Ready to start your paving project?";

  return (
    <div className="my-8 bg-[#1a1a1a] text-white rounded-2xl p-8">
      <h4 className="font-bold text-xl mb-3">
        {message || defaultMessage}
      </h4>
      <p className="text-gray-300 mb-6">
        Contact Cooper Asphalt Paving for a free estimate. Family owned and
        operated for over 35 years, serving all of Oklahoma.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={`tel:${COMPANY.phone.mainRaw}`}
          className="inline-flex items-center justify-center gap-2 bg-[#ebf725] text-[#1a1a1a] px-6 py-3 rounded-full font-semibold hover:bg-[#d4e020] transition-colors"
        >
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
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          Call {COMPANY.phone.main}
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#1a1a1a] transition-colors"
        >
          Request Free Estimate
        </Link>
      </div>
    </div>
  );
}
