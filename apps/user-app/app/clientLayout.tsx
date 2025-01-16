"use client";
import { RecoilRoot } from 'recoil';

 const ClientLayout = ({children}:{children: React.ReactNode}):JSX.Element => {
  return <RecoilRoot>
      {children}
    </RecoilRoot>
  
};

export default ClientLayout;
