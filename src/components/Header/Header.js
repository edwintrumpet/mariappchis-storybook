import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Logo from '../../assets/icons/Logo';
import MenuIcon from '../../assets/icons/MenuIcon';
import SearchIcon from '../../assets/icons/SearchIcon';

export default function Header({colors, title}) {
  return (
    <View style={[styles.container, styles.background(colors.background)]}>
      <Text style={[styles.title, styles.color(colors.highContrast)]}>
        {title}
      </Text>
      <Logo color={colors.fullContrast} />
      <View style={styles.right}>
        <SearchIcon color={colors.highContrast} />
        <MenuIcon style={styles.menu} color={colors.highContrast} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    width: '100%',
    height: 56,
  },
  right: {
    flexDirection: 'row',
  },
  menu: {
    marginLeft: 8,
  },
  title: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    fontSize: 17,
  },
  background: color => ({backgroundColor: color}),
  color: color => ({color: color}),
});

Header.propTypes = {
  title: PropTypes.string,
  colors: PropTypes.object,
};

Header.defaultProps = {
  title: 'Título',
  colors: {
    background: '#FFF',
    highContrast: '#586668',
    fullContrast: '#1F2729',
  },
};
