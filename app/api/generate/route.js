
import clientPromise from "@/lib/mongodb"



export async function POST(request) {

    const body = await request.json()
    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");
  
  
    // Check if the short URL already exists
    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
        return Response.json({ success : false , error : true ,  message: 'Short URL already exists' })
    }   

    // Ensure URL starts with http or https
    let url = body.url.trim();
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }

    const result = await collection.insertOne({
        url: url,
        shorturl: body.shorturl
    })

    return Response.json({ success : true , error : false ,  message: 'URL Generated Successfully' })
}