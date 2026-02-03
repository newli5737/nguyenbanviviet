import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Star } from 'lucide-react';
import { useInView } from '@/app/hooks/useInView';

const testimonials = [
  {
    id: 1,
    name: 'Minh Anh',
    role: 'Chủ quán cà phê',
    avatar: 'https://images.unsplash.com/photo-1728226773024-be0c48f8ee50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwd29tYW4lMjBzbWlsaW5nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwMDg5Nzc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    review: 'Cà phê ở đây thực sự khác biệt! Hương thơm tự nhiên, vị đậm đà mà không bị gắt. Khách hàng của tôi rất thích và luôn hỏi nguồn gốc. Tôi tự hào giới thiệu Cà Phê Nguyên Bản.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Tuấn Kiệt',
    role: 'Doanh nhân',
    avatar: 'https://images.unsplash.com/photo-1738566061505-556830f8b8f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG1hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDAzNDAzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    review: 'Là người uống cà phê mỗi ngày, tôi khá khó tính. Nhưng khi thử Robusta đậm vị của Cà Phê Nguyên Bản, tôi biết mình đã tìm được loại cà phê hoàn hảo. Chất lượng ổn định, đáng tin cậy.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Thu Hằng',
    role: 'Nhân viên văn phòng',
    avatar: 'https://images.unsplash.com/photo-1700577048129-758d3be20f96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIweW91bmclMjB3b21hbiUyMGhhcHB5fGVufDF8fHx8MTc3MDA4OTc3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    review: 'Mình thích pha phin buổi sáng và blend Phin truyền thống này quá tuyệt! Mùi thơm lan tỏa khắp phòng, vị cà phê đậm đà nhưng rất êm. Cảm ơn đã mang đến sản phẩm tuyệt vời như vậy.',
    rating: 5,
  },
];

export function Testimonials() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#4E342E] mb-4">
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="text-lg text-[#6B705C] max-w-2xl mx-auto">
            Những chia sẻ chân thật từ người yêu cà phê
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-[#F5EFE6] rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#B8860B] text-[#B8860B]"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-[#4E342E] leading-relaxed mb-6 italic">
                "{testimonial.review}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#CD8B62]/30">
                  <ImageWithFallback
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#4E342E]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-[#6B705C]">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
