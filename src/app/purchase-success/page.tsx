import BaseLayout from "@/components/base-layout";
import PurchaseSummary from "./purchase-summary";

export default async function Page() {
  return (
    <BaseLayout>
      <PurchaseSummary />
    </BaseLayout>
  );
}
