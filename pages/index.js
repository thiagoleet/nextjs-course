import Head from "next/head";
import { MeetupList } from "../components/meetups/MeetupList";
import { Fragment } from "react";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch data from API
  const response = await fetch("http://localhost:3000/api/meetups");
  const data = await response.json();

  return {
    props: {
      meetups: data.items.map((item) => {
        return {
          title: item.title,
          address: item.address,
          image: item.image,
          description: item.description,
          id: item._id.toString(),
        };
      }),
    },
    revalidate: 1,
  };
}

export default HomePage;
