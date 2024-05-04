import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  // Check for secret to confirm this is a valid request
  console.log(req);
  if (req.nextUrl.searchParams.get("secret") !== process.env.ISR_TOKEN) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    return new Response(JSON.stringify({ revalidated: true }), {
      status: 200,
    });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return new Response("Error revalidation", { status: 500 });
  }
}
export async function POST(req: NextRequest) {
  // Check for secret to confirm this is a valid request
  console.log(req);
  if (true) {
    // process.env.MY_SECRET_TOKEN) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    return new Response(JSON.stringify({ revalidated: true }), {
      status: 200,
    });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return new Response("Error revalidation", { status: 500 });
  }
}
