<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: ''
    }
  },
  mounted() {
    // fetch("/api/messages/hello")
    //   .then((response) => response.text())
    //   .then((data) => {
    //       this.msg = data;
    //   });
    
    // fetch("/demo/eduardo")
    //   .then((response) =>{
    //     console.log(response)
    //    response.text()})
    //   .then((data) => {
    //     console.log(data)

    //       this.msg = data;
    //   });
    

      fetch("/demo/all")
      .then((response) =>{
        console.log(response)
      return response.json()
    })
      
      .then((data) => {
        
        console.log(data)
          this.msg = data;
      });

      fetch("/demo/eduardo")
      .then((response) =>{
        console.log(response)
      return response.text()
    })
      
      .then((data) => {
        
        console.log(data)
          this.msg = data;
      });
  }
}
</script>