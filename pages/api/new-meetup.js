import { MongoClient } from "mongodb";

// it only run in the server side
// POST /api/new-metup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    const MONGO_USR = process.env.MONGO_USR;
    const MONGO_PASS = process.env.MONGO_PASS;

    const client = await MongoClient.connect(
      `mongodb+srv://${MONGO_USR}:${MONGO_PASS}@cluster0.jsz795x.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne({
      title,
      image,
      address,
      description,
    });

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
