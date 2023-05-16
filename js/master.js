//----------------------------------landing page
let landingPage = document.querySelector(".landing-page"),
  settBoxIconholder = document.querySelector(".settings-box .icon"),
  settBoxIcon = document.querySelector(".settings-box i"),
  settSpace = document.querySelector(".settings-box"),
  colors = document.querySelectorAll(".settings-box .colors li"),
  backgroundOpts = document.querySelectorAll(".background-sett span"),
  statistics = document.querySelector(".statistics"),
  prog = document.querySelectorAll(".statistics .progress span"),
  restBtn = document.querySelector(".reset-sett button"),
  navigation = document.querySelector(".navigation"),
  links = document.querySelectorAll(".navigation li a"),
  burgerIcon = document.querySelector(".menu-icon");
// remove the active class from all elements
function removeActive(element) {
  element.forEach((ele) => {
    ele.classList.remove("active");
  });
}
// change background every single 10 sec
let randomBckg = setInterval(() => {
  if (backgroundOpts[0].classList.contains("active")) {
    let randomNum = Math.floor(Math.random() * 5);
    landingPage.style.backgroundImage = `url("../iamges/image-slider/img-0${
      randomNum + 1
    }.jpg")`;
  }
}, 10000);
// remove & add background option and insert the option on local storage
backgroundOpts.forEach((opt) => {
  opt.addEventListener("click", () => {
    removeActive(backgroundOpts);
    opt.classList.add("active");
    window.localStorage.setItem("opt", opt.textContent);
  });
});
// update background option from  local storage after refresh
backgroundOpts.forEach((opt) => {
  if (opt.textContent === window.localStorage.getItem("opt")) {
    removeActive(backgroundOpts);
    opt.classList.add("active");
  }
});
// add click event to settings box settings box
function openSett(e) {
  settSpace.classList.toggle("open");
  settBoxIcon.classList.toggle("fa-spin");
}
function getCurrentColor() {
  if (window.localStorage.getItem("color") !== null) {
    document.documentElement.style.setProperty(
      "--main-color",
      window.localStorage.getItem("color")
    );
    colors.forEach((color) => {
      if (color.dataset.color != window.localStorage.getItem("color")) {
        color.classList.remove("active");
      } else {
        color.classList.add("active");
      }
    });
  }
}
getCurrentColor();
settBoxIconholder.addEventListener("click", openSett);
// set the main color & add to local Storge
function changeMainColor(e) {
  removeActive(colors);
  e.target.classList.add("active");
  window.localStorage.setItem("color", this.dataset.color);
  document.documentElement.style.setProperty(
    "--main-color",
    this.dataset.color
  );
}
colors.forEach((color) => {
  color.addEventListener("click", changeMainColor);
});
// reset the settings box options
restBtn.addEventListener("click", (e) => {
  window.localStorage.clear();
  window.location.reload();
  // colors.forEach((color, index) => {
  //   if (index === 0) {
  //     color.classList.add("active");
  //     document.documentElement.style.setProperty(
  //       "--main-color",
  //       color.dataset.color
  //     );
  //   } else {
  //     color.classList.remove("active");
  //   }
  // });
  // backgroundOpts.forEach((opt, index) => {
  //   if (index === 0) {
  //     opt.classList.add("active");
  //   } else {
  //     opt.classList.remove("active");
  //   }
  // });
});
// progress animation for satatistics section
function scrollDown() {
  if (window.scrollY >= statistics.offsetTop - 200) {
    prog.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  } else {
    prog.forEach((span) => {
      span.style.width = "0";
    });
  }
}
window.addEventListener("scroll", scrollDown);
// add click events to service gallery
let srvImag = document.querySelectorAll(".srv img");
srvImag.forEach((img) => {
  img.addEventListener("click", focusOnImg);
  document.addEventListener("click", removePopup);
});
function focusOnImg(e) {
  let overly = document.createElement("div");
  overly.className = "overly-popup";
  let box = document.createElement("div");
  box.className = "srv-box";
  let img = document.createElement("img");
  img.src = e.target.src;
  img.className = "img-popup";
  let text = document.createElement("div");
  text.classList = "discreption";
  let header = document.createElement("h2"),
    para = document.createElement("p");
  header.innerHTML = "Description";
  para.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna";
  text.appendChild(header);
  text.appendChild(para);
  box.appendChild(img);
  box.appendChild(text);
  overly.appendChild(box);
  document.body.appendChild(overly);
}
function removePopup(e) {
  // document.querySelector(".overly-popup").remove()
  if (e.target.className === "overly-popup") {
    document.querySelector(".overly-popup").remove();
  }
}
// add click event to navigation
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(`.${e.target.innerText}`).scrollIntoView();
  });
});
// add active class to burger icon
burgerIcon.addEventListener("click", () => {
  burgerIcon.classList.toggle("active");
  navigation.classList.toggle("open");
});
