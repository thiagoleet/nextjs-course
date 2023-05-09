import { MeetupDetail } from "../../components/meetups/MeetupDetail";

const DUMMY_MEETUP = {
  id: "m1",
  title: "A First Meetup",
  image:
    "https://blog.minhasinscricoes.com.br/wp-content/uploads/2022/05/blog-minhas-inscricoes-meetup.png",
  address: "Some address 5, 12345",
  description: "This is a first meetup.",
};

function MeetupDetails() {
  return <MeetupDetail meetup={DUMMY_MEETUP} />;
}

export default MeetupDetails;
