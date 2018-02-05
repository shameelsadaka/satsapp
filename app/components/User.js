import React from 'react';
import { 
	StyleSheet, 
	Text, 
	View, 
	Image, 
	ImageBackground,
	TextInput,
	TouchableOpacity,
	AsyncStorage,
	StatusBar
} from 'react-native';

export default class User extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			userFullname : 'DepreshSing',
		};
	}

	componentDidMount() {
		this._loadInitialState().done();
	}

	_loadInitialState = async () => {
	}

	render() {
		return (
			<View style={styles.container}>
				<StatusBar
					backgroundColor="blue"
					barStyle="light-content"
					hidden = {false}
				/>
				<ImageBackground source={require('../img/bg.jpg')} style={styles.backgroundImage} >
					<View style={styles.navBar}>
						<Image source={require('../img/logo.png')} style={styles.logo} />
					</View>
					<View style={styles.welcomeView}>
						<Text style={styles.welcomeHi}>Hi</Text>
						<Text style={styles.welcomeName}>{this.state.userFullname}</Text>
					</View>
				</ImageBackground> 
			</View>
		);
	 }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#121212',
	},
	backgroundImage: {
		width: '100%',
		paddingTop:15,
		paddingLeft:10,
		paddingRight:10,
		height: '100%',
		alignItems:'center',
	},
	navBar:{
		marginTop:20,
	},
	logo:{
		width:45,
		height:38,
	},
	welcomeView:{
		marginTop:10,
		flex:1,
		flexDirection:'row',
	},
	welcomeHi:{
		color:'#FFFFFF',
		fontSize:14,
	},
	welcomeName:{
		color:'#FFFFFF',
		fontSize:14,
		fontWeight:'bold',
	}
});
