function empty_input(value) {
	return (value == null || value == "");
}

(function ($) {
    $.MsgBox = {
        Alert: function (title, msg) {
            GenerateHtml("alert", title, msg);
            btnOk();
            btnNo();
        },
        Alert: function (title, msg, callback) {
            GenerateHtml("alert", title, msg);
            btnOk(callback);
            btnNo();
        },
        Confirm: function (title, msg, callback) {
            GenerateHtml("confirm", title, msg);
            btnOk(callback);
            btnNo();
        }
    }

    var GenerateHtml = function (type, title, msg) {

        var _html = '<div id="mb_box"></div><div id="mb_con" textAlign="center"><span id="mb_tit">' + title + '</span>';
        _html += '<div id="mb_msg">' + msg + '</div><div id="mb_btnbox">';

        if (type == "alert") {
            _html += '<input id="mb_btn_ok" type="button" value="确定" />';
        } else if (type == "confirm") {
            _html += '<input id="mb_btn_ok" type="button" value="确定" />';
            _html += '<input id="mb_btn_no" type="button" value="取消" />';
        }
        _html += '</div></div>';

        $("body").append(_html);
        GenerateCss();
    }

    var GenerateCss = function () {

        $("#mb_box").css({ width: '100%', height: '100%', zIndex: '99999', position: 'fixed',
            filter: 'Alpha(opacity=60)', backgroundColor: 'black', top: '0', left: '0', opacity: '0.6'
        });

        $("#mb_con").css({ zIndex: '999999', width: '300px', position: 'fixed',
            backgroundColor: 'White', borderRadius: '3px'
        });

        $("#mb_tit").css({ display: 'block', fontSize: '15px', color: '#444', padding: '10px 15px',
            backgroundColor: '#DDD', borderRadius: '3px 3px 0 0', textAlign: 'center',
            borderBottom: '1px solid #009BFE', fontWeight: 'bold'
        });

        $("#mb_msg").css({ padding: '20px', lineHeight: '20px',
            borderBottom: '1px dashed #DDD', fontSize: '13px'
        });

        $("#mb_ico").css({ display: 'block', position: 'absolute', right: '10px', top: '9px',
            border: '1px solid Gray', width: '18px', height: '18px', textAlign: 'center',
            lineHeight: '16px', cursor: 'pointer', borderRadius: '12px', fontFamily: '微软雅黑'
        });

        $("#mb_btnbox").css({ margin: '15px 0 15px 0', textAlign: 'center' });
        $("#mb_btn_ok,#mb_btn_no").css({ width: '100px', height: '30px', color: 'white', border: 'none', borderRadius:'3px' });
        $("#mb_btn_ok").css({ backgroundColor: '#168bbb' });
        $("#mb_btn_no").css({ backgroundColor: 'gray', marginLeft: '20px' });


        var _widht = document.documentElement.clientWidth;
        var _height = document.documentElement.clientHeight;

        var boxWidth = $("#mb_con").width();
        var boxHeight = $("#mb_con").height();

        $("#mb_con").css({ top: (_height - boxHeight) / 2 + "px", left: (_widht - boxWidth) / 2 + "px" });
    }

    var btnOk = function (callback) {
        $("#mb_btn_ok").click(function() {
            $("#mb_box, #mb_con").remove();
            if (typeof(callback) == 'function') {
                callback();
            }
        });
    }

    var btnNo = function () {
        $("#mb_btn_no, #mb_ico").click(function() {
            $("#mb_box, #mb_con").remove();
        });
    }
})(jQuery)

$(document).ready(function() {
    $("#title_btn_login").bind("click", function() {
        window.location.href = "/login";
    });

    $("#title_btn_logout").bind("click", function() {
        window.location.href = "/logout";
    });

    $("#title_btn_register").bind("click", function() {
        window.location.href = "/register";
    });
})