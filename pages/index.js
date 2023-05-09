import { MeetupList } from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://blog.minhasinscricoes.com.br/wp-content/uploads/2022/05/blog-minhas-inscricoes-meetup.png",
    address: "Some address 5, 12345",
    description: "This is a first meetup.",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://blog.minhasinscricoes.com.br/wp-content/uploads/2022/05/blog-minhas-inscricoes-meetup.png",
    address: "Some address 10, 12345",
    description: "This is a second meetup.",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  // fetch data from an API

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

// export async function getStaticProps() {
//   // fetch data from API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 1
//   };
// }

export default HomePage;
