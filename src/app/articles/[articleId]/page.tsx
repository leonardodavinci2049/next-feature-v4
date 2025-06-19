'use client';
import Link from "next/link";
import { use } from "react";


interface Props {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang: string }>;
}

const NewsArticlePage = ({ params, searchParams }: Props) => {
  const { articleId } = use(params);
  const { lang = "eng" } =  use(searchParams);

  return (
    <div>
      <h1>News Articles ID: {articleId}</h1>
      <p>Reading in Language: {lang}</p>
      <div className="flex flex-col md:flex-row gap-2">
        <Link
          href={`/articles/1?lang=en`}
          className="text-blue-500 hover:underline"
        >
          English
        </Link>
        <Link
          href={`/articles/2?lang=pt`}
          className="text-blue-500 hover:underline ml-4"
        >
          Português
        </Link>
        <Link
          href={`/articles/3?lang=es`}
          className="text-blue-500 hover:underline ml-4"
        >
          Spanish
        </Link>
        <Link
          href={`/articles/4?lang=fr`}
          className="text-blue-500 hover:underline ml-4"
        >
          French
        </Link>
      </div>
    </div>
  );
};

export default NewsArticlePage;
