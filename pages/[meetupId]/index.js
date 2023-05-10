import { MeetupDetail } from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return <MeetupDetail meetup={props.meetupData} />;
}

export async function getStaticPaths() {
  // fetch data from API
  const response = await fetch("http://localhost:3000/api/meetups/ids");
  const data = await response.json();

  return {
    fallback: false,
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
