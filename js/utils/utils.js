/**
 * Created with JetBrains WebStorm.
 * User: Admin
 * Date: 4/11/13
 * Time: 8:20 AM
 * To change this template use File | Settings | File Templates.
 */
function checkValidateUserLogin(userModel,callback){
    var err='';
    if(userModel.UserEmail==''){
        err='Invalid user email!';
    }else if(userModel.UserPassword==''){
        err='Invalid password!';
    }
    callback(err);
}

function checkValidateCreatePlayerGameStep2(userModel,gameModel,callback){
    var err='';
    console.log('checkValidateCreatePlayerGameStep2');
    callback(err);
}
