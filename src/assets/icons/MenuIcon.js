import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

function MenuIcon(props) {
  return (
    <Svg width={40} height={40} viewBox="0 0 168 168" {...props}>
      <Path data-name="Rect\xE1ngulo 44" fill="none" d="M0 0h168v168H0z" />
      <Rect
        data-name="Rect\xE1ngulo 48"
        width={80}
        height={8}
        rx={4}
        transform="translate(64 80)"
        fill={props.color}
      />
      <Rect
        data-name="Rect\xE1ngulo 49"
        width={24}
        height={8}
        rx={4}
        transform="translate(24 80)"
        fill={props.color}
      />
      <Rect
        data-name="Rect\xE1ngulo 50"
        width={120}
        height={8}
        rx={4}
        transform="translate(24 112)"
        fill={props.color}
      />
      <Rect
        data-name="Rect\xE1ngulo 47"
        width={120}
        height={8}
        rx={4}
        transform="translate(24 48)"
        fill={props.color}
      />
    </Svg>
  );
}

export default MenuIcon;
