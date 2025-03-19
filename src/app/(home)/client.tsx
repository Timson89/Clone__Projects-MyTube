"use client";

import React from 'react';
import { trpc } from "@/trpc/client";


export const PageClient = () => {

  const [data] = trpc.categories.getMany.useSuspenseQuery();
  
  return (

    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default PageClient;