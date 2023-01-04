const createError = (status_code, msg) => {
    const err = new Error(msg);
    err.code = status_code;
    return err;
};
export default createError;
