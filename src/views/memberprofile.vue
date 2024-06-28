<template>
  <div>
    <ul class="flex space-x-2 rtl:space-x-reverse">
      <li>
        <a href="javascript:;" class="text-primary hover:underline">Users</a>
      </li>
      <li class="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
        <span>Member</span>
      </li>
    </ul>
    <div class="pt-5">
      <div class="grid gap-5 mb-5">
        <div class="panel">
          <!-- input telephone -->
          <form @submit.prevent="fetchUserProfile">
            <input
              v-model="phoneNumber"
              type="tel"
              placeholder="0911222333"
              class="form-input"
              required
            />
            <button type="submit" class="btn btn-primary mt-6">查詢會員</button>
          </form>
        </div>
      </div>
    </div>
    <div v-if="userProfile && userProfile.length > 0" class="pt-5">
      <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-5">
        <div class="panel">
          <div class="flex items-center justify-between mb-5">
            <h5 class="font-semibold text-lg dark:text-white-light">
              基本資料
            </h5>
          </div>
          <div class="mb-5">
            <div class="flex flex-col justify-center items-center">
              <img
                :src="profileImage"
                alt=""
                class="w-24 h-24 rounded-full object-cover mb-5"
              />
              <p
                v-if="userProfile[0].name"
                class="font-semibold text-primary text-xl"
              >
                {{ userProfile[0].name }}
              </p>
              <p v-else class="font-semibold text-primary text-xl">無名氏</p>
            </div>
            <ul
              class="mt-5 flex flex-col max-w-[160px] m-auto space-y-4 font-semibold text-white-dark"
              v-if="userProfile && userProfile.length > 0"
            >
              <li class="flex items-center gap-2">
                <icon-coffee class="shrink-0" />
                {{ userProfile[0].job }}
              </li>
              <li class="flex items-center gap-2">
                <icon-calendar class="shrink-0" />
                {{ formatDate(userProfile[0].birthday) }}
              </li>
              <li class="flex items-center gap-2">
                <icon-map-pin class="shrink-0" />
                {{ userProfile[0].address }}
              </li>
              <li class="flex items-center gap-2">
                <icon-mail class="w-5 h-5 shrink-0" />
                {{ userProfile[0].email }}
              </li>
              <li class="flex items-center gap-2">
                <icon-phone />
                {{ userProfile[0].phone }}
              </li>
            </ul>
            <ul
              class="mt-7 flex items-center justify-center gap-2"
              v-if="userProfile && userProfile.length > 0"
            >
              <li>
                <span
                  v-if="userProfile[0].in_base === true"
                  class="badge badge-outline-success rounded-full"
                  >問卷資料</span
                >
              </li>
              <li>
                <span
                  v-if="userProfile[0].in_inbody === true"
                  class="badge badge-outline-info rounded-full"
                  >InBody</span
                >
              </li>
              <li>
                <span
                  v-if="userProfile[0].in_bodygofull === true"
                  class="badge badge-outline-warning rounded-full"
                  >BodyGo</span
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="panel lg:col-span-2 xl:col-span-3">
          <div class="mb-5">
            <h5 class="font-semibold text-lg dark:text-white-light">
              健康資料歷程
            </h5>
          </div>
          <div class="mb-5">
            <div class="datatable">
              <vue3-datatable
                :rows="sortedRows"
                :columns="cols"
                :totalRows="sortedRows.length"
                :sortable="true"
                skin="whitespace-nowrap bh-table-hover"
                firstArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M13 19L7 12L13 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path opacity="0.5" d="M16.9998 19L10.9998 12L16.9998 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>'
                lastArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M11 19L17 12L11 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path opacity="0.5" d="M6.99976 19L12.9998 12L6.99976 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg> '
                previousArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M15 5L9 12L15 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>'
                nextArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M9 5L15 12L9 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>'
              >
                <template #source="data">
                  <span
                    v-if="
                      data.value.source === 'quest_baseline' ||
                      data.value.source === 'quest_biweekly'
                    "
                    class="badge badge-outline-success rounded-full"
                    >問卷資料</span
                  >
                  <span
                    v-else-if="data.value.source === 'inbody'"
                    class="badge badge-outline-info rounded-full"
                    >InBody</span
                  >
                  <span
                    v-else-if="
                      data.value.source === 'bodygo_sppb' ||
                      data.value.source === 'bodygo_full'
                    "
                    class="badge badge-outline-warning rounded-full"
                    >BodyGo</span
                  >
                  <span v-else>{{ data.value.source }}</span>
                </template>
              </vue3-datatable>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 資料源分佈 -->
    <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
      <div class="panel h-full ">
        <h5 class="font-semibold text-lg dark:text-white-light">資料源分佈</h5>
        <div>
          <apexchart
            height="460"
            :options="sourceByCategory"
            :series="sourceByCategorySeries"
            class="bg-white dark:bg-black rounded-lg overflow-hidden"
          >
            <!-- loader -->
            <div
              class="min-h-[460px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]"
            >
              <span
                class="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-5 h-5 inline-flex"
              ></span>
            </div>
          </apexchart>
        </div>
      </div>
      <!-- 身體數值趨勢 -->
      <div class="panel h-full p-0">
        <div class="flex p-5">
          <div
            class="shrink-0 bg-primary/10 text-primary rounded-xl w-11 h-11 flex justify-center items-center dark:bg-primary dark:text-white-light"
          >
            <i class="fa-solid fa-weight-scale"></i>
          </div>
          <div class="ltr:ml-3 rtl:mr-3 font-semibold">
            <p class="text-xl dark:text-white-light">骨骼肌重(kg)</p>
            <h5 class="text-[#506690] text-xs">根據InBody測量</h5>
          </div>
        </div>
        <div class="h-40">
          <apexchart
            height="160"
            :options="skeletalMuscleMass"
            :series="skeletalMuscleMassSeries"
            class="w-full absolute bottom-0 overflow-hidden"
          >
            <!-- loader -->
            <div
              class="min-h-[160px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]"
            >
              <span
                class="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-5 h-5 inline-flex"
              ></span>
            </div>
          </apexchart>
        </div>
      </div>

      <div class="panel h-full p-0">
        <div class="flex p-5">
          <div
            class="shrink-0 bg-danger/10 text-danger rounded-xl w-11 h-11 flex justify-center items-center dark:bg-danger dark:text-white-light"
          >
            <i class="fa-solid fa-burger"></i>
          </div>
          <div class="ltr:ml-3 rtl:mr-3 font-semibold">
            <p class="text-xl dark:text-white-light">體脂肪率(%)</p>
            <h5 class="text-[#506690] text-xs">根據InBody測量</h5>
          </div>
        </div>
        <div class="h-40">
          <apexchart
            height="160"
            :options="percentbodyfat"
            :series="percentbodyfatSeries"
            class="w-full absolute bottom-0 overflow-hidden"
          >
            <!-- loader -->
            <div
              class="min-h-[160px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]"
            >
              <span
                class="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-5 h-5 inline-flex"
              ></span>
            </div>
          </apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/stores/index";
import { useMeta } from "@/composables/use-meta";
import { Ref, ref, computed, onMounted, watch } from "vue";
import axios from "axios";

import IconCoffee from "@/components/icon/icon-coffee.vue";
import IconCalendar from "@/components/icon/icon-calendar.vue";
import IconMapPin from "@/components/icon/icon-map-pin.vue";
import IconMail from "@/components/icon/icon-mail.vue";
import IconPhone from "@/components/icon/icon-phone.vue";

import Vue3Datatable from "@bhplugin/vue3-datatable";
import apexchart from "vue3-apexcharts";
const store = useAppStore();

useMeta({ title: "User Profile" });
const phoneNumber = ref("0900787962"); // Set default phone number
const userProfile = ref([] as Array<Record<string, any>>);
const userHistory = ref([] as Array<Record<string, any>>);
const userInbody = ref([] as Array<Record<string, any>>);
const error = ref<string | null>(null);

const fetchUserProfile = async () => {
  try {
    const profileResponse = await axios.get(
      `http://34.122.239.34:8003/userprofile?phone=${phoneNumber.value}`
    );
    userProfile.value = profileResponse.data;

    const historyResponse = await axios.get(
      `http://34.122.239.34:8003/userhist?phone=${phoneNumber.value}`
    );
    userHistory.value = historyResponse.data.sort(
      (a, b) => new Date(b.input_dt).getTime() - new Date(a.input_dt).getTime()
    );

    try {
      const inbodyResponse = await axios.get(
        `http://34.122.239.34:8003/userinbody?phone=${phoneNumber.value}`
      );
      userInbody.value = inbodyResponse.data;
      updateCharts();
    } catch (inbodyError: any) {
      if (inbodyError.response && inbodyError.response.status === 404) {
        console.error("Inbody data not found:", inbodyError);
        userInbody.value = []; // Clear inbody data on 404 error
        clearCharts();
      } else {
        console.error("Error fetching inbody data:", inbodyError);
        userInbody.value = []; // Clear inbody data on other errors
        clearCharts();
      }
    }

    error.value = null; // Clear any previous errors
  } catch (err) {
    console.error("Error fetching user profile or history:", err);
    error.value = "無法獲取會員資料。請稍後再試。";
    userProfile.value = []; // Clear previous data on error
    userHistory.value = []; // Clear previous history data on error
    clearCharts(); // Clear chart data if there's an error
  }
};

const skeletalMuscleMassSeries: Ref<{ data: number[] }[]> = ref([
  {
    data: [],
  },
]);

const percentbodyfatSeries: Ref<{ data: number[] }[]> = ref([
  {
    data: [],
  },
]);

const updateCharts = () => {
  if (userInbody.value.length === 0) {
    clearCharts();
    return;
  }

  const smmData: number[] = [];
  const pbfData: number[] = [];

  userInbody.value.forEach((entry) => {
    if (entry["SMM (Skeletal Muscle Mass)"]) {
      smmData.push(parseFloat(entry["SMM (Skeletal Muscle Mass)"] as string));
    }
    if (entry["PBF (Percent Body Fat)"]) {
      pbfData.push(parseFloat(entry["PBF (Percent Body Fat)"] as string));
    }
  });

  skeletalMuscleMassSeries.value = [
    {
      data: smmData,
    },
  ];

  percentbodyfatSeries.value = [
    {
      data: pbfData,
    },
  ];
};

const clearCharts = () => {
  skeletalMuscleMassSeries.value = [
    {
      data: [],
    },
  ];
  percentbodyfatSeries.value = [
    {
      data: [],
    },
  ];
};

// Fetch the default user profile when the component is mounted
onMounted(fetchUserProfile);

// Helper functions to format data
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("zh-TW", options);
};

const formatGender = (gender: string) => {
  return gender === "M" ? "男" : "女";
};

// Computed property to determine profile image based on gender
const profileImage = computed(() => {
  if (userProfile.value.length > 0 && userProfile.value[0].gender === "M") {
    return "/assets/images/profile-m.png";
  } else if (
    userProfile.value.length > 0 &&
    userProfile.value[0].gender === "F"
  ) {
    return "/assets/images/profile-f.png";
  } else {
    return "/assets/images/profile-default.png";
  }
});

const cols = ref([
  { field: "no", title: "NO", isUnique: true },
  { field: "height", title: "身高" },
  { field: "weight", title: "體重" },
  { field: "bmi", title: "BMI" },
  { field: "input_dt", title: "輸入時間" },
  { field: "source", title: "資料來源" },
]);

const sortedRows = computed(() =>
  userHistory.value.map((entry, index) => {
    let bmi = "";
    if (entry.height && entry.weight) {
      const heightInMeters = entry.height / 100;
      bmi = (entry.weight / (heightInMeters * heightInMeters)).toFixed(2);
    }
    return {
      no: index + 1,
      height: entry.height,
      weight: entry.weight,
      bmi: bmi ? parseFloat(bmi) : "", // 如果bmi存在，将字符串转换回数字，否则返回空字符串
      input_dt: formatDate(entry.input_dt),
      source: entry.source,
    };
  })
);

// 计算 source 数量分布
const sourceByCategorySeries = ref([0, 0, 0]);

watch(
  sortedRows,
  (newRows) => {
    const sourceCount = { 問卷資料: 0, InBody: 0, BodyGo: 0 };

    newRows.forEach((row) => {
      if (row.source === "quest_baseline" || row.source === "quest_biweekly") {
        sourceCount["問卷資料"] += 1;
      } else if (row.source === "inbody") {
        sourceCount["InBody"] += 1;
      } else if (row.source === "bodygo_sppb" || row.source === "bodygo_full") {
        sourceCount["BodyGo"] += 1;
      }
    });

    sourceByCategorySeries.value = [
      sourceCount["問卷資料"],
      sourceCount["InBody"],
      sourceCount["BodyGo"],
    ];
  },
  { immediate: true }
);

const sourceByCategory = computed(() => {
  const isDark = store.theme === "dark" || store.isDarkMode ? true : false;
  return {
    chart: {
      type: "donut",
      height: 460,
      fontFamily: "Nunito, sans-serif",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 25,
      colors: isDark ? "#0e1726" : "#fff",
    },
    colors: isDark
      ? ["#5c1ac3", "#e2a03f", "#e7515a", "#e2a03f"]
      : ["#00ab55", "#2196f3", "#e2a03f"],
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "14px",
      markers: {
        width: 10,
        height: 10,
        offsetX: -2,
      },
      height: 50,
      offsetY: 20,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          background: "transparent",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "29px",
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: "26px",
              color: isDark ? "#bfc9d4" : undefined,
              offsetY: 16,
              formatter: (val: any) => {
                return val;
              },
            },
            total: {
              show: true,
              label: "Total",
              color: "#888ea8",
              fontSize: "29px",
              formatter: (w: any) => {
                return w.globals.seriesTotals.reduce(function (a: any, b: any) {
                  return a + b;
                }, 0);
              },
            },
          },
        },
      },
    },
    labels: ["問卷資料", "InBody", "BodyGo"],
    states: {
      hover: {
        filter: {
          type: "none",
          value: 0.15,
        },
      },
      active: {
        filter: {
          type: "none",
          value: 0.15,
        },
      },
    },
  };
});

const skeletalMuscleMass = computed(() => {
  return {
    chart: {
      height: 160,
      type: "area",
      fontFamily: "Nunito, sans-serif",
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#4361ee"],
    grid: {
      padding: {
        top: 5,
      },
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: (val: any) => {
            return "";
          },
        },
      },
    },
    option: { fill: null },
  };
});

// percentbodyfat
const percentbodyfat = computed(() => {
  return {
    chart: {
      height: 160,
      type: "area",
      fontFamily: "Nunito, sans-serif",
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#e7515a"],
    grid: {
      padding: {
        top: 5,
      },
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: (val: any) => {
            return "";
          },
        },
      },
    },
  };
});
</script>
