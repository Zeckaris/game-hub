import noImage from '../assets/no-image-placeholder-6f3882e0.webp';

const getCropedImage= (url:string)=>{
    if(!url){
        return noImage;
    }
   const index= url.indexOf("media/") + "media/".length;
   const newUrl= url.slice(0,index) +"crop/600/400/"+ url.slice(index);
    return newUrl;
}

export default getCropedImage;