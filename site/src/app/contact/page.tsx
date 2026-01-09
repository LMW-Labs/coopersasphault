import { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Free Estimate",
  description: `Contact ${COMPANY.name} for a free asphalt paving estimate. Call ${COMPANY.phone.main} or fill out our online form. Serving Ada, Oklahoma and surrounding areas.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-[#ebf725]">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Ready to get started on your paving project? Contact us for a free
            estimate. We&apos;re here to answer your questions and help you plan
            your project.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">
                Request a Free Estimate
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#1a1a1a] mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ebf725] focus:border-transparent outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[#1a1a1a] mb-2"
                    >
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ebf725] focus:border-transparent outline-none transition-all"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#1a1a1a] mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ebf725] focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-[#1a1a1a] mb-2"
                  >
                    Project Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ebf725] focus:border-transparent outline-none transition-all"
                    placeholder="Street address, City, State, ZIP"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-[#1a1a1a] mb-2"
                  >
                    Type of Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ebf725] focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="driveway">Driveway Paving</option>
                    <option value="parking-lot">Parking Lot Paving</option>
                    <option value="sealcoating">Sealcoating</option>
                    <option value="repair">Asphalt Repair/Patching</option>
                    <option value="striping">Striping</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="size"
                      className="block text-sm font-medium text-[#1a1a1a] mb-2"
                    >
                      Approximate Size (optional)
                    </label>
                    <input
                      type="text"
                      id="size"
                      name="size"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ebf725] focus:border-transparent outline-none transition-all"
                      placeholder="e.g., 500 sq ft"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-time"
                      className="block text-sm font-medium text-[#1a1a1a] mb-2"
                    >
                      Best Time to Contact
                    </label>
                    <select
                      id="contact-time"
                      name="contact-time"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ebf725] focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Any time</option>
                      <option value="morning">Morning (8am - 12pm)</option>
                      <option value="afternoon">Afternoon (12pm - 5pm)</option>
                      <option value="evening">Evening (5pm - 8pm)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="referral"
                    className="block text-sm font-medium text-[#1a1a1a] mb-2"
                  >
                    How did you hear about us?
                  </label>
                  <select
                    id="referral"
                    name="referral"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ebf725] focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select...</option>
                    <option value="google">Google Search</option>
                    <option value="facebook">Facebook</option>
                    <option value="referral">Friend/Family Referral</option>
                    <option value="drive-by">Saw Your Work</option>
                    <option value="repeat">Repeat Customer</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#1a1a1a] mb-2"
                  >
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ebf725] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* TODO: Form action - connect to email service */}
                <button
                  type="submit"
                  className="w-full bg-[#ebf725] text-[#1a1a1a] px-8 py-4 rounded-full font-semibold hover:bg-[#d4e020] transition-colors text-lg"
                >
                  Submit Request
                </button>

                <p className="text-sm text-[#616d6d] text-center">
                  We&apos;ll respond within 24 hours. For immediate assistance, call us
                  directly.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">
                Get in Touch
              </h2>

              <div className="space-y-8">
                {/* Phone Numbers */}
                <div className="bg-[#f5f5f5] rounded-2xl p-6">
                  <h3 className="font-bold text-lg text-[#1a1a1a] mb-4">
                    Call Us Directly
                  </h3>
                  <div className="space-y-4">
                    <a
                      href={`tel:${COMPANY.phone.mainRaw}`}
                      className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 bg-[#ebf725] rounded-full flex items-center justify-center flex-shrink-0">
                        <PhoneIcon />
                      </div>
                      <div>
                        <div className="font-bold text-[#1a1a1a]">
                          Richard (Main)
                        </div>
                        <div className="text-[#616d6d]">{COMPANY.phone.main}</div>
                      </div>
                    </a>
                    <a
                      href={`tel:${COMPANY.phone.blake.replace(/[^0-9]/g, "")}`}
                      className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 bg-[#cfcfcf] rounded-full flex items-center justify-center flex-shrink-0">
                        <PhoneIcon />
                      </div>
                      <div>
                        <div className="font-bold text-[#1a1a1a]">Blake</div>
                        <div className="text-[#616d6d]">{COMPANY.phone.blake}</div>
                      </div>
                    </a>
                    <a
                      href={`tel:${COMPANY.phone.riley.replace(/[^0-9]/g, "")}`}
                      className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 bg-[#cfcfcf] rounded-full flex items-center justify-center flex-shrink-0">
                        <PhoneIcon />
                      </div>
                      <div>
                        <div className="font-bold text-[#1a1a1a]">Riley</div>
                        <div className="text-[#616d6d]">{COMPANY.phone.riley}</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-[#f5f5f5] rounded-2xl p-6">
                  <h3 className="font-bold text-lg text-[#1a1a1a] mb-4">
                    Our Location
                  </h3>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#ebf725] rounded-full flex items-center justify-center flex-shrink-0">
                      <LocationIcon />
                    </div>
                    <div>
                      <p className="text-[#1a1a1a] font-medium">
                        {COMPANY.address.full}
                      </p>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address.full)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#616d6d] hover:text-[#1a1a1a] underline text-sm mt-1 inline-block"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-[#f5f5f5] rounded-2xl p-6">
                  <h3 className="font-bold text-lg text-[#1a1a1a] mb-4">
                    Business Hours
                  </h3>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#ebf725] rounded-full flex items-center justify-center flex-shrink-0">
                      <ClockIcon />
                    </div>
                    <div className="text-[#616d6d]">
                      <p className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-medium text-[#1a1a1a]">
                          7:00 AM - 6:00 PM
                        </span>
                      </p>
                      <p className="flex justify-between mt-1">
                        <span>Saturday:</span>
                        <span className="font-medium text-[#1a1a1a]">
                          By Appointment
                        </span>
                      </p>
                      <p className="flex justify-between mt-1">
                        <span>Sunday:</span>
                        <span className="font-medium text-[#1a1a1a]">Closed</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Payment */}
                <div className="bg-[#f5f5f5] rounded-2xl p-6">
                  <h3 className="font-bold text-lg text-[#1a1a1a] mb-4">
                    Payment Methods
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {["Credit Card", "Debit Card", "Cash", "Check"].map(
                      (method) => (
                        <span
                          key={method}
                          className="bg-white px-4 py-2 rounded-full text-[#616d6d] text-sm"
                        >
                          {method}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[#f5f5f5]">
        {/* PLACEHOLDER: Add Google Maps embed */}
        <div className="w-full h-96 bg-[#cfcfcf] flex items-center justify-center text-[#616d6d]">
          <div className="text-center">
            <p className="text-lg mb-2">Google Maps Embed</p>
            <p className="text-sm">{COMPANY.address.full}</p>
          </div>
        </div>
      </section>
    </>
  );
}

// Icons
function PhoneIcon() {
  return (
    <svg
      className="w-6 h-6 text-[#1a1a1a]"
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
  );
}

function LocationIcon() {
  return (
    <svg
      className="w-6 h-6 text-[#1a1a1a]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="w-6 h-6 text-[#1a1a1a]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
