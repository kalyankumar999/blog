import { personalData } from "@/data/personalData";

const Footer = () => {
  return (
    <footer className="border-t border-line bg-black px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
        <p className="font-mono text-xs text-gray-600">
          © {new Date().getFullYear()} {personalData.name}. Built with Next.js
          &amp; Tailwind CSS.
        </p>
        <a
          href="#top"
          className="font-mono text-xs text-gray-500 transition-colors hover:text-orange"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
