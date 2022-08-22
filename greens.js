fetch('http://localhost:5000/products')
.then(function(response) {
    return response.json();
})
.then(function(pro) {
 console.log(pro);

let pro = document.getElementById('products')
pro.forEach(y => {
    let List = document.createElement('li')
    pro.appendChild(list)
})
})
.catch(function(error){
 console.log('error');
});

fetch('http://localhost:5000/products/Fruits')
.then(function(response) {
    return response.json();
})
.then(function(fru) {
 console.log(fru);

let fetchfruits = document.getElementById('fruits')
fetchfruits.forEach(fruit => {
    let ItemList = document.createElement('li')
     fetchfruits.appendChild(ItemList)
})
})
.catch(function(error){
 console.log('error');
});


fetch('http://localhost:5000/products/vegetables')
.then(function(response) {
    return response.json();
})
.then(function(vege) {
 console.log(vege);

let vege = document.getElementById('vegetables')
vege.forEach(vegetables=> {
    let Item = document.createElement('li')
   vege.appendChild(Item)
})
})
.catch(function(error){
 console.log('error');
});





