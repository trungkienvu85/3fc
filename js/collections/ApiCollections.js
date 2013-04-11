/**
 * Created with JetBrains WebStorm.
 * User: Admin
 * Date: 4/1/13
 * Time: 3:45 PM
 * To change this template use File | Settings | File Templates.
 */
function loginUser(userModel,callback){


    var url = 'http://testing.3fatcarrots.com/FCServices/Login?userName='+userModel.UserEmail+'&passWord='+userModel.UserPassword
    console.log('url'+url);
    $.ajax({
        url:url,
        dataType: 'json',
        type: 'POST',
        timeout: 2000,
        success:function(data) {
           console.log('data:'+JSON.stringify(data));
            var obj      = $.parseJSON(JSON.stringify(data));
            userModel.UserType= '1';
            userModel.UserId= obj.UserId;
            userModel.gameIds= obj.GameIds;
            callback(userModel,null);
        },
        error: function() {

        }
    });

}

function getGames(userId,callback){
    var url = 'http://testing.3fatcarrots.com/FCServices/GetGames?userId='+userId;
    console.log('url'+url);
    $.ajax({
        url:url,
        dataType: 'json',
        type: 'GET',
        timeout: 2000,
        success:function(data) {
            callback(JSON.stringify(data));
        },
        error: function() {

        }
    });
}

function getUserbyUserId(userId,callback){
    var url = 'http://testing.3fatcarrots.com/FCServices/GetUserByID?userId='+userId;
    console.log('url'+url);
    $.ajax({
        url:url,
        dataType: 'json',
        type: 'GET',
        timeout: 2000,
        success:function(data) {
            var userObj = $.parseJSON(JSON.stringify(data));
            callback(userObj);
        },
        error: function() {

        }
    });
}

function getDetailGame(userId,gameId,callback){

    var url = 'http://testing.3fatcarrots.com/FCServices/GetGameByGameIDAndUserID?gameid='+gameId+'&userid='+userId;
    console.log('url'+url);
    $.ajax({
        url:url,
        dataType: 'json',
        type: 'GET',
        timeout: 2000,
        success:function(data) {
            callback(JSON.stringify(data));
        },
        error: function() {

        }
    });
}

function getRewardByGame(userId,gameId,rewardType,callback){
    var url = 'http://testing.3fatcarrots.com/FCServices/GetRewardByGameID?gameId='+gameId+'&rewardType='+rewardType+'&userId='+userId;
    console.log('url'+url);
    $.ajax({
        url:url,
        dataType: 'json',
        type: 'GET',
        timeout: 2000,
        success:function(data) {
            callback(JSON.stringify(data));
        },
        error: function() {

        }
    });
}

function getGamebyUser(userId,gameId,callback){

}

function loadState(callback){

    var url = 'http://testing.3fatcarrots.com/FCServices/GetStates';

    $.ajax({
        url:url,
        dataType: 'json',
        type: 'GET',
        timeout: 2000,
        success:function(data) {
            console.log('data:'+JSON.stringify(data));
          callback(data);
        },
        error: function() {

        }
    });
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

function createPlayergameStep2(playerGameStep2Model,callback){

    var url = 'http://testing.3fatcarrots.com/FCServices/InsertGame';
    console.log('create');

    $.ajax({
        url:url,
        dataType: 'json',
        type: 'POST',
        data:playerGameStep2Model,
        timeout: 2000,
        success:function(data) {
            console.log('data:'+JSON.stringify(data));

        },
        error: function() {

        }
    });

}


function createPlayergameStep3OOneReward(playerGameStep3ThreeRewardModel,firstRewardMode,callback){
    playerGameStep3ThreeRewardModel.playerId='3';
    callback(playerGameStep3ThreeRewardModel);
}

function createPlayergameStep3OThreeReward(playerGameStep3ThreeRewardModel,firstRewardMode,secondRewardMode,thirdRewardMode,callback){

}


function createPlayergameStep4(PlayerGameStep2Model,callback){

}



