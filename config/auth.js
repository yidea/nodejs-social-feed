// config/auth.js
// !Important. DO NOT USE MY AUTH KEY!
module.exports = {
    'development': {
        'facebook': {
            'consumerKey': '566119096861579',
            'consumerSecret': '956db24bef8c6f17f37c1bac6035b388',
            'callbackUrl': 'http://dev.walmart.com:8000/auth/facebook/callback'
        },
        'twitter': {
            'consumerKey': 'mYQmzJKkIaLi8lwcZ72UxA',
            'consumerSecret': '2ovsFyc8yWnM44Z1WRDX362SbCyjw1PYNb08JJrU',
            'callbackUrl': 'http://dev.walmart.com:8000/auth/twitter/callback'
        },
        'google': {
            'consumerKey': '446585441765-unda5mjs6307q1pqobvhiqj87m9m2kh1.apps.googleusercontent.com',
            'consumerSecret': '...',
            'callbackUrl': 'http://dev.walmart.com:8000/auth/google/callback'
        }
    }
}
