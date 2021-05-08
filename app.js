const vm = Vue.createApp({
  data: () => {
    return {
      firstName: "das",
      lastName: "dsad",
      url: 'https://youtube.com'
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
  },
}).mount("#app");
