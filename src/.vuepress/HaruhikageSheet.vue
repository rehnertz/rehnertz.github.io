<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const canvas = document.getElementById('haruhikage-sheet') as HTMLCanvasElement
  const navbar = document.getElementById('navbar')!

  const ctx = canvas.getContext('2d')!
  const img = new Image()
  img.src = '/haruhikage-sheet.jpg'

  img.addEventListener('load', () => {
    canvas.width = img.width
    canvas.height = img.height

    const aspect = img.height / img.width
    canvas.style.top = `${navbar.offsetHeight}px`
    canvas.style.height = `min(${aspect * 100}vw, ${aspect * 1000}px)`


    const y0 = canvas.height / 2
    const amplitude = 25
    const frequency = 0.015
    const convergentHeight = 100
    const maxHeight = canvas.height - 2 * amplitude
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let x = 0; x < img.width; x++) {
      const y = y0 + Math.sin(frequency * x) * amplitude
      const h = (convergentHeight - maxHeight) / img.width * x + maxHeight
      ctx.drawImage(
        img,
        x, 0, 1, img.height,
        x, y - h / 2, 1, h
      )
    }
  })
})
</script>

<template>
  <canvas id="haruhikage-sheet"></canvas>
</template>

<style>
#haruhikage-sheet {
  position: fixed;
  width: min(100vw, 1000px);
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  opacity: 0.1;
  z-index: 1000;
  pointer-events: none;
  mix-blend-mode: multiply;
}

:root[data-theme='dark'] #haruhikage-sheet {
  mix-blend-mode: screen;
  filter: invert(100%);
}
</style>