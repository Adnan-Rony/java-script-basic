function matchFinder(string1,string2)
{
        if(typeof string1 !== 'string' || typeof string2 !=='string')
        {
            return 'please provide a string';
        }
        if(string1.length==string2.length)
        return true;

        
         else

    return false;

      


}
const result=matchFinder('John Doe','ohn');
console.log(result);