
import clientPromise from "@/lib/mongodb"



export async function POST(request) {
    try {
        const body = await request.json()
        const client = await clientPromise;
        const db = client.db("bitlinks");
        const collection = db.collection("urls");
      
      
        // Check if the short URL already exists
        const doc = await collection.findOne({ shorturl: body.shorturl.trim() });
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
            shorturl: body.shorturl.trim()
        })
    
        return Response.json({ success : true , error : false ,  message: 'URL Generated Successfully' })
    } catch (error) {
        console.error('API Error:', error);
        return Response.json({ success: false, error: true, message: 'Internal server error: ' + error.message }, { status: 500 });
    }
}
