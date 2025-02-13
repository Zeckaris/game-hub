import genereD from "../data/genreData";


export interface GenereInterface {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export interface GameGenereResult {
  results: GenereInterface[];
}




const useGeneres=()=>{
  const genere=  genereD;
  const errorGenere= "";
  const isLoading= false;

  return {genere, errorGenere, isLoading}

}

export default useGeneres;