// // import React, { useEffect, useState } from 'react';
// // import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
// // import { Layout } from 'react-native-reanimated';



// // // Main component to display dynamic layout for co-working spaces
// // const LayoutData = ({ fetchSpacesData }) => {
// //   const [spaces, setSpaces] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   // Fetch data on component mount
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       setLoading(true);
// //       try {
// //         const data = await fetchSpacesData();
// //         setSpaces(data);
// //       } catch (err) {
// //         setError('Failed to load space data');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, [fetchSpacesData]);

// //   // Render each space item with dynamic data
// //   const renderSpaceItem = (space) => (
// //     <View key={space.id} style={[styles.spaceItem, { backgroundColor: space.color }]}>
// //       <Text style={styles.spaceType}>{space.type}</Text>
// //       <Text>Location: {space.location}</Text>
// //       <Text>Capacity: {space.capacity}</Text>
// //       <Text>Status: {space.status}</Text>
// //     </View>
// //   );

// //   if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
// //   if (error) return <Text style={styles.errorText}>{error}</Text>;

// //   return (
// //     <ScrollView contentContainerStyle={styles.container}>
// //       {spaces.length > 0 ? (
// //         spaces.map((space) => renderSpaceItem(space))
// //       ) : (
// //         <Text style={styles.noDataText}>No spaces available</Text>
// //       )}
// //     </ScrollView>
// //   );
// // };

// // // Define default styles for the component
// // const styles = StyleSheet.create({
// //   container: {
// //     padding: 20,
// //     alignItems: 'center',
// //   },
// //   spaceItem: {
// //     width: '90%',
// //     padding: 15,
// //     marginVertical: 10,
// //     borderRadius: 10,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 4,
// //   },
// //   spaceType: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// //   errorText: {
// //     color: 'red',
// //     fontSize: 16,
// //     textAlign: 'center',
// //   },
// //   noDataText: {
// //     fontSize: 16,
// //     color: '#666',
// //     textAlign: 'center',
// //   },
// // });

// // export default LayoutData;
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';

// // Component to display layout data for co-working spaces
// const LayoutData = ({ fetchSpacesData }) => {
//   const [spaces, setSpaces] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const data = await fetchSpacesData(); // Call fetchSpacesData function passed as prop
//         if (data) {
//           setSpaces(data);
//         } else {
//           setError('No data returned from server');
//         }
//       } catch (err) {
//         setError('Failed to load space data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [fetchSpacesData]);

//   const renderSpaceItem = (space) => (
//     <View key={space.id} style={[styles.spaceItem, { backgroundColor: space.color || '#ddd' }]}>
//       <Text style={styles.spaceType}>{space.type}</Text>
//       <Text>Location: {space.location}</Text>
//       <Text>Capacity: {space.capacity}</Text>
//       <Text>Status: {space.status}</Text>
//     </View>
//   );

//   if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
//   if (error) return <Text style={styles.errorText}>{error}</Text>;

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {spaces.length > 0 ? (
//         spaces.map((space) => renderSpaceItem(space))
//       ) : (
//         <Text style={styles.noDataText}>No spaces available</Text>
//       )}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     alignItems: 'center',
//   },
//   spaceItem: {
//     width: '90%',
//     padding: 15,
//     marginVertical: 10,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//   },
//   spaceType: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   noDataText: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//   },
// });

// export default LayoutData;

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const LayoutData = ({ spaces }) => {
  if (spaces.length === 0) {
    return <Text style={styles.noDataText}>No spaces available</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {spaces.map((space) => (
        <View key={space.id} style={[styles.spaceItem, { backgroundColor: space.color || '#ddd' }]}>
          <Text style={styles.spaceType}>{space.type}</Text>
          <Text>Location: {space.location}</Text>
          <Text>Capacity: {space.capacity}</Text>
          <Text>Status: {space.status}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  spaceItem: {
    width: '90%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  spaceType: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  noDataText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default LayoutData;
