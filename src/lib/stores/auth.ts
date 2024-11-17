import { writable } from "svelte/store";

interface User {
  username: string;
  email: string;
  image?: string;
}

export const authStore = writable<{ user: User | null }>({
  user: null,
});
