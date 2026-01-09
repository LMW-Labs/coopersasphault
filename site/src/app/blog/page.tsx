import { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Asphalt Paving Tips & News",
  description: `Expert asphalt paving tips, maintenance guides, and industry news from ${COMPANY.name}. Learn how to care for your driveway and parking lot.`,
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Paving <span className="text-[#ebf725]">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Expert tips, maintenance guides, and industry insights to help you
            make informed decisions about your asphalt paving projects.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-[#f5f5f5] rounded-2xl overflow-hidden hover:shadow-xl transition-all"
                >
                  {/* Post Image */}
                  <div className="w-full h-48 bg-[#cfcfcf] flex items-center justify-center text-[#616d6d]">
                    {post.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-sm">Blog Image</span>
                    )}
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-[#616d6d] mb-3">
                      <span className="bg-white px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#616d6d] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-[#616d6d] text-sm line-clamp-3">
                      {post.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[#1a1a1a] font-semibold mt-4 group-hover:gap-4 transition-all">
                      Read More
                      <svg
                        className="w-4 h-4"
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
          ) : (
            // Placeholder when no posts exist yet
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-[#f5f5f5] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-[#cfcfcf]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">
                Blog Coming Soon
              </h2>
              <p className="text-[#616d6d] max-w-md mx-auto mb-8">
                We&apos;re working on helpful articles about asphalt paving,
                maintenance tips, and industry insights. Check back soon!
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#ebf725] text-[#1a1a1a] px-8 py-4 rounded-full font-semibold hover:bg-[#d4e020] transition-colors"
              >
                Contact Us Instead
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20 px-4 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8 text-center">
            Topics We Cover
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Driveway Paving",
              "Parking Lot Maintenance",
              "Sealcoating Tips",
              "Asphalt Repair",
              "Cost Guides",
              "DIY vs Professional",
              "Seasonal Maintenance",
              "Oklahoma Climate",
            ].map((topic) => (
              <span
                key={topic}
                className="bg-white px-6 py-3 rounded-full text-[#616d6d] font-medium"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have a Paving Question?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Can&apos;t find what you&apos;re looking for? Contact us directly
            and we&apos;ll be happy to help.
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
              Send Us a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
