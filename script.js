// function to check before submitting the form
let beforeSubmit = () => {
    let outputdate = document.querySelector('.outputdate')
    let inputdate = document.querySelector('.inputdate') // string --> en_IN

    console.log(inputdate.value)

    let formattedDate = new Date(inputdate.value).toLocaleDateString('en-IN')
    outputdate.value = formattedDate
}