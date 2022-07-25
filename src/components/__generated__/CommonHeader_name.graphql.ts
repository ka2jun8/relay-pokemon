/**
 * @generated SignedSource<<624484968499508048426fd89ffaeb68>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommonHeader_name$data = {
  readonly name: string | null;
  readonly number: string | null;
  readonly " $fragmentType": "CommonHeader_name";
};
export type CommonHeader_name$key = {
  readonly " $data"?: CommonHeader_name$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommonHeader_name">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommonHeader_name",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "number",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Pokemon",
  "abstractKey": null
};

(node as any).hash = "9bd90e2654af1bc92a231f554e2ab286";

export default node;
