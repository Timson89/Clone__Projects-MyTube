"use client";

import React, { useEffect } from 'react';


const Page = () => {

  useEffect(() => { console.log('Rendering here!') }, [])

  return (

    <div>Feed page!</div>
  )
}

export default Page;