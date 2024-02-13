<template>
    <div>
        <InnerPageHero imageUrl="/images/image-2.avif" title="Articles" />
        <div class="container mx-auto px-4 sm:px-0 py-8 sm:py-12">
            <Articles layout="grid" :showViewAll="false" />
            <div class="mt-8 sm:mt-12">
                <button class="px-4 py-2 sm:px-6 bg-primary text-white rounded focus:outline-none">
                    View more
                </button>
            </div>


        </div>
    </div>
</template>
    
<script>
import Articles from '../Articles.vue'
import InnerPageHero from "../InnerPageHero.vue"
export default {
    components: {
        InnerPageHero,
        Articles
    },
    props: {

    },
    setup() {

    }
}
</script>
    