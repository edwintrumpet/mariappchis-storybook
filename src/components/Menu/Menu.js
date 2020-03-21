import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Image, FlatList, Text} from 'react-native';
import CloseIcon from '../../assets/icons/Close';

export default function Menu({colors, image, data, name}) {
  return (
    <>
      <View style={styles.back} />
      <View style={[styles.container, styles.background(colors.background)]}>
        <CloseIcon color={colors.highContrast} style={styles.close} />
        <View style={styles.profile}>
          <View style={styles.imgContainer}>
            <Image source={{uri: image}} style={styles.image} />
          </View>
          <Text style={[styles.name, styles.color(colors.highContrast)]}>
            {name}
          </Text>
        </View>
        <FlatList
          style={styles.list}
          data={data}
          renderItem={({item}) => (
            <Text style={[styles.item, styles.color(colors.fullContrast)]}>
              {item.name}
            </Text>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#000',
    flex: 1,
    opacity: 0.7,
    zIndex: 1,
  },
  container: {
    position: 'absolute',
    padding: 16,
    top: 0,
    right: 0,
    width: '70%',
    height: '100%',
    zIndex: 2,
  },
  close: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  imgContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#FFF',
    overflow: 'hidden',
  },
  image: {
    flex: 1,
  },
  name: {
    marginLeft: 4,
    fontSize: 17,
    fontWeight: 'bold',
    flex: 1,
  },
  list: {
    marginTop: 32,
    marginLeft: 16,
  },
  item: {
    fontSize: 17,
    marginBottom: 8,
  },
  background: color => ({backgroundColor: color}),
  color: color => ({color: color}),
});

Menu.propTypes = {
  colors: PropTypes.object,
  image: PropTypes.string,
  name: PropTypes.string,
};

Menu.defaultProps = {
  colors: {
    background: '#FFF',
    highContrast: '#586668',
    fullContrast: '#1F2729',
  },
};
