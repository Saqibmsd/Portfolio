import { CartProvider } from './context/CartContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {/* Header is inside the provider so it can see the cart count */}
          <Header />
          
          <main>
            {children}
          </main>
          
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}