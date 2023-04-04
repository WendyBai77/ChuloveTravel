<template>
  <RecommendCategory :explore="explore"></RecommendCategory>
</template>

<script>
import RecommendCategory from "@/components/RecommendCategory.vue";

export default {
  data() {
    return {
      explore: {
        title: "戶外露營",
        engTitle: "camp",
      },
    };
  },
  components: { RecommendCategory },
};
</script>
