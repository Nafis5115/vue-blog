<template>
<div class="flex flex-col h-full">
    <Navbar />
    <div class="flex-1">
        <router-view />
    </div>
    <Footer />

</div>
</template>

<script>
import Navbar from "./components/layout/Navbar.vue"
import Footer from "./components/layout/Footer.vue"
export default {

    components: {
        Navbar,
        Footer
    }

}
</script>
