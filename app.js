const vm = Vue.createApp({
  data: () => {
    return {
      firstName: "das",
      lastName: "dsad",
      url: "https://youtube.com",
      rawUrl: '<a :href="https://youtube.com" target="_blank">Youtube</a>',
      age: 20,
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
    increment() {
      this.age++;
      },
      updateLastName(event) {
        this.lastName = event.target.value
       }
  },
}).mount("#app");
