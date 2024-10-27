import React from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

const Sidebar_provider = () => {
  return (
    <div> <SidebarProvider>
    <AppSidebar />
    <main>
      <div className='flex'>
      <SidebarTrigger className='mt-[14px]'/>
        </div>
    </main>
  </SidebarProvider></div>
  )
}

export default Sidebar_provider