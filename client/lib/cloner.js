Cloner = {

  cloneBoard:function(boardId) {},
  cloneCard:function (cardId) {
    console.log(Meteor);
    const card = Cards.findOne(cardId);
    console.log("clone card", card);
  }
}
