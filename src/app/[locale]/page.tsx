import Bento from "@/components/homepage/bento";
import Hero from "@/components/homepage/hero";
import Tech from "@/components/homepage/tech";
import { Locale } from "@/lib/locales";

const Home = ({ params }: { params: { locale: Locale } }) => {
  return (
    <div className="space-y-12">
      <Hero />
      <Bento />
      <Tech />
    </div>
  );
};

export default Home;
