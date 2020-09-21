import React, {useRef} from 'react';
import styled from 'styled-components/native';
import {Transition, Transitioning} from 'react-native-reanimated';

import Images from '../images/';

const bgColors = {
  home: '#FFE1C5',
  logger: '#E5C1E5',
  documents: '#D7D8F8',
  menu: '#BCE3FA',
};

const textColors = {
  home: '#C56B14',
  logger: '#F37FF3',
  documents: '#4B458C',
  menu: '#2D9CDB',
};

const Container = styled.TouchableWithoutFeedback`
  flex: 1;
  flex-direction: row;
`;

const Background = styled(Transitioning.View)`
  flex: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.focused ? bgColors[props.label] : 'white')};
  border-radius: 100px;
  margin: 6px;
`;

const Label = styled.Text`
  color: ${(props) => textColors[props.label]};
  font-weight: 600;
  margin-left: 8px;
`;

const Icon = styled.Image`
  height: 24px;
  width: 24px;
`;

function Tab({onPress, label, accessibilityState}) {
  const focused = accessibilityState.selected;

  const icon = !focused
    ? Images.icons[`${label}`]
    : Images.icons[`${label}Focused`];

  const transition = (
    <Transition.Sequence>
      <Transition.Out type="fade" durationMs={0} />
      <Transition.Change interpolation="easeInOut" durationMs={100} />
      <Transition.In type="fade" duration={10} />
    </Transition.Sequence>
  );

  const ref = useRef();

  return (
    <Container
      onPress={() => {
        ref.current.animateNextTransition();
        onPress();
      }}>
      <Background
        focused={focused}
        label={label}
        ref={ref}
        transition={transition}>
        <Icon source={icon} />
        {focused && (
          <Label label={label}>
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </Label>
        )}
      </Background>
    </Container>
  );
}

export default Tab;
