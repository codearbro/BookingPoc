// import React, { useState, useEffect } from 'react';
// import { View, Text, ActivityIndicator, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import Modal from 'react-native-modal';
// import axios from 'axios';


// const AvailableSlotsPopup = ({ isVisible, onClose, serviceId, resourceId, selectedDate }) => {
//   const [loading, setLoading] = useState(true);
//   const [slots, setSlots] = useState([]);
//   const [error, setError] = useState(null);
//   const [accessToken, setAccessToken] = useState(null);

//   useEffect(() => {
//     if (isVisible) {
//       getAccessToken().then(() => fetchAvailableSlots());
//     }
//   }, [isVisible, serviceId, resourceId, selectedDate]);

//   // Function to get access token
//   const getAccessToken = async () => {
//     try {
//       const response = await axios.post(
//         'https://accounts.zoho.in/oauth/v2/token',
//         null,
//         {
//           params: {
//             refresh_token: '1000.85d3f4a03c84492bf6f45d64105a85ec.4aeb91af92260b688aa449da9e39bc1e',
//             client_id: '1000.5V2JD5O0NSFV6PJ2I27YH7Y56YPH7Y',
//             client_secret: 'f19efce90b5d48556bfe75ee45b598539a93996315',
//             grant_type: 'refresh_token',
//           },
//         }
//       );
//       setAccessToken(response.data.access_token);
//       console.log(response.data.access_token);
//       console.log("access token generated");
//     } catch (err) {
//       setError('Failed to retrieve access token. Please try again.');
//     }
//   };

//   // Function to fetch available slots
//   const fetchAvailableSlots = async () => {
//     if (!accessToken) return;

//     setLoading(true);
//     setError(null);

//     try {
//       const formattedDate = encodeURIComponent(selectedDate);
//       const response = await axios.get(
//         `https://www.zohoapis.in/bookings/v1/json/availableslots?service_id=${serviceId}&resource_id=${resourceId}&selected_date=${formattedDate}`,
//         {
//           headers: {
//             Authorization: `Zoho-oauthtoken ${accessToken}`,
//           },
//         }
//       );

//       console.log(response.data);
//       setSlots(response.data || []);

//     } catch (err) {
//       setError('Failed to fetch slots. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Modal isVisible={isVisible} onBackdropPress={onClose}>
//       <View style={styles.container}>
//         <Text style={styles.title}>Available Slots</Text>
//         {loading ? (
//           <ActivityIndicator size="large" color="#0000ff" />
//         ) : error ? (
//           <Text style={styles.error}>{error}</Text>
//         ) : slots.length > 0 ? (
//           <FlatList
//             data={slots}
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={({ item }) => (
//               <TouchableOpacity style={styles.slotItem}>
//                 <Text>{item.time}</Text>
//               </TouchableOpacity>
//             )}
//           />
//         ) : (
//           <Text style={styles.noSlots}>No slots available.</Text>
//         )}
//         <TouchableOpacity style={styles.closeButton} onPress={onClose}>
//           <Text style={styles.closeText}>Close</Text>
//         </TouchableOpacity>
//       </View>
//     </Modal>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   error: {
//     color: 'red',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   noSlots: {
//     color: 'gray',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   slotItem: {
//     padding: 10,
//     backgroundColor: '#f5f5f5',
//     marginVertical: 5,
//     borderRadius: 5,
//     width: '100%',
//   },
//   closeButton: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: '#007bff',
//     borderRadius: 5,
//   },
//   closeText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default AvailableSlotsPopup;




// const AvailableSlotsPopup = ({ isVisible, onClose, serviceId, resourceId, selectedDate }) => {
//   const [loading, setLoading] = useState(true);
//   const [slots, setSlots] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (isVisible) {
//       fetchAvailableSlots();
//     }
//   }, [isVisible, serviceId, resourceId, selectedDate]);

//   const fetchAvailableSlots = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const formattedDate = encodeURIComponent(selectedDate);
//       const response = await axios.get(
//         `https://www.zohoapis.in/bookings/v1/json/availableslots?service_id=${serviceId}&resource_id=${resourceId}&selected_date=${formattedDate}`,
//         {
//           headers: {
//             Authorization: 'Zoho-oauthtoken YOUR_ACCESS_TOKEN',
//           },
//         }
//       );
//       setSlots(response.data.data || []);
//     } catch (err) {
//       setError('Failed to fetch slots. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Modal isVisible={isVisible} onBackdropPress={onClose}>
//       <View style={styles.container}>
//         <Text style={styles.title}>Available Slots</Text>
//         {loading ? (
//           <ActivityIndicator size="large" color="#0000ff" />
//         ) : error ? (
//           <Text style={styles.error}>{error}</Text>
//         ) : slots.length > 0 ? (
//           <FlatList
//             data={slots}
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={({ item }) => (
//               <TouchableOpacity style={styles.slotItem}>
//                 <Text>{item.time}</Text>
//               </TouchableOpacity>
//             )}
//           />
//         ) : (
//           <Text style={styles.noSlots}>No slots available.</Text>
//         )}
//         <TouchableOpacity style={styles.closeButton} onPress={onClose}>
//           <Text style={styles.closeText}>Close</Text>
//         </TouchableOpacity>
//       </View>
//     </Modal>
//   );
// };



import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import axios from 'axios';

const AvailableSlotsPopup = ({ isVisible, onClose, serviceId, resourceId, selectedDate }) => {
  const [loading, setLoading] = useState(true);
  const [slots, setSlots] = useState([]);
  const [error, setError] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    if (isVisible) {
      getAccessToken().then(() => fetchAvailableSlots());
    }
  }, [isVisible, serviceId, resourceId, selectedDate]);

  // Function to get access token
  const getAccessToken = async () => {
    try {
      const response = await axios.post(
        'https://accounts.zoho.in/oauth/v2/token',
        null,
        {
          params: {
            refresh_token: '1000.85d3f4a03c84492bf6f45d64105a85ec.4aeb91af92260b688aa449da9e39bc1e',
            client_id: '1000.5V2JD5O0NSFV6PJ2I27YH7Y56YPH7Y',
            client_secret: 'f19efce90b5d48556bfe75ee45b598539a93996315',
            grant_type: 'refresh_token',
          },
        }
      );
      setAccessToken(response.data.access_token);
      console.log('Access token generated:', response.data.access_token);
    } catch (err) {
      console.error('Error fetching access token:', err);
      setError('Failed to retrieve access token. Please try again.');
    }
  };

  // Function to fetch available slots
  const fetchAvailableSlots = async () => {
    if (!accessToken) {
      setError('Access token is missing. Please try again.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formattedDate = encodeURIComponent(selectedDate);
      const response = await axios.get(
        `https://www.zohoapis.in/bookings/v1/json/availableslots?service_id=${serviceId}&resource_id=${resourceId}&selected_date=${formattedDate}`,
        {
          headers: {
            Authorization: `Zoho-oauthtoken ${accessToken}`,
          },
        }
      );

      const responseData = response.data.response.returnvalue;
      if (responseData && responseData.reponse && Array.isArray(responseData.data)) {
        setSlots(responseData.data);
      } else {
        setError('No available slots found.');
      }
    } catch (err) {
      console.error('Error fetching slots:', err);
      setError('Failed to fetch slots. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.container}>
        <Text style={styles.title}>Available Slots</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : error ? (
          <Text style={styles.error}>{error}</Text>
        ) : slots.length > 0 ? (
          <FlatList
            data={slots}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.slotItem}>
                <Text>{item}</Text> {/* Display each time slot directly */}
              </TouchableOpacity>
            )}
          />
        ) : (
          <Text style={styles.noSlots}>No slots available.</Text>
        )}
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  noSlots: {
    color: 'gray',
    textAlign: 'center',
    marginBottom: 10,
  },
  slotItem: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    marginVertical: 5,
    borderRadius: 5,
    width: '100%',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  closeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AvailableSlotsPopup;
