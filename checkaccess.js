function checkAccess (req, res, next) {

    var date = new Date();
    if(date.getDay > 0 && date.getDay < 6 && date.getHours() > 9 && date.getHours < 17){
        next();
    }else {
        res.render('unavailable', {
          message: "Our application is only available during working hours, Monday to Friday, from 9 AM to 5 PM. Please come back during these hours to access our services."
        });
}

export default checkAccess;