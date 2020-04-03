import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import textData from '../assets/datatext';

const screenWidth = Dimensions.get('window').width;

export default class FacultyNote extends Component {
  goToCategoryScreen = key => {
    this.props.navigation.navigate('CategoryScreen', {key});
  };

  renderData = () => {
    return Object.values(textData).map((data, index) => (
      <TouchableOpacity
        key={data.key}
        style={index % 2 == 0 ? styles.tbBox1 : styles.tbBox2}
        onPress={() => this.goToCategoryScreen(data.key)}>
        <Image source={data.image} style={styles.imgst} />
        <Text style={styles.cstxt}>{data.name}</Text>
      </TouchableOpacity>
    ));
  };

  render() {
    const {item} = this.props.navigation.state.params;

    return (
      <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
       
          <HeaderComponent
            title="Sổ tay khoa"
            backBtn={true}
            goBack={() => this.props.navigation.goBack()}
          />
          <View style={styles.viewcover}>
            <Image
              source={require('../assets/img/ImgF/CNKT.jpg')}
              style={styles.imgcover}
            />
            <Text
              style={{
                position: 'absolute',
                fontFamily: 'Roboto-Bold',
                fontSize: 22,
                color: '#fff',
              }}>
              {item.faculty_name}
            </Text>
          </View>

          <View style={styles.itemContainer}>{this.renderData()}</View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  tbBox: {
    width: 170,
    height: 120,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  tbBox1: {
    width: screenWidth / 2 - 15,
    height: 120,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
  },
  tbBox2: {
    width: screenWidth / 2 - 15,
    height: 120,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderLeftWidth: 1,
    borderBottomWidth: 1,
  },
  tbBox3: {
    width: 170,
    height: 120,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderLeftWidth: 1,
  },
  cstxt: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
  },
  imgst: {
    height: 35,
    width: 35,
  },
  imgcover: {
    width: '97%',
    height: 180,
    borderRadius: 5,
    resizeMode: 'cover',
    overlayColor: '#000',
    opacity: 0.4,
  },
  viewcover: {
    width: 400,
    height: 180,
    backgroundColor: '#000', //#1392fd
    overlayColor: '#fff',
    marginTop: 5,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: screenWidth,
    marginVertical: 8,
    marginHorizontal: 15,
  },
});
