"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

if (true) {
  var init = function init(object) {
    var _ = object;

    if (_typeof(object) == 'object') {
      fade_out = _.fade_out != null ? _.fade_out : fade_out;
      fade_in = _.fade_in != null ? _.fade_in : fade_in;
      position = _.position != null ? _.position : position;
    }

    var e = document.getElementsByClassName("msha_toast_container")[0];

    switch (position) {
      case 'top-left':
        e.className = 'msha_toast_container';
        e.setAttribute("style", "");
        e.classList.add(position);
        break;

      case 'top-center':
        e.className = 'msha_toast_container';
        e.style.top = 0;
        e.style.left = '50%';
        e.style.transform = 'translateX(-50%)';
        break;

      case 'top-right':
        e.className = 'msha_toast_container';
        e.setAttribute("style", "");
        e.classList.add(position);
        break;

      case 'bottom-left':
        e.className = 'msha_toast_container';
        e.setAttribute("style", "");
        e.classList.add(position);
        break;

      case 'bottom-center':
        e.className = 'msha_toast_container';
        e.style.bottom = 0;
        e.style.left = '50%';
        e.style.transform = 'translateX(-50%)';
        break;

      case 'bottom-right':
        e.className = 'msha_toast_container';
        e.setAttribute("style", "");
        e.classList.add(position);
        break;

      default:
        e.style.bottom = 0;
        e.style.left = 0;
        e.style.transform = null;
        break;
    }
  };

  var toast = function toast(object) {
    var toast_timeout = 0;
    var toast_desc = "Toast message";
    var toast_title = "Hi";
    var toast_type = "success";
    var toast_color = "#fff";
    var toast_close_color = "#999";
    var _ = object; //Custom

    var bordercolor = "#43d569";
    var icon;
    var radius = 3;

    if (_typeof(object) == 'object') {
      toast_desc = _.description != null && _.description.length > 0 ? _.description : toast_desc;
      toast_title = _.title != null && _.title.length > 0 ? _.title : toast_title;
      toast_timeout = _.timeout != null ? _.timeout : toast_timeout;
      toast_type = _.type != null ? _.type : toast_type;
      toast_color = _.color != null ? _.color : toast_color;
      toast_close_color = _.close_color != null ? _.close_color : toast_close_color;
    }

    document.getElementsByClassName("msha_toast_container")[0].insertAdjacentHTML("beforeend", "<div class=\"msha_toast ".concat(toast_type, "\"><div class=\"msha_toast_icon msha_").concat(toast_type, "_icon\">    </div><div class=\"msha_toast_contents\"><div class=\"msha_toast_title\">").concat(toast_title, "</div><div class=\"msha_toast_desc\"> ").concat(toast_desc, " </div></div><div class=\"msha_toast_close\" onclick=\"del()\">\u2716</div>"));
    var toast = document.getElementsByClassName("msha_toast")[i];
    toast.style.animation = "fadeIn ".concat(fade_in / 1000, "s");
    toast.style.WebkitAnimation = "fadeIn ".concat(fade_in / 1000, "s");
    toast.style.MozAnimation = "fadeIn ".concat(fade_in / 1000, "s");
    toast.style.backgroundColor = toast_color;
    toast.getElementsByClassName("msha_toast_close")[0].style.color = toast_close_color;

    if (toast_type == "custom") {
     bordercolor = _.border_color != null ? _.border_color : bordercolor;
      icon = _.icon != null ? _.icon : icon;
      radius = _.radius != null ? _.radius : radius;
      console.log(bordercolor);
      toast.style.borderLeft = "5px solid ".concat(bordercolor);
      toast.style.borderRadius = "".concat(radius, "px");
      icon != null ? toast.getElementsByClassName("msha_custom_icon")[0].style.background = icon : toast.getElementsByClassName("msha_custom_icon")[0].style.display = 'none';
    }

    if (toast_timeout != null && toast_timeout > 0) {
      var c = document.getElementsByClassName("msha_toast")[i];
      setTimeout(function () {
        del(null, c);
      }, toast_timeout + fade_in);
    } //display block


    i++;
  };

  var del = function del(e) {
    var ee = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var x;

    if (ee != null) {
      x = ee;
    } else {
      x = event.target.parentElement;
    }

    x.style.WebkitAnimation = "fadeOut ".concat(fade_out / 1000, "s forwards");
    x.style.MozAnimation = "fadeOut ".concat(fade_out / 1000, "s forwards");
    x.style.animation = "fadeOut ".concat(fade_out / 1000, "s forwards");
    console.log(x.classList);
    setTimeout(function () {
      x.classList.add("remove");
    }, fade_out);
    setTimeout(function () {
      x.remove();
      i-- ? i != 0 : null;
    }, fade_out + 300);
  };

  var fade_in = 800;
  var fade_out = 800;
  var position = 'bottom-left';
  var h;
  var i = 0;

  if (document.getElementsByClassName("msha_toast_container").length == 0) {
    document.body.insertAdjacentHTML("beforeend", '<div class="msha_toast_container"></div>');
  }
}