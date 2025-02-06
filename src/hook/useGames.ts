import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface GamesInterface {
    id: number;
    name: string;
    background_image: string;
    released: string;
}

export interface FetchedGames {
    count: number;
    results: GamesInterface[];
 }

const useGames = ()=>{
    const [games, setGames] = useState<GamesInterface[]>([]);
    const [error, setError] = useState("");
    const control= new AbortController();
    const cancel = ()=>{
        return control.abort();
    }

   useEffect(() => {
   
        apiClient.get<FetchedGames>("games").then((res) => {
            setGames(res.data.results);
          })
          .catch((err) => {
            setError(err.message);
          });

          return cancel
   
    }, []);

    return {games, setGames, error}
}

export default useGames;