

export const errorHandler = (err, req, res, _next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(500).send("Internal server error");
    // res.render('error');
}