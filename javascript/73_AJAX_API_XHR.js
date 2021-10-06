/* ------------------------------------------------------------------------------------------------------------------ 
AJAX : # AJAX stands for Asynchronous JavaScript And XML
       $ AJAX is Nothing but Making request on the page while its already or after its loaded
       # AJAX is not a programming language
       # AJAX is a technique for accessing web servers from a web page.
       # AJAX is a technique for creating fast and dynamic web pages.
       # AJAX allows web pages to be updated asynchronously by exchanging small amounts of data with the server behind 
         the scenes

AJAJ : # Asynchronous JavaScript And JSON
       # JSON --> JavaScript Object Notation 
       # XML --> used previously but now we use JSON for transfering the data
       # this XML or JSON format data is sended by server with the help of api
       # we can send data and receive data in form of JSON

Postman : # it is a tool which help us for testing APIs
          # status code :   Informational responses (100–199)
                            Successful responses (200–299)
                            Redirects (300–399)
                            Client errors (400–499)
                            Server errors (500–599)
Headers : key-value pairs & metadata for responce 

READY STATE VALUES : 
0 : request not initialized 
1 : server connection established
2 : request received
3 : processing request 
4 : request finished and responce is ready


API : # APPLICATION PROGRAMMING INTERFACE
      # AN API IS A SERVICE PROVIDED BY AN APPLICATION TO OTHER EXTERNAL APPLICATION TO EXCHANGE DATAs


Query String : # Query string is the string that we pass to the any url that usually impact what we will get back
               # For more than one parameters we can use ampersand(&)

Headers : # headers are the key value pairs 
          # if we don't want to type query string by our own then we can use key params in postman
          # if we want set our own headers then go to headers in postman
          # we set header as ACCEPT with value APPLICATION/JSON then we will get the JSON file instead of html

-------------------------------------------------------------------------------------------------------------------*/
/* First method to make request :

XHR : # XMLHttpRequest
      # xhr is an API in form of object
      $ The original way of sending requests via js
      $ Does not support Promises, so...lots of callbacks
      # WTF is going on with the weird capitalization ?
      # Clunky Syntax 
      
-------------------------------------------------------------------------------------------------------------------*/

//Making XHR object  :
const xhr = new XMLHttpRequest();

xhr.onload = function () {
       if(this.status === 200){
              console.log('ALL DONE WITH REQUEST!!!');
              // console.dir(xhr);  // or console.log(this) both are same
              const data = JSON.parse(this.responseText);
              console.log(data.ticker.price);
       }
}
xhr.onerror = function () {
       console.log('REQUEST ERROR!');
       console.log(this);
}

xhr.open('GET','https://api.cryptonator.com/api/full/btc-usd');
// first param --> type of request : GET(that means u just want read)
// second param  --> which thing u are reading here JSON file from api
// 
xhr.send();
       





















