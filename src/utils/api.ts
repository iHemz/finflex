type FetchType = {
  url: string;
  method?: string;
  body?: object;
  headers?: object;
  isStream?: boolean;
  skipAuth?: boolean;
  cache?: RequestCache;
};

export const baseURL = "/api/";

async function doFetch<Type>({
  url,
  method,
  body,
  headers = {},
  isStream,
  cache = "default",
}: FetchType): Promise<Type | ReadableStream<Uint8Array> | null> {
  return new Promise(async (resolve, reject) => {
    let response = null;
    try {
      const isFormData = body instanceof FormData;
      let contentType;
      if (isStream) {
        contentType = "application/octet-stream";
      } else if (!isFormData) {
        contentType = "application/json";
      }
      response = await fetch(`${baseURL}${url}`, {
        method,
        cache,
        headers: {
          ...(contentType ? { "Content-Type": contentType } : {}),
          ...headers,
        },
        ...(body ? { body: isFormData ? body : JSON.stringify(body) } : {}),
      });

      if (isStream) {
        if (!response.status.toString().startsWith("20")) {
          reject(response.statusText);
        } else {
          resolve(response.body);
        }
        return;
      }

      let json;

      if (method !== "DELETE") {
        try {
          json = await response.json();
        } catch (error) {
          if (error instanceof SyntaxError) {
            console.error("There was a SyntaxError", error);
          } else {
            console.error("There was an error", error);
          }
        }
      }

      if (!response.status.toString().startsWith("20")) {
        reject(json?.message ?? "Something went wrong");
      } else {
        resolve(json);
      }
    } catch (error) {
      console.error("There was an error", error);
      reject(error);
    }
  });
}

export async function get<Type>(
  url: FetchType["url"],
  headers?: object,
  cache?: RequestCache,
  isStream?: boolean
): Promise<Type | ReadableStream<Uint8Array> | null> {
  return doFetch<Type | ReadableStream<Uint8Array> | null>({
    url,
    method: "GET",
    headers,
    isStream,
    cache,
  });
}

export async function put<Type>(
  url: FetchType["url"],
  body: FetchType["body"],
  isStream?: boolean
): Promise<Type | ReadableStream<Uint8Array> | null> {
  return doFetch<Type | ReadableStream<Uint8Array> | null>({
    url,
    method: "PUT",
    body,
    isStream,
  });
}

export async function post<Type>(
  url: FetchType["url"],
  body: FetchType["body"],
  isStream?: boolean
): Promise<Type | ReadableStream<Uint8Array> | null> {
  return doFetch<Type | ReadableStream<Uint8Array> | null>({
    url,
    method: "POST",
    body,
    isStream,
  });
}

export async function del<Type>(
  url: FetchType["url"],
  body?: FetchType["body"],
  isStream?: boolean
): Promise<Type | ReadableStream<Uint8Array> | null> {
  return doFetch<Type | ReadableStream<Uint8Array> | null>({
    url,
    method: "DELETE",
    body,
    isStream,
  });
}

export async function patch<Type>(
  url: FetchType["url"],
  body: FetchType["body"],
  isStream?: boolean
): Promise<Type | ReadableStream<Uint8Array> | null> {
  return doFetch<Type | ReadableStream<Uint8Array> | null>({
    url,
    method: "PATCH",
    body,
    isStream,
  });
}

export async function readDataFromStream(stream: any) {
  const reader = stream.getReader();
  let totalData = "";

  try {
    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }

      totalData += new TextDecoder("utf-8").decode(value);
    }
  } catch (error) {
    console.error("Error reading stream:", error);
  } finally {
    reader.releaseLock();
  }

  return totalData;
}
