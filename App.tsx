import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

// Import file halaman home dan about yang sudah Anda buat
import Tugas3Home from './tugas3home';
import Tugas3About from './tugas3about';

// Membuat Tab Navigator
const AppNavigator = createBottomTabNavigator(
  {
    Home: { screen: Tugas3Home },
    About: { screen: Tugas3About },
  },
  {
    tabBarOptions: {
      activeTintColor: '#16834A', // Warna teks/ikon saat tab aktif
      inactiveTintColor: 'gray',  // Warna teks/ikon saat tidak aktif
      labelStyle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      style: {
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        height: 60,
      },
    },
  }
);

export default AppNavigator;

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Button,
//   Alert,
//   StyleSheet,
//   ScrollView,
//   Image,
//   PermissionsAndroid,
//   Platform,
//   FlatList,
// } from 'react-native';
// import { CameraRoll } from '@react-native-camera-roll/camera-roll';
//
// export default function App() {
//   const [photos, setPhotos] = useState([]);
//
//   const tampilkanAlert = () => {
//     Alert.alert('Informasi', 'Primakara Luar Biasa');
//   };
//
//   // Fungsi meminta izin akses galeri untuk Android
//   const hasAndroidPermission = async () => {
//     if (Platform.Version >= 33) {
//       const permission = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
//       );
//       return permission === PermissionsAndroid.RESULTS.GRANTED;
//     } else {
//       const permission = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
//       );
//       return permission === PermissionsAndroid.RESULTS.GRANTED;
//     }
//   };
//
//   const tampilkanGallery = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await hasAndroidPermission();
//       if (!granted) {
//         Alert.alert('Izin Ditolak', 'Aplikasi memerlukan izin untuk membaca galeri.');
//         return;
//       }
//     }
//
//     try {
//       const result = await CameraRoll.getPhotos({
//         first: 10,
//         assetType: 'Photos',
//       });
//
//       console.log('Hasil CameraRoll:', result); // Cek console Metro
//       if (result.edges.length === 0) {
//         Alert.alert('Informasi', 'Tidak ada foto ditemukan di perangkat.');
//       } else {
//         setPhotos(result.edges);
//         Alert.alert('Sukses', `Berhasil memuat ${result.edges.length} foto!`);
//       }
//     } catch (error) {
//       console.log('Detail Error CameraRoll:', error);
//       Alert.alert('Error Detail', error.message || 'Gagal memuat foto.');
//     }
//   };
//
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.emoji}>📱</Text>
//         <Text style={styles.title}>Praktikum React Native</Text>
//         <Text style={styles.subtitle}>Basic Component, Layouting & CameraRoll</Text>
//       </View>
//
//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>Tugas Mandiri</Text>
//         <Text style={styles.description}>
//           Pilih tombol di bawah untuk menampilkan 10 foto dari galeri.
//         </Text>
//
//         <View style={styles.buttonContainer}>
//           <Button title="Tampilkan Alert" color="#16834A" onPress={tampilkanAlert} />
//         </View>
//
//         <View style={styles.buttonContainer}>
//           <Button title="Tampilkan Gallery (10 Foto)" color="#16834A" onPress={tampilkanGallery} />
//         </View>
//       </View>
//
//       {/* Menampilkan daftar foto */}
//       {photos.length > 0 && (
//         <View style={styles.galleryContainer}>
//           <Text style={styles.galleryTitle}>Daftar 10 Foto Galeri:</Text>
//           <View style={styles.imageGrid}>
//             {photos.map((p, index) => (
//               <Image
//                 key={index}
//                 source={{ uri: p.node.image.uri }}
//                 style={styles.imageItem}
//               />
//             ))}
//           </View>
//         </View>
//       )}
//
//       <Text style={styles.footer}>Pemrograman Mobile</Text>
//     </ScrollView>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 24,
//     backgroundColor: '#F5F7F5',
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 24,
//   },
//   emoji: {
//     fontSize: 40,
//     marginBottom: 8,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#183B2A',
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 13,
//     color: '#68756C',
//     textAlign: 'center',
//     marginTop: 4,
//   },
//   card: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     padding: 20,
//     elevation: 3,
//     marginBottom: 20,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#183B2A',
//   },
//   description: {
//     fontSize: 13,
//     color: '#68756C',
//     marginTop: 6,
//     marginBottom: 16,
//   },
//   buttonContainer: {
//     marginBottom: 12,
//     overflow: 'hidden',
//     borderRadius: 8,
//   },
//   galleryContainer: {
//     marginTop: 10,
//   },
//   galleryTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#183B2A',
//     marginBottom: 10,
//   },
//   imageGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   imageItem: {
//     width: '31%',
//     height: 100,
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   footer: {
//     textAlign: 'center',
//     color: '#89938B',
//     fontSize: 12,
//     marginTop: 20,
//   },
// });