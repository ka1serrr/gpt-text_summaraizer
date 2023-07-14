import { FC, ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <div className='main'>
        <div className='gradient'></div>
      </div>
      <div className='app'>{children}</div>
    </>
  );
};
