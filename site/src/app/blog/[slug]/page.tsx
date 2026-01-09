import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { COMPANY } from "@/lib/constants";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Article Header */}
      <article>
        <header className="bg-[#1a1a1a] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-6">
              <Link
                href="/blog"
                className="text-gray-400 hover:text-white transition-colors"
              >
                ← Back to Blog
              </Link>
            </nav>
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
              <span className="bg-[#ebf725] text-[#1a1a1a] px-3 py-1 rounded-full font-medium">
                {post.category}
              </span>
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-gray-300">{post.description}</p>
          </div>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="max-w-4xl mx-auto px-4 -mt-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none prose-headings:text-[#1a1a1a] prose-p:text-[#616d6d] prose-a:text-[#1a1a1a] prose-a:underline prose-a:decoration-[#ebf725] prose-a:decoration-2 prose-strong:text-[#1a1a1a] prose-ul:text-[#616d6d] prose-ol:text-[#616d6d]">
              {/* Render MDX content here - for now showing raw content */}
              {/* In production, you would use MDX compiler */}
              <div className="whitespace-pre-wrap">{post.content}</div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 bg-[#1a1a1a] text-white rounded-2xl p-8">
              <h3 className="font-bold text-2xl mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-300 mb-6">
                Contact Cooper Asphalt Paving for a free estimate. We&apos;ve
                been serving Oklahoma for over 35 years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${COMPANY.phone.mainRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#ebf725] text-[#1a1a1a] px-6 py-3 rounded-full font-semibold hover:bg-[#d4e020] transition-colors"
                >
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

            {/* Author/Company Info */}
            <div className="mt-12 flex items-center gap-4 p-6 bg-[#f5f5f5] rounded-2xl">
              <div className="w-16 h-16 bg-[#cfcfcf] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-[#1a1a1a] text-xl">CA</span>
              </div>
              <div>
                <div className="font-bold text-[#1a1a1a]">{post.author}</div>
                <p className="text-[#616d6d] text-sm">
                  Family owned asphalt paving company serving Oklahoma for 35+
                  years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 bg-[#f5f5f5]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="w-full h-40 bg-[#cfcfcf] flex items-center justify-center text-[#616d6d]">
                    {relatedPost.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-sm">Image</span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[#1a1a1a] group-hover:text-[#616d6d] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <span className="text-sm text-[#616d6d]">
                      {relatedPost.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
