import { Hero } from '@/components/Hero/Hero';
import { Demo } from '@/components/Demo/Demo';
import { Wrapper } from '@/components/Wrapper/Wrapper';

export const App = () => {
  return (
    <Wrapper>
      <Hero />
      <Demo />
    </Wrapper>
  );
};
