import { IArticle } from '@/common.types';
import { TypeRootState } from '@/store/store';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { copy, tick } from '@/assets';
import styles from './History.module.scss';

interface HistoryItemProps {
  setArticle: Dispatch<SetStateAction<IArticle>>;
  item: IArticle;
}

export const HistoryItem: FC<HistoryItemProps> = ({ setArticle, item }) => {
  const [copied, setCopied] = useState<string | boolean>('');

  const handleCopy = (copyUrl: string) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div key={item.url} onClick={() => setArticle(item)} className='link_card'>
      <div className='copy_btn' onClick={() => handleCopy(item.url)}>
        <img src={copied === item.url ? tick : copy} alt='copy_img' className={styles.copyIcon} />
      </div>
      <p>{item.url}</p>
    </div>
  );
};
