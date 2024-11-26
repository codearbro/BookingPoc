
// // // // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // // // import { View, Text, Button, ActivityIndicator, FlatList, StyleSheet,TouchableOpacity } from 'react-native';
// // // // // // // // // // import LayoutData from './LayoutData';

// // // // // // // // // // const clientId = '1000.5V2JD5O0NSFV6PJ2I27YH7Y56YPH7Y'; // Replace with your client ID
// // // // // // // // // //    const clientSecret = 'f19efce90b5d48556bfe75ee45b598539a93996315'; // Replace with your client secret  
// // // // // // // // // //      const refreshToken = '1000.946ad993f27b2363dacd7d43155af671.9ce094a4408eb8b60ab16961671961a9'; // Replace with your refresh token

// // // // // // // // // // const OfficeDataApp = () => {
// // // // // // // // // //   const [accessToken, setAccessToken] = useState(null);
// // // // // // // // // //   const [data, setData] = useState([]);
// // // // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // // // //   const [error, setError] = useState(null);

// // // // // // // // // //   const fetchAccessToken = async () => {
// // // // // // // // // //     setLoading(true);
// // // // // // // // // //     setError(null);
// // // // // // // // // //     console.log("Fetching access token...");

// // // // // // // // // //     try {
// // // // // // // // // //       const response = await fetch(
// // // // // // // // // //         `https://accounts.zoho.in/oauth/v2/token?refresh_token=${refreshToken}&client_id=${clientId}&client_secret=${clientSecret}&grant_type=refresh_token`,
// // // // // // // // // //         {
// // // // // // // // // //           method: 'POST',
// // // // // // // // // //           headers: {
// // // // // // // // // //             'Content-Type': 'application/x-www-form-urlencoded',
// // // // // // // // // //           },
// // // // // // // // // //         }
// // // // // // // // // //       );

// // // // // // // // // //       if (!response.ok) {
// // // // // // // // // //         throw new Error('Failed to fetch access token');
// // // // // // // // // //       }

// // // // // // // // // //       const data = await response.json();
// // // // // // // // // //       console.log("Access token fetched:", data.access_token);
// // // // // // // // // //       setAccessToken(data.access_token);
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       console.error("Error fetching access token:", err.message);
// // // // // // // // // //       setError(err.message);
// // // // // // // // // //     } finally {
// // // // // // // // // //       setLoading(false);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const fetchData = async () => {
// // // // // // // // // //     if (!accessToken) {
// // // // // // // // // //       console.log("No access token available");
// // // // // // // // // //       return;
// // // // // // // // // //     }

// // // // // // // // // //     setLoading(true);
// // // // // // // // // //     setError(null);
// // // // // // // // // //     console.log("Fetching data with access token:", accessToken);

// // // // // // // // // //     try {
// // // // // // // // // //       const response = await fetch(
// // // // // // // // // //         'https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/All_Layouts',
// // // // // // // // // //         {
// // // // // // // // // //           method: 'GET',
// // // // // // // // // //           headers: {
// // // // // // // // // //             'Authorization': `Zoho-oauthtoken ${accessToken}`,
// // // // // // // // // //           },
// // // // // // // // // //         }
// // // // // // // // // //       );

// // // // // // // // // //       if (!response.ok) {
// // // // // // // // // //         throw new Error('Failed to fetch data');
// // // // // // // // // //       }

// // // // // // // // // //       const result = await response.json();
// // // // // // // // // //       console.log("Data fetched successfully:", result);
// // // // // // // // // //       setData(result.data);
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       console.error("Error fetching data:", err.message);
// // // // // // // // // //       setError(err.message);
// // // // // // // // // //     } finally {
// // // // // // // // // //       setLoading(false);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     if (accessToken) {
// // // // // // // // // //       fetchData();
// // // // // // // // // //     }
// // // // // // // // // //   }, [accessToken]);

// // // // // // // // // //   // Recursive function to render nested data
// // // // // // // // // //   // const renderData = (item) => {
// // // // // // // // // //   //   return Object.entries(item).map(([key, value]) => {
// // // // // // // // // //   //     if (typeof value === 'object' && value !== null) {
// // // // // // // // // //   //       return (
// // // // // // // // // //   //         <View key={key} style={styles.nestedContainer}>
// // // // // // // // // //   //           <Text style={styles.nestedTitle}>{key}:</Text>
// // // // // // // // // //   //           <View>
// // // // // // // // // //   //             <Text>Layout Data</Text>
// // // // // // // // // //   //           {renderData(value)}  {/* Recursive call for nested objects */}
// // // // // // // // // //   //           </View>
// // // // // // // // // //   //         </View>
// // // // // // // // // //   //       );
// // // // // // // // // //   //     } else {
// // // // // // // // // //   //       return (
// // // // // // // // // //   //         <Text key={key} style={styles.itemText}>
// // // // // // // // // //   //           {key}: {String(value)}
// // // // // // // // // //   //         </Text>
// // // // // // // // // //   //       );
// // // // // // // // // //   //     }
// // // // // // // // // //   //   });
// // // // // // // // // //   // };

// // // // // // // // // //   const renderData = (item) => {
// // // // // // // // // //     return (
// // // // // // // // // //       <View>
// // // // // // // // // //         {item.ID && (
// // // // // // // // // //           <Text style={styles.itemText}>ID:- {item.ID}</Text>
// // // // // // // // // //         )}
// // // // // // // // // //         {Object.entries(item).map(([key, value]) => {
// // // // // // // // // //           if (key !== 'ID') { // Skip ID here since we displayed it above
// // // // // // // // // //             if (typeof value === 'object' && value !== null) {
// // // // // // // // // //               return (
// // // // // // // // // //                 <View key={key} style={styles.nestedContainer}>
// // // // // // // // // //                   <TouchableOpacity onPress={() => alert(`Id: ${JSON.stringify(value.ID)}`)}>
// // // // // // // // // //                   <Text style={styles.nestedTitle}>{key}:</Text>
// // // // // // // // // //                   {renderData(value)}  // Recursive call for nested objects
// // // // // // // // // //                   </TouchableOpacity>
// // // // // // // // // //                 </View>
// // // // // // // // // //               );
// // // // // // // // // //             } else {
// // // // // // // // // //               return (
// // // // // // // // // //                 <Text key={key} style={styles.itemText}>
// // // // // // // // // //                   {key}: {String(value)}
// // // // // // // // // //                 </Text>
// // // // // // // // // //               );
// // // // // // // // // //             }
// // // // // // // // // //           }
// // // // // // // // // //           return null;
// // // // // // // // // //         })}
// // // // // // // // // //       </View>
// // // // // // // // // //     );
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <View style={styles.container}>
// // // // // // // // // //       {!accessToken ? (
// // // // // // // // // //         <Button title="Fetch Access Token" onPress={fetchAccessToken} />
// // // // // // // // // //       ) : (
// // // // // // // // // //         <>
// // // // // // // // // //           <Button title="Fetch Data" onPress={fetchData} />
// // // // // // // // // //           {loading && <ActivityIndicator size="large" color="#0000ff" />}
// // // // // // // // // //           {error && <Text style={styles.errorText}>Error: {error}</Text>}
// // // // // // // // // //           <FlatList
// // // // // // // // // //             data={data}
// // // // // // // // // //             keyExtractor={(item, index) => index.toString()}
// // // // // // // // // //             renderItem={({ item }) => (
// // // // // // // // // //               <View style={styles.itemContainer}>
// // // // // // // // // //                 {renderData(item)}
// // // // // // // // // //               </View>
// // // // // // // // // //             )}
// // // // // // // // // //           />
// // // // // // // // // //         </>
// // // // // // // // // //       )}

// // // // // // // // // //       <LayoutData/>
// // // // // // // // // //     </View>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // //   container: {
// // // // // // // // // //     flex: 1,
// // // // // // // // // //     padding: 20,
// // // // // // // // // //   },
// // // // // // // // // //   errorText: {
// // // // // // // // // //     color: 'red',
// // // // // // // // // //     marginBottom: 10,
// // // // // // // // // //   },
// // // // // // // // // //   itemContainer: {
// // // // // // // // // //     padding: 10,
// // // // // // // // // //     marginVertical: 5,
// // // // // // // // // //     backgroundColor: '#f9f9f9',
// // // // // // // // // //     borderRadius: 5,
// // // // // // // // // //     borderWidth: 1,
// // // // // // // // // //     borderColor: '#ddd',
// // // // // // // // // //   },
// // // // // // // // // //   itemText: {
// // // // // // // // // //     fontSize: 14,
// // // // // // // // // //   },
// // // // // // // // // //   nestedContainer: {
// // // // // // // // // //     paddingLeft: 10,
// // // // // // // // // //     marginVertical: 5,
// // // // // // // // // //   },
// // // // // // // // // //   nestedTitle: {
// // // // // // // // // //     fontSize: 14,
// // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // //   },
// // // // // // // // // // });

// // // // // // // // // // export default OfficeDataApp;

// // // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // // import { View, Text, Button, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
// // // // // // // // // import LayoutData from './LayoutData';

// // // // // // // // // const clientId = '1000.5V2JD5O0NSFV6PJ2I27YH7Y56YPH7Y'; // Replace with your client ID
// // // // // // // // // const clientSecret = 'f19efce90b5d48556bfe75ee45b598539a93996315'; // Replace with your client secret  
// // // // // // // // // const refreshToken = '1000.946ad993f27b2363dacd7d43155af671.9ce094a4408eb8b60ab16961671961a9'; // Replace with your refresh token

// // // // // // // // // const OfficeDataApp = () => {
// // // // // // // // //   const [accessToken, setAccessToken] = useState(null);
// // // // // // // // //   const [data, setData] = useState([]);
// // // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // // //   const [error, setError] = useState(null);

// // // // // // // // //   const fetchAccessToken = async () => {
// // // // // // // // //     setLoading(true);
// // // // // // // // //     setError(null);
// // // // // // // // //     try {
// // // // // // // // //       const response = await fetch(
// // // // // // // // //         `https://accounts.zoho.in/oauth/v2/token?refresh_token=${refreshToken}&client_id=${clientId}&client_secret=${clientSecret}&grant_type=refresh_token`,
// // // // // // // // //         {
// // // // // // // // //           method: 'POST',
// // // // // // // // //           headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
// // // // // // // // //         }
// // // // // // // // //       );
// // // // // // // // //       const data = await response.json();
// // // // // // // // //       setAccessToken(data.access_token);
// // // // // // // // //     } catch (err) {
// // // // // // // // //       setError('Failed to fetch access token');
// // // // // // // // //     } finally {
// // // // // // // // //       setLoading(false);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const fetchData = async () => {
// // // // // // // // //     if (!accessToken) return;
// // // // // // // // //     setLoading(true);
// // // // // // // // //     setError(null);
// // // // // // // // //     try {
// // // // // // // // //       const response = await fetch(
// // // // // // // // //         'https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/All_Layouts',
// // // // // // // // //         {
// // // // // // // // //           method: 'GET',
// // // // // // // // //           headers: { 'Authorization': `Zoho-oauthtoken ${accessToken}` },
// // // // // // // // //         }
// // // // // // // // //       );
// // // // // // // // //       const result = await response.json();
// // // // // // // // //       console.log(result)
// // // // // // // // //       setData(result.data);
      
// // // // // // // // //       return result.data; // Return fetched data for LayoutData
// // // // // // // // //     } catch (err) {
// // // // // // // // //       setError('Failed to fetch data');
// // // // // // // // //     } finally {
// // // // // // // // //       setLoading(false);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     fetchAccessToken();
// // // // // // // // //   }, []);

// // // // // // // // //   return (
// // // // // // // // //     <View style={styles.container}>
// // // // // // // // //       {!accessToken ? (
// // // // // // // // //         <Button title="Fetch Access Token" onPress={fetchAccessToken} />
// // // // // // // // //       ) : (
// // // // // // // // //         <>
// // // // // // // // //           <Button title="Fetch Data" onPress={fetchData} />
// // // // // // // // //           {loading && <ActivityIndicator size="large" color="#0000ff" />}
// // // // // // // // //           {error && <Text style={styles.errorText}>{error}</Text>}
// // // // // // // // //           <LayoutData fetchSpacesData={fetchData} />
// // // // // // // // //         </>
// // // // // // // // //       )}
// // // // // // // // //     </View>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // //   container: {
// // // // // // // // //     flex: 1,
// // // // // // // // //     padding: 20,
// // // // // // // // //   },
// // // // // // // // //   errorText: {
// // // // // // // // //     color: 'red',
// // // // // // // // //     marginBottom: 10,
// // // // // // // // //   },
// // // // // // // // // });

// // // // // // // // // export default OfficeDataApp;
// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
// // // // // // // // import LayoutData from './LayoutData';

// // // // // // // // const clientId = '1000.5V2JD5O0NSFV6PJ2I27YH7Y56YPH7Y'; // Replace with your client ID
// // // // // // // // const clientSecret = 'f19efce90b5d48556bfe75ee45b598539a93996315'; // Replace with your client secret  
// // // // // // // // const refreshToken = '1000.946ad993f27b2363dacd7d43155af671.9ce094a4408eb8b60ab16961671961a9'; // Replace with your refresh token

// // // // // // // // const OfficeDataApp = () => {
// // // // // // // //   const [accessToken, setAccessToken] = useState(null);
// // // // // // // //   const [data, setData] = useState([]);
// // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // //   const [error, setError] = useState(null);

// // // // // // // //   // Fetch access token from Zoho
// // // // // // // //   const fetchAccessToken = async () => {
// // // // // // // //     setLoading(true);
// // // // // // // //     setError(null);
// // // // // // // //     try {
// // // // // // // //       const response = await fetch(
// // // // // // // //         `https://accounts.zoho.in/oauth/v2/token?refresh_token=${refreshToken}&client_id=${clientId}&client_secret=${clientSecret}&grant_type=refresh_token`,
// // // // // // // //         {
// // // // // // // //           method: 'POST',
// // // // // // // //           headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
// // // // // // // //         }
// // // // // // // //       );
// // // // // // // //       const data = await response.json();
// // // // // // // //       setAccessToken(data.access_token);
// // // // // // // //     } catch (err) {
// // // // // // // //       setError('Failed to fetch access token');
// // // // // // // //     } finally {
// // // // // // // //       setLoading(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // Fetch data from Zoho API
// // // // // // // //   const fetchData = async () => {
// // // // // // // //     if (!accessToken) return;
// // // // // // // //     setLoading(true);
// // // // // // // //     setError(null);
// // // // // // // //     try {
// // // // // // // //       const response = await fetch(
// // // // // // // //         'https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/All_Layouts',
// // // // // // // //         {
// // // // // // // //           method: 'GET',
// // // // // // // //           headers: { 'Authorization': `Zoho-oauthtoken ${accessToken}` },
// // // // // // // //         }
// // // // // // // //       );
// // // // // // // //       const result = await response.json();
// // // // // // // //       setData(result.data);
// // // // // // // //     } catch (err) {
// // // // // // // //       setError('Failed to fetch data');
// // // // // // // //     } finally {
// // // // // // // //       setLoading(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <View style={styles.container}>
// // // // // // // //       {!accessToken ? (
// // // // // // // //         <Button title="Fetch Access Token" onPress={fetchAccessToken} />
// // // // // // // //       ) : (
// // // // // // // //         <>
// // // // // // // //           <Button title="Fetch Data" onPress={fetchData} />
// // // // // // // //           {loading && <ActivityIndicator size="large" color="#0000ff" />}
// // // // // // // //           {error && <Text style={styles.errorText}>{error}</Text>}
// // // // // // // //           <LayoutData spaces={data} />
// // // // // // // //         </>
// // // // // // // //       )}
// // // // // // // //     </View>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // const styles = StyleSheet.create({
// // // // // // // //   container: {
// // // // // // // //     flex: 1,
// // // // // // // //     padding: 20,
// // // // // // // //   },
// // // // // // // //   errorText: {
// // // // // // // //     color: 'red',
// // // // // // // //     marginBottom: 10,
// // // // // // // //   },
// // // // // // // // });

// // // // // // // // export default OfficeDataApp;
// // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // import { View, Text, Button, ActivityIndicator, FlatList, StyleSheet, Alert } from 'react-native';

// // // // // // // const clientId = '1000.5V2JD5O0NSFV6PJ2I27YH7Y56YPH7Y'; // Replace with your client ID
// // // // // // // const clientSecret = 'f19efce90b5d48556bfe75ee45b598539a93996315'; // Replace with your client secret  
// // // // // // // const refreshToken = '1000.946ad993f27b2363dacd7d43155af671.9ce094a4408eb8b60ab16961671961a9'; // Replace with your refresh token

// // // // // // // const OfficeDataApp = () => {
// // // // // // //   const [accessToken, setAccessToken] = useState(null);
// // // // // // //   const [data, setData] = useState([]);
// // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // //   const [error, setError] = useState(null);

// // // // // // //   const fetchAccessToken = async () => {
// // // // // // //     setLoading(true);
// // // // // // //     setError(null);

// // // // // // //     try {
// // // // // // //       const response = await fetch(
// // // // // // //         `https://accounts.zoho.in/oauth/v2/token?refresh_token=${refreshToken}&client_id=${clientId}&client_secret=${clientSecret}&grant_type=refresh_token`,
// // // // // // //         {
// // // // // // //           method: 'POST',
// // // // // // //           headers: {
// // // // // // //             'Content-Type': 'application/x-www-form-urlencoded',
// // // // // // //           },
// // // // // // //         }
// // // // // // //       );

// // // // // // //       if (!response.ok) {
// // // // // // //         throw new Error('Failed to fetch access token');
// // // // // // //       }

// // // // // // //       const data = await response.json();
// // // // // // //       setAccessToken(data.access_token);
// // // // // // //     } catch (err) {
// // // // // // //       setError(err.message);
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const fetchData = async () => {
// // // // // // //     if (!accessToken) {
// // // // // // //       Alert.alert("Access token is missing", "Please fetch the access token first.");
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     setLoading(true);
// // // // // // //     setError(null);

// // // // // // //     try {
// // // // // // //       const response = await fetch(
// // // // // // //         'https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/All_Layouts',
// // // // // // //         {
// // // // // // //           method: 'GET',
// // // // // // //           headers: {
// // // // // // //             'Authorization': `Zoho-oauthtoken ${accessToken}`,
// // // // // // //           },
// // // // // // //         }
// // // // // // //       );

// // // // // // //       if (!response.ok) {
// // // // // // //         throw new Error('Failed to fetch data');
// // // // // // //       }

// // // // // // //       const result = await response.json();
// // // // // // //       setData(result.data);
// // // // // // //     } catch (err) {
// // // // // // //       setError(err.message);
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     if (accessToken) {
// // // // // // //       fetchData();
// // // // // // //     }
// // // // // // //   }, [accessToken]);

// // // // // // //   const renderItem = ({ item, index }) => (
// // // // // // //     <View style={styles.itemContainer}>
// // // // // // //       <Text style={styles.itemText}>ID: {item.ID || `No ID (index: ${index})`}</Text>
// // // // // // //       <Text style={styles.itemText}>Display Value: {item.display_value}</Text>
// // // // // // //       {/* Render other data fields here */}
// // // // // // //     </View>
// // // // // // //   );

// // // // // // //   return (
// // // // // // //     <View style={styles.container}>
// // // // // // //       {!accessToken ? (
// // // // // // //         <Button title="Fetch Access Token" onPress={fetchAccessToken} />
// // // // // // //       ) : (
// // // // // // //         <>
// // // // // // //           <Button title="Fetch Data" onPress={fetchData} />
// // // // // // //           {loading && <ActivityIndicator size="large" color="#0000ff" />}
// // // // // // //           {error && <Text style={styles.errorText}>Error: {error}</Text>}
// // // // // // //           <FlatList
// // // // // // //             data={data}
// // // // // // //             keyExtractor={(item, index) => item.ID ? item.ID.toString() : `key-${index}`}
// // // // // // //             renderItem={renderItem}
// // // // // // //             ListEmptyComponent={<Text>No data available</Text>}
// // // // // // //           />
// // // // // // //         </>
// // // // // // //       )}
// // // // // // //     </View>
// // // // // // //   );
// // // // // // // };

// // // // // // // const styles = StyleSheet.create({
// // // // // // //   container: {
// // // // // // //     flex: 1,
// // // // // // //     padding: 20,
// // // // // // //   },
// // // // // // //   errorText: {
// // // // // // //     color: 'red',
// // // // // // //     marginBottom: 10,
// // // // // // //   },
// // // // // // //   itemContainer: {
// // // // // // //     padding: 10,
// // // // // // //     marginVertical: 5,
// // // // // // //     backgroundColor: '#f9f9f9',
// // // // // // //     borderRadius: 5,
// // // // // // //     borderWidth: 1,
// // // // // // //     borderColor: '#ddd',
// // // // // // //   },
// // // // // // //   itemText: {
// // // // // // //     fontSize: 14,
// // // // // // //   },
// // // // // // // });

// // // // // // // export default OfficeDataApp;

// // // // // // import React, { useEffect, useState } from 'react';
// // // // // // import { View, Text, Button, ActivityIndicator, FlatList, StyleSheet, Alert } from 'react-native';

// // // // // // const clientId = '1000.5V2JD5O0NSFV6PJ2I27YH7Y56YPH7Y'; // Replace with your client ID
// // // // // // const clientSecret = 'f19efce90b5d48556bfe75ee45b598539a93996315'; // Replace with your client secret  
// // // // // // const refreshToken = '1000.946ad993f27b2363dacd7d43155af671.9ce094a4408eb8b60ab16961671961a9'; // Replace with your refresh token

// // // // // // const OfficeDataApp = () => {
// // // // // //   const [accessToken, setAccessToken] = useState(null);
// // // // // //   const [data, setData] = useState([]);
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [error, setError] = useState(null);

// // // // // //   // Fetch Access Token
// // // // // //   const fetchAccessToken = async () => {
// // // // // //     setLoading(true);
// // // // // //     setError(null);

// // // // // //     try {
// // // // // //       const response = await fetch(
// // // // // //         `https://accounts.zoho.in/oauth/v2/token?refresh_token=${refreshToken}&client_id=${clientId}&client_secret=${clientSecret}&grant_type=refresh_token`,
// // // // // //         {
// // // // // //           method: 'POST',
// // // // // //           headers: {
// // // // // //             'Content-Type': 'application/x-www-form-urlencoded',
// // // // // //           },
// // // // // //         }
// // // // // //       );

// // // // // //       if (!response.ok) {
// // // // // //         throw new Error('Failed to fetch access token');
// // // // // //       }

// // // // // //       const data = await response.json();
// // // // // //       setAccessToken(data.access_token);
// // // // // //     } catch (err) {
// // // // // //       setError(err.message);
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   // Fetch Data from Zoho Creator API
// // // // // //   const fetchData = async () => {
// // // // // //     if (!accessToken) {
// // // // // //       Alert.alert("Access token is missing", "Please fetch the access token first.");
// // // // // //       return;
// // // // // //     }

// // // // // //     setLoading(true);
// // // // // //     setError(null);

// // // // // //     try {
// // // // // //       const response = await fetch(
// // // // // //         'https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/All_Layouts',
// // // // // //         {
// // // // // //           method: 'GET',
// // // // // //           headers: {
// // // // // //             'Authorization': `Zoho-oauthtoken ${accessToken}`,
// // // // // //           },
// // // // // //         }
// // // // // //       );

// // // // // //       if (!response.ok) {
// // // // // //         throw new Error('Failed to fetch data');
// // // // // //       }

// // // // // //       const result = await response.json();
// // // // // //       setData(result.data);
// // // // // //     } catch (err) {
// // // // // //       setError(err.message);
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     if (accessToken) {
// // // // // //       fetchData();
// // // // // //     }
// // // // // //   }, [accessToken]);

// // // // // //   // Render Nested Data (handling objects within fields)
// // // // // //   const renderNestedItem = (key, value) => {
// // // // // //     if (typeof value === 'object' && value !== null) {
// // // // // //       // If value is an object, render its nested properties
// // // // // //       return (
// // // // // //         <View key={key} style={{ marginLeft: 10 }}>
// // // // // //           <Text style={styles.itemText}>{key}:</Text>
// // // // // //           {Object.entries(value).map(([nestedKey, nestedValue]) =>
// // // // // //             renderNestedItem(nestedKey, nestedValue)
// // // // // //           )}
// // // // // //         </View>
// // // // // //       );
// // // // // //     } else {
// // // // // //       // If value is not an object, render it as a simple text entry
// // // // // //       return (
// // // // // //         <Text key={key} style={styles.itemText}>
// // // // // //           {key}: {value !== null ? value.toString() : 'N/A'}
// // // // // //         </Text>
// // // // // //       );
// // // // // //     }
// // // // // //   };

// // // // // //   const renderItem = ({ item }) => (
// // // // // //     <View style={styles.itemContainer}>
// // // // // //       {Object.entries(item).map(([key, value]) => renderNestedItem(key, value))}
// // // // // //     </View>
// // // // // //   );

// // // // // //   return (
// // // // // //     <View style={styles.container}>
// // // // // //       {!accessToken ? (
// // // // // //         <Button title="Fetch Access Token" onPress={fetchAccessToken} />
// // // // // //       ) : (
// // // // // //         <>
// // // // // //           <Button title="Fetch Data" onPress={fetchData} />
// // // // // //           {loading && <ActivityIndicator size="large" color="#0000ff" />}
// // // // // //           {error && <Text style={styles.errorText}>Error: {error}</Text>}
// // // // // //           <FlatList
// // // // // //             data={data}
// // // // // //             keyExtractor={(item, index) => item.ID ? item.ID.toString() : `key-${index}`}
// // // // // //             renderItem={renderItem}
// // // // // //             ListEmptyComponent={<Text>No data available</Text>}
// // // // // //           />
// // // // // //         </>
// // // // // //       )}
// // // // // //     </View>
// // // // // //   );
// // // // // // };

// // // // // // const styles = StyleSheet.create({
// // // // // //   container: {
// // // // // //     flex: 1,
// // // // // //     padding: 20,
// // // // // //   },
// // // // // //   errorText: {
// // // // // //     color: 'red',
// // // // // //     marginBottom: 10,
// // // // // //   },
// // // // // //   itemContainer: {
// // // // // //     padding: 10,
// // // // // //     marginVertical: 5,
// // // // // //     backgroundColor: '#f9f9f9',
// // // // // //     borderRadius: 5,
// // // // // //     borderWidth: 1,
// // // // // //     borderColor: '#ddd',
// // // // // //   },
// // // // // //   itemText: {
// // // // // //     fontSize: 14,
// // // // // //   },
// // // // // // });

// // // // // // export default OfficeDataApp;
// // // // // import React, { useEffect, useState } from 'react';
// // // // // import { View, Text, Button, ActivityIndicator, FlatList, StyleSheet, Alert, Image } from 'react-native';

// // // // // const clientId = '1000.5V2JD5O0NSFV6PJ2I27YH7Y56YPH7Y'; // Replace with your client ID
// // // // // const clientSecret = 'f19efce90b5d48556bfe75ee45b598539a93996315'; // Replace with your client secret  
// // // // // const refreshToken = '1000.946ad993f27b2363dacd7d43155af671.9ce094a4408eb8b60ab16961671961a9'; // Replace with your refresh token

// // // // // const OfficeDataApp = () => {
// // // // //   const [accessToken, setAccessToken] = useState(null);
// // // // //   const [data, setData] = useState([]);
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [error, setError] = useState(null);

// // // // //   const fetchAccessToken = async () => {
// // // // //     setLoading(true);
// // // // //     setError(null);

// // // // //     try {
// // // // //       const response = await fetch(
// // // // //         `https://accounts.zoho.in/oauth/v2/token?refresh_token=${refreshToken}&client_id=${clientId}&client_secret=${clientSecret}&grant_type=refresh_token`,
// // // // //         {
// // // // //           method: 'POST',
// // // // //           headers: {
// // // // //             'Content-Type': 'application/x-www-form-urlencoded',
// // // // //           },
// // // // //         }
// // // // //       );

// // // // //       if (!response.ok) {
// // // // //         throw new Error('Failed to fetch access token');
// // // // //       }

// // // // //       const data = await response.json();
// // // // //       setAccessToken(data.access_token);
// // // // //     } catch (err) {
// // // // //       setError(err.message);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const fetchData = async () => {
// // // // //     if (!accessToken) {
// // // // //       Alert.alert("Access token is missing", "Please fetch the access token first.");
// // // // //       return;
// // // // //     }

// // // // //     setLoading(true);
// // // // //     setError(null);

// // // // //     try {
// // // // //       const response = await fetch(
// // // // //         'https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/All_Layouts',
// // // // //         {
// // // // //           method: 'GET',
// // // // //           headers: {
// // // // //             'Authorization': `Zoho-oauthtoken ${accessToken}`,
// // // // //           },
// // // // //         }
// // // // //       );

// // // // //       if (!response.ok) {
// // // // //         throw new Error('Failed to fetch data');
// // // // //       }

// // // // //       const result = await response.json();
// // // // //       setData(result.data);
// // // // //     } catch (err) {
// // // // //       setError(err.message);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     if (accessToken) {
// // // // //       fetchData();
// // // // //     }
// // // // //   }, [accessToken]);

// // // // //   // Function to get image based on space type
// // // // //   const getImageForSpaceType = (type) => {
// // // // //     switch (type) {
// // // // //       case 'Desk':
// // // // //         return require('./assets/working.png');  // Replace with your local image
// // // // //       case 'Meeting Room':
// // // // //         return require('./assets/working.png');  // Replace with your local image
// // // // //       default:
// // // // //         return require('./assets/working.png');  // Fallback image
// // // // //     }
// // // // //   };

// // // // //   const renderItem = ({ item, index }) => (
// // // // //     <View style={styles.itemContainer}>
// // // // //       {/* Image */}
// // // // //       <Image source={getImageForSpaceType(item.type)} style={styles.image} />
      
// // // // //       {/* Space Details */}
// // // // //       <Text style={styles.itemText}><Text style={styles.bold}>ID:</Text> {item.ID || 'N/A'}</Text>
// // // // //       <Text style={styles.itemText}><Text style={styles.bold}>Type:</Text> {item.type || 'N/A'}</Text>
// // // // //       <Text style={styles.itemText}><Text style={styles.bold}>Location:</Text> {item.location || 'N/A'}</Text>
// // // // //       <Text style={styles.itemText}><Text style={styles.bold}>Capacity:</Text> {item.capacity || 'N/A'}</Text>
// // // // //       <Text style={styles.itemText}><Text style={styles.bold}>Status:</Text> {item.status || 'N/A'}</Text>
// // // // //     </View>
// // // // //   );

// // // // //   return (
// // // // //     <View style={styles.container}>
// // // // //       {!accessToken ? (
// // // // //         <Button title="Fetch Access Token" onPress={fetchAccessToken} />
// // // // //       ) : (
// // // // //         <>
// // // // //           <Button title="Fetch Data" onPress={fetchData} />
// // // // //           {loading && <ActivityIndicator size="large" color="#0000ff" />}
// // // // //           {error && <Text style={styles.errorText}>Error: {error}</Text>}
// // // // //           <FlatList
// // // // //             data={data}
// // // // //             keyExtractor={(item, index) => item.ID ? item.ID.toString() : `key-${index}`}
// // // // //             renderItem={renderItem}
// // // // //             ListEmptyComponent={<Text>No data available</Text>}
// // // // //           />
// // // // //         </>
// // // // //       )}
// // // // //     </View>
// // // // //   );
// // // // // };

// // // // // const styles = StyleSheet.create({
// // // // //   container: {
// // // // //     flex: 1,
// // // // //     padding: 20,
// // // // //   },
// // // // //   errorText: {
// // // // //     color: 'red',
// // // // //     marginBottom: 10,
// // // // //   },
// // // // //   itemContainer: {
// // // // //     padding: 10,
// // // // //     marginVertical: 5,
// // // // //     backgroundColor: '#f9f9f9',
// // // // //     borderRadius: 5,
// // // // //     borderWidth: 1,
// // // // //     borderColor: '#ddd',
// // // // //     alignItems: 'center',  // Align items in the center
// // // // //   },
// // // // //   itemText: {
// // // // //     fontSize: 14,
// // // // //     marginVertical: 5,
// // // // //   },
// // // // //   bold: {
// // // // //     fontWeight: 'bold',
// // // // //   },
// // // // //   image: {
// // // // //     width: 100,
// // // // //     height: 100,
// // // // //     marginBottom: 10,
// // // // //   },
// // // // // });

// // // // // export default OfficeDataApp;

// // // // import React, { useEffect, useState } from 'react';
// // // // import { View, Text, Button, ActivityIndicator, FlatList, StyleSheet, Alert, Image } from 'react-native';

// // // // const OfficeDataApp = () => {
// // // //   const [data, setData] = useState([]);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState(null);

// // // //   const mockData = {
// // // //     "code": 3000,
// // // //     "data": [
// // // //       {
// // // //         "Workstation": [
// // // //           { "display_value": "WORK2", "ID": "47090000002059224" },
// // // //           { "display_value": "WORK1", "ID": "47090000002059228" },
// // // //           { "display_value": "WORK3", "ID": "47090000002059232" },
// // // //           { "display_value": "WORK4", "ID": "47090000002059236" },
// // // //           { "display_value": "WORK5", "ID": "47090000002059240" }
// // // //         ],
// // // //         "Cabin": [{ "display_value": "CAB1", "ID": "47090000002059260" }],
// // // //         "Assign_Member": [{ "display_value": "Suraj", "ID": "47090000002059430" }],
// // // //         "LayoutId": "SEC51",
// // // //         "ID": "47090000002059220",
// // // //         "Meeting_Room": [
// // // //           { "display_value": "MEET4", "ID": "47090000002059244" },
// // // //           { "display_value": "MEET3", "ID": "47090000002059248" },
// // // //           { "display_value": "MEET2", "ID": "47090000002059252" },
// // // //           { "display_value": "MEET1", "ID": "47090000002059256" }
// // // //         ],
// // // //         "Offices": { "display_value": "GUR", "ID": "47090000002059216" },
// // // //         "Name": "Sector 51"
// // // //       }
// // // //     ]
// // // //   };

// // // //   useEffect(() => {
// // // //     // Simulating fetching the mock data
// // // //     setData(mockData.data);
// // // //   }, []);

// // // //   // Function to get image based on space type
// // // //   const getImageForSpaceType = (type) => {
// // // //     switch (type) {
// // // //       case 'Workstation':
// // // //         return require('./assets/working.png');  // Replace with your local image path
// // // //       case 'Cabin':
// // // //         return require('./assets/location.png');  // Replace with your local image path
// // // //       case 'Meeting Room':
// // // //         return require('./assets/board-meeting.png');  // Replace with your local image path
// // // //       default:
// // // //         return require('./assets/working.png');  // Fallback image
// // // //     }
// // // //   };

// // // //   // Render Workstations, Cabins, and Meeting Rooms separately
// // // //   const renderSpace = (spaces, type) => (
// // // //     <View style={styles.spaceContainer}>
// // // //       <Text style={styles.spaceTitle}>{type}</Text>
// // // //       <FlatList
// // // //         data={spaces}
// // // //         keyExtractor={(item) => item.ID}
// // // //         renderItem={({ item }) => (
// // // //           <View style={styles.spaceItem}>
// // // //             <Image source={getImageForSpaceType(type)} style={styles.image} />
// // // //             <Text style={styles.spaceText}>{item.display_value}</Text>
// // // //           </View>
// // // //         )}
// // // //         horizontal
// // // //       />
// // // //     </View>
// // // //   );

// // // //   const renderLayout = (layoutData) => (
// // // //     <View style={styles.layoutContainer}>
// // // //       <Text style={styles.layoutTitle}>{layoutData.Name}</Text>
// // // //       {renderSpace(layoutData.Workstation, 'Workstation')}
// // // //       {renderSpace(layoutData.Cabin, 'Cabin')}
// // // //       {renderSpace(layoutData.Meeting_Room, 'Meeting Room')}
// // // //     </View>
// // // //   );

// // // //   if (loading) {
// // // //     return <ActivityIndicator size="large" color="#0000ff" />;
// // // //   }

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       {data.length > 0 ? (
// // // //         data.map((layoutData) => renderLayout(layoutData))
// // // //       ) : (
// // // //         <Text>No data available</Text>
// // // //       )}
// // // //     </View>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     padding: 20,
// // // //   },
// // // //   layoutContainer: {
// // // //     marginBottom: 20,
// // // //   },
// // // //   layoutTitle: {
// // // //     fontSize: 18,
// // // //     fontWeight: 'bold',
// // // //     marginBottom: 10,
// // // //   },
// // // //   spaceContainer: {
// // // //     marginBottom: 15,
// // // //   },
// // // //   spaceTitle: {
// // // //     fontSize: 16,
// // // //     fontWeight: 'bold',
// // // //     marginBottom: 10,
// // // //   },
// // // //   spaceItem: {
// // // //     alignItems: 'center',
// // // //     marginRight: 10,
// // // //   },
// // // //   spaceText: {
// // // //     fontSize: 14,
// // // //     marginTop: 5,
// // // //   },
// // // //   image: {
// // // //     width: 80,
// // // //     height: 80,
// // // //     resizeMode: 'contain',
// // // //   },
// // // // });

// // // // export default OfficeDataApp;

// // // import React, { useEffect, useState } from 'react';
// // // import { View, Text, ActivityIndicator, FlatList, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

// // // const OfficeDataApp = () => {
// // //   const [data, setData] = useState([]);
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState(null);

// // //   const mockData = {
// // //     "code": 3000,
// // //     "data": [
// // //       {
// // //         "Workstation": [
// // //           { "display_value": "WORK2", "ID": "47090000002059224" },
// // //           { "display_value": "WORK1", "ID": "47090000002059228" },
// // //           { "display_value": "WORK3", "ID": "47090000002059232" },
// // //           { "display_value": "WORK4", "ID": "47090000002059236" },
// // //           { "display_value": "WORK5", "ID": "47090000002059240" }
// // //         ],
// // //         "Cabin": [{ "display_value": "CAB1", "ID": "47090000002059260" }],
// // //         "Assign_Member": [{ "display_value": "Suraj", "ID": "47090000002059430" }],
// // //         "LayoutId": "SEC51",
// // //         "ID": "47090000002059220",
// // //         "Meeting_Room": [
// // //           { "display_value": "MEET4", "ID": "47090000002059244" },
// // //           { "display_value": "MEET3", "ID": "47090000002059248" },
// // //           { "display_value": "MEET2", "ID": "47090000002059252" },
// // //           { "display_value": "MEET1", "ID": "47090000002059256" }
// // //         ],
// // //         "Offices": { "display_value": "GUR", "ID": "47090000002059216" },
// // //         "Name": "Sector 51"
// // //       }
// // //     ]
// // //   };

// // //   useEffect(() => {
// // //     // Simulating fetching the mock data
// // //     setData(mockData.data);
// // //   }, []);

// // //   // Function to get image based on space type
// // //   const getImageForSpaceType = (type) => {
// // //     switch (type) {
// // //       case 'Workstation':
// // //         return require('./assets/working.png');  // Replace with your local image path
// // //       case 'Cabin':
// // //         return require('./assets/location.png');  // Replace with your local image path
// // //       case 'Meeting Room':
// // //         return require('./assets/board-meeting.png');  // Replace with your local image path
// // //       default:
// // //         return require('./assets/working.png');  // Fallback image
// // //     }
// // //   };

// // //   // Handle item click to show ID in an alert
// // //   const handleItemClick = (id) => {
// // //     Alert.alert('Item ID', `The ID of this item is: ${id}`);
// // //   };

// // //   // Render Workstations, Cabins, and Meeting Rooms separately
// // //   const renderSpace = (spaces, type) => (
// // //     <View style={styles.spaceContainer}>
// // //       <Text style={styles.spaceTitle}>{type}</Text>
// // //       <FlatList
// // //         data={spaces}
// // //         keyExtractor={(item) => item.ID}
// // //         renderItem={({ item }) => (
// // //           <TouchableOpacity style={styles.spaceItem} onPress={() => handleItemClick(item.ID)}>
// // //             <Image source={getImageForSpaceType(type)} style={styles.image} />
// // //             <Text style={styles.spaceText}>{item.display_value}</Text>
// // //           </TouchableOpacity>
// // //         )}
// // //         horizontal
// // //       />
// // //     </View>
// // //   );

// // //   const renderLayout = (layoutData) => (
// // //     <View style={styles.layoutContainer}>
// // //       <Text style={styles.layoutTitle}>{layoutData.Name}</Text>
// // //       {renderSpace(layoutData.Workstation, 'Workstation')}
// // //       {renderSpace(layoutData.Cabin, 'Cabin')}
// // //       {renderSpace(layoutData.Meeting_Room, 'Meeting Room')}
// // //     </View>
// // //   );

// // //   if (loading) {
// // //     return <ActivityIndicator size="large" color="#0000ff" />;
// // //   }

// // //   return (
// // //     <View style={styles.container}>
// // //       {data.length > 0 ? (
// // //         data.map((layoutData) => renderLayout(layoutData))
// // //       ) : (
// // //         <Text>No data available</Text>
// // //       )}
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     padding: 20,
// // //     backgroundColor: '#f7f7f7',
// // //   },
// // //   layoutContainer: {
// // //     marginBottom: 20,
// // //     backgroundColor: '#fff',
// // //     padding: 15,
// // //     borderRadius: 10,
// // //     elevation: 3,  // for shadow on Android
// // //     shadowColor: '#000',  // for shadow on iOS
// // //     shadowOffset: { width: 0, height: 2 },
// // //     shadowOpacity: 0.1,
// // //     shadowRadius: 4,
// // //   },
// // //   layoutTitle: {
// // //     fontSize: 20,
// // //     fontWeight: 'bold',
// // //     marginBottom: 10,
// // //     color: '#333',
// // //   },
// // //   spaceContainer: {
// // //     marginBottom: 15,
// // //   },
// // //   spaceTitle: {
// // //     fontSize: 18,
// // //     fontWeight: 'bold',
// // //     marginBottom: 10,
// // //     color: '#555',
// // //   },
// // //   spaceItem: {
// // //     alignItems: 'center',
// // //     marginRight: 15,
// // //     backgroundColor: '#f0f0f0',
// // //     borderRadius: 8,
// // //     padding: 10,
// // //     shadowColor: '#000',
// // //     shadowOffset: { width: 0, height: 2 },
// // //     shadowOpacity: 0.1,
// // //     shadowRadius: 4,
// // //   },
// // //   spaceText: {
// // //     fontSize: 14,
// // //     marginTop: 8,
// // //     color: '#333',
// // //   },
// // //   image: {
// // //     width: 80,
// // //     height: 80,
// // //     resizeMode: 'contain',
// // //     borderRadius: 8,
// // //   },
// // // });

// // // export default OfficeDataApp;

// // import React, { useEffect, useState } from 'react';
// // import { View, Text, ActivityIndicator, StyleSheet, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';

// // const OfficeDataApp = () => {
// //   const [data, setData] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   const mockData = {
// //     "code": 3000,
// //     "data": [
// //       {
// //         "Workstation": [
// //           { "display_value": "WORK2", "ID": "47090000002059224" },
// //           { "display_value": "WORK1", "ID": "47090000002059228" },
// //           { "display_value": "WORK3", "ID": "47090000002059232" },
// //           { "display_value": "WORK4", "ID": "47090000002059236" },
// //           { "display_value": "WORK5", "ID": "47090000002059240" }
// //         ],
// //         "Cabin": [{ "display_value": "CAB1", "ID": "47090000002059260" }],
// //         "Assign_Member": [{ "display_value": "Suraj", "ID": "47090000002059430" }],
// //         "LayoutId": "SEC51",
// //         "ID": "47090000002059220",
// //         "Meeting_Room": [
// //           { "display_value": "MEET4", "ID": "47090000002059244" },
// //           { "display_value": "MEET3", "ID": "47090000002059248" },
// //           { "display_value": "MEET2", "ID": "47090000002059252" },
// //           { "display_value": "MEET1", "ID": "47090000002059256" }
// //         ],
// //         "Offices": { "display_value": "GUR", "ID": "47090000002059216" },
// //         "Name": "Sector 51"
// //       }
// //     ]
// //   };

// //   useEffect(() => {
// //     // Simulating fetching the mock data
// //     setData(mockData.data);
// //   }, []);

// //   // Function to get image based on space type
// //   const getImageForSpaceType = (type) => {
// //     switch (type) {
// //       case 'Workstation':
// //         return require('./assets/working.png');  // Replace with your local image path
// //       case 'Cabin':
// //         return require('./assets/location.png');  // Replace with your local image path
// //       case 'Meeting Room':
// //         return require('./assets/board-meeting.png');  // Replace with your local image path
// //       default:
// //         return require('./assets/working.png');  // Fallback image
// //     }
// //   };

// //   // Handle item click to show ID in an alert
// //   const handleItemClick = (id) => {
// //     Alert.alert('Item ID', `The ID of this item is: ${id}`);
// //   };

// //   // Render Workstations, Cabins, and Meeting Rooms separately
// //   const renderSpace = (spaces, type) => (
// //     <View style={styles.spaceContainer}>
// //       <Text style={styles.spaceTitle}>{type}</Text>
// //       <View style={styles.spaceList}>
// //         {spaces.map((item) => (
// //           <TouchableOpacity
// //             key={item.ID}
// //             style={styles.spaceItem}
// //             onPress={() => handleItemClick(item.ID)}
// //           >
// //             <Image source={getImageForSpaceType(type)} style={styles.image} />
// //             <Text style={styles.spaceText}>{item.display_value}</Text>
// //           </TouchableOpacity>
// //         ))}
// //       </View>
// //     </View>
// //   );

// //   const renderLayout = (layoutData) => (
// //     <View style={styles.layoutContainer}>
// //       <Text style={styles.layoutTitle}>{layoutData.Name}</Text>
// //       {renderSpace(layoutData.Workstation, 'Workstation')}
// //       {renderSpace(layoutData.Cabin, 'Cabin')}
// //       {renderSpace(layoutData.Meeting_Room, 'Meeting Room')}
// //     </View>
// //   );

// //   if (loading) {
// //     return <ActivityIndicator size="large" color="#0000ff" />;
// //   }

// //   return (
// //     <ScrollView contentContainerStyle={styles.container}>
// //       {data.length > 0 ? (
// //         data.map((layoutData) => renderLayout(layoutData))
// //       ) : (
// //         <Text>No data available</Text>
// //       )}
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     padding: 20,
// //     backgroundColor: '#f7f7f7',
// //   },
// //   layoutContainer: {
// //     marginBottom: 20,
// //     backgroundColor: '#fff',
// //     padding: 15,
// //     borderRadius: 10,
// //     elevation: 3,  // for shadow on Android
// //     shadowColor: '#000',  // for shadow on iOS
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 4,
// //   },
// //   layoutTitle: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //     color: '#333',
// //   },
// //   spaceContainer: {
// //     marginBottom: 15,
// //   },
// //   spaceTitle: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //     color: '#555',
// //   },
// //   spaceList: {
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //     justifyContent: 'flex-start',
// //   },
// //   spaceItem: {
// //     alignItems: 'center',
// //     marginRight: 15,
// //     marginBottom: 15,
// //     backgroundColor: '#f0f0f0',
// //     borderRadius: 8,
// //     padding: 10,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 4,
// //     width: '30%',  // Adjust width to 30% for 3 items per row
// //   },
// //   spaceText: {
// //     fontSize: 14,
// //     marginTop: 8,
// //     color: '#333',
// //   },
// //   image: {
// //     width: 80,
// //     height: 80,
// //     resizeMode: 'contain',
// //     borderRadius: 8,
// //   },
// // });

// // export default OfficeDataApp;

// // import React, { useEffect, useState } from 'react';
// // import { View, Text, ActivityIndicator, StyleSheet, Image, TouchableOpacity, Alert, ScrollView, Modal, Button } from 'react-native';

// // const OfficeDataApp = () => {
// //   const [data, setData] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [selectedItemId, setSelectedItemId] = useState(null);
// //   const [modalVisible, setModalVisible] = useState(false);

// //   const mockData = {
// //     "code": 3000,
// //     "data": [
// //       {
// //         "Workstation": [
// //           { "display_value": "WORK2", "ID": "47090000002059224" },
// //           { "display_value": "WORK1", "ID": "47090000002059228" },
// //           { "display_value": "WORK3", "ID": "47090000002059232" },
// //           { "display_value": "WORK4", "ID": "47090000002059236" },
// //           { "display_value": "WORK5", "ID": "47090000002059240" }
// //         ],
// //         "Cabin": [{ "display_value": "CAB1", "ID": "47090000002059260" }],
// //         "Assign_Member": [{ "display_value": "Suraj", "ID": "47090000002059430" }],
// //         "LayoutId": "SEC51",
// //         "ID": "47090000002059220",
// //         "Meeting_Room": [
// //           { "display_value": "MEET4", "ID": "47090000002059244" },
// //           { "display_value": "MEET3", "ID": "47090000002059248" },
// //           { "display_value": "MEET2", "ID": "47090000002059252" },
// //           { "display_value": "MEET1", "ID": "47090000002059256" }
// //         ],
// //         "Offices": { "display_value": "GUR", "ID": "47090000002059216" },
// //         "Name": "Sector 51"
// //       }
// //     ]
// //   };

// //   useEffect(() => {
// //     setData(mockData.data);
// //   }, []);

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

// //   const handleItemClick = (id) => {
// //     setSelectedItemId(id);
// //     setModalVisible(true);
// //     triggerApiCall(id);
// //   };

// //   const triggerApiCall = async (id) => {
// //     try {
// //       setLoading(true);
// //       const response = await fetch('https://api.example.com/trigger', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ itemId: id }),
// //       });
// //       const result = await response.json();
// //       console.log('API Response:', result);
// //     } catch (error) {
// //       console.error('API call error:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const renderSpace = (spaces, type) => (
// //     <View style={styles.spaceContainer}>
// //       <Text style={styles.spaceTitle}>{type}</Text>
// //       <View style={styles.spaceList}>
// //         {spaces.map((item) => (
// //           <TouchableOpacity
// //             key={item.ID}
// //             style={styles.spaceItem}
// //             onPress={() => handleItemClick(item.ID)}
// //           >
// //             <Image source={getImageForSpaceType(type)} style={styles.image} />
// //             <Text style={styles.spaceText}>{item.display_value}</Text>
// //           </TouchableOpacity>
// //         ))}
// //       </View>
// //     </View>
// //   );

// //   const renderLayout = (layoutData) => (
// //     <View style={styles.layoutContainer}>
// //       <Text style={styles.layoutTitle}>{layoutData.Name}</Text>
// //       {renderSpace(layoutData.Workstation, 'Workstation')}
// //       {renderSpace(layoutData.Cabin, 'Cabin')}
// //       {renderSpace(layoutData.Meeting_Room, 'Meeting Room')}
// //     </View>
// //   );

// //   if (loading) {
// //     return <ActivityIndicator size="large" color="#0000ff" />;
// //   }

// //   return (
// //     <ScrollView contentContainerStyle={styles.container}>
// //       {data.length > 0 ? (
// //         data.map((layoutData) => renderLayout(layoutData))
// //       ) : (
// //         <Text>No data available</Text>
// //       )}
      
// //       {/* Modal for showing the selected item ID */}
// //       <Modal
// //         visible={modalVisible}
// //         transparent={true}
// //         animationType="slide"
// //         onRequestClose={() => setModalVisible(false)}
// //       >
// //         <View style={styles.modalContainer}>
// //           <View style={styles.modalContent}>
// //             <Text style={styles.modalText}>Selected Item ID: {selectedItemId}</Text>
// //             <Button title="Close" onPress={() => setModalVisible(false)} />
// //             <Button title="Book" onPress={() => setModalVisible(false)} />
// //           </View>
// //         </View>
// //       </Modal>
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     padding: 20,
// //     backgroundColor: '#f7f7f7',
// //   },
// //   layoutContainer: {
// //     marginBottom: 20,
// //     backgroundColor: '#fff',
// //     padding: 15,
// //     borderRadius: 10,
// //     elevation: 3,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 4,
// //   },
// //   layoutTitle: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //     color: '#333',
// //   },
// //   spaceContainer: {
// //     marginBottom: 15,
// //   },
// //   spaceTitle: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //     color: '#555',
// //   },
// //   spaceList: {
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //     justifyContent: 'flex-start',
// //   },
// //   spaceItem: {
// //     alignItems: 'center',
// //     marginRight: 15,
// //     marginBottom: 15,
// //     backgroundColor: '#f0f0f0',
// //     borderRadius: 8,
// //     padding: 10,
// //     width: '30%',
// //   },
// //   spaceText: {
// //     fontSize: 14,
// //     marginTop: 8,
// //     color: '#333',
// //   },
// //   image: {
// //     width: 80,
// //     height: 80,
// //     resizeMode: 'contain',
// //     borderRadius: 8,
// //   },
// //   modalContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
// //   },
// //   modalContent: {
// //     width: '80%',
// //     padding: 20,
// //     backgroundColor: 'white',
// //     borderRadius: 10,
// //     alignItems: 'center',
// //   },
// //   modalText: {
// //     fontSize: 18,
// //     marginBottom: 15,
// //   },
// // });

// // export default OfficeDataApp;

// import React, { useEffect, useState } from 'react';
// import { View, Text, ActivityIndicator, StyleSheet, Image, TouchableOpacity, ScrollView, Modal, Button, TextInput } from 'react-native';

// const OfficeDataApp = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedItemId, setSelectedItemId] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [bookingFormVisible, setBookingFormVisible] = useState(false);

//   const mockData = {
//     "code": 3000,
//     "data": [
//       {
//         "Workstation": [
//           { "display_value": "WORK2", "ID": "47090000002059224" },
//           { "display_value": "WORK1", "ID": "47090000002059228" },
//           { "display_value": "WORK3", "ID": "47090000002059232" },
//           { "display_value": "WORK4", "ID": "47090000002059236" },
//           { "display_value": "WORK5", "ID": "47090000002059240" }
//         ],
//         "Cabin": [{ "display_value": "CAB1", "ID": "47090000002059260" }],
//         "Assign_Member": [{ "display_value": "Suraj", "ID": "47090000002059430" }],
//         "LayoutId": "SEC51",
//         "ID": "47090000002059220",
//         "Meeting_Room": [
//           { "display_value": "MEET4", "ID": "47090000002059244" },
//           { "display_value": "MEET3", "ID": "47090000002059248" },
//           { "display_value": "MEET2", "ID": "47090000002059252" },
//           { "display_value": "MEET1", "ID": "47090000002059256" }
//         ],
//         "Offices": { "display_value": "GUR", "ID": "47090000002059216" },
//         "Name": "Sector 51"
//       }
//     ]
//   };

//   useEffect(() => {
//     setData(mockData.data);
//   }, []);

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

//   const handleItemClick = (id) => {
//     setSelectedItemId(id);
//     setModalVisible(true);
//   };

//   const openBookingForm = () => {
//     setModalVisible(false);
//     setBookingFormVisible(true);
//   };

//   const renderSpace = (spaces, type) => (
//     <View style={styles.spaceContainer}>
//       <Text style={styles.spaceTitle}>{type}</Text>
//       <View style={styles.spaceList}>
//         {spaces.map((item) => (
//           <TouchableOpacity
//             key={item.ID}
//             style={styles.spaceItem}
//             onPress={() => handleItemClick(item.ID)}
//           >
//             <Image source={getImageForSpaceType(type)} style={styles.image} />
//             <Text style={styles.spaceText}>{item.display_value}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );

//   const renderLayout = (layoutData) => (
//     <View style={styles.layoutContainer}>
//       <Text style={styles.layoutTitle}>{layoutData.Name}</Text>
//       {renderSpace(layoutData.Workstation, 'Workstation')}
//       {renderSpace(layoutData.Cabin, 'Cabin')}
//       {renderSpace(layoutData.Meeting_Room, 'Meeting Room')}
//     </View>
//   );

//   if (loading) {
//     return <ActivityIndicator size="large" color="#0000ff" />;
//   }

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {data.length > 0 ? (
//         data.map((layoutData) => renderLayout(layoutData))
//       ) : (
//         <Text>No data available</Text>
//       )}
      
//       {/* Modal for showing the selected item ID */}
//       <Modal
//         visible={modalVisible}
//         transparent={true}
//         animationType="slide"
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalText}>Selected Item ID: {selectedItemId}</Text>
//             <Button title="Close" onPress={() => setModalVisible(false)} />
//             <Button title="Book" onPress={openBookingForm} />
//           </View>
//         </View>
//       </Modal>

//       {/* Modal for booking form */}
//       <Modal
//         visible={bookingFormVisible}
//         transparent={true}
//         animationType="slide"
//         onRequestClose={() => setBookingFormVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.bookingFormContent}>
//             <Text style={styles.modalText}>Booking Form for ID: {selectedItemId}</Text>
//             <TextInput style={styles.input} placeholder="Date (YYYY-MM-DD)" />
//             <TextInput style={styles.input} placeholder="Time (HH:MM)" />
//             <Button title="Submit Booking" onPress={() => setBookingFormVisible(false)} />
//             <Button title="Cancel" onPress={() => setBookingFormVisible(false)} />
//           </View>
//         </View>
//       </Modal>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#f7f7f7',
//   },
//   layoutContainer: {
//     marginBottom: 20,
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 10,
//     elevation: 3,
//   },
//   layoutTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#333',
//   },
//   spaceContainer: {
//     marginBottom: 15,
//   },
//   spaceTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#555',
//   },
//   spaceList: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   spaceItem: {
//     alignItems: 'center',
//     marginRight: 15,
//     marginBottom: 15,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//     padding: 10,
//     width: '30%',
//   },
//   spaceText: {
//     fontSize: 14,
//     marginTop: 8,
//     color: '#333',
//   },
//   image: {
//     width: 80,
//     height: 80,
//     resizeMode: 'contain',
//     borderRadius: 8,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: '80%',
//     padding: 20,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   bookingFormContent: {
//     width: '80%',
//     padding: 20,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   modalText: {
//     fontSize: 18,
//     marginBottom: 15,
//   },
//   input: {
//     width: '100%',
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     marginBottom: 15,
//   },
// });

// export default OfficeDataApp;


import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, TouchableOpacity, ScrollView, Modal, Button } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { TextInput } from 'react-native-gesture-handler';

const OfficeDataApp = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [bookingModalVisible, setBookingModalVisible] = useState(false);

  const mockData = {
        "code": 3000,
        "data": [
          {
            "Workstation": [
              { "display_value": "WORK2", "ID": "47090000002059224" },
              { "display_value": "WORK1", "ID": "47090000002059228" },
              { "display_value": "WORK3", "ID": "47090000002059232" },
              { "display_value": "WORK4", "ID": "47090000002059236" },
              { "display_value": "WORK5", "ID": "47090000002059240" }
            ],
            "Cabin": [{ "display_value": "CAB1", "ID": "47090000002059260" }],
            "Assign_Member": [{ "display_value": "Suraj", "ID": "47090000002059430" }],
            "LayoutId": "SEC51",
            "ID": "47090000002059220",
            "Meeting_Room": [
              { "display_value": "MEET4", "ID": "47090000002059244" },
              { "display_value": "MEET3", "ID": "47090000002059248" },
              { "display_value": "MEET2", "ID": "47090000002059252" },
              { "display_value": "MEET1", "ID": "47090000002059256" }
            ],
            "Offices": { "display_value": "GUR", "ID": "47090000002059216" },
            "Name": "Sector 51"
          }
        ]
      };

  useEffect(() => {
    setData(mockData.data);
  }, []);

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

  const handleItemClick = (id) => {
    setSelectedItemId(id);
    setModalVisible(true);
  };

  const openBookingModal = () => {
    setModalVisible(false);
    setBookingModalVisible(true);
  };

  const renderSpace = (spaces, type) => (
    <View style={styles.spaceContainer}>
      <Text style={styles.spaceTitle}>{type}</Text>
      <View style={styles.spaceList}>
        {spaces.map((item) => (
          <TouchableOpacity
            key={item.ID}
            style={styles.spaceItem}
            onPress={() => handleItemClick(item.ID)}
          >
            <Image source={getImageForSpaceType(type)} style={styles.image} />
            <Text style={styles.spaceText}>{item.display_value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderLayout = (layoutData) => (
    <View style={styles.layoutContainer}>
      <Text style={styles.layoutTitle}>{layoutData.Name}</Text>
      {renderSpace(layoutData.Workstation, 'Workstation')}
      {renderSpace(layoutData.Cabin, 'Cabin')}
      {renderSpace(layoutData.Meeting_Room, 'Meeting Room')}
    </View>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.length > 0 ? (
        data.map((layoutData) => renderLayout(layoutData))
      ) : (
        <Text>No data available</Text>
      )}
      
      {/* Modal for showing the selected item ID */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Selected Item ID: {selectedItemId}</Text>
            <View style={styles.buttonContainer}>
              <Button title="Close" onPress={() => setModalVisible(false)} />
              <Button title="Book" onPress={openBookingModal} />
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal for booking form */}
      <Modal
        visible={bookingModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setBookingModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Booking Form</Text>
            
            <View style={styles.buttonContainer}>
              <Button title="Submit" onPress={() => setBookingModalVisible(false)} />
              <Button title="Cancel" onPress={() => setBookingModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  layoutContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  layoutTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  spaceContainer: {
    marginBottom: 15,
  },
  spaceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#555',
  },
  spaceList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  spaceItem: {
    alignItems: 'center',
    marginRight: 15,
    marginBottom: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    width: '30%',
  },
  spaceText: {
    fontSize: 14,
    marginTop: 8,
    color: '#333',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15,
  },
});

export default OfficeDataApp;
