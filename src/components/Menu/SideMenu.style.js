import  {Dimensions} from "react-native";

export default {
    container: {
        paddingTop: 20,
        flex: 1
    },
    navItemStyle: {
        alignSelf: 'center',
        fontWeight:'bold',
        fontSize:18
    },
    navSectionStyle: {
        backgroundColor: 'white'
    },
    menuTitleContainer:{
        backgroundColor:'black',
        borderBottomWidth:2,
        borderBottomColor:'black',
    },
    sectionHeadingStyle: {
        alignSelf:'center',
        paddingVertical: 10,
        paddingHorizontal: 5,
        color:'white',
        fontWeight: 'bold',
        fontSize:22
    },
    footerContainer: {
        padding: 20,
        backgroundColor: 'black',
        alignItems:'center',
        borderColor:'white',
        borderWidth:2,
    },
    myFooter:{
        color:'white'
    },
    navBanner:{
        width: Dimensions.get('window').width - 120,
        height: Dimensions.get('window').height/6,
    },
    touch:{
        flexDirection: 'row',
        borderBottomWidth:2,
        borderBottomColor:'black',
    },
    icon:{
        alignSelf:'center',
        margin:10
    }
};