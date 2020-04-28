$('.dropdown-menu a').click(function () {
    let department = $(this).html().replace('&amp;', '&')
    console.log(window.location.protocol)
    console.log(window.location.hostname)
    console.log(window.location.port)
    window.location.href = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/departments/${department}/teachers`
})