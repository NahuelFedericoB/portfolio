<script lang="ts">
  import Header from './lib/layout/Header.svelte';
  import Footer from './lib/layout/Footer.svelte';
  import Hero from './lib/sections/Hero.svelte';
  import Background from './lib/sections/Background.svelte';
  import SelectedWork from './lib/sections/SelectedWork.svelte';
  import Playground from './lib/sections/Playground.svelte';
  import Principles from './lib/sections/Principles.svelte';
  import Contact from './lib/sections/Contact.svelte';
</script>

<div id="top"></div>
<Header />
<main id="main">
  <Hero />
  <Background />
  <Principles />
  <SelectedWork />
  <Playground />
  <Contact />
</main>
<Footer />

<style>
  .skip-link {
    @apply fixed bg-portfolio-ink text-portfolio-white rounded-[5px] cursor-pointer;
    top: -100px;
    left: 1rem;
    z-index: 20;
    padding: 0.8rem 1rem;
  }
  .skip-link:focus {
    top: 1rem;
  }
</style>
