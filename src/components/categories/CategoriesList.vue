<template>
  <div class="res-container">
    <div class="categories-list-container">
      <div class="categories-list-container__list">
<!--          <CategoryItem :itemData="categoriesList[0]"><TopsIcon/></CategoryItem>-->
<!--          <CategoryItem :itemData="categoriesList[0]"><FoodIcon/></CategoryItem>-->
<!--          <CategoryItem :itemData="categoriesList[1]"><CarIcon/></CategoryItem>-->
          <CategoryItem :itemData="categoriesList[2]"><FunIcon/></CategoryItem>
<!--          <CategoryItem :itemData="categoriesList[3]"><ProductsIcon/></CategoryItem>-->
          <CategoryItem :itemData="categoriesList[4]"><ServicesIcon/></CategoryItem>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import Spinner from '@/components/Spinner.vue';
import CategoryItem from '@/components/categories/CategoryItem.vue';
// import FoodIcon from '@/components/icons/FoodIcon.vue';
// import CarIcon from '@/components/icons/CarIcon.vue';
import FunIcon from '@/components/icons/FunIcon.vue';
// import TopsIcon from '@/components/icons/TopsIcon.vue';
// import ProductsIcon from '@/components/icons/ProductsIcon.vue';
import ServicesIcon from '@/components/icons/ServicesIcon.vue';

export default {
  name: 'CategoriesList',
  props: {
  },
  components: {
    // Spinner,
    CategoryItem,
    // FoodIcon,
    // CarIcon,
    FunIcon,
    // TopsIcon,
    // ProductsIcon,
    ServicesIcon,
  },
  data() {
    return {
      categoriesList: [
        // { title: 'Хиты', url: 'hits', alt: 'Самые популярные купоны в Томске' },
        { title: 'Еда', url: 'food', alt: 'Купоны на еду в Томске' },
        { title: 'Авто', url: 'car', alt: 'Купоны автомоек, шиномонтажа, сервисов и т.п. в Томске' },
        { title: 'Досуг', url: 'fun', alt: 'Купоны на развлечения в Томске' },
        { title: 'Товары', url: 'products', alt: 'Купоны на товары в Томске' },
        { title: 'Услуги', url: 'services', alt: 'Купоны на услуги в Томске' },
      ],
    };
  },
  computed: {
    ...mapGetters({
      catsList: 'data/catList',
      isLoadingCats: 'data/isLoadingCategories',
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  @import "@/assets/css/colors";
  @import "@/assets/css/res-container";

  .categories-list-container
    padding: 10px
    &__spinner
      text-align: center
    &__list
      justify-content: left
      align-items: flex-end
      flex-wrap: wrap
      display: flex
    @media($vsmall)
      &__list
        justify-content: center
</style>
