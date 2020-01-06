import React, { PureComponent } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput , Alert} from 'react-native';
import styles from './style';
export default class Login extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            checkEmail:'hruday@gmail.com',
            checkPassword:'hruday123'
        }
    }
    getDerivedStateFromProps() {
        
    }
    componentDidMount(){
        this.props.user()
        if(this.props.userstore.userDetails){
             this.setState({checkEmail:this.props.userstore.userDetails.username})
             this.setState({checkPassword:this.props.userstore.userDetails.password})
        }

    }
    isValid() {  
        const { email, password } = this.state;
        let valid = false;
        if (email.length > 0 && password.length > 0) {
          valid = true;
        }
        if (email.length === 0) {
            Alert.alert("Please Enter valid Email ID")
          this.setState({ error: 'You must enter an email address' });
        } else if (password.length === 0) {
            Alert.alert("Please Enter valid Password")
          this.setState({ error: 'You must enter a password' });
        }
    
        return valid;
      }
    
      onLogin() {
        const { email, password,checkEmail,checkPassword } = this.state;
        if (this.isValid()) {
          if(email === checkEmail && password === checkPassword){
            this.props.navigation.navigate('Home');
          }
          else{
            Alert.alert("Please Enter valid Email ID and Password")
          }
        }
      }
    render() {
        const or = this.state.checkEmail&&this.state.checkEmail;
        return (
            <ImageBackground style={styles.mainComponent}
                resizeMode='cover'
                source={require('../../images/white-marble.jpg')}
            >
                <View style={styles.firstView}>

                    <View style={styles.OhmView}>

                    </View>
                </View>
                <View style={styles.secondView}>
                    <View style={styles.usernameView}>
                        
                        <TextInput
                            style={styles.userTextInput}
                            onChangeText={(email) => this.setState({email})}
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            placeholder={"User Name"}
                        />
                    </View>
                    <View style={styles.usernameView}>
                        
                        <TextInput
                            style={styles.userTextInput}
                            onChangeText={(password) => this.setState({password})}
                            placeholder="Password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <View style={styles.lastView}>
                    <TouchableOpacity style={styles.SinupButton}
                        onPress={this.onLogin.bind(this)}
                    >
                        <Text style={styles.SinupText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

        )
    }
}