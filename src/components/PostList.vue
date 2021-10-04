<template>
  <div>
    <div align="center">
      <h2 class="pt-6">
        {{ $t('home.todayPosts') }}
      </h2>
    </div>
    <v-container>
      <v-row>
        <v-flex
          :key="post.id"
          v-for="post in posts"
          xs12
          sm12
          md6
          lg6
          xl6
          class="pa-6"
        >
          <PostItem :post="post" />
        </v-flex>
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
