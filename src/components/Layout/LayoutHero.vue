<template>
  <header class="hero">
    <h1>Gamestream</h1>
    <h2>All the info of your favorites games</h2>
  </header>
</template>

<style scoped>
.hero {
  background-color: var(--color-background-primary);
  background: linear-gradient(
    45deg,
    var(--color-background-primary) 0%,
    var(--color-background-secondary) 90%
  );
  padding: 2rem;
  text-align: center;
  color: var(--color-primary);
}

.hero h2 {
  font-family: 'Inter', serif;
  font-weight: 300;
}

.hero h1 {
  font-size: 2.5rem;
}
</style>
