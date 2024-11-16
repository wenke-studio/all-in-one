<script lang="ts">
  import { goto } from "$app/navigation";
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

  const signUp = () => {
    // todo: implement sign up
    goto("/auth/sign-in");
  };
</script>

<div class="flex center middle">
  <Card class="flex flex-col space-y-4">
    <Heading tag="h3">Create your account</Heading>
    <P>
      Already have an account?
      <A href="/auth/sign-in">Get started</A>
    </P>

    <div class="space-y-2">
      <Label for="email">Email</Label>
      <Input id="email" type="email" required />
    </div>

    <div class="space-y-2">
      <Label for="password">Password</Label>
      <Input id="password" type="password" required />
    </div>

    <div class="space-y-2">
      <Label for="confirm-password">Confirm password</Label>
      <Input id="confirm-password" type="password" required />
    </div>

    <div>
      <Checkbox class="space-x-2">
        I accept the
        <!-- todo: implement terms and conditions page -->
        <A href="/terms">terms and conditions</A>
      </Checkbox>
    </div>

    <Button on:click={signUp}>Create an account</Button>
  </Card>
</div>
