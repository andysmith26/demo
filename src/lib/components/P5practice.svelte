<!-- P5Editor.svelte -->
<script>
  import { onMount, onDestroy } from 'svelte';

  // Props for customization
  export let width = 400;
  export let height = 400;
  export let initialCode = `// Try changing these numbers!
  p.fill(255, 0, 0);
  p.circle(50, 50, 30);`;

  let canvas;
  let p5Instance;
  let errorMessage = '';
  let p5Loaded = false;

  // Base setup code that users can't edit
  const getSketchFunction = (userCode) => {
    return (p) => {
      p.setup = () => {
        p.createCanvas(width, height);
      };

      p.draw = () => {
        p.background(220);
        p.strokeWeight(1);

        // Draw coordinate grid
        p.stroke(200);
        for (let i = 0; i <= width; i += 50) {
          p.line(i, 0, i, height);
          p.noStroke();
          p.fill(100);
          p.textSize(10);
          p.text(i, i, 10);
          p.stroke(200);
        }
        for (let i = 0; i <= height; i += 50) {
          p.line(0, i, width, i);
          p.noStroke();
          p.fill(100);
          p.textSize(10);
          p.text(i, 0, i);
          p.stroke(200);
        }

        try {
          // Execute user code in the context of p5 instance
          new Function('p', userCode)(p);
        } catch (err) {
          console.error(err);
          p.noLoop();
        }
      };
    };
  };

  // Function to update the preview
  function updatePreview(userCode) {
    if (!window.p5) {
      errorMessage = 'p5.js is not loaded yet. Please wait...';
      return;
    }

    if (p5Instance) {
      p5Instance.remove();
    }

    try {
      p5Instance = new window.p5(getSketchFunction(userCode), canvas);
      errorMessage = '';
    } catch (err) {
      errorMessage = 'Error: ' + err.message;
      console.error(err);
    }
  }

  onMount(() => {
    // Check if p5 is loaded
    const checkP5Loading = setInterval(() => {
      if (window.p5) {
        clearInterval(checkP5Loading);
        p5Loaded = true;
        updatePreview(initialCode);
      }
    }, 100);

    // Cleanup interval if component is destroyed before p5 loads
    return () => clearInterval(checkP5Loading);
  });

  onDestroy(() => {
    if (p5Instance) {
      p5Instance.remove();
    }
  });

  // Handle code changes
  function handleCodeChange(event) {
    initialCode = event.target.value;
    if (p5Loaded) {
      updatePreview(initialCode);
    }
  }
</script>

<div class="editor-container">
  <div class="code-section">
    <h3>Edit Code</h3>
    <textarea
      id="code-editor"
      bind:value={initialCode}
      on:input={handleCodeChange}
      rows="5"
      class="code-editor"
    ></textarea>
    {#if errorMessage}
      <div class="error">{errorMessage}</div>
    {/if}
  </div>

  <div class="preview-section">
    <h3>Preview</h3>
    <div
      bind:this={canvas}
      class="canvas-container"
      style="min-height: {height}px"
    ></div>
  </div>
</div>

<style>
  .editor-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }

  .code-section,
  .preview-section {
    width: 100%;
  }

  .code-editor {
    width: 100%;
    min-height: 100px;
    font-family: monospace;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
  }

  .canvas-container {
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
    min-height: 400px;
  }

  .error {
    color: red;
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }

  h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
  }

  @media (min-width: 768px) {
    .editor-container {
      flex-direction: row;
    }

    .code-section,
    .preview-section {
      width: 50%;
    }
  }
</style>
