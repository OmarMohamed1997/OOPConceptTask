

const Person = 
{
   init (fullName, money,sleepMode,healthRate)
       {
           this.fullName = fullName;
           this. money =  money;
           this.sleepMode=sleepMode;
           this.healthRate=healthRate;
           return this;
       },
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
    



const omar =Object.create(Person).init("omar Mohamed",1000,"tired",70);
omar.sleep(12);
omar.eat(1);
omar.buy(1);
