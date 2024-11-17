<script lang="ts">
  import { goto } from "$app/navigation";
  import { authStore } from "$lib/stores/auth";
  import {
    A,
    Button,
    Card,
    Checkbox,
    Heading,
    Input,
    Label,
    P,
  } from "flowbite-svelte";

  const signIn = () => {
    authStore.set({ user: { username: "Foo", email: "foo@example.com" } });
    goto("/dashboard");
  };
</script>

<div class="flex center middle">
  <Card class="flex flex-col space-y-4">
    <Heading tag="h3">Sign in to our platform</Heading>

    <div class="space-y-2">
      <Label for="email">Email</Label>
      <Input id="email" type="email" required />
    </div>

    <div class="space-y-2">
      <Label for="password">Password</Label>
      <Input id="password" type="password" required />
    </div>

    <div class="flex between">
      <Checkbox>Remember me</Checkbox>
      <!-- todo: implement forgot password page -->
      <A href="/auth/forgot-password">Forgot password?</A>
    </div>

    <Button on:click={signIn}>Log in</Button>

    <P>
      Not registered?
      <A href="/auth/sign-up">Create an account</A>
    </P>
  </Card>
</div>
