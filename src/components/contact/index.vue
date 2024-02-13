<template>
    <div>
        <InnerPageHero imageUrl="/images/image-3.avif" title="Contact us" />
        <div class="container mx-auto py-8 sm:py-12 px-4 sm:px-0">

            <div class="grid sm:grid-cols-3 sm:gap-4">
                <div><span class="text-gray-500">Address:</span> lorem ipsum</div>
                <div><span class="text-gray-500">Phone:</span> 12345</div>
                <div><span class="text-gray-500">Email:</span> s@g.com</div>
            </div>
            <div class="mt-8 sm:mt-16 grid sm:grid-cols-2 gap-8 sm:gap-12">
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2666.593882985491!2d88.92305725066647!3d23.361750409957935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff28168eb9040d%3A0x68561706a424ad1d!2sHospital%20Mosque!5e0!3m2!1sen!2sbd!4v1703051441794!5m2!1sen!2sbd"
                        class="w-full" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <form class="p-8 bg-gray-300 shadow rounded space-y-4">
                    <div>
                        <input type="text" name="" id="" placeholder="Enter name"
                            class="px-4 py-2 w-full border focus:border-primary focus:outline-none rounded bg-gray-200"
                            required>
                        <!-- <span class="text-red-500 text-sm">The Error message</span> -->
                    </div>
                    <div>
                        <input type="email" name="" id="" placeholder="Enter email"
                            class="px-4 py-2 w-full border focus:border-primary focus:outline-none rounded bg-gray-200"
                            required>
                        <!-- <span class="text-red-500 text-sm">The Error message</span> -->
                    </div>
                    <div>
                        <input type="phone" name="" id="" placeholder="Phone number"
                            class="px-4 py-2 w-full border focus:border-primary focus:outline-none rounded bg-gray-200"
                            required>
                        <!-- <span class="text-red-500 text-sm">The Error message</span> -->
                    </div>
                    <div>
                        <textarea placeholder="Enter message"
                            class="px-4 py-2 w-full border focus:border-primary focus:outline-none rounded bg-gray-200"
                            rows="5" required></textarea>
                        <!-- <span class="text-red-500 text-sm">The Error message</span> -->
                    </div>
                    <!-- <div class="px-4 py-2 bg-red-600 text-white rounded">
                        Lorem ipsum dolor sit amet.
                    </div> -->
                    <!-- <div class="px-4 py-2 bg-green-600 text-white rounded">
                        Lorem ipsum dolor sit amet.
                    </div> -->
                    <button class="px-4 py-2 sm:px-6 text-white rounded focus:outline-none bg-primary">Submit</button>

                </form>
            </div>

        </div>
    </div>
</template>

<script>
import InnerPageHero from "../InnerPageHero.vue"
export default {
    components: {
        InnerPageHero
    },
    props: {

    },
    setup() {

    }
}
</script>
