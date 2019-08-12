<template>
  <div class="hello">
    
    <DeleteModal :visible="showModal" :name="contactName" @onDeleteContact="deleteContact"/>
    <a-card 
            hoverable style="width: 240px" 
            class="card" 
            >
        <img 
            alt="example"  
            :src="contactInfo.img"
            slot="cover"
            @click="$router.push('about')" />
        <a-card-meta :title="contactInfo.name" :description="contactInfo.phone">
            
        </a-card-meta>
        <template class="ant-card-actions" slot="actions">
            <a-icon type="edit" />
            <a-icon type="delete" @click="showModal = true" />
            <a-icon type="ellipsis" />
        </template>
      
      </a-card>
    
    
  </div>
</template>


<script>

import DeleteModal from  './DeleteModal';
import ContactService from '../services/contactService';

export default {
  data(){
    return{
      showModal: false,
      contactName: "Pepito",
    }
  },
  props: {
    msg: String,
    contactInfo: Object
  },
  components: {
    DeleteModal
  },
  methods:{
    deleteContact(){
      const contactService = new ContactService();
      contactService.deleteContact(this.contactInfo.id)
      .then( res => console.log(res))
      .catch( error => console.log(error));
      this.showModal  = false
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card{
    margin: 2rem;
  }
</style>
