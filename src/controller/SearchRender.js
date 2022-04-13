import react from "react";

class SearchRender {
  constructor() {
    this.products = [];
    this.registeredState = undefined;
  }

  set pushProducts(data) { 
    this.products.push(data)

    //o array de produtos deve possuir apenas 3 elementos,
    // caso esse valor ultrapasse, ele remove o primeiro elemento do array
    if(this.products.length > 3) {
      this.products.splice(0, 1)
    }
    //const changedState = this.registeredState(this.products)

    console.log('state changed: ')
  }

  get getProducts() {
    return this.products
  }

  async registerState(state) {
    const states = await state
    this.registeredState = state
    console.log('state registrado')
  }
}

const SearchController = new SearchRender()
export {SearchController}