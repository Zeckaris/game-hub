import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface ParentPlatform{
    id:number;
    name:string;
    slug:string;
}

export interface GamesInterface {
    id: number;
    name: string;
    background_image: string;
    released: string;
    parent_platforms:{platform:ParentPlatform}[];
    metacritic: number;
}

export interface FetchedGames {
    count: number;
    results: GamesInterface[];
 }

const useGames = ()=>{
    const [games, setGames] = useState<GamesInterface[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading]= useState(false);
    const control= new AbortController();
    const cancel = ()=>{
        return control.abort();
    }

   
   useEffect(() => {
    setIsLoading(true);
        apiClient.get<FetchedGames>("games").then((res) => {
            setIsLoading(false);
            setGames(res.data.results);
            
          })
          .catch((err) => {
            setIsLoading(false);
            setError(err.message);
            
          });

          return cancel
   
    }, []);

    return {games, setGames, error, isLoading}
}

export default useGames;