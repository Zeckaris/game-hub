import { GameQuery } from "../App";
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



const useGames = (gameQuery:GameQuery)=>{
   const  {data: games, setData: setGames, error, isLoading} = useData<GamesInterface>("games" ,{params:{genres:gameQuery.generes?.id, platforms:gameQuery.platforms?.id, ordering:gameQuery.ordering}}, [gameQuery]);
   return {games,setGames,error,isLoading }
}

export default useGames;