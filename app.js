const vm = Vue.createApp({
  data: () => {
    return {
      firstName: "das",
      lastName: "dsad",
        url: 'https://youtube.com',
      rawUrl : '<a :href="https://youtube.com" target="_blank">Youtube</a>',
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
  },
}).mount("#app");
