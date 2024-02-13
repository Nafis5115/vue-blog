<template>
    <div>
        <InnerPageHero imageUrl="/images/image-4.avif" title="Articles Title" />
        <div class="container mx-auto px-4 sm:px-0 py-8 sm:py-12">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between">
                <div class="flex items-center text-gray-700">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" data-slot="icon" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
                        </svg>

                    </div>
                    <div class="ml-1">Category name</div>
                </div>
                <div class="mt-2 sm:mt-0 text-sm flex items-center text-gray-700">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" data-slot="icon" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </div>
                    <div class="ml-1">September 18th, 2023</div>
                </div>

            </div>
            <div class="mt-6 sm:mt-16">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate inventore sequi impedit non
                    repellendus porro illum, dolor eligendi qui quod dolorum? Pariatur, ex. Soluta aperiam error repellat
                    fugiat corporis, recusandae doloremque asperiores ut autem quod aliquam, repellendus voluptatem, dolore
                    obcaecati tempore! In voluptatibus ducimus hic id minima harum tempora inventore.</p>
                    <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate inventore sequi impedit non
                    repellendus porro illum, dolor eligendi qui quod dolorum? Pariatur, ex. Soluta aperiam error repellat
                    fugiat corporis, recusandae doloremque asperiores ut autem quod aliquam, repellendus voluptatem, dolore
                    obcaecati tempore! In voluptatibus ducimus hic id minima harum tempora inventore.</p>

            </div>

        </div>
    </div>
</template>
<script>

import InnerPageHero from "../InnerPageHero.vue"
export default {
    components: {
        InnerPageHero,

    },
    props: {

    },
    setup() {

    }
}
</script>
