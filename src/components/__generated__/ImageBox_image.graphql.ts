/**
 * @generated SignedSource<<4d3b8169a6f1c8846e936a5270c2070b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ImageBox_image$data = {
  readonly image: string | null;
  readonly name: string | null;
  readonly " $fragmentType": "ImageBox_image";
};
export type ImageBox_image$key = {
  readonly " $data"?: ImageBox_image$data;
  readonly " $fragmentSpreads": FragmentRefs<"ImageBox_image">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ImageBox_image",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "image",
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

(node as any).hash = "a492e2b890b14a967180b12b2ac7de9e";

export default node;
