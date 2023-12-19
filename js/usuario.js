const { createApp } = Vue;
createApp({
  data() {
    return {
      usuarios: [],
      //url:'http://localhost:5000/usuarios',
      // si el backend esta corriendo local usar localhost 5000(si no lo subieron a pythonanywhere)
      url: "https://agunoello.pythonanywhere.com/usuarios", // si ya lo subieron a pythonanywhere
      error: false,
      cargando: true,
      /*atributos para el guardar los valores del formulario */
      id: 0,
      username: "",
      firstname: "",
      comment: "",
      email: "",
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.usuarios = data;
          this.cargando = false;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },
    eliminar(usuario) {
      const url = this.url + "/" + usuario;
      var options = {
        method: "DELETE",
      };
      fetch(url, options)
        .then((res) => res.text()) // or res.json()
        .then((res) => {
          location.reload();
        });
    },
    grabar() {
      let usuario = {
        username: this.username,
        firstname: this.firstname,
        comment: this.comment,
        email: this.email,
      };
      var options = {
        body: JSON.stringify(usuario),
        method: "POST",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
      };
      fetch(this.url, options)
        .then(function () {
          alert("Registro grabado.");
          window.location.href = "./usuario.html";
        })
        .catch((err) => {
          console.error(err);
          alert("Error al grabar.");
        });
    },
  },
  created() {
    this.fetchData(this.url);
  },
}).mount("#app");