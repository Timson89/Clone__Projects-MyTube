import React from 'react';
import { Button } from '@/components/ui/button';
import { UserCircleIcon } from 'lucide-react';


export const AuthButton = () => {

  // TODO: add different auth states //

  return (

    <Button className='px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none [&_svg]:size-4' variant={'outline'}>
      <UserCircleIcon /> Sign In 
    </Button>
  )
}