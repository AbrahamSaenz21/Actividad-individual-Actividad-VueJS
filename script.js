Vue.createApp({
  data() {
    return {
      daysOfWeek: ['Ejercicio','Hablar con mis amigos','Ir al cine','Cocinar','Escuchar Musica','Ir de Viaje','Jugar juegos de mesa'],
      counter : 0,
      myName: '',
      flag: true
      };
  },
  methods: {
    increment() {
      this.counter++;
    }
    toggle(){
      this.flag = !this.flag;
    }
  }
}).mount("#app");

