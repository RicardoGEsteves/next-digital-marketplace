import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Your marketplace for high-quality{" "}
          <span className="text-blue-600">digital assets</span>.
        </h1>

        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Welcome to your Next Digital Marketplace. Every asset on our platform
          is verified by our team to ensure our highest quality standards.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/products" className={buttonVariants()}>
            Browse Trending
          </Link>
          <Button>Our quality promise &rarr;</Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
