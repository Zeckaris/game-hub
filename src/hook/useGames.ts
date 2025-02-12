import useData from "./useData";
import { GenereInterface } from "./useGeneres";
import { PlatformInterface } from "./usePlatform";

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



const useGames = (genere?:GenereInterface | null, platform?:PlatformInterface | null)=>{
   const  {data: games, setData: setGames, error, isLoading} = useData<GamesInterface>("games" ,{params:{genres:genere?.id, platforms:platform?.id}}, [genere,platform]);
   return {games,setGames,error,isLoading }
}

export default useGames;