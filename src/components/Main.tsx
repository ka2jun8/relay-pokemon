import {
  graphql,
  PreloadedQuery,
  useFragment,
  usePreloadedQuery,
} from "react-relay";
import pokemonQuery, {
  AppPokemonQuery,
} from "../__generated__/AppPokemonQuery.graphql";
import { ImageBox } from "./ImageBox";
import { InputForm } from "./InputForm";
import { Main_fragment$key } from "./__generated__/Main_fragment.graphql";

type Props = {
  preloadedQueryRef: PreloadedQuery<AppPokemonQuery>;
  defaultName: string;
  onRefetch: (v: string) => void;
};

const selectablePokemons = ["pikachu", "charmander", "squirtle", "bulbasaur"];

const fragment = graphql`
  fragment Main_fragment on Pokemon {
    name
    evolutions {
      id
      name
      number
    }

    ...ImageBox_image
  }
`;

export const Main: React.FC<Props> = ({
  preloadedQueryRef,
  defaultName,
  onRefetch,
}) => {
  const preloaded = usePreloadedQuery<AppPokemonQuery>(
    pokemonQuery,
    preloadedQueryRef,
  );
  const data = useFragment<Main_fragment$key>(fragment, preloaded.pokemon);

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <InputForm defaultValue={defaultName} onSubmit={onRefetch} />
        <p>{`Pokemon Name: ${data.name}`}</p>
        <ImageBox pokemon={data} />
        <br />
        {data.evolutions && (
          <div>
            進化 <br />
            {data.evolutions?.map((evolution) => {
              if (!evolution) {
                return null;
              }
              return (
                <ul key={evolution.id}>
                  <li>
                    <button
                      className="App-link"
                      onClick={() =>
                        evolution.name && onRefetch(evolution.name)
                      }
                    >
                      {evolution.name}
                    </button>
                  </li>
                </ul>
              );
            })}
          </div>
        )}
        <br />
        <select onChange={(e) => onRefetch(e.target.value)}>
          {selectablePokemons.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
        <br />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
