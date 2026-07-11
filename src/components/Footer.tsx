import { contactInfo } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 md:ml-24 bg-white border-t-4 border-midnight shadow-[0_-6px_0_rgba(40,63,118,1)] text-midnight py-4 px-6 relative z-50">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          {/* Removed START button */}
        </div>

        <div className="flex items-center gap-4">
          <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="pixel-button px-3 py-2 bg-buttercream hover:bg-icy transition-colors">WhatsApp</a>
          <a href={`mailto:${contactInfo.email}`} className="pixel-button px-3 py-2 bg-buttercream hover:bg-icy transition-colors">Email</a>
        </div>

        <div className="text-midnight/60 font-bold">
          &copy; {currentYear} Mayank Malik
        </div>
      </div>
    </footer>
  );
}
