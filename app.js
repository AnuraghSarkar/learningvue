const vm = Vue.createApp({
  data: () => {
    return {
      firstName: "das",
      lastName: "dsad",
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
  },
}).mount("#app");
