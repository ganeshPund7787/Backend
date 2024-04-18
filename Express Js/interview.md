Q. What is internet ????????
=>  our mobile gie data to tower in pakage form and the tower recive recive 
       data package form the tower transfer data 
       Optical fibre with the form of electrical signal 


*** The wifi direct intereact with mac adress of mobile when we connect wifi 
mac adress inoke when you are in local area 


* Server, client http & https
=> we Send request to the server and server send the
 responce is call # cilent server architecture.#


http & https => 
1) http: Hyper Text trasfer protocol
2) https: Hyper Text trasfer protocol Secure

1) => Data come and Go is called http
      http is not secure 
      we can easily watch package for other system (Using Hacking )  
2) => https data is encrepted we cant read 


Q. What is mean by ports ??????????
=> Connect area 
       1> Close ports
       2> Open Ports 

* ISP => Internet service Provider Exa:- Gio, Airtel
::: Electical Signal And Optical Fibre



* Ip Adress And Mac Adress
Q1.  What is Express? ??????????
=> Express is a framework or library is use for create server/api/route;


++++ Middleware ak aisa function hota hai jo har route ke pahale chalata hai
 

Q. what is mean by next????????????
=> the data is going to next rout or request the need to push from the middleware so we need to push datas from the 
middleware to next route ther we use next 


###############################################################################################



+++++++++ Dyanamic Rout +++++++++++++

* if the one part is repeted in many time that is called Dyanamic Rout 
* That Part we arrange that data

Exa:- /profile:username;  username  =>  Params
to access values = req.params.username

Q. What is template engines? ??????????
=> He tranfer markup to html
    Exa: pug, handlebars, ejs, jade
    
  *  ejs is very similar to html 

+++++ EJS (Embedded JavaScript) +++
 * ejs is a html with superPower 
 * we can change dynamically values in using ejs 
 * we call html in backend ejs

setup: 1) npm i ejs
       2) app.set("view engine", "ejs");
       3) make a folder with views name
       4) make ejs fileinside
       5) insted of send use render

+++++ Static fles setup : images, stylsheet and fronted js set

setup: 1) create a folder called public
       2) create three folders inside it , images , stylesheet and Js
       3) cofigure the express Static in index.js file /
          app.use(express.Static(./publc)); // Automatically add public folder brefore path start
       4) Understand the path 



**********    end => send => sendFile => render    ********* 


################################################################################################


#Express generater
Steps to use Express Generator
       1) npm  i express-generator :- for only local scope Globel scope use -g in last
        - to create app anywhere: 
        -open cmd move to desktop
        create new app:
        >>>>>>>>> express appname --view=ejs

        -now use three cmds
        I) cd appname
        II) npm i
        III) open it on vs code

app.get => router.get
        
############################################################################################


Advanced Backend:- <br>
       <h5>Flash Message:  </h5>
<br> => Flash message means if you want use this route data into the another route there we use flash meassage.

Note: Without flash message is not possible

<br>

#################################################################################

<h1 style="color: red"> Session & Cookies </h1><br>
install cmd:-  <h5>npm i express-session </h5><br> 
<pre><h3> Client </h3>               <h3> Server </h3> </pre><br>
<pre> cookie                                      session       </pre><br>

* if we use uor laptop for client or server both there we call localhost <br>
<br>
** We using stored data in laptop is called <i> cookies </i> and in other hand data on server (company) there we call <i>session</i> <br><br>


   resave: false, => If the data is save dont save again data it's improve performance of server <br>
 saveUninitialized: false => Do not save row data<br>
 secret: "abcdefghijklmnopqrstuvwxyz" =>  secreate string that basis var data in encript<br>

req.session.SessionName = "hello"; =>  Only set His value store in the server<br>
<br>
create session: req.session.sessionName = value;<br>
check session : req.send(req.session)<br>
destroy session: req.session.destroy((err) => { if(err) throw err}) <br>      
<br>

<h3> Cookie </h3><br>
install cookies: - <i> npm i cookie-parser </i>><br>
import cookie from "cookie-parser"<br>
app.use(cookie());<br>
res.cookie("CookieName", value);<br>
res.clearCookie.CookieName // delete cookie <br>
<br>










