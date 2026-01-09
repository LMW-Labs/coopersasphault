// Product Card Component for Blog Posts
// Use this component in MDX files to showcase affiliate products

interface ProductCardProps {
  title: string;
  description: string;
  price?: string;
  href: string;
  image?: string;
}

export default function ProductCard({
  title,
  description,
  price,
  href,
  image,
}: ProductCardProps) {
  return (
    <div className="my-8 border border-[#cfcfcf] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row">
        {/* Product Image */}
        <div className="sm:w-48 h-48 bg-[#f5f5f5] flex items-center justify-center flex-shrink-0">
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-[#616d6d] text-sm">Product Image</span>
          )}
        </div>

        {/* Product Info */}
        <div className="p-6 flex flex-col justify-between flex-grow">
          <div>
            <h4 className="font-bold text-lg text-[#1a1a1a] mb-2">{title}</h4>
            <p className="text-[#616d6d] text-sm mb-4">{description}</p>
          </div>
          <div className="flex items-center justify-between">
            {price && (
              <span className="font-bold text-[#1a1a1a] text-lg">{price}</span>
            )}
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 bg-[#ebf725] text-[#1a1a1a] px-6 py-2 rounded-full font-semibold hover:bg-[#d4e020] transition-colors text-sm"
            >
              View Product
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Affiliate Disclosure */}
      <div className="px-6 py-2 bg-[#f5f5f5] text-xs text-[#616d6d]">
        * As an affiliate, we may earn a commission from qualifying purchases.
      </div>
    </div>
  );
}
