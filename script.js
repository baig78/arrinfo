$(document).ready(function() {
    // console.log("03 - Interctive hexagon thing loaded");

    $('area').on({
        mouseenter: function(e) {
            $('.panel .' + $(this).data('loc')).stop().css({ 'opacity': '1', 'filter': 'alpha(opacity=100)', '-ms-filter': 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)' });
        },
        mouseleave: function(e) {
            // Sets opacity to 0 on all panels without class active
            $('.panel .' + $(this).data('loc')).not('active').stop().css({ 'opacity': '0', 'filter': 'alpha(opacity=0)', '-ms-filter': 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)' });
        },
        click: function(e) {
            // Stops links from working
            e.preventDefault();
        }
    });
});



// $("p,h2,h3,h4,h5,h6").each(function(i,e) {
//   var text = $(e).html();
//   text = text.split(' ');
//   if(text.length > 3) {
//   	  var lastWord = text.pop();
//   text = text.join(' ') + "&nbsp;" + lastWord;
//   $(e).html(text);
//   }
// });


$(document).ready(function() {
    // $.get("/templates/nav.html", function(data) {
    //     $('header').delay(50).animate({ opacity: 1 }, 700);
    //     // $('.navwrapper').delay(50).animate({ opacity: 1 }, 700);
    //     $(".desktopheader").html(data);
    // });
    // $.get("/templates/nav-serviceofferings.html", function(data) {
    // 	$('header').delay(50).animate({opacity:1}, 700);
    // 	// $('.navwrapper').delay(50).animate({ opacity: 1 }, 700);
    // 	// $('.subnavwrapper').delay(50).animate({ opacity: 1 }, 700);
    // 	$(".mainnav-serviceofferings").html(data);
    // });
    // $.get("/templates/mobile-nav.html", function(data) {
    //     $(".mobile-nav-links").html(data);
    // });
    // $.get('/templates/footer.html', function(data) {
    //     $('.footerinfo').html(data);
    // });

});

$('header').on('click', '.closebtn', function() {
    $(this).parent().css('display', 'none')
});





// $(document).ready(function() {
// 	$('.slideup').css('opacity', 0).slideDown(1000).animate({
// 		opacity: 1
// 	},{ queue: false, duration: 1000 })
// })

$(document).ready(function() {
    if ($('.subnavwrapper')[0]) {
        $('.subnavwrapper').delay(100).animate({ opacity: 1 }, 700)
    }
})

$(document).ready(function() {
    $('.aneebrand-img').hover()
})


function hover(element) {
    element.setAttribute('src', '../assets/images/an-ee-brand-orange.svg');
}

function unhover(element) {
    element.setAttribute('src', '../assets/images/an-ee-brand.svg');
}

window.addEventListener('scroll', () => {
    const header = document.getElementsByTagName('header')[0];
    const serviceOfferingHeader = document.getElementsByClassName('serviceofferingsheader')[0];
    const nav = document.getElementsByClassName('navlink');
    // const secondaryNavLink = document.getElementsByClassName('secondarynavlink')[0];
    // const subNav = document.getElementsByClassName('subnavlink');
    const logo = document.getElementsByClassName('logoimage');
    const topBar = document.getElementsByClassName('topbar')[0];
    const middleBar = document.getElementsByClassName('middlebar')[0];
    const bottomBar = document.getElementsByClassName('bottombar')[0];
    const mobileHeader = document.getElementsByClassName('logorow')[0];
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st >= 50) {
        header.style.backgroundColor = 'white';
        mobileHeader.style.backgroundColor = 'white';
        topBar.style.backgroundColor = '#006394';
        middleBar.style.backgroundColor = '#006394';
        bottomBar.style.backgroundColor = '#006394';
        // secondaryNavLink.style.color = '#006394';
        // serviceOfferingHeader.style.backgroundColor = 'white';
        for (i = 0; i < logo.length; i++) {
            logo[i].src = "logo_blue.PNG";
        }
        for (i = 0; i < nav.length; i++) {
            nav[i].style.color = '#006394';
        }
        // for(i=0; i<subNav.length;i++) {
        // 	subNav[i].style.color = '#006394';
        // 	subNav[i].style.borderColor = '#006394'
        // }
        if ($('.serviceofferingsheader')[0]) {
            serviceOfferingHeader.style.backgroundColor = 'white';
        }
        if ($('.active')[0]) {
            $('.active').css('color', '#ff8300');
        }
        if ($('.home')[0]) {
            $('.navlink-home').css('color', '#ff8300')
        } else if ($('.findtalent')[0]) {
            $('.navlink-findtalent').css('color', '#ff8300');
        } else if ($('.findwork')[0]) {
            $('.navlink-findwork').css('color', '#ff8300')
        } else if ($('.serviceofferings')[0]) {
            $('.navlink-serviceofferings').css('color', '#ff8300')
        } else if ($('.locations')[0]) {
            $('.navlink-locations').css('color', '#ff8300')
        } else if ($('.aboutus')[0]) {
            $('.navlink-aboutus').css('color', '#ff8300')
        } else if ($('.contact')[0]) {
            $('.navlink-contact').css('color', '#ff8300')
        } else if ($('.industries')[0]) {
            $('.navlink-industries').css('color', '#ff8300')
        } else if ($('.technologies')[0]) {
            $('.navlink-technologies').css('color', '#ff8300')
        }
    } else {
        header.style.backgroundColor = 'transparent';
        mobileHeader.style.backgroundColor = 'transparent';
        topBar.style.backgroundColor = 'white';
        middleBar.style.backgroundColor = 'white';
        bottomBar.style.backgroundColor = 'white';
        // secondaryNavLink.style.color = 'white';
        // serviceOfferingHeader.style.backgroundColor = '#006394';
        for (i = 0; i < logo.length; i++) {
            logo[i].src = "logo.PNG";
        }
        for (i = 0; i < nav.length; i++) {
            nav[i].style.color = 'white';
        }
        // for(i=0; i<subNav.length;i++) {
        // 	subNav[i].style.color = 'white';
        // 	subNav[i].style.borderColor = 'white'
        // }
        if ($('.serviceofferingsheader')[0]) {
            serviceOfferingHeader.style.backgroundColor = '#006394';
        }
        if ($('.active')[0]) {
            $('.active').css('color', '#ff8300');
        }
        if ($('.home')[0]) {
            $('.navlink-home').css('color', '#ff8300')
        } else if ($('.findtalent')[0]) {
            $('.navlink-findtalent').css('color', '#ff8300');
        } else if ($('.findwork')[0]) {
            $('.navlink-findwork').css('color', '#ff8300')
        } else if ($('.serviceofferings')[0]) {
            $('.navlink-serviceofferings').css('color', '#ff8300')
        } else if ($('.locations')[0]) {
            $('.navlink-locations').css('color', '#ff8300')
        } else if ($('.aboutus')[0]) {
            $('.navlink-aboutus').css('color', '#ff8300')
        } else if ($('.contact')[0]) {
            $('.navlink-contact').css('color', '#ff8300')
        } else if ($('.industries')[0]) {
            $('.navlink-industries').css('color', '#ff8300')
        } else if ($('.technologies')[0]) {
            $('.navlink-technologies').css('color', '#ff8300')
        }
    }
}, false);

$('.soform').click(function(event) {
    event.preventDefault();
    var offset = 0;
    var target = this.hash;
    if ($(this).data('offset') != undefined) offset = $(this).data('offset');
    $('html, body').stop().animate({
        'scrollTop': $(target).offset().top - offset
    }, 500, 'swing', function() {
        // window.location.hash = target;
    });
    $('.appearingformtalent').delay(550).slideDown('slow');
    $('.secondformappear').slideUp();
})

$('.secondformappear').click(function(event) {
    event.preventDefault();
    $('.appearingformtalent').slideDown('slow');
    $('.secondformappear').slideUp();

});

$('.soformwork').click(function(event) {
    event.preventDefault();
    var offset = 0;
    var target = this.hash;
    if ($(this).data('offset') != undefined) offset = $(this).data('offset');
    $('html, body').stop().animate({
        'scrollTop': $(target).offset().top - offset
    }, 500, 'swing', function() {
        // window.location.hash = target;
    });
    $('.appearingformwork').delay(550).slideDown('slow');
    $('.thirdformappear').slideUp();
})

$('.thirdformappear').click(function(event) {
    event.preventDefault();
    $('.appearingformwork').slideDown('slow');
    $('.thirdformappear').slideUp();

});

$('.ppsoform').click(function(event) {
    event.preventDefault();
    var offset = 0;
    var target = this.hash;
    if ($(this).data('offset') != undefined) offset = $(this).data('offset');
    $('html, body').stop().animate({
        'scrollTop': $(target).offset().top - offset
    }, 500, 'swing', function() {
        // window.location.hash = target;
    });
    $('.projectpatriot-form').replaceWith(`<div class="threecolumninput projectpatriot-form">
             <input id="title" maxlength="40" name="title" placeholder="Title *" required="" type="text"/>
             <input id="company" maxlength="40" name="company" placeholder="Company *" required="" type="text"/>
             <div class="styled-select">
                <select class="form-control" id="00N1G000007Y9BV" name="00N1G000007Y9BV" title="Number of Employees">
                    <option disabled="" selected="" value="">Employees</option>
                    <option value="1-45">1-45</option>
                    <option value="46-200">46-200</option>
                    <option value="201-1000">201-1000</option>
                    <option value="1000+">1000+</option>
                </select>
            </div>
        </div>`);
    $('#ppformwork h4').html('LET’S WORK TOGETHER TO DISCOVER YOUR NEXT FULFILLING CAREER!');
    $('#00N1G000007Y9Bf').attr('value', 'Brooksource.com - PP - Find Talent');
    $('.appearingformwork').delay(550).slideDown('slow');
    $('.ppthirdformappear').slideUp();
})

$('.ppsecondformappear').click(function(event) {
    // event.preventDefault();
    // $('.appearingformtalent').slideDown('slow');
    // $('.ppthirdformappear').slideUp();
    event.preventDefault();
    var offset = 0;
    var target = this.hash;
    if ($(this).data('offset') != undefined) offset = $(this).data('offset');
    $('html, body').stop().animate({
        'scrollTop': $(target).offset().top - offset
    }, 500, 'swing', function() {
        // window.location.hash = target;
    });
    $('.projectpatriot-form').replaceWith(`<div class="threecolumninput projectpatriot-form">
             <input id="title" maxlength="40" name="title" placeholder="Title *" required="" type="text"/>
             <input id="company" maxlength="40" name="company" placeholder="Company *" required="" type="text"/>
             <div class="styled-select">
                <select class="form-control" id="00N1G000007Y9BV" name="00N1G000007Y9BV" title="Number of Employees">
                    <option disabled="" selected="" value="">Employees</option>
                    <option value="1-45">1-45</option>
                    <option value="46-200">46-200</option>
                    <option value="201-1000">201-1000</option>
                    <option value="1000+">1000+</option>
                </select>
            </div>
        </div>`);
    $('#ppformwork h4').html('FIND OUT HOW THIS INITIATIVE CAN SUPPORT YOUR SPECIFIC NEEDS!');
    $('#00N1G000007Y9Bf').attr('value', 'Brooksource.com - PP - Find Talent');
    $('.appearingformwork').delay(550).slideDown('slow');
    $('.ppthirdformappear').slideUp();
});

$('.ppsoformwork').click(function(event) {
    event.preventDefault();
    var offset = 0;
    var target = this.hash;
    if ($(this).data('offset') != undefined) offset = $(this).data('offset');
    $('html, body').stop().animate({
        'scrollTop': $(target).offset().top - offset
    }, 500, 'swing', function() {
        // window.location.hash = target;
    });
    $('.projectpatriot-form').replaceWith(`<div class="twocolumninput projectpatriot-form">
             <input id="title" maxlength="40" name="title" placeholder="Title *" required="" type="text"/>
             <input id="company" maxlength="40" name="company" placeholder="Company *" required="" type="text"/>
        </div>`);
    $('#ppformwork h4').html('FIND OUT HOW THIS INITIATIVE CAN SUPPORT YOUR SPECIFIC NEEDS!');
    $('#00N1G000007Y9Bf').attr('value', 'Brooksource.com - PP - Find Work');
    $('.appearingformwork').delay(550).slideDown('slow');
    $('.ppthirdformappear').slideUp();
})

$('.ppthirdformappear').click(function(event) {
    // event.preventDefault();
    // $('.appearingformwork').slideDown('slow');
    // $('.thirdformappear').slideUp();
    event.preventDefault();
    var offset = 0;
    var target = this.hash;
    if ($(this).data('offset') != undefined) offset = $(this).data('offset');
    $('html, body').stop().animate({
        'scrollTop': $(target).offset().top - offset
    }, 500, 'swing', function() {
        // window.location.hash = target;
    });
    $('.projectpatriot-form').replaceWith(`<div class="twocolumninput projectpatriot-form">
             <input id="title" maxlength="40" name="title" placeholder="Title *" required="" type="text"/>
             <input id="company" maxlength="40" name="company" placeholder="Company *" required="" type="text"/>
        </div>`);
    $('#ppformwork h4').html('LET’S WORK TOGETHER TO DISCOVER YOUR NEXT FULFILLING CAREER!');
    $('#00N1G000007Y9Bf').attr('value', 'Brooksource.com - PP - Find Work');
    $('.appearingformwork').delay(550).slideDown('slow');
    $('.ppthirdformappear').slideUp();

});

$('.tysoform').click(function(event) {
    event.preventDefault();
    var offset = 0;
    var target = this.hash;
    if ($(this).data('offset') != undefined) offset = $(this).data('offset');
    $('html, body').stop().animate({
        'scrollTop': $(target).offset().top - offset
    }, 500, 'swing', function() {
        // window.location.hash = target;
    });
    $('.elevate-form').replaceWith(`<div class="threecolumninput elevate-form">
                <input id="company" maxlength="40" name="company" placeholder="Company *" required="" type="text"/>
                <input id="title" maxlength="40" name="title" placeholder="Title *" required="" type="text"/>
                <div class="styled-select">
                    <select class="form-control" id="00N1G000007Y9BV" name="00N1G000007Y9BV" title="Number of Employees">
                        <option disabled="" selected="" value="">Employees</option>
                        <option value="1-45">1-45</option>
                        <option value="46-200">46-200</option>
                        <option value="201-1000">201-1000</option>
                        <option value="1000+">1000+</option>
                    </select>
                </div>
            </div>`);
    $('#00N1G000007Y9Bf').attr('value', 'Brooksource.com - TY - Find Talent')
    $('.appearingformwork').delay(550).slideDown('slow');
    $('.tythirdformappear').slideUp();
})

$('.tysecondformappear').click(function(event) {
    // event.preventDefault();
    // $('.appearingformtalent').slideDown('slow');
    // $('.ppthirdformappear').slideUp();
    event.preventDefault();
    var offset = 0;
    var target = this.hash;
    if ($(this).data('offset') != undefined) offset = $(this).data('offset');
    $('html, body').stop().animate({
        'scrollTop': $(target).offset().top - offset
    }, 500, 'swing', function() {
        // window.location.hash = target;
    });
    $('.elevate-form').replaceWith(`<div class="threecolumninput elevate-form">
                <input id="company" maxlength="40" name="company" placeholder="Company *" required="" type="text"/>
                <input id="title" maxlength="40" name="title" placeholder="Title *" required="" type="text"/>
                <div class="styled-select">
                    <select class="form-control" id="00N1G000007Y9BV" name="00N1G000007Y9BV" title="Number of Employees">
                        <option disabled="" selected="" value="">Employees</option>
                        <option value="1-45">1-45</option>
                        <option value="46-200">46-200</option>
                        <option value="201-1000">201-1000</option>
                        <option value="1000+">1000+</option>
                    </select>
                </div>
            </div>`);
    $('#00N1G000007Y9Bf').attr('value', 'Brooksource.com - TY - Find Talent')
    $('.appearingformwork').delay(550).slideDown('slow');
    $('.tythirdformappear').slideUp();

});

$('.tysoformwork').click(function(event) {
    event.preventDefault();
    var offset = 0;
    var target = this.hash;
    if ($(this).data('offset') != undefined) offset = $(this).data('offset');
    $('html, body').stop().animate({
        'scrollTop': $(target).offset().top - offset
    }, 500, 'swing', function() {
        // window.location.hash = target;
    });
    $('.elevate-form').replaceWith(`<div class="twocolumninput elevate-form">
                <input id="company" maxlength="40" name="company" placeholder="Company *" required="" type="text"/>
                <input id="title" maxlength="40" name="title" placeholder="Title *" required="" type="text"/>
            </div>`);
    $('#00N1G000007Y9Bf').attr('value', 'Brooksource.com - TY - Find Work')
    $('.appearingformwork').delay(550).slideDown('slow');
    $('.tythirdformappear').slideUp();
})

$('.tythirdformappear').click(function(event) {
    // event.preventDefault();
    // $('.appearingformwork').slideDown('slow');
    // $('.thirdformappear').slideUp();
    event.preventDefault();
    var offset = 0;
    var target = this.hash;
    if ($(this).data('offset') != undefined) offset = $(this).data('offset');
    $('html, body').stop().animate({
        'scrollTop': $(target).offset().top - offset
    }, 500, 'swing', function() {
        // window.location.hash = target;
    });
    $('.elevate-form').replaceWith(`<div class="twocolumninput elevate-form">
                <input id="company" maxlength="40" name="company" placeholder="Company *" required="" type="text"/>
                <input id="title" maxlength="40" name="title" placeholder="Title *" required="" type="text"/>
            </div>`);
    $('#00N1G000007Y9Bf').attr('value', 'Brooksource.com - TY - Find Work')
    $('.appearingformwork').delay(550).slideDown('slow');
    $('.tythirdformappear').slideUp();

});


// openMobileNav();

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll(function() {

        /* Check the location of each desired element */
        $('.citywrapper, .timelineinfowrapper').each(function(i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 500);

            }

        });

    });

});


$(function() {
    $('.mobile-nav-links').on('click', '.hasdropdown-mobile', function() {
        $(this).toggleClass('dropopen');
    })
})

$(function() {
    $('.mobile-nav-links').on('click', '.hasdropdown-mobile', function(event) {
        event.preventDefault();
        $(this).parent().parent().toggleClass('dropopen');
        if ($(this).children().hasClass('fa-chevron-down')) {
            $(this).children().removeClass('fa-chevron-down');
            $(this).children().addClass('fa-chevron-up');
        } else {
            $(this).children().removeClass('fa-chevron-up');
            $(this).children().addClass('fa-chevron-down');
        }
    })
})
$('a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 150;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

function logoChange(event) {
    event.setAttribute('src', '../assets/images/stacked-tech-youth.svg')
}

function logoChangeBack(event) {
    event.setAttribute('src', '../assets/images/stacked-tech-youth-white.svg')
};