
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, catergory: 'Animated films', title: "Gone Fishing", director:"John Musker, Ronclements", release_date:"21/02/2017"},
        {id: 2, catergory: 'Animated films', title: "Frozen Fever", director:"Chris Buck, Jennifer Lee", release_date:"13/03/2015"},
        {id: 3, catergory: 'Animated films', title: "Feast", director:"Patrick Osborne", release_date:"10/06/2014"},
        {id: 4, catergory: 'Comedy films', title: "Four Lions", director:"Chris Morris", release_date:"07/10/2011"},
        {id: 5, catergory: 'Comedy films', title: "Hahaha", director:"Hong Sang - Soo", release_date:"08/10/2011"},
        {id: 6, catergory: 'Comedy films', title: "The Bounty Hunter", director:"Andy Tennant", release_date:"09/10/2011"},
        {id: 7, catergory: 'Documentary films', title: "Fists Ups", director:"Spike Lee", release_date:"09/09/2016"},
        {id: 8, catergory: 'Documentary films', title: "911 In Plane Site", director:"William Lewis", release_date:"11/09/2006"},
        {id: 9, catergory: 'Documentary films', title: "An Act Of Conscience", director:"Robbie Leppzer", release_date:"01/09/1997"},
        {id: 10, catergory: 'Historical period films', title: "Jane Eyre", director:"Cary Joji Fukunaga", release_date:"09/01/2011"},
        {id: 11, catergory: 'Historical period films', title: "Pride and Prejudice", director:"Joe Wright", release_date:"15/05/2005"},
        {id: 12, catergory: 'Historical period films', title: "Kingdom Of Heaven", director:"Ridley Scott", release_date:"05/04/2005"},
        {id: 13, catergory: 'Speculative fiction films', title: "Looper", director:"Rian Johnson", release_date:"20/09/2012"},
        {id: 14, catergory: 'Speculative fiction films', title: "Doctor Strange", director:"Scott Derrickson", release_date:"04/11/2016"},
        {id: 15, catergory: 'Speculative fiction films', title: "Her", director:"Spike Jonze", release_date:"10/12/2002"},
        {id: 16, catergory: 'War films', title: "Civil War Films Of The Silent Era", director:"Thomas Ince", release_date:"01/01/2002"},
        {id: 17, catergory: 'War films', title: "War Work", director:"Michael Nyman", release_date:"02/03/2014"},
        {id: 18, catergory: 'War films', title: "They Filmed The War In Color", director:"Clark Gable", release_date:"09/11/2006"}
      ]);
    });
};
