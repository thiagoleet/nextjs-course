import { MeetupDetail } from "../../components/meetups/MeetupDetail";

const DUMMY_MEETUP = {
  id: "m1",
  title: "A First Meetup",
  image:
    "https://blog.minhasinscricoes.com.br/wp-content/uploads/2022/05/blog-minhas-inscricoes-meetup.png",
  address: "Some address 5, 12345",
  description: "This is a first meetup.",
};

function MeetupDetails(props) {
  return <MeetupDetail meetup={props.meetupData} />;
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

/*
 ** it runs in build time
 */
export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: { ...DUMMY_MEETUP, id: meetupId },
    },
  };
}

export default MeetupDetails;
