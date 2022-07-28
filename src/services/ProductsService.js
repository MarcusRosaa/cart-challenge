import HttpClient from './utils/HttpClient';

class ProductsService {
  constructor() {
    this.httpClient = new HttpClient('https://cart-fakeapirest.herokuapp.com/');
  }

  async listProducts(shippingMethod = 'standard-shipping') {
    return this.httpClient.get(`${shippingMethod}`);
  }
}

export default new ProductsService();
