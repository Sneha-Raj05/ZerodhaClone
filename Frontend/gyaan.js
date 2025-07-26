//React ko start karne ke liye aur frontend ka folder banane ke liye :-
//1-npx create-react-app frontend ...2-npm start frontend folder me jaake
//uske baad git init se git repository ko initialise kar denge
//git add .=jo bhi files me humne chane kiya h wo add hojayengi
//when we are deciding components mtlb ki is part ko hum header component me daalenge is part ko support me
//toh we have to be very careful ki jo ek specific funtionality h ya
//related data h   usko grp karna hai
//Top part ko Hero part kehte hai
//humne pehle hi sab folder me alag alag components bana diye taaki hume
//clarity mil jaaye ki actual me hume karna kya hai ..kitne components h uske paas
//kitna output aane waala hai...AGAR DOUBT AAYE KI COMPONENTS KAISE BANA HAI TOH AAP STRUCTURING LANDING PAGE KA
//VIDEO DEKH LENA
//git me wo component daalne ke liye hum commit karenge bu the code
//git commit-m "component structure setup"
//jab hum home component pe work karenge uske liye we'll write
//git checkout -b home-component


/**WE ARE STARTING THE ACTUAL PROJECT NOW**/
1=Jo empty components the shuruat me "home" folder ke uska basic structure banayenge pehle
uske baad saare components ko hum homepage waale folder me import karenge 
taaki hume pura structure dikh jaaye

2=saara component (Home waale se start kiya hai toh home ke component me )
bootstrap feature jo sab ke liye applicable hoga uska link copy karke public->index.html me 
add kar denge and font awesome waala link bhi add kar denge(icons ke liye)

3=Ye humne jo bhi Hero.js me structure likha h jaise img phir h1 phir p phir button ye sab structure ke according likha h 
jo hume referance site diya tha..kyukki humne bootstrap ka link lagaya h isliye alag se 
css file laga ke styling nhi kari humne ussi div me humne mt-3 aur ye sab likha

4=jaise jab hume bole ki responsive banao ki mobile screen pe wo chhota ho jaaye
aur laptop screen pe uske screen ke barabar toh tumhe className likh ke col-lg-6 col-sm-12 mtlb large pe 6 and small pe 12

5=ab hum aagye award section me usme jaise reference image me dekhenge toh 2 parts me divided h ek left side me 
award waala image aur right side me kuch likha h toh aisa karrne ke liye hum ek toh 
pura div className karke row banayenge uske andar phir div className karke col-6 banayenge kyuki 12 total hota h toh div col waala hum 2 banayenge ki 2 part me batt jaaye
aur row ke andar isliye likha h taaki us pure row ke andar bane wo 2 col aa sake

6=text-muted class se text thoda halka grayish type ho jaayega
and kyuki humare paas bootstrap toh instead of writing navbar waala  code hum seedha copy karenge bootstrap se
aur phir apne project ke hisaab se modify karenge

7=jab bhi hume kisi aur part ke application pe switch karna hota hai toh hum react router use karte h
jaise navbar me jo signup h toh signup pe dabaye toh dusra part khul jaaye uske liye router use karte hai
aur usko install karne ke liye we use npm i react-router-dom

8=Route me jo path me / ye likha h wo home ka h aur jo element h uske andar hume likhna wo kaunsa component h jo is particular route pe ya path pe open hona chahiye

9=navbar aur footer hume saare pages me chahiye isliye instead of using individually har page me jaise HomePage ya AboutPage hum use sidha 
index.js me likhenge...ab kyuki hum jab product pricing upar navbar me daba rhe the toh kuch ho nhi rha tha isliye humne Navbar.js me link ko 
import karyaya aur har a tag ko navbar me link se replace kar diya aur href ko hatake to="/" kardenge acc to our requirements

10=* path me ye hua mtlb ki jo humne path upar mention kiye h index.js me usko chhodke koi aur path likha toh not found waal aerror aa jaayega

11=agar jaise product waale section humne dekha ki humne props banake likha h left section aur right section ye hum tab karte hai jab
ek hi component me aisa ho ek side photo left me ho phir agle me photo right me ho jaaye aur description left me 
phir image left me aisa bahut baar h toh ek ek ko alag alag likhne me bahut time lagg jaata h isliye hum props likhte hai
aur uske baad hum product page mtlb jaha me sab component ka tag likha h waha jaake us particular section me wo props add kar denge
aur phir usko hum {} isme likhte h jisse code simpler aur time kam lagta hai

12=ab ussi me dusra leftsection banana hoga toh hum productPage me jaake wo jo pehle waale component ke liye likha tha ussi tarah dusre component ke liye likh denge

