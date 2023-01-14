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
export default function postData(url: string, data?: {}, method?: string): Promise<any>;
