const app = new Vue({
  el: "#app",
  data: {
    message: "Hello World from Vue!",
    frutas: [
      { nombre: "Pera", cantidad: 19 },
      { nombre: "Manzana", cantidad: 9 },
      { nombre: "Limon", cantidad: 61 },
      { nombre: "Sandia", cantidad: 0 },
    ],
    nuevaFruta: "",
    total: 0,
  },

  methods: {
    agregarFruta() {
      this.frutas.push({ nombre: this.nuevaFruta, cantidad: 0 });
      this.nuevaFruta = "";
    },
    agregarCantidad() {
      this.frutas.push({ nombre: "", cantidad: this.nuevaCantidad });
    },
  },
  computed: {
    sumarFrutas() {
      this.total = 0;
      for (fruta of this.frutas) {
        this.total = this.total + fruta.cantidad;
      }
      return this.total;
    },
  },
});

