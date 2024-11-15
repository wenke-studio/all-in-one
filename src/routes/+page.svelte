<script>
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

  const title = "Hello Svelte";
</script>

<div class="min-h-dvh w-full">
  <Navbar color="form">
    <NavBrand href="/">
      <span>{title}</span>
    </NavBrand>
    <NavHamburger />
    <NavUl>
      <NavLi href="/auth/sign-in">Sign in</NavLi>
    </NavUl>
  </Navbar>

  <main class="grid place-content-center p-4">
    <div class="text-center">
      <Heading>Manage your resources</Heading>
      <Heading>Process with <Span gradient>{title}</Span></Heading>
      <P align="center" class="my-8">A description</P>
      <div class="flex gap-4 center">
        <Button color="dark">Preview</Button>
        <Button href="/auth/sign-up" color="alternative">Sign up</Button>
      </div>
    </div>
  </main>

  <Footer>
    <FooterCopyright href="/" by="Wenke Lai" year={2024} />
  </Footer>
</div>
