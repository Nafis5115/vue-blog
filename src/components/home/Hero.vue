<template>
<div class="relative z-0 hero-height">
    <img src="/images/hero.avif" alt="hero" class="block w-full h-full object-cover">
    <div class="absolute inset-0 bg-black opacity-50"></div>

    <div class="px-4 sm:px-0 absolute inset-0 text-white">
        <div class="container mx-auto h-full flex flex-col justify-center">

            <div>Welcome to</div>
            <div class="mt-1 text-6xl font-bold">ShaaNova</div>
            <div class="mt-2 sm:w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sint dolore recusandae earum? Fuga aliquam ipsum temporibus cum doloremque consectetur vero et, sed maxime aspernatur nihil, ad itaque. Ea, dolore.</div>
            <div class="mt-8 text-primary"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" class="h-10 animate-bounce">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 1 1 1.06-1.06l2.47 2.47V3a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {

    },
    setup() {

    }
}
</script>
