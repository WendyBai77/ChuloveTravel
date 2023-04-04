<template>
  <RecommendCategory :explore="explore"></RecommendCategory>
</template>

<script>
import RecommendCategory from "@/components/RecommendCategory.vue";

export default {
  data() {
    return {
      explore: {
        title: "樂園爽玩",
        engTitle: "theme-park",
      },
    };
  },
  components: { RecommendCategory },
};
</script>
