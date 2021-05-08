const vm = Vue.createApp({
  data: () => {
    return {
      firstName: "das",
      middleName: "",
      lastName: "dsad",
      url: "https://youtube.com",
      rawUrl: '<a :href="https://youtube.com" target="_blank">Youtube</a>',
      age: 20,
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`;
    },
    increment() {
      this.age++;
    },
    updateLastName(msg, event) {
      console.log(msg);
      this.lastName = event.target.value;
    },
    updateMiddleName(e) {
      this.middleName = e.target.value;
    },
  },
}).mount("#app");
