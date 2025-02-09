import { useEffect, useState } from "react";
import apiClient from "../services/api-client";


export interface GameGenere {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export interface GameGenereResult {
  results: GameGenere[];
}


const useGeneres=()=>{

const [genere, setGenere] = useState<GameGenere[]>([]);
  const [errorGenere, setErrorGenere] = useState("");
  const controler=  new AbortController();
  const cancel= ()=>{
    return controler.abort();
  }
  useEffect(() => {
    apiClient
      .get<GameGenereResult>("genres")
      .then((res) => {
        setGenere(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        setErrorGenere(err.message);
      });

      return cancel
  }, []);

  return {genere,setGenere, errorGenere, setErrorGenere}

}

export default useGeneres;