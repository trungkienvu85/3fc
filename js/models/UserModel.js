/**
 * Created with JetBrains WebStorm.
 * User: Admin
 * Date: 3/24/13
 * Time: 3:22 PM
 * To change this template use File | Settings | File Templates.
 */
User.UserModel = function (config) {

    this.id = config.id;
    this.userName = config.userName;
    this.firstName= config.firstName;
    this.middleName= config.middleName;
    this.lastName= config.lastName;
    this.sex= config.sex;
    this.age= config.age;
    this.password = config.password;
    this.secQuestionId= config.secQuestionId;
    this.answer= config.answer;
    this.userType= config.userType;
    this.email= config.email;
    this.lisGameId= config.lisGameId;
    this.lisGameSupportedId= config.lisGameSupportedId;
    this.listSupporter= config.listSupporter;

}

User.SupporterModel = function (config) {
    this.id = config.id;
    this.userName = config.userName;
    this.password = config.password;
    this.userType= config.userType;
    this.email= config.email;
    this.lisGameSupportedId= config.lisGameSupportedId;
}


