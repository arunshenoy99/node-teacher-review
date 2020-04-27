const fs = require('fs')
const path = require('path')
require('../db/mongoose')

const Teacher = require('../models/teacher')

const dataPath = path.join(__dirname, '../../data')

const createTeacherAndSave = async (teacherObject) => {
    const teacher = new Teacher(teacherObject)
    await teacher.save()
    return teacher
}
let count = 0
for (var i = 1 ; i <= 11; i++) {
    const buffer = fs.readFileSync(`${dataPath}/dept${i}.txt`)
    const data = buffer.toString()

    const dataParts = data.split('\n')
    for (var j = 1; j < dataParts.length - 1; j++) {
        const teacherData = dataParts[j].split('-')
        const teacherObject = {
            name: teacherData[0],
            qualification: teacherData[1],
            position: teacherData[2],
            department: dataParts[0]
        }
        createTeacherAndSave(teacherObject)
        .then((teacher) => {})
        .catch((e) => {console.log(e)})
    }  
}
