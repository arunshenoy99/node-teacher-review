$('.dropdown-menu a').click(function () {
    let department = $(this).html().replace('&amp;', '&')
    console.log(window.location.protocol)
    console.log(window.location.hostname)
    console.log(window.location.port)
    window.location.href = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/departments/${department}/teachers`
})


$(document).ready(function () {
    $('#indexcarousel').carousel({ interval: 2000 })

    $('#carouselbutton').click(function () {
        if ($('#carouselbutton').children('span').hasClass('fa-pause')) {
            $('#indexcarousel').carousel('pause')
            $('#carouselbutton').children('span').removeClass('fa-pause')
            $('#carouselbutton').children('span').addClass('fa-play')
        }
        else {
            $('#indexcarousel').carousel('cycle')
            $('#carouselbutton').children('span').removeClass('fa-play')
            $('#carouselbutton').children('span').addClass('fa-pause')
        }
    })
})
