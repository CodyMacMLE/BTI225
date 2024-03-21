/**
 * BTI225 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Cody MacDonald
 *      Student ID: 159702232
 *      Date:       March 7th, 2024
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products } = window;
var filterCategory = 'allProducts';
var filterOrderByPrice = 'none';
var filteredProducts = products;

function bblSort(products, order = 'asc')
{
  if (order == 'asc')
  {
    for (var i = 0; i < products.length; ++i)
    {
      for (var j = 0; j < (products.length - i - 1); ++j)
      {
        if (products[j].price > products[j + 1].price)
        {
          var tmp = products[j];
          products[j] = products[j + 1];
          products[j + 1] = tmp;
        }
      }
    }
  }
  else if (order == 'desc')
  {
    for (var i = 0; i < products.length; ++i)
    {
      for (var j = 0; j < (products.length - i - 1); ++j)
      {
        if (products[j].price < products[j + 1].price)
        {
          var tmp = products[j];
          products[j] = products[j + 1];
          products[j + 1] = tmp;
        }
      }
    }
  }
}

function createTdOfImage(src, alt, height = 100, width = 100)
{
  let newPhoto = document.createElement('td');
  let image = document.createElement('img');
  image.src = `../${src}`;
  image.alt = alt;
  image.width = width;
  image.height = height;
  newPhoto.appendChild(image);
  return newPhoto;
}

function createTdOfDetails(product)
{
  let newDetail = document.createElement('td');
  let p = document.createElement('p');
  p.classList.add('details');
  p.innerHTML = `
    <span>Price:</span> $${product.price}<br>
    <span>Description:</span> ${product.description}<br>
    <span>Category:</span> ${product.category}
  `;
  newDetail.appendChild(p);
  return newDetail;
};

// This functions puts products into table on HTML
function populateProductsTable(products)
{
  const tableProducts = document.querySelector('#products');

  // Check if table is populated - clear if true
  if (tableProducts.querySelector('tr'))
    tableProducts.innerHTML = '';

  // populating table "#main-table #products"
  for (const product of products)
  {
    let newTR = document.createElement('tr');
    
    // ID
    let newID = document.createElement('td');
    newID.innerText = `${product.id}`;
    newTR.appendChild(newID);

    // Title
    let newTitle = document.createElement('td');
    newTitle.innerText = `${product.title}`;
    newTR.appendChild(newTitle);

    // Photo
    newTR.appendChild(createTdOfImage(product.image, product.category));

    // Details
    newTR.appendChild(createTdOfDetails(product)); 
    
    // Rating
    let newRating = document.createElement('td');
    newRating.innerText = `${product.rating.rate}`;
    newTR.appendChild(newRating);

    // Append Table Row
    tableProducts.appendChild(newTR);
  }
};

// This function 
function updateProductsTable(products)
{
  console.log("Filter Category: ", filterCategory);
  const heading = document.querySelector('#selected-product-category');

  if (filteredProducts.length > 0)
  {
    filteredProducts = [];
  }

  if (filterCategory != 'allProducts')
  {
    switch (filterCategory)
    {
      case 'clothing':
        for (const product of products)
        {
         
          if (product.category == "men's clothing" || product.category == "women's clothing")
          {
            console.log(product.id, product.category, product.category == "men's clothing", product.category == "women's clothing" ,'\n');
            filteredProducts.push(product);
          }
        }
        console.log(filteredProducts);
        heading.innerText = 'Products: Clothing';
        break;
      case 'mensClothing':
        for (const product of products)
        {
          if (product.category == "men's clothing")
          {
            filteredProducts.push(product);
          }
        }
        heading.innerText = 'Products: Men\'s Clothing';
        break;
      case 'womensClothing':
        for (const product of products)
        {
          if (product.category == "women's clothing")
          {
            filteredProducts.push(product);
          }
        }
        heading.innerText = 'Products: Women\'s Clothing';
        break;
      case 'jewelry':
        for (const product of products)
        {
          if (product.category == "jewelry")
          {
            filteredProducts.push(product);
          }
        }
        heading.innerText = 'Products: Jewelry';
        break;
      case 'electronics':
        for (const product of products)
        {
          if (product.category == "electronics")
          {
            filteredProducts.push(product);
          }
        }
        heading.innerText = 'Products: Electronics';
        break;
    }

    if (filterOrderByPrice != 'none')
    {
      switch (filterOrderByPrice)
      {
        case 'desc':
          bblSort(filteredProducts, 'desc');
          heading.innerText = heading.innerText + ' - Top 3 by Highest Price';
          break;
        case 'asc':
          bblSort(filteredProducts);
          heading.innerText = heading.innerText + ' - Top 3 by Lowest Price';
          break;
      }
      filteredProducts = filteredProducts.slice(0,3);
    }
  }

  if (filterCategory == 'allProducts' && filterOrderByPrice == 'none')
  {
    heading.innerText = 'All Products';
    populateProductsTable(products);
  }
  else
  {
    if (filterOrderByPrice != 'none')
    {
      filteredProducts = products;

      heading.innerText = 'All Products';
      switch (filterOrderByPrice)
      {
        case 'desc':
          bblSort(filteredProducts, 'desc');
          heading.innerText = heading.innerText + ' - Top 3 by Highest Price';
          break;
        case 'asc':
          bblSort(filteredProducts);
          heading.innerText = heading.innerText + ' - Top 3 by Lowest Price';
          break;
      }
      filteredProducts = filteredProducts.slice(0,3);
    }
    populateProductsTable(filteredProducts);
  }

};

function showAllProducts()
{
  filterCategory = 'allProducts'
  updateProductsTable(products);
}

function showClothing()
{
  filterCategory = 'clothing'
  updateProductsTable(products);
}

function showWomensClothing()
{
  filterCategory = 'womensClothing'
  updateProductsTable(products);
}

function showMensClothing()
{
  filterCategory = 'mensClothing';
  updateProductsTable(products);
}

function showJewelry()
{
  filterCategory = 'jewelry'
  updateProductsTable(products);
}

function showElectronics()
{
  filterCategory = 'electronics'
  updateProductsTable(products);
}

function showTop3ByPrice()
{
  if (filterOrderByPrice == 'none')
    filterOrderByPrice = 'desc';
  else if (filterOrderByPrice == 'desc')
    filterOrderByPrice = 'asc';
  else if (filterOrderByPrice = 'asc')
    filterOrderByPrice = 'desc';
  
  updateProductsTable(products);
}

function NotShowTop3ByDoubleClicked()
{
  filterOrderByPrice = 'none';
  updateProductsTable(products);
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  updateProductsTable(products);

  document.querySelector('#show-all').addEventListener("click", () => {
    showAllProducts();
  });
  
  document.querySelector('#show-clothing').addEventListener("click", () => {
    showClothing();
  });
  
  document.querySelector('#show-womens-clothing').addEventListener("click", () => {
    showWomensClothing();
  });
  
  document.querySelector('#show-mens-clothing').addEventListener("click", () => {
    showMensClothing();
  });
  
  document.querySelector('#show-jewelry').addEventListener("click", () => {
    showJewelry();
  });
  
  document.querySelector('#show-electronics').addEventListener("click", () => {
    showElectronics();
  });
  
  document.querySelector('#show-top3').addEventListener("click", () => {
    showTop3ByPrice();
  });
  
  document.querySelector('#show-top3').addEventListener("dblclick", () => {
    NotShowTop3ByDoubleClicked();
  });
});

// For debugging, display all of our data in the console. You can remove this later.
console.log("App Data:", products);
console.log("Filtered Data:", filteredProducts)
