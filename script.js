function calculateScore() {
    let score = 0;
    let answers = document.querySelectorAll("input[type='radio']:checked");

    answers.forEach(a => {
        score += parseInt(a.value);
    });

    let percentage = (score / 1) * 100;

    document.getElementById("progressBar").style.width = percentage + "%";

    let resultText = "درجتك: " + percentage + "%";

    if (percentage >= 80) {
        localStorage.setItem("passed", "true");
        window.location.href = "certificate.html";
    } else {
        document.getElementById("result").innerHTML = resultText + "<br> حاول مرة أخرى 💡";
    }
}