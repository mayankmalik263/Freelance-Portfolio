import { contactInfo } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 md:ml-24 bg-midnight text-white/80 py-4 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="text-white font-bold">Mayank Malik</span>
          <span className="text-white/30">|</span>
          <span>Full-Stack AI Developer</span>
        </div>

        <div className="flex items-center gap-4">
          <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
          <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">Email</a>
        </div>

        <div className="text-white/40">
          &copy; {currentYear} Mayank Malik
        </div>
      </div>
    </footer>
  );
}
