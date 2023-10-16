import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Props {
  onLikeClick: () => void;
}

const Like = ({ onLikeClick }: Props) => {
  const size = 20;
  const [like, setLike] = useState(false);

  const toggle = () => {
    setLike(!like);
    onLikeClick();
  };

  if (like) return <AiFillHeart size={size} color="red" onClick={toggle} />;
  else return <AiOutlineHeart size={size} onClick={toggle} />;
};

export default Like;
