<template>
    <div>
        <nav id="navbar" class="px-4 py-4 sm:py-6  bg-white shadow sm:fixed w-full z-10 transition-colors duration-150"
            :class="{ 'sm:bg-transparent sm:shadow-none': !showWhiteBackground }">
            <div class="container mx-auto flex flex-col sm:flex-row items-center justify-between">
                <div class="w-full flex flex-row items-center justify-between">
                    <div class="text-3xl font-bold">
                        <span :class="{ 'sm:text-white': !showWhiteBackground }">Shaa</span>
                        <span class="text-primary">Nova</span>
                    </div>
                    <div>
                        <button v-show="!isVisible" class="sm:hidden" @click="toggle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon"
                                class="w-6 h-6">
                                <path fill-rule="evenodd"
                                    d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                                    clip-rule="evenodd" />
                            </svg>

                        </button>
                        <button v-show="isVisible" class="sm:hidden" @click="toggle">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" data-slot="icon" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                        </button>
                    </div>
                </div>
                <div class="mt-4 sm:mt-0 w-full sm:space-x-4 sm:text-right sm:block "
                    :class="{ 'hidden': !isVisible, 'sm:text-white': !showWhiteBackground }">

                    <NavbarLink to="/" label="Home" />
                    <NavbarLink to="/articles" label="Articles" />
                    <NavbarLink to="/about" label="About" />
                    <NavbarLink to="/contact" label="Contact" />
                </div>
            </div>

        </nav>
    </div>
</template>

<script>
import {
    ref
} from "vue";
import NavbarLink from "../layout/NavbarLink.vue"
import {
    useToggle
} from "@/composables/useToggle"
export default {
    components: {
        NavbarLink
    },
    props: [],
    setup() {
        let {
            isVisible,
            toggle
        } = useToggle();
        let showWhiteBackground = ref();
        document.addEventListener("scroll", function () {
            let bodyTopPosition = document.body.getBoundingClientRect().top;
            if (bodyTopPosition < -100) {
                showWhiteBackground.value = true;
            } else {
                showWhiteBackground.value = false;

            }
        })
        return {
            isVisible,
            toggle,
            showWhiteBackground
        }

    }
}
</script>
