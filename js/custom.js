/* Flex Slider */

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: true,
    pauseOnHover: true,
    slideshowSpeed: 15000
  });
});

/* Sortable rows */
$(document).ready(function () {
    $('.sorted_table').rowSorter({
        handler: "td.sorter",
        onDrop: function (tbody, row, index, oldIndex) {
            $(tbody).parent().find("tfoot > tr > td").html((oldIndex + 1) + ". row moved to " + (index + 1));
        }
    });
});

$(function () {
    $(document).find("input.token").each(function (_index, _ele) {
        $(_ele).css('width', $(_ele).val().length*8);
    });
});

$(document).on("click", "input.token", function () {
    $(this).focus().select();
});

$(document).on("click", "button.docAdd, button.tAdd, button.techAdd, button.faqAdd, button.locAdd", function () {

    if ($(this).hasClass("docAdd")) {
        var _strHTML = '<tr><td class="sorter"><i class="fa fa-arrows"></i></td><td><textarea class="form-control" style="min-height: 128px;" placeholder="Content"></textarea><small>Note: <input type="text" readonly class="token" value="&lt;br /&gt;" />, <input type="text" readonly class="token" value="&lt;p&gt;&lt;/p&gt;" />, <input type="text" readonly class="token" value="&lt;b&gt;&lt;/b&gt;" />, <input type="text" readonly class="token" value="&lt;a href=\'#\'&gt;text&lt;/a&gt;" />, <input type="text" readonly class="token" value="&lt;ul&gt;&lt;li&gt;&lt;/li&gt;&lt;/ul&gt;" />, <input type="text" readonly class="token" value="&lt;ol&gt;&lt;li&gt;&lt;/li&gt;&lt;/ol&gt;" /></small></td>';
        _strHTML += '    <td><img src="http://placehold.it/140x120&text=Picture" class="img-thumbnail doctor-img change-img" title="Click on picture to change"><input type="file" class="hide"></td>';
        _strHTML += '    <td><button class="btn btn-info btn-xs docAdd"><i class="fa fa-plus"></i></button> <button class="btn btn-danger btn-xs docRemove"><i class="fa fa-minus"></i></button></td>';
        _strHTML += '</tr>';
        $("#tabDoctor").append(_strHTML);
    }

    if( $(this).hasClass("tAdd") ){
        var _strHTML = '<tr><td class="sorter"><i class="fa fa-arrows"></i></td><td width="60%"><textarea class="form-control" placeholder="Testimonial Description..."></textarea></td>';
        _strHTML += '    <td width="30%"><input type="text" class="form-control" placeholder="Client Name" /></td>';
        _strHTML += '    <td width="30%"><input type="date" class="form-control" placeholder="Submited Date" /></td>';
        _strHTML += '    <td width="10%"><button class="btn btn-info btn-xs tAdd"><i class="fa fa-plus"></i></button> <button class="btn btn-danger btn-xs tRemove"><i class="fa fa-minus"></i></button>';
        _strHTML += '    </td>';
        _strHTML += '</tr>';
        $("#testimonialsInfo").append(_strHTML);
    }

    if ($(this).hasClass("techAdd")) {
        var _strHTML = '<tr><td class="sorter"><i class="fa fa-arrows"></i></td><td width="60%"><input type="text" class="form-control" placeholder="Name" /></td>';
        _strHTML += '    <td width="30%"><img src="http://placehold.it/80x80&amp;text=Picture" class="img-thumbnail change-img" title="Click on picture to change"><input type="file" class="techImg hide"></td>';
        _strHTML += '    <td width="10%"><button class="btn btn-info btn-xs techAdd"><i class="fa fa-plus"></i></button> <button class="btn btn-danger btn-xs techRemove"><i class="fa fa-minus"></i></button>';
        _strHTML += '    </td>';
        _strHTML += '</tr>';
        $("#latestTechnology").append(_strHTML);
    }

    if ($(this).hasClass("faqAdd")) {
        var _strHTML = '<tr><td class="sorter"><i class="fa fa-arrows"></i></td><td width="90%"><input type="text" class="form-control" placeholder="Question" /><textarea class="form-control" placeholder="Answer"></textarea></td>';
        _strHTML += '    <td width="10%"><button class="btn btn-info btn-xs faqAdd"><i class="fa fa-plus"></i></button> <button class="btn btn-danger btn-xs faqRemove"><i class="fa fa-minus"></i></button>';
        _strHTML += '    </td>';
        _strHTML += '</tr>';
        $("#faq").append(_strHTML);
    }

    if ($(this).hasClass("locAdd")) {
        var _strHTML = '<tr><td class="sorter"><i class="fa fa-arrows"></i></td>';
        _strHTML += '    <td>';
        _strHTML += '      <div class="form-group"><input class="form-control" type="text" placeholder="Office name" /></div>';
        _strHTML += '      <div class="form-group"><input class="form-control" type="tel" placeholder="Contact Number" /></div>';
        _strHTML += '      <div class="form-group"><input class="form-control" type="text" placeholder="Street" /></div>';
        _strHTML += '      <div class="form-group"><input class="form-control" type="text" placeholder="City, State, Country and Zipcode" /></div>';
        _strHTML += '      <div class="form-group"><textarea class="form-control" type="text" id="map" name="map" placeholder="Google map link" style="min-height:40px;"></textarea></div>';
        _strHTML += '    </td>';
        _strHTML += '    <td><button class="btn btn-info btn-xs locAdd"><i class="fa fa-plus"></i></button> <button class="btn btn-danger btn-xs locRemove"><i class="fa fa-minus"></i></button>';
        _strHTML += '    </td>';
        _strHTML += '</tr>';
        $("#tabLocation").append(_strHTML);
    }
   
});

$(document).on("click", "button.docRemove, button.tRemove, button.techRemove, button.faqRemove, button.locRemove", function () {
    $(this).parent().parent().remove();
});

$(document).on("click", ".change-img", function () {
    $(this).next().click();
});

$(document).on("change", "input[type='file'].hide", function (evt) {
    var _fileInput = $(this);
    var files = evt.target.files;
    var file = files[0];

    if (file.type === "image/jpeg" || file.type === "image/gif" || file.type === "image/png" || file.type === "image/bmp") {
        if (files && file) {
            var reader = new FileReader();
            reader.onload = function (readerEvt) {
                var binaryString = readerEvt.target.result;
                var _src = 'data: ' + file.type + ';base64,' + btoa(binaryString);
                $(_fileInput).prev().attr("src", _src);
            };
            reader.readAsBinaryString(file);
        }

    } else {
        $("#modalError").find('.modal-body').html("Invalid Images");
        $("#modalError").modal('show');
    }
});

/* Direct Events */

/*
ic_FirstName
ic_LastName
ic_OptInDate
ic_shortOverview
div.tour
div.consultation
div.optometrists
*/

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


$(document).on("keyup change", "#firstname, #lastname, #optindate, #shortConsultOverview, #optometristsContent", function () {
    switch (this.id) {
        case 'firstname':
            $(".ic_FirstName").text($(this).val());
            break;
        case 'lastname':
            $(".ic_LastName").text($(this).val());
            break;
        case 'optindate':
            var val = $(this).val();
            var d = new Date(val);
            $(".ic_OptInDate").text(monthNames[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear());
            break;
        case 'shortConsultOverview':
            $(".ic_shortOverview").html($(this).val());
            break;
        case 'optometristsContent':
            $("div.optometrists").html($(this).val() + "<p>&nbsp;</p>");
            break;
    }
});

function fnSetHeaderBackground() {
    $("header").attr("style", "background-image: url('" + $(".header-img").attr("src") + "');");
}

function fnSetMenuText() {
    $(".cmsMenuItems").find("input[type=checkbox]").each(function (_index, _ele) {
        $(".navbar-nav li a:eq(" + _index + ")").text($("#" + $(this).attr("aria-label")).val());
        var _targetSection = $(".navbar-nav li a:eq(" + _index + ")").attr("href");
        if (!$(_ele).prop("checked")) {
            $(".navbar-nav li a:eq(" + _index + ")").parent().css("display", "none");
            $(_targetSection).next().css("display", "none");
            $(".itop a[href=" + _targetSection + "]").parent().css("display", "none");
        } else {
            $(".navbar-nav li a:eq(" + _index + ")").parent().css("display", "inline-block");
            $(_targetSection).next().css("display", "block");
            $(".itop a[href=" + _targetSection + "]").parent().css("display", "block");
        }
    });
}

function fnSetTour() {
    if ($("#surgeryTabs li.active a").text() === "Image") {
        $("div.tour").html($($("#surgeryTabs li.active a").attr("href")).find(".form-group").html());
    }
    else {
        $("div.tour").html($($("#surgeryTabs li.active a").attr("href")).find("textarea").val());
    }
    
}

function fnSetConsultationFeatures() {
    $("div.consultation").html("");
    $(".consultation-menu input[type='checkbox']:checked").each(function (_index, _ele) {
        $("div.consultation").append($(_ele).parent().parent().find("div.panel").parent().html());
    });
}

function fnOurDoctor() {
    $(".ic_Doctors").html("");
        $("#tabDoctor tr").each(function (_index, _tr) {
            var _strHTML = '<div class="head">';
            _strHTML += '<div class="col-md-9 text-left">' + $(_tr).find("textarea").val() +'</div>';
            _strHTML += '<div class="col-md-3">';
            _strHTML += '<img id="ic_DoctorImg" src="' + $(_tr).find("img.doctor-img").attr("src") +'" alt="" class="img-responsive" />';
            _strHTML += '</div>';
            _strHTML += '</div>';
            _strHTML += '<div class="clearfix"><br  /></div>';

            $(".ic_Doctors").append(_strHTML);
        });
    }

    function fnGenerateTestimonials() {
        $("#client-feedbacks").html("");
        $("table#testimonialsInfo tr").each(function (_trIndx, _ele) {

            var _strHTML = '<div class="col-md-4">';
            _strHTML +=    '    <div class="bubble_wrapper">';
            _strHTML +=    '    <div class="bubble blue_bubble">';
            _strHTML += '        <i class="fa fa-quote-left"></i> '+ $(_ele).find("textarea").val() +'<i class="fa fa-quote-right"></i>';
            _strHTML +=    '    </div>';
            _strHTML += '    <h4>~' + $(_ele).find("input[type='text']").val() + ' (' + $(_ele).find("input[type='date']").val() + ')</h4>';
            _strHTML +=    '    </div>';
            _strHTML +=    '</div>';

            $("#client-feedbacks").append(_strHTML);
        });
    }

    function fnFinancing() {
        $(".financing").html("");
        var _strHTML = "";
        _strHTML = $("#financingContent").val();
        if ($("#calc").prop("checked")) { 
            _strHTML += '<div class="pull-right"><iframe width="100%" height="150" frameborder="0" src="calculator_small.html"></iframe></div>';
        }
        $(".financing").html(_strHTML);
    }

    function fnTechnology() {
        $(".technology-gallery").html("");

        $("table#latestTechnology tr").each(function (_trIndx, _ele) {

            var _strHTML = '<div class="col-md-4">';
            _strHTML += '    <h3>' + $(_ele).find("input[type='text']").val() + '</h3>';
            _strHTML += '<img src="' + $(_ele).find("img").attr("src") + '" alt="' + $(_ele).find("input[type='text']").val() + '">';
            _strHTML += '</div>';

            $(".technology-gallery").append(_strHTML);
        });
        $(".technology-gallery").append("<p>&nbsp;</p>");

        $(".technology-desc").html( $("#technologyContent").val() );
    }

    function fnFaq() {
        $("#faqContent").html("");

        $("table#faq tr").each(function (_trIndx, _ele) {

            var _strHTML = '';
            _strHTML += '    <h3>' + $(_ele).find("input[type='text']").val() + '</h3>';
            _strHTML += '<p>' + $(_ele).find("textarea").val() + '</p>';

            $("#faqContent").append(_strHTML);
        });
        $("#faqContent").append("<p>&nbsp;</p>");
    }

    function fnCta() {
        $("#ctaContent").html("");
        $("#tabLocation tr").each(function (_index, _ele) {
            var _strHTML = '';
            _strHTML += '<div>' + $("#callUsDesc").val() + '</div>';
            _strHTML += '<h3>' + $(_ele).find("input[type='text']:eq(0)").val() + '</h3>';
            _strHTML += '<p>' + $(_ele).find("input[type='tel']:eq(0)").val() + '<br /> ' + $(_ele).find("input[type='text']:eq(1)").val() + '<br />' + $(_ele).find("input[type='text']:eq(2)").val() + '<br /><a href="' + ($(_ele).find("textarea").val().length > 0) ? $(_ele).find("textarea").val() : '#' + '" target="_blank">Show map</a></p>';
            
            $("#ctaContent").append(_strHTML);
        });

    }

    function fnSetMenuColor() {
        var _menuBgColor = $("#menuBgColor").val();
        var _menuActiveColor = $("#menuActiveColor").val();
        var _menuTextColor = $("#menuTextColor").val();
        $("#menuStyle1").remove();
        $("<style id='menuStyle1'>.navbar{ background-color: #" + _menuBgColor + "!important; } .navbar .nav > li > a:hover{ background-color: #" + _menuActiveColor + "!important; color: #" + _menuTextColor + "!important; } .navbar .nav .active > a, .navbar .nav .active > a:hover, .navbar .nav .active > a:focus, .nav a.active{ background-color: #" + _menuActiveColor + "!important; color: #" + _menuTextColor + "!important;  } </style>").appendTo("head")
    }



        $(document).on("click", "button.submit-preview", function () {
            $(".preLoad-wrap").fadeIn();

            /*Call functions*/
            fnSetMenuColor();
            fnSetMenuText();
            fnSetHeaderBackground();
            fnSetTour();
            fnSetConsultationFeatures();
            fnOurDoctor();
            fnGenerateTestimonials();
            fnFinancing();
            fnTechnology();
            fnFaq();
            fnCta();

            $("#cmsBuilder").fadeOut('fast', function () {
                $(".navbar-nav li.active").removeClass("active");
                $('html, body').stop().animate({
                    'scrollTop': 0
                }, 900, 'swing', function () {

                    $(".navbar").fadeIn('slow', function () {
                        $("#page-wrapper").fadeIn();
                        $(".preLoad-wrap").fadeOut();

                    });

                });

            });
            return false;
        });

        $(document).on("click", "#editBack a", function () {
            $(".preLoad-wrap").fadeIn();
            $(".navbar").fadeOut('fast');
            $("#page-wrapper").fadeOut('fast', function () {
                $(".navbar-nav li.active").removeClass("active");
                $('html, body').stop().animate({
                    'scrollTop': 0
                }, 900, 'swing', function () {

                    $("#cmsBuilder").fadeIn('slow', function () {
                        $(".preLoad-wrap").fadeOut();
                    });

                });

            });

            return false;
        });


        $('span[contenteditable]').keydown(function (e) {
            if (e.keyCode == 13) {
                return false;
            }
        });

        $('span[contenteditable]').keyup(function (e) {
            switch( $(this).attr("class") ){
                case 'head1':
                    $(".bor-top:eq(0)").next().text($(this).text())
                    break;
                case 'head2':
                    $(".bor-top:eq(1)").next().text($(this).text())
                    break;
                case 'head3':
                    $(".bor-top:eq(2)").next().text($(this).text())
                    break;
                case 'head4':
                    $(".bor-top:eq(3)").next().text($(this).text())
                    break;
                case 'head5':
                    $(".bor-top:eq(4)").next().text($(this).text())
                    break;
                case 'head6':
                    $(".bor-top:eq(5)").next().text($(this).text())
                    break;
                case 'head7':
                    $(".bor-top:eq(6)").next().text($(this).text())
                    break;
                case 'head8':
                    $(".bor-top:eq(7)").next().text($(this).text())
                    break;
                case 'head9':
                    $(".bor-top:eq(8)").next().text($(this).text())
                    break;
            }
        });

        $(document).on("click", ".panel-title a", function () {
            var _obj = $(this);
            setTimeout(function () {
                if ($($(_obj).attr("href")).hasClass("in")) {
                    $(_obj).find("i").removeClass("fa-plus").addClass("fa-minus"); 
                } else {
                    $(_obj).find("i").removeClass("fa-minus").addClass("fa-plus");
                }
            }, 400);
        });


    