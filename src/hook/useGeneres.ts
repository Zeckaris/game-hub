import useData from "./useData";


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
  const {data:genere, setData:setGenere, error:errorGenere, isLoading}= useData<GenereInterface>("genres");

  return {genere,setGenere, errorGenere, isLoading}

}

export default useGeneres;