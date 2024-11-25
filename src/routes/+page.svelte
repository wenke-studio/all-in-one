<script>
  import { SignInButton, UserButton } from "$lib/clerk/components";
  import ToggleMode from "$lib/components/ToggleMode.svelte";
  import { Button } from "$lib/components/ui/button";
  import { Footer, FooterCopyright } from "$lib/components/ui/footer";
  import { Header } from "$lib/components/ui/header";
  import { title } from "$lib/stores/app";
</script>

<div class="min-h-dvh w-full grid grid-rows-[auto_1fr_auto]">
  <Header>
    <a href="/">{$title}</a>
    <ul class="flex gap-4">
      <li><ToggleMode /></li>
      <li>
        <UserButton afterSignOutUrl="/" userProfileMode="modal" />
        <SignInButton afterSignInUrl="/dashboard" afterSignUpUrl="/dashboard" />
      </li>
    </ul>
  </Header>

  <main class="grid place-content-center p-4">
    <div class="text-center">
      <h1>Manage your resources</h1>
      <h1>
        Process with <span
          class="capitalize text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
          >{$title}</span
        >
      </h1>
      <p class="my-8">A description</p>
      <div class="flex gap-4 center">
        <Button disabled>Preview</Button>
        <!-- todo: use sign-up-button instead of sign-up-link here -->
        <!-- <Button href="/auth/sign-up" color="alternative">Sign up</Button> -->
      </div>
    </div>
  </main>

  <Footer>
    <FooterCopyright by="Wenke Lai" year="2024" />
  </Footer>
</div>
