// // // // import React, { useEffect, useState } from 'react';
// // // // import { View, Text, ActivityIndicator, Alert, Button, StyleSheet, ScrollView } from 'react-native';

// // // // const ZohoLayoutFetcher = () => {
// // // //   const [accessToken, setAccessToken] = useState(null);
// // // //   const [data, setData] = useState([]);
// // // //   const [layoutId, setLayoutId] = useState([]);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState(null);

// // // //   const clientId = '1000.5V2JD5O0NSFV6PJ2I27YH7Y56YPH7Y'; // Replace with your client ID
// // // //    const clientSecret = 'f19efce90b5d48556bfe75ee45b598539a93996315'; // Replace with your client secret  
// // // //    const refreshToken = '1000.946ad993f27b2363dacd7d43155af671.9ce094a4408eb8b60ab16961671961a9'; // Replace with your refresh token
  

// // // //   // Fetch Access Token
// // // //   const fetchAccessToken = async () => {
// // // //     setLoading(true);
// // // //     setError(null);

// // // //     try {
// // // //       const response = await fetch(
// // // //         `https://accounts.zoho.in/oauth/v2/token?refresh_token=${refreshToken}&client_id=${clientId}&client_secret=${clientSecret}&grant_type=refresh_token`,
// // // //         {
// // // //           method: 'POST',
// // // //           headers: {
// // // //             'Content-Type': 'application/x-www-form-urlencoded',
// // // //           },
// // // //         }
// // // //       );

// // // //       if (!response.ok) {
// // // //         throw new Error('Failed to fetch access token');
// // // //       }

// // // //       const data = await response.json();
// // // //       setAccessToken(data.access_token);
// // // //     } catch (err) {
// // // //       setError(err.message);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   // Fetch Data from Zoho Creator API
// // // //   const fetchData = async () => {
// // // //     if (!accessToken) {
// // // //       Alert.alert("Access token is missing", "Please fetch the access token first.");
// // // //       return;
// // // //     }

// // // //     setLoading(true);
// // // //     setError(null);

// // // //     try {
// // // //       const response = await fetch(
// // // //         'https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/All_Layouts',
// // // //         {
// // // //           method: 'GET',
// // // //           headers: {
// // // //             'Authorization': `Zoho-oauthtoken ${accessToken}`,
// // // //           },
// // // //         }
// // // //       );

// // // //       if (!response.ok) {
// // // //         throw new Error('Failed to fetch data');
// // // //       }

// // // //       const result = await response.json();
// // // //       setData(result.data);
// // // //       console.log(result.data[0].ID);
// // // //       setLayoutId(result.data[0].ID);
// // // //     } catch (err) {
// // // //       setError(err.message);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     if (accessToken) {
// // // //       fetchData();
// // // //     }
// // // //   }, [accessToken]);

// // // //   return (
// // // //     <ScrollView contentContainerStyle={styles.container}>
// // // //       <Text style={styles.header}>Zoho Layout Data</Text>
      
// // // //       <Button title="Fetch Access Token" onPress={fetchAccessToken} />
      
// // // //       {loading && <ActivityIndicator size="large" color="#0000ff" />}
// // // //       {error && <Text style={styles.errorText}>Error: {error}</Text>}
      
// // // //       {data.length > 0 ? (
// // // //         data.map((item, index) => (
// // // //           <View key={index} style={styles.itemContainer}>
// // // //             <Text style={styles.itemText}>Layout ID: {item.LayoutId}</Text>
// // // //             <Text style={styles.itemText}>Name: {item.Name}</Text>
// // // //             <Text style={styles.itemText}>Layout Id: {layoutId}</Text>
// // // //             {/* Add more fields as needed */}
// // // //           </View>
// // // //         ))
// // // //       ) : (
// // // //         <Text>No data available</Text>
// // // //       )}
// // // //     </ScrollView>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     padding: 20,
// // // //     backgroundColor: '#f7f7f7',
// // // //   },
// // // //   header: {
// // // //     fontSize: 20,
// // // //     fontWeight: 'bold',
// // // //     marginBottom: 10,
// // // //     color: '#333',
// // // //   },
// // // //   errorText: {
// // // //     color: 'red',
// // // //     marginVertical: 10,
// // // //   },
// // // //   itemContainer: {
// // // //     marginBottom: 10,
// // // //     padding: 10,
// // // //     backgroundColor: '#fff',
// // // //     borderRadius: 8,
// // // //     shadowColor: '#000',
// // // //     shadowOffset: { width: 0, height: 2 },
// // // //     shadowOpacity: 0.1,
// // // //     shadowRadius: 4,
// // // //   },
// // // //   itemText: {
// // // //     fontSize: 16,
// // // //     color: '#333',
// // // //   },
// // // // });

// // // // export default ZohoLayoutFetcher;

// // // import React, { useEffect, useState } from 'react';
// // // import { View, Text, ActivityIndicator, Alert, Button, StyleSheet, ScrollView } from 'react-native';

// // // const ZohoLayoutFetcher = () => {
// // //   const [accessToken, setAccessToken] = useState(null);
// // //   const [data, setData] = useState([]);
// // //   const [layoutId, setLayoutId] = useState(null);
// // //   const [workstations, setWorkstations] = useState([]);
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState(null);

// // //   const clientId = '1000.5V2JD5O0NSFV6PJ2I27YH7Y56YPH7Y'; // Replace with your client ID
// // //   const clientSecret = 'f19efce90b5d48556bfe75ee45b598539a93996315'; // Replace with your client secret
// // //   const refreshToken = '1000.946ad993f27b2363dacd7d43155af671.9ce094a4408eb8b60ab16961671961a9'; // Replace with your refresh token

// // //   // Fetch Access Token
// // //   const fetchAccessToken = async () => {
// // //     setLoading(true);
// // //     setError(null);

// // //     try {
// // //       const response = await fetch(
// // //         `https://accounts.zoho.in/oauth/v2/token?refresh_token=${refreshToken}&client_id=${clientId}&client_secret=${clientSecret}&grant_type=refresh_token`,
// // //         {
// // //           method: 'POST',
// // //           headers: {
// // //             'Content-Type': 'application/x-www-form-urlencoded',
// // //           },
// // //         }
// // //       );

// // //       if (!response.ok) {
// // //         throw new Error('Failed to fetch access token');
// // //       }

// // //       const data = await response.json();
// // //       setAccessToken(data.access_token);
// // //     } catch (err) {
// // //       setError(err.message);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // Fetch Layout Data from Zoho Creator API
// // //   const fetchLayoutData = async () => {
// // //     if (!accessToken) {
// // //       Alert.alert("Access token is missing", "Please fetch the access token first.");
// // //       return;
// // //     }

// // //     setLoading(true);
// // //     setError(null);

// // //     try {
// // //       const response = await fetch(
// // //         'https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/All_Layouts',
// // //         {
// // //           method: 'GET',
// // //           headers: {
// // //             'Authorization': `Zoho-oauthtoken ${accessToken}`,
// // //           },
// // //         }
// // //       );

// // //       if (!response.ok) {
// // //         throw new Error('Failed to fetch layout data');
// // //       }

// // //       const result = await response.json();
// // //       setData(result.data);
// // //       const firstLayoutId = result.data[0].ID; // Assuming you need the first layout's ID
// // //       setLayoutId(firstLayoutId);
// // //       fetchWorkstations(firstLayoutId);
// // //     } catch (err) {
// // //       setError(err.message);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // Fetch Workstation Data for a Specific Layout
// // //   const fetchWorkstations = async (layoutId) => {
// // //     if (!accessToken) {
// // //       Alert.alert("Access token is missing", "Please fetch the access token first.");
// // //       return;
// // //     }

// // //     setLoading(true);
// // //     setError(null);

// // //     try {
// // //       const response = await fetch(
// // //         `https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/All_Workstations?criteria=(Layouts==${layoutId})`,
// // //         {
// // //           method: 'GET',
// // //           headers: {
// // //             'Authorization': `Zoho-oauthtoken ${accessToken}`,
// // //           },
// // //         }
// // //       );

// // //       if (!response.ok) {
// // //         throw new Error('Failed to fetch workstation data');
// // //       }

// // //       const result = await response.json();
// // //       setWorkstations(result.data);
// // //     } catch (err) {
// // //       setError(err.message);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     if (accessToken) {
// // //       fetchLayoutData();
// // //     }
// // //   }, [accessToken]);

// // //   return (
// // //     <ScrollView contentContainerStyle={styles.container}>
// // //       <Text style={styles.header}>Zoho Layout and Workstation Data</Text>
      
// // //       <Button title="Fetch Access Token" onPress={fetchAccessToken} />
      
// // //       {loading && <ActivityIndicator size="large" color="#0000ff" />}
// // //       {error && <Text style={styles.errorText}>Error: {error}</Text>}
      
// // //       {layoutId && (
// // //         <View>
// // //           <Text style={styles.itemText}>Current Layout ID: {layoutId}</Text>
// // //         </View>
// // //       )}
      
// // //       {workstations.length > 0 ? (
// // //         workstations.map((workstation, index) => (
// // //           <View key={index} style={styles.itemContainer}>
// // //             <Text style={styles.itemText}>Workstation ID: {workstation.ID}</Text>
// // //             <Text style={styles.itemText}>Name: {workstation.WorkstationId}</Text>
// // //             <Text style={styles.itemText}>Name: {workstation.Booking_Status}</Text>
// // //             {/* Add more fields as needed */}
// // //           </View>
// // //         ))
// // //       ) : (
// // //         <Text>No workstation data available</Text>
// // //       )}
// // //     </ScrollView>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     padding: 20,
// // //     backgroundColor: '#f7f7f7',
// // //   },
// // //   header: {
// // //     fontSize: 20,
// // //     fontWeight: 'bold',
// // //     marginBottom: 10,
// // //     color: '#333',
// // //   },
// // //   errorText: {
// // //     color: 'red',
// // //     marginVertical: 10,
// // //   },
// // //   itemContainer: {
// // //     marginBottom: 10,
// // //     padding: 10,
// // //     backgroundColor: '#fff',
// // //     borderRadius: 8,
// // //     shadowColor: '#000',
// // //     shadowOffset: { width: 0, height: 2 },
// // //     shadowOpacity: 0.1,
// // //     shadowRadius: 4,
// // //   },
// // //   itemText: {
// // //     fontSize: 16,
// // //     color: '#333',
// // //   },
// // // });

// // // export default ZohoLayoutFetcher;


// // import React, { useEffect, useState } from 'react';
// // import { View, Text, ActivityIndicator, Alert, Button, StyleSheet, ScrollView ,Image} from 'react-native';
// // // import { Image } from 'react-native-reanimated/lib/typescript/Animated';

// // const ZohoLayoutFetcher = () => {
// //   const [accessToken, setAccessToken] = useState(null);
// //   const [data, setData] = useState([]);
// //   const [layoutId, setLayoutId] = useState(null);
// //   const [workstations, setWorkstations] = useState([]);
// //   const [cabins, setCabins] = useState([]);
// //   const [meetingRooms, setMeetingRooms] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   const clientId = '1000.5V2JD5O0NSFV6PJ2I27YH7Y56YPH7Y'; // Replace with your client ID
// //   const clientSecret = 'f19efce90b5d48556bfe75ee45b598539a93996315'; // Replace with your client secret
// //   const refreshToken = '1000.946ad993f27b2363dacd7d43155af671.9ce094a4408eb8b60ab16961671961a9'; // Replace with your refresh token

// //   // Fetch Access Token
// //   const fetchAccessToken = async () => {
// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const response = await fetch(
// //         `https://accounts.zoho.in/oauth/v2/token?refresh_token=${refreshToken}&client_id=${clientId}&client_secret=${clientSecret}&grant_type=refresh_token`,
// //         {
// //           method: 'POST',
// //           headers: {
// //             'Content-Type': 'application/x-www-form-urlencoded',
// //           },
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error('Failed to fetch access token');
// //       }

// //       const data = await response.json();
// //       setAccessToken(data.access_token);
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Fetch Layout Data from Zoho Creator API
// //   const fetchLayoutData = async () => {
// //     if (!accessToken) {
// //       Alert.alert("Access token is missing", "Please fetch the access token first.");
// //       return;
// //     }

// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const response = await fetch(
// //         'https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/All_Layouts',
// //         {
// //           method: 'GET',
// //           headers: {
// //             'Authorization': `Zoho-oauthtoken ${accessToken}`,
// //           },
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error('Failed to fetch layout data');
// //       }

// //       const result = await response.json();
// //       setData(result.data);
// //       const firstLayoutId = result.data[0].ID; // Assuming you need the first layout's ID
// //       setLayoutId(firstLayoutId);
// //       fetchWorkstations(firstLayoutId);
// //       fetchCabins(firstLayoutId);
// //       fetchMeetingRooms(firstLayoutId);
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Fetch Workstation Data for a Specific Layout
// //   const fetchWorkstations = async (layoutId) => {
// //     if (!accessToken) {
// //       Alert.alert("Access token is missing", "Please fetch the access token first.");
// //       return;
// //     }

// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const response = await fetch(
// //         `https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/All_Workstations?criteria=(Layouts==${layoutId})`,
// //         {
// //           method: 'GET',
// //           headers: {
// //             'Authorization': `Zoho-oauthtoken ${accessToken}`,
// //           },
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error('Failed to fetch workstation data');
// //       }

// //       const result = await response.json();
// //       setWorkstations(result.data);
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Fetch Cabin Data for a Specific Layout
// //   const fetchCabins = async (layoutId) => {
// //     if (!accessToken) {
// //       Alert.alert("Access token is missing", "Please fetch the access token first.");
// //       return;
// //     }

// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const response = await fetch(
// //         `https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/Cabin_Report?criteria=(Layouts==${layoutId})`,
// //         {
// //           method: 'GET',
// //           headers: {
// //             'Authorization': `Zoho-oauthtoken ${accessToken}`,
// //           },
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error('Failed to fetch cabin data');
// //       }

// //       const result = await response.json();
// //       setCabins(result.data);
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Fetch Meeting Room Data for a Specific Layout
// //   const fetchMeetingRooms = async (layoutId) => {
// //     if (!accessToken) {
// //       Alert.alert("Access token is missing", "Please fetch the access token first.");
// //       return;
// //     }

// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const response = await fetch(
// //         `https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/Meeting_Room_Report?criteria=(Layouts==${layoutId})`,
// //         {
// //           method: 'GET',
// //           headers: {
// //             'Authorization': `Zoho-oauthtoken ${accessToken}`,
// //           },
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error('Failed to fetch meeting room data');
// //       }

// //       const result = await response.json();
// //       setMeetingRooms(result.data);
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     if (accessToken) {
// //       fetchLayoutData();
// //     }
// //   }, [accessToken]);

// //   const getImageForSpaceType = (type) => {
// //     switch (type) {
// //       case 'Workstation':
// //         return require('./assets/working.png');
// //       case 'Cabin':
// //         return require('./assets/location.png');
// //       case 'Meeting Room':
// //         return require('./assets/board-meeting.png');
// //       default:
// //         return require('./assets/working.png');
// //     }
// //   };



// //   return (
// //     <ScrollView contentContainerStyle={styles.container}>
// //       <Text style={styles.header}>Zoho Layout, Workstation, Cabin, and Meeting Room Data</Text>
      
// //       <Button title="Fetch Access Token" onPress={fetchAccessToken} />
      
// //       {loading && <ActivityIndicator size="large" color="#0000ff" />}
// //       {error && <Text style={styles.errorText}>Error: {error}</Text>}
      
// //       {layoutId && (
// //         <View>
// //           <Text style={styles.itemText}>Current Layout ID: {layoutId}</Text>
// //         </View>
// //       )}
      
// //       {workstations.length > 0 ? (
// //         <View>
// //           <Text style={styles.subHeader}>Workstations</Text>
// //           {workstations.map((workstation, index) => (
// //             <View key={index} style={styles.itemContainer}>
// //                 <Image source={url('./assets/working.png')}></Image>
// //               <Text style={styles.itemText}>Workstation ID: {workstation.ID}</Text>
// //               <Text style={styles.itemText}>Name: {workstation.Name}</Text>
// //               <Text style={styles.itemText}>Name: {workstation.WorkstationId}</Text>
// // //             <Text style={styles.itemText}>Name: {workstation.Booking_Status}</Text>
// // /
// //               {/* Add more fields as needed */}
// //             </View>
// //           ))}
// //         </View>
// //       ) : (
// //         <Text>No workstation data available</Text>
// //       )}

// //       {cabins.length > 0 ? (
// //         <View>
// //           <Text style={styles.subHeader}>Cabins</Text>
// //           {cabins.map((cabin, index) => (
// //             <View key={index} style={styles.itemContainer}>
// //               <Text style={styles.itemText}>Cabin ID: {cabin.ID}</Text>
// //               <Text style={styles.itemText}>Name: {cabin.Name}</Text>
// //               <Text style={styles.itemText}>Name: {cabin.WorkstationId}</Text>
// // //             <Text style={styles.itemText}>Name: {cabin.Booking_Status}</Text>
// // /
// //               {/* Add more fields as needed */}
// //             </View>
// //           ))}
// //         </View>
// //       ) : (
// //         <Text>No cabin data available</Text>
// //       )}

// //       {meetingRooms.length > 0 ? (
// //         <View>
// //           <Text style={styles.subHeader}>Meeting Rooms</Text>
// //           {meetingRooms.map((meetingRoom, index) => (
// //             <View key={index} style={styles.itemContainer}>
// //               <Text style={styles.itemText}>Meeting Room ID: {meetingRoom.ID}</Text>
// //               <Text style={styles.itemText}>Name: {meetingRoom.CabinId}</Text>
// //               <Text style={styles.itemText}>Name: {meetingRoom.WorkstationId}</Text>
// //               //             <Text style={styles.itemText}>Name: {meetingRoom.Booking_Status}</Text>
// //               {/* Add more fields as needed */}
// //             </View>
// //           ))}
// //         </View>
// //       ) : (
// //         <Text>No meeting room data available</Text>
// //       )}
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     padding: 20,
// //     backgroundColor: '#f7f7f7',
// //   },
// //   header: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //     color: '#333',
// //   },
// //   subHeader: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginTop: 15,
// //     color: '#333',
// //   },
// //   errorText: {
// //     color: 'red',
// //     marginVertical: 10,
// //   },
// //   itemContainer: {
// //     marginBottom: 10,
// //     padding: 10,
// //     backgroundColor: '#fff',
// //     borderRadius: 5,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 1 },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 1,
// //   },
// //   itemText: {
// //     fontSize: 16,
// //     color: '#333',
// //   },
// // });

// // export default ZohoLayoutFetcher;

// // import React, { useEffect, useState } from 'react';
// // import { View, Text, ActivityIndicator, Alert, Button, StyleSheet, ScrollView, Image } from 'react-native';

// // const ZohoLayoutFetcher = () => {
// //   const [accessToken, setAccessToken] = useState(null);
// //   const [data, setData] = useState([]);
// //   const [layoutId, setLayoutId] = useState(null);
// //   const [workstations, setWorkstations] = useState([]);
// //   const [cabins, setCabins] = useState([]);
// //   const [meetingRooms, setMeetingRooms] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   const clientId = '1000.5V2JD5O0NSFV6PJ2I27YH7Y56YPH7Y';
// //   const clientSecret = 'f19efce90b5d48556bfe75ee45b598539a93996315';
// //   const refreshToken = '1000.946ad993f27b2363dacd7d43155af671.9ce094a4408eb8b60ab16961671961a9';

// //   const getImageForSpaceType = (type) => {
// //     switch (type) {
// //       case 'Workstation':
// //         return require('./assets/working.png');
// //       case 'Cabin':
// //         return require('./assets/location.png');
// //       case 'Meeting Room':
// //         return require('./assets/board-meeting.png');
// //       default:
// //         return require('./assets/working.png');
// //     }
// //   };

// //   // Fetch Access Token
// //   const fetchAccessToken = async () => {
// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const response = await fetch(
// //         `https://accounts.zoho.in/oauth/v2/token?refresh_token=${refreshToken}&client_id=${clientId}&client_secret=${clientSecret}&grant_type=refresh_token`,
// //         {
// //           method: 'POST',
// //           headers: {
// //             'Content-Type': 'application/x-www-form-urlencoded',
// //           },
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error('Failed to fetch access token');
// //       }

// //       const data = await response.json();
// //       setAccessToken(data.access_token);
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Fetch Layout Data from Zoho Creator API
// //   const fetchLayoutData = async () => {
// //     if (!accessToken) {
// //       Alert.alert("Access token is missing", "Please fetch the access token first.");
// //       return;
// //     }

// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const response = await fetch(
// //         'https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/All_Layouts',
// //         {
// //           method: 'GET',
// //           headers: {
// //             'Authorization': `Zoho-oauthtoken ${accessToken}`,
// //           },
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error('Failed to fetch layout data');
// //       }

// //       const result = await response.json();
// //       setData(result.data);
// //       const firstLayoutId = result.data[0].ID; // Assuming you need the first layout's ID
// //       setLayoutId(firstLayoutId);
// //       fetchWorkstations(firstLayoutId);
// //       fetchCabins(firstLayoutId);
// //       fetchMeetingRooms(firstLayoutId);
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Fetch Workstation Data for a Specific Layout
// //   const fetchWorkstations = async (layoutId) => {
// //     if (!accessToken) {
// //       Alert.alert("Access token is missing", "Please fetch the access token first.");
// //       return;
// //     }

// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const response = await fetch(
// //         `https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/All_Workstations?criteria=(Layouts==${layoutId})`,
// //         {
// //           method: 'GET',
// //           headers: {
// //             'Authorization': `Zoho-oauthtoken ${accessToken}`,
// //           },
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error('Failed to fetch workstation data');
// //       }

// //       const result = await response.json();
// //       setWorkstations(result.data);
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Fetch Cabin Data for a Specific Layout
// //   const fetchCabins = async (layoutId) => {
// //     if (!accessToken) {
// //       Alert.alert("Access token is missing", "Please fetch the access token first.");
// //       return;
// //     }

// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const response = await fetch(
// //         `https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/Cabin_Report?criteria=(Layouts==${layoutId})`,
// //         {
// //           method: 'GET',
// //           headers: {
// //             'Authorization': `Zoho-oauthtoken ${accessToken}`,
// //           },
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error('Failed to fetch cabin data');
// //       }

// //       const result = await response.json();
// //       setCabins(result.data);
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Fetch Meeting Room Data for a Specific Layout
// //   const fetchMeetingRooms = async (layoutId) => {
// //     if (!accessToken) {
// //       Alert.alert("Access token is missing", "Please fetch the access token first.");
// //       return;
// //     }

// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const response = await fetch(
// //         `https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/Meeting_Room_Report?criteria=(Layouts==${layoutId})`,
// //         {
// //           method: 'GET',
// //           headers: {
// //             'Authorization': `Zoho-oauthtoken ${accessToken}`,
// //           },
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error('Failed to fetch meeting room data');
// //       }

// //       const result = await response.json();
// //       setMeetingRooms(result.data);
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Other functions remain the same: fetchAccessToken, fetchLayoutData, fetchWorkstations, fetchCabins, fetchMeetingRooms

// //   useEffect(() => {
// //     if (accessToken) {
// //       fetchLayoutData();
// //     }
// //   }, [accessToken]);

// //   return (
// //     <ScrollView contentContainerStyle={styles.container}>
// //       <Text style={styles.header}>Zoho Layout, Workstation, Cabin, and Meeting Room Data</Text>
      
// //       <Button title="Fetch Access Token" onPress={fetchAccessToken} />
      
// //       {loading && <ActivityIndicator size="large" color="#0000ff" />}
// //       {error && <Text style={styles.errorText}>Error: {error}</Text>}
      
// //       {layoutId && (
// //         <View>
// //           <Text style={styles.itemText}>Current Layout ID: {layoutId}</Text>
// //         </View>
// //       )}
      
// //       {workstations.length > 0 && (
// //         <View>
// //           <Text style={styles.subHeader}>Workstations</Text>
// //           {workstations.map((workstation, index) => (
// //             <View key={index} style={styles.itemContainer}>
// //               <Image source={getImageForSpaceType('Workstation')} style={styles.image} />
// //               <Text style={styles.itemText}>Workstation ID: {workstation.ID}</Text>
// //               <Text style={styles.itemText}>Name: {workstation.Name}</Text>
// //             </View>
// //           ))}
// //         </View>
// //       )}

// //       {cabins.length > 0 && (
// //         <View>
// //           <Text style={styles.subHeader}>Cabins</Text>
// //           {cabins.map((cabin, index) => (
// //             <View key={index} style={styles.itemContainer}>
// //               <Image source={getImageForSpaceType('Cabin')} style={styles.image} />
// //               <Text style={styles.itemText}>Cabin ID: {cabin.ID}</Text>
// //               <Text style={styles.itemText}>Name: {cabin.Name}</Text>
// //             </View>
// //           ))}
// //         </View>
// //       )}

// //       {meetingRooms.length > 0 && (
// //         <View>
// //           <Text style={styles.subHeader}>Meeting Rooms</Text>
// //           {meetingRooms.map((meetingRoom, index) => (
// //             <View key={index} style={styles.itemContainer}>
// //               <Image source={getImageForSpaceType('Meeting Room')} style={styles.image} />
// //               <Text style={styles.itemText}>Meeting Room ID: {meetingRoom.ID}</Text>
// //               <Text style={styles.itemText}>Name: {meetingRoom.Name}</Text>
// //             </View>
// //           ))}
// //         </View>
// //       )}
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     padding: 20,
// //     backgroundColor: '#f7f7f7',
// //   },
// //   header: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //     color: '#333',
// //   },
// //   subHeader: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginTop: 15,
// //     color: '#333',
// //   },
// //   errorText: {
// //     color: 'red',
// //     marginVertical: 10,
// //   },
// //   itemContainer: {
// //     marginBottom: 10,
// //     padding: 10,
// //     backgroundColor: '#fff',
// //     borderRadius: 5,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 1 },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 1,
// //     alignItems: 'center',
// //   },
// //   itemText: {
// //     fontSize: 16,
// //     color: '#333',
// //   },
// //   image: {
// //     width: 50,
// //     height: 50,
// //     marginBottom: 5,
// //   },
// // });

// // export default ZohoLayoutFetcher;

// // import React, { useEffect, useState } from 'react';
// // import { View, Text, ActivityIndicator, Alert, Button, StyleSheet, ScrollView, Image } from 'react-native';

// // const ZohoLayoutFetcher = () => {
// //   const [accessToken, setAccessToken] = useState(null);
// //   const [data, setData] = useState([]);
// //   const [layoutId, setLayoutId] = useState(null);
// //   const [workstations, setWorkstations] = useState([]);
// //   const [cabins, setCabins] = useState([]);
// //   const [meetingRooms, setMeetingRooms] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   const clientId = '1000.5V2JD5O0NSFV6PJ2I27YH7Y56YPH7Y';
// //   const clientSecret = 'f19efce90b5d48556bfe75ee45b598539a93996315';
// //   const refreshToken = '1000.946ad993f27b2363dacd7d43155af671.9ce094a4408eb8b60ab16961671961a9';

// //   const getImageForSpaceType = (type) => {
// //     switch (type) {
// //       case 'Workstation':
// //         return require('./assets/working.png');
// //       case 'Cabin':
// //         return require('./assets/location.png');
// //       case 'Meeting Room':
// //         return require('./assets/board-meeting.png');
// //       default:
// //         return require('./assets/working.png');
// //     }
// //   };

// //   const getBackgroundColorByStatus = (status) => {
// //     switch (status) {
// //       case 'open':
// //         return '#32CD32'; // Green
// //       case 'booked':
// //         return '#A9A9A9'; // Gray
// //       case 'blocked':
// //         return '#000000'; // Black
// //       default:
// //         return '#FFFFFF'; // Default white if status is unknown
// //     }
// //   };


// //   // Fetch Access Token
// //   const fetchAccessToken = async () => {
// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const response = await fetch(
// //         `https://accounts.zoho.in/oauth/v2/token?refresh_token=${refreshToken}&client_id=${clientId}&client_secret=${clientSecret}&grant_type=refresh_token`,
// //         {
// //           method: 'POST',
// //           headers: {
// //             'Content-Type': 'application/x-www-form-urlencoded',
// //           },
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error('Failed to fetch access token');
// //       }

// //       const data = await response.json();
// //       setAccessToken(data.access_token);
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Fetch Layout Data from Zoho Creator API
// //   const fetchLayoutData = async () => {
// //     if (!accessToken) {
// //       Alert.alert("Access token is missing", "Please fetch the access token first.");
// //       return;
// //     }

// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const response = await fetch(
// //         'https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/All_Layouts',
// //         {
// //           method: 'GET',
// //           headers: {
// //             'Authorization': `Zoho-oauthtoken ${accessToken}`,
// //           },
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error('Failed to fetch layout data');
// //       }

// //       const result = await response.json();
// //       setData(result.data);
// //       const firstLayoutId = result.data[0].ID; // Assuming you need the first layout's ID
// //       setLayoutId(firstLayoutId);
// //       fetchWorkstations(firstLayoutId);
// //       fetchCabins(firstLayoutId);
// //       fetchMeetingRooms(firstLayoutId);
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Fetch Workstation Data for a Specific Layout
// //   const fetchWorkstations = async (layoutId) => {
// //     if (!accessToken) {
// //       Alert.alert("Access token is missing", "Please fetch the access token first.");
// //       return;
// //     }

// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const response = await fetch(
// //         `https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/All_Workstations?criteria=(Layouts==${layoutId})`,
// //         {
// //           method: 'GET',
// //           headers: {
// //             'Authorization': `Zoho-oauthtoken ${accessToken}`,
// //           },
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error('Failed to fetch workstation data');
// //       }

// //       const result = await response.json();
// //       setWorkstations(result.data);
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Fetch Cabin Data for a Specific Layout
// //   const fetchCabins = async (layoutId) => {
// //     if (!accessToken) {
// //       Alert.alert("Access token is missing", "Please fetch the access token first.");
// //       return;
// //     }

// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const response = await fetch(
// //         `https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/Cabin_Report?criteria=(Layouts==${layoutId})`,
// //         {
// //           method: 'GET',
// //           headers: {
// //             'Authorization': `Zoho-oauthtoken ${accessToken}`,
// //           },
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error('Failed to fetch cabin data');
// //       }

// //       const result = await response.json();
// //       setCabins(result.data);
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Fetch Meeting Room Data for a Specific Layout
// //   const fetchMeetingRooms = async (layoutId) => {
// //     if (!accessToken) {
// //       Alert.alert("Access token is missing", "Please fetch the access token first.");
// //       return;
// //     }

// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const response = await fetch(
// //         `https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/Meeting_Room_Report?criteria=(Layouts==${layoutId})`,
// //         {
// //           method: 'GET',
// //           headers: {
// //             'Authorization': `Zoho-oauthtoken ${accessToken}`,
// //           },
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error('Failed to fetch meeting room data');
// //       }

// //       const result = await response.json();
// //       setMeetingRooms(result.data);
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Other functions remain the same: fetchAccessToken, fetchLayoutData, fetchWorkstations, fetchCabins, fetchMeetingRooms

// //   useEffect(() => {
// //     if (accessToken) {
// //       fetchLayoutData();
// //     }
// //   }, [accessToken]);
// //   // Other functions remain the same...

// //   return (
// //     <ScrollView contentContainerStyle={styles.container}>
// //       <Text style={styles.header}>Zoho Layout, Workstation, Cabin, and Meeting Room Data</Text>
      
// //       <Button title="Fetch Access Token" onPress={fetchAccessToken} />
      
// //       {loading && <ActivityIndicator size="large" color="#0000ff" />}
// //       {error && <Text style={styles.errorText}>Error: {error}</Text>}
      
// //       {layoutId && (
// //         <View>
// //           <Text style={styles.itemText}>Current Layout ID: {layoutId}</Text>
// //         </View>
// //       )}
      
// //       {workstations.length > 0 && (
// //         <View>
// //           <Text style={styles.subHeader}>Workstations</Text>
// //           {workstations.map((workstation, index) => (
// //             <View 
// //               key={index} 
// //               style={[
// //                 styles.itemContainer, 
// //                 { backgroundColor: getBackgroundColorByStatus(workstation.Booking_Status) }
// //               ]}
// //             >
// //               <Image source={getImageForSpaceType('Workstation')} style={styles.image} />
// //               {/* <Text style={styles.itemText}>Workstation ID: {workstation.ID}</Text> */}
// //               {/* <Text style={styles.itemText}>Name: {workstation.Name}</Text> */}
// //             </View>
// //           ))}
// //         </View>
// //       )}

// //       {cabins.length > 0 && (
// //         <View>
// //           <Text style={styles.subHeader}>Cabins</Text>
// //           {cabins.map((cabin, index) => (
// //             <View 
// //               key={index} 
// //               style={[
// //                 styles.itemContainer, 
// //                 { backgroundColor: getBackgroundColorByStatus(cabin.Booking_Status) }
// //               ]}
// //             >
// //               <Image source={getImageForSpaceType('Cabin')} style={styles.image} />
// //               {/* <Text style={styles.itemText}>Cabin ID: {cabin.ID}</Text> */}
// //               {/* <Text style={styles.itemText}>Name: {cabin.Name}</Text> */}
// //             </View>
// //           ))}
// //         </View>
// //       )}

// //       {meetingRooms.length > 0 && (
// //         <View>
// //           <Text style={styles.subHeader}>Meeting Rooms</Text>
// //           {meetingRooms.map((meetingRoom, index) => (
// //             <View 
// //               key={index} 
// //               style={[
// //                 styles.itemContainer, 
// //                 { backgroundColor: getBackgroundColorByStatus(meetingRoom.Booking_Status) }
// //               ]}
// //             >
// //               <Image source={getImageForSpaceType('Meeting Room')} style={styles.image} />
// //               {/* <Text style={styles.itemText}>Meeting Room ID: {meetingRoom.ID}</Text> */}
// //               {/* <Text style={styles.itemText}>Name: {meetingRoom.Name}</Text> */}
// //             </View>
// //           ))}
// //         </View>
// //       )}
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     padding: 20,
// //     backgroundColor: '#f7f7f7',
// //   },
// //   header: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //     color: '#333',
// //   },
// //   subHeader: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginTop: 15,
// //     color: '#333',
// //   },
// //   errorText: {
// //     color: 'red',
// //     marginVertical: 10,
// //   },
// //   itemContainer: {
// //     marginBottom: 10,
// //     padding: 10,
// //     borderRadius: 5,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 1 },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 1,
// //     alignItems: 'center',
// //   },
// //   itemText: {
// //     fontSize: 16,
// //     color: '#333',
// //   },
// //   image: {
// //     width: 50,
// //     height: 50,
// //     marginBottom: 5,
// //   },
// // });

// // export default ZohoLayoutFetcher;


// import React, { useEffect, useState } from 'react';
// import { View, Text, ActivityIndicator, Alert, Button, StyleSheet, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';

// const ZohoLayoutFetcher = () => {
//   const [accessToken, setAccessToken] = useState(null);
//   const [data, setData] = useState([]);
//   const [layoutId, setLayoutId] = useState(null);
//   const [workstations, setWorkstations] = useState([]);
//   const [cabins, setCabins] = useState([]);
//   const [meetingRooms, setMeetingRooms] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);

//   const clientId = '1000.5V2JD5O0NSFV6PJ2I27YH7Y56YPH7Y';
//   const clientSecret = 'f19efce90b5d48556bfe75ee45b598539a93996315';
//   const refreshToken = '1000.946ad993f27b2363dacd7d43155af671.9ce094a4408eb8b60ab16961671961a9';

//   const getImageForSpaceType = (type) => {
//     switch (type) {
//       case 'Workstation':
//         return require('./assets/working.png');
//       case 'Cabin':
//         return require('./assets/location.png');
//       case 'Meeting Room':
//         return require('./assets/board-meeting.png');
//       default:
//         return require('./assets/working.png');
//     }
//   };

//   const getBackgroundColorByStatus = (status) => {
//     switch (status) {
//       case 'open':
//         return '#32CD32'; // Green
//       case 'booked':
//         return '#A9A9A9'; // Gray
//       case 'blocked':
//         return '#000000'; // Black
//       default:
//         return '#FFFFFF'; // Default white if status is unknown
//     }
//   };

//   // Fetch Access Token
//   const fetchAccessToken = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(
//         `https://accounts.zoho.in/oauth/v2/token?refresh_token=${refreshToken}&client_id=${clientId}&client_secret=${clientSecret}&grant_type=refresh_token`,
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error('Failed to fetch access token');
//       }

//       const data = await response.json();
//       setAccessToken(data.access_token);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch Layout Data from Zoho Creator API
//   const fetchLayoutData = async () => {
//     if (!accessToken) {
//       Alert.alert("Access token is missing", "Please fetch the access token first.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(
//         'https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/All_Layouts',
//         {
//           method: 'GET',
//           headers: {
//             'Authorization': `Zoho-oauthtoken ${accessToken}`,
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error('Failed to fetch layout data');
//       }

//       const result = await response.json();
//       setData(result.data);
//       const firstLayoutId = result.data[0].ID;
//       setLayoutId(firstLayoutId);
//       fetchWorkstations(firstLayoutId);
//       fetchCabins(firstLayoutId);
//       fetchMeetingRooms(firstLayoutId);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch Workstation Data for a Specific Layout
//   const fetchWorkstations = async (layoutId) => {
//     if (!accessToken) {
//       Alert.alert("Access token is missing", "Please fetch the access token first.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(
//         `https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/All_Workstations?criteria=(Layouts==${layoutId})`,
//         {
//           method: 'GET',
//           headers: {
//             'Authorization': `Zoho-oauthtoken ${accessToken}`,
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error('Failed to fetch workstation data');
//       }

//       const result = await response.json();
//       setWorkstations(result.data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch Cabin Data for a Specific Layout
//   const fetchCabins = async (layoutId) => {
//     if (!accessToken) {
//       Alert.alert("Access token is missing", "Please fetch the access token first.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(
//         `https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/Cabin_Report?criteria=(Layouts==${layoutId})`,
//         {
//           method: 'GET',
//           headers: {
//             'Authorization': `Zoho-oauthtoken ${accessToken}`,
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error('Failed to fetch cabin data');
//       }

//       const result = await response.json();
//       setCabins(result.data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch Meeting Room Data for a Specific Layout
//   const fetchMeetingRooms = async (layoutId) => {
//     if (!accessToken) {
//       Alert.alert("Access token is missing", "Please fetch the access token first.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(
//         `https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/Meeting_Room_Report?criteria=(Layouts==${layoutId})`,
//         {
//           method: 'GET',
//           headers: {
//             'Authorization': `Zoho-oauthtoken ${accessToken}`,
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error('Failed to fetch meeting room data');
//       }

//       const result = await response.json();
//       setMeetingRooms(result.data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (accessToken) {
//       fetchLayoutData();
//     }
//   }, [accessToken]);

//   const handleItemClick = (item) => {
//     setSelectedItem(item);
//     setModalVisible(true);
//   };

//   const renderSpaceItem = (item, type) => (
//     <TouchableOpacity
//       key={item.ID}
//       style={[
//         styles.itemContainer,
//         { backgroundColor: getBackgroundColorByStatus(item.Booking_Status) }
//       ]}
//       onPress={() => handleItemClick(item)}
//     >
//       <Image source={getImageForSpaceType(type)} style={styles.image} />
//     </TouchableOpacity>
//   );

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.header}>Zoho Layout, Workstation, Cabin, and Meeting Room Data</Text>
//       <Button title="Fetch Access Token" onPress={fetchAccessToken} />
//       {loading && <ActivityIndicator size="large" color="#0000ff" />}
//       {error && <Text style={styles.errorText}>Error: {error}</Text>}

//       {workstations.length > 0 && (
//         <View>
//           <Text style={styles.subHeader}>Workstations</Text>
//           {workstations.map((workstation) => renderSpaceItem(workstation, 'Workstation'))}
//         </View>
//       )}

//       {cabins.length > 0 && (
//         <View>
//           <Text style={styles.subHeader}>Cabins</Text>
//           {cabins.map((cabin) => renderSpaceItem(cabin, 'Cabin'))}
//         </View>
//       )}

//       {meetingRooms.length > 0 && (
//         <View>
//           <Text style={styles.subHeader}>Meeting Rooms</Text>
//           {meetingRooms.map((meetingRoom) => renderSpaceItem(meetingRoom, 'Meeting Room'))}
//         </View>
//       )}
// {/* 
//       <Modal visible={modalVisible} transparent={true} animationType="slide">
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalText}>ID: {selectedItem?.ID}</Text>
//             <Text style={styles.modalText}>Status: {selectedItem?.Booking_Status}</Text>
//             <Text style={styles.modalText}>Price: {selectedItem?.Prices}</Text>
//             <Button title="Close" onPress={() => setModalVisible(false)} />
//             <Button title="Book" onPress={() => setModalVisible(false)} />
//           </View>
//         </View>
//       </Modal> */}

// <Modal visible={modalVisible} transparent={true} animationType="slide">
//   <View style={styles.modalContainer}>
//     <View style={styles.modalContent}>
//       <Text style={styles.modalText}>ID: {selectedItem?.ID}</Text>
//       <Text style={styles.modalText}>Status: {selectedItem?.Booking_Status}</Text>
//       <Text style={styles.modalText}>Price: {selectedItem?.Prices}</Text>

//       {/* Conditionally render the button based on the Booking_Status */}
//       {selectedItem?.Booking_Status === 'Open' && (
//         <Button
//           title="Book"
//           onPress={() => {
//             setModalVisible(false);
//             // Handle booking logic here
//             Alert.alert('Item booked!');
//           }}
//         />
//       )}
//       {selectedItem?.Booking_Status === 'Blocked' && (
//         <Button
//           title="Open"
//           onPress={() => {
//             setModalVisible(false);
//             // Handle open logic here
//             Alert.alert('Item status set to Open!');
//           }}
//         />
//       )}
//       {selectedItem?.Booking_Status === 'Booked' && (
//         <Button
//           title="Cancel"
//           onPress={() => {
//             setModalVisible(false);
//             // Handle cancel logic here
//             Alert.alert('Booking cancelled!');
//           }}
//         />
//       )}

//       {/* Close button for the modal */}
//       <Button
//         title="Close"
//         onPress={() => setModalVisible(false)}
//       />
//     </View>
//   </View>
// </Modal>

//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//       padding: 20,
//     },
//     header: {
//       fontSize: 20,
//       fontWeight: 'bold',
//       marginBottom: 10,
//     },
//     subHeader: {
//       fontSize: 18,
//       fontWeight: '600',
//       marginTop: 20,
//     },
//     errorText: {
//       color: 'red',
//       marginTop: 10,
//     },
//     itemContainer: {
//       margin: 10,
//       padding: 15,
//       borderRadius: 10,
//       alignItems: 'center',
//       borderWidth: 2, // Add border to highlight the color coding
//       borderColor: '#333333', // Dark border for contrast
//     },
//     image: {
//       width: 50,
//       height: 50,
//       marginBottom: 10, // Add spacing between image and status text
//     },
//     modalContainer: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: 'rgba(0,0,0,0.5)',
//     },
//     modalContent: {
//       backgroundColor: 'white',
//       padding: 20,
//       borderRadius: 10,
//       alignItems: 'center',
//     },
//     modalText: {
//       fontSize: 18,
//       marginBottom: 10,
//     },
//   });
  
// export default ZohoLayoutFetcher;

import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Alert, Button, StyleSheet, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const ZohoLayoutFetcher = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [data, setData] = useState([]);
  const [layoutId, setLayoutId] = useState(null);
  const [workstations, setWorkstations] = useState([]);
  const [cabins, setCabins] = useState([]);
  const [meetingRooms, setMeetingRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date()); // State for selected date
  const [showDatePicker, setShowDatePicker] = useState(false); // To toggle date picker visibility

  const clientId = '1000.5V2JD5O0NSFV6PJ2I27YH7Y56YPH7Y';
  const clientSecret = 'f19efce90b5d48556bfe75ee45b598539a93996315';
  const refreshToken = '1000.946ad993f27b2363dacd7d43155af671.9ce094a4408eb8b60ab16961671961a9';

  const getImageForSpaceType = (type) => {
    switch (type) {
      case 'Workstation':
        return require('./assets/working.png');
      case 'Cabin':
        return require('./assets/location.png');
      case 'Meeting Room':
        return require('./assets/board-meeting.png');
      default:
        return require('./assets/working.png');
    }
  };

  const getBackgroundColorByStatus = (status) => {
    switch (status) {
      case 'Open':
        return '#aef183'; // Green
      case 'Booked':
        return '#83dbf1'; // Gray
      case 'Blocked':
        return '#a7a1a0'; // Black
      default:
        return '#FFFFFF'; // Default white if status is unknown
    }
  };

  // Fetch Access Token
  const fetchAccessToken = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://accounts.zoho.in/oauth/v2/token?refresh_token=${refreshToken}&client_id=${clientId}&client_secret=${clientSecret}&grant_type=refresh_token`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch access token');
      }

      const data = await response.json();
      setAccessToken(data.access_token);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Layout Data from Zoho Creator API
  const fetchLayoutData = async () => {
    if (!accessToken) {
      Alert.alert("Access token is missing", "Please fetch the access token first.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        'https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/All_Layouts',
        {
          method: 'GET',
          headers: {
            'Authorization': `Zoho-oauthtoken ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch layout data');
      }

      const result = await response.json();
      setData(result.data);
      const firstLayoutId = result.data[0].ID;
      setLayoutId(firstLayoutId);
      fetchWorkstations(firstLayoutId);
      fetchCabins(firstLayoutId);
      fetchMeetingRooms(firstLayoutId);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Workstation Data for a Specific Layout
  const fetchWorkstations = async (layoutId) => {
    if (!accessToken) {
      Alert.alert("Access token is missing", "Please fetch the access token first.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/All_Workstations?criteria=(Layouts==${layoutId})`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Zoho-oauthtoken ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch workstation data');
      }

      const result = await response.json();
      setWorkstations(result.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Cabin Data for a Specific Layout
  const fetchCabins = async (layoutId) => {
    if (!accessToken) {
      Alert.alert("Access token is missing", "Please fetch the access token first.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/Cabin_Report?criteria=(Layouts==${layoutId})`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Zoho-oauthtoken ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch cabin data');
      }

      const result = await response.json();
      setCabins(result.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Meeting Room Data for a Specific Layout
  const fetchMeetingRooms = async (layoutId) => {
    if (!accessToken) {
      Alert.alert("Access token is missing", "Please fetch the access token first.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/Meeting_Room_Report?criteria=(Layouts==${layoutId})`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Zoho-oauthtoken ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch meeting room data');
      }

      const result = await response.json();
      setMeetingRooms(result.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (accessToken) {
      fetchLayoutData();
    }
  }, [accessToken]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const renderSpaceItem = (item, type) => (
    <TouchableOpacity
      key={item.ID}
      style={[
        styles.itemContainer,
        { backgroundColor: getBackgroundColorByStatus(item.Booking_Status) }
      ]}
      onPress={() => handleItemClick(item)}
    >
      <Image source={getImageForSpaceType(type)} style={styles.image} />
    </TouchableOpacity>
  );

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setSelectedDate(selectedDate);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Welcome To Nukleus Demo</Text>
      <Button title="Load Data" onPress={fetchAccessToken} />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.errorText}>Error: {error}</Text>}

      {/* Date Picker */}
      <Button title="Select Date" onPress={() => setShowDatePicker(true)} />
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}
      <Text style={styles.selectedDateText}>
        Selected Date: {selectedDate.toLocaleDateString()}
      </Text>

      {workstations.length > 0 && (
        <View>
          <Text style={styles.subHeader}>Workstations</Text>
          {workstations.map((workstation) => renderSpaceItem(workstation, 'Workstation'))}
        </View>
      )}

      {cabins.length > 0 && (
        <View>
          <Text style={styles.subHeader}>Cabins</Text>
          {cabins.map((cabin) => renderSpaceItem(cabin, 'Cabin'))}
        </View>
      )}

      {meetingRooms.length > 0 && (
        <View>
          <Text style={styles.subHeader}>Meeting Rooms</Text>
          {meetingRooms.map((meetingRoom) => renderSpaceItem(meetingRoom, 'Meeting Room'))}
        </View>
      )}

      {/* Modal for item details */}
      {/* <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          {selectedItem && (
            <>
              <Text style={styles.itemDetailText}>ID: {selectedItem.ID}</Text>
              <Text style={styles.itemDetailText}>Price: {selectedItem.Prices}</Text>
              <Text style={styles.itemDetailText}>Status: {selectedItem.Booking_Status}</Text>
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </>
          )}
        </View>
      </Modal> */}
      <Modal visible={modalVisible} transparent={false} animationType="slide">
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text style={styles.modalText}>ID: {selectedItem?.ID}</Text>
      <Text style={styles.modalText}>Status: {selectedItem?.Booking_Status}</Text>
      <Text style={styles.modalText}>Price: {selectedItem?.Prices}</Text>

      {/* Conditionally render the button based on the Booking_Status */}
      {selectedItem?.Booking_Status === 'Open' && (
        <Button
          title="Book"
          onPress={() => {
            setModalVisible(false);
            // Handle booking logic here
            Alert.alert('Item booked!');
          }}
          color="#4CAF50" // Green for booking
        />
      )}
      {selectedItem?.Booking_Status === 'Blocked' && (
        <Button
          title="Open"
          onPress={() => {
            setModalVisible(false);
            // Handle open logic here
            Alert.alert('Item status set to Open!');
          }}
          color="#FF9800" // Orange for opening blocked items
        />
      )}
      {selectedItem?.Booking_Status === 'Booked' && (
        <Button
          title="Cancel"
          onPress={() => {
            setModalVisible(false);
            // Handle cancel logic here
            Alert.alert('Booking cancelled!');
          }}
          color="#F44336" // Red for cancelling
        />
      )}

      {/* Close button for the modal */}
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setModalVisible(false)}
      >
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin:10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },
  itemContainer: {
    marginBottom: 10,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width:80,
  },
  image: {
    width: 40,
    height: 40,
  },
  selectedDateText: {
    fontSize: 16,
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  itemDetailText: {
    fontSize: 16,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#8B8B8B', // Gray color for close button
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  modalText: {
    fontSize: 16,
  }
});

export default ZohoLayoutFetcher;
