import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { tokens } from '../theme/tokens';

const { width } = Dimensions.get('window');
const CARD_WIDTH = 260;

const CATEGORIES = [
  {
    id: 'burgers',
    name: 'Prime Burgers',
    description: 'Wagyu, Truffle, & Gold-leaf selections.',
    image: require('../assets/burger.png')
  },
  {
    id: 'pizza',
    name: 'Artisan Pizza',
    description: '72-hour fermented sourdough crust.',
    image: require('../assets/pizza.png')
  },
  {
    id: 'sides',
    name: 'Signature Sides',
    description: 'Truffle frites & charred seasonal greens.',
    image: require('../assets/sides.png')
  },
  {
    id: 'drinks',
    name: 'Lumina Elixirs',
    description: 'Crafted botanical infusions & cold brews.',
    image: require('../assets/drinks.png')
  }
];

interface CategoryCardsProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export const CategoryCards: React.FC<CategoryCardsProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={CARD_WIDTH + 16}
      decelerationRate="fast"
      contentContainerStyle={styles.container}
    >
      {CATEGORIES.map((category) => {
        const isActive = activeCategory === category.id;
        return (
          <TouchableOpacity
            key={category.id}
            activeOpacity={0.95}
            onPress={() => onSelectCategory(category.id)}
            style={[styles.card, isActive && styles.activeCard]}
          >
            {/* Background Image */}
            <Image 
              source={category.image}
              style={styles.backgroundImage}
              contentFit="cover"
            />
            {/* Dark/Gold overlays */}
            <View style={styles.darkOverlay} />
            {isActive ? <View style={styles.activeOverlay} /> : null}

            {/* Label Bottom */}
            <View style={styles.content}>
              <View style={styles.textBlock}>
                <Text style={styles.name}>{category.name}</Text>
                <Text style={styles.description} numberOfLines={1}>
                  {category.description}
                </Text>
              </View>
              <View style={[styles.arrowButton, isActive && styles.activeArrow]}>
                <Text style={[styles.arrowText, isActive && styles.activeArrowText]}>→</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: tokens.spacing.marginMobile,
    paddingVertical: 12,
    gap: 16,
  },
  card: {
    width: CARD_WIDTH,
    height: 195,
    borderRadius: tokens.rounded['2xl'],
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    position: 'relative',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4,
  },
  activeCard: {
    borderColor: '#ffb68b',
    shadowColor: '#ffb68b',
    shadowOpacity: 0.15,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
  },
  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(19, 19, 19, 0.65)',
  },
  activeOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 122, 0, 0.08)',
  },
  content: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textBlock: {
    flex: 1,
    marginRight: 8,
  },
  name: {
    fontFamily: tokens.fontFamily.display,
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  description: {
    fontFamily: tokens.fontFamily.body,
    fontSize: 10,
    color: '#e0c0af',
    marginTop: 2,
  },
  arrowButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeArrow: {
    backgroundColor: '#ff7a00',
    borderColor: '#ff7a00',
  },
  arrowText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  activeArrowText: {
    color: '#522300',
  },
});
