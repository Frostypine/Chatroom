import frog1  from '../../images/badges//frog/afrog-1.png' 
import frog2  from '../../images/badges/frog/afrog-2.png'; 
import frog3  from '../../images/badges/frog/afrog-3.png'; 
import frog4  from '../../images/badges/frog/afrog-4.png'; 
import bug1   from '../../images/badges/bug/abug-1.png'; 
import bug2   from '../../images/badges/bug/abug-2.png'; 
import bug3   from '../../images/badges/bug/abug-3.png'; 
import bug4   from '../../images/badges/bug/abug-4.png'; 
import plant1 from '../../images/badges/plant/aplant-1.png'; 
import plant2 from '../../images/badges/plant/aplant-2.png'; 
import plant3 from '../../images/badges/plant/aplant-3.png'; 
import plant4 from '../../images/badges/plant/aplant-4.png'; 
import rank1  from '../../images/badges/rank/rank1.png'; 
import rank2  from '../../images/badges/rank/rank2.png'; 
import rank3  from '../../images/badges/rank/rank3.png'; 
import rank4  from '../../images/badges/rank/rank4.png'; 
const colors = ["brown","grey","yellow","purple", "lightblue"]; 

const badges = 
[
    {
        //frog badges
        id: 0,
        color: colors[0],
        badge: [ frog1, frog2, frog3, frog4],  
      
    },
    {
        //bug badges 
        id: 1,
        color: colors[1],
        badge: [ bug1, bug2, bug3, bug4],  
    },
    {
        //plant badges 
        id: 2,
        color: colors[2],
        badge: [plant1, plant2, plant3, plant4],  
    },


        {
        //ranking badges
        id: 3,
        color: colors[3],
        badge: [ rank1, rank2, rank3, rank4],  
    },
]; 

export default badges; 

// lv 0-100 color: brown (bronze)
// badge1 lv 0 -25
// badge2 lv 25-50
// badge3 lv 50-75
// badge4 lv 75-100

// get lv 101-500 color: grey(silver) 
// badge1 lv 101-200
// badge2 lv 200-300
// badge3 lv 300-400
// badge4 lv 400-500

// get lv 500-1000 color: yellow(gold)
// badge1 lv 501-600
// badge2 lv 600-700
// badge3 lv 700-800
// badge4 lv 800-1000
 
// obtain a rank once color brown(bronze)
// obtain a rank 5 times color grey(silver)
// obtain a rank 10 times color yellow(gold)
//  badge1 get 4th place leaderboard 
//  badge2 get 3rd place leaderboard 
//  badge3 get 2nd place leaderboard 
//  badge4 get 1st place leaderboard 


// frog  badges
// badge1 a tadpole
// badge2 a tadpole with hind legs
// badge3 a tadpole with 4 legs
// badge4 a frog

// bug badges 
// badge1 an egg on a leaf
// badge2 a caterpillar 
// badge3 a chrysalis 
// badge4 a butterfly

// plant badges 
// badge1 a seedling
// badge2 a tree
// badge3 an apple blossom 
// badge4 an apple 

// ranking badges
// badge1 a coin 
// badge2 a jewel 
// badge3 a treasure chest
// badge4 a crown 

//other possible badges?
//founder badge a pine, a bat or a tree  
//admin badges an open book 
//moderator badge a quill
//programming badge? 

//so currently there are 
// 4types X 4stages X fourranks = 64 badges total
// idea to keep track of what badges a person  has/what badges to display 
//is each user assigned a badge array and each array spot has 0 or 1
// 1 is yes badge exists 
// when have b
