<script>
  import P5Editor from '$lib/components/P5practice.svelte';
</script>

<P5Editor
  width={400}
  height={400}
  initialCode={`
      // Try changing these numbers!
      fill(255, 0, 0);
      circle(50, 50, 30);
    `}
/>
