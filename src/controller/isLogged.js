 class Login {
  constructor(status) {
    this.status = status;
  }

  get IsLogged() {
    return this.status
  } 

  set loginStatus(status) {
    this.status = status
  }
}

const loginController = new Login()
export {loginController}