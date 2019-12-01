import Vue from "vue";

Vue.config.productionTip = false;

const NewComponent = {
  name: "NewComponent",
  data() { //musi to byc funkcja zwracająca obiekt, poniewaz przy wielu uzyciach komponentu zmienialibysmy np. kolor dla kazdego
    return {
      myColor: {
        color: '#fab',
      },
    }
  },
  template: `
  <div>
    <h2 :style='myColor'>Best IT girl</h2>
    <label for="color">Change color</label> 
    <input name="color" id="color" v-model="myColor.color"/>
  </div>
  `
};

new Vue({
  el: "#app",
  components: {
    NewComponent
  },
  data: {
    name: "Werka",
    myColor: {
      //obiekt
      color: "#fab"
    }
  },
  methods: {
    handleClick() {
      alert("Hejka!");
    }
  },
  template: `
    <div>
      <h1 :style="myColor">Hello {{ name }}</h1>
      <button @click="handleClick">Hi!</button>
      <NewComponent />
    </div>
  `
});

//v-bind: === :
//v-on === @
