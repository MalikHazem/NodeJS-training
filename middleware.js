const logger = (req, res, next) =>
{
    console.log(`[${req.method}][${req.originalUrl}] - ${new Date().toLocaleString()}`)
    next();
}

const reqTime = (req, res, next) =>
{
    if(res.locals.reqStartTime)
    {
        const elapsedTime = Date.now() - res.locals.reqStartTime;
        console.log(`This request took ${elapsedTime}ms`)
    }
    else
    {
        res.locals.reqStartTime = Date.now()
        next(); 
    }
}

export
{
    logger,
    reqTime
}