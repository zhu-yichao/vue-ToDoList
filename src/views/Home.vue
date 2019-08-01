<template>
  <div class="home">
    <Header/>
    <Doing/>
    <Done/>
  </div>
</template>

<script>
const Header = () => import('@/components/Header')
const Doing = () => import('@/components/Doing')
const Done = () => import('@/components/Done')
export default {
  name: 'home',
  components: {
    Header,
    Doing,
    Done
  }
}
</script>
