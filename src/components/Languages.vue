<template>
  <div>
    <div class="hidden-xs-only">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            <v-icon left>mdi-translate</v-icon>
            {{ $t('languages.languages') }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title @click="changeLanguage('en')">{{
              $t('languages.english')
            }}</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="changeLanguage('kr')">
              {{ $t('languages.kurdish') }}
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="changeLanguage('ar')">
              {{ $t('languages.arabic') }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <div class="hidden-sm-and-up">
      <v-btn plain @click="changeLanguage('en')">
        {{ $t('languages.english') }}
      </v-btn>
      |
      <v-btn plain @click="changeLanguage('kr')">{{
        $t('languages.kurdish')
      }}</v-btn>
      |
      <v-btn plain @click="changeLanguage('ar')">{{
        $t('languages.arabic')
      }}</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeLanguage(language) {
      this.$i18n.locale = language;
    },
  },
};
</script>
