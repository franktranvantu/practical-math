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

const cartTotal = products.reduce((accumulator, product) => {
    return accumulator + (product.price) * product.count
}, 0).toFixed(2)

console.log(cartTotal);

// roll() for a random Tax Rate between 5% and 9%
// rounding to the nearest 10th
const taxRate = roll(5, 10, true).toFixed(1)

// Apply that Tax Rate to the Cart Total
function taxed(value) {
    return taxRate / 100 * value + parseFloat(value)
}
const taxedTotal = taxed(cartTotal).toFixed(2)

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

let summary = document.querySelector("#summary")
let summaryHtml = ''
summaryHtml += `<div>Total: 💲${cartTotal}</div>`
summaryHtml += `<div>Tax Rate: ${taxRate}%</div>`
summaryHtml += `<div>Taxed Total: 💲${taxedTotal}</div>`
summary.innerHTML = summaryHtml