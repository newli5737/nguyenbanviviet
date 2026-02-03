import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu, X, Coffee } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';

const navLinks = [
    { label: 'Trang chủ', href: '#' },
    { label: 'Sản phẩm', href: '#products' },
    { label: 'Câu chuyện', href: '#story' },
    { label: 'Quy trình', href: '#process' },
    { label: 'Liên hệ', href: '#footer' },
];

export function Header() {
    const { itemCount, openCart } = useCart();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                        ? 'bg-[#4E342E]/95 backdrop-blur-md shadow-xl py-3'
                        : 'bg-transparent py-6'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="flex items-center gap-3"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className={`p-2 rounded-xl ${isScrolled ? 'bg-[#CD8B62]/20' : 'bg-[#F5EFE6]/20'}`}>
                            <Coffee className={`w-7 h-7 ${isScrolled ? 'text-[#CD8B62]' : 'text-[#F5EFE6]'}`} />
                        </div>
                        <span className={`text-2xl font-bold tracking-wide ${isScrolled ? 'text-[#F5EFE6]' : 'text-[#F5EFE6]'
                            }`} style={{ fontFamily: "'Playfair Display', serif" }}>
                            Mộc Coffee
                        </span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                className={`text-sm font-medium transition-colors relative ${isScrolled
                                        ? 'text-[#F5EFE6]/80 hover:text-[#CD8B62]'
                                        : 'text-[#F5EFE6]/80 hover:text-[#F5EFE6]'
                                    }`}
                                whileHover={{ y: -2 }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        {/* Cart Button */}
                        <motion.button
                            onClick={openCart}
                            className={`relative p-3 rounded-full transition-all ${isScrolled
                                    ? 'bg-[#CD8B62]/20 hover:bg-[#CD8B62]/30'
                                    : 'bg-[#F5EFE6]/20 hover:bg-[#F5EFE6]/30'
                                }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ShoppingBag className={`w-5 h-5 ${isScrolled ? 'text-[#CD8B62]' : 'text-[#F5EFE6]'}`} />
                            <AnimatePresence>
                                {itemCount > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        className="absolute -top-1 -right-1 bg-[#CD8B62] text-[#F5EFE6] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                                    >
                                        {itemCount > 9 ? '9+' : itemCount}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>

                        {/* Mobile Menu Toggle */}
                        <motion.button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2"
                            whileTap={{ scale: 0.95 }}
                        >
                            {isMobileMenuOpen ? (
                                <X className={`w-6 h-6 ${isScrolled ? 'text-[#F5EFE6]' : 'text-[#F5EFE6]'}`} />
                            ) : (
                                <Menu className={`w-6 h-6 ${isScrolled ? 'text-[#F5EFE6]' : 'text-[#F5EFE6]'}`} />
                            )}
                        </motion.button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-x-0 top-[72px] z-40 bg-[#4E342E]/98 backdrop-blur-lg md:hidden"
                    >
                        <nav className="flex flex-col p-6 gap-4">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg text-[#F5EFE6] py-3 border-b border-[#F5EFE6]/10 hover:text-[#CD8B62] transition-colors"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
