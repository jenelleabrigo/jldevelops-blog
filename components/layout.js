import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {useParallax} from "react-scroll-parallax";
import {useRef} from "react";

const name = "Jen's Blog";
export const siteTitle = "Jen's Career Blog | A Next.js Website";

export default function Layout({children, home}) {
  const target = useRef(null);
  const skyline = useParallax({
    speed: 10,
    targetElement: target.current,
    translateX: [10, -50],
    translateY: [0, 0],
  });
  const clouds_1 = useParallax({
    speed: 10,
    targetElement: target.current,
    translateX: [-80, 200],
    translateY: [0, 0],
  });
  const clouds_2 = useParallax({
    speed: 30,
    targetElement: target.current,
    translateX: [100, -200],
    translateY: [0, 0],
  });
  const clouds_3 = useParallax({
    speed: 10,
    targetElement: target.current,
    translateX: [-180, 150],
    translateY: [0, 0],
  });
  const clouds_4 = useParallax({
    speed: 10,
    targetElement: target.current,
    translateX: [50, -100],
    translateY: [0, 0],
  });

  return (
    <div ref={target} className="h-full w-full py-10 px-4 bg-gradient realative">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="" />
        <meta name="og:image" content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* PARALLAX */}
      <div ref={skyline.ref} className="h-[10rem] w-[300%] opacity-50 fixed bottom-[-3px] bg-skyline bg-repeat-x bg-center bg-contain"></div>
      <div ref={clouds_1.ref} className="fixed opacity-50" style={{top: "-10vh", left: "5vw"}}>
        <Image src={"/images/clouds.svg"} height={300} width={300} />
      </div>
      <div ref={clouds_2.ref} className="fixed opacity-50" style={{top: "11vh", left: "20vw"}}>
        <Image src={"/images/clouds.svg"} height={300} width={300} />
      </div>
      <div ref={clouds_3.ref} className="fixed opacity-50" style={{top: "2vh", right: "10vw"}}>
        <Image src={"/images/clouds.svg"} height={300} width={300} />
      </div>
      <div ref={clouds_4.ref} className="fixed opacity-50" style={{top: "15vh", right: "5vw"}}>
        <Image src={"/images/clouds.svg"} height={300} width={300} />
      </div>

      {/* CONTENT */}
      <div className="max-w-[40rem] relative mx-auto py-10 md:px-6 px-3 border border-dashed rounded-md backdrop-blur-sm">
        <header className="flex flex-col items-center mb-4">
          {home ? (
            <>
              <Image priority src="/images/profile.png" height={144} width={144} alt="profile" className="rounded-full brightness-[130%]" />
              <h1 className="mt-2 stroke text-l-pink text-4xl font-cursive">{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image priority src="/images/profile.png" height={108} width={108} alt="profile" className="rounded-full brightness-[130%]" />
                </a>
              </Link>
              <h2 className="stroke text-l-pink font-cursive">
                <Link href="/">
                  <a>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className="mt-10">
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
