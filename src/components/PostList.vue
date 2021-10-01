<template>
  <div>
    <div align="center">
      <h2 class="pt-6">
        {{ $t('home.todayPosts') }}
      </h2>
    </div>
    <v-container>
      <v-row>
        <v-col cols="6" :key="post.id" v-for="post in posts">
          <PostItem :post="post" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PostItem from './PostItem.vue';
export default {
  name: 'PostList',
  components: {
    PostItem,
  },
  computed: mapGetters(['posts']),
};
</script>

<style scoped></style>
