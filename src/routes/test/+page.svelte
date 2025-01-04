<script>
  export let data;
</script>

<h1>MongoDB Connection Test</h1>

{#if data.status === 'connected'}
  <div class="success">✅ Connected to MongoDB!</div>
  <h2>Recent Test Documents:</h2>
  {#each data.data as item}
    <div class="item">
      <p>{item.message}</p>
      <small>{new Date(item.timestamp).toLocaleString()}</small>
    </div>
  {/each}
{:else}
  <div class="error">❌ Connection Error: {data.error}</div>
{/if}

<style>
  .success {
    color: green;
  }
  .error {
    color: red;
  }
  .item {
    padding: 1rem;
    margin: 0.5rem 0;
    background: #f5f5f5;
  }
</style>
