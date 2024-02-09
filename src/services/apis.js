
const BASE_URL = "http://localhost:4000/api/v1"

export const categories = {
    CATEGORIES_API:BASE_URL + "/course/showAllCategories",
}

export const auth = {
    LOGIN_API:BASE_URL + "/auth/login",
    RESETTOKEN_API:BASE_URL + "/auth/reset-password-token",
    RESET_API:BASE_URL + "/auth/reset-password",
    SENFOTP_API:BASE_URL +"/auth/sendotp",
    VERIFYEMAIL_API:BASE_URL +"/auth/signup"
}