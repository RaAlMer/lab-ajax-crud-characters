class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`);
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`);
  }

  createOneRegister (charInfo) {
    return axios.post(`${this.BASE_URL}/characters`, charInfo);
  }

  updateOneRegister (id, charInfo) {
    return axios.put(`${this.BASE_URL}/characters/${id}`, charInfo);
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`);
  }
}
