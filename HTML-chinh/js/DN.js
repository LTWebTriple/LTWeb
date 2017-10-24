$(function() {
    $("#loiuser").hide();
    $("#loipass").hide();
    $("#Success").hide();
    var erroruser = false;
    var errorpass = false;

    $("#Login").click(function() {
        errorpass = false;
        erroruser = false;
        check_username();
        check_pass();
        if (erroruser == false && errorpass == false) {
            $("#container").hide();
            $("#Success").html("Ban da dang nhap thanh cong");
            $("#Success").show();
        }

    });
    $("#form_user").focusout(function() {
        check_username();
    });
    $("#form_pass").focusout(function() {
        check_pass();
    });

    function check_username() {
        var user_length = $("#form_user").val().length;
        if (user_length == 0) {
            $("#loiuser").html("Moi nhap UserName");
            $("#loiuser").show();
            erroruser = true;
        } else {
            if (user_length < 5 || user_length > 20) {
                $("#loiuser").html("Ten dang nhap phai tu 5-20 ky tu");
                $("#loiuser").show();
                erroruser = true;
            } else {
                $("#loiuser").hide();
            }
        }

    }

    function check_pass() {
        var user_length = $("#form_pass").val().length;
        if (user_length == 0) {
            $("#loipass").html("Moi nhap Password");
            $("#loipass").show();
            errorpass = true;
        } else {
            if (user_length < 5 || user_length > 20) {
                $("#loipass").html("Mat khau phai tu 5-20 ky tu");
                $("#loipass").show();
                errorpass = true;
            } else {
                $("#loipass").hide();

            }
        }

    }

});