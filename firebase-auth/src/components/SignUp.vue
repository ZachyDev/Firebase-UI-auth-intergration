<template>
  <div id="sign">
    <div class="jumbotron"><h2>Sign up with us</h2></div>
    <div class="btns">
        <button class="btn btn-light"><i class="fab fa-google"> Sign in with Google</i></button>
        <button class="btn btn-dark"><i class="fab fa-github"> Sign in with Github</i></button>
        <button class="btn btn-primary"><i class="fab fa-twitter"> Sign in with Twitter</i></button>
        <button class="btn btn-danger"><i class="fas fa-envelope"> Sign in with Email</i></button>
    </div>
    <form @submit.prevent="createUserWithEmail">
          <input type="email" name="email" placeholder="email" v-model="email"/>
          <input type="password" placeholder="Enter password" v-model="pass" />
          <button type="submit" class=" btn btn-success">Sign up</button>
    </form>
  </div>
</template>

<script>
import firebase from '../firebaseConfig/init';
export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      pass: '',
    }
  },
  methods: {
    createUserWithEmail() {
      firebase.auth().createUserWithEmailAndPassword(this.email,this.pass)
        .then(() => console.log('user created'))
        .catch(err => console.log(err))
    }, 
  }
}
</script>

<style scoped>
  #sign .btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  } 
  .btn {
    width: 20%;
    margin-top:10px;
  }
</style>