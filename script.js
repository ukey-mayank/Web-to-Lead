let captchaCheck = false

// function to check before submitting the form
let beforeSubmit = (event) => {
    if(captchaCheck){
        let outputdate = document.querySelector('.outputdate')
        let inputdate = document.querySelector('.inputdate') // string --> en_IN

        console.log(inputdate.value)

        let formattedDate = new Date(inputdate.value).toLocaleDateString('en-IN')
        outputdate.value = formattedDate
    }else{
        alert("Please check reCAPTCHA to submit the lead.")
        event.preventDefault()
    }
}

// function to get goolge reCaptcha
function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") { var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value); elems["ts"] = JSON.stringify(new Date().getTime()); document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500);

// update the catcha value
let captchaSuccess = ()=>{
    captchaCheck = true
}
