
Game.GameModel= function (config) {

    this.ActiveResult = config.ActiveResult;
    this.AvailableDate = config.AvailableDate;
    this.Comments = config.Comments;
    this.ExpectedDate = config.ExpectedDate;
    this.GameId = config.GameId;
    this.GameResult = config.GameResult;
    this.GameStatus = config.GameStatus;
    this.IsLatedDate = config.IsLatedDate;
    this.PostResultDate = config.PostResultDate;
    this.RewardType = config.RewardType;
    this.StudyDescription = config.StudyDescription;
    this.StudyName = config.StudyName;
    this.StudyforValue = config.StudyforValue;
    this.SubjectCode = config.SubjectCode;
    this.VerifierEmail = config.VerifierEmail;
    this.VerifierFirstName = config.VerifierFirstName;
    this.VerifierLastName = config.VerifierLastName;
}

Game.PlayerGameStep2Model = function (config) {

    this.ActiveResult = config.ActiveResult;
    this.AvailableDate = config.AvailableDate;
    this.Comments = config.Comments;
    this.ExpectedDate = config.ExpectedDate;
    this.GameId = config.GameId;
    this.GameResult = config.GameResult;
    this.GameStatus = config.GameStatus;
    this.IsLatedDate = config.IsLatedDate;
    this.PostResultDate = config.PostResultDate;
    this.RewardType = config.RewardType;
    this.StudyDescription = config.StudyDescription;
    this.StudyName = config.StudyName;
    this.StudyforValue = config.StudyforValue;
    this.SubjectCode = config.SubjectCode;
    this.VerifierEmail = config.VerifierEmail;
    this.VerifierFirstName = config.VerifierFirstName;
    this.VerifierLastName = config.VerifierLastName;
}

Game.PlayerGameStep3OneRewardModel = function (config) {

    this.playerId = config.playerId;
    this.oneCarrotCashType= config.oneCarrotCashType;
}

Game.PlayerGameStep3ThreeRewardModel = function (config) {

    this.playerId = config.playerId;
    this.oneCarrotCashType= config.oneCarrotCashType;
    this.twoCarrotCashType= config.twoCarrotCashType;
    this.threeCarrotCashType= config.threeCarrotCashType;
}

Game.PlayerGameStep4ThreeRewardModel = function (config) {

    this.playerId = config.playerId;
    this.supporterFirstName=config.supporterFirstName;
    this.supporterLastName=config.supporterLastName;
    this.supporterEmail=config.supporterEmail;
    this.supporterRelationship=config.supporterRelationship;
    this.messenge=config.messenge;
}

Game.CarrotCashRewardModel=function (config) {

    this.rewardType = config.rewardType;
    this.CashValue= config.CashValue;

}


Game.CarrotCashMyChoiceModel=function (config) {

    this.rewardType = config.rewardType;
    this.rewardName= config.rewardName;
    this.rewardDescription= config.rewardDescription;
    this.rewardValue= config.rewardValue;

}

Game.CarrotPricelessModel=function (config) {

    this.rewardType = config.rewardType;
    this.rewardName= config.rewardName;
    this.rewardDescription= config.rewardDescription;
    this.rewardValue= config.rewardValue;

}


Game.CarrotDonationModel=function (config) {

    this.rewardType = config.rewardType;
    this.rewardDescription= config.rewardDescription;
    this.rewardValue= config.rewardValue;

}

