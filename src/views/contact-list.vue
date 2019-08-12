<template>
    <div class="container" >
      
      <a-row>
        <a-col :span="6" v-for="contact in contacts"> 
          <ContactCard :contactInfo="contact"></ContactCard> 
        </a-col>
      </a-row>
      <a-tooltip placement="left">
            <template slot="title">
              <span>Add new contact</span>
            </template>
            <a-button type="primary" shape="circle" icon="plus" size="large" class="fav-btn" />
          </a-tooltip>
    </div>
</template>

<script>
// @ is an alias to /src
import ContactCard from '../components/ContactCard';
import VueResource from 'vue-resource';
import ContactService from '../services/contactService';


export default {
  data(){
    return{
      contacts:[]
      
      
    }
  },
  mounted: function(){
    const contactService = new ContactService();

    contactService.getAllContacts()
    .then(response => {
        console.log(response.data);
        this.contacts = response.data;
      }).catch( error => {
         console.log('An error ocurred ====' ,error);
      });
  },
  name: 'home',
  components: {
    ContactCard
  },
  methods: {
    deleteContact(contactId){
      this.contacts
    }
  }
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 1.5rem;
}
.ant-row   {
  margin: 1.5rem auto;
}


</style>
