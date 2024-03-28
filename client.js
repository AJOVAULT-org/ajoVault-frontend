document.addEventListener('DOMContentLoaded', function() {
    const close = document.querySelector(".click");
    console.log(close)
    close.addEventListener("click", () => {
        const vModel = document.querySelector(".verification-model").style.display = "none";
        const cModel = document.querySelector(".CheckOtp-model").style.display = "block";
        // setOtpModal(true);
    });
});
