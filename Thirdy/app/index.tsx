import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-gray-300 px-6">

      <Image
        className="rounded-full"
        source={require("../assets/images/tatlo.png")} 
        style={{ width: 170, height: 170 }} 
      />
      
      <Text className="font-bold text-3xl text-center mt-6"
      style={{ fontFamily: 'Times New Roman' }}>
        Mark Steven Alcovindas
      </Text>
      
      <Text className="text-gray-600 text-lg text-center mt-1"
      style={{ fontFamily: 'Times New Roman' }}>
        UI/UX Designer
      </Text>

      <View className="flex-row justify-center items-center mt-10 gap-4">

        <Pressable
          className="bg-green-800 rounded-full px-6 py-3 shadow-lg"
          onPress={() => router.push("/projects")}
        >
          <Text className="text-white text-sm"
          style={{ fontFamily: 'Times New Roman' }}>
            View My Projects
          </Text>
        </Pressable>

        <Pressable
          className="bg-white rounded-full px-6 py-3 shadow-lg"
          onPress={() => router.push("/skill")}
        >
          <Text className="text-black text-sm"
          style={{ fontFamily: 'Times New Roman' }}>
            My Skills
          </Text>
        </Pressable>

      </View>
    </View>
  );
}











import React, { useEffect, useMemo, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Product = {
  id: number;
  name: string;
  price: number;
  image: any;
};

type Cart = Record<number, { product: Product; qty: number }>;

const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Mouse',
    price: 499,
    image: require('../assets/wirelessmouse.jpg'),
  },
  {
    id: 2,
    name: 'Keyboard',
    price: 899,
    image: require('../assets/keyboard.jpg'),
  },
  {
    id: 3,
    name: 'Headset',
    price: 1299,
    image: require('../assets/headset.jpg'),
  },
  {
    id: 4,
    name: 'USB Hub',
    price: 349,
    image: require('../assets/usb.jpg'),
  },
];

export default function App() {
  const [cart, setCart] = useState<Cart>({});

  useEffect(() => {
    loadCart();
  }, []);

  useEffect(() => {
    saveCart();
  }, [cart]);

  const loadCart = async () => {
    const saved = await AsyncStorage.getItem('cart');
    if (saved) setCart(JSON.parse(saved));
  };

  const saveCart = async () => {
    await AsyncStorage.setItem('cart', JSON.stringify(cart));
  };

  const addToCart = (product: Product) => {
    setCart(prev => ({
      ...prev,
      [product.id]: {
        product,
        qty: (prev[product.id]?.qty || 0) + 1,
      },
    }));
  };

  const changeQty = (id: number, delta: number) => {
    setCart(prev => {
      const item = prev[id];
      if (!item) return prev;

      const nextQty = item.qty + delta;
      const updated = { ...prev };

      if (nextQty <= 0) {
        delete updated[id];
      } else {
        updated[id] = {
          ...item,
          qty: nextQty,
        };
      }

      return updated;
    });
  };

  const totals = useMemo(() => {
    return {
      items: Object.values(cart).reduce((sum, item) => sum + item.qty, 0),
      grand: Object.values(cart).reduce(
        (sum, item) => sum + item.qty * item.product.price,
        0
      ),
    };
  }, [cart]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Simple E-Commerce</Text>

      <FlatList
        data={products}
        numColumns={2}
        scrollEnabled={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />

            <Text style={styles.name}>{item.name}</Text>
            <Text>₱{item.price}</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => addToCart(item)}
            >
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.cartBox}>
        <Text style={styles.subtitle}>Cart</Text>

        {Object.values(cart).map(({ product, qty }) => (
          <View key={product.id} style={styles.cartItem}>
            <View>
              <Text>{product.name}</Text>
              <Text>
                {qty} × ₱{product.price} = ₱{qty * product.price}
              </Text>
            </View>

            <View style={styles.qtyButtons}>
              <TouchableOpacity
                style={styles.smallBtn}
                onPress={() => changeQty(product.id, -1)}
              >
                <Text>-</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.smallBtn}
                onPress={() => changeQty(product.id, 1)}
              >
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <Text>Total Items: {totals.items}</Text>
        <Text>Grand Total: ₱{totals.grand}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f3f4f6',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  card: {
    flex: 1,
    backgroundColor: 'white',
    margin: 6,
    padding: 10,
    borderRadius: 12,
  },

  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    resizeMode: 'cover',
  },

  name: {
    fontWeight: '600',
    marginTop: 8,
  },

  button: {
    backgroundColor: 'black',
    padding: 8,
    marginTop: 8,
    borderRadius: 8,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
  },

  cartBox: {
    backgroundColor: 'white',
    marginTop: 20,
    padding: 12,
    borderRadius: 12,
  },

  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  qtyButtons: {
    flexDirection: 'row',
  },

  smallBtn: {
    backgroundColor: '#ddd',
    padding: 8,
    borderRadius: 6,
    marginLeft: 8,
  },
});
