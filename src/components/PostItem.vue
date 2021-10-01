<template>
  <v-card
    class="d-flex flex-column mx-auto"
    color="grey lighten-3"
    dark
    max-width="400"
    height="330"
  >
    <v-card-text
      class="text-h5 font-weight-bold grey--text text--darken-2 overflow-hidden "
    >
      {{ post.text }}
    </v-card-text>
    <small class="ml-3 teal--text">{{ post.time }}</small>
    <v-card-actions class="mt-auto">
      <v-list-item class="grow grey--text">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title color="red">{{ post.username }}</v-list-item-title>
        </v-list-item-content>

        <v-row align="center" justify="end" color="grey--text">
          <v-icon class="mr-1 red--text">
            mdi-heart
          </v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1 indigo--text">
            mdi-share-variant
          </v-icon>
          <span class="subheading">45</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    post: {
      text: String,
      time: String,
    },
  },
};
</script>

<style></style>
