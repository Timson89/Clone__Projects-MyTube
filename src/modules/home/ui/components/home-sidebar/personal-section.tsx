"use client";

import React from 'react';
import { HistoryIcon, 
         ListVideoIcon, 
         ThumbsUpIcon
} from "lucide-react";
import { SidebarGroup, 
         SidebarGroupContent, 
         SidebarGroupLabel, 
         SidebarMenu, 
         SidebarMenuButton, 
         SidebarMenuItem 
} from '@/components/ui/sidebar';
import Link from 'next/link';


const items = [

  {
    title: "History",
    url: "/playlists/history",
    icon: HistoryIcon,
    auth: true,
  },
  {
    title: "Liked Videos",
    url: "/playists/liked",
    icon: ThumbsUpIcon,
    auth: true,
  },
  {
    title: "All Playlists",
    url: "/playlists",
    icon: ListVideoIcon,
    auth: true,
  },
];


export const PersonalSection = () => {

  return (

    <SidebarGroup>
      <SidebarGroupLabel></SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          { items.map((item) => (
            
                <SidebarMenuItem key={ item.title }>
                  <SidebarMenuButton
                    tooltip={ item.title }
                    asChild
                    isActive={false} // TODO: change to look at current pathname //
                    onClick={() => {}} // TODO: do something on click //
                  >
                    <Link className='flex items-center gap-4' href={ item.url }>
                      <item.icon />
                      <span className='text-sm'>{ item.title }</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            )
          };
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}