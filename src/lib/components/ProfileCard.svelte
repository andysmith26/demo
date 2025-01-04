<script>
  export let name = 'John Doe';
  export let imageUrl = '/api/placeholder/200/200';
  export let title = 'Software Engineer';

  let likes = 0;

  function incrementLikes() {
    likes += 1;
  }
</script>

<div class="profile-card">
  <h2>{name}</h2>
  <img
    src={imageUrl}
    alt="{name}'s headshot"
    class="profile-picture"
  />
  <p class="title">aka "{title}"</p>
  <button
    on:click={incrementLikes}
    class="like-button"
    class:liked={likes >= 1}
  >
    {likes >= 1 ? '❤️' : '🤍'}
  </button>
  {#if likes > 0}
    <p class="likes-count">
      {likes}
      {likes === 1 ? 'like' : 'likes'}
    </p>
  {/if}
</div>

<style>
  .profile-card {
    background: white;
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    transition: transform 0.2s;
  }

  .profile-card:hover {
    transform: translateY(-2px);
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
  }

  .profile-picture {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    object-fit: cover;
  }

  .title {
    color: #666;
    font-size: 1.1rem;
    margin: 0;
  }

  .like-button {
    background: #f3f4f6;
    border: none;
    border-radius: 50%;
    padding: 0.75rem;
    cursor: pointer;
    transition: all 0.2s;
  }

  .like-button.liked {
    background: #fee2e2;
  }

  .likes-count {
    font-size: 0.9rem;
    color: #666;
    margin: 0;
  }
</style>
