var arrow_l = document.querySelector(".arrow_l");
var arrow_r = document.querySelector(".arrow_r");
var focus = document.querySelector(".focus");
var ul = focus.querySelector("ul");
var ol = focus.querySelector(".circles");
var bgc = document.querySelector("article");
var tri = document.querySelector(".tri");
var box = document.querySelector(".whiteBox");
var boxImg = document.querySelector(".whiteBox img");
var sBar = document.querySelector(".searchBar");
var hide = document.querySelector(".hideNav");
var scrolls = document.querySelector(".scroll");
var scLis = document.querySelectorAll('.scroll ul li');
var rightNav = document.querySelectorAll(".rightNav li");
var hideTaobao = document.querySelector(".hideTaobao")
rightNav[0].addEventListener("mouseenter", function () {
    hideTaobao.style.display = "block";
})
rightNav[0].addEventListener("mouseleave", function () {
    hideTaobao.style.display = "none";
})
document.addEventListener("scroll", function () {
    // 滑动出现隐藏左边导航
    if (window.pageYOffset >= 100) {
        scrolls.style.display = "block"
    } else {
        scrolls.style.display = "none"
    }

})
// 点击到相应的位置
scLis[1].addEventListener("click", function () {

    document.documentElement.scrollTop = 1020;
})
scLis[2].addEventListener("click", function () {

    document.documentElement.scrollTop = 1710;
})
scLis[3].addEventListener("click", function () {

    document.documentElement.scrollTop = 2500;
})
scLis[4].addEventListener("click", function () {

    document.documentElement.scrollTop = 3190;
})
scLis[5].addEventListener("click", function () {

    document.documentElement.scrollTop = 3880;
})
scLis[6].addEventListener("click", function () {

    document.documentElement.scrollTop = 4560;
})
scLis[7].addEventListener("click", function () {

    document.documentElement.scrollTop = 5360;
})
scLis[8].addEventListener("click", function () {

    document.documentElement.scrollTop = 6070;
})
scLis[9].addEventListener("click", function () {

    document.documentElement.scrollTop = 0;
})

document.addEventListener("scroll", function () {
    // 滑动变换颜色
    if (window.pageYOffset >= 10) {
        sBar.blur();

    }
    if (window.pageYOffset >= 600 && window.pageYOffset <= 1300) {
        scLis[1].style.backgroundColor = "rgb(100,195,51)";
    } else {
        scLis[1].style.backgroundColor = "rgb(98,98,98)";
    }
    if (window.pageYOffset >= 1300 && window.pageYOffset <= 2000) {
        scLis[2].style.backgroundColor = "rgb(255,0,54)";
    } else {
        scLis[2].style.backgroundColor = "rgb(98,98,98)";
    }
    if (window.pageYOffset >= 2000 && window.pageYOffset <= 2700) {
        scLis[3].style.backgroundColor = "rgb(234,95,141)";
    } else {
        scLis[3].style.backgroundColor = "rgb(98,98,98)";
    }
    if (window.pageYOffset >= 2700 && window.pageYOffset <= 3300) {
        scLis[4].style.backgroundColor = "rgb(10,166,232)";
    } else {
        scLis[4].style.backgroundColor = "rgb(98,98,98)";
    }
    if (window.pageYOffset >= 3300 && window.pageYOffset <= 4000) {
        scLis[5].style.backgroundColor = "rgb(100,195,51)";
    } else {
        scLis[5].style.backgroundColor = "rgb(98,98,98)";
    }
    if (window.pageYOffset >= 4000 && window.pageYOffset <= 4700) {
        scLis[6].style.backgroundColor = "rgb(241,84,83)";
    } else {
        scLis[6].style.backgroundColor = "rgb(98,98,98)";
    }
    if (window.pageYOffset >= 4700 && window.pageYOffset <= 5400) {
        scLis[7].style.backgroundColor = "rgb(25,200,169)";
    } else {
        scLis[7].style.backgroundColor = "rgb(98,98,98)";
    }
    if (window.pageYOffset >= 5400 && window.pageYOffset <= 6600) {
        scLis[8].style.backgroundColor = "rgb(241,84,83)";
    } else {
        scLis[8].style.backgroundColor = "rgb(98,98,98)";
    }

})
document.addEventListener("scroll", function () {
    // 滑动出现隐藏搜索框
    if (window.pageYOffset >= 700) {
        hide.style.display = "block"
    } else {
        hide.style.display = "none"
    }

})
sBar.addEventListener("focus", function () {
    // 点击后取消文字
    sBar.value = "";
})
sBar.addEventListener("blur", function () {
    sBar.value = "搜索 天猫 商品/品牌/店铺";
})
var lis = document.querySelectorAll(".categoryTypeList ul li");
// 鼠标经过出现各自的推荐商品
bgc.addEventListener("mouseleave", function () {
    box.style.display = "none";
})
lis[0].addEventListener("mouseover", function () {
    boxImg.src = "./img/女装内衣.png";
    box.style.display = "block";
})
lis[1].addEventListener("mouseover", function () {
    boxImg.src = "./img/男装.png";
    box.style.display = "block";
})
lis[2].addEventListener("mouseover", function () {
    boxImg.src = "./img/女鞋.png";
    box.style.display = "block";
})
lis[3].addEventListener("mouseover", function () {
    boxImg.src = "./img/美妆.png";
    box.style.display = "block";
})
lis[4].addEventListener("mouseover", function () {
    boxImg.src = "./img/腕表.png"
    box.style.display = "block";
})
lis[5].addEventListener("mouseover", function () {
    boxImg.src = "./img/手机.png";
    box.style.display = "block";
})
lis[6].addEventListener("mouseover", function () {
    boxImg.src = "./img/母婴玩具.png";
    box.style.display = "block";
})
lis[7].addEventListener("mouseover", function () {
    boxImg.src = "./img/零食.png";
    box.style.display = "block";
})
lis[8].addEventListener("mouseover", function () {
    boxImg.src = "./img/生鲜水果.png";
    box.style.display = "block";
})
lis[9].addEventListener("mouseover", function () {
    boxImg.src = "./img/大家电.png"
    box.style.display = "block";
})
lis[10].addEventListener("mouseover", function () {
    boxImg.src = "./img/家具建材.png"
    box.style.display = "block";
})
lis[11].addEventListener("mouseover", function () {
    boxImg.src = "./img/汽车.png";
    box.style.display = "block";
})
lis[12].addEventListener("mouseover", function () {
    boxImg.src = "./img/家纺.png";
    box.style.display = "block";
})
lis[13].addEventListener("mouseover", function () {
    boxImg.src = "./img/医药保健.png";
    box.style.display = "block";
})
lis[14].addEventListener("mouseover", function () {
    boxImg.src = "./img/厨具.png";
    box.style.display = "block";
})
lis[15].addEventListener("mouseover", function () {
    boxImg.src = "./img/图书音像.png"
    box.style.display = "block";
})

//   -----------------------------------------动画函数   -----------------------------------------//
function animate(obj, target, callback) {
    clearInterval(obj.timer);

    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            callback && callback();
        }

        obj.style.left = obj.offsetLeft + step + 'px';



    }, 30)
}
//   -----------------------------------------点击事件   -----------------------------------------
var num = 0;
var circle = 0;
var focusWidth = focus.offsetWidth;
for (var i = 0; i < ul.children.length; i++) {
    var li = document.createElement("li");
    ol.appendChild(li);
    li.setAttribute("index", i);

    li.addEventListener("mouseover", function () {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = "";
        }
        this.className = "current";
        var index = this.getAttribute("index");
        var focusWidth = focus.offsetWidth;
        num = index;
        circle = index;
        animate(ul, -index * focusWidth)
    })
}
var first = ul.children[0].cloneNode(true);
ul.appendChild(first);

ol.children[0].className = "current";
flag = true;
arrow_r.addEventListener("click", function () {
    if (flag) {
        flag = false;
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * focusWidth, function () {
            flag = true;
        });
        circle++;
        if (circle == ul.children.length - 1) {
            circle = 0;
        }
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = "";
        }
        ol.children[circle].className = "current";
    }
})
ol.children[0].onmouseover = function () {
    bgc.style.backgroundColor = "rgb(44,74,153)";
}
ol.children[1].onmouseover = function () {
    bgc.style.backgroundColor = "rgb(232,232,232)";
}
ol.children[2].onmouseover = function () {
    bgc.style.backgroundColor = "rgb(8,8,8)";
}
ol.children[3].onmouseover = function () {
    bgc.style.backgroundColor = "rgb(232,232,232)";
}
ol.children[4].onmouseover = function () {
    bgc.style.backgroundColor = "rgb(247,118,25)";
}
ol.children[5].onmouseover = function () {
    bgc.style.backgroundColor = "rgb(113,140,245)";
}

//   -----------------------------------------自动播放  -----------------------------------------//

var timer = setInterval(function () {
    arrow_r.click();

}, 4000)
//   -----------------------------------------鼠标经过图片触发事件   -----------------------------------------//
focus.addEventListener("mouseenter", function () {

    clearInterval(timer);
    timer = null;
})
focus.addEventListener("mouseleave", function () {

    timer = setInterval(function () {
        arrow_r.click();
    }, 4000)
})
//   -----------------------------------------按住s进入搜索框   -----------------------------------------//
document.addEventListener("keyup", function (e) {
    if (e.keyCode === 83) {
        sBar.focus();
    }
})