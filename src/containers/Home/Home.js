import React,{Component} from 'react';
import { SafeAreaView, View, Text, } from 'react-native';
import styles from './styles';
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
    this.props.dashboard()

  }
  lapsList() {
    const data = this.props.DashBoardDetails.DashBoardDetails && this.props.DashBoardDetails.DashBoardDetails
    if (data) {
      return data.map((data) => (
        <View style={styles.HomeTop}>
          <Text style={styles.HomeBottom}>
          {data.id}
                </Text>
            <Text style={styles.HomeBottom}>
            {data.name}
                </Text>
            <Text style={styles.HomeBottom}>
            {data.age}
                </Text>
            <Text style={styles.HomeBottom}>
              {data.gender}
                </Text>
                <Text style={styles.HomeBottom}>
            {data.email}
                </Text>
            <Text style={styles.HomeBottom}>
              {data.phoneNo}
                </Text>
        </View>
      ))
    }
    return null;
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.HomeTop}>
          <Text style={styles.HomeBottom}>
            Id
              </Text>
          <Text style={styles.HomeBottom}>
            Name
              </Text>
          <Text style={styles.HomeBottom}>
            Age
              </Text>
          <Text style={styles.HomeBottom}>
            Gender
              </Text>
              <Text style={styles.HomeBottom}>
            Email
              </Text>
              <Text style={styles.HomeBottom}>
            Phone
              </Text>
        </View>

        {this.lapsList()}
      </SafeAreaView>
    );
  }
}