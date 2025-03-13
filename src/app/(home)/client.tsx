"use client";

import React from 'react';
import { trpc } from "@/trpc/client";


export const PageClient = () => {

  const [data] = trpc.hello.useSuspenseQuery({

      text: "client!",
    }
  )
  
  return (

    <div>
      Page client says: { data.greeting }
    </div>
  )
}

export default PageClient;