import { SidebarButton } from "@/components/ui/sidebar-button";
import { LayoutGridIcon, PackageIcon, ShoppingBasketIcon } from "lucide-react";

export const SideBar = () => {
  return (
    <div className="w-64 bg-white p-2 text-black">
      {/* Logo */}
      <div className="px-8 py-6">
        <h1 className="text-2xl font-black">STOCKLY</h1>
      </div>
      {/* Botôes */}
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton href="/">
          <LayoutGridIcon size={20} />
          Dashboard
        </SidebarButton>

        <SidebarButton href="/products">
          <PackageIcon size={20} />
          Produtos
        </SidebarButton>

        <SidebarButton href="/sales">
          <ShoppingBasketIcon size={20} />
          Vendas
        </SidebarButton>
      </div>
    </div>
  );
};
