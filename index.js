const display = document.querySelector('.display');
const buttons = Array.from(document.getElementsByTagName('button'))
let result;

// console.log(buttons);

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case "=":
                display.innerText = eval(display.innerText);
                break;
            case 'del':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }    
                break;
            case 'clr':
                display.innerText = " ";
                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
})