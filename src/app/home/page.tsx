import { HomeCarousel } from "@/components/shared/home/home-carousal";
import { HomeCard } from "@/components/shared/home/home-cart";
import { getAllCategory, getProductFormCard } from "@/lib/actions/product.actions";
import { Homebanner } from "@/lib/banner";
import { toSlug } from "@/lib/utils";

export default async function Home() {  // 👈 yahan async lagana zaroori hai

  const categories = (await getAllCategory()).slice(0,4);

  const newArrivals = await getProductFormCard({ tag: "new-arrival", limit: 4 });

  const featureds = await getProductFormCard({ tag: "featured", limit: 4 });

  const bestSellers = await getProductFormCard({ tag: "best-seller", limit: 4 });

  const cards = [
    {
      title: "Categories to explore",
      link: {
        text: "See More",
        href: "/product",
      },
      items: categories.map((category) => ({
        name: category,
        image: `/products/${toSlug(category)}.jpg`,
        href: `/product?category=${category}`,
      })),
    },
    {
      title: "Explore New Arrivals",
      items: newArrivals,
      link: {
        text: "View All",
        href: "/product?tag=new-arrival",
      },
    },
    {
      title: "Discover Best Sellers",
      items: bestSellers,
      link: {
        text: "View All",
        href: "/product?tag=best-seller", // 👈 tumne galti se yahan "new-arrival" likha tha
      },
    },
    {
      title: "Featured Products",
      items: featureds,
      link: {
        text: "Shop Now",
        href: "/product?tag=featured", // 👈 yahan bhi galti thi, plural ka mismatch
      },
    },
  ];

  return (
    <div>
      <HomeCarousel items={Homebanner} />
      <div className="md:p-4 md:space-y-4 bg-border">
        <HomeCard cards={cards} />
        </div>
        </div>
  );
}
