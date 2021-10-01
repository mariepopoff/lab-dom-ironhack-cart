// ITERATION 1


function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalCalc = price * quantity;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalCalc;
  return subtotalCalc;
}

function calculateAll() {
  let result = 0
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach((product) => {
    updateSubtotal(product);
    result += updateSubtotal(product);
  })

  const total = document.querySelector('#total-value span');
  total.innerHTML = result;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const body= document.querySelector('tbody');
  
  //... your code goes here
  const newTarget = target.parentNode.parentNode;
  console.log('The target in remove is:', newTarget);
  body.removeChild(newTarget);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here 
  const newProduct = document.querySelector('.product').cloneNode(true);
  const newName = document.querySelector('.create-product td input').value;
  const newPrice = document.querySelector('.create-product td:nth-child(2) input').value;
  newProduct.querySelector('.price span').innerHTML = newPrice;
  newProduct.querySelector('.name span').innerHTML = newName;
  newProduct.querySelector('.quantity input').value =0;
  updateSubtotal(newProduct);
  
  document.querySelector('tbody').appendChild(newProduct);
  calculateAll();
  
  document.querySelector('.create-product td input').value ="";
  document.querySelector('.create-product td:nth-child(2) input').value = 0;

  const btn = newProduct.querySelector('.btn-remove');
  btn.addEventListener('click', removeProduct) 
    

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


const createBtn = document.querySelector('#create');
createBtn.addEventListener('click', createProduct);

const removeBtn = document.querySelectorAll('.btn-remove');
removeBtn.forEach((btn) => {
  btn.addEventListener('click', removeProduct)}) 
  
})



