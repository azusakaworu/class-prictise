(() => {
    
    //grab the car buttons
    const cars = document.querrySelectorALL('.data-ref');
    function fetchData(){
      fetch(`./includes/Pcooper.php?carModel=$(this.id)`)
    .then (res = res.json())
    .then (data => {
          
          console.log(data);
          parseCarData(data[0]);
      })
    .catch(function(error){
        console.error(error);
    });
    }

function parseCarData(Car){
  
    //destreucture the database info and grab just what we need
    const {modelName, pricing, modelDetails }= car
    //take the database data and put it on the page
    document.querySelector(".modelName")=textContent =modelName;
        document.querySelector(".priceInfo")=textContent = pricing;
        document.querySelector(".modelDetails")=textContent =modelDetails;
};
    
    cars.forEach (car=> car.addEventlistener("click",fetchData);
  fetchDta();

})();
