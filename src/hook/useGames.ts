import useData from "./useData";

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



const useGames = ()=>{
   const  {data: games, setData: setGames, error, isLoading} = useData<GamesInterface>("games");
   return {games,setGames,error,isLoading }
}

export default useGames;