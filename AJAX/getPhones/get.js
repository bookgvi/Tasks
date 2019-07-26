function go(){
    const btn = document.querySelector('.btnGet');
    btn.addEventListener('click',hGetPhones);

    function hGetPhones(){    
    let xhr = new XMLHttpRequest();
    xhr.open('GET','../getPhones/phones.json');
    xhr.send();

    xhr.addEventListener('readystatechange',(e)=>{
        let xhrState = e.currentTarget;
        if(xhrState.readyState!=4) return;

        if(xhrState.status != 200){ 
            console.error('Catched...', xhrState.status, xhrState.statusText);
            return;
        }
        console.log(xhrState.responseText);
        btn.value = 'done'
    });
        btn.value = 'getting...'

    }
}
