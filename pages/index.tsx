import type { GetStaticProps } from "next";
import { Content } from "../components/content";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { MailchimpNotify } from "../components/mailChimpNotify";
import { Info, Social } from "../typings";
import { createClient, groq } from "next-sanity";

interface props {
  info: Info[];
  socials: Social[];
}

const client = createClient({
  projectId: "ua4ea78d",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

const Home = ({ info, socials }: props) => {
  return (
    <div className="p-0 m-0 font-montserrat">
      {info && socials ? (
        <>
          <Header info={info[0]} />

          <Content info={info[0]} />

          <MailchimpNotify />

          <Footer socials={socials} />
        </>
      ) : null}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const socialsQuery = groq`*[_type == "socials"]`;
  const infoQuery = groq`*[_type == "info"]`;

  const info: Info[] = await client.fetch(infoQuery);
  const socials: Social[] = await client.fetch(socialsQuery);

  return {
    props: {
      info,
      socials,
    },
    revalidate: 10,
  };
};

export default Home;
