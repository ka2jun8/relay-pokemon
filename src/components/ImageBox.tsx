import { graphql, useFragment } from "react-relay";
import { ImageBox_image$key } from "./__generated__/ImageBox_image.graphql";

type Props = {
  pokemon: ImageBox_image$key;
};

const fragment = graphql`
  fragment ImageBox_image on Pokemon {
    image
    name
  }
`;

export const ImageBox: React.FC<Props> = ({ pokemon }) => {
  const data = useFragment(fragment, pokemon);

  if (!data.image) {
    return null;
  }

  return (
    <div>
      <img src={data.image} />
    </div>
  );
};
