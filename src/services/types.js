// Main routes
const USER = 'user'
const HUB = 'hub'

export const SIGN_UP = `${USER}/signup`
export const RESEND_EMAIL = `${USER}/resend`
export const ACTIVATE_ACCOUNT = `${USER}/activate`

export const LOGIN = `${USER}/login`
export const FORGOTTEN_PASSWORD = `${USER}/forgotten`
export const CHANGE_PASSWORD = `${USER}/changePassword`
export const FAST_LINK = `${USER}/fastlink`
export const VERIFY_TOKEN = `${USER}/verifyToken`

export const GOAL = `${HUB}/goal`
export const BALANCE = `${HUB}/balance`
export const ACCOUNTS = `${HUB}/accounts`
export const ACCOUNT_BREAKDOWN = `${HUB}/breakdown`

export const CONTACT = 'contact'

export const TWITTER_ARTICLES = `twitter/getTweets`
export const WORDPRESS_ARTICLES = `news/getNews`
