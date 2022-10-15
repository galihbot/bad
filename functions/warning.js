const fs = require('fs')

/**
 * Check limit.
 * @param {string} userId 
 * @param {object} _dir 
 * @param {number} limitCount 
 * @param {boolean} isPremium 
 * @param {boolean} isOwner 
 * @returns {boolean}
 */
const isWarn = (userId, _dir) => {
    let found = false
    for (let i of _dir) {
        if (i.id === userId) {
            if (i.warning >= 3) {
                found = true
                return true
            } else {
                found = true
                return false
            }
        }
    }
    if (found === false) {
        const obj = { id: userId, warning: 1 }
        _dir.push(obj)
        fs.writeFileSync('./src/warning.json', JSON.stringify(_dir))
        return false
    }
}

const checkWarn = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    return status
}

/**
 * Add limit to user.
 * @param {string} userId 
 * @param {object} _dir 
 * @param {boolean} isPremium 
 * @param {boolean} isOwner 
 */
const addWarn = (userId, path, _dir) => {
    let pos = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            pos = i
        }
    })
    if (pos !== null) {
        _dir[pos].warning += 1
        fs.writeFileSync(path, JSON.stringify(_dir))
    }
}
const delWarn = (userId, path, _dir) => {
    let pos = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            pos = i
        }
    })
    if (pos !== null) {
        _dir[pos].warning -= 1
        fs.writeFileSync(path, JSON.stringify(_dir))
    }
}
const addWarning = (userId, path, _dir) => {
     const obj = { id: userId, warning: 1 }
    _dir.push(obj)
    fs.writeFileSync(path, JSON.stringify(_dir))
}

/**
 * Get user's limit.
 * @param {string} userId 
 * @param {object} _dir 
 * @param {number} limitCount 
 * @returns {number}
 */
const getWarn = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].warning
    }
}

module.exports = {
    isWarn,
    addWarning,
	checkWarn,
    addWarn,
    getWarn, 
	delWarn
}
