<template>
  <div class="text-center">
    <div class="flex items-center w-full justify-between">
      <span>{{ months[currentMonth] }} {{ currentYear }}</span>
      <div class="text-end flex-1 space-x-3 ">
        <button @click="prevMonth" class="xl:px-4 lg:px-4 md:px-3 px-2.5 xl:py-3 lg:py-3 py-1.5 bg-gray-100 active:bg-gray-200 rounded-full group">
          <span class="ti ti-arrow-left text-gray-400 group-hover:text-gray-600 transition duration-300"></span>
        </button>
        <button @click="nextMonth" class="xl:px-4 lg:px-4 md:px-3 px-2.5 xl:py-3 lg:py-3 py-1.5 bg-gray-100 active:bg-gray-200 rounded-full group">
          <span class="ti ti-arrow-right text-gray-400 group-hover:text-gray-60 transition duration-3000"></span>
        </button>
      </div>
    </div>
    <div class="grid">
      <div v-for="day in days" :key="day" class="xl:w-12 lg:w-12 md:w-10 w-8 xl:h-12 lg:h-12 md:h-10 h-8 xl:leading-[48px] lg:leading-[48px] md:leading-[40px] leading-[30px] xl:text-base lg:text-base text-sm">{{ day }}</div>
      <div v-for="day in blankDays" :key="'blank-' + day" class="empty-day"></div>
      <div v-for="day in daysInMonth" :key="'day-' + day" :class="`xl:w-12 lg:w-12 md:w-10 w-8 xl:h-12 lg:h-12 md:h-10 h-8 xl:leading-[48px] lg:leading-[48px] md:leading-[40px] leading-[30px] xl:text-base lg:text-base text-sm rounded-full cursor-pointer text-gray-600 ${currentDate === currentYear+'-'+currentMonth+'-'+day ? 'bg-red-500 text-white':'bg-gray-50/50'}`" @click="selectDate(day)">{{ day }}</div>
    </div>
  </div>
</template>

<script setup>
const date = new Date();
const currentDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
const currentMonth = ref(new Date().getMonth())
const currentYear = ref(new Date().getFullYear())
const selectedDate = ref("")
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const daysInMonth = computed(() => new Date(currentYear.value, currentMonth.value + 1, 0).getDate())
const blankDays = computed(() => new Date(currentYear.value, currentMonth.value, 1).getDay());
const prevMonth = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value -= 1
  } else {
    currentMonth.value -= 1
  }
}
const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value += 1
  } else {
    currentMonth.value += 1
  }
}
const selectDate = (day) => {
  selectedDate.value = `${currentYear.value}-${currentMonth.value + 1}-${day}`

  alert(`Selected Date: ${selectedDate.value}`)
}
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}

.empty-day {
  visibility: hidden;
}
</style>
