import useData from "./useData";


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
  const {data:genere, setData:setGenere, error:errorGenere, isLoading}= useData<GameGenere>("genres");

  return {genere,setGenere, errorGenere, isLoading}

}

export default useGeneres;