// Write your JavaScript code here!
var planets = [
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];

//Hides stuff till later
$('#again').hide();
$('#interface').hide();  

//Adds new planet and/or Pluto
  function addPlanet(){
     if($('#newPlanet').val()){
      var addArray = [];
      var newPlanet = document.getElementById('newPlanet').value;
      var newWeight = document.getElementById('newWeight').value;
      addArray.push(newPlanet,newWeight);
      planets.push(addArray);
     }
      if ($('input[type=checkbox]').prop('checked')){
          var pluto = ['Pluto', 0.06];
          planets.unshift(pluto);
    }
      
  }

//Populates dropdown list
  function populate(){
      addPlanet();
      planets.forEach(function(planet){
      var newOption = document.createElement('option');
      var textNode = document.createTextNode(planet[0]);
      newOption.appendChild(textNode);
      document.getElementById('planets').prepend(newOption);
      $('#preInterface').slideUp(1000);
      $('#interface').fadeIn(1000);
  })
}
document.getElementById('populate').addEventListener('click',populate);

//Clears dropdown list
function rePopulate(selectbox)
{ var selectbox = document.getElementById('planets');
    var i;
    for(i = selectbox.options.length - 1 ; i >= 0 ; i--){
        selectbox.remove(i);
    }
    $('#preInterface').slideDown(1000);
    $('#interface').fadeOut(1000);
    if ($('input[type=checkbox]').prop('checked')){
    planets.shift();}
    $('#newPlanet').val('');
    $('#newWeight').val('');
}
document.getElementById('rePop').addEventListener('click', rePopulate)

//Calculates weight with given variables
  function calculateWeight(weight, planetName){
    var calculated = '';  
    for(let i=0;i<planets.length;i++){
          if (planetName == planets[i][0]){
              calculated = planets[i][1] * weight;
              return calculated;
          }
      }
  }  
  
   
//Defines variables to be calculated
  function handleClickEvent(e){
      var userWeight = parseInt(document.getElementById('user-weight').value);
      var planetName = document.getElementById('planets').value;
      var result = calculateWeight(userWeight, planetName);
      if (isNaN(userWeight)){
        document.getElementById('output').innerHTML = '<h3>Your entry is not a <strong>number</strong>.  Please enter your <strong>weight</strong>.</h3>'
      }
      else{
          $('#output').hide();
          if (planetName == 'Sun'|planetName == 'Moon'){
            document.getElementById('output').innerHTML = '<h3>If you were on <strong>the ' + planetName + '</strong>, you would weigh <strong>' + result + ' pounds!</strong></h3>';
            $('#output').fadeIn(1000);
            $('#interface').slideUp(1000);
            $('#again').fadeIn(1000)
          }
          else{
            document.getElementById('output').innerHTML = '<h3>If you were on <strong>' + planetName + '</strong>, you would weigh <strong>' + result + ' pounds!</strong></h3>';
            $('#output').fadeIn(1000);
            $('#interface').slideUp(1000);
            $('#again').fadeIn(1000)
          }
        }
    }

//Resets everything back to start
 function resetClick(){
      $('#output').fadeOut(1000);
      $('#interface').slideDown(1000);
      $('#again').fadeOut(1000);
  }


 document.getElementById('calculate-button').addEventListener('click',handleClickEvent);
 document.getElementById('again').addEventListener('click',resetClick);
