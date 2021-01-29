function countVowels()
{
var x = document.getElementById("textArea").value;
x=x.toLowerCase();
var l=x.length;
var i=0;
var count=0;
for(i=0;i<l;i++)
{
    var ch = x.charAt(i);
    if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')
    count=count+1;
}
document.getElementById("vowels").innerHTML= count;
}
function changeStyle()
{
    document.getElementById("button").style.color = "white";
    document.getElementById("button").style.backgroundColor = "black";
}
function normal()
{
    document.getElementById("button").style.color = "black";
    document.getElementById("button").style.backgroundColor = "white";
}
