import { motion } from 'motion/react';
import { Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="min-h-[50vh] flex flex-col items-center justify-center bg-[#f5f2ed] py-20 px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-8"
      >
        <h2 className="text-4xl font-serif mb-12">联系方式 / Contact</h2>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center">
          <a href="tel:+8619538886303" className="flex flex-col items-center gap-4 group">
            <div className="w-16 h-16 rounded-full border border-zinc-300 flex items-center justify-center group-hover:bg-[#1a1a1a] group-hover:text-[#f5f2ed] transition-colors">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-sm text-zinc-500 uppercase tracking-widest mb-1">Phone</p>
              <p className="text-xl font-serif">+86 195 3888 6303</p>
            </div>
          </a>
          
          <a href="mailto:369151854@qq.com" className="flex flex-col items-center gap-4 group">
            <div className="w-16 h-16 rounded-full border border-zinc-300 flex items-center justify-center group-hover:bg-[#1a1a1a] group-hover:text-[#f5f2ed] transition-colors">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm text-zinc-500 uppercase tracking-widest mb-1">Email</p>
              <p className="text-xl font-serif">369151854@qq.com</p>
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
