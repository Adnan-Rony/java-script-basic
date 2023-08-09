function CubeNumber(number)
{
    if(typeof number !=='number' || number<0)
    {
        return 'please enter valid number';
    }
   
   
    const Cube=number * number * number;
   
   
    return Cube;
}
const result=CubeNumber(3);
console.log(result);




