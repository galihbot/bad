const fs = require('fs')



/**
 * Add Badword/Response message to database
 * @param {String} msg
 * @param {Sstring} response
 * @param {String} userId
 * @param {Object} data
 * @returns true
 */
const addBadword = (msg, _data) => {
    const obj = {
        badword: msg
    }
    _data.push(obj)
    fs.writeFileSync('./src/badword.json', JSON.stringify(_data))

    return true
}


/**
 * Delete Badword from database
 * @param {String} command
 * @param {Object} _data
 */
const deleteBadword = (command, _data) => {
    Object.keys(_data).forEach((i) => {
        if (_data[i].badword === command) {
            _data.splice(i, 1)
            fs.writeFileSync('./src/badword.json', JSON.stringify(_data))
        }
    })
    return true
}


/**
 * Check command is available or not
 * @param {String} command
 * @param {Object} _data
 * @returns {Boolean}
 */

const checkBadword = (commands, _data) => {
    let status = false
    Object.keys(_data).forEach((i) => {
        if (_data[i].badword === commands) {
            status = true
        }
    })

    return status
}



module.exports = {
    addBadword,
    checkBadword,
    deleteBadword
}
