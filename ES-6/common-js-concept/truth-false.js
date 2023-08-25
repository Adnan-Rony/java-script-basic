/* 
truthy:
1.true
2.any number(+ve,-ve) will be truthy other than zero(0)
3.any string is truthy except empty string
4.empty object.
5.empty array
*/


const x=[];
if(x)
{
    console.log('value is truthy');
}
else
{
    console.log('value is falsy');
}