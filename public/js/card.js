import { response } from "express"

$('.card-header').hover(function () {
    $(this).css('cursor', 'pointer')
})

$('.card-header').click(function () {
    let id = $(this).attr('id').replace('header-', '')
    $(`#${id}`).collapse('toggle')
})

window.addEventListener('submit', (e) => {
    e.preventDefault()
    const id = e.target.id.replace('form-', '')
    const $form = document.querySelector(`#${e.target.id}`)
    const $header = document.querySelector(`#header-${id}`)
    const formData = new FormData($form)
    let data = {}
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
        }
    })
})