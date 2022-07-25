/**
 * @generated SignedSource<<712fc3d61e7685e786bd280821c4b27b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppPokemonQuery$variables = {
  name?: string | null;
};
export type AppPokemonQuery$data = {
  readonly pokemon: {
    readonly " $fragmentSpreads": FragmentRefs<"CommonHeader_name" | "Main_fragment">;
  } | null;
};
export type AppPokemonQuery = {
  response: AppPokemonQuery$data;
  variables: AppPokemonQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "number",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppPokemonQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Pokemon",
        "kind": "LinkedField",
        "name": "pokemon",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CommonHeader_name"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Main_fragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppPokemonQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Pokemon",
        "kind": "LinkedField",
        "name": "pokemon",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Pokemon",
            "kind": "LinkedField",
            "name": "evolutions",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              (v3/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "image",
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "255cd93a176b415ce2c66bd86868818e",
    "id": null,
    "metadata": {},
    "name": "AppPokemonQuery",
    "operationKind": "query",
    "text": "query AppPokemonQuery(\n  $name: String\n) {\n  pokemon(name: $name) {\n    ...CommonHeader_name\n    ...Main_fragment\n    id\n  }\n}\n\nfragment CommonHeader_name on Pokemon {\n  number\n  name\n}\n\nfragment ImageBox_image on Pokemon {\n  image\n  name\n}\n\nfragment Main_fragment on Pokemon {\n  name\n  evolutions {\n    id\n    name\n    number\n  }\n  ...ImageBox_image\n}\n"
  }
};
})();

(node as any).hash = "de5d57445a881cde4454806e525952fc";

export default node;
