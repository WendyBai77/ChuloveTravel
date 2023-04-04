<template>
  <RecommendCategory :explore="explore"></RecommendCategory>
</template>

<script>
import RecommendCategory from "@/components/RecommendCategory.vue";

export default {
  data() {
    return {
      explore: {
        title: "離島旅行",
        engTitle: "island",
      },
    };
  },
  components: { RecommendCategory },
};
</script>
