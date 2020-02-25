// 1. Сверстать список вариантов
// 2. Проставить в каждом пункте input[type=radio]
// 3. Собрать табличку (массив) с баллами за те или иние ответы
// 4. Написать скрипт, который переберет все отмеченные инпуты, подсчитает итоговое кол-во баллов, и выводит результат.

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

// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault()
    
//     const blockID = anchor.getAttribute('href').substr(1)
    
//     document.getElementById(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   })
// }





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
    return result;
  }  

  if(result < 50) {
  var first = document.getElementById('firstAnsw');
  first.classList.remove('answer');
  } else if(50<result<200) {
    var second = document.getElementById('secondAnsw');
    second.classList.remove('answer');
  } else {
      var third = document.getElementById('thirdAnsw');
      third.classList.remove('answer');
      
  }
})
   

 


// var arr = [];
// mainSection = document.getElementById('#mainSection');
// input = document.mainSection.getElementsByTagName('input');
// btnNext = document.mainSection.getElementsByClassName('btnNext');
// btnNext.addEventListener('click', function(){

// })


// function check() {
// 	mainSection = document.getElementById('mainSection');
// 	var count = 0;
// 	var input = document.mainSection.getElementsByTagName('input').value
// }
// var mc1 = document.getElementById('mc1');
// 	var mainSection = document.getElementById('mainSection');
//     var inputItem = mainSection.getElementsByTagName('input');
// function check() { 
//             for(i = 0; i < input.length; i++) { 
//                 if(input[i].value.checked==true)  {
//                   alert('dgraerg')
//                 	var newDiv = document.createElement('div');
// 					         newDiv.id = 'true';
// 					         newDiv.style.backgroundColor = 'green';
// 					         newDiv.style.color = 'white';
// 					         newDiv.innerHTML = 'Верно! Вы набрали 20 очков.';
// 					         mainSection.insertBefore(newDiv, mc1)
//                 }
                
//             } 
//         } 




 
