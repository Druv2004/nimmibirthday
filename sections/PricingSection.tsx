'use client'
import SectionTitle from "@/components/SectionTitle";
import { motion } from "motion/react";

export default function PricingSection() {
    const journey = [
        {
            title: "Happiest Birthday, My Future Wife ❤️",
            text: `Happiest birthday, my future wife.  
I love you the most.  

I don’t know if you still really believe that I love you,  
but the reality is — I am one of those people who loves you the most in this world.  

Let’s recap our journey from the beginning till now.`
        },

        {
            title: "1️⃣ When I was ignored by you",
            text: `Mujhe yaad hai jab maine pehli baar aapse baat karne ki koshish ki thi,  
aapne mujhe ignore kar diya tha.  

Maine aapse pehle bhi kai baar bola hai —  
maine pehli baar jab aapse baat karni chahi,  
tab pehle hi word me ignore ho gaya tha.  

That day you are in yellow,  
aur mujhe tab hi laga tha ki aap  
poore universe ki sabse beautiful ladki ho.  

shayad uss din merko realise ho gya tha you are the one.  
I love you the most.`
        },

        {
            title: "2️⃣ When we met for the first time",
            text: `Mujhe yaad hai — 1 June.  
Us din mera interview tha.  

Interview ke baad Pradeep aur main lunch kar rahe the  
jab aap aur Shreya cabin se guzar rahe the.  
Pradeep ne aap dono ko roka aur khane ke liye bulaya.  

Us din humari pehli baar proper baat hui thi.  
Main gobhi leke aaya tha aur aapko wo pasand aayi thi.  

Uske baad aapne mere phone me game dekhi,  
aur aapne mera phone manga tha game khelne ke liye.  
Maine bola tha ki main kisi ko apna phone nahi deta,  
aur aapne kaha tha — theek hai, ab nahi bolungi.  

Phir maine mazaak me bola tha ki main mazak kar raha hoon,  
aur phir maine aapko phone de diya tha.  
Aap mere phone me Subway Surfer khel rahe the.  

Mujhe yaad hai aapne mere liye apni class skip ki thi.  
Phir maine chai peene ka bola aur hum teen —  
main, aap aur Pradeep — chai peene gaye.  

Aapne mere joote gande kar diye the,  
aur main mazaak-mazaak me aapko kude me daalne wala tha.  
Uske baad hum park gaye the.  
Hum bench par baith kar ek dusre se questions puch rahe the.  

Aapko yaad hai wo questions?  
apne merse pucha tha ki aapko kaunsa mausam pasand hai,  
merko kutte pasand hain ya nahi.  

Aur usse pehle maine aapko uthaya tha  
aur aapko kichad me phenkne wala tha.  
Aapko yaad hai jab aap nali ke andar se nikli thi dare ki wajha se?  

Phir hum wapas aaye,  
mandir ke paas pani pee rahe the  
aur aapne mere upar pani daal diya tha.  
then apne juice bhi pilaya tha.  

Uske baad hum wapas Ducat chale gaye the.  

Mujhe nahi pata aapne us din kya feel kiya,  
lekin main bahut zyada khush tha.  
Aaj bhi jab wo din yaad karta hoon,  
toh apne aap chehre par smile aa jaati hai.  

Mere liye wahi din tha  
jab humari journey sach me shuru hui thi.  
I love you the most, Nimmi.`
        },

        {
            title: "3️⃣ When I knew you liked me too",
            text: `Aapko wo Truth and Dare yaad hai?  
Jab aapse poocha gaya tha  
ki is institute me aapko kaun pasand hai.  

Aapne tab nahi bataya tha.  
Phir maine Shreya se poocha,  
aur tab mujhe pata chala  
ki aap bhi mujhe like karte ho.  

Mujhe pehle se hi andaza tha,  
lekin us din confirm ho gaya tha.  
Aur aap sharma gye the.  

Aapko shayad nahi pata,  
mujhe aapke saath baithna,  
aapse milna kitna pasand tha.  

Jab bhi koi aapke saath hota tha,  
mujhe bahut zyada jealous feel hota tha —  
itna ki bardasht nahi hota tha.  

Shayad isi wajah se maine ek din  
aapse ye baat bhi keh di thi.  
Haan, hum relationship me nahi the,  
shayad mujhe nahi kehna chahiye tha,  
lekin dil se nikal gaya tha.  

Chalo ab Ducat se aage badhte hain…`
        },

        {
            title: "4️⃣ When I hugged you for the first time",
            text: `Aapko yaad hai hum pehli baar movie dekhne gaye the —  
Laila Majnu.  

Aap Laila bani ya nahi bani, mujhe nahi pata,  
lekin main zaroor Majnu ban gaya tha.  

Poore time bas ye sochta raha  
ki aapko kiss karoon,  
lekin itni himmat nahi hui.  

Phir wo Chawri Bazaar metro station —  
ek prem katha.  
Maine kaha tha — aankhein band karo,  
main kiss karta hoon.  
Aur aap hansne lag gayi thi  
ki aisa kaun bolta hai.  

Usi din humne pehli baar hug kiya tha.  
Aur meri heartbeat metro se bhi tez chal rahi thi.  

Wahin se humara pehla relationship shuru hua tha.  
Wo moment meri life ka sabse precious moment hai.  
I love you the most, baby.`
        },

        {
            title: "5️⃣ When we kissed for the first time",
            text: `Aapko yaad hai — 25 September.  
Wahan Maddy apne pyaar me pagal ho raha tha,  
aur yahan hum apni pehli kiss kar rahe the.  

Mujhe yaad hai kaise aapne mere kurte ke button khol diye the.  
Us moment me mujhe sirf aap chahiye thi.  
I loved you the most.  

Usi din humara breakup bhi ho gaya tha.  
Aur aapne mujhe kaha tha  
ki jab hum kiss kar rahe the  
toh aapko kuch feel nahi hua. 
but merko bhot kuch feel hua tha

main aaj bhi aapse utna hi pyaar karta hoon.`
        },

        {
            title: "6️⃣ When we came into a relationship",
            text: `Aapko 18 December yaad hai na?  
Us din maine poora din aapko convince kiya  
ki aap meri girlfriend ban jao.  

Aur din ke end me aapne haan keh diya tha.  
Us din maine har cheez ke liye haan kar diya tha —  
present me rehna, future ki baatein,  
shaadi hogi toh hogi, warna koi baat nahi.  

Lekin ab toh shaadi hogi hi.  

Uske baad humari second kiss hui,  
aur humara second relationship shuru hua.  

Uske baad kitne breakups hue,  
kitni kisses hui,  
kitni ladai hui,  
kitni jealousy hui —  
sab kuch dekha humne. 
or ye sab chalta rahega hamesha but iske sath ek chiz or rahegi apke liye mera pyar 

Aur aaj humara  
1 year aur almost 1 month complete ho chuka hai.  

Mujhe pata hai abhi sab kuch theek nahi chal raha,  
lekin main aapko kabhi chhod nahi sakta.  
Main aapse pyaar karna kabhi nahi chhod sakta.  

Chahe kuch bhi ho jaaye,  
aap meri future wife ho.  

Mera pyaar aapse shuru hua hai   
aur aap par hi khatam hoga.  

Bahut jald aap hongi —  
Nimmi Druv Kushwaha 💍`
        }
    ];

    return (
        <div id="pricing" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle
                text1="Our Love Story"
                text2="From the first hello to forever"
                text3="A journey written from my heart, only for you, Nimmi."
            />

            <div className="flex flex-col items-center justify-center gap-8 mt-20 max-w-4xl mx-auto">
                {journey.map((item, index) => (
                    <motion.div
                        key={index}
                        className="w-full text-left border border-pink-900 p-6 rounded-xl bg-pink-950/30"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <h2 className="text-xl font-semibold text-pink-400 mb-2">
                            {item.title}
                        </h2>
                        <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                            {item.text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
