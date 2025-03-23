//immediately invoked function expressions.

const getName = () => 'name'
const getAge = () => 25

const getdetails = (function iife(){
    console.log('log');
    const name = "General Motors";
    const field = "automobile";
    const getSupplierName = () => name;
    const getSupplierField = () => field;
    return {
        name,
        field,
        getName: () => getSupplierName(),
        getField: () => getSupplierField(),
      };  
})();

console.log(getdetails.getName());