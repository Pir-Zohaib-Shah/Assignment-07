'use client'
import { useState } from 'react';
import { CircleUserRound, LifeBuoy, Heart, CheckCircle, Tags, Ruler, HelpCircle, ChevronDown, Home } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    style: "margin-top: 15px",
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Brands",
    url: "brands",
    icon: Tags,
  },
  {
    title: "Originality",
    url: "originality",
    icon: CheckCircle,
  },
  {
    title: "Wish list",
    url: "wish-list",
    icon: Heart,
  },
  {
    title: "Size Guide",
    url: "sizeguide",
    icon: Ruler,
  },
  {
    title: "Customer Support",
    url: "/customer-support",
    icon: LifeBuoy,
  },
  {
    title: "Login / Create Account",
    url: "auth",
    icon: CircleUserRound,
  },
  {
    title: "Need Help?",
    url: "#",
    icon: HelpCircle,
  },
];

export function AppSidebar() {
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const toggleHelp = () => {
    setIsHelpOpen(!isHelpOpen);
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mt-4 text-base">Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="pt-8 space-y-2">
              {items.map((item) => (
                item.title === "Need Help?" ? (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton onClick={toggleHelp} asChild>
                      <button className="flex items-center w-full">
                        <item.icon />
                        <span className="flex-1">{item.title}</span>
                        <ChevronDown 
                          className={`transform transition-transform duration-200 ${isHelpOpen ? 'rotate-180' : ''}`} 
                          size={16} 
                        />
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="flex items-center">
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className={`overflow-hidden transition-all ${isHelpOpen ? 'max-h-screen -mt-4 bg-gray-100 rounded ' : 'max-h-0'}`}></div>
        {isHelpOpen && (
          <>
            <p className='text-sm px-2 pt-1'>Email: Shahzohaib0987@gmail.com</p>          
            <p className='text-sm px-2 pt-1'>Phone: 0321-8978713</p>        
          </>
          
        )}
      </SidebarContent>
    </Sidebar>
  );
}
