$('.card-header').hover(function () {
    $(this).css('cursor', 'pointer')
})

$('.card-header').click(function () {
    let id = $(this).attr('id').replace('header-', '')
    $(`#body-${id}`).collapse('toggle')
})

var reviewTemplate = '<div class="row"><div class="col"><blockquote class="blockquote"><p class="mb-0">{{review}}</p><footer class="blockquote-footer"><cite>{{username}}</cite></footer></blockquote></div></div>'
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
            console.log(data)
            var html = template(data)
            $('#noreview').html = "Some reviews are"
            $(`#body-${id}`).append(html)
        }
    })
})

