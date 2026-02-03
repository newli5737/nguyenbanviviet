import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ShoppingCart, Check } from 'lucide-react';
import { useInView } from '@/app/hooks/useInView';
import { useCart } from '@/app/context/CartContext';
import { useToast } from '@/app/context/ToastContext';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Cà phê Arabica rang vừa',
    description: 'Hương thơm tinh tế, vị chua nhẹ đặc trưng từ vùng cao Đà Lạt',
    price: '245.000₫',
    priceNumber: 245000,
    image: 'https://images.unsplash.com/photo-1627060063885-e1a30ab40551?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmFiaWNhJTIwY29mZmVlJTIwYmVhbnMlMjByb2FzdGVkfGVufDF8fHx8MTc3MDA4OTY3MHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    name: 'Cà phê Robusta đậm vị',
    description: 'Đậm đà mạnh mẽ, hậu vị đắng ngọt từ Tây Nguyên',
    price: '195.000₫',
    priceNumber: 195000,
    image: 'https://images.unsplash.com/photo-1710082336769-618ecffe6e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2J1c3RhJTIwY29mZmVlJTIwYmVhbnMlMjBkYXJrfGVufDF8fHx8MTc3MDA4OTY3MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    name: 'Cà phê Phin truyền thống',
    description: 'Blend đặc biệt dành riêng cho phin, hương vị đậm Việt',
    price: '215.000₫',
    priceNumber: 215000,
    image: 'https://images.unsplash.com/photo-1671468158321-93fa8aa3fdf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwcGhpbiUyMGZpbHRlciUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc3MDA4OTY3NXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    name: 'Cà phê Moka đặc sản',
    description: 'Hạt Moka quý hiếm từ vùng Cầu Đất, hương thơm đặc trưng',
    price: '320.000₫',
    priceNumber: 320000,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2thJTIwY29mZmVlJTIwYmVhbnN8ZW58MXx8fHwxNzMwMDg5Njc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 5,
    name: 'Blend Sữa Đá tuyệt hảo',
    description: 'Pha trộn hoàn hảo cho ly cà phê sữa đá đúng vị Sài Gòn',
    price: '185.000₫',
    priceNumber: 185000,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwaWNlZCUyMGNvZmZlZXxlbnwxfHx8fDE3MzAwODk2NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 6,
    name: 'Cà phê Espresso đậm đặc',
    description: 'Rang đậm theo phong cách Ý, thích hợp cho máy pha',
    price: '275.000₫',
    priceNumber: 275000,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGJlYW5zfGVufDF8fHx8MTczMDA4OTY3NXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Products() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const [addedItemId, setAddedItemId] = useState<number | null>(null);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product);
    setAddedItemId(product.id);
    showToast(`Đã thêm "${product.name}" vào giỏ hàng`);

    // Reset button state after animation
    setTimeout(() => setAddedItemId(null), 1500);
  };

  return (
    <section id="products" ref={ref} className="py-24 px-6 md:px-12 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#4E342E] mb-4">
            Sản phẩm nổi bật
          </h2>
          <p className="text-lg text-[#6B705C] max-w-2xl mx-auto">
            Những dòng cà phê tinh túy, được rang xay thủ công mỗi ngày
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-72 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#4E342E] mb-3">
                  {product.name}
                </h3>
                <p className="text-[#6B705C] mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#CD8B62]">
                    {product.price}
                  </span>
                  <motion.button
                    onClick={() => handleAddToCart(product)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${addedItemId === product.id
                      ? 'bg-green-600 text-white'
                      : 'bg-[#4E342E] text-[#F5EFE6] hover:bg-[#6B705C]'
                      }`}
                  >
                    {addedItemId === product.id ? (
                      <>
                        <Check className="w-5 h-5" />
                        <span>Đã thêm!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-5 h-5" />
                        <span>Thêm vào giỏ</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
