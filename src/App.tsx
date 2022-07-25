import { Suspense } from "react";
import {
  loadQuery,
  RelayEnvironmentProvider,
  graphql,
  useQueryLoader,
} from "react-relay/hooks";
import "./App.css";
import RelayEnvironment from "./RelayEnvironment";
import { AppPokemonQuery } from "./__generated__/AppPokemonQuery.graphql";
import { Main } from "./components/Main";
import { CommonHeader } from "./components/CommonHeader";

const q = new URLSearchParams(location.search).get("name");
const defaultPokemonName = q || "pikachu";

const PokemonQuery = graphql`
  query AppPokemonQuery($name: String) {
    pokemon(name: $name) {
      ...CommonHeader_name
      ...Main_fragment
    }
  }
`;

const preloadedQuery = loadQuery<AppPokemonQuery>(
  RelayEnvironment,
  PokemonQuery,
  {
    name: defaultPokemonName,
  },
);

function App() {
  const [queryReference, loadQuery] = useQueryLoader(
    PokemonQuery,
    preloadedQuery,
  );

  if (!queryReference) {
    return <div>ref is null...</div>;
  }

  const onRefetch = (value: string) => {
    loadQuery({ name: value });
  };

  return (
    <div>
      <CommonHeader queryRef={queryReference} />
      <Main
        preloadedQueryRef={queryReference}
        defaultName={defaultPokemonName}
        onRefetch={onRefetch}
      />
    </div>
  );
}

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
