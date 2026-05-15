import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Hizmetler from "../components/Hizmetler";
import Araclar from "../components/Araclar";
import Ekip from "../components/Ekip";
import Yorumlar from "../components/Yorumlar";
import Iletisim from "../components/Iletisim";
import Randevu from "../components/Randevu";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hizmetler />
      <Araclar />
      <Ekip />
      <Yorumlar />
      <Iletisim />
      <Randevu />
      <Footer />
    </div>
  );
}
