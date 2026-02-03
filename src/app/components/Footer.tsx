import { Coffee, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#4E342E] text-[#F5EFE6] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-8 h-8 text-[#CD8B62]" />
              <h3 className="text-2xl font-bold">Cà Phê Nguyên Bản</h3>
            </div>
            <p className="text-[#F5EFE6]/80 leading-relaxed">
              Đậm vị từ nông trại Việt. Mỗi hạt cà phê là một câu chuyện về chất lượng và tâm huyết.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Danh mục</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#F5EFE6]/80 hover:text-[#CD8B62] transition-colors duration-200">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F5EFE6]/80 hover:text-[#CD8B62] transition-colors duration-200">
                  Sản phẩm
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F5EFE6]/80 hover:text-[#CD8B62] transition-colors duration-200">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F5EFE6]/80 hover:text-[#CD8B62] transition-colors duration-200">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Liên hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#CD8B62] mt-0.5 flex-shrink-0" />
                <span className="text-[#F5EFE6]/80">
                  123 Đường Trần Hưng Đạo, Quận 1, TP. Hồ Chí Minh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#CD8B62] flex-shrink-0" />
                <a href="tel:0901234567" className="text-[#F5EFE6]/80 hover:text-[#CD8B62] transition-colors duration-200">
                  090 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#CD8B62] flex-shrink-0" />
                <a href="mailto:hello@caphenghuyenban.vn" className="text-[#F5EFE6]/80 hover:text-[#CD8B62] transition-colors duration-200">
                  hello@caphenghuyenban.vn
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Policies */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kết nối với chúng tôi</h4>
            <div className="flex gap-4 mb-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-[#F5EFE6]/10 rounded-full flex items-center justify-center hover:bg-[#CD8B62] transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-[#F5EFE6]/10 rounded-full flex items-center justify-center hover:bg-[#CD8B62] transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#F5EFE6]/80 hover:text-[#CD8B62] transition-colors duration-200 text-sm">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F5EFE6]/80 hover:text-[#CD8B62] transition-colors duration-200 text-sm">
                  Điều khoản dịch vụ
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F5EFE6]/80 hover:text-[#CD8B62] transition-colors duration-200 text-sm">
                  Chính sách đổi trả
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#F5EFE6]/20 pt-8 text-center">
          <p className="text-[#F5EFE6]/60 text-sm">
            © {currentYear} Cà Phê Nguyên Bản. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
