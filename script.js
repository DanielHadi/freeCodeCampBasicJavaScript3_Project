const getCheckbtn = document.getElementById("check-btn");
const getClearbtn = document.getElementById("clear-btn");
const getUserinput = document.getElementById("user-input");

const checkInput = () => {
    console.log(getUserinput.value);
}

getCheckbtn.addEventListener("click", checkInput);