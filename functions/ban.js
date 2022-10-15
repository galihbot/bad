const fs = require('fs')
const toMs = require('ms')

/**
 * Add Ban user.
 * @param {String} userId 
 * @param {String} expired 
 * @param {Object} _dir 
 */
const addBanUser = (userId, expired, _dir) => {
    const obj = { id: userId, expired: Date.now() + toMs(expired) }
    _dir.push(obj)
    fs.writeFileSync('./src/banned.json', JSON.stringify(_dir))
}

/**
 * Get Ban user position.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getBanPosition = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

/**
 * Get Ban user expire.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getBanExpired = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].expired
    }
}

/**
 * Check user is Ban.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Boolean}
 */
const checkBanUser = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    return status
}

/**
 * Constantly checking Ban.
 * @param {Object} _dir 
 */
const expiredCheck = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Ban expired: ${_dir[position].id}`)
            _dir.splice(position, 1)
            fs.writeFileSync('./src/banned.json', JSON.stringify(_dir))
        }
    }, 1000)
}

/**
 * Get all Ban user ID.
 * @param {Object} _dir 
 * @returns {String[]}
 */
const getAllBanUser = (_dir) => {
    const array = []
    Object.keys(_dir).forEach((i) => {
        array.push(_dir[i].id)
    })
    return array
}

module.exports = {
    addBanUser,
    getBanExpired,
    getBanPosition,
    expiredCheck,
    checkBanUser,
    getAllBanUser
}
