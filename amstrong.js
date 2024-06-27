let n=125;
var total=0
temp=n;
while(temp!=0)
{
    rem=temp%10;
    total+=rem**3
    temp=(temp-rem)/10;
}
if(n==total)
{
    console.log("amstrong")
}
else 
{
console.log("not")
}
