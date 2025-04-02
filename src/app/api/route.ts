import { NextRequest, NextResponse } from "next/server";
import { fromBase64 } from "@/libs/utils";

async function handler(req: NextRequest) {
  return handleRequest(req);
}

export { handler as DELETE, handler as GET, handler as PATCH, handler as POST, handler as PUT };

async function handleRequest(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  const params = req.nextUrl.searchParams.get("params");

  if (!url) {
    return NextResponse.json({ error: "Missing url" }, { status: 400 });
  }

  const validHeaders = [
    "accept",
    "content-type",
    "accept-language",
    "user-agent",
    "authorization",
    "apikey",
  ];

  const decodedUrl = `${fromBase64(url)}?${fromBase64(params as string)}`;

  const headers: Record<string, string> = {};
  req.headers.forEach((value, key) => {
    if (validHeaders.includes(key)) {
      headers[key] = value;
    }
  });

  const fetchOptions: RequestInit = {
    method: req.method,
    headers,
  };

  // Exclude body for GET and DELETE methods
  if (req.method !== "GET" && req.method !== "DELETE" && req.body) {
    fetchOptions.body = JSON.stringify(await req.json());
  }

  try {
    console.log("decodedUrl", decodedUrl);
    const response = await fetch(decodedUrl, fetchOptions);

    if (response.ok) {
      try {
        const data = await response.json();
        return NextResponse.json(data, { status: 200 });
      } catch (error) {
        console.error("Error parsing JSON response: ", error);
        return NextResponse.json({ success: true }, { status: 200 });
      }
    } else {
      const error = await response.text();
      console.error("Error fetching data: ", error);
      return NextResponse.json({ error }, { status: response.status });
    }
  } catch (error: any) {
    console.error("Fetch error: ", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
