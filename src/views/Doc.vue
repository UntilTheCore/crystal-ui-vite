<template>
  <div>
    <TopNav />
    <div class="content">
      <aside :style="{ display: asideVisible ? 'block' : 'none' }">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
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
import { inject, reactive, Ref, watch, onBeforeUnmount } from "vue";

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

window.addEventListener("resize", onResize);

watch(() => data.clientWidth, (newClientWidth) => {
  console.log(newClientWidth);
  setAsideVisible && setAsideVisible(newClientWidth > 500);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
})

</script>

<style scoped lang="scss">
aside {
  background: lightblue;
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 70px 16px 16px;
  display: block;

  > h2 {
    margin-bottom: 4px;
  }

  > ol {
    > li {
      padding: 4px 0;
    }
  }
}

@media screen and(max-width: 500px) {
  aside {
    display: none;
  }
}

.mode-fade-enter-active {
  transition: all 0.3s ease-out;
}
.mode-fade-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}

.mode-fade-enter-from,
.mode-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>