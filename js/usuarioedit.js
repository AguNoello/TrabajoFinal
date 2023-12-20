<<<<<<< HEAD
console.log(location.search); // Lee los argumentos pasados a este formulario
var id = location.search.substr(4);
console.log(id);

const { createApp } = Vue;
createApp({
  data() {
    return {
      id: 0,
      username: "",
      firstname: "",
      comment: "",
      email: "",
      url: 'https://agunoello.pythonanywhere.com/usuarios/' + id,
      error: false, // Agrega la propiedad error con valor inicial false
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.id = data.id;
          this.username = data.username;
          this.firstname = data.firstname;
          this.comment = data.comment;
          this.email = data.email;
        })
        .catch(err => {
          console.error(err);
          this.error = true;
        });
    },
    modificar() {
      let usuario = {
        username: this.username,
        firstname: this.firstname,
        comment: this.comment,
        email: this.email,
      };

      var options = {
        body: JSON.stringify(usuario),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
      };

      fetch(this.url, options)
        .then(() => {
          alert("Registro modificado");
          window.location.href = "./usuario.html";
        })
        .catch(err => {
          console.error(err);
          alert("Error al Modificar");
        });
    },
  },
  created() {
    this.fetchData(this.url);
  },
=======
console.log(location.search); // Lee los argumentos pasados a este formulario
var id = location.search.substr(4);
console.log(id);

const { createApp } = Vue;
createApp({
  data() {
    return {
      id: 0,
      username: "",
      firstname: "",
      comment: "",
      email: "",
      url: 'https://agunoello.pythonanywhere.com/usuarios/' + id,
      error: false, // Agrega la propiedad error con valor inicial false
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.id = data.id;
          this.username = data.username;
          this.firstname = data.firstname;
          this.comment = data.comment;
          this.email = data.email;
        })
        .catch(err => {
          console.error(err);
          this.error = true;
        });
    },
    modificar() {
      let usuario = {
        username: this.username,
        firstname: this.firstname,
        comment: this.comment,
        email: this.email,
      };

      var options = {
        body: JSON.stringify(usuario),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
      };

      fetch(this.url, options)
        .then(() => {
          alert("Registro modificado");
          window.location.href = "./usuario.html";
        })
        .catch(err => {
          console.error(err);
          alert("Error al Modificar");
        });
    },
  },
  created() {
    this.fetchData(this.url);
  },
>>>>>>> 84eae833b36d4edad4b72dea7cf8ef3eee0eda9d
}).mount('#app');