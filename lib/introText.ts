import { readSingleton } from "@directus/sdk";

import { directus } from "./directusClient";
import type { Introtext } from "./types";

export async function getIntrotext(): Promise<Introtext> {
  return directus.request(readSingleton("aboutme"));
}
export function getProfileImage() {
  const id = "384e369b-89b9-4182-80b4-871848fad4c2"; // TODO: GET BY NAME
  // const file = directus.request(readFile(id))
  return id;
}
