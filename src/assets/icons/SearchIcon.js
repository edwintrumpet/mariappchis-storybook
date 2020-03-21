import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

function SearchIcon(props) {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" {...props}>
      <Path data-name="Rect\xE1ngulo 60" fill="none" d="M0 0h40v40H0z" />
      <G data-name="Trazado 3" fill={props.color}>
        <Path d="M22.857 20z" />
        <Path d="M17.143 20h5.714-5.714z" fill="#707070" />
      </G>
      <G data-name="Grupo 10" fill={props.color}>
        <Path
          data-name="Sustracci\xF3n 2"
          d="M15.952 23.571a7.621 7.621 0 01-2.966-14.638 7.621 7.621 0 015.931 14.041 7.572 7.572 0 01-2.965.597zm0-13.333a5.7 5.7 0 102.224.449 5.679 5.679 0 00-2.224-.454z"
        />
        <Path
          data-name="Rect\xE1ngulo 51"
          d="M21.109 19.762l10.102 10.102a.952.952 0 010 1.346.952.952 0 01-1.347 0L19.763 21.108l1.346-1.346z"
        />
      </G>
    </Svg>
  );
}

export default SearchIcon;
