'use strict';
//Checking email form

//Get value
const emailForm = document.querySelector('#lamo_haha');
const emailInput = document.querySelector('#email-input');
const formContainer = document.querySelector('#email-form');
var show = document.getElementById("show");
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//Check the email, if correct, show the content
emailForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (emailRegex.test(emailInput.value.trim())) { //check the email, get true or false
        formContainer.style.display = 'none';
        show.style.display = 'block';
    } else {
        alert("Email is invalid, please change the email");
    }
});

//Open boxes
//Get boxes
var boxes = document.querySelectorAll(".box");
//Loop for each box
boxes.forEach(function(box) {
    //Function if a box is clicked
    box.addEventListener("click", function() {
        //Get values
        var the_parent = document.getElementById(`${box.id}`);
        var the_child = the_parent.querySelector("div").id;
        var correct = document.getElementById(the_child);
        var yay = correct.querySelector("div").id;
        var more = document.getElementById(yay);
        var btn = correct.querySelector(".frenchfries").id;
        var real_btn = document.getElementById(btn);
        //Add class into the div tag if it's clicked
        box.classList.toggle("clicked");
        if (box.classList.contains("clicked")) { //Check if clicked, and show content
            more.style.display = "block";
            more.style.height = "fit-content";
            real_btn.innerHTML = "▲View less";
            for (let i = 0; i < boxes.length; i++) { //Stop the others to expand.
                if (boxes[i].id !== yay) {
                    boxes[i].style.height = "fit-content";
                }
            }
        } else { //Reset the whole box
            more.style.display = "none";
            real_btn.innerHTML = "▼View more";
        }
    });
});