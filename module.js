  exports.getDate= function(){            //remeber its exports
               let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
               let  today  = new Date();
                                                                                          //console.log(today.toLocaleDateString("en-US")); // 9/17/2016
                                                                                      //let date =today.toLocaleDateString("en-US", options); // Saturday, September 17, 2016
               return today.toLocaleDateString("hi-IN", options);
                
            }

  exports.getDay= function(){                            //remeber its exports
             let options = { weekday: 'long'};

             let  today  = new Date();
                                                                                           //console.log(today.toLocaleDateString("en-US")); // 9/17/2016
                                                                                       //let date =today.toLocaleDateString("en-US", options); // Saturday, September 17, 2016
            return today.toLocaleDateString("hi-IN", options);
                 
            }