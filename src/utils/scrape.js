const request = require('request')
const fs = require('fs')
const { parse } = require('node-html-parser')

for (let i=1; i<=11; i++) {
    request.get({ url: `https://bmsit.ac.in/departments/${i}` }, (error, response) => {
        if (error) {
            console.log(error)
        }
        let data = ''
        const root = parse(response.body)
        const title = root.querySelector('title').text.toString()
        data = data + `${title}\n`
        let tables = root.querySelectorAll('table')
        let table = undefined
        if (i === 2 || i === 6 || i === 1 || i == 5 || i === 8) {
            table = tables[0]
        }
        else {
            table = tables[1]
        }
        const tbody = table.querySelector('tbody')
        const trs = tbody.querySelectorAll('tr')
        trs.forEach((tr) => {
            let tds = tr.querySelectorAll('td')
            tds.forEach((td) => {
                data = data + td.text.toString().replace(/\s+/g, ' ').trim() + '-'
            })
            data = data + '\n'
        })
        fs.writeFileSync(`data/dept${i}.txt`, data)
    })
}