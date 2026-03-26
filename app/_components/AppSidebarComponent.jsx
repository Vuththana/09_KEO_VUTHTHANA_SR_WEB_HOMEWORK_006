"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  BookOpen,
  LayoutDashboard,
  Settings,
  ShoppingBagIcon,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const data = [
  { title: "Products", icon: <LayoutDashboard />, href: "/products" },
  { title: "Customers", icon: <Users />, href: "/customers" },
  { title: "Categories", icon: <BookOpen />, href: "/categories" },
  { title: "Settings", icon: <Settings />, href: "/settings" },
];

export default function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon" className={"fixed left-0 z-999"}>
      <SidebarHeader className={"-mx-1"}>
        <div className="flex items-center gap-[10px]">
          <Link className="p-2 bg-blue-300 w-10 rounded-[10px] shadow-md" href={"/"}>
            <ShoppingBagIcon className="text-white" />
          </Link>
          <div className="group-data-[collapsible=icon]:hidden">
            <p className="text-blue-300 font-[900]">
              HRD <span className="text-blue-600">SHOP</span>
            </p>
            <p className="text-[12px] tracking-wide">ADMIN V2.0</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className={"p-2"}>
        <SidebarMenu className={"flex gap-[10px]"}>
          <SidebarMenuItem
            className={"group-data-[collapsible=icon]:hidden px-2"}
          >
            <span className="text-[12px] font-gray-300">MAIN MENU</span>
          </SidebarMenuItem>
          {data.map((item, index) => {
            return (
              <SidebarMenuItem
                key={index}
                className={"text-blue-300 font-[500]"}
              >
                <SidebarMenuButton
                  className={`h-[40px] hover:bg-blue-100 ${
                    pathname === item.href ? "bg-blue-200" : ""
                  }`}
                >
                  <Link
                    href={item.href}
                    className={`flex gap-[10px] text-[16px] w-full items-center ${
                      pathname === item.href ? "text-white" : "text-black"
                    }`}
                  >
                    {item.icon}
                    <span
                      className={`group-data-[collapsible=icon]:hidden ${
                        pathname === item.href ? "text-white" : "text-black"
                      }`}
                    >
                      {item.title}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
