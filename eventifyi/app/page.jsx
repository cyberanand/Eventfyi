import DiscoverSection from '@/components/HomePage/DiscoverSection';
// import EventsCarousel from '@/components/HomePage/EventsCarousel';
import Footer from '@/components/HomePage/Footer';
import Navbar from '@/components/HomePage/Navbar';
import SearchBar from '@/components/HomePage/SearchBar';
import ServiceGrid from '@/components/HomePage/ServiceGrid';
import TestimonialCarousel from '@/components/HomePage/TestimonialCarousel';

export default function Home() {
  return (
    <main>
      <Navbar />
      <SearchBar />

      <DiscoverSection />
      <ServiceGrid />
      <TestimonialCarousel />
      {/* <EventsCarousel /> */}
      <Footer />
    </main>
  );
}