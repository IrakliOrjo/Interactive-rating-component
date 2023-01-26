const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const containerDiv = document.getElementById('container');
const btnSubmit = document.getElementById('btn-submit');
let voteNum = 0;

function vote (event) {
    const id = event.target.id
    voteNum = id
   //console.log(document.getElementById(id).classList.value === 'vote active')
   for(let i = 1; i<6; i++){
    const currentElement = document.getElementById(i)
    if(currentElement.classList.value === 'vote active'){
         return currentElement.classList.remove('active')
    }else if(document.getElementById(id) === 'vote active'){
        document.getElementById(id).classList.remove('active')
   }
   }
 
    return document.getElementById(id).classList.add('active');
    
}




function voteEndHtml() {
    
    
    
    if(document.getElementById(1).classList.value === 'vote active'){
        return updateHtml()
    }else if(document.getElementById(2).classList.value === 'vote active'){
        return updateHtml()
    }else if (document.getElementById(3).classList.value === 'vote active'){
        return updateHtml()
    }else if (document.getElementById(4).classList.value === 'vote active'){
        return updateHtml()
    }else if (document.getElementById(5).classList.value === 'vote active'){
        return updateHtml()
    }else {
        return console.log("please vote!")
    }

}

function updateHtml() {
    
        containerDiv.classList.remove('container')
        containerDiv.classList.add('container-two');
        containerDiv.innerHTML = `
        <div>
        <img class="svg-thank-you" src="thankyou.svg" alt="svg" /></div>
        <div class="selected-number" ><p>You Selected ${voteNum} out of 5</p></div>
    
        <h1>Thank you!</h1>

        <p>We appreciate you taking the time to give a rating. If you ever need more support
        , dont hesitate to get in touch!</p>
        `
}

one.addEventListener('click',vote)
two.addEventListener('click',vote)
three.addEventListener('click',vote)
four.addEventListener('click',vote)
five.addEventListener('click',vote)
btnSubmit.addEventListener('click',voteEndHtml)