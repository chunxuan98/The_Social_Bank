function loginFunction() {
    let uid = document.getElementById("uid");
    let pwd = document.getElementById("pwd");
    fetch(`http://localhost:3000/login?uid=${uid.value}&pwd=${pwd.value}`, {method: "GET"})
        .then((response) => response.json())
        .then((data) => {
            if (data.length == 0) {
                window.location.href = "failed-login.html";
            } else {
                localStorage.setItem("uid", uid.value);
                localStorage.setItem("acc_amt", data[0].bank_balance)
                window.location.href = "homepage.html";
            }
        })
        .catch((error) => console.log("error", error));
}
