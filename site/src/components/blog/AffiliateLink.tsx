// Affiliate Link Component for Blog Posts
// Use this component in MDX files to add affiliate links with proper disclosure

interface AffiliateLinkProps {
  href: string;
  children: React.ReactNode;
  product?: string;
}

export default function AffiliateLink({
  href,
  children,
  product,
}: AffiliateLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="text-[#1a1a1a] font-semibold underline decoration-[#ebf725] decoration-2 hover:bg-[#ebf725] hover:no-underline transition-all px-1"
      title={product ? `Check out ${product}` : undefined}
    >
      {children}
    </a>
  );
}
