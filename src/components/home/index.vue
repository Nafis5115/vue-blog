<template>
<div>
    <Hero />
    <div class="py-8 sm:py-20 px-4 sm:px-0 container mx-auto">
        <Articles/>
    </div>
</div>
</template>

<script>
import Hero from "./Hero.vue"
import Articles from "../Articles.vue"
export default {
    name: 'Home',
    components: {
        Hero,
        Articles
    }
}
</script>
