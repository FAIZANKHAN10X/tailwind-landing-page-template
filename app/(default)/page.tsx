export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />

      <main className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Your Landing Page</h1>
        <p className="text-lg text-gray-600">This is your content area.</p>
      </main>

      <Footer />
    </>
  );
}
