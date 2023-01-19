function Person(fullName, money,sleepMode,healthRate)
     {
        return{
            fullName,
             money,
            sleepMode,
            healthRate,
            sleep (hours) 
                {  
                    if(hours == 7)
                        {
                            this.sleepMode="happy"
                            console.log(this.sleepMode) ;
                        }
           
                    else if(hours >7)
                        {
                            this.sleepMode="Lazy"
                            console.log(this.sleepMode); 
                        }   
            
                      else if(hours<7)
                        {
                            this.sleepMode="Tired"
                            console.log(this.sleepMode); 
                        }
            
                },

            eat (meals) 
                { 
                    if(meals==1)
                        {
                            this.healthRate=50;
                            console.log(this.healthRate);
                        }
                    else if(meals==2)
                        {
                            this.healthRate=75;
                            console.log(this.healthRate);
                        }
                    else if(meals==3)
                        {
                            this.healthRate=100;
                            console.log(this.healthRate);
                        }
                },

            buy(items)
                {
                    this.money-=items*10;
                    console.log(this.money);
                }
        }
       
     }
         


     const omar = Person("omar Mohamed",1000,"tired",70);
     omar.sleep(7);
     omar.eat(2);
     omar.buy(1);
     