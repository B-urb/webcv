import type { NextRequest } from "next/server";

// Helper function to extract and validate the Bearer token
function extractToken(req: NextRequest): string | null {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) {
    console.log("No Authorization header");
    return null;
  }

  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    console.log("Invalid Authorization header format");
    return null;
  }

  return parts[1]; // Return the extracted token
}

// Unified function to handle both GET and POST with token validation
async function handleRequest(req: NextRequest) {
  const token = extractToken(req);
  console.log(token);
  console.log(process.env.ISR_TOKEN);
  if (!token || token !== process.env.ISR_TOKEN) {
    console.log("Unauthorized access attempt");
    return new Response("Unauthorized", { status: 401 });
  }

  console.log("Authorized");
  try {
    // Assuming some shared logic here for demonstration
    return new Response(JSON.stringify({ revalidated: true }), { status: 200 });
  } catch (err) {
    console.log("Error during revalidation", err);
    return new Response("Error revalidation", { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  return handleRequest(req);
}

export async function POST(req: NextRequest) {
  return handleRequest(req);
}
