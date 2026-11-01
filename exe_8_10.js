//8-10
//8

function chainedGreetings(){
    const p1=new Promise((resolve)=>{
        setTimeout(() => {
            resolve('Hi')
        }, 1000);
    })
    const p2=new Promise((resolve)=>{
        setTimeout(() => {
            resolve("How are you?")
        }, 2000);
    })
    const p3=new Promise((resolve)=>{
        setTimeout(() => {
         resolve('Goodbye!')   
        }, 3000);
    })
    return p1
        .then((resolve) => {
            console.log(resolve);
            return p2;
        })
        .then((resolve) => {
            console.log(resolve);
            return p3;
        })
        .then((resolve) => {
            console.log(resolve);
        });
    
}
chainedGreetings();

//9//extra
//10//extra

