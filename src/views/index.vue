    <template>
    <div>
        <ul class="flex space-x-2 rtl:space-x-reverse mb-6">
        <li>
            <a href="javascript:;" class="text-primary hover:underline"
            >Dashboard</a
            >
        </li>
        <li class="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
            <span>練健康</span>
        </li>
        </ul>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- <div
            class="panel lg:col-span-2 p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap"
        >
            <div
            class="ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3"
            ></div>
            <span class="ltr:mr-3 rtl:ml-3">產品頁面建置中: </span
            >敬請期待功能建置（下面都是假資料，只是測排版）
        </div> -->
        </div>

        <div class="">
        <div class="grid xl:grid-cols-3 gap-6 mb-6">
            <div class="panel h-full xl:col-span-2">
            <div class="flex items-center justify-between mb-5">
                <h5 class="font-semibold text-lg">每月資料統計</h5>
            </div>
            <div class="relative">
                <apexchart
                height="325"
                :options="monthlyDataChart"
                :series="monthlyDataSeries"
                class="bg-white rounded-lg overflow-hidden"
                >
                <!-- loader -->
                <div
                    class="min-h-[325px] grid place-content-center bg-white-light/30"
                >
                    <span
                    class="animate-spin border-2 border-black !border-l-transparent rounded-full w-5 h-5 inline-flex"
                    ></span>
                </div>
                </apexchart>
            </div>
            </div>

            <div class="panel h-full">
            <div class="flex items-center mb-5">
                <h5 class="font-semibold text-lg">資料來源</h5>
            </div>
            <div>
                <apexchart
                height="460"
                :options="sourceByCategory"
                :series="sourceByCategorySeries"
                class="bg-white rounded-lg overflow-hidden"
                >
                <!-- loader -->
                <div
                    class="min-h-[460px] grid place-content-center bg-white-light/30"
                >
                    <span
                    class="animate-spin border-2 border-black !border-l-transparent rounded-full w-5 h-5 inline-flex"
                    ></span>
                </div>
                </apexchart>
            </div>
            </div>
        </div>

        <!-- 計畫參與統計 -->
        <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
            <div class="panel h-full sm:col-span-2 xl:col-span-1">
                <div class="flex items-center dark:text-white-light mb-5">
                <h5 class="font-semibold text-lg">研究參與者分店佔比</h5>
            </div>
            <div class="mb-5">
                    <apexchart
                        height="300"
                        :options="branchStat"
                        :series="branchStatSeries"
                        class="bg-white dark:bg-black rounded-lg overflow-hidden"
                    ></apexchart>
                </div>
            </div>

            <div class="panel h-full sm:col-span-2 xl:col-span-1">
            <div class="flex items-center mb-5">
                <h5 class="font-semibold text-lg dark:text-white-light">
                研究參與者追蹤統計
                <span class="block text-white-dark text-sm font-normal"
                    >截止至收案時間</span
                >
                </h5>
            </div>
            <div>
                <apexchart
                height="250"
                :options="dataTracking"
                :series="dataTrackingSeries"
                class="bg-white dark:bg-black rounded-lg overflow-hidden"
                >
                <!-- loader -->
                <div
                    class="min-h-[175px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]"
                >
                    <span
                    class="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-5 h-5 inline-flex"
                    ></span>
                </div>
                </apexchart>
            </div>
            </div>

            <div class="panel h-full sm:col-span-2 xl:col-span-1">
            <div class="flex items-center dark:text-white-light mb-5">
                <h5 class="font-semibold text-lg">研究回收資料</h5>
            </div>
            <div class="space-y-10">
                <div class="flex items-center">
                <div class="flex-1">
                    <div class="flex font-semibold text-white-dark mb-2">
                    <h6>同意書1.0</h6>
                    <p class="ltr:ml-auto rtl:mr-auto">40/111</p>
                    </div>
                    <div
                    class="w-full rounded-full h-2 bg-dark-light dark:bg-[#1b2e4b] shadow"
                    >
                    <div
                        class="bg-gradient-to-r from-[#f09819] to-[#ff5858] w-full h-full rounded-full"
                        style="width: 36%"
                    ></div>
                    </div>
                </div>
                </div>
                <div class="flex items-center">
                <div class="flex-1">
                    <div class="flex font-semibold text-white-dark mb-2">
                    <h6>同意書2.0</h6>
                    <p class="ltr:ml-auto rtl:mr-auto">67/111</p>
                    </div>
                    <div
                    class="w-full rounded-full h-2 bg-dark-light dark:bg-[#1b2e4b] shadow"
                    >
                    <div
                        class="bg-gradient-to-r from-[#00FFFF] to-[#00CACA] w-full h-full rounded-full"
                        style="width: 60%"
                    ></div>
                    </div>
                </div>
                </div>
                <div class="flex items-center">
                <div class="flex-1">
                    <div class="flex font-semibold text-white-dark mb-2">
                    <h6>InBody基線資料</h6>
                    <p class="ltr:ml-auto rtl:mr-auto">95/111</p>
                    </div>
                    <div
                    class="rounded-full h-2 bg-dark-light dark:bg-[#1b2e4b] shadow"
                    >
                    <div
                        class="bg-gradient-to-r from-[#7579ff] to-[#b224ef] w-full h-full rounded-full"
                        style="width: 85.5%"
                    ></div>
                    </div>
                </div>
                </div>
                <div class="flex items-center">
                <div class="flex-1">
                    <div class="flex font-semibold text-white-dark mb-2">
                    <h6>問卷</h6>
                    <p class="ltr:ml-auto rtl:mr-auto">111/111</p>
                    </div>
                    <div
                    class="w-full rounded-full h-2 bg-dark-light dark:bg-[#1b2e4b] shadow"
                    >
                    <div
                        class="bg-gradient-to-r from-[#3cba92] to-[#0ba360] w-full h-full rounded-full"
                        style="width: 100%"
                    ></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </template>

    <script lang="ts" setup>
    import { ref, computed, onMounted } from "vue";
    import axios from "axios";
    import apexchart from "vue3-apexcharts";

    import { useAppStore } from "@/stores/index";

    const store = useAppStore();

    interface SeriesData {
    name: string;
    data: number[];
    }

    const monthlyDataSeries = ref<SeriesData[]>([
    { name: "InBody", data: [] },
    { name: "BodyGo", data: [] },
    { name: "問卷調查", data: [] },
    ]);

    const sourceByCategorySeries = ref<number[]>([0, 0, 0, 0]);

    const fetchData = async () => {
    try {
        const response = await axios.get("https://api.l-kk.tw/table/user_hist");
        const data = response.data;
        processMonthlyData(data);
        processSourceByCategoryData(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    };

    const processMonthlyData = (data: any[]) => {
    const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    // 最近六個月的月份標籤
    const labels: string[] = [];
    for (let i = 5; i >= 0; i--) {
        const date = new Date(currentYear, currentMonth - i, 1);
        labels.push(monthNames[date.getMonth()]);
    }

    // 初始化統計數據
    const inBodyData: number[] = new Array(6).fill(0);
    const bodyGoData: number[] = new Array(6).fill(0);
    const surveyData: number[] = new Array(6).fill(0);

    data.forEach((entry) => {
        const inputDate = new Date(entry.input_dt);
        const monthDiff =
        (currentYear - inputDate.getFullYear()) * 12 +
        (currentMonth - inputDate.getMonth());
        if (monthDiff >= 0 && monthDiff < 6) {
        const index = 5 - monthDiff;
        if (entry.source === "inbody") {
            inBodyData[index]++;
        } else if (
            entry.source === "bodygo_full" ||
            entry.source === "bodygo_sppb"
        ) {
            bodyGoData[index]++;
        } else if (
            entry.source === "quest_baseline" ||
            entry.source === "quest_biweekly"
        ) {
            surveyData[index]++;
        }
        }
    });

    monthlyDataSeries.value = [
        { name: "InBody", data: inBodyData },
        { name: "BodyGo", data: bodyGoData },
        { name: "問卷調查", data: surveyData },
    ];

    // 更新圖表的標籤
    (monthlyDataChart.value as any).xaxis.categories = labels;
    };

    const processSourceByCategoryData = (data: any[]) => {
    const categoryCount = {
        quest_baseline: 0,
        quest_biweekly: 0,
        inbody: 0,
        bodygo: 0,
    };

    data.forEach((entry) => {
        if (entry.source === "quest_baseline") {
        categoryCount.quest_baseline++;
        } else if (entry.source === "quest_biweekly") {
        categoryCount.quest_biweekly++;
        } else if (entry.source === "inbody") {
        categoryCount.inbody++;
        } else if (
        entry.source === "bodygo_full" ||
        entry.source === "bodygo_sppb"
        ) {
        categoryCount.bodygo++;
        }
    });

    sourceByCategorySeries.value = [
        categoryCount.quest_baseline,
        categoryCount.quest_biweekly,
        categoryCount.inbody,
        categoryCount.bodygo,
    ];
    };

    onMounted(fetchData);

    const monthlyDataChart = computed(() => {
    const isRtl = store.rtlClass === "rtl" ? true : false;

    return {
        chart: {
        height: 325,
        type: "area",
        fontFamily: "Nunito, sans-serif",
        zoom: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
        },
        dataLabels: {
        enabled: false,
        },
        stroke: {
        show: true,
        curve: "smooth",
        width: 2,
        lineCap: "square",
        },
        dropShadow: {
        enabled: true,
        opacity: 0.2,
        blur: 10,
        left: -7,
        top: 22,
        },
        colors: ["#2196f3", "#e2a03f", "#00BB00"],
        markers: {
        discrete: [
            {
            seriesIndex: 0,
            dataPointIndex: 6,
            fillColor: "#1b55e2",
            strokeColor: "transparent",
            size: 7,
            },
            {
            seriesIndex: 1,
            dataPointIndex: 5,
            fillColor: "#e7515a",
            strokeColor: "transparent",
            size: 7,
            },
        ],
        },

        xaxis: {
        categories: [] as string[], // 確保是字符串數組
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        crosshairs: {
            show: true,
        },
        labels: {
            offsetX: isRtl ? 2 : 0,
            offsetY: 5,
            style: {
            fontSize: "12px",
            cssClass: "apexcharts-xaxis-title",
            },
        },
        },
        yaxis: {
        tickAmount: 7,
        labels: {
            formatter: (value: number) => {
            return value;
            },
            offsetX: isRtl ? -30 : -10,
            offsetY: 0,
            style: {
            fontSize: "12px",
            cssClass: "apexcharts-yaxis-title",
            },
        },
        opposite: isRtl ? true : false,
        },
        grid: {
        borderColor: "#e0e6ed",
        strokeDashArray: 5,
        xaxis: {
            lines: {
            show: true,
            },
        },
        yaxis: {
            lines: {
            show: false,
            },
        },
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
        },
        legend: {
        position: "top",
        horizontalAlign: "right",
        fontSize: "16px",
        markers: {
            width: 10,
            height: 10,
            offsetX: -2,
        },
        itemMargin: {
            horizontal: 10,
            vertical: 5,
        },
        },
        tooltip: {
        marker: {
            show: true,
        },
        x: {
            show: false,
        },
        },
        fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.28,
            opacityTo: 0.05,
            stops: [45, 100],
        },
        },
    };
    });

    const sourceByCategory = computed(() => {
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
        colors: "#fff",
        },
        colors: ["#02C874", "#e7515a", "#0080FF", "#e2a03f"],
        legend: {
        position: "bottom",
        horizontalAlign: "center",
        fontSize: "14px",
        markers: {
            width: 10,
            height: 10,
            offsetX: -2,
        },
        height: 100,
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
        labels: ["問卷調查", "雙週追蹤", "InBody", "BodyGo"],
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

    onMounted(fetchData);

    // daily sales
    const dataTracking = computed(() => {
    const isDark = store.theme === "dark" || store.isDarkMode ? true : false;
    return {
        chart: {
        height: 160,
        type: "bar",
        fontFamily: "Nunito, sans-serif",
        toolbar: {
            show: false,
        },
        stacked: true,
        stackType: "100%",
        },
        dataLabels: {
        enabled: false,
        },
        stroke: {
        show: true,
        width: 1,
        },
        colors: ["#e2a03f", "#e0e6ed"],
        responsive: [
        {
            breakpoint: 480,
            options: {
            legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
            },
            },
        },
        ],
        xaxis: {
        labels: {
            show: false,
        },
        categories: ["第2週", "第4週", "第6週", "第8週", "第12週"],
        },
        yaxis: {
        show: false,
        },
        fill: {
        opacity: 1,
        },
        plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "30%",
        },
        },
        legend: {
        show: false,
        },
        grid: {
        show: false,
        xaxis: {
            lines: {
            show: false,
            },
        },
        padding: {
            top: 10,
            right: -20,
            bottom: -20,
            left: -20,
        },
        },
    };
    });

    const dataTrackingSeries = ref([
    {
        name: "有追蹤到",
        data: [33, 13, 16, 12, 1, 1],
    },
    {
        name: "無資料",
        data: [78, 98, 95, 99, 110, 110],
    },
    ]);

    const branchStat = computed(() => {
        return {
            chart: {
                height: 300,
                type: 'donut',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            stroke: {
                show: false,
            },
            labels: ['西門店', '南京店'],
            colors: ['#4361ee', '#805dca'],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 300,
                        },
                    },
                },
            ],
            legend: {
                position: 'bottom',
            },
        };
    });

    const branchStatSeries = ref([59, 52]);
    </script>
