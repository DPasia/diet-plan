(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37c6bded"],{"0255":function(e,t,n){"use strict";n.r(t);var c=n("7a23");const a=Object(c["f"])("🧘‍♀️ Weight Loss"),l=Object(c["f"])("🧘‍♀️ Weight Loss");function r(e,t,n,r,i,o){const b=Object(c["w"])("ion-title"),j=Object(c["w"])("ion-toolbar"),s=Object(c["w"])("ion-header"),u=Object(c["w"])("diet-plan"),O=Object(c["w"])("ion-content"),d=Object(c["w"])("ion-page");return Object(c["p"])(),Object(c["e"])(d,null,{default:Object(c["C"])(()=>[Object(c["g"])(s,null,{default:Object(c["C"])(()=>[Object(c["g"])(j,null,{default:Object(c["C"])(()=>[Object(c["g"])(b,null,{default:Object(c["C"])(()=>[a]),_:1})]),_:1})]),_:1}),Object(c["g"])(O,{fullscreen:!0},{default:Object(c["C"])(()=>[Object(c["g"])(s,{collapse:"condense"},{default:Object(c["C"])(()=>[Object(c["g"])(j,null,{default:Object(c["C"])(()=>[Object(c["g"])(b,{size:"large"},{default:Object(c["C"])(()=>[l]),_:1})]),_:1})]),_:1}),Object(c["g"])(u,{"achievement-type":e.loss},null,8,["achievement-type"])]),_:1})]),_:1})}var i=n("d867"),o=n("11db"),b={name:"Tab2",components:{IonHeader:i["e"],IonToolbar:i["s"],IonTitle:i["r"],IonContent:i["d"],IonPage:i["k"],DietPlan:o["a"]}};b.render=r;t["default"]=b},"11db":function(e,t,n){"use strict";var c=n("7a23");function a(e,t,n,a,l,r){const i=Object(c["w"])("plan");return Object(c["p"])(),Object(c["e"])(i,{dietPlan:r.thePlan,type:n.achievementType},null,8,["dietPlan","type"])}function l(e,t,n,a,l,r){const i=Object(c["w"])("plan-item");return Object(c["p"])(),Object(c["e"])("div",null,[(Object(c["p"])(!0),Object(c["e"])(c["a"],null,Object(c["v"])(n.dietPlan,(e,t)=>(Object(c["p"])(),Object(c["e"])(i,{key:t,header:t,items:e,type:n.type},null,8,["header","items","type"]))),128))])}function r(e,t,n,a,l,r){const i=Object(c["w"])("ion-label"),o=Object(c["w"])("ion-button"),b=Object(c["w"])("ion-list-header"),j=Object(c["w"])("ion-checkbox"),s=Object(c["w"])("ion-item"),u=Object(c["w"])("ion-list");return Object(c["p"])(),Object(c["e"])(u,null,{default:Object(c["C"])(()=>[Object(c["g"])(b,{color:r.color},{default:Object(c["C"])(()=>[Object(c["g"])(i,null,{default:Object(c["C"])(()=>[Object(c["g"])("h1",null,Object(c["y"])(n.header),1)]),_:1}),Object(c["g"])(o,{onClick:t[1]||(t[1]=e=>l.toggle=!l.toggle),color:"warning"},{default:Object(c["C"])(()=>[Object(c["f"])(Object(c["y"])(l.toggle?"Hide":"Show")+" plans",1)]),_:1})]),_:1},8,["color"]),Object(c["D"])(Object(c["g"])("div",null,[(Object(c["p"])(!0),Object(c["e"])(c["a"],null,Object(c["v"])(n.items,(e,t)=>(Object(c["p"])(),Object(c["e"])(s,{key:t},{default:Object(c["C"])(()=>[Object(c["g"])(j,{slot:"start"}),Object(c["g"])(i,{"text-wrap":""},{default:Object(c["C"])(()=>[Object(c["g"])("p",null,Object(c["y"])(e),1)]),_:2},1024)]),_:2},1024))),128))],512),[[c["A"],l.toggle]])]),_:1})}var i=n("d867"),o={name:"PlanItem",props:{header:{type:String,required:!0},items:{type:Array,required:!0},type:{type:String,required:!0}},data(){return{toggle:!1}},computed:{color(){return"gain"===this.type?"primary":"danger"}},components:{IonItem:i["g"],IonLabel:i["h"],IonList:i["i"],IonListHeader:i["j"],IonCheckbox:i["c"]}};o.render=r;var b=o,j={name:"Plan",props:{dietPlan:{type:Object,required:!0},type:{type:String,required:!0}},components:{PlanItem:b}};j.render=l;var s=j,u={name:"DietPlan",props:{achievementType:{type:String,required:!0}},components:{Plan:s},computed:{timeInterval(){return{wakingUp:"Upon waking app",breakfast:"Breakfast",lunch:"Lunch",dinner:"Dinner",bedtime:"Bed time"}},thePlan(){return"gain"===this.achievementType?this.gainPlans:this.lossPlans},lossPlans(){const e=this.timeInterval;return{[e.wakingUp]:["🥛 1-2 glass luke warm water"],[e.breakfast]:["🍵 1 bowl of oats"],[e.lunch]:["🍌 fruit"],[e.dinner]:["🥗 one bowl of salad"]}},gainPlans(){const e=this.timeInterval;return{[e.breakfast]:["🥚 2 boiled eggs","🍞 2 slice of multi-grain bread with butter","🥣 bowl of oatmeal","🍊 orange juice"],[e.lunch]:["🍖 meat","🍗 chicken or pork","🍚 cups of rice"],[e.dinner]:["🍣 fish","🍛 stir fried veggies with baked potatoes","🍘 brown rice"],[e.bedtime]:["🥛 milk"]}}}};u.render=a;t["a"]=u}}]);
//# sourceMappingURL=chunk-37c6bded.75a23e1b.js.map