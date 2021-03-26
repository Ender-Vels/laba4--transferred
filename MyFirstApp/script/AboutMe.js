let vm={
    data()
    {
        return{
            firstname:'Ruslan',
            lastname:'Malinin',
            birtday: new Date(new Date().getFullYear(),8,3),
            ThisDay: new Date(),
            ThisTime:new Date().getHours(),
        }
    },
    computed:{
      printMessage(){
          let OneDayTime=24*60*60*1000;
          if(this.birtday.getMonth()===this.ThisDay.getMonth()&&this.birtday.getDate()===this.ThisDay.getDate())
          {
              return `Happy Birthday ${this.firstname} ${this.lastname}`
          }
          else{
              return `“Sorry, ${this.firstname}  ${this.lastname} you need to wait ${Math.floor((this.birtday.getTime()-this.ThisDay.getTime())/OneDayTime)} days`
          }
      },
        greeting(){
            if(this.ThisTime<12&& this.ThisTime>3){
                return`Good Morning`
            }
            else  if(this.ThisTime>12&&this.ThisTime<19)
            {
                return `Good Evening`
            }
            else{
                return `Good night`
            }

        },
        getDayInfo(){
          let Month=["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"
              ];
          return `https://en.wikipedia.org/wiki/${Month[this.birtday.getMonth()-1]}_${this.birtday.getDate()}`
        }

    }
};

Vue.createApp(vm).mount('#app');
