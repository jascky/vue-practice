<template>
  <div class="about">
    <a-form
    :form="form"
    @submit="handleSubmit"
  >
    <a-form-item
      label="Note"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-decorator="[
          'note',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
      />
    </a-form-item>
    <a-form-item
      label="Gender"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      
    </a-form-item>
    <a-form-item
      :wrapper-col="{ span: 12, offset: 5 }"
    >
      <a-button
        type="primary"
        html-type="submit"
      >
        Submit
      </a-button>
    </a-form-item>
  </a-form>
  </div>
</template>


<script>
export default {
  
}
</script>


<style scoped>

</style>
