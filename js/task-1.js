const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItems.length}`);
categoriesItems.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const elementsCount = item.querySelectorAll('ul li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
const heading = document.querySelectorAll("h2").forEach(h2 => {
  h2.classList.add("title");
});
const frame = document.querySelector("#categories");
frame.classList.add("list");
document.querySelectorAll(".item ul li").forEach(li => {
  li.classList.add("element");
});
const group = document.querySelectorAll(".item ul").forEach(ul => {
  ul.classList.add("items")
});