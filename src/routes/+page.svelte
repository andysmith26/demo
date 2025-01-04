<script>
  let name = 'Michael Scott';
  let src =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwsM9TmM7fVwF49HtuiOEYgUS-xLAPlDti5zTKR60HI6X7Q6OmTThy1wToaoNe67oHsPVYaA';
  let title = 'Manager';
  let likes = $state(0);

  function incrementLikes() {
    likes += 1;
  }
</script>

<div class="profile-card">
  <h2>{name}</h2>
  <img {src} alt="headshot" class="profile-picture" />
  <p>{title}</p>
  <button
    onclick={incrementLikes}
    style="background-color: {likes >= 1
      ? '#ffeeee'
      : '#eeeeee'}; color: black; font-size: 16px; border: none; padding: 8px; border-radius: 30%; cursor: pointer;"
  >
    {likes >= 1 ? '❤️' : '🩶'}
  </button>
</div>

<style>
  .profile-card {
    border: 1px solid #ccc;
    padding: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 300px;
    margin: auto;
  }
  .profile-picture {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 16px;
  }
  h2 {
    font-size: 1.2em;
    margin: 0 0 8px 0;
  }
  p {
    font-size: 1em;
    color: #666;
  }
</style>
