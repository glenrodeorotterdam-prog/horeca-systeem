import React,{useState} from 'react';
import {SafeAreaView,View,Text,StyleSheet,Pressable,ScrollView,TextInput} from 'react-native';

const modules=[
 ['📦','Voorraad','Keuken, wijn en drank'],
 ['🍳','Keuken','Producten, gewichten & porties'],
 ['🍷','Wijn','Flessen, kaarten & herkomst'],
 ['🥃','Dranken','Barvoorraad & verbruik'],
 ['🚚','Leveranciers','Inkoopprijzen & leveranciers'],
 ['📊','Rapporten','Waarde, verbruik & verschillen']
];

export default function App(){
 const [tab,setTab]=useState('home');
 const [search,setSearch]=useState('');
 const [items,setItems]=useState([
  {name:'Ossenhaas',cat:'Keuken',qty:'12,5 kg',value:'€ 287,50'},
  {name:'Chardonnay',cat:'Wijn',qty:'24 flessen',value:'€ 312,00'},
  {name:'Gin',cat:'Drank',qty:'6 flessen',value:'€ 168,00'}
 ]);
 const add=()=>setItems([...items,{name:'Nieuw product',cat:'Keuken',qty:'0',value:'€ 0,00'}]);

 return <SafeAreaView style={s.safe}>
  <View style={s.header}><View><Text style={s.kicker}>HORECA SYSTEEM</Text><Text style={s.title}>Goedemorgen 👋</Text></View><View style={s.badge}><Text>●</Text></View></View>
  {tab==='home' ? <ScrollView contentContainerStyle={s.content}>
    <View style={s.card}><Text style={s.cardLabel}>TOTALE VOORRAADWAARDE</Text><Text style={s.big}>€ 12.486,50</Text><Text style={s.green}>↑ 4,2% t.o.v. vorige telling</Text></View>
    <Text style={s.section}>Modules</Text>
    <View style={s.grid}>{modules.map(([ic,n,d])=><Pressable key={n} style={s.module} onPress={()=>setTab(n)}><Text style={s.icon}>{ic}</Text><Text style={s.modTitle}>{n}</Text><Text style={s.modDesc}>{d}</Text></Pressable>)}</View>
    <Text style={s.section}>Snelle acties</Text>
    <Pressable style={s.action} onPress={()=>setTab('Voorraad')}><Text style={s.actionText}>＋ Nieuwe voorraad telling</Text><Text>›</Text></Pressable>
    <Pressable style={s.action} onPress={()=>setTab('Leveranciers')}><Text style={s.actionText}>＋ Product / leverancier toevoegen</Text><Text>›</Text></Pressable>
  </ScrollView> :
  <ScrollView contentContainerStyle={s.content}>
   <Pressable onPress={()=>setTab('home')}><Text style={s.back}>‹ Dashboard</Text></Pressable>
   <Text style={s.pageTitle}>{tab}</Text>
   <TextInput value={search} onChangeText={setSearch} placeholder="Zoeken..." style={s.input}/>
   <View style={s.card}><Text style={s.cardLabel}>VOORRAADWAARDE</Text><Text style={s.big}>€ 12.486,50</Text></View>
   {items.filter(x=>!search||x.name.toLowerCase().includes(search.toLowerCase())).map((x,i)=><View style={s.row} key={i}><View><Text style={s.rowTitle}>{x.name}</Text><Text style={s.rowSub}>{x.cat} · {x.qty}</Text></View><Text style={s.rowValue}>{x.value}</Text></View>)}
   <Pressable style={s.primary} onPress={add}><Text style={s.primaryText}>＋ Product toevoegen</Text></Pressable>
   <Text style={s.note}>Dit is de eerste MVP. Database, gebruikers, slimme tellingen en AI-camera worden in de volgende bouwstap aangesloten.</Text>
  </ScrollView>}
  <View style={s.nav}>{[['home','⌂','Dashboard'],['Voorraad','▣','Voorraad'],['Rapporten','◔','Rapporten']].map(([k,ic,n])=><Pressable key={k} onPress={()=>setTab(k)} style={s.navItem}><Text style={tab===k?s.navActive:s.navIcon}>{ic}</Text><Text style={tab===k?s.navLabelActive:s.navLabel}>{n}</Text></Pressable>)}</View>
 </SafeAreaView>
}
const s=StyleSheet.create({
 safe:{flex:1,backgroundColor:'#F7F8F6'},header:{padding:20,paddingTop:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'},kicker:{fontSize:11,fontWeight:'800',letterSpacing:2,color:'#71806F'},title:{fontSize:28,fontWeight:'800',color:'#172019',marginTop:4},badge:{width:42,height:42,borderRadius:21,backgroundColor:'#E5EEE3',alignItems:'center',justifyContent:'center'},content:{padding:20,paddingBottom:110},card:{backgroundColor:'#1E3023',borderRadius:22,padding:22,marginBottom:22},cardLabel:{fontSize:11,color:'#B7C5B7',fontWeight:'800',letterSpacing:1},big:{fontSize:34,color:'white',fontWeight:'800',marginVertical:7},green:{color:'#B9E2B5',fontSize:13},section:{fontSize:19,fontWeight:'800',color:'#172019',marginBottom:12,marginTop:4},grid:{flexDirection:'row',flexWrap:'wrap',gap:12},module:{width:'47%',backgroundColor:'white',borderRadius:18,padding:16,minHeight:125,shadowOpacity:.04,shadowRadius:5},icon:{fontSize:26,marginBottom:12},modTitle:{fontSize:16,fontWeight:'800',color:'#172019'},modDesc:{fontSize:11,color:'#788078',marginTop:5,lineHeight:15},action:{backgroundColor:'white',padding:18,borderRadius:15,marginBottom:10,flexDirection:'row',justifyContent:'space-between'},actionText:{fontWeight:'700',color:'#263329'},back:{color:'#657265',fontWeight:'700',marginBottom:10},pageTitle:{fontSize:30,fontWeight:'800',marginBottom:16,color:'#172019'},input:{backgroundColor:'white',borderRadius:14,padding:14,marginBottom:14},row:{backgroundColor:'white',borderRadius:15,padding:16,marginBottom:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'},rowTitle:{fontSize:16,fontWeight:'800'},rowSub:{fontSize:12,color:'#788078',marginTop:4},rowValue:{fontWeight:'800'},primary:{backgroundColor:'#243B2A',padding:17,borderRadius:15,alignItems:'center',marginTop:10},primaryText:{color:'white',fontWeight:'800'},note:{fontSize:12,color:'#7B837C',lineHeight:18,marginTop:18},nav:{position:'absolute',bottom:0,left:0,right:0,height:82,backgroundColor:'white',borderTopWidth:1,borderTopColor:'#E5E8E4',flexDirection:'row',justifyContent:'space-around',paddingTop:12},navItem:{alignItems:'center',width:'33%'},navIcon:{fontSize:20,color:'#8B938B'},navActive:{fontSize:20,color:'#24422A'},navLabel:{fontSize:11,color:'#8B938B',marginTop:3},navLabelActive:{fontSize:11,color:'#24422A',fontWeight:'800',marginTop:3}
})