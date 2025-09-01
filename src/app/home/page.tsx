import { HomeCarousel } from "@/components/shared/home/home-carousal";
import { Homebanner } from "@/lib/banner";

export default function Home() {
  return (
    <main className="w-full">
      <HomeCarousel items={Homebanner} />
    </main>
  );
}
