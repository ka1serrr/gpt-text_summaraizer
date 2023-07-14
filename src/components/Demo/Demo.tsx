import { useState, useEffect, FormEvent } from 'react';
import { linkIcon, tick } from '@/assets';
import styles from './Demo.module.scss';
import { IArticle } from '@/common.types';
import { History } from '../History/History';
import { useLazyGetSummaryQuery } from '@/slces/article/article';
import { useDispatch, useSelector } from 'react-redux';
import { addArticle, getArticlesFromLS } from '@/slces/allArticles/allArticles';
import { Result } from '../Result/Result';

export const Demo = () => {
  const [article, setArticle] = useState<IArticle>({
    url: '',
    summary: '',
  });
  const dispatch = useDispatch();

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });

    if (!data?.summary) return;

    const newArticle = { ...article, summary: data.summary };
    setArticle(newArticle);
    dispatch(addArticle(newArticle));
  };

  return (
    <section className={styles.demo}>
      <div className={styles.search}>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <img src={linkIcon} alt='link_icon' className={styles.icon} />

          <input
            type='url'
            placeholder='Enter a URL'
            value={article.url}
            onChange={(e) => {
              setArticle({ ...article, url: e.target.value });
            }}
            required
            className='url_input peer/input'
          />

          <button
            type='submit'
            disabled={isFetching}
            className='submit_btn peer-focus/input:border-gray-700 peer-focus/input:text-gray-700 disabled:border-gray-900 disabled:text-gray-900'
          >
            Submit
          </button>
        </form>
        <History setArticle={setArticle} />
      </div>
      <Result article={article} isFetching={isFetching} error={error} />
    </section>
  );
};
