<template>
  <div class="home">
    <el-row>
      <el-col :span="12">
        <div class="new-lot-form">
          <el-row>
            <h2> {{ !actionId ? 'Добавить новую акцию' : 'Редактирование акции'}}</h2>
        </el-row>
          <el-row>
            <el-input placeholder="Заголовок" :maxlength="100" v-model="actionTitle"></el-input>
          </el-row>

          <el-row>
            <el-input placeholder="Логотип" v-model="actionLogo"></el-input>
          </el-row>

          <el-row>
            <editor
              api-key="no-api-key"
              :init="{
                plugins: 'link image code table lists',
                language: 'ru',
                toolbar: `undo redo|
                styleselect |
                bold italic |
                alignleft aligncenter alignright |
                link image numlist bullist`,
                height: 650,
                font_formats: 'Montserrat=Montserrat, sans-serif;',
                content_style: 'body { font-family: Montserrat, sans-serif; }',
              }"
              v-model="actionContent"
            />
          </el-row>

          <el-row style="display: flex">
            <el-select style="width: 100%;"
              v-model="selectedCategory"
              placeholder="Категория"
              :loading="isLoadingCats"
            >
              <el-option
                v-for="item in catsList"
                :key="item.id"
                :label="item.title"
                :value="item.id">
              </el-option>
            </el-select>

            <el-select style="width: 100%;"
               v-model="selectedUser"
               placeholder="Пользователь"
               :loading="isLoadingUsers"
            >
              <el-option
                v-for="item in usersList"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-row>

          <el-row style="display: flex; align-items: center">
            <div>
              <span>Цена:</span><br/>
              <el-input-number
                v-model="price"
                :step="10"
              ></el-input-number>
            </div>
            <div style="margin-left: 10px">
              <span>Скидка %:</span><br/>
              <el-input-number
                v-model="discount"
                :step="10"
              ></el-input-number>
            </div>
            <div>
              <el-switch
                style="display: block; margin-left: 10px;"
                v-model="isActive"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="Показывать"
                inactive-text="Приостановить показ">
              </el-switch>
            </div>
          </el-row>

          <el-row>
            <el-date-picker
              style="width: 100%"
              v-model="dateRange"
              type="daterange"
              format="dd-MM-yyyy"
              value-format="yyyy-MM-dd"
              range-separator="-"
              start-placeholder="Начало"
              end-placeholder="Конец">
            </el-date-picker>
          </el-row>

          <el-row>
            <el-button :loading="isSending" type="primary" @click="addOrSaveHandler">
              {{ !actionId ? 'Добавить' : 'Обновить '}}
            </el-button>
          </el-row>
        </div>
      </el-col>
      <el-col :span="12">
        <el-row><h3>Предпросмотр</h3></el-row>
        <el-row>
          <ActionCard
            :actionData="{
              title: actionTitle,
              logo: actionLogo,
              soldCoupons: 0,
              endDate: '0000-00-00',
              price: price,
              discount: discount,
          }"
          />
        </el-row>
        <el-row>
          <div ref="mobile_preview" class="mobile-preview"></div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import Editor from '@tinymce/tinymce-vue';
import ActionCard from '@/components/ActionCard.vue';

export default {
  name: 'ActionEditorPage',
  components: {
    editor: Editor, // <- Important part
    ActionCard,
  },
  data() {
    return {
      actionId: this.$route.params.id || undefined,
      actionTitle: undefined,
      actionLogo: undefined,
      selectedCategory: undefined,
      selectedUser: undefined,
      actionContent: undefined,
      price: 0,
      discount: 0,
      dateRange: [],
      isActive: false,
      isSending: false,
    };
  },
  created() {
    if (this.actionId) {
      this.getDataForEditActtion();
    }
  },
  computed: {
    ...mapGetters({
      catsList: 'data/catList',
      usersList: 'data/usersList',
      isLoadingCats: 'data/isLoadingCategories',
      isLoadingUsers: 'data/isLoadingUsers',
    }),
  },
  methods: {
    addOrSaveHandler() {
      if (this.actionTitle
      && this.selectedCategory !== undefined
      && this.actionContent
      && this.selectedUser !== undefined
      ) {
        const params = {
          actionId: this.actionId,
          title: this.actionTitle,
          logo: this.actionLogo,
          categoryId: this.selectedCategory,
          userId: this.selectedUser,
          text: this.actionContent,
          startDate: this.dateRange[0],
          endDate: this.dateRange[1],
          isActive: this.isActive,
          price: this.price,
          discount: this.discount,
        };
        const apiFunction = !this.actionId
          ? this.$api.cp.addNewAction(params)
          : this.$api.cp.updateAction(params);
        apiFunction
          .then((response) => {
            if (response.data.res) {
              this.$notify({
                title: 'Выполнено',
                message: `Акция успешно ${!this.actionId ? 'добавлена' : 'обновлена'}`,
                type: 'success',
              });
            } else {
              this.$notify({
                title: 'Ошибка',
                message: `При ${!this.actionId ? 'добавлении' : 'обновлении'} акции`,
                type: 'error',
              });
            }
          })
          .catch(() => {
            this.$notify({
              title: 'Ошибка',
              message: `При ${!this.actionId ? 'добавлении' : 'обновлении'} акции`,
              type: 'error',
            });
          });
      } else {
        this.$notify({
          title: 'Ошибка',
          message: 'Заполните все поля',
          type: 'error',
        });
      }
    },
    getDataForEditActtion() {
      this.$api.cp.getActionById(this.actionId)
        .then(({ data }) => {
          if (data.res) {
            const { payload } = data;
            this.actionTitle = payload.title;
            this.selectedCategory = payload.categoryId;
            this.selectedUser = payload.userId;
            this.actionContent = payload.text;
            this.isActive = payload.isActive;
            this.dateRange = [payload.startDate, payload.endDate];
            this.actionLogo = payload.logo;
            this.price = payload.price;
            this.discount = payload.discount;
          } else {
            this.$notify({
              title: 'Ошибка',
              message: 'Ошибка при получении данных',
              type: 'error',
            });
          }
        })
        .catch(() => {
          this.$notify({
            title: 'Ошибка',
            message: 'Не удалось получить данные об акции',
            type: 'error',
          });
        });
    },
  },
  watch: {
    actionContent() {
      this.$refs.mobile_preview.innerHTML = this.actionContent;
    },
    $route() {
      this.actionId = this.$route.id;
    },
  },
};
</script>

<style scored lang="sass">
  .new-lot-form
    width: 800px

  .mobile-preview
    width: 400px
    height: 500px
    background-color: #fff
    overflow: auto
  .el-row
    margin-bottom: 20px
    &:last-child
      margin-bottom: 0
</style>
