import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Sidebar from '../components/Sidebar';

const HomeScreen = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <View style={styles.mainContainer}>
      {/* Sidebar */}
      <Sidebar isVisible={sidebarVisible} onClose={() => setSidebarVisible(false)} />
      
      {/* Top Navigation Bar */}
      <View style={styles.topNavBar}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleSidebar}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        
        <Text style={styles.navTitle}>Zomato</Text>
        
        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.menuIcon}>🛒</Text>
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>2</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container}>
        {/* Banner Section */}
        <View style={styles.bannerContainer}>
          <Image 
            source={{uri: 'https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png'}}
            style={styles.bannerImage}
            resizeMode="cover"
          />
        </View>
        
        {/* Categories Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Food Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
            {[
              { name: 'Pizza', icon: '🍕' },
              { name: 'Burger', icon: '🍔' },
              { name: 'South Indian', icon: '🥘' },
              { name: 'North Indian', icon: '🍛' },
              { name: 'Desserts', icon: '🍰' },
              { name: 'Ice Cream', icon: '🍦' },
              { name: 'Biryani', icon: '🍚' },
              { name: 'Rolls', icon: '🌯' },
              { name: 'Sandwich', icon: '🥪' },
              { name: 'Coffee', icon: '☕' },
              { name: 'Pasta', icon: '🍝' }
            ].map((category, index) => (
              <TouchableOpacity key={index} style={styles.categoryItem}>
                <View style={styles.categoryIconContainer}>
                  <Text style={styles.categoryIcon}>{category.icon}</Text>
                </View>
                <Text style={styles.categoryText}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
     
        
        {/* Popular Dishes Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Popular Dishes</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dishesContainer}>
            {[
              { name: 'Butter Chicken', price: '₹299', image: require('../assets/crilled-chicken-bread-piece-greens-pepper-sauce-spices-side-view.jpg') },
              { name: 'Paneer Tikka', price: '₹249', image: require('../assets/top-view-table-full-delicious-food-composition.jpg') },
              { name: 'Veg Biryani', price: '₹199', image: require('../assets/crilled-chicken-bread-piece-greens-pepper-sauce-spices-side-view.jpg') },
              { name: 'Chicken Biryani', price: '₹249', image: require('../assets/crilled-chicken-bread-piece-greens-pepper-sauce-spices-side-view.jpg') },
              { name: 'Masala Dosa', price: '₹149', image: require('../assets/crilled-chicken-bread-piece-greens-pepper-sauce-spices-side-view.jpg') },
              { name: 'Chole Bhature', price: '₹179', image: require('../assets/crilled-chicken-bread-piece-greens-pepper-sauce-spices-side-view.jpg') },
              { name: 'Pizza Margherita', price: '₹299', image: require('../assets/crilled-chicken-bread-piece-greens-pepper-sauce-spices-side-view.jpg') },
              { name: 'Hakka Noodles', price: '₹179', image: require('../assets/crilled-chicken-bread-piece-greens-pepper-sauce-spices-side-view.jpg') },
              { name: 'Gulab Jamun', price: '₹99', image: require('../assets/crilled-chicken-bread-piece-greens-pepper-sauce-spices-side-view.jpg') },
              { name: 'Chicken Burger', price: '₹199', image: require('../assets/crilled-chicken-bread-piece-greens-pepper-sauce-spices-side-view.jpg') }
            ].map((dish, index) => (
              <TouchableOpacity key={index} style={styles.dishCard}>
                <Image 
                  source={dish.image}
                  style={styles.dishImage}
                  resizeMode="cover"
                />
                <View style={styles.dishInfo}>
                  <Text style={styles.dishName}>{dish.name}</Text>
                  <Text style={styles.dishPrice}>{dish.price}</Text>
                  <TouchableOpacity style={styles.addButton}>
                    <Icon name="add" size={14} color="#60b246" />
                    <Text style={styles.addButtonText}>ADD</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        
    
           hare add 15 food icon and no card onli cion and proces rodi dal and sabji all
        
<View style={styles.sectionContainer}>
  <Text style={styles.sectionTitle}>Popular Restaurants</Text>
  {[1, 2, 3].map((item) => (
    <TouchableOpacity key={item} style={styles.restaurantCard}>
      <Image 
        source={{uri: 'https://b.zmtcdn.com/data/pictures/chains/8/18443088/d26a0c1732e0e7889deed23c2ada5668.jpg'}}
        style={styles.restaurantImage}
      />
      <View style={styles.restaurantInfo}>
        <Text style={styles.restaurantName}>Restaurant {item}</Text>
        <Text style={styles.restaurantCuisine}>North Indian, Chinese</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>4.2 ★</Text>
          <Text style={styles.deliveryTime}>30-40 min</Text>
        </View>
      </View>
    </TouchableOpacity>
  ))}
</View>

        {/* Indian Food Items Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Indian Food Items</Text>
          <View style={styles.foodItemsGrid}>
            {[
              { name: 'Roti', price: '₹15', icon: '🫓', color: '#f5d7a1' },
              { name: 'Naan', price: '₹30', icon: '🫓', color: '#e8c38d' },
              { name: 'Dal', price: '₹80', icon: '🍲', color: '#f0c929' },
              { name: 'Sabji', price: '₹90', icon: '🥘', color: '#7fb069' },
              { name: 'Rice', price: '₹60', icon: '🍚', color: '#f0f0f0' },
              { name: 'Chole', price: '₹100', icon: '🍛', color: '#b85c38' },
              { name: 'Paneer', price: '₹120', icon: '🧀', color: '#f5e6a4' },
              { name: 'Raita', price: '₹40', icon: '🥣', color: '#e0e7e9' },
              { name: 'Paratha', price: '₹35', icon: '🫓', color: '#d4a76a' },
              { name: 'Idli', price: '₹50', icon: '🍙', color: '#f9f9f9' },
              { name: 'Dosa', price: '₹70', icon: '🥞', color: '#e6c18a' },
              { name: 'Samosa', price: '₹20', icon: '🔺', color: '#e3b448' },
              { name: 'Pakora', price: '₹25', icon: '🧆', color: '#c1a57b' },
              { name: 'Chutney', price: '₹30', icon: '🥫', color: '#8fb339' },
              { name: 'Lassi', price: '₹45', icon: '🥛', color: '#f8efe6' }
            ].map((item, index) => (
              <TouchableOpacity 
                key={index} 
                style={[
                  styles.foodItemContainer,
                  { backgroundColor: '#2c2c2c' }
                ]}
                activeOpacity={0.7}
              >
                <View style={[styles.iconCircle, { backgroundColor: item.color }]}>
                  <Text style={styles.foodItemIcon}>{item.icon}</Text>
                </View>
                <Text style={styles.foodItemName}>{item.name}</Text>
                <Text style={styles.foodItemPrice}>{item.price}</Text>
                <View style={styles.addIconContainer}>
                  <Icon name="add-circle" size={20} color="#60b246" />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        {/* Add some padding at the bottom to ensure content isn't hidden behind the bottom nav */}
        <View style={{height: 70}} />
      </ScrollView>
      
      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={[styles.bottomNavText, styles.activeNavText]}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.bottomNavItem}>
          <Text style={styles.navIcon}>🛎️</Text>
          <Text style={styles.bottomNavText}>Services</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.bottomNavItem}>
          <Text style={styles.navIcon}>💬</Text>
          <Text style={styles.bottomNavText}>Chat</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.bottomNavItem}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.bottomNavText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  topNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  menuButton: {
    padding: 5,
  },
  navTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#cb202d',
  },
  cartButton: {
    padding: 5,
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#cb202d',
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  bannerContainer: {
    height: 180,
    width: '100%',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  sectionContainer: {
    padding: 15,
    marginVertical: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryIconContainer: {
    width: 70,
    height: 70,
    backgroundColor: '#f0f0f0',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryIcon: {
    fontSize: 30,
  },
  categoryText: {
    fontSize: 14,
    color: '#444',
  },
  restaurantCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  restaurantImage: {
    width: 100,
    height: 100,
  },
  restaurantInfo: {
    flex: 1,
    padding: 12,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  restaurantCuisine: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  rating: {
    backgroundColor: '#5ba829',
    color: 'white',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontSize: 12,
  },
  deliveryTime: {
    color: '#666',
    fontSize: 12,
  },
  offersContainer: {
    flexDirection: 'row',
  },
  offerCard: {
    width: 200,
    height: 100,
    backgroundColor: '#fff3e0',
    borderRadius: 8,
    padding: 15,
    marginRight: 15,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ffcc80',
  },
  offerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e65100',
  },
  offerCode: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
  bottomNavBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  bottomNavItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  bottomNavText: {
    fontSize: 12,
    marginTop: 3,
    color: '#666',
  },
  activeNavText: {
    color: '#cb202d',
    fontWeight: 'bold',
  },
  dishesContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  dishCard: {
    width: 160,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginRight: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  dishImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  dishInfo: {
    padding: 10,
  },
  dishName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  dishPrice: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: '#fff',
    borderColor: '#60b246',
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#60b246',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 2,
  },
  menuIcon: {
    fontSize: 24,
    color: '#333',
  },
  navIcon: {
    fontSize: 24,
    marginBottom: 3,
  },
  foodItemsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  foodItemContainer: {
    width: '30%',
    backgroundColor: '#2c2c2c',
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#3d3d3d',
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  foodItemIcon: {
    fontSize: 28,
    transform: [{ scale: 1.2 }],
  },
  foodItemName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 3,
    textAlign: 'center',
  },
  foodItemPrice: {
    fontSize: 13,
    color: '#60b246',
    fontWeight: 'bold',
  },
  addIconContainer: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 12,
    padding: 2,
  },
});

export default HomeScreen;
