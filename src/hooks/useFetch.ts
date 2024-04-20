import {useCallback, useState} from "react";
import {RequestConfig} from "@/types/types";

export default function useFetch() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [ isSuccess, setIsSuccess ] = useState(false);

    const sendRequest = useCallback(async (requestConfig: RequestConfig, applyData?: any) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(
                requestConfig.url, {
                    method: requestConfig.method ? requestConfig.method : "GET",
                    headers: requestConfig.headers ? requestConfig.headers: {},
                    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
                }
            )
           if(!response.ok){
                throw new Error("Request failed");
           }

           const data = await response.json();
           setIsSuccess(true);
           if (applyData){
                applyData(data);
           }

        } catch (err: any) {
            setError(err.message || "Something went wrong!");
        }
        setIsLoading(false);
    }, [])

    return { isLoading, error, isSuccess, sendRequest };
}