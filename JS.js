function getRandomIntInclusive(){
    min = Math.ceil(1);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


let label1 = document.getElementById('label1')
let label2 = document.getElementById('label2')
count = 0
label1.innerHTML = (getRandomIntInclusive()).toString()
label2.innerHTML = (getRandomIntInclusive()).toString()


function result(){
    let res = parseInt(document.getElementById('label1').innerHTML) * parseInt(document.getElementById('label2').innerHTML)  

    let text = document.getElementById('text')
    
    if(res === parseInt(text.value)){
        count += 1
        text.value = ''
        document.getElementById('result').innerHTML = count.toString()
        label1.innerHTML = (getRandomIntInclusive()).toString()
        label2.innerHTML = (getRandomIntInclusive()).toString()
    }
}



