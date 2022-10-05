import Layout from "../../components/layout";
import {getAllPostIds, getPostData} from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({postData}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="mt-8">
        <h1 className="text-d-gray font-bold stroke">{postData.title}</h1>
        <div className="text-d-gray font-bold stroke">
          <Date dateString={postData.date} />
        </div>
        <div className="mt-4" dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
      </article>
    </Layout>
  );
}
