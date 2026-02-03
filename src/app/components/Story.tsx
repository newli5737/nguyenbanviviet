import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useInView } from '@/app/hooks/useInView';

export function Story() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="story" ref={ref} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1762657424841-7b5166d5d54c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwaGFuZHMlMjBjb2ZmZWUlMjBwcmVwYXJhdGlvbnxlbnwxfHx8fDE3NzAwODk2NzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Quy trình pha cà phê thủ công"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4E342E]/30 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#4E342E] mb-6">
              Câu chuyện của chúng tôi
            </h2>
            <div className="space-y-6 text-[#6B705C] leading-relaxed">
              <p>
                <strong className="text-[#4E342E]">Cà Phê Nguyên Bản</strong> ra đời từ niềm đam mê với hương vị cà phê thuần khiết của Việt Nam. Chúng tôi tin rằng, mỗi tách cà phê không chỉ là đồ uống, mà còn là câu chuyện về con người, về đất đai và tình yêu với nghề.
              </p>
              <p>
                Từ những vùng cao nguyên Tây Nguyên, nơi đất đỏ bazan màu mỡ nuôi dưỡng những hạt cà phê chất lượng, chúng tôi trực tiếp làm việc với các nông dân địa phương. Mỗi hạt cà phê được thu hoạch bằng tay, chọn lọc kỹ lưỡng, đảm bảo chỉ những quả chín mọng nhất mới được sử dụng.
              </p>
              <p>
                Quy trình rang xay của chúng tôi được thực hiện thủ công, với sự tỉ mỉ từng chi tiết. Chúng tôi không ngừng thử nghiệm để tìm ra độ rang hoàn hảo, giữ trọn hương thơm tự nhiên và vị đắng ngọt đặc trưng của từng loại hạt.
              </p>
              <p className="text-[#CD8B62] font-semibold italic">
                "Từ nông trại đến ly cà phê của bạn - hành trình của sự chân thật"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
