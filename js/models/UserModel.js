/**
 * Created with JetBrains WebStorm.
 * User: Admin
 * Date: 3/24/13
 * Time: 3:22 PM
 * To change this template use File | Settings | File Templates.
 */
User.UserModel = function (config) {

    this.CountryId=config.CountryId,
    this.CreatedBy=config.CreatedBy,
    this.CreatedDate=config.CreatedDate,
    this.FirstName= config.FirstName,
    this.IsActive=config.IsActive,
    this.IsAdmin=config.IsAdmin,
    this.IsInAu=config.IsInAu,
    this.LastName=config.LastName,
    this.MiddleName=config.MiddleName,
    this.Photo=config.Photo,
    this.PostCode=config.PostCode,
    this.RelationShip=config.RelationShip,
    this.School=config.School,
    this.SecretAnswer=config.SecretAnswer,
    this.SecretQuestion=config.SecretQuestion,
    this.StateCode=config.StateCode,
    this.StudentType=config.StudentType,
    this.SuburbLive=config.SuburbLive,
    this.SuburbSchool=config.SuburbSchool,
    this.UserAge=config.UserAge,
    this.UserEmail=config.UserEmail,
    this.UserId=config.UserId,
    this.UserPassword=config.UserPassword,
    this.UserSex=config.UserSex,
    this.UserType=config.UserType,
    this.YearIn=config.YearIn,
    this.gameIds=config.gameIds
}

User.SupporterModel = function (config) {
    this.id = config.id;
    this.userName = config.userName;
    this.password = config.password;
    this.userType= config.userType;
    this.email= config.email;
    this.lisGameSupportedId= config.lisGameSupportedId;
}


