<script setup>
defineProps({
  tag: {
    type: String,
    default: 'Tag',
  },
})
</script>

<template>
  <div class="game-tag">{{ tag }}</div>
</template>

<style scoped>
.game-tag {
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  font-style: italic;
  border-radius: 0.5rem;
  background-color: var(--color-background-primary);
  color: var(--color-primary);
}
</style>
