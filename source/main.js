// var isVisable = false
// var cusFeedbackForm = document.querySelector(".cus-feedback-form")
// var paintColor = document.getElementById("star-color")
// var paintColor1 = document.getElementById("star-color1")
// var paintColor2 = document.getElementById("star-color2")
// var paintColor3 = document.getElementById("star-color3")
// var paintColor4 = document.getElementById("star-color4")
// var paintColor5 = document.querySelector(".fa-star")
// var yourName = document.getElementById("name")
// var comment = document.getElementById("comment")
// function visable()  {
//     cusFeedbackForm.classList.add("isVisible")
// }

// function closePopup() {
//     cusFeedbackForm.classList.remove("isVisible")
//     paintColor.classList.remove("fas")
//     paintColor.classList.add("far")
//     paintColor1.classList.remove("fas")
//     paintColor1.classList.add("far")
//     paintColor2.classList.remove("fas")
//     paintColor2.classList.add("far")
//     paintColor3.classList.remove("fas")
//     paintColor3.classList.add("far")
//     paintColor4.classList.remove("fas")
//     paintColor4.classList.add("far")
// }

// function painColor() {
//     if(paintColor.classList.contains("fas")) {
//         paintColor.classList.remove("fas")
//         paintColor.classList.add("far")
//         return
//     }
//     paintColor.classList.remove("far")
//     paintColor.classList.add("fas")
// }
// function painColor1() {
//     if(paintColor1.classList.contains("fas")) {
//         paintColor1.classList.remove("fas")
//         paintColor1.classList.add("far")
//         return
//     }
//     paintColor1.classList.remove("far")
//     paintColor1.classList.add("fas")
// }
// function painColor2() {
//     if(paintColor2.classList.contains("fas")) {
//         paintColor2.classList.remove("fas")
//         paintColor2.classList.add("far")
//         return
//     }
//     paintColor2.classList.remove("far")
//     paintColor2.classList.add("fas")
// }
// function painColor3() {
//     if(paintColor3.classList.contains("fas")) {
//         paintColor3.classList.remove("fas")
//         paintColor3.classList.add("far")
//         return
//     }
//     paintColor3.classList.remove("far")
//     paintColor3.classList.add("fas")
// }
// function painColor4() {
//     if(paintColor4.classList.contains("fas")) {
//         paintColor4.classList.remove("fas")
//         paintColor4.classList.add("far")
//         return
//     }
//     paintColor4.classList.remove("far")
//     paintColor4.classList.add("fas")
// }
// function appendContent() {
//     var addFbInput = document.querySelector(".add-fb-input")
//     var cusFeedbackContent = document.querySelector(".cus-feedback-content");

//     var cusFeedback = document.createElement("div");
//     cusFeedback.classList.add("cus-feedback");

//     var avatarCus = document.createElement("div");
//     avatarCus.classList.add("avatar-cus");

//     var cusPic = document.createElement("img");
//     cusPic.classList.add("cus-pic");
//     cusPic.src = "img/cdr1820775_638171521494543071.jpg";
//     avatarCus.appendChild(cusPic);

//     var cusName = document.createElement("h4");
//     cusName.classList.add("cus-name");
//     cusName.innerText = yourName.value;
//     avatarCus.appendChild(cusName);

//     cusFeedback.appendChild(avatarCus);

//     var cusContent = document.createElement("div");
//     cusContent.classList.add("cus-content");

//     var cusMes = document.createElement("div");
//     cusMes.classList.add("cus-mes");
//     cusMes.innerText = comment.value;
//     cusContent.appendChild(cusMes);

//     var star = document.createElement("div");
//     star.classList.add("star");

//     var starIcon = document.createElement("i");
//     starIcon.classList.add("far", "fa-star");
//     starIcon.style.color = "rgb(205, 178, 26)";
//     star.appendChild(starIcon);
//     var starIcon1 = document.createElement("i");
//     starIcon1.classList.add("far", "fa-star");
//     starIcon1.style.color = "rgb(205, 178, 26)";
//     star.appendChild(starIcon1);
//     var starIcon2 = document.createElement("i");
//     starIcon2.classList.add("far", "fa-star");
//     starIcon2.style.color = "rgb(205, 178, 26)";
//     star.appendChild(starIcon2);
//     var starIcon3 = document.createElement("i");
//     starIcon3.classList.add("far", "fa-star");
//     starIcon3.style.color = "rgb(205, 178, 26)";
//     star.appendChild(starIcon3);
//     var starIcon4 = document.createElement("i");
//     starIcon4.classList.add("far", "fa-star");
//     starIcon4.style.color = "rgb(205, 178, 26)";
//     star.appendChild(starIcon4);
    

//     cusContent.appendChild(star);

//     cusFeedback.appendChild(cusContent);

//     cusFeedbackContent.appendChild(cusFeedback);
//     reset()
    
// }
// function reset() {
//     yourName.value = ""
//     comment.value = ""
//     closePopup()
// }
var isVisable = false;
var cusFeedbackForm = document.querySelector(".cus-feedback-form");
var paintColors = document.querySelectorAll(".far.fa-star");
var itemsNeedbackground = document.querySelectorAll(".pro-color-item");
var yourName = document.getElementById("name");
var comment = document.getElementById("comment");
var addItemTocardForm = document.querySelector(".product-add-to-card")

function visable() {
    cusFeedbackForm.classList.add("isVisible");
}
function isDisplayed() {
    addItemTocardForm.classList.add("isDisplayed")
}
var classRemove = "";
// function closePopup(classToRemove) {
//     if (classToRemove === "isVisible") {
//         cusFeedbackForm.classList.remove("isVisible");
//         paintColors.forEach(function (star) {
//             star.classList.remove("fas");
//             star.classList.add("far");
//         });
//     } else if (classToRemove === "isDisplayed") {
//         addItemTocardForm.classList.remove("isDisplayed");
//     }
// }
function closePopup() {
    cusFeedbackForm.classList.remove("isVisible");
        paintColors.forEach(function (star) {
            star.classList.remove("fas");
            star.classList.add("far");
        });
}
function closePopup2() {
    addItemTocardForm.classList.remove("isDisplayed")
}


function paintColor(index) {
    return function () {
        var star = paintColors[index];
        if (star.classList.contains("fas")) {
            star.classList.remove("fas");
            star.classList.add("far");
            return;
        }
        star.classList.remove("far");
        star.classList.add("fas");
    };
}

// Attach click event listeners using a loop
for (var i = 0; i < paintColors.length; i++) {
    paintColors[i].addEventListener("click", paintColor(i));
}

function appendContent() {
    var cusFeedbackContent = document.querySelector(".cus-feedback-content");

    var cusFeedback = document.createElement("div");
    cusFeedback.classList.add("cus-feedback");

    var avatarCus = document.createElement("div");
    avatarCus.classList.add("avatar-cus");

    var cusPic = document.createElement("img");
    cusPic.classList.add("cus-pic");
    cusPic.src = "img/cdr1820775_638171521494543071.jpg";
    avatarCus.appendChild(cusPic);

    var cusName = document.createElement("h4");
    cusName.classList.add("cus-name");
    cusName.innerText = yourName.value;
    avatarCus.appendChild(cusName);

    cusFeedback.appendChild(avatarCus);

    var cusContent = document.createElement("div");
    cusContent.classList.add("cus-content");

    var cusMes = document.createElement("div");
    cusMes.classList.add("cus-mes");
    cusMes.innerText = comment.value;
    cusContent.appendChild(cusMes);

    var star = document.createElement("div");
    star.classList.add("star");

    // Clone the first star to create the remaining stars
    var starIcon = document.querySelector(".far.fa-star").cloneNode(true);

    // Append the cloned stars to the star container
    for (var i = 0; i < 5; i++) {
        star.appendChild(starIcon.cloneNode(true));
    }

    cusContent.appendChild(star);

    cusFeedback.appendChild(cusContent);

    cusFeedbackContent.appendChild(cusFeedback);
    reset();
}

function reset() {
    yourName.value = "";
    comment.value = "";
    closePopup();
}
var currentAmount = 1;
var increaseNum = document.querySelector(".amount-num");

function increase() {
    // Tăng giá trị và cập nhật vào phần tử hiển thị
    currentAmount++;
    increaseNum.innerText = currentAmount;
}

function decrease() {
    // Kiểm tra nếu giá trị hiện tại lớn hơn 1 trước khi giảm
    if (currentAmount > 1) {
        // Giảm giá trị và cập nhật vào phần tử hiển thị
        currentAmount--;
        increaseNum.innerText = currentAmount;
    }
}
function hasBackground(index) {
    var proColorItem = itemsNeedbackground[index];
       
    proColorItem.classList.add("hasbackground");
}