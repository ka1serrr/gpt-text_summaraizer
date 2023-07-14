import { Dispatch, FC, SetStateAction, useState } from 'react';
import styles from './History.module.scss';

import { useSelector } from 'react-redux';
import { TypeRootState } from '@/store/store';
import { IArticle } from '@/common.types';
import { HistoryItem } from './HistoryItem';

interface HistoryProps {
  setArticle: Dispatch<SetStateAction<IArticle>>;
}

export const History: FC<HistoryProps> = ({ setArticle }) => {
  const { articles } = useSelector((state: TypeRootState) => state.articles);

  return (
    <>
      <div className={styles.history}>
        {articles.map((item: IArticle, index) => (
          <HistoryItem setArticle={setArticle} item={item} key={item.url} />
        ))}
      </div>
    </>
  );
};
