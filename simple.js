 
  principal1.addEventListener('input', calculator);
  
  rate1.addEventListener('input', calculator);
  
  time1.addEventListener('input', calculator);

function calculator(ev){

  const  principal1 = document.getElementById('principal1');

  const  rate1 = document.getElementById('rate1');
   
  const  time1 = document.getElementById('time1');

      // Get values of the input 
  const principalValue = principal1.value
  const rateValue = rate1.value
  const timeValue = time1.value
  
  let  calculate = Math.round(principalValue*rateValue*timeValue/100)
   document.getElementById('si').innerHTML= 'Simple Interest is' + " " + calculate

  }

  //Reload Page 
 const btn = document.getElementById('btn')
  btn.addEventListener('click', reloadPage);
function reloadPage(ev) {
    
  document.getElementById('principal1').value = ''
  document.getElementById('rate1').value = ''
  document.getElementById('time1').value = ''
  document.getElementById('si').innerHTML = ''
}
