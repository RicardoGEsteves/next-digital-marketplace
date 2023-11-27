import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Get your assets delivered to your email in seconds and download them right away.",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description:
      "Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? we offer a 30-days refund guarantee.",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description:
      "We've pledge 1% of sales to the preservation and restoration of the natural environment.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Empowering Developers, Unleashing{" "}
            <span className="text-blue-600">Innovation</span>.
          </h1>

          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to Your Digital Marketplace, the ultimate hub for developers
            seeking the tools and resources to fuel their creative genius. Dive
            into a world of innovation, where cutting-edge software products
            await discovery and opportunity knocks at every click. Join our
            thriving community of developers and tech enthusiasts. Buy or sell
            meticulously crafted software creations, collaborate with
            like-minded minds, and transform your ideas into reality. Discover
            the perfect asset to boost your workflow or turn your brainchild
            into the next big thing. At Digital Marketplace, innovation knows no
            bounds.
          </p>

          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Find your next breakthrough. Find your community. Find it all, right
            here at Digital Marketplace.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              {/* TODO: create trending page */}
              Browse Trending
            </Link>
            {/* TODO: create quality promise page */}
            <Button variant={"ghost"}>Our quality promise &rarr;</Button>
          </div>
        </div>

        <ProductReel
          title="New Product"
          subtitle="something about the product"
          href="'/products?sort=recent'"
          query={{ sort: "desc", limit: 4 }}
        />
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0 ">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
