"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ClapperboardIcon, UserCircleIcon } from 'lucide-react';
import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';


export const AuthButton = () => {

  return (

    <>

      <SignedIn> 
        <UserButton>
          <UserButton.MenuItems>
            {/* TODO: add user profile menu button */}
            <UserButton.Link
              label='Studio'
              href='/studio'
              labelIcon={<ClapperboardIcon className='size-4' />}
            />
            <UserButton.Action label='manageAccount' />
          </UserButton.MenuItems>
        </UserButton>
      </SignedIn>
      
      <SignedOut>
        <SignInButton>
          <Button className='px-4 py-2 
                             text-sm font-medium 
                             text-blue-600 
                             hover:text-blue-500 
                             border-blue-500/20 
                             rounded-full 
                             shadow-none 
                             [&_svg]:size-4' 
                             variant={'outline'}>
                              
            <UserCircleIcon /> Sign In 
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  )
}