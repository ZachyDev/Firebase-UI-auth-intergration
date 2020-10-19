<template>
  <div id="sign">
    <div class="jumbotron"><h2>Sign up with us</h2></div>
    <div class="btns">
        <button class="btn btn-light" @click="signWithGoogle"><i class="fab fa-google"> Sign in with Google</i></button>
        <button class="btn btn-dark" @click="signWithGithub"><i class="fab fa-github"> Sign in with Github</i></button>
        <button class="btn btn-primary"><i class="fab fa-twitter"> Sign in with Twitter</i></button>
        <button class="btn btn-danger"><i class="fas fa-envelope"> Sign in with Email</i></button>
    </div>
    <form @submit.prevent="createUserWithEmail">
          <input type="email" name="email" placeholder="email" v-model="email"/>
          <input type="password" placeholder="Enter password" v-model="pass" />
          <button type="submit" class=" btn btn-success">Sign up</button>
    </form>

    <form>
      <input type="text" id="number" placeholder="+254...">
      <div id="recaptcha-container"></div>
      <button type="button" class="btn btn-success" @click="signWithPhone">Send code</button>
    </form>
  </div>
</template>

<script>
import firebase from '../firebaseConfig/config';
import { googleAuthProvider, githubAuthProvider } from '../firebaseConfig/init';
export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      pass: '',
      googleAuthProvider,
      githubAuthProvider
    }
  },
  methods: {
    createUserWithEmail() {
      firebase.auth().createUserWithEmailAndPassword(this.email,this.pass)
        .then(() => console.log('user created'))
        .catch(err => console.log(err))
    }, 
    signWithGoogle() {
      firebase.auth().signInWithPopup(this.googleAuthProvider)
        .then(res => console.log(res))
        .catch(err => alert(err.message));
    },
    signWithGithub() {
      firebase.auth().signInWithPopup(this.githubAuthProvider)
        .then(res => console.log(res))
        .catch(err => alert(err.message));
    }
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
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 20%;
    margin-left: 40%;
  }
  form input{
    margin-top: 5px;
  }
</style>