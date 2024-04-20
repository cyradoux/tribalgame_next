/*------------------------------
# Types
* ----------------------------*/
export type RequestConfig = {
    url: string,
    method: RequestMethods,
    headers?: Record<any, any>
    body?: Record<string, any>
}

/*------------------------------
# Enum
* ----------------------------*/
export enum RequestMethods {
    GET= "GET",
    POST= "POST"
}