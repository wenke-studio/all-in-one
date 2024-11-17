import type { Clerk } from "@clerk/clerk-js";
import { writable } from "svelte/store";

const clerk = writable<Clerk | null>(null);
export default clerk;
