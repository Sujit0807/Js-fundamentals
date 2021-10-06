/* html file name --> 8_formEvents.html
---------------------------------------------------------------------------------------------------------*/

const lis = document.querySelectorAll('li');

for(let li of lis){
    li.addEventListener('click',() => {
        li.remove(); // will remove that li which is in html document and not for javaScript added lis why ? 
        // because they (html element li ) were there when this event listener runs and no event listener for new ones
        // SOLUTION for this problem is --> use Event Delegation
    });
}


// in code 62 no javaScript file tweetsContainer was there
tweetContainer.addEventListener('click',(e) => {
    // console.log(e); // to check 'target' propety --> for which element it is targeted
    // console.log('CLICK ON UL!!');
    e.target.nodeName === 'LI' && e.target.remove(); // new one li will also removed ! and does'nt remove any new-old para
});























