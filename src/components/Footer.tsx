import { contactInfo } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 border-t border-white/5 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
        <div>
          <span className="font-bold text-white">Mayank Malik</span>
          <span className="mx-2">|</span>
          Freelance Developer
        </div>
        
        <div className="flex items-center gap-6">
          <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
          <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">Email</a>
        </div>
        
        <div>
          &copy; {currentYear} Mayank Malik. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
