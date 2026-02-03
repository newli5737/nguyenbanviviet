import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1576266448917-992547cdaa2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBmYXJtJTIwbGFuZHNjYXBlJTIwbW91bnRhaW5zfGVufDF8fHx8MTc3MDA4OTY3NHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Nông trại cà phê Việt Nam"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#4E342E]/60 via-[#4E342E]/40 to-[#4E342E]/70" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#F5EFE6] mb-6 tracking-wide">
            Cà Phê Nguyên Bản
          </h1>
          <p className="text-xl md:text-2xl text-[#F5EFE6]/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Đậm vị từ nông trại Việt
          </p>
          <p className="text-base md:text-lg text-[#F5EFE6]/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Từng hạt cà phê được chọn lọc và rang thủ công, mang trọn hương vị tự nhiên.
          </p>

          <motion.a
            href="#products"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#CD8B62] text-[#F5EFE6] px-10 py-4 rounded-full font-medium text-lg shadow-2xl hover:bg-[#B8860B] transition-all duration-300 hover:shadow-[#CD8B62]/50"
          >
            Khám phá ngay
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-8 h-8 text-[#F5EFE6]/70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
