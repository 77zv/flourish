// app/api/saveUser/route.js or route.ts (Next.js 14 API route)
// import { db } from "@/lib/firebase";
import { db } from "../../../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function POST(req) {
  const body = await req.json();

  try {
    const docRef = await addDoc(collection(db, "queriedUsers"), body);
    return Response.json({ success: true, id: docRef.id });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
