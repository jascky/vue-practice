<template>
  <div id="app">
    <div id="nav">

        <a-row type="flex" justify="start">
          <a-col class="item"><h2>LionDesk Prework App</h2></a-col>
          <a-col class="item">
            <a-input-search placeholder="input search text" style="width: 200px" />
          </a-col>
        </a-row>
           
          
       
        
    </div>
      <a-layout>
        <div id="container">
          <a-layout-content>
          <router-view/>
          
          
        </a-layout-content>
        </div>
        
      </a-layout>
      
    
    
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  // padding: 0.4rem 0.7rem;
  margin: 0 2.5rem;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#container {
  margin: 4rem 5rem;

}

.a-layout{
  width: 100%;
  height: 100%;
}
.a-layout-content {
  width: 100%;
  height: 500px;
}

.fav-btn{
  margin: 2rem;
  margin-right: 0;
  margin-left: 85rem;
}

.item{
  margin: 0.7rem;
  padding-top: 0.6rem;
}
</style>
