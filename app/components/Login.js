import React from 'react';
import { 
	StyleSheet, 
	Text, 
	View, 
	Image, 
	ImageBackground,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	AsyncStorage
} from 'react-native';

export default class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: '',
			errorDisplay:'',
			errorDisplayType:'none',
		};
	}

	componentDidMount() {
		this._loadInitialState().done();
	}

	_loadInitialState = async () => {

		var value = await AsyncStorage.getItem('user');
		if(value !== null){
			this.props.navigation.navigate('Profile');
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<KeyboardAvoidingView behavior="padding">
					<ImageBackground source={require('../img/bg.jpg')} style={styles.backgroundImage} >
						<Image source={require('../img/logo.png')} style={styles.logo} />
						<Text style={styles.error}>{this.state.errorDisplay}</Text>
						<View style={styles.inputBox} horizontal={true}>
							<View style={{flex: 1,flexDirection: 'row'}} >
								<Image source={require('../img/ic_account.png')} style={styles.inputIcon} />
								<TextInput 
									style={styles.input}
									ref="username" 
									underlineColorAndroid="transparent"
									placeholderTextColor="#FFFFFF55"
									placeholder="Username"
									keyboardType="email-address"
									onChangeText = { (username) => this.setState({username})}
								/>
							</View>
						</View>
						<View style={styles.inputBox}>
							<View style={{flex: 1,flexDirection: 'row'}} >
								<Image source={require('../img/ic_lock.png')} style={styles.inputIcon} />
								<TextInput 
									style={styles.input}
									underlineColorAndroid="transparent"
									placeholder="Password"
									placeholderTextColor="#FFFFFF55"
									secureTextEntry={true}
									onChangeText = { (password) => this.setState({password})}
								/>
							</View>
						</View>

						<TouchableOpacity
							style={styles.loginButton}
							onPress = {this.login}>
							<Text style={styles.loginButtonText}>LOGIN</Text>
						</TouchableOpacity>
					</ImageBackground> 
				</KeyboardAvoidingView>
			</View>
		);
	 }

	 login = () => {
	 	if(this.state.username == "admin" && this.state.password == "password")
	 	{
		 	alert("Working");
	 	}
	 	else{
	 		this.setState({
                errorDisplay: "Invalid username or password"                
            });
	 	}
	 }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#121212',
	},
	backgroundImage: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems:'center',
	},
	logo:{
		width:100,
		height:84,
	},
	inputBox:{
		width:'80%',
		height:50,
		marginTop:10,
		borderStyle: 'solid',
		borderBottomWidth: 2,
		borderBottomColor: '#FFFFFF66',
	},
	inputIcon:{
		width:20,
		height:20,
		margin:15
	},
	input:{
		width:'100%',
		height:40,
		marginTop:5,
		borderBottomWidth:0,
		color:'#FFFFFF',
	},
	error:{
		color:"red",
		marginTop:15,
		marginBottom:5,
		display:'flex'
	},
	loginButton:{
		width:'80%',
		justifyContent: 'center',
		alignItems:'center',
		backgroundColor:'#CC1A1A',
		marginTop:30,
		borderRadius:25
	},
	loginButtonText:{
		color:'#FFFFFF',
		fontSize:18,
		paddingTop:10,
		paddingBottom:10,
	}
});
