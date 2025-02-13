import meh from "../assets/meh.webp";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import { Image } from "@chakra-ui/react";
interface Prop {
  rating_top: number;
}
function Emoji({ rating_top }: Prop) {
  const matchRatingToEmoji = (rating: number) => {
    if (rating <= 3) {
      return meh;
    } else if (rating <= 4) {
      return thumbsUp;
    } else {
      return bullsEye;
    }
  };
  return <Image src={matchRatingToEmoji(rating_top)} boxSize={"24px"} />;
}

export default Emoji;
