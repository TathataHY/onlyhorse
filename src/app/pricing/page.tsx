import BaseLayout from "@/components/base-layout";
import Pricing from "@/components/pricing";

export default async function PricingPage() {
  return (
    <BaseLayout renderRightPanel={false}>
      <Pricing />
    </BaseLayout>
  );
}
