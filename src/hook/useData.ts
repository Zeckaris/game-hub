import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface ApiResponse <T>{
        count: number;
        results: T[];
}

const  useData=<T>(endpoint:string)=>{
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading]= useState(false);
  const control= new AbortController();

  useEffect(() => {

      const cancel = ()=>{
          return control.abort();
      }
      
  setIsLoading(true);
      apiClient.get<ApiResponse<T>>(endpoint).then((res) => {
          setIsLoading(false);
          setData(res.data.results);
          
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
          
        });

        return cancel
 
  }, []);

  return {data,setData, error, isLoading}
   
}

export default useData;






