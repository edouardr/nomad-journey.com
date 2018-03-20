<template>
  <div>
    <Header />
    <div>
      <nuxt/>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
html {
  height: 100%;
  overflow: hidden;
}

body{
  margin:0;
  padding:0;
	perspective: 1px;
	transform-style: preserve-3d;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>

