import Image from "next/image";
import CustomerHomepageCardComponent from "./_components/CustomerHomepageCardComponent";
import ProductHomepageCardComponent from "./_components/ProductHomepageCardComponent";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex gap-[20px]">
        <ProductHomepageCardComponent />
        <CustomerHomepageCardComponent />
      </div>
    </div>
  );
}
