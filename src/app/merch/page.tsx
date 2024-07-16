import BaseLayout from "@/components/base-layout";
import UnderlinedText from "@/components/decorators/underlined-text";
import ProductCard from "@/components/product-card";
import prisma from "@/lib/db";

export default async function MerchPage() {
  const products = await prisma.product.findMany({
    where: {
      isArchived: false,
    },
  });

  return (
    <BaseLayout renderRightPanel={false}>
      <div className="px-3 md:px-10 my-10">
        <h1 className="text-3xl text-center my-5 font-bold tracking-tight">
          Our{" "}
          <UnderlinedText className="decoration-wavy">Products</UnderlinedText>
        </h1>

        <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </BaseLayout>
  );
}
