import { PreloadedQuery, useFragment, usePreloadedQuery } from "react-relay";
import { graphql } from "relay-runtime";
import pokemonQuery, {
  AppPokemonQuery,
} from "../__generated__/AppPokemonQuery.graphql";
import { CommonHeader_name$key } from "./__generated__/CommonHeader_name.graphql";

type Props = { queryRef: PreloadedQuery<AppPokemonQuery> };

const fragment = graphql`
  fragment CommonHeader_name on Pokemon {
    number
    name
  }
`;

export const CommonHeader: React.FC<Props> = ({ queryRef }) => {
  const preloaded = usePreloadedQuery<AppPokemonQuery>(pokemonQuery, queryRef);
  const data = useFragment<CommonHeader_name$key>(fragment, preloaded.pokemon);

  if (!data) {
    return null;
  }

  return (
    <header>
      Header [{data?.number}: {data?.name}]
    </header>
  );
};
