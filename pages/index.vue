<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

const SM = 640
const MD = 768
const LG = 1024
const XL = 1536

const { width, height } = useWindowSize()
const reviews: Review[] = [
  {
    ID: '1',
    name: 'Anna',
    avatar: './anna.jpg',
    text: 'BeEfficient has completely transformed how I manage my daily tasks. The drag-and-drop feature is incredibly intuitive and helps me keep everything organized effortlessly.  I love the flexibility it offers with different planning methods too!'
  }, {
    ID: '2',
    name: 'John',
    avatar: './john.jpeg',
    text: 'I have tried several task management apps, but BeEfficient stands out. The user interface is clean and easy to navigate, and the ability to drag tasks between different boards is a game-changer. Highly recommended for anyone looking to boost their productivity.'
  }, {
    ID: '3',
    name: 'Emma',
    avatar: './emma.jpeg',
    text: 'BeEfficient is exactly what I needed to get my tasks under control. The customizable cards and boards allow me to tailor the app to my workflow. The drag-and-drop functionality makes it so simple to prioritize my to-do list!'
  }, {
    ID: '4',
    name: 'Xavier',
    avatar: './xavier.jpeg',
    text: 'Managing tasks has never been easier since I started using BeEfficient. The various planning options cater to all my needs, and the drag-and-drop feature is perfect for quickly reorganizing my tasks. A must-have app for busy professionals'
  }, {
    ID: '5',
    name: 'Alexandra',
    avatar: './alexandra.jpeg',
    text: 'BeEfficient is a brilliant app for task management. The drag-and-drop feature is intuitive and helps me keep my tasks organized with minimal effort. The different planning methods ensure I can adapt the app to suit my needs perfectly'
  }
]

onMounted(() => {
  const scrollers = document.querySelectorAll('.scroller')

  // If a user hasn't opted in for recuded motion, then we add the animation
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    addAnimation()
  }
  function addAnimation () {
    scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute('data-animated', true)

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector('.scroller__inner')
      const scrollerContent = Array.from(scrollerInner.children)

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        duplicatedItem.setAttribute('aria-hidden', true)
        scrollerInner.appendChild(duplicatedItem)
      })
    })
  }
})

</script>

<template>
  <div class="overflow-hidden">
    <!-- <div class="absolute py-32 px-96 h-[89.5dvh] w-screen bg-gradient-to-r from-purple-500 from-0% via-rose-400 via-40% to-red-500 to-95%"> -->
    <div
      class="lg:flex justify-center h-[89.5dvh] w-full py-32 sm:py-16 md:py-32 inset-0 top-0 left-0"
      :class="height < 850 && width > 640 ? 'h-[53rem]' : 'h-[89.5dvh]'"
    >
      <div
        class="text-white font-bold text-[2.9rem] sm:text-[3.6rem] md:text-[3.8rem] lg:text-[4rem] xl:text-[4.5rem] 2xl:text-8xl px-10"
      >
        <div
          class="sm:py-6 md:py-10"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          Start now.
        </div>
        <div class="md:flex">
          <div
            class="sm:py-6 md:py-10"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            Be efficient.
          </div>
          <div
            class="sm:py-6 md:py-10 md:px-[0.5em]"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            Do tasks.
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-once="true"
          data-aos-duration="1500"
          class="sm:flex text-[0.4em] py-28 md:py-28 items-center lg:min-w-[900px]"
        >
          Application for managing tasks.
          <button class="ml-auto rounded-full border-2 border-white w-full my-8 sm:w-64 h-14 text-xl bg-transparent delay-150 duration-100 hover:text-black hover:bg-white">
            Try it now
          </button>
        </div>
      </div>
    </div>
    <div
      id="product"
      class="flex flex-col min-h-max bg-gray-950 text-white py-14 sm:px-24"
    >
      <div
        v-if="width > LG"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-once="true"
        data-aos-duration="1000"
        class="text-3xl py-20 mx-auto"
      >
        How does it work...
      </div>
      <div
        v-else
        class="text-2xl sm:text-3xl py-20 mx-auto"
      >
        How does it work...
      </div>
      <!-- h-[150rem] lg:h-[50rem] -->
      <div class="mx-auto lg:flex 2xl:justify-center lg:gap-40 py-10 lg:overflow-x-auto overflow-y-hidden lg:w-full min-h-max">
        <div
          v-if="width > LG"
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-once="true"
          data-aos-duration="1000"
          class="w-[25rem] min-h-min bg-gray-800 rounded-lg text-2xl p-10 my-5"
        >
          Add your tasks
          <AddTaskExample />
        </div>
        <div
          v-else
          class="w-[22.1rem] min-h-min sm:w-[25rem] bg-gray-800 rounded-lg text-xl sm:text-2xl p-10 my-5"
        >
          Add your tasks
          <AddTaskExample />
        </div>
        <div
          v-if="width > LG"
          data-aos="fade-up"
          data-aos-delay="1400"
          data-aos-once="true"
          class="w-[25rem] min-h-min bg-gray-800 rounded-lg p-10 text-2xl my-5"
        >
          Assign them
          <AssignTaskExample />
          <!-- <div class="bg-gradient-to-r from-pink-500 to-rose-500" /> -->
        </div>
        <div
          v-else
          class="w-[22.1rem] min-h-min sm:w-[25rem] bg-gray-800 rounded-lg p-10 text-xl sm:text-2xl my-5"
        >
          Assign them
          <AssignTaskExample />
        </div>
        <div
          v-if="width > LG"
          data-aos="fade-up"
          data-aos-delay="1800"
          data-aos-once="true"
          data-aos-duration="1000"
          class="w-[25rem] min-h-min bg-gray-800 rounded-lg p-10 text-2xl my-5 "
        >
          Plan everything
          <FinishedTasksExample />
        </div>
        <div
          v-else
          class="w-[22.1rem] min-h-min sm:w-[25rem] bg-gray-800 rounded-lg p-10 text-xl sm:text-2xl my-5 "
        >
          Plan everything
          <FinishedTasksExample />
        </div>
      </div>
      <div class="grid grid-cols-2 px-4 xl:px-8 2xl:px-10 mx-auto gap-8 mt-14 lg:mt-40">
        <div
          class=" text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mt-14 lg:mt-40"
          :class="width <= LG ? 'col-span-3' : ''"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-once="true"
          data-aos-duration="2000"
        >
          Collaborative Project Groups
          <div class="text-[0.70em] 2xl:text-2xl pt-2 sm:pt-2 md:pt-4 lg:pt-6 xl:pt-8 2xl:pt-10">
            BeEfficient empowers teams to work seamlessly together with its robust project group functionality.
            Users can easily create project groups, assign tasks to specific members, and monitor progress in real-time.
            The app fosters collaboration by allowing team members to comment on tasks, share files, and stay synchronized on project timelines,
            making it an ideal tool for managing group projects and ensuring everyone is on the same page.
          </div>
        </div>
        <NuxtImg
          v-if="width > LG"
          class="rounded-lg max-h-[40rem] mt-40"
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-once="true"
          data-aos-duration="2000"
        />
        <NuxtImg
          v-if="width > LG"
          class="rounded-lg mt-40 max-h-[40rem]"
          src="https://plus.unsplash.com/premium_photo-1705178702953-a3048924f209?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-once="true"
          data-aos-duration="2000"
        />
        <div
          class=" text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mt-14 lg:mt-40"
          :class="width <= LG ? 'col-span-3' : ''"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-once="true"
          data-aos-duration="2000"
        >
          Long-Term Task Planning with Calendar
          <div class="text-[0.70em] 2xl:text-2xl pt-2 sm:pt-2 md:pt-4 lg:pt-6 xl:pt-8 2xl:pt-10">
            Plan ahead with BeEfficient's integrated calendar, designed to help you manage tasks over the long term.
            The calendar view provides a clear overview of upcoming deadlines, allowing you to allocate time and resources efficiently.
            Whether you're planning a project that spans months or setting up recurring tasks, the calendar feature makes it easy to visualize your schedule and stay on
            track with your goals.
          </div>
        </div>
        <div
          class=" text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mt-14 lg:mt-40"
          :class="width <= LG ? 'col-span-3' : ''"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-once="true"
          data-aos-duration="2000"
        >
          Intuitive and User-Friendly Interface
          <div class="text-[0.70em] 2xl:text-2xl pt-2 sm:pt-2 md:pt-4 lg:pt-6 xl:pt-8 2xl:pt-10">
            BeEfficient stands out with its intuitive and simple user interface, designed for ease of use without compromising functionality.
            The app's layout is clean and straightforward, allowing users to quickly access key features and manage tasks with minimal effort.
            Even if you're new to task management apps, BeEfficient's user-friendly design ensures a smooth and pleasant experience, making productivity accessible to everyone.
          </div>
        </div>
        <NuxtImg
          v-if="width > LG"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-once="true"
          data-aos-duration="2000"
          class="rounded-lg mt-40 max-h-[40rem]"
          src="https://images.unsplash.com/photo-1719241843811-0d3d31bf2904?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <div />
      </div>
      <div
        v-if="width > LG"
        id="reviews"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-once="true"
        data-aos-duration="1000"
        class="text-3xl pt-40 pb-20 mx-auto"
      >
        Used for many people...
      </div>
      <div
        v-else
        id="reviews"
        class="text-2xl sm:text-3xl pt-40 pb-20 mx-auto"
      >
        Used for many people...
      </div>
      <!-- <div class="flex max-w-[1200px] scroller gap-4 overflow-hidden pt-20 px-4 h-[69rem] sm:h-[63rem] xl:h-[45rem] max-h-[50rem]" data-direction="right" data-speed="slow"> -->
      <div
        class="scroller"
        data-direction="right"
        data-speed="slow"
      >
        <div
          class="scroller__inner"
        >
          <ReviewCard
            v-for="review in reviews"
            :key="review.ID"
            :review="review"
          />
        </div>
      </div>
      <div
        class="px-4 text-center text-3xl pt-40 pb-20 mx-auto"
      >
        Start to achieve your goals with us
      </div>
      <div class="mx-auto min-w-min rounded-xl bg-gradient-to-tr from-pink-700 to-blue-700 p-0.5 shadow-lg">
        <button class="flex-1 text-xl bg-gray-800 px-6 py-3 rounded-xl w-80 sm:w-96">
          Sign Up For Free
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroller {
  max-width: 100rem;
}

.scroller__inner {
  padding-block: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.scroller[data-animated="true"] {
  overflow: hidden;
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 20%,
    white 80%,
    transparent
  );
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

.scroller[data-animated="true"] .scroller__inner {
  width: min-content;
  flex-wrap: nowrap;
  animation: scroll var(--_animation-duration, 40s)
    var(--_animation-direction, forwards) linear infinite;
}

.scroller[data-direction="right"] {
  --_animation-direction: reverse;
}

.scroller[data-direction="left"] {
  --_animation-direction: forwards;
}

.scroller[data-speed="fast"] {
  --_animation-duration: 20s;
}

.scroller[data-speed="slow"] {
  --_animation-duration: 60s;
}

@keyframes scroll {
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
}

</style>
