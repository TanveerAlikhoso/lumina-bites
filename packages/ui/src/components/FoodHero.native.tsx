import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { Button } from './Button';
import { tokens } from '../theme/tokens';

const { width } = Dimensions.get('window');

interface FoodHeroProps {
  onExploreMenu: () => void;
  onOurStory: () => void;
}

export const FoodHero: React.FC<FoodHeroProps> = ({ onExploreMenu, onOurStory }) => {
  return (
    <View style={styles.container}>
      {/* Background Radial tint effect */}
      <View style={styles.ambientGlow} />

      {/* Editorial Content */}
      <View style={styles.content}>
        <Text style={styles.tagline}>Elevated Fast Food</Text>
        
        <Text style={styles.title}>
          PIZZA & <Text style={styles.titleAccent}>BURGER</Text>
        </Text>
        
        <Text style={styles.description}>
          Experience the intersection of speed and luxury. We curate high-gloss flavors using globally sourced ingredients for the modern palate.
        </Text>
        
        {/* Call to Actions */}
        <View style={styles.actions}>
          <Button variant="gloss" onPress={onExploreMenu} style={styles.actionBtn}>
            Explore Menu
          </Button>
          <Button variant="outline" onPress={onOurStory} style={styles.actionBtn}>
            Our Story
          </Button>
        </View>
      </View>

      {/* Overlapping Image Montage */}
      <View style={styles.montageContainer}>
        {/* Background Pizza */}
        <Image 
          source={require('../assets/pizza.png')} 
          style={styles.pizzaImage}
          contentFit="contain"
        />
        {/* Foreground Burger */}
        <Image 
          source={require('../assets/burger.png')} 
          style={styles.burgerImage}
          contentFit="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#131313',
    paddingTop: 80,
    paddingBottom: 40,
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  ambientGlow: {
    position: 'absolute',
    top: 50,
    right: -100,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(147, 0, 10, 0.25)',
    filter: 'blur(80px)', // Uses modern blur (on iOS/Android React Native this is simulated nicely or bypassed gracefully)
  },
  content: {
    width: '100%',
    paddingHorizontal: tokens.spacing.marginMobile,
    alignItems: 'center',
    zIndex: 10,
  },
  tagline: {
    fontFamily: tokens.fontFamily.body,
    fontSize: 12,
    fontWeight: '600',
    color: '#ffb68b',
    letterSpacing: 3,
    textTransform: 'uppercase',
    marginBottom: 16,
    textAlign: 'center',
  },
  title: {
    fontFamily: tokens.fontFamily.display,
    fontSize: 48,
    fontWeight: '900',
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 52,
    letterSpacing: -1,
  },
  titleAccent: {
    color: '#ffb68b',
  },
  description: {
    fontFamily: tokens.fontFamily.body,
    fontSize: 14,
    color: '#e0c0af',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 16,
    maxWidth: 320,
  },
  actions: {
    flexDirection: 'column',
    width: '100%',
    gap: 12,
    marginTop: 28,
  },
  actionBtn: {
    width: '100%',
  },
  montageContainer: {
    height: 320,
    width: '100%',
    position: 'relative',
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pizzaImage: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 180,
    height: 180,
    transform: [{ rotate: '15deg' }],
    opacity: 0.7,
  },
  burgerImage: {
    position: 'absolute',
    top: 10,
    left: 20,
    width: 260,
    height: 260,
    transform: [{ rotate: '-6deg' }],
    shadowColor: '#ffb68b',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
});
