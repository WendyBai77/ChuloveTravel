<template>
  <RecommendCategory :explore="explore"></RecommendCategory>
</template>

<script>
import RecommendCategory from "@/components/RecommendCategory.vue";

export default {
  data() {
    return {
      explore: {
        title: "話題展覽",
        engTitle: "exhibition",
      },
    };
  },
  components: { RecommendCategory },
};
</script>
