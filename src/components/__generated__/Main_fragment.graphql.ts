/**
 * @generated SignedSource<<3b537a160cbdae67d6777868d39b55ef>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Main_fragment$data = {
  readonly evolutions: ReadonlyArray<{
    readonly id: string;
    readonly name: string | null;
    readonly number: string | null;
  } | null> | null;
  readonly name: string | null;
  readonly " $fragmentSpreads": FragmentRefs<"ImageBox_image">;
  readonly " $fragmentType": "Main_fragment";
};
export type Main_fragment$key = {
  readonly " $data"?: Main_fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"Main_fragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Main_fragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Pokemon",
      "kind": "LinkedField",
      "name": "evolutions",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "number",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ImageBox_image"
    }
  ],
  "type": "Pokemon",
  "abstractKey": null
};
})();

(node as any).hash = "bfe4998bd39ea4da22dad621de5a9e48";

export default node;
