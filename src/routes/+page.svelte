<script>
  import ProfileCard from '$lib/components/ProfileCard.svelte';

  const users = [
    {
      name: 'Michael Scott',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwsM9TmM7fVwF49HtuiOEYgUS-xLAPlDti5zTKR60HI6X7Q6OmTThy1wToaoNe67oHsPVYaA',
      title: 'Manager',
    },
    {
      name: 'Danny',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwsM9TmM7fVwF49HtuiOEYgUS-xLAPlDti5zTKR60HI6X7Q6OmTThy1wToaoNe67oHsPVYaA',
      title: 'tree feller',
    },
  ];
</script>

<main>
  <h1>Who played in the game?</h1>
  <div class="profiles-grid">
    {#each users as user}
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
