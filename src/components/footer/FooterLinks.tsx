import Link from "next/link";

interface FooterLinksProps {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export default function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-4 leading-5.75">{title}</h3>
      <ul className="space-y-3">
        {links.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-white/80 hover:underline transition-colors duration-300 text-base inline-block py-1 hover:text-secondary"
              prefetch={false}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
