import { motion } from 'motion/react';
import { Sprout, Flame, CircleDot, Package } from 'lucide-react';
import { useInView } from '@/app/hooks/useInView';

const steps = [
  {
    icon: Sprout,
    title: 'Thu hoạch',
    description: 'Chọn lọc từng quả cà phê chín mọng bằng tay từ vùng cao nguyên',
  },
  {
    icon: Flame,
    title: 'Rang',
    description: 'Rang thủ công với nhiệt độ và thời gian được tính toán tỉ mỉ',
  },
  {
    icon: CircleDot,
    title: 'Xay',
    description: 'Xay theo từng đợt nhỏ để giữ trọn hương thơm tươi mới',
  },
  {
    icon: Package,
    title: 'Đóng gói',
    description: 'Đóng gói kín khít, giao đến tay bạn trong vòng 48 giờ',
  },
];

export function Process() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="process" ref={ref} className="py-24 px-6 md:px-12 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#4E342E] mb-4">
            Quy trình rang xay
          </h2>
          <p className="text-lg text-[#6B705C] max-w-2xl mx-auto">
            Mỗi bước đều được thực hiện với sự tận tâm và tỉ mỉ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#CD8B62] text-[#F5EFE6] mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                >
                  <Icon className="w-10 h-10" strokeWidth={1.5} />
                </motion.div>

                <h3 className="text-2xl font-semibold text-[#4E342E] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#6B705C] leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-[#CD8B62]/30"
                    style={{ transform: 'translateX(50%)' }} />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
