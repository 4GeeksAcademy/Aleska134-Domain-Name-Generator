let combinations = [];
// let combinations2 = '';

  let pronoun = ['the', 'our'];
  let adj =['great', 'big'];
  let  noun = ['jogger', 'racoon'];
  let extension = ['.com','.net','.us'];

  function domaingenerator (pronouns,adjs,nouns,extensions){
    // let newString = "";
    for (let i = 0; i <= pronouns.length; i++){
      for (let j = 0; i <= adjs.length; j++){
        for (let m = 0; m < adjs.length; m++){
          for (let n = 0; n <= pronouns.length; n++){
            combinations.push(pronouns[i] + adjs[j] + nouns[m] + extensions[n]);
            combinations.push(pronouns[i] + adjs[j+1] + nouns[m] + extensions[n]);
            combinations.push(pronouns[i+1] + adjs[j] + nouns[m] + extensions[n]);
            combinations.push(pronouns[i+1] + adjs[j+1] + nouns[m] + extensions[n]);


          // newString = pronouns[i] + adjs[j] + nouns[m] + extensions[n];
          // combinations2 += newString + ' ';
          // newString = pronouns[i] + adjs[j+1] + nouns[m] + extensions[n];
          // combinations2 += newString + ' ';

          // newString = pronouns[i+1] + adjs[j] + nouns[m] + extensions[n];
          // combinations2 += newString + ' ';
          // newString = pronouns[i+1] + adjs[j+1] + nouns[m] + extensions[n];
          // combinations2 += newString + ' ';
          }

        }
        
        return (combinations);
        // node app.js
      }
      }
    }

    console.log(domaingenerator(pronoun,adj,noun,extension));