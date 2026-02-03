import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

function formatPrice(price: number): string {
    return new Intl.NumberFormat('vi-VN').format(price) + '₫';
}

export function CartDrawer() {
    const { items, isOpen, closeCart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-[#F5EFE6] z-50 shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-[#4E342E]/10">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-[#4E342E] rounded-xl">
                                    <ShoppingBag className="w-5 h-5 text-[#F5EFE6]" />
                                </div>
                                <h2 className="text-2xl font-bold text-[#4E342E]">Giỏ hàng</h2>
                            </div>
                            <motion.button
                                onClick={closeCart}
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 hover:bg-[#4E342E]/10 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-[#4E342E]" />
                            </motion.button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {items.length === 0 ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex flex-col items-center justify-center h-full text-center"
                                >
                                    <div className="p-6 bg-[#4E342E]/10 rounded-full mb-6">
                                        <ShoppingBag className="w-16 h-16 text-[#4E342E]/40" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#4E342E] mb-2">
                                        Giỏ hàng trống
                                    </h3>
                                    <p className="text-[#6B705C]">
                                        Hãy khám phá các sản phẩm cà phê tuyệt vời của chúng tôi
                                    </p>
                                </motion.div>
                            ) : (
                                <div className="space-y-4">
                                    <AnimatePresence>
                                        {items.map((item) => (
                                            <motion.div
                                                key={item.id}
                                                layout
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20, height: 0 }}
                                                className="bg-white rounded-2xl p-4 shadow-md"
                                            >
                                                <div className="flex gap-4">
                                                    {/* Image */}
                                                    <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                                                        <ImageWithFallback
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>

                                                    {/* Info */}
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="font-semibold text-[#4E342E] text-sm mb-1 truncate">
                                                            {item.name}
                                                        </h4>
                                                        <p className="text-[#CD8B62] font-bold mb-3">
                                                            {item.price}
                                                        </p>

                                                        {/* Quantity Controls */}
                                                        <div className="flex items-center gap-3">
                                                            <motion.button
                                                                whileHover={{ scale: 1.1 }}
                                                                whileTap={{ scale: 0.9 }}
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                className="p-1.5 bg-[#F5EFE6] rounded-lg hover:bg-[#4E342E]/10 transition-colors"
                                                            >
                                                                <Minus className="w-4 h-4 text-[#4E342E]" />
                                                            </motion.button>
                                                            <span className="text-[#4E342E] font-semibold min-w-[24px] text-center">
                                                                {item.quantity}
                                                            </span>
                                                            <motion.button
                                                                whileHover={{ scale: 1.1 }}
                                                                whileTap={{ scale: 0.9 }}
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                className="p-1.5 bg-[#F5EFE6] rounded-lg hover:bg-[#4E342E]/10 transition-colors"
                                                            >
                                                                <Plus className="w-4 h-4 text-[#4E342E]" />
                                                            </motion.button>

                                                            <motion.button
                                                                whileHover={{ scale: 1.1 }}
                                                                whileTap={{ scale: 0.9 }}
                                                                onClick={() => removeFromCart(item.id)}
                                                                className="ml-auto p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                                            >
                                                                <Trash2 className="w-4 h-4" />
                                                            </motion.button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-6 bg-white border-t border-[#4E342E]/10">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-[#6B705C]">Tạm tính:</span>
                                    <span className="text-2xl font-bold text-[#4E342E]">
                                        {formatPrice(totalPrice)}
                                    </span>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-[#4E342E] text-[#F5EFE6] py-4 rounded-2xl font-semibold text-lg shadow-lg hover:bg-[#3d2a25] transition-colors mb-3"
                                >
                                    Thanh toán
                                </motion.button>

                                <button
                                    onClick={clearCart}
                                    className="w-full text-[#6B705C] py-2 text-sm hover:text-[#4E342E] transition-colors"
                                >
                                    Xóa tất cả
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
