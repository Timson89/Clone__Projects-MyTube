import React from 'react';


interface LayoutProps {

  children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {

  return (

    <div>
      <div className='p-4 bg-rose-500 w-full'>
        I am NaviBar
      </div>
      {children}
    </div>
  )
}

export default Layout;