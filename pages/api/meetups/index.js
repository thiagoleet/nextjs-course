import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "GET") {
    const MONGO_USR = process.env.MONGO_USR;
    const MONGO_PASS = process.env.MONGO_PASS;
    const MONGO_URL = "cluster0.jsz795x.mongodb.net";
    const MONGO_DB = "meetups";

    const client = await MongoClient.connect(
      `mongodb+srv://${MONGO_USR}:${MONGO_PASS}@${MONGO_URL}/${MONGO_DB}?retryWrites=true&w=majority`
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    const meetups = await meetupsCollection.find({}).toArray();

    client.close();

    res.status(200).json({ items: meetups });
  }
}
export default handler;
