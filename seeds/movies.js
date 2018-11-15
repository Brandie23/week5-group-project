
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, Catergory: 'Animated films', Title: "Gone Fishing", Director:"John Musker, Ronclements", Release_Date:"21/02/2017"},
        {id: 2, Catergory: 'Animated films', Title: "Frozen Fever", Director:"Chris Buck, Jennifer Lee", Release_Date:"13/03/2015"},
        {id: 3, Catergory: 'Animated films', Title: "Feast", Director:"Patrick Osborne", Release_Date:"10/06/2014"},
        {id: 4, Catergory: 'Comedy films', Title: "Four Lions", Director:"Chris Morris", Release_Date:"07/10/2011"},
        {id: 5, Catergory: 'Comedy films', Title: "Hahaha", Director:"Hong Sang - Soo", Release_Date:"08/10/2011"},
        {id: 6, Catergory: 'Comedy films', Title: "The Bounty Hunter", Director:"Andy Tennant", Release_Date:"09/10/2011"},
        {id: 7, Catergory: 'Documentary films', Title: "Fists Ups", Director:"Spike Lee", Release_Date:"09/09/2016"},
        {id: 8, Catergory: 'Documentary films', Title: "911 In Plane Site", Director:"William Lewis", Release_Date:"11/09/2006"},
        {id: 9, Catergory: 'Documentary films', Title: "An Act Of Conscience", Director:"Robbie Leppzer", Release_Date:"01/09/1997"},
        {id: 10, Catergory: 'Historical period films', Title: "Jane Eyre", Director:"Cary Joji Fukunaga", Release_Date:"09/01/2011"},
        {id: 11, Catergory: 'Historical period films', Title: "Pride and Prejudice", Director:"Joe Wright", Release_Date:"15/05/2005"},
        {id: 12, Catergory: 'Historical period films', Title: "Kingdom Of Heaven", Director:"Ridley Scott", Release_Date:"05/04/2005"},
        {id: 13, Catergory: 'Speculative fiction films', Title: "Looper", Director:"Rian Johnson", Release_Date:"20/09/2012"},
        {id: 14, Catergory: 'Speculative fiction films', Title: "Doctor Strange", Director:"Scott Derrickson", Release_Date:"04/11/2016"},
        {id: 15, Catergory: 'Speculative fiction films', Title: "Her", Director:"Spike Jonze", Release_Date:"10/12/2002"},
        {id: 16, Catergory: 'War films', Title: "Civil War Films Of The Silent Era", Director:"Thomas Ince", Release_Date:"01/01/2002"},
        {id: 17, Catergory: 'War films', Title: "War Work", Director:"Michael Nyman", Release_Date:"02/03/2014"},
        {id: 18, Catergory: 'War films', Title: "They Filmed The War In Color", Director:"Clark Gable", Release_Date:"09/11/2006"}
      ]);
    });
};
