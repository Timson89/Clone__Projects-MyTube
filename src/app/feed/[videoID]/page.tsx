import React from 'react';


interface PageProps {

  params: Promise <{ videoID: string }>;
}

const Page = async ({ params }: PageProps) => {

  const { videoID } = await params;

  return (

    <div>VideoID: { videoID }</div>
  )
}

export default Page;