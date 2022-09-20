import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Content } from "../components/content";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { MailchimpNotify } from "../components/mailChimpNotify";
import { Notify } from "../components/notify";
import styles from "../styles/Home.module.css";
import { Info, Social } from "../typings";
import { fetchInfo } from "../utils/fetchInfo";
import { fetchSocials } from "../utils/fetchSocials";

interface props {
  info: Info[];
  socials: Social[];
}

const Home = ({ info, socials }: props) => {
  return (
    <div className="p-0 m-0 font-montserrat">
      <Header info={info[0]} />

      <Content info={info[0]} />

      <MailchimpNotify />

      <Footer socials={socials} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const dev = process.env.NODE_ENV !== "production";

  const server = dev
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_VERCEL_URL;

  const resInfo = await fetch(`${server}/api/getInfo`);
  const dataInfo = await resInfo.json();

  const info: Info[] = dataInfo.info;

  const resSocials = await fetch(`${server}/api/getSocials`);

  const dataSocials = await resSocials.json();
  const socials: Social[] = dataSocials.socials;

  return {
    props: {
      info,
      socials,
    },
    revalidate: 10,
  };
};

export default Home;
