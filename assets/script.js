// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Jackson Seim" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = gb + cc + sugar //total

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')

const totalAmt = document.querySelector('#qty-total')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
const gbAmt = document.querySelector('#qty-gb')
gbPlusBtn.addEventListener('click', function() {
    gb++
    total++
    gbAmt.textContent = gb
    console.log(gb)
    
    totalAmt.textContent = total
    console.log(`toatl is ${total}`)
})
gbMinusBtn.addEventListener('click', function(){
    if (gb>0){
        gb--
        total--
        gbAmt.textContent = gb

        totalAmt.textContent = total
        console.log(`toatl is ${toatl}`)

    }
    console.log(gb)
})

const ccPlusButton = document.querySelector('#add-cc')
const ccMinusButton = document.querySelector('#minus-cc')
const ccAmt = document.querySelector('#qty-cc')


ccPlusButton.addEventListener('click', function(){
    cc++
    total++
    ccAmt.textContent = cc
    console.log(cc)
    totalAmt.textContent = total
    console.log(`toatl is ${total}`)
})
ccMinusButton.addEventListener('click', function(){
    if (cc > 0){
        cc--
        total--
        ccAmt.textContent = cc
        totalAmt.textContent = total
        console.log(`toatl is ${toatl}`)
    }
    console.log(cc)
})

const sugarPlusButton = document.querySelector('#add-sugar')
const sugarMinusButton = document.querySelector('#minus-sugar')
const sugarAmt = document.querySelector('#qty-sugar')

sugarPlusButton.addEventListener('click', function(){
    sugar++
    total++
    sugarAmt.textContent = sugar
    console.log(sugar)
    totalAmt.textContent = total
    console.log(`toatl is ${total}`)
})
sugarMinusButton.addEventListener('click', function(){
    if (sugar>0){
        sugar--
        total--
        sugarAmt.textContent = sugar
        totalAmt.textContent = total
        console.log(`toatl is ${toatl}`)
    }
    console.log(sugar)
})








// TODO: Hook up event listeners for the rest of the buttons