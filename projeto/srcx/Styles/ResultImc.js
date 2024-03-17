import { StyleSheet } from "react-native";

const styles = StyleSheet.create( {
resultImc: {
flex:1, 
marginTop: 15,
paddingTop: 60, 
borderRadius: 50, 
width: "100%",
alignItems:"center",
}, 

numberImc: {
    fontSize: 48, 
color: "ff0043",
fontWeight: "bold", 

},

information: { 
    fontSize: 18, 
    color:"#ff0043",
    fontWeight: "bold", 
},

  sharedButton: { 
   width: "100%",
   alignItems:"center",
   marginBottom: 10,
  },
  
  sharedTex: { 
    color: "#000000",
    fontWeight:"bold",
    paddingHorizontal: 30,
  },


 sharedContent :{ 
    backgroundColor:"#1877F2",
    borderRadius: 50,
    paddingBottom: 5,
    paddingBottom: 5,
  }, 
});

export default styles
