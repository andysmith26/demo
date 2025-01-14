<main>
  <h1>Create New Player</h1>
  <form use:enhance>
    <input type="text" name="name" placeholder="Name" required />
    <input type="text" name="title" placeholder="Title" required />
    <button type="submit">Create User</button>
  </form>
</main>

<style>
  main {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
  }

  h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: #1f2937;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }

  button {
    padding: 0.75rem;
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
</style>
