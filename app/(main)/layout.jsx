import React from 'react'
import AppNavbar from '../_components/NavbarComponent'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import AppSidebar from '../_components/AppSidebarComponent'


export default function layout({children}) {
  return (
    <div>
        <AppNavbar />
        <SidebarProvider>
            <AppSidebar />
            <div className='w-full'>
                <SidebarTrigger />
                {children}
            </div>
        </SidebarProvider>
    </div>
  )
}
