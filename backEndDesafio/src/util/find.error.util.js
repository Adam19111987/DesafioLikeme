import ERRORS from "../../config/error.js";


const findError = (code) => {
   return ERRORS.filter((err) => err.code === code)
}

export {findError}