"use client";

import React from 'react';
import { trpc } from '@/trpc/client';
import { DEFAULT_LIMIT } from '@/constants';


export const VideosSection = () => {

  const [data] = trpc.studio.getMany.useSuspenseInfiniteQuery({

      limit: DEFAULT_LIMIT,
    }, {

      getNextPageParam: (lastPage) => lastPage.nextCursor, 
    }
  );

  return (

    <div>
      Videos Section
    </div>
  )
}