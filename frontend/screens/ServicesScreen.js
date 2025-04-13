
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import Sidebar from '../components/Sidebar';

const ServicesScreen = () => {
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
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Our Services</Text>
        </View>
        
        <View style={styles.serviceCard}>
          <Image 
            source={{uri: 'https://b.zmtcdn.com/data/o2_assets/ebd42529c3342bdaf8b06f127e4a7331626258147.png'}}
            style={styles.serviceImage}
          />
          <Text style={styles.serviceTitle}>Food Delivery</Text>
          <Text style={styles.serviceDescription}>
            Order food from your favorite restaurants and get it delivered to your doorstep.
          </Text>
        </View>
        
        <View style={styles.serviceCard}>
          <Image 
            source={{uri: 'https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png'}}
            style={styles.serviceImage}
          />
          <Text style={styles.serviceTitle}>Dining Out</Text>
          <Text style={styles.serviceDescription}>
            Find the best restaurants, cafés, and bars in your area for dining out.
          </Text>
        </View>
        
        <View style={styles.serviceCard}>
          <Image 
            source={{uri: 'https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png'}}
            style={styles.serviceImage}
          />
          <Text style={styles.serviceTitle}>Nightlife</Text>
          <Text style={styles.serviceDescription}>
            Explore the best nightlife spots in your city with special offers.
          </Text>
        </View>
        
        <View style={styles.serviceCard}>
          <Image 
            source={{uri: 'https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png'}}
            style={styles.serviceImage}
          />
          <Text style={styles.serviceTitle}>Pro Membership</Text>
          <Text style={styles.serviceDescription}>
            Get exclusive discounts and benefits with our premium membership.
          </Text>
        </View>
        
        {/* Add some padding at the bottom to ensure content isn't hidden behind the bottom nav */}
        <View style={{height: 70}} />
      </ScrollView>
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
  menuIcon: {
    fontSize: 24,
    color: '#333',
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  serviceCard: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  }
});

export default ServicesScreen;
