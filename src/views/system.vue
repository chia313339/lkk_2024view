<template>
    <div>
        <ul class="flex space-x-2 rtl:space-x-reverse mb-6">
            <li>
                <a href="javascript:;" class="text-primary hover:underline">System</a>
            </li>
            <li class="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                <span>Setting</span>
            </li>
        </ul>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="panel lg:col-span-2 p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap">
                <div class="ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3">
                </div>
                <span class="ltr:mr-3 rtl:ml-3">產品頁面建置中: </span>
                敬請期待功能建置
            </div>
        </div>

    </div>
</template>
<script lang="ts" setup>
    import { ref, onMounted } from 'vue';
    import VueEasyLightbox from 'vue-easy-lightbox';
    import { useMeta } from '@/composables/use-meta';

    import IconBell from '@/components/icon/icon-bell.vue';

    useMeta({ title: 'Lightbox' });

    const items: any = ref([]);
    const index: any = ref(null);
    const allcontrols = ref(false);
    const visible = ref(false);

    onMounted(() => {
        bindFancybox();
    });

    const bindFancybox = () => {
        if (allcontrols.value) {
            items.value = [
                {
                    src: '/assets/images/lightbox1.jpg',
                    title: 'This is dummy caption. It has been placed here solely to demonstrate the look and feel of finished, typeset text.',
                    description: 'Photo: Samuel Rohl',
                },
                {
                    src: '/assets/images/lightbox2.jpeg',
                    title: 'This is dummy caption. It has been placed here solely to demonstrate the look and feel of finished, typeset text.',
                    description: 'Photo: Samuel Rohl',
                },
                {
                    src: '/assets/images/lightbox3.jpeg',
                    title: "Dummy caption. It's Greek to you. Unless, of course, you're Greek, in which case, it really makes no sense.",
                    description: 'Photo: Michael Hull',
                },
                {
                    src: '/assets/images/lightbox4.jpeg',
                    title: 'This is dummy caption.',
                    description: 'Photo: Folkert Gorter',
                },
                {
                    src: '/assets/images/lightbox5.jpeg',
                    title: "It's a dummy caption. He who searches for meaning here will be sorely disappointed.",
                    description: 'Photo: Thomas Lefebvre',
                },
                {
                    src: '/assets/images/lightbox6.jpeg',
                    title: "It's a dummy caption. He who searches for meaning here will be sorely disappointed.",
                    description: 'Photo: Thomas Lefebvre',
                },
            ];
        } else {
            items.value = [
                {
                    src: '/assets/images/lightbox1.jpg',
                },
                {
                    src: '/assets/images/lightbox2.jpeg',
                },
                {
                    src: '/assets/images/lightbox3.jpeg',
                },
                {
                    src: '/assets/images/lightbox4.jpeg',
                },
                {
                    src: '/assets/images/lightbox5.jpeg',
                },
                {
                    src: '/assets/images/lightbox6.jpeg',
                },
            ];
        }
    };
</script>
