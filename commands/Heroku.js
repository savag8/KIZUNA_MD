
/** 

Exton MD

  𝗖𝗼𝗽𝘆𝗿𝗶𝗴𝗵𝘁 (𝗖) 2024.
 𝗟𝗶𝗰𝗲𝗻𝘀𝗲𝗱 𝘂𝗻𝗱𝗲𝗿 𝘁𝗵𝗲  𝗠𝗜𝗧 𝗟𝗶𝗰𝗲𝗻𝘀𝗲;
 𝗬𝗼𝘂 𝗺𝗮𝘆 𝗻𝗼𝘁 𝘂𝘀𝗲 𝘁𝗵𝗶𝘀 𝗳𝗶𝗹𝗲 𝗲𝘅𝗰𝗲𝗽𝘁 𝗶𝗻 𝗰𝗼𝗺𝗽𝗹𝗶𝗮𝗻𝗰𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗟𝗶𝗰𝗲𝗻𝘀𝗲.
 𝗜𝘁 𝗶𝘀 𝘀𝘂𝗽𝗽𝗹𝗶𝗲𝗱 𝗶𝗻 𝘁𝗵𝗲 𝗵𝗼𝗽𝗲 𝘁𝗵𝗮𝘁 𝗶𝘁 𝗺𝗮𝘆 𝗯𝗲 𝘂𝘀𝗲𝗳𝘂𝗹.
 * @𝗽𝗿𝗼𝗷𝗲𝗰𝘁_𝗻𝗮𝗺𝗲 : Exton 𝗠𝗗, 𝗮 𝘀𝗶𝗺𝗽𝗹𝗲 𝗮𝗻𝗱 𝗲𝗮𝘀𝘆 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝘂𝘀𝗲𝗿 𝗯𝗼𝘁 
 * @𝗼𝘄𝗻𝗲𝗿: Exton 
 
 **/












const { france } = require('../framework/france');
const s = require('../set')


france(
    {
        nomCom : "setvar",
        categorie : "heroku"
    }, async (dest , zk , commandeOptions) =>{

       const {ms,repondre,superUser , arg} = commandeOptions ;
       
       if(!superUser){repondre('Yeh command sirf mere lie hai ap use nahi kar sakte');return};
       if(!arg[0] || !(arg.join('').split('='))) {repondre('Ap ne galat likha hai ; Ese Likho :\nsetvar BOT_NAME=Exton-MD');return};
     
    const text = arg.join(" ")
     const Heroku = require("heroku-client");
   
     const heroku = new Heroku({
        token: s.HEROKU_APY_KEY,
      });

     let baseURI = "/apps/" + s.HEROKU_APP_NAME;
        await heroku.patch(baseURI + "/config-vars", {
          body: {
                  [text.split('=')[0]]: text.split('=')[1],
          },
        });
        await repondre('HEROKU VAR UPDATE NAHI HO SAKTI AP HEROKU PER JA KAR WAHA SE ISKO CHANGE KARE....')
    }
);

france(
    {
        nomCom : "allvar",
        categorie : "heroku"
    }, async (dest , zk , commandeOptions) =>{

       const {ms,repondre,superUser , arg} = commandeOptions ;
       
       if(!superUser){repondre('Yeh command sirf mere lie hai ap use nahi kar sakte');return}; 
      
            const Heroku = require("heroku-client");

			const heroku = new Heroku({
				token: s.HEROKU_APY_KEY,
			});
			let baseURI = "/apps/" + s.HEROKU_APP_NAME;

            let h = await heroku.get(baseURI+'/config-vars')
let str = '*🔰Exton-MD HEROKU VARS🔰*\n\n'
for (vr in h) {
str+= '👑 *'+vr+'* '+'= '+h[vr]+'\n'
}
 repondre(str)


}

);       


    france(
        {
            nomCom : "getvar",
            categorie : "heroku"
        }, async (dest , zk , commandeOptions) =>{
    
           const {ms,repondre,superUser , arg} = commandeOptions ;
           
           if(!superUser){repondre('Yeh command sirf mere lie hai ap use nahi kar sakte');return}; 
           if(!arg[0]) {repondre('Heroku var ka name or uski value likho'); return} ;
      
           try {
            const Heroku = require("heroku-client");
               
            const heroku = new Heroku({
              token: s.HEROKU_API_KEY,
            });
            let baseURI = "/apps/" + s.HEROKU_APP_NAME;
        let h = await heroku.get(baseURI+'/config-vars')
        for (vr in h) {
        if( arg.join(' ') ===vr ) return  repondre( vr+'= '+h[vr]) 	;
        } 
        
        } catch(e) {repondre('Error' + e)}
   
        });
