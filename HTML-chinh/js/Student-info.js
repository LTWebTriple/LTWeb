$(document).ready(function() {
    $("#NutBam").click(function() {

        if ($(".Main").css("margin-left") == "40px") {
            $(".Main").css("margin-left", "280px")
            $(".mySidenav").css("margin-left", "0px")
        } else {
            $(".Main").css("margin-left", "40px")
            $(".mySidenav").css("margin-left", "-230px")
        }
    });
    $(".mySidenav ").hover(function() {
        if ($(".Main").css("margin-left") == "40px") {
            $(".mySidenav").css("margin-left", "0px")
            $(".Main").css("margin-left", "280px")
        } else {
            $(".Main").css("margin-left", "40px")
            $(".mySidenav").css("margin-left", "-230px")
        }
    });
});
$(document).ready(function() {
    $(".Bro").hide();
    $(".Save").hide();
    $("input").prop('disabled', true);
    $(".Update").click(function() {
        $("input").prop('disabled', false);

        $(".Update").hide();
        $(".Bro").show();
        $(".Save").show();
    });
    $(".Save").click(function() {
        $("input").prop('disabled', true);

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