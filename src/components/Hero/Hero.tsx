import styles from './Hero.module.scss';
import { Navigation } from '@/components/Navigation/Navigation';
export const Hero = () => {
  return (
    <header className={styles.header}>
      <Navigation />

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' /> <span className='orange_gradient'>OpenAi GPT-4</span>
      </h1>

      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into
        clear and concise summaries
      </h2>
    </header>
  );
};
