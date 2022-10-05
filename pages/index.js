import Head from "next/head";
import Layout, {siteTitle} from "../components/layout";
import {getSortedPostsData} from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="my-8">
        <p className="indent-4">
          Hi! My name is Jenelle but many call me Jen. I want to share to you short stories of <span className="font-bold">my jobs</span>. It's just a glimpse of my day to day routine in my work but I hope you enjoy reading my journey in my career life.
        </p>
        <br />
      </section>

      <section>
        <h2 className="text-xl stroke text-d-gray font-bold mb-4 text-center">Blog List</h2>
        <ul>
          {allPostsData.map(({id, date, title}) => (
            <li key={id} className="mb-4 border-b bg-[rgba(25,255,255,0.2)] rounded-md p-2">
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
