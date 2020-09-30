import * as React from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import { Colors } from './constants/Constants';

export default class TextAnimation extends React.Component {
  animatedValues = [];

  constructor(props) {
    super(props);

    const textArr = props.content.trim().split(' ');
    textArr.forEach((_, i) => {
      this.animatedValues[i] = new Animated.Value(0);
    });
    this.textArr = textArr;
  }

  componentDidMount() {
    this.animated();
  }

  animated = (toValue = 1) => {
    const animations = this.textArr.map((_, i) => {
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
    return (
      <View style={[this.props.style, styles.textContainer]}>
        {this.textArr.map((word, index) => {
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
              {`${index < this.textArr.length ? ' ' : ''}`}
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
    fontSize: 25,
    color: Colors.darkPurple,
  },
});
