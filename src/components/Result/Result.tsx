import { IArticle } from '@/common.types';
import styles from './Result.module.scss';
import { FC } from 'react';
import { loader } from '@/assets';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

interface ResultProps {
  isFetching: boolean;
  article: IArticle;
  error?: FetchBaseQueryError | SerializedError;
}

export const Result: FC<ResultProps> = ({ isFetching, article, error }) => {
  return (
    <div className={styles.result}>
      {isFetching ? (
        <img className={styles.loader} src={loader} alt='loader_icon' />
      ) : error ? (
        <p className={styles.error}>
          Well... that's was not supposed to happen <br />
          {/* @ts-ignore */}
          <span>{error?.data?.error}</span>
        </p>
      ) : (
        article.summary && (
          <div className={styles.articleSummary}>
            <h2 className={styles.summaryTitle}>
              Article <span className='blue_gradient'>Summary</span>
            </h2>
            <div className='summary_box'>
              <p className={styles.summaryText}>{article.summary}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};
