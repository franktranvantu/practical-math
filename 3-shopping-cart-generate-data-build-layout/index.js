function roll(min, max, isFloat) {
    const r = Math.random() * (max - min) + min
    return isFloat ? r : Math.floor(r)
}

const fruits = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🥝", "🍅", "🥥", "🥑", "🍆", "🥔", "🥕", "🌽", "🌶", "🥒", "🥬", "🥦"]

const products = [...Array(5)].map((_, i) => {
    return {
        index: i,
        title: fruits[roll(0, fruits.length)],
        price: roll(1, 10, true).toFixed(2),
        count: roll(1, 6)
    }
})

console.log(products);

const productsSelector = document.querySelector('#products')
let cartHtml = ''
products.forEach(product => {
    cartHtml += 
    `<div class="product">
        <div>${product.title}</div>
        <div>$${product.price}</div>
        <div>x${product.count}</div>
    </div>`
})

productsSelector.innerHTML = cartHtml