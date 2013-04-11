/**
 * Created with JetBrains WebStorm.
 * User: Admin
 * Date: 4/1/13
 * Time: 3:45 PM
 * To change this template use File | Settings | File Templates.
 */
function loginUser(userModel,callback){
    console.log('a');
    var url = 'http://www.panoramio.com/wapi/data/get_photos?v=1&key=dummykey&tag=test&offset=0&length=20&minx=-30&miny=0&maxx=0&maxy=150&callback=?';

    $.get(url, function (data) {
        // can use 'data' in here...
        console.log('data:'+data);
    });
//    $.ajax({
//        url:'http://testing.3fatcarrots.com/FCServices/Login?userName='+userModel.userName+'&passWord='+userModel.password,
//        dataType: 'json',
//        type: 'POST',
//        timeout: 2000,
//        success:function(data) {
//           console.log('data:'+data);
//        },
//        error: function() {
//            rm.removeLoading();
//        }
//    });
//    userModel.email= "bb";
//    userModel.userType= "1";
//    var list= userModel.listSupporter;
//    var supporterModel= new User.SupporterModel({
//        id : "",
//        userName : "",
//        password : "",
//        userType: "2",
//        email: "Kienvt85@gmail.com",
//        lisGameSupportedId: ""
//    });
//    list[0]= supporterModel;
//    userModel.listSupporter= list;
//    callback(userModel,null);
}

function registerUser(userModel,callback){
    var list= userModel.listSupporter;
    var supporterModel= new User.SupporterModel({
        id : "",
        userName : "",
        password : "",
        userType: "",
        email: "Kienvt85@gmail.com",
        lisGameId: ""
    });
    list[0]= supporterModel;
    userModel.listSupporter= list;
    callback(userModel);
}


