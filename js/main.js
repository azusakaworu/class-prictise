(() => {
    function fetchData(){
      fetch('./includes/Pcooper.php?carModel=R58')
    .then (res = res.json())
    .then (data => console.log(data))
    .catch(function(error){
        console.error(error);
    });
    }


  fetchDta();

})();