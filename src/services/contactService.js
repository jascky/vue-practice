
// import VueResource from 'vue-resource';
import axios from 'axios';

export default class ContactService {
    apiURL = 'http://localhost:3000/contacts';

    getAllContacts() {
      return axios.get(this.apiURL);
    }

    deleteContact(id) {
      return axios.delete(`${this.apiURL}/${id}`);
    }
}
