import ServicesList from "./components/services-list";
import Hero from "./components/hero";
import Bounded from "@/components/bounded";
import StarGrid from "@/components/star-grid";

export default async function ServicesPage() {
  return (
    <Bounded className="relative flex min-h-screen flex-col items-center justify-between py-12">
      <StarGrid />
      <Hero />
      <ServicesList />
    </Bounded>
  );
}
