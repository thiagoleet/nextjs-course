import { Fragment } from "react";
import Head from "next/head";
import { MeetupDetail } from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail meetup={props.meetupData} />
    </Fragment>
  );
}

export async function getStaticPaths() {
  // fetch data from API
  const response = await fetch("http://localhost:3000/api/meetups/ids");
  const data = await response.json();

  return {
    fallback: 'blocking',
    paths: data.items.map((item) => ({
      params: { meetupId: item._id.toString() },
    })),
  };
}

/*
 ** it runs in build time
 */
export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;
  const response = await fetch(`http://localhost:3000/api/meetup/${meetupId}`);
  const data = await response.json();

  return {
    props: {
      meetupData: { ...data.item, id: data.item._id.toString() },
    },
  };
}

export default MeetupDetails;
