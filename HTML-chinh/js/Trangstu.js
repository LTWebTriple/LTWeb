$(document).ready(function() {
    $(".Bro").hide();
    $(".Save").hide();
    // Tao 2 mang chua ten ngay thang
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    // Tao moi doi tuong Date()
    var newDate = new Date();
    // Lay gia tri thoi gian hien tai
    newDate.setDate(newDate.getDate());
    // Xuat ngay thang, nam
    $('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

    setInterval(function() {
        // lay gia tri giay trong doi tuong Date()
        var seconds = new Date().getSeconds();
        // Chen so 0 vao dang truoc gia tri giay
        $("#sec").html((seconds < 10 ? "0" : "") + seconds);
    }, 1000);

    setInterval(function() {
        // Tuong tu lay gia tri phut
        var minutes = new Date().getMinutes();
        // Chen so 0 vao dang truoc gia tri phut neu gia tri hien tai nho hon 10
        $("#min").html((minutes < 10 ? "0" : "") + minutes);
    }, 1000);

    setInterval(function() {
        // Lay gia tri gio hien tai
        var hours = new Date().getHours();
        // Chen so 0 vao truoc gia tri gio neu gia tri nho hon 10
        $("#hours").html((hours < 10 ? "0" : "") + hours);
    }, 1000);
    $("input").prop('disabled', true);
    $(".Update").click(function() {
        $("input").prop('disabled', false);
        $(".Change").hide();
        $(".Update").hide();
        $(".Bro").show();
        $(".Save").show();
    });
    $(".Save").click(function() {
        $("input").prop('disabled', true);
        $(".Change").show();
        $(".Update").show();
        $(".Bro").hide();
        $(".Save").hide();
    });


});
$(document).ready(function() {
    function checkProcessBar() {
        var total = 0;
        var name = $("#name").val();
        var birth = $("#birth").val();
        var date = parseInt(birth.substr(0, 2));
        var month = parseInt(birth.substr(3, 2));
        var year = parseInt(birth.substr(6, 4));
        var idcard = $("#idcard").val();
        var telephone = $("#telephone").val();
        var thongbao = '';
        if (name == '') {
            thongbao = thongbao + 'Tên chưa được nhập.';

        } else {
            total++;
        }
        if (birth == '') {
            thongbao = thongbao + 'Ngày sinh chưa được nhập.';


        } else {
            if (date > 31 || month > 13 || year > 2017) {
                thongbao = thongbao + 'Lỗi nhập ngày tháng năm sinh(kiểm tra lại). ';
            } else {
                total++;
            }

        }
        if (idcard == '') {
            thongbao = thongbao + 'Số CMND chưa được nhập.';
        } else {
            total++;
        }
        if (telephone == '') {
            thongbao = thongbao + 'Số điện thoại chưa được nhập.';
        } else {
            total++;
        }
        console.log(thongbao);
        $("#thongbaosai").html(thongbao);
        var per = total * 100 / 4;
        $("#Tientrinh .thanh").css("width", per + "%");
        $("#Tientrinh .thanh").html(per + "%");
    }
    checkProcessBar();
    $(".Save").click(function() {
        checkProcessBar();
    });
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "header-navigation pull-right font-transform-inherit") {
        x.className += " responsive";
    } else {
        x.className = "header-navigation pull-right font-transform-inherit";
    }
}

function Chooselanguage() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}