import * as React from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import { Colors } from './constants/Constants';

export default class TextAnimation extends React.Component {
  animatedValues = [];

  constructor(props) {
    super(props);
    this.state = {
      value: [],
    };
  }

  animated = (textArr, toValue = 1) => {
    const animations = textArr.map((_, i) => {
      return Animated.timing(this.animatedValues[i], {
        toValue,
        duration: this.props.duration,
        useNativeDriver: true,
      });
    });

    Animated.stagger(this.props.duration / 5, animations).start(() => {
      if (this.props.onFinish) {
        this.props.onFinish();
      }
    });
  };

  render() {
    const toValue = 1;
    console.log('props', this.props);
    const textArr = this.props.content.trim().split(' ');
    textArr.forEach((_, i) => {
      this.animatedValues[i] = new Animated.Value(0);
    });
    this.animated(textArr);
    return (
      <View style={[this.props.style, styles.textContainer]}>
        {textArr.map((word, index) => {
          return (
            <Animated.Text
              key={`${word}-${index}`}
              style={[
                this.props.CustomTextStyle,
                {
                  opacity: this.animatedValues[index],
                  transform: [
                    {
                      translateY: Animated.multiply(
                        this.animatedValues[index],
                        new Animated.Value(-5)
                      ),
                    },
                  ],
                },
                styles.textStyle,
              ]}
            >
              {word}
              {`${index < textArr.length ? ' ' : ''}`}
            </Animated.Text>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 315,
  },
  textStyle: {
    fontSize: 30,
    color: Colors.darkPurple,
  },
});
