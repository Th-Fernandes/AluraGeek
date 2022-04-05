 class IsLogged {
  constructor(user) {
    this.user = user;
  }

  get userInfo() {
    return this.user
  }

  set loggedUser(user) {
    this.user = user
  }
}

const loginController = new IsLogged()
export {loginController}