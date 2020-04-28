$('.card-header').hover(function () {
    $(this).css('cursor', 'pointer')
})

$('.card-header').click(function () {
    let id = $(this).attr('id').replace('header-', '')
    $(`#body-${id}`).collapse('toggle')
})

$(window).ready(function() {
    $('#rulesModal').modal('show')
})

var reviewTemplate = '<div class="row" style="border: 1px ridge;"><div class="col"><p>Rating:{{rating}}/5</p><blockquote class="blockquote"><p class="mb-0">{{text}}</p><footer class="blockquote-footer"><cite>{{name}}</cite></footer></blockquote></div></div>'
var template = Handlebars.compile(reviewTemplate)

window.addEventListener('submit', (e) => {
    e.preventDefault()
    const id = e.target.id.replace('form-', '')
    const $form = document.querySelector(`#${e.target.id}`)
    const $header = document.querySelector(`#header-${id}`)
    const formData = new FormData($form)
    var data = {}
    formData.forEach((value, key) => {
        data[key] = value
    })
    const url = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/reviews/${id}`
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response) => {
        if (response.status != 201) {
            $header.classList.add('bg-danger')
        } 
        else {
            $header.classList.add('bg-success')
            $form.innerHTML = ""
            response.json()
            .then((serverData) => {
                var html = template(serverData)
                $(`#oldreviews-${id}`).append(html)
                $(`#oldreviewsbutton-${id}`).click()
            })
        }
    })
})

