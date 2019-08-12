<template>
    <a-modal
      title="Delete confirmation!"
      v-model="visible"
      @ok="handleOk"
    >
      <p>Are you sure you want to delete {{name}} from your contact list?</p>
      
    </a-modal>
</template>

<script>

export default {
    data(){
        return {
            
        }
    },
    props:{
        visible: Boolean,
        name: String
    },
    methods:{
        showModal() {
            this.visible = true
        },
        handleOk(e) {
            this.$emit('onDeleteContact', this.visible )
            console.log(e);
            this.visible = false
        },
    }
    
}
</script>


<style>

</style>
