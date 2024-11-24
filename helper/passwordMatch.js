const bcrypt = require('bcryptjs');

/**
 * Hash the password if both passwords match.
 * @param {string} password
 * @param {string} confirmPassword
 * @returns {string|Error} - Hashed password or error
 */
function hashPassword(password, confirmPassword) {
    if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
    }

    if (password.length < 8 || password.length > 20) {
        throw new Error('Password must be between 8 and 20 characters');
    }

    return bcrypt.hashSync(password, 12);  // Synchronous hash
}

module.exports = { hashPassword };
