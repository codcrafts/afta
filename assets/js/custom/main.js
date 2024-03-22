// START:: SHOW AND HIDE PASSWORD
function password_show_hide() {
    var x = document.getElementById("password");
    var show_eye = document.getElementById("show_eye");
    var hide_eye = document.getElementById("hide_eye");
    hide_eye.classList.remove("d-none");
    if (x.type === "password") {
        x.type = "text";
        show_eye.style.display = "none";
        hide_eye.style.display = "block";
    } else {
        x.type = "password";
        show_eye.style.display = "block";
        hide_eye.style.display = "none";
    }
}
function password_show_hide_confirm() {
    var x = document.getElementById("confirm_password");
    var show_eye = document.getElementById("show_eye1");
    var hide_eye = document.getElementById("hide_eye1");
    hide_eye.classList.remove("d-none");
    if (x.type === "password") {
        x.type = "text";
        show_eye.style.display = "none";
        hide_eye.style.display = "block";
    } else {
        x.type = "password";
        show_eye.style.display = "block";
        hide_eye.style.display = "none";
    }
}
// END:: SHOW AND HIDE PASSWORD

// START:: SELECT COUNTRIES CODE

var langArray = [];
$('.forms .vodiapicker option').each(function () {
    var img = $(this).attr("data-thumbnail");
    var text = this.innerText;
    var value = $(this).val();
    var item = '<li><img src="' + img + '" alt="" value="' + value + '"width="28" height="15" /><span>' + text + '</span></li>';
    langArray.push(item);
})

$('.forms #loop_list_language').html(langArray);


$('.btn_select').html(langArray[0]);
$('.btn_select').attr('value', 'en');

$('.forms #loop_list_language li').click(function () {
    var img = $(this).find('img').attr("src");
    var value = $(this).find('img').attr('value');
    var text = this.innerText;
    var item = '<li><img src="' + img + '" alt="" height="20" width="33" /><span>' + text + '</span></li>';
    $('.btn_select').html(item);
    $('.btn_select').attr('value', value);
    $(".lang_list").toggle();
});

$(".btn_select").click(function () {
    $(".lang_list").toggle();
});

var sessionLang = localStorage.getItem('lang');
if (sessionLang) {
    var langIndex = langArray.indexOf(sessionLang);
    $('.btn_select').html(langArray[langIndex]);
    $('.btn_select').attr('value', sessionLang);
} else {
    var langIndex = langArray.indexOf('ch');
    $('.btn_select').html(langArray[langIndex]);
}
// END:: SELECT COUNTRIES CODE

// START:: VERIFICATION CODE INPUTS
const inputElements = [...document.querySelectorAll('input.code-input')]

inputElements.forEach((ele, index) => {
    ele.addEventListener('keydown', (e) => {
        if (e.keyCode === 8 && e.target.value === '') inputElements[Math.max(0, index - 1)].focus()
    })
    ele.addEventListener('input', (e) => {
        const [first, ...rest] = e.target.value
        e.target.value = first ?? ''
        if (index !== inputElements.length - 1 && first !== undefined) {
            inputElements[index + 1].focus()
            inputElements[index + 1].value = rest.join('')
            inputElements[index + 1].dispatchEvent(new Event('input'))
        }
    })
})
function onSubmit(e) {
    e.preventDefault()
    const code = [...document.getElementsByTagName('input')]
        .filter(({ name }) => name)
        .map(({ value }) => value)
        .join('')
}
// END:: VERIFICATION CODE INPUTS

// START:: COUNT DOWN
jQuery(function ($) {
    //   Function counts down from 1 minute, display turns orange at 20 seconds and red at 5 seconds.
    var countdownTimer = {
        init: function () {
            this.cacheDom();
            this.render();
        },
        cacheDom: function () {
            this.$el = $('.countdown');
            this.$time = this.$el.find('.countdown__time');
            this.$reset = this.$el.find('.countdown__reset');
        },
        // bindEvents: function() {
        //   this.$reset.on('click', this.resetTimer.bind(this));
        // },
        render: function () {
            var totalTime = 60 * 1,
                display = this.$time;
            this.startTimer(totalTime, display);
            this.$time.removeClass('countdown__time--red');
            this.$time.removeClass('countdown__time--orange');
        },
        startTimer: function (duration, display, icon) {
            var timer = duration, minutes, seconds;
            var interval = setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
                minutes = minutes < 10 ? '0' + minutes : minutes;
                seconds = seconds < 10 ? '0' + seconds : seconds;
                display.text(minutes + ':' + seconds);
                if (--timer < 0) {
                    clearInterval(interval);
                };
                if (timer < 15) {
                    display.addClass('countdown__time--orange')
                };
                if (timer < 5) {
                    display.addClass('countdown__time--red')
                };
            }, 1000);
            this.$reset.on('click', function () {
                clearInterval(interval);
                countdownTimer.render();
            });
        },
    };
    countdownTimer.init();
});

// END:: COUNT DOWN

// START:: UPLOAD IMAGE
function preview() {
    frame.src = URL.createObjectURL(event.target.files[0]);
}
function clearImage() {
    document.getElementById('formFile').value = null;
    frame.src = "";
}

function preview2() {
    frame2.src = URL.createObjectURL(event.target.files[0]);
}
function clearImage2() {
    document.getElementById('formFile2').value = null;
    frame2.src = "";
}
function test() {
    var relq = document.getElementById('formFile').value;
    if (relq == null) {
        document.getElementById('formFile').display = "none"
    }


}
// END:: UPLOAD IMAGE

// START:: SEARCH ACTIVE
$(".search_part > button").click(function () {
    $(".search_form").toggleClass("showSearch");
});
$(".search_form img").click(function () {
    $(".search_form").removeClass("showSearch");
});

$(".statistics-btn").click(function () {
    $(".statistics_sidemenu").addClass("showMenu");
    $(".overlay_stat").addClass("overlayShow");
    $(".notifications_sidemenu").removeClass("showMenu");
    $(".reviews_sidemenu").removeClass("showMenu");
    $(".profile_sidemenu").removeClass("showMenu");
});

$(".btn-notification").click(function () {
    $(".notifications_sidemenu").addClass("showMenu");
    $(".overlay_stat").addClass("overlayShow");
    $(".statistics_sidemenu").removeClass("showMenu");
    $(".reviews_sidemenu").removeClass("showMenu");
    $(".profile_sidemenu").removeClass("showMenu");
});
$(".btn-rate").click(function () {
    $(".reviews_sidemenu").addClass("showMenu");
    $(".statistics_sidemenu").removeClass("showMenu");
    $(".notifications_sidemenu").removeClass("showMenu");
    $(".overlay_stat").addClass("overlayShow");
    $(".profile_sidemenu").removeClass("showMenu");
});
$(".btn-profile").click(function () {
    $(".reviews_sidemenu").removeClass("showMenu");
    $(".statistics_sidemenu").removeClass("showMenu");
    $(".notifications_sidemenu").removeClass("showMenu");
    $(".profile_sidemenu").addClass("showMenu");
    $(".overlay_stat").addClass("overlayShow");
});
$(".btn-edit button").click(function () {
    $(".reviews_sidemenu").removeClass("showMenu");
    $(".statistics_sidemenu").removeClass("showMenu");
    $(".notifications_sidemenu").removeClass("showMenu");
    $(".profile_sidemenu").addClass("showMenu");
    $(".edit_profile_sidemenu").addClass("showMenu");
    $(".overlay_stat").addClass("overlayShow");
});

$(".statistics_sidemenu .btn-close").click(function () {
    $(".statistics_sidemenu").removeClass("showMenu");
    $(".overlay_stat").removeClass("overlayShow");
});
$(".notifications_sidemenu .btn-close").click(function () {
    $(".notifications_sidemenu").removeClass("showMenu");
    $(".overlay_stat").removeClass("overlayShow");
});
$(".reviews_sidemenu .btn-close").click(function () {
    $(".reviews_sidemenu").removeClass("showMenu");
    $(".overlay_stat").removeClass("overlayShow");
});
$(".profile_sidemenu .btn-close").click(function () {
    $(".profile_sidemenu").removeClass("showMenu");
    $(".overlay_stat").removeClass("overlayShow");
});
$(".edit_profile_sidemenu .btn-close").click(function () {
    $(".edit_profile_sidemenu").removeClass("showMenu");
    // $(".profile_sidemenu").removeClass("showMenu");
    // $(".overlay_stat").removeClass("overlayShow");
});


$(".overlay_stat").click(function () {
    $(".statistics_sidemenu").removeClass("showMenu");
    $(".notifications_sidemenu").removeClass("showMenu");
    $(".reviews_sidemenu").removeClass("showMenu");
    $(".profile_sidemenu").removeClass("showMenu");
    $(".edit_profile_sidemenu").removeClass("showMenu");
    $(".overlay_stat").removeClass("overlayShow");
});
// $(".btn-close").click(function () {
//     $("#order-content-1").removeClass("showContent");
// });

// END:: SEARCH ACTIVE

// START:: SIDE MENU
$("header .btn-toggle button").click(function () {
    $(".side_menu_user").toggleClass("showSideMenu");
    $("header .overLay_side_menu").addClass("showSideMenuOverLay");
});
$("header .overLay_side_menu").click(function () {
    $(".side_menu_user").removeClass("showSideMenu");
    $(this).removeClass("showSideMenuOverLay");
});
$(".search_form img").click(function () {
    $(".search_form").removeClass("showSearch");
});
// END:: SIDE MENU

// START:: HERO SECTION SLIDER JS


$(document).ready(function () {

    var sync1 = $("#hero_slider");
    var sync2 = $("#hero_arrows");
    var slidesPerPage = 10; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        lazyLoad: true,
        autoplay: true,
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
        rtl: true,

    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: 1,
            dots: false,
            nav: true,
            rtl: true,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100,
            navText: ["<img src='./assets/images/icons/arrow-w-right.svg' alt='ArrowLeft' width='45' height='22' />", "<img src='./assets/images/icons/arrow-w-left.svg' width='45' height='22' alt='ArrowRight' />"],
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});

// END:: HERO SECTION SLIDER JS

// START:: SERVICES SLIDER
$('#services_slider').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 8000,
    loop: true,
    margin: 2,
    rtl: true,
    items: 4,
    dots: false,
    nav: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 4,
        }
    }
});
// END:: SERVICES SLIDER

// START:: TOP RATED
// $('#top_rated_slider').owlCarousel({
//     animateOut: 'fadeOut',
//     animateIn: 'fadeIn',
//     lazyLoad: true,
//     autoplay: true,
//     autoplayTimeout: 8000,
//     loop: true,
//     margin: 15,
//     rtl: true,
//     items: 4,
//     dots: false,
//     nav: false,
//     responsive: {
//         0: {
//             items: 1,
//         },
//         600: {
//             items: 2,
//         },
//         1000: {
//             items: 4,
//         }
//     }
// });



$(document).ready(function () {

    var sync1 = $("#top_rated_slider");
    var sync2 = $("#top_rated_slider_arrwos");
    var slidesPerPage = 10;
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 4,
        slideSpeed: 2000,
        nav: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        lazyLoad: true,
        autoplay: true,
        margin: 15,
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
        rtl: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 4,
            },
            1000: {
                items: 4,
            }
        }

    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: 1,
            dots: false,
            nav: true,
            rtl: true,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100,
            navText: ["<img src='./assets/images/icons/dark-arrow-right.svg' alt='ArrowLeft' width='45' height='22' />", "<img src='./assets/images/icons/dark-arrow-left.svg' width='45' height='22' alt='ArrowRight' />"],
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});

// START:: SEARCH INPUT FILTER
$(document).ready(function () {
    $("#filter_input").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#search_providers .single_provider").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
// END:: SEARCH INPUT FILTER

// Dynamically add-on fields

$(function () {
    // Remove button click
    $(document).on(
        'click',
        '[data-role="dynamic-fields"] > .form-inline [data-role="remove"]',
        function (e) {
            e.preventDefault();
            $(this).closest('.form-inline').remove();
        }
    );
    // Add button click
    $(document).on(
        'click',
        '[data-role="dynamic-fields"] > button[data-role="add"]',
        function (e) {
            e.preventDefault();
            var container = $(this).closest('[data-role="dynamic-fields"]');
            new_field_group = container.children().filter('.form-inline:first-child').clone();
            new_field_group.find('label').html('إضافة مرفقات (صورة / ملف)');
            new_field_group.find('input').each(function () {
                $(this).val('');
            });
            container.append(new_field_group);
        }
    );
});

// STSRT:: WIZARD FORM
$(document).ready(function () {
    $('.registration-form fieldset:first-child').fadeIn('slow');

    $('.registration-form input').on('focus', function () {
        $(this).removeClass('input-error');
    });

    // next step
    $('.registration-form .btn-next').on('click', function () {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;

        parent_fieldset.find('input').each(function () {
            if ($(this).val() == "") {
                $(this).addClass('input-error');
                next_step = false;
            } else {
                $(this).removeClass('input-error');
            }
        });

        if (next_step) {
            parent_fieldset.fadeOut(400, function () {
                $(this).next().fadeIn();
            });
        }

    });

    // previous step
    $('.registration-form .btn-previous').on('click', function () {
        $(this).parents('fieldset').fadeOut(400, function () {
            $(this).prev().fadeIn();
        });
    });

    // submit
    $('.registration-form').on('submit', function (e) {

        $(this).find('input').each(function () {
            if ($(this).val() == "") {
                e.preventDefault();
                $(this).addClass('input-error');
            } else {
                $(this).removeClass('input-error');
            }
        });

    });


});


// file upload

$(document).on('change', '.file-upload', function () {
    var i = $(this).prev('label').clone();
    var file = this.files[0].name;
    $(this).prev('label').text(file);
});
// START:: FANCYOBX
$(document).ready(function () {
    $("a.fancybox").fancybox();
    $(".various").fancybox({
        maxWidth: 800,
        maxHeight: 600,
        fitToView: false,
        width: '70%',
        height: '70%',
        autoSize: false,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none'
    });
});
// START:: PRINT AREA
function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}

// START:: MULTI SELECT
$('#select-gear').selectize({
    plugins: ['remove_button'],
    sortField: 'text'
});

// END:: MULTI SELECT

function Util() { };
Util.hasClass = function (el, className) {
    if (el.classList) return el.classList.contains(className);
    else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
};
Util.addClass = function (el, className) {
    var classList = className.split(' ');
    if (el.classList) el.classList.add(classList[0]);
    else if (!Util.hasClass(el, classList[0])) el.className += " " + classList[0];
    if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
};
Util.removeClass = function (el, className) {
    var classList = className.split(' ');
    if (el.classList) el.classList.remove(classList[0]);
    else if (Util.hasClass(el, classList[0])) {
        var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
    if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(' '));
};
Util.toggleClass = function (el, className, bool) {
    if (bool) Util.addClass(el, className);
    else Util.removeClass(el, className);
};
Util.setAttributes = function (el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
};
Util.getChildrenByClassName = function (el, className) {
    var children = el.children,
        childrenByClass = [];
    for (var i = 0; i < el.children.length; i++) {
        if (Util.hasClass(el.children[i], className)) childrenByClass.push(el.children[i]);
    }
    return childrenByClass;
};
Util.is = function (elem, selector) {
    if (selector.nodeType) {
        return elem === selector;
    }
    var qa = (typeof (selector) === 'string' ? document.querySelectorAll(selector) : selector),
        length = qa.length,
        returnArr = [];
    while (length--) {
        if (qa[length] === elem) {
            return true;
        }
    }
    return false;
};
Util.setHeight = function (start, to, element, duration, cb) {
    var change = to - start,
        currentTime = null;
    var animateHeight = function (timestamp) {
        if (!currentTime) currentTime = timestamp;
        var progress = timestamp - currentTime;
        var val = parseInt((progress / duration) * change + start);
        element.style.height = val + "px";
        if (progress < duration) {
            window.requestAnimationFrame(animateHeight);
        } else {
            cb();
        }
    };
    element.style.height = start + "px";
    window.requestAnimationFrame(animateHeight);
};
Util.scrollTo = function (final, duration, cb) {
    var start = window.scrollY || document.documentElement.scrollTop,
        currentTime = null;
    var animateScroll = function (timestamp) {
        if (!currentTime) currentTime = timestamp;
        var progress = timestamp - currentTime;
        if (progress > duration) progress = duration;
        var val = Math.easeInOutQuad(progress, start, final - start, duration);
        window.scrollTo(0, val);
        if (progress < duration) {
            window.requestAnimationFrame(animateScroll);
        } else {
            cb && cb();
        }
    };
    window.requestAnimationFrame(animateScroll);
};
Util.moveFocus = function (element) {
    if (!element) element = document.getElementsByTagName("body")[0];
    element.focus();
    if (document.activeElement !== element) {
        element.setAttribute('tabindex', '-1');
        element.focus();
    }
};
Util.getIndexInArray = function (array, el) {
    return Array.prototype.indexOf.call(array, el);
};
Util.cssSupports = function (property, value) {
    if ('CSS' in window) {
        return CSS.supports(property, value);
    } else {
        var jsProperty = property.replace(/-([a-z])/g, function (g) {
            return g[1].toUpperCase();
        });
        return jsProperty in document.body.style;
    }
};
Util.extend = function () {
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
        deep = arguments[0];
        i++;
    }
    var merge = function (obj) {
        for (var prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                    extended[prop] = extend(true, extended[prop], obj[prop]);
                } else {
                    extended[prop] = obj[prop];
                }
            }
        }
    };
    for (; i < length; i++) {
        var obj = arguments[i];
        merge(obj);
    }
    return extended;
};
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
        var el = this;
        if (!document.documentElement.contains(el)) return null;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}
if (typeof window.CustomEvent !== "function") {
    function CustomEvent(event, params) {
        params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined
        };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
}
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};
/**/
(function () {
    var LanguagePicker = function (element) {
        this.element = element;
        this.select = this.element.getElementsByTagName('select')[0];
        this.options = this.select.getElementsByTagName('option');
        this.selectedOption = getSelectedOptionText(this);
        this.pickerId = this.select.getAttribute('id');
        this.trigger = false;
        this.dropdown = false;
        this.firstLanguage = false;
        // dropdown arrow inside the button element
        this.svgPath = '<i class="fas fa-chevron-down"></i>';
        initLanguagePicker(this);
        initLanguagePickerEvents(this);
    };

    function initLanguagePicker(picker) {
        // create the HTML for the custom dropdown element
        picker.element.insertAdjacentHTML('beforeend', initButtonPicker(picker) + initListPicker(picker));

        // save picker elements
        picker.dropdown = picker.element.getElementsByClassName('language-picker__dropdown')[0];
        picker.firstLanguage = picker.dropdown.getElementsByClassName('language-picker__item')[0];
        picker.trigger = picker.element.getElementsByClassName('language-picker__button')[0];
    };

    function initLanguagePickerEvents(picker) {
        // make sure to add the icon class to the arrow dropdown inside the button element
        Util.addClass(picker.trigger.getElementsByTagName('i')[0], 'icon');
        // language selection in dropdown
        // ⚠️ Important: you need to modify this function in production
        initLanguageSelection(picker);

        // click events
        picker.trigger.addEventListener('click', function () {
            toggleLanguagePicker(picker, false);
        });
    };

    function toggleLanguagePicker(picker, bool) {
        var ariaExpanded;
        if (bool) {
            ariaExpanded = bool;
        } else {
            ariaExpanded = picker.trigger.getAttribute('aria-expanded') == 'true' ? 'false' : 'true';
        }
        picker.trigger.setAttribute('aria-expanded', ariaExpanded);
        if (ariaExpanded == 'true') {
            picker.firstLanguage.focus(); // fallback if transition is not supported
            picker.dropdown.addEventListener('transitionend', function cb() {
                picker.firstLanguage.focus();
                picker.dropdown.removeEventListener('transitionend', cb);
            });
        }
    };

    function checkLanguagePickerClick(picker, target) { // if user clicks outside the language picker -> close it
        if (!picker.element.contains(target)) toggleLanguagePicker(picker, 'false');
    };

    function moveFocusToPickerTrigger(picker) {
        if (picker.trigger.getAttribute('aria-expanded') == 'false') return;
        if (document.activeElement.closest('.language-picker__dropdown') == picker.dropdown) picker.trigger.focus();
    };

    function initButtonPicker(picker) { // create the button element -> picker trigger
        // check if we need to add custom classes to the button trigger
        var customClasses = picker.element.getAttribute('data-trigger-class') ? ' ' + picker.element.getAttribute('data-trigger-class') : '';

        var button = '<button class="language-picker__button' + customClasses + '" aria-label="' + picker.select.value + ' ' + picker.element.getElementsByTagName('label')[0].innerText + '" aria-expanded="false" aria-contols="' + picker.pickerId + '-dropdown">';
        button = button + '<span aria-hidden="true" class="language-picker__label language-picker__flag language-picker__flag--' + picker.select.value + '"><em>' + picker.selectedOption + '</em>';
        button = button + picker.svgPath + '</span>';
        return button + '</button>';
    };

    function initListPicker(picker) { // create language picker dropdown
        var list = '<div class="language-picker__dropdown" aria-describedby="' + picker.pickerId + '-description" id="' + picker.pickerId + '-dropdown">';
        list = list + '<p class="sr-only" id="' + picker.pickerId + '-description">' + picker.element.getElementsByTagName('label')[0].innerText + '</p>';
        list = list + '<ul class="language-picker__list" role="listbox">';
        for (var i = 0; i < picker.options.length; i++) {
            var selected = picker.options[i].hasAttribute('selected') ? ' aria-selected="true"' : '',
                language = picker.options[i].getAttribute('lang');
            list = list + '<li><a lang="' + language + '" hreflang="' + language + '" href="' + getLanguageUrl(picker.options[i]) + '"' + selected + ' role="option" data-value="' + picker.options[i].value + '" class="language-picker__item language-picker__flag language-picker__flag--' + picker.options[i].value + '"><span>' + picker.options[i].text + '</span></a></li>';
        };
        return list;
    };

    function getSelectedOptionText(picker) { // used to initialize the label of the picker trigger button
        var label = '';
        if ('selectedIndex' in picker.select) {
            label = picker.options[picker.select.selectedIndex].text;
        } else {
            label = picker.select.querySelector('option[selected]').text;
        }
        return label;
    };

    function getLanguageUrl(option) {
        // ⚠️ Important: You should replace this return value with the real link to your website in the selected language
        // option.value gives you the value of the language that you can use to create your real url (e.g, 'english' or 'italiano')
        return '#';
    };

    function initLanguageSelection(picker) {
        picker.element.getElementsByClassName('language-picker__list')[0].addEventListener('click', function (event) {
            var language = event.target.closest('.language-picker__item');
            if (!language) return;

            if (language.hasAttribute('aria-selected') && language.getAttribute('aria-selected') == 'true') {
                // selecting the same language
                event.preventDefault();
                picker.trigger.setAttribute('aria-expanded', 'false'); // hide dropdown
            } else {
                // ⚠️ Important: this 'else' code needs to be removed in production. 
                // The user has to be redirected to the new url -> nothing to do here
                event.preventDefault();
                picker.element.getElementsByClassName('language-picker__list')[0].querySelector('[aria-selected="true"]').removeAttribute('aria-selected');
                language.setAttribute('aria-selected', 'true');
                picker.trigger.getElementsByClassName('language-picker__label')[0].setAttribute('class', 'language-picker__label language-picker__flag language-picker__flag--' + language.getAttribute('data-value'));
                picker.trigger.getElementsByClassName('language-picker__label')[0].getElementsByTagName('em')[0].innerText = language.innerText;
                picker.trigger.setAttribute('aria-expanded', 'false');
            }
        });
    };

    //initialize the LanguagePicker objects
    var languagePicker = document.getElementsByClassName('js-language-picker');
    if (languagePicker.length > 0) {
        var pickerArray = [];
        for (var i = 0; i < languagePicker.length; i++) {
            (function (i) { pickerArray.push(new LanguagePicker(languagePicker[i])); })(i);
        }

        // listen for key events
        window.addEventListener('keyup', function (event) {
            if (event.keyCode && event.keyCode == 27 || event.key && event.key.toLowerCase() == 'escape') {
                // close language picker on 'Esc'
                pickerArray.forEach(function (element) {
                    moveFocusToPickerTrigger(element); // if focus is within dropdown, move it to dropdown trigger
                    toggleLanguagePicker(element, 'false'); // close dropdown
                });
            }
        });
        // close language picker when clicking outside it
        window.addEventListener('click', function (event) {
            pickerArray.forEach(function (element) {
                checkLanguagePickerClick(element, event.target);
            });
        });
    }
}());

