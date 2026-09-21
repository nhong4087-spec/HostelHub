import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import TrustStats from '../components/home/TrustStats';
import FeaturedRooms from '../components/home/FeaturedRooms';
import HowItWorks from '../components/home/HowItWorks';
import LandlordCta from '../components/home/LandlordCta';
import '../styles/home.css';

export default function HomePage() {
  return (
    <div className="home">
      <Header />
      <main>
        <Hero />
        <TrustStats />
        <FeaturedRooms />
        <HowItWorks />
        <LandlordCta />
      </main>
      <Footer />
    </div>
  );
}
