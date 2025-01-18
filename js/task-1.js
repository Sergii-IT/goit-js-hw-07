const numberCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberCategories.length}`);

numberCategories.forEach((category) => {
    const categoriesTitle = category.querySelector("h2").textContent;
    const listLenght = category.querySelectorAll("ul > li").length;

console.log(`Category: ${categoriesTitle}`);
console.log(`Elements: ${listLenght}`);
})

