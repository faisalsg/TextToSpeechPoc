import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import { Texts, RecipeOne } from '../util/constants/Strings';
import { Colors, Enums } from '../util/constants/Constants';
import CustomMainButton from '../util/CustomMainButton';
import { ImageConstants } from '../assets/ImageConstants';
import TextAnimation from '../util/TextAnimation';

const Data = [
  {
    title: Texts.recepieOneTitle,
  },
  {
    title: Texts.recepieTwoTitle,
  },
  {
    title: Texts.recepieThreeTitle,
  },
];
const RecipeData = {
  ingred: [
    {
      step: RecipeOne.ingredients.one,
    },
    {
      step: RecipeOne.ingredients.two,
    },
    {
      step: RecipeOne.ingredients.three,
    },
    {
      step: RecipeOne.ingredients.four,
    },
    {
      step: RecipeOne.ingredients.five,
    },
    {
      step: RecipeOne.ingredients.six,
    },
    {
      step: RecipeOne.ingredients.seven,
    },
    {
      step: RecipeOne.ingredients.eight,
    },
    {
      step: RecipeOne.ingredients.nine,
    },
    {
      step: RecipeOne.ingredients.ten,
    },
    {
      step: RecipeOne.ingredients.eleven,
    },
    {
      step: RecipeOne.ingredients.tweleve,
    },
    {
      step: RecipeOne.ingredients.thirteen,
    },
  ],
};

export default class RecipeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishSelected: '',
      step: 1,
      timer: 3,
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>{Texts.letsPrepare}</Text>
          <Text
            style={{
              ...styles.headingText,
              ...styles.subHeadingText,
            }}
          >
            {this.props.route.params.value}
          </Text>
        </View>
        <View style={styles.container}>
          <View>
            <Image source={this.getImage()} style={styles.img} />
          </View>
          <View style={styles.subHeadContainer}>
            <Text
              style={{
                ...styles.headingText,
                ...styles.subHeadingText,
              }}
            >
              {this.getSubHeading()}
            </Text>
          </View>
          <View>
            <Text style={styles.mainContentStyle}>{this.getContent()}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <CustomMainButton
            customContainer={styles.backForw}
            title={'<'}
            customText={{ color: Colors.white, fontSize: 30 }}
            onPress={() => console.log('Back')}
          />
          <CustomMainButton
            customContainer={styles.playButton}
            title={'Play/Pause'}
            onPress={() => console.log('Play/Pause')}
            customText={{ color: Colors.white }}
          />
          <CustomMainButton
            customContainer={styles.backForw}
            title={'>'}
            customText={{ color: Colors.white, fontSize: 30 }}
            onPress={() => console.log('Next')}
          />
        </View>
      </SafeAreaView>
    );
  }
  componentDidMount() {
    this.interval = setInterval(
      () => this.setState((prevState) => ({ timer: prevState.timer - 1 })),
      1500
    );
  }
  componentDidUpdate() {
    if (this.state.timer === 0) {
      clearInterval(this.interval);
    }
  }

  getSubHeading = () => {
    if (this.state.step === Enums.one) {
      return Texts.getReady;
    } else if (this.state.step === Enums.two) {
      return Texts.ingredients;
    } else if (this.state.step === Enums.three) {
      return Texts.recipe;
    } else {
      return Texts.completed;
    }
  };
  getContent = () => {
    if (this.state.step === Enums.one) {
      if (this.state.timer === 0) {
        this.setState({
          step: 2,
        });
      }
      return this.state.timer;
    } else if (this.state.step === Enums.two) {
      return (
        <TextAnimation
          content={RecipeData.ingred[0].step}
          duration={3000}
          onFinish={() => {
            Alert.alert('Done');
          }}
        />
      );
    } else if (this.state.step === Enums.three) {
      return Texts.recipe;
    } else {
      return Texts.completed;
    }
  };
  getImage = () => {
    let dish = this.props.route.params.value;
    if (Data[0].title === dish) {
      return this.state.step === Enums.two
        ? ImageConstants.recipeOne.ingred
        : ImageConstants.recipeOne.complete;
    } else if (Data[1].title === dish) {
      return this.state.step === Enums.two
        ? ImageConstants.recipeTwo.ingred
        : ImageConstants.recipeTwo.complete;
    } else if (Data[2].title === dish) {
      return this.state.step === Enums.two
        ? ImageConstants.recipeThree.ingred
        : ImageConstants.recipeThree.complete;
    }
  };
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.lilac,
  },
  container: {
    flex: 1,
    padding: 40,
  },
  headingContainer: {
    marginTop: -50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightPurple,
    height: 150,
    width: '100%',
    borderRadius: 50,
    paddingTop: 40,
  },
  headingText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: Colors.darkPurple,
  },
  subHeadingText: {
    fontWeight: '500',
    fontSize: 20,
    marginTop: 5,
  },
  img: {
    marginTop: -20,
    width: 365,
    flex: 0.75,
    borderRadius: 15,
    borderColor: Colors.lightPurple,
    borderWidth: 10,
  },
  subHeadContainer: {
    alignItems: 'center',
    marginTop: -100,
  },
  playButton: {
    width: 150,
    backgroundColor: Colors.darkPurple,
  },
  backForw: {
    width: 70,
    borderRadius: 70,
    marginHorizontal: 25,
    backgroundColor: Colors.darkPurple,
  },
  mainContentStyle: {
    fontSize: 100,
    color: Colors.darkPurple,
  },
});
