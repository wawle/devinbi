import ServicesList from "./components/services-list";
import Hero from "./components/hero";
import Bounded from "@/components/bounded";

export default async function ServicesPage() {
  return (
    <Bounded className="flex min-h-screen flex-col items-center justify-between py-12">
      <Hero />
      <ServicesList />
    </Bounded>
  );
}
