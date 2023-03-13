const btn1=document.getElementById("button1");
const btn2=document.getElementById("button2");
const btn3=document.getElementById("button3");
const btn4=document.getElementById("button4");
const btn5=document.getElementById("button5");
btn1.addEventListener("click",func1);
function func1()
{
    alert("Clicked Button1");
}
btn2.addEventListener("dblclick",func2);
function func2()
{
    alert("Clicked Button2");
}
btn3.addEventListener("mouseover",func3);
function func3()
{
    alert("Button3 Excited");
}
btn4.addEventListener("mouseout",func4);
function func4()
{
    alert("Button4 Excited");
}
btn5.addEventListener("keypress",func5);
function func5()
{
    alert("Button5 Key Pressed");
}