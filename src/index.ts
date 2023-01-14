// export * from "./fetch";
export * as youtube from "./youtube";
export * as download from "./download";
export * as fetch from "./fetch";

/**
 *
 * @param url API endpoint
 * @param data Object to passed into body of post request
 * @param method GET, POST, PUT, DELETE, etc.
 * @returns Promise or error
 */
export default async function postData(
  url: string,
  data = {},
  method = "POST"
) {
  const values = Object.values(data).filter(Boolean).length;
  if (values == 0) return { error: "empty_values" };

  const response = await fetch(url, {
    method, // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
