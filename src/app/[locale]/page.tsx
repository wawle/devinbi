import Bento from "@/components/homepage/bento";
import Hero from "@/components/homepage/hero";
import Tech from "@/components/homepage/tech";

const Home = () => {
  return (
    <div className="space-y-12">
      <Hero />
      <Bento />
      <Tech />
    </div>
  );
};

export default Home;
