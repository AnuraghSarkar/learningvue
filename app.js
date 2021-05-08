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
  computed: {
    fullName() {
          console.log("Ok was called");
      return `${this.firstName} ${
        this.middleName
      } ${this.lastName.toUpperCase()}`;
    },
  },
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 20
      },3000)
    }
  }
}).mount("#app");
