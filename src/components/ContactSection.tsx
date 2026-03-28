import React from 'react';
import { Mail, Phone, MessageCircle, Instagram } from 'lucide-react';

interface ContactSectionProps {
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    instagram: string;
  };
}

export const ContactSection: React.FC<ContactSectionProps> = ({ contact }) => {
  const contactItems = [
    { icon: <Phone size={24} />, label: 'Phone', value: contact.phone, link: `tel:${contact.phone}` },
    { icon: <Mail size={24} />, label: 'Email', value: contact.email, link: `mailto:${contact.email}` },
    { icon: <MessageCircle size={24} />, label: 'WhatsApp', value: contact.whatsapp, link: `https://wa.me/${contact.whatsapp.replace('+', '')}` },
    { icon: <Instagram size={24} />, label: 'Instagram', value: `@${contact.instagram}`, link: `https://instagram.com/${contact.instagram}` },
  ];

  return (
    <section id="contact" className="py-16 bg-[var(--botanical-green)] text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--gold-accent)]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--gold-accent)]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="page-wrap px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 reveal-up">
          <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-[var(--gold-accent)] mb-3 block">Connection</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Register Your Interest</h2>
          <p className="text-lg font-light opacity-80 leading-relaxed">
            Our luxury property specialists are ready to guide you home. Connect with us for exclusive updates.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 reveal-up">
          {contactItems.map((item, index) => (
            <a 
              key={index} 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white hover:text-[var(--botanical-green)] transition-all duration-500 flex flex-col items-center text-center shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-[var(--botanical-green)]/10 flex items-center justify-center mb-4 transition-colors">
                <div className="text-[var(--gold-accent)]">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                </div>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest opacity-60 mb-1">{item.label}</span>
              <span className="text-sm font-serif font-bold truncate w-full">{item.value}</span>
            </a>
          ))}
        </div>
        
        <div className="mt-12 text-center reveal-up">
          <button className="btn-outline !border-white/30 !text-white hover:!bg-white hover:!text-[var(--botanical-green)] py-3 px-8 text-sm uppercase tracking-widest">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
