var item, userbasket, product;

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}


userbasket = [];
product = ['shirt', 'hat', 'jacket', 'jeans', 'dress'];


document.getElementById('button').addEventListener('click', (event) => {
  product.forEach((item) => {
    if (document.getElementById('user').value == item) {
      let element_list = document.getElementById('list');
      let new_li = document.createElement('li');
      new_li.innerText = document.getElementById('user').value;

      element_list.appendChild(new_li);
      product.unshift(document.getElementById('text').value);
    }
  });

});