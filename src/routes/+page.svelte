<script>
  import { SignInButton, UserButton } from "$lib/clerk/components";
  import { title } from "$lib/stores/app";
  import {
    Button,
    Footer,
    FooterCopyright,
    Heading,
    Navbar,
    NavBrand,
    NavHamburger,
    NavLi,
    NavUl,
    P,
    Span,
  } from "flowbite-svelte";
</script>

<div class="min-h-dvh w-full">
  <Navbar color="form">
    <NavBrand href="/">
      <span>{$title}</span>
    </NavBrand>
    <NavHamburger />
    <NavUl>
      <NavLi>
        <UserButton afterSignOutUrl="/" userProfileMode="modal" />
        <SignInButton afterSignInUrl="/dashboard" afterSignUpUrl="/dashboard" />
      </NavLi>
    </NavUl>
  </Navbar>

  <main class="grid place-content-center p-4">
    <div class="text-center">
      <Heading>Manage your resources</Heading>
      <Heading>Process with <Span gradient>{$title}</Span></Heading>
      <P align="center" class="my-8">A description</P>
      <div class="flex gap-4 center">
        <Button color="dark">Preview</Button>
        <!-- todo: use sign-up-button instead of sign-up-link here -->
        <!-- <Button href="/auth/sign-up" color="alternative">Sign up</Button> -->
      </div>
    </div>
  </main>

  <Footer>
    <FooterCopyright href="/" by="Wenke Lai" year={2024} />
  </Footer>
</div>
