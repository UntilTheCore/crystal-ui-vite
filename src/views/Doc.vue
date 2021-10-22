<template>
  <div class="layout">
    <TopNav class="nav" />
    <div class="content">
      <transition name="slide-fade">
        <Aside v-if="asideVisible" />
      </transition>
      <main>
        <router-view v-slot="{ Component }">
          <transition name="mode-fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>
  </div>
</template>
<script setup lang="ts">
import TopNav from "@/components/TopNav.vue";
import Aside from "@/components/Aside.vue";
import { inject, reactive, Ref, watch, onMounted, onBeforeUnmount } from "vue";

type Data = {
  clientWidth: number,
}

const asideVisible = inject<Ref<boolean>>("asideVisible");
const setAsideVisible = inject<(status: boolean) => void>("setAsideVisible");

const data = reactive<Data>({
  clientWidth: document.documentElement.clientWidth,
});

const onResize = () => {
  data.clientWidth = document.documentElement.clientWidth;
}

const onListenerClick = () => {
  if (document.documentElement.clientWidth < 500 && asideVisible?.value) {
    setAsideVisible && setAsideVisible(false);
  }
}

window.addEventListener("resize", onResize);

watch(() => data.clientWidth, (newClientWidth) => {
  setAsideVisible && setAsideVisible(newClientWidth > 500);
});



onMounted(() => {
  document.body.addEventListener('click', onListenerClick)
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
  document.body.removeEventListener("click", onResize);
})

</script>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    /* 实际内容内容区域上、左白边宽度设置 */
    padding-left: 160px;
    padding-top: 60px;
    transition: all .3s ease-out;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.mode-fade-enter-active {
  transition: all 0.3s ease-out;
}
.mode-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.mode-fade-enter-from,
.mode-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.slide-fade-leave-active,
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>