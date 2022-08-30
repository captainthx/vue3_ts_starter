<template>

    <div id="default-carousel" class="relative" data-carousel="slide">

        <div class="overflow-hidden relative h-[100px] sm:h-[150px] xl:h-[200px] 2xl:h-[200px]">

            <div class="duration-400 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
                data-carousel-item="">
                <span
                    class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First
                    Slide</span>
                <img src="https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">
            </div>

            <div class="duration-400 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
                data-carousel-item="">
                <img src="https://images.pexels.com/photos/3789885/pexels-photo-3789885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">
            </div>

            <div class="duration-400 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
                data-carousel-item="">
                <img src="https://images.pexels.com/photos/3535395/pexels-photo-3535395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">
            </div>
        </div>

    </div>

</template>