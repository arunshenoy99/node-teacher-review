$('.card-header').hover(function () {
    $(this).css('cursor', 'pointer')
})

$('.card-header').click(function () {
    let id = $(this).attr('id').replace('-header', '')
    $(`#${id}`).collapse('toggle')
})

$('form').on('submit', function () {
    let id = $(this).attr("id").replace('-form','')
    let formdata = new FormData($(this))
    fetch(`${window.location.protocol}//${window.location.hostname}:${window.location.port}/review/${id}`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        if (response.status == 201){
            $(this).html('<p>Review submitted</p>')
        }
    })
    .catch((error) => {
        console.log(error)
    })
})