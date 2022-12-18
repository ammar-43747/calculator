let str=" ";
let btns=document.querySelectorAll('.button');
Array.from(btns).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='=')
        {
            str=eval(str);
            document.querySelector('input').value=str;
        }
    else if(e.target.innerHTML=='C')
    {
        str="";
        document.querySelector('input').value=str;
    }
    else if(e.target.innerHTML=='_')
    {
        str=str.slice(0,str.length-1);
        document.querySelector('input').value=str;
    }
    else{
        str=str+e.target.innerHTML;
        document.querySelector('input').value=str;
    }   
    })
}) 