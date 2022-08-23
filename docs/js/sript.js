let text_input = document.querySelector('input');
let btn_input = document.querySelector('button');

text_input.addEventListener('keydown', ()=> text_input.style.color = "black" );

btn_input.addEventListener('click', (e)=> {
    let text_input_content = text_input.value.toLowerCase();

    if(text_input_content.endsWith('@gmail.com') || text_input_content.endsWith('@icloud.com') || 
        text_input_content.endsWith('@yahoo.com') || text_input_content.endsWith('@outlook.com')) {
        document.querySelector('.error_alert').classList.add('deactive');
        // document.querySelector('.title_img').classList.add('errorless');
    }
    else {
        document.querySelector('.error_alert').classList.remove('deactive');
        // document.querySelector('.title_img').classList.remove('errorless');
        e.preventDefault();
    }
});
