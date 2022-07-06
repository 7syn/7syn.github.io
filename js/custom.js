(function ($) {
    "use strict"; $(document).ready(function () {
        $("body").toggleClass("loaded"); setTimeout(function () { $("body").addClass("loaded"); }, 300); var item = $("#bl-work-items>div"); var elementsLength = item.length; for (var i = 0; i < elementsLength; i++) { $(item[i]).hoverdir(); }
        $("#selector").animatedHeadline({ animationType: "clip" }); Boxlayout.init(); $("a[href='#']").on("click", (function (e) { e.preventDefault(); })); $(".carousel.carousel-slider").carousel({ fullWidth: true, indicators: true, }); if ($(window).width() > 800) { $(".resume-list-item, .resume-card").on("click", function () { $(".resume-list-item").removeClass("is-active"); var e = parseInt($(this).data("index"), 10); $("#resume-list-item-" + e).addClass("is-active"); var t = e + 1, n = e - 1, i = e - 2; $(".resume-card").removeClass("front back up-front up-up-front back-back"), $(".resume-card-" + e).addClass("front"), $(".resume-card-" + t).addClass("back"), $(".resume-card-" + n).addClass("back-back"), $(".resume-card-" + i).addClass("back") }); }
        $("#skills-counter [data-star]").each(function (e) {
            var intValue = parseInt($(this).attr('data-star')); var floatValue = parseFloat($(this).attr('data-star')); var makeFull = function (intValue, floatValue) {
                var html = ""; for (let index = 1; index < intValue + 1; index++) { if (index == intValue && intValue !== floatValue) { html += '<i class="fa fa-star-half-empty"></i>\n'; } else { html += '<i class="fa fa-star"></i>\n'; } }
                return html;
            }
            var makeEmtry = function (intValue, floatValue) {
                var html = ""; for (let index = floatValue; index < 5; index++) { html += '<i class="fa fa-star-o"></i>\n'; }
                return html;
            }
            var html = makeFull(intValue, floatValue); html += makeEmtry(intValue, floatValue); $(this).html(html);
        });
        if ($("#search-input").length > 0) {
            SimpleJekyllSearch({ searchInput: document.getElementById('search-input'), resultsContainer: document.getElementById('results-container'), json: "/search.json", searchResultTemplate: '<li class="search-list"><a href="https://moscow-jekyll-theme.demos.ducor.net{url}">{title}</a></li>' })
        }
        if ($("#bl-work-section").length > 0) {
            setTimeout(() => {
                $("#bl-work-section").click()
            }, 1000)
        }
    });
})(jQuery);