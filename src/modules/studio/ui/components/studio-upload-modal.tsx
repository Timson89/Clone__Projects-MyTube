"use client";

import React from 'react';
import { trpc } from '@/trpc/client';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';


export const StudioUploadModal = () => {

  const create = trpc.videos.create.useMutation();

  return (

    <Button variant={'secondary'} onClick={() => create.mutate()}>
      <PlusIcon />
      Create
    </Button>
  )
}