<template>
  <div class="shared-loader-container">
    <div class="shared-loader">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style scoped>
.shared-loader,
.shared-loader div {
  box-sizing: border-box;
}

.shared-loader-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

.shared-loader {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.shared-loader div {
  position: absolute;
  border: 4px solid currentColor;
  opacity: 1;
  border-radius: 50%;
  animation: shared-loader 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.shared-loader div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes shared-loader {
  0% {
    top: 36px;
    left: 36px;
    width: 8px;
    height: 8px;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 8px;
    height: 8px;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 8px;
    height: 8px;
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    width: 80px;
    height: 80px;
    opacity: 0;
  }
}
</style>
