import Image from "next/image";
import Link from "next/link";
import { COMPANY, SERVICES, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* CTA Banner */}
      <div className="bg-[#ebf725] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-[#1a1a1a] text-lg mb-6">
            Contact us today for a free estimate on your next paving project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY.phone.mainRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#333] transition-colors text-lg"
            >
              <PhoneIcon />
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
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.svg"
                alt="Cooper Asphalt Paving"
                width={64}
                height={64}
                className="w-16 h-16"
              />
              <div>
                <div className="font-bold text-xl">Cooper Asphalt</div>
                <div className="text-sm text-gray-400">Paving</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">{COMPANY.tagline}</p>
            <div className="space-y-2 text-gray-300">
              <p>{COMPANY.address.full}</p>
              <a href={`tel:${COMPANY.phone.mainRaw}`} className="hover:text-[#ebf725] transition-colors block">
                {COMPANY.phone.main}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link href={service.slug} className="text-gray-400 hover:text-[#ebf725] transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.filter(link => !('children' in link)).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#ebf725] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#ebf725] transition-colors">
                  Free Estimate
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="font-bold text-lg mb-6">Service Area</h3>
            <p className="text-gray-400 mb-4">{COMPANY.serviceArea.coverage}</p>
            <div className="flex flex-wrap gap-2">
              {COMPANY.serviceArea.cities.map((city) => (
                <span
                  key={city}
                  className="text-sm bg-[#333] px-3 py-1 rounded-full text-gray-300"
                >
                  {city}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">We Accept</h4>
              <p className="text-gray-400 text-sm">Credit Cards, Debit Cards, Cash, Check</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>&copy; {currentYear} {COMPANY.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
