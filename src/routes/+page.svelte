<script context="module">
  export async function load({ fetch }) {
    const response = await fetch('/api/users');
    const users = await response.json();
    return { users };
  }
</script>

<script>
  import { goto } from '$app/navigation';
  import ProfileCard from '$lib/components/ProfileCard.svelte';
  export let data;

  function navigateToNewUser() {
    goto('/new-user');
  }
</script>

<main>
  <h1>Who played in the game?</h1>
  <button on:click={navigateToNewUser}>Create New User</button>
  <div class="profiles-grid">
    {#each data.users as user}
      <ProfileCard {...user} />
    {/each}
  </div>
</main>

<style>
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  h1 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 3rem;
    color: #1f2937;
  }

  button {
    display: block;
    margin: 0 auto 2rem;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    background-color: #1f2937;
    color: white;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
  }

  button:hover {
    background-color: #111827;
  }

  .profiles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
  }

  @media (max-width: 640px) {
    main {
      padding: 1rem;
    }

    h1 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    .profiles-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
