import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties/:id
export const GET = async (request, { params }) => {
  const { id } = await params;
  if (!id) {
    return new Response("ID parameter is missing", { status: 404 });
  }
  try {
    await connectDB();
    const property = await Property.findById(id);
    if (!property) return new Response("Property Not Found", { status: 404 });
    return new Response(JSON.stringify(property));
  } catch (error) {
    console.log(error);
    return new Response("Something Went Wrong", { status: 500 });
  }
};
