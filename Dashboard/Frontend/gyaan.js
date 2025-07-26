//same pehle toh humne wahi npx waale se frontend 2 banaya and jo jo frontend me kiya tha
//pehle waale me wahi sab kiya

//ACTUAL PROJECT
1=jo humara creating dashboard component waala lecture h usme humne khali css mtlb
structure banaya h basically copy kara h githubjaha sir ne daala tha 
kyuki wo exactly jo humne pehle jaisa kiya tha waise hi kiya tha 

2=Setup dashboard menu me hum basically usko functional banayenge
mtlb ki uspe click kare toh koi page pe pahuch jaaye..humne index.js me jo path="/*" kiya hai 
uska mtlb ki jo bhi hum changes karenge that should happen within the component mtlb pure page ya 
pura application ko change nhi karna hai

3=funds me jo react router dom likha h usko pehle install karna padega using
npm install react-router-dom....Routes and Route are React components created by the react-router-dom library

4=(Menu.js)=humne import { useState } from "react"
import karaya UseState and link wo react router dom se taaki hum dashboard,order and 
jitne bhi h aur un sabko functional bana sake
  A= ab hum do varaiables banayenge useState ke ..useState(0)mtlb pehle index mtlb ki abhi wo dashboard
     ki baat kar rha h .. aur neeche waale ko useState(false) maana h ki wo drop doen band hi hoga
  B= humne click detect karne ke liye banaya h usme jo pehla h usse jaise jab hum dashboard pe dabayenge toh index 0 ho jaayega 
     order pe dabayenge to 1 ho jaayega
  C= dusra jo humne handleProfileClick likkha h uska mtlb h ki currently agar true h toh wo false ho jaayega
     and vic-e-versa(agar aap boolean ka use kar rhe h toh suggestion h ki ! operator use kariye)
  D= activeMenuClass waala jo humne likha h iska mtlb ki jo selected menu class hoga uspe jab hum hover karenge toh wo orange ho jaaye
     jaise USER ID(philhal ke liye)..usse hume pta chal jaayega ki kaunsa menu abhi selected h
  E=ab jo hume link likha h usme jo paragraph h iska mtlb h ki agar hum dashboard use kar rhe bas tabhi aap hume activeMenuClass dijiye
    warna baaki time normal menuClass dedijiye jisko value humne upar "menu" set ki thi

5=(Holdings.js)=humne import kiya h holdings ke data jo src mr data folder me h
  A=aage chalke jo data API se aayega tph iske liye we have to write wo map wala fn basically we have to read the data line by line 
    or usko ek ek karke display karte jaana hai
6=(positions.js) same as holdings.js
7=Material UI basically sirf icons nhi hai isme baaki saare aur bhi components h jo react ke liye 
special available milte hai jisko hum download karte h bhai == npm i @mui/icons-material @mui/material @emotion/styled @emotion/react

8=(WatchList.js)..isme humne Tooltip import karaya himport { BarChartOutlined } from "@mui/icons-material"
 jo material UI ka part h jo on hover aata hai
isme jo hum showWatchlist waala likha h ye isliye likha h kyuki humein 2 cheez karni hai pehla ki
kaunsa stck hum currently select kar rhe hai ya kis stock pe currently hum hover kar rhe hai aur us stock ke liye jo items h aur
jo menu h hum use open karde rhe hai
<BarChartOutlined/> ANALYTICS KE ICON KE LIYE


