import { CartProvider } from '@/app/context/CartContext';
import { ToastProvider } from '@/app/context/ToastContext';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { Products } from '@/app/components/Products';
import { Story } from '@/app/components/Story';
import { Process } from '@/app/components/Process';
import { Testimonials } from '@/app/components/Testimonials';
import { Footer } from '@/app/components/Footer';
import { CartDrawer } from '@/app/components/CartDrawer';

export default function App() {
  return (
    <CartProvider>
      <ToastProvider>
        <div className="min-h-screen">
          <Header />
          <Hero />
          <Products />
          <Story />
          <Process />
          <Testimonials />
          <Footer />
          <CartDrawer />
        </div>
      </ToastProvider>
    </CartProvider>
  );
}
