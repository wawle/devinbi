import Bento from "./components/bento";
import Hero from "./components/hero";
import Tech from "./components/tech";

const Home = () => {
  return (
    <div className="space-y-12">
      <Tech />
      <Hero />
      <Bento />
    </div>
  );
};

export default Home;
