

// let array = [];
// console.log(array)
// let wrpInput = document.querySelectorAll('wrpInput');
// console.log(wrpInput);
// let input = document.getElementsByTagName("input");
// document.addEventListener('click', function(e){
// 	if(e.target == 'input') {
// 		var value = e.target.value
// 		array.push(value)
// 	}
// https://testometrika.com/personality-and-temper/totem-animal-test/	
// })
// var arrayOne = [];
// var mc1 = document.getElementById('mc1');
// mc1.addEventListener('click', function() {
// 	arrayOne.push(mc1.value);
// })

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}





	var arr = [];
	$('input').click( function() {
	  var attr = $(this).val();
	  arr.push(attr);
	  console.log(arr);
	})



$('#results').click(function(){
  var result = 0;
  for(i=0; i<arr.length; i++) {
    result= Number(result)+Number(arr[i]);
    console.log(result);
  } 

   if(1< result && result < 7) {
    var first = document.getElementById('firstAnsw');
    firstAnsw.classList.remove('answer');
    } 
    else if(7 < result && result < 14) {
    var second = document.getElementById('secondAnsw');
    secondAnsw.classList.remove('answer');
    } 
    else if(14 < result){
      var third = document.getElementById('thirdAnsw');
      thirdAnsw.classList.remove('answer');    
        } 
    else  {
      var fourthAnsw = document.getElementById('fourthAnsw');
      fourthAnsw.classList.remove('answer');
    }
 
})







 
