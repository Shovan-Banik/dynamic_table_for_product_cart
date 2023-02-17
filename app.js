let id=0;
function inputValue(id){
    const field=document.getElementById(id);
    const fieldString=field.value;
    const fieldNumber=parseInt(fieldString);
    return fieldNumber;
}
function elementValue(id){
    const elementText=document.getElementById(id).innerText;
    return elementText;
}
function display(pName,pPrice,pQuantity,total){
    const displayTable=document.getElementById('table');
    const tr=document.createElement('tr');
    tr.innerHTML=`
    <td>${id}</td>
    <td>${pName}</td>
    <td>${pPrice}</td>
    <td>${pQuantity}</td>
    <td>${total}</td>
    `
    displayTable.appendChild(tr);
}


document.getElementById('btn1').addEventListener('click',function(){
    id+=1;
    const cardTitle1=elementValue('title1');
    const cardPrice1=elementValue('price1');
    const cardQuantity1=inputValue('input1');
    const totalPrice1=parseInt(cardPrice1)*cardQuantity1;
    display(cardTitle1,cardPrice1,cardQuantity1,totalPrice1);
    const sleep=document.getElementById('btn1').style.display='none';
})
document.getElementById('btn2').addEventListener('click',function(e){
    id+=1;
    const cardTitle2=e.target.parentNode.parentNode.children[0].innerText;
    const cardPrice2=e.target.parentNode.parentNode.children[2].children[0].innerText;
    const cardQuantity2=e.target.parentNode.parentNode.children[3].value;
    const totalPrice2=parseInt(cardPrice2)+parseInt(cardQuantity2);
    display(cardTitle2,cardPrice2,cardQuantity2,totalPrice2);
    const sleep=document.getElementById('btn2').style.display='none';
})
document.getElementById('btn3').addEventListener('click',function(e){
    id+=1;
    const cardTitle3=e.target.parentNode.parentNode.children[0].innerText;
    const cardPrice3=e.target.parentNode.parentNode.children[2].children[0].innerText;
    const cardQuantity3=e.target.parentNode.parentNode.children[3].value;
    const totalPrice3=parseInt(cardPrice3) - parseInt(cardQuantity3);
    display(cardTitle3,cardPrice3,cardQuantity3,totalPrice3);
    const sleep=document.getElementById('btn3').style.display='none';
})