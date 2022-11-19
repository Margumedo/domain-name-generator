
    //write your code here
    let pronoun = ['the','our'];
    let adj = ['great', 'big' ];
    let noun = ['jogger','racoon'];

    function domains(){
        for(i=0; i<pronoun.length; i++){
            for(j=0; j<adj.length; j++){
                for(k=0; k<noun.length; k++){
                
                    let domain = `${pronoun[i]}${adj[j]}${noun[k]}.com`;
                    
                    console.log(domain);
                }    
            }
        }
    }
    
    domains();