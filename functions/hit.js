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
const isLimit = (userId, _dir, limitCount, isPremium, isOwner) => {
    if (isPremium || isOwner) return false
    let found = false
    for (let i of _dir) {
        if (i.id === userId) {
            if (i.limit <= 0) {
                found = true
                return true
            } else {
                found = true
                return false
            }
        }
    }
    if (found === false) {
        const obj = { id: userId, limit: limitCount }
        _dir.push(obj)
        fs.writeFileSync('./src/limit.json', JSON.stringify(_dir))
        return false
    }
}

/**
 * Add limit to user.
 * @param {string} userId 
 * @param {object} _dir 
 * @param {boolean} isPremium 
 * @param {boolean} isOwner 
 */
const addHit = (userId, _dir) => {
    let pos = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            pos = i
        }
    })
    if (pos !== null) {
        _dir[pos].hitCount += 1
        fs.writeFileSync('./src/userhit.json', JSON.stringify(_dir))
    }
}

/**
 * Get user's limit.
 * @param {string} userId 
 * @param {object} _dir 
 * @param {number} limitCount 
 * @returns {number}
 */
const getHit = (userId, _dir, hitCount) => {
    let pos = null
    let found = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            pos = i
            found = true
        }
    })
    if (found === false && pos === null) {
        const obj = { id: userId, hitCount: hitCount }
        _dir.push(obj)
        fs.writeFileSync('./src/userhit.json', JSON.stringify(_dir))
        return hitCount
    } else {
        return _dir[pos].hitCount
    }
}

module.exports = {
    isLimit,
    addHit,
    getHit
}
