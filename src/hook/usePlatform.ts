import useData from "./useData";

export interface PlatformInterface{
        id: number;
        name: string;
        slug:string;
        image_background:string;
}




const usePlatform= ()=>{
      const {data:platforms ,setData:setPlatforms , error,isLoading}= useData<PlatformInterface>("platforms");
      
      return {platforms, setPlatforms, error, isLoading}
}

export default usePlatform;