import Image from "next/image";
import CustomerHomepageCardComponent from "./_components/CustomerHomepageCardComponent";
import ProductHomepageCardComponent from "./_components/ProductHomepageCardComponent";
import AppNavbar from "./_components/NavbarComponent";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./_components/AppSidebarComponent";

export default async function Home() {
  return (
    <div>
      <AppNavbar />
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <div className="flex flex-col flex-1 items-center justify-center font-sans">
          <div className="flex gap-[20px] p-10">
            <ProductHomepageCardComponent />
            <CustomerHomepageCardComponent />
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}
