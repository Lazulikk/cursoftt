import { StyleSheet } from "react-native";

const styles = StyleSheet.create( {
    formContent: {
        width: "100%", 
        height: "100%", 
        bottom: 0, 
        backgroundColor: "#fff", 
        alignItems:"center", 
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30, 
        marginTop:30,       
    },
    form: {
        width:"100%", 
        height: "auto", 
        marginTop: 30,
        padding: 10,
    },

    formLavel: { 
        color:"#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        margin:12, 
        backgroundColor: "#f6f6f6",
        paddingLeft: 10, 
        borderRadius: 50, 
        width: "90%",
        height: 40, 
    
    
      },
      Calculator: {
         borderRadius: 50, 
         alignItems: "center",
         justifyContent: "center",
         width:"90%",
         backgroundColor: "#FF0043",
         paddingTop: 14, 
         paddingBottom: 14, 
         marginLeft: 12, 
         margin: 30,
      },

      textCalculator: {
        fontSize:  20, 
        color: "#fff"

      },
      errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
      },
      sharedco: { 
        color: "#fff",
        fontWeight:"bold",
        paddingHorizontal: 30,
      },

      sharedButton: { 
        backgroundColor:"#1700000",
        borderRadius: 50, 
        paddingBottom: 5, 
        paddingTop: 5, 
      },
      sharedTex: { 
        color: "#fff",
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