// // // // // import React from "react";
// // // // // import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";

// // // // // const screenWidth = Dimensions.get("window").width;
// // // // // const isSmallScreen = screenWidth < 360;

// // // // // const Layout = () => {
// // // // //   return (
// // // // //     <ScrollView contentContainerStyle={styles.scrollViewContainer}>
// // // // //       <View style={styles.mainContainer}>
// // // // //         <View style={styles.container}>
// // // // //           {/* First Two Boxes */}
// // // // //           <View style={styles.firstBox}>
// // // // //             {/* First Section */}
// // // // //             <View style={styles.sectionContainer}>
// // // // //               <View style={styles.verticalChairGroup}>
// // // // //                 <View style={styles.chairVertical} />
// // // // //                 <View style={styles.chairVertical} />
// // // // //               </View>
// // // // //               <View style={styles.horizontalChairGroup}>
// // // // //                 <View style={styles.verticalChairSubGroup}>
// // // // //                   <View style={styles.chairVertical} />
// // // // //                   <View style={styles.chairVertical} />
// // // // //                 </View>
// // // // //                 <View style={styles.grid}>
// // // // //                   {[...Array(14)].map((_, index) => (
// // // // //                     <View key={index} style={styles.chairHorizontal} />
// // // // //                   ))}
// // // // //                 </View>
// // // // //                 <View>
// // // // //                   <View style={styles.chairVertical} />
// // // // //                 </View>
// // // // //               </View>
// // // // //               <View style={styles.verticalChairGroup}>
// // // // //                 <View style={styles.chairVertical} />
// // // // //                 <View style={styles.chairVertical} />
// // // // //                 <View style={styles.chairVertical} />
// // // // //               </View>
// // // // //             </View>

// // // // //             {/* Second Section */}
// // // // //             <View style={[styles.sectionContainer, { paddingVertical: 20 }]}>
// // // // //               <View style={styles.verticalChairGroup}>
// // // // //                 <View style={styles.horizontalChairRow}>
// // // // //                   {[...Array(4)].map((_, index) => (
// // // // //                     <View key={index} style={styles.chairHorizontal} />
// // // // //                   ))}
// // // // //                 </View>
// // // // //                 <View style={styles.horizontalChairRow}>
// // // // //                   {[...Array(3)].map((_, index) => (
// // // // //                     <View key={index} style={styles.chairHorizontal} />
// // // // //                   ))}
// // // // //                 </View>
// // // // //               </View>
// // // // //             </View>

// // // // //             {/* Reception Area */}
// // // // //             <View style={styles.receptionGroup}>
// // // // //               <View style={styles.receptionArea}>
// // // // //                 <Text style={styles.receptionText}>Reception Area</Text>
// // // // //               </View>
// // // // //               <View style={styles.blankArea}>
// // // // //                 <View style={styles.blankInnerArea} />
// // // // //               </View>
// // // // //             </View>
// // // // //           </View>
// // // // //         </View>
// // // // //       </View>
// // // // //     </ScrollView>
// // // // //   );
// // // // // };

// // // // // const styles = StyleSheet.create({
// // // // //   scrollViewContainer: {
// // // // //     paddingHorizontal: 10,
// // // // //     paddingVertical: 10,
// // // // //     flexGrow: 1,
// // // // //   },
// // // // //   mainContainer: {
// // // // //     borderWidth: 1.5,
// // // // //     borderColor: "#747373",
// // // // //     padding: 10,
// // // // //   },
// // // // //   container: {
// // // // //     flex: 1,
// // // // //   },
// // // // //   firstBox: {
// // // // //     flexDirection: "row",
// // // // //     gap: isSmallScreen ? 4 : 8,
// // // // //     alignItems: "flex-end",
// // // // //   },
// // // // //   sectionContainer: {
// // // // //     backgroundColor: "#dae2f5",
// // // // //     paddingHorizontal: 8,
// // // // //     paddingVertical: 16,
// // // // //     flexDirection: "row",
// // // // //     justifyContent: "center",
// // // // //     alignItems: "center",
// // // // //   },
// // // // //   verticalChairGroup: {
// // // // //     flexDirection: "column",
// // // // //     justifyContent: "center",
// // // // //     alignItems: "center",
// // // // //     gap: isSmallScreen ? 16 : 24,
// // // // //   },
// // // // //   horizontalChairGroup: {
// // // // //     flexDirection: "row",
// // // // //     justifyContent: "center",
// // // // //     alignItems: "center",
// // // // //     gap: isSmallScreen ? 4 : 10,
// // // // //   },
// // // // //   verticalChairSubGroup: {
// // // // //     flexDirection: "column",
// // // // //     justifyContent: "center",
// // // // //     alignItems: "center",
// // // // //     gap: isSmallScreen ? 4 : 8,
// // // // //   },
// // // // //   horizontalChairRow: {
// // // // //     flexDirection: "row",
// // // // //     gap: isSmallScreen ? 4 : 8,
// // // // //     justifyContent: "center",
// // // // //   },
// // // // //   grid: {
// // // // //     flexDirection: "row",
// // // // //     flexWrap: "wrap",
// // // // //     gap: isSmallScreen ? 2 : 4,
// // // // //     width: isSmallScreen ? 80 : 100,
// // // // //   },
// // // // //   chairHorizontal: {
// // // // //     height: isSmallScreen ? 16 : 20,
// // // // //     width: isSmallScreen ? 20 : 24,
// // // // //     backgroundColor: "#a8a4eb",
// // // // //     borderWidth: 1.5,
// // // // //     borderColor: "#70707c",
// // // // //     margin: 1,
// // // // //   },
// // // // //   chairVertical: {
// // // // //     height: isSmallScreen ? 20 : 24,
// // // // //     width: isSmallScreen ? 16 : 20,
// // // // //     backgroundColor: "#a8a4eb",
// // // // //     borderWidth: 1.5,
// // // // //     borderColor: "#70707c",
// // // // //     marginVertical: 2,
// // // // //   },
// // // // //   receptionGroup: {
// // // // //     flexDirection: "row",
// // // // //     alignItems: "center",
// // // // //     gap: isSmallScreen ? 8 : 12,
// // // // //   },
// // // // //   receptionArea: {
// // // // //     backgroundColor: "#f5d4a4",
// // // // //     paddingHorizontal: isSmallScreen ? 16 : 20,
// // // // //     paddingVertical: isSmallScreen ? 8 : 10,
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //     height: isSmallScreen ? 75 : 95,
// // // // //     flex: 1,
// // // // //   },
// // // // //   receptionText: {
// // // // //     fontWeight: "600",
// // // // //     fontSize: isSmallScreen ? 12 : 14,
// // // // //     textAlign: "center",
// // // // //   },
// // // // //   blankArea: {
// // // // //     backgroundColor: "#88d8a2",
// // // // //     paddingHorizontal: isSmallScreen ? 20 : 24,
// // // // //     paddingVertical: isSmallScreen ? 16 : 20,
// // // // //   },
// // // // //   blankInnerArea: {
// // // // //     backgroundColor: "#fff",
// // // // //     borderWidth: 1,
// // // // //     borderColor: "#000",
// // // // //     height: isSmallScreen ? 50 : 60,
// // // // //     width: isSmallScreen ? 50 : 60,
// // // // //   },
// // // // // });

// // // // // export default Layout;

// // // // import React, { useState } from "react";
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   StyleSheet,
// // // //   ScrollView,
// // // //   TouchableOpacity,
// // // //   Modal,
// // // //   Dimensions,
// // // // } from "react-native";

// // // // const screenWidth = Dimensions.get("window").width;
// // // // const isSmallScreen = screenWidth < 360;

// // // // const Layout = () => {
// // // //   const [visibleModal, setVisibleModal] = useState(null); // Tracks which modal is open

// // // //   const handleOpenModal = (section) => {
// // // //     setVisibleModal(section);
// // // //   };

// // // //   const handleCloseModal = () => {
// // // //     setVisibleModal(null);
// // // //   };

// // // //   return (
// // // //     <ScrollView contentContainerStyle={styles.scrollViewContainer}>
// // // //       <View style={styles.mainContainer}>
// // // //         <View style={styles.container}>
// // // //           {/* First Section */}
// // // //           <TouchableOpacity
// // // //             onPress={() => handleOpenModal("firstSection")}
// // // //             style={styles.touchableSection}
// // // //           >
// // // //             <View style={styles.sectionContainer}>
// // // //               <View style={styles.verticalChairGroup}>
// // // //                 <View style={styles.chairVertical} />
// // // //                 <View style={styles.chairVertical} />
// // // //               </View>
// // // //               <View style={styles.horizontalChairGroup}>
// // // //                 <View style={styles.verticalChairSubGroup}>
// // // //                   <View style={styles.chairVertical} />
// // // //                   <View style={styles.chairVertical} />
// // // //                 </View>
// // // //                 <View style={styles.grid}>
// // // //                   {[...Array(14)].map((_, index) => (
// // // //                     <View key={index} style={styles.chairHorizontal} />
// // // //                   ))}
// // // //                 </View>
// // // //                 <View>
// // // //                   <View style={styles.chairVertical} />
// // // //                 </View>
// // // //               </View>
// // // //               <View style={styles.verticalChairGroup}>
// // // //                 <View style={styles.chairVertical} />
// // // //                 <View style={styles.chairVertical} />
// // // //                 <View style={styles.chairVertical} />
// // // //               </View>
// // // //             </View>
// // // //           </TouchableOpacity>

// // // //           {/* Second Section */}
// // // //           <TouchableOpacity
// // // //             onPress={() => handleOpenModal("secondSection")}
// // // //             style={styles.touchableSection}
// // // //           >
// // // //             <View style={[styles.sectionContainer, { paddingVertical: 20 }]}>
// // // //               <View style={styles.verticalChairGroup}>
// // // //                 <View style={styles.horizontalChairRow}>
// // // //                   {[...Array(4)].map((_, index) => (
// // // //                     <View key={index} style={styles.chairHorizontal} />
// // // //                   ))}
// // // //                 </View>
// // // //                 <View style={styles.horizontalChairRow}>
// // // //                   {[...Array(3)].map((_, index) => (
// // // //                     <View key={index} style={styles.chairHorizontal} />
// // // //                   ))}
// // // //                 </View>
// // // //               </View>
// // // //             </View>
// // // //           </TouchableOpacity>

// // // //           {/* Reception Area */}
// // // //           <TouchableOpacity
// // // //             onPress={() => handleOpenModal("reception")}
// // // //             style={styles.touchableSection}
// // // //           >
// // // //             <View style={styles.receptionGroup}>
// // // //               <View style={styles.receptionArea}>
// // // //                 <Text style={styles.receptionText}>Reception Area</Text>
// // // //               </View>
// // // //               <View style={styles.blankArea}>
// // // //                 <View style={styles.blankInnerArea} />
// // // //               </View>
// // // //             </View>
// // // //           </TouchableOpacity>
// // // //         </View>

// // // //         {/* Modal for Sections */}
// // // //         <Modal
// // // //           transparent={true}
// // // //           visible={visibleModal === "firstSection"}
// // // //           onRequestClose={handleCloseModal}
// // // //         >
// // // //           <View style={styles.modalOverlay}>
// // // //             <View style={styles.modalContent}>
// // // //               <Text style={styles.modalText}>First Section Popup</Text>
// // // //               <TouchableOpacity onPress={handleCloseModal}>
// // // //                 <Text style={styles.closeButton}>Close</Text>
// // // //               </TouchableOpacity>
// // // //             </View>
// // // //           </View>
// // // //         </Modal>

// // // //         <Modal
// // // //           transparent={true}
// // // //           visible={visibleModal === "secondSection"}
// // // //           onRequestClose={handleCloseModal}
// // // //         >
// // // //           <View style={styles.modalOverlay}>
// // // //             <View style={styles.modalContent}>
// // // //               <Text style={styles.modalText}>Second Section Popup</Text>
// // // //               <TouchableOpacity onPress={handleCloseModal}>
// // // //                 <Text style={styles.closeButton}>Close</Text>
// // // //               </TouchableOpacity>
// // // //             </View>
// // // //           </View>
// // // //         </Modal>

// // // //         <Modal
// // // //           transparent={true}
// // // //           visible={visibleModal === "reception"}
// // // //           onRequestClose={handleCloseModal}
// // // //         >
// // // //           <View style={styles.modalOverlay}>
// // // //             <View style={styles.modalContent}>
// // // //               <Text style={styles.modalText}>Reception Area Popup</Text>
// // // //               <TouchableOpacity onPress={handleCloseModal}>
// // // //                 <Text style={styles.closeButton}>Close</Text>
// // // //               </TouchableOpacity>
// // // //             </View>
// // // //           </View>
// // // //         </Modal>
// // // //       </View>
// // // //     </ScrollView>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   scrollViewContainer: {
// // // //     paddingHorizontal: 10,
// // // //     paddingVertical: 10,
// // // //     flexGrow: 1,
// // // //   },
// // // //   mainContainer: {
// // // //     borderWidth: 1.5,
// // // //     borderColor: "#747373",
// // // //     padding: 10,
// // // //   },
// // // //   container: {
// // // //     flex: 1,
// // // //   },
// // // //   sectionContainer: {
// // // //     backgroundColor: "#dae2f5",
// // // //     paddingHorizontal: 8,
// // // //     paddingVertical: 16,
// // // //     flexDirection: "row",
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //   },
// // // //   verticalChairGroup: {
// // // //     flexDirection: "column",
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     gap: 16,
// // // //   },
// // // //   horizontalChairGroup: {
// // // //     flexDirection: "row",
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     gap: 10,
// // // //   },
// // // //   grid: {
// // // //     flexDirection: "row",
// // // //     flexWrap: "wrap",
// // // //     gap: 2,
// // // //   },
// // // //   chairHorizontal: {
// // // //     height: 20,
// // // //     width: 24,
// // // //     backgroundColor: "#a8a4eb",
// // // //     borderWidth: 1.5,
// // // //     borderColor: "#70707c",
// // // //     margin: 1,
// // // //   },
// // // //   chairVertical: {
// // // //     height: 24,
// // // //     width: 20,
// // // //     backgroundColor: "#a8a4eb",
// // // //     borderWidth: 1.5,
// // // //     borderColor: "#70707c",
// // // //     marginVertical: 2,
// // // //   },
// // // //   receptionGroup: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     gap: 12,
// // // //   },
// // // //   receptionArea: {
// // // //     backgroundColor: "#f5d4a4",
// // // //     paddingHorizontal: 20,
// // // //     paddingVertical: 10,
// // // //     alignItems: "center",
// // // //     justifyContent: "center",
// // // //     height: 95,
// // // //     flex: 1,
// // // //   },
// // // //   receptionText: {
// // // //     fontWeight: "600",
// // // //     fontSize: 14,
// // // //     textAlign: "center",
// // // //   },
// // // //   blankArea: {
// // // //     backgroundColor: "#88d8a2",
// // // //     paddingHorizontal: 24,
// // // //     paddingVertical: 20,
// // // //   },
// // // //   blankInnerArea: {
// // // //     backgroundColor: "#fff",
// // // //     borderWidth: 1,
// // // //     borderColor: "#000",
// // // //     height: 60,
// // // //     width: 60,
// // // //   },
// // // //   touchableSection: {
// // // //     marginBottom: 16,
// // // //   },
// // // //   modalOverlay: {
// // // //     flex: 1,
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     backgroundColor: "rgba(0, 0, 0, 0.5)",
// // // //   },
// // // //   modalContent: {
// // // //     backgroundColor: "#fff",
// // // //     padding: 20,
// // // //     borderRadius: 10,
// // // //     alignItems: "center",
// // // //   },
// // // //   modalText: {
// // // //     fontSize: 16,
// // // //     fontWeight: "bold",
// // // //     marginBottom: 10,
// // // //   },
// // // //   closeButton: {
// // // //     color: "blue",
// // // //     fontSize: 14,
// // // //   },
// // // // });

// // // // export default Layout;

// // // import React, { useState } from "react";
// // // import {
// // //   View,
// // //   Text,
// // //   StyleSheet,
// // //   ScrollView,
// // //   TouchableOpacity,
// // //   Modal,
// // //   Dimensions,
// // // } from "react-native";

// // // const Layout = () => {
// // //   const [visibleModal, setVisibleModal] = useState(null); // Tracks which modal is open

// // //   const handleOpenModal = (section) => {
// // //     setVisibleModal(section);
// // //   };

// // //   const handleCloseModal = () => {
// // //     setVisibleModal(null);
// // //   };

// // //   return (
// // //     <View style={styles.mainContainer}>
// // //       <ScrollView contentContainerStyle={styles.scrollViewContainer}>
// // //         <View style={styles.innerContainer}>
// // //           {/* First Section */}
// // //           <TouchableOpacity
// // //             onPress={() => handleOpenModal("firstSection")}
// // //             style={styles.touchableSection}
// // //           >
// // //             <View style={styles.sectionContainer}>
// // //               <View style={styles.verticalChairGroup}>
// // //                 <View style={styles.chairVertical} />
// // //                 <View style={styles.chairVertical} />
// // //               </View>
// // //               <View style={styles.horizontalChairGroup}>
// // //                 <View style={styles.verticalChairSubGroup}>
// // //                   <View style={styles.chairVertical} />
// // //                   <View style={styles.chairVertical} />
// // //                 </View>
// // //                 <View style={styles.grid}>
// // //                   {[...Array(14)].map((_, index) => (
// // //                     <View key={index} style={styles.chairHorizontal} />
// // //                   ))}
// // //                 </View>
// // //                 <View>
// // //                   <View style={styles.chairVertical} />
// // //                 </View>
// // //               </View>
// // //               <View style={styles.verticalChairGroup}>
// // //                 <View style={styles.chairVertical} />
// // //                 <View style={styles.chairVertical} />
// // //                 <View style={styles.chairVertical} />
// // //               </View>
// // //             </View>
// // //           </TouchableOpacity>

// // //           {/* Second Section */}
// // //           <TouchableOpacity
// // //             onPress={() => handleOpenModal("secondSection")}
// // //             style={styles.touchableSection}
// // //           >
// // //             <View style={[styles.sectionContainer, { paddingVertical: 20 }]}>
// // //               <View style={styles.verticalChairGroup}>
// // //                 <View style={styles.horizontalChairRow}>
// // //                   {[...Array(4)].map((_, index) => (
// // //                     <View key={index} style={styles.chairHorizontal} />
// // //                   ))}
// // //                 </View>
// // //                 <View style={styles.horizontalChairRow}>
// // //                   {[...Array(3)].map((_, index) => (
// // //                     <View key={index} style={styles.chairHorizontal} />
// // //                   ))}
// // //                 </View>
// // //               </View>
// // //             </View>
// // //           </TouchableOpacity>

// // //           {/* Reception Area */}
// // //           <TouchableOpacity
// // //             onPress={() => handleOpenModal("reception")}
// // //             style={styles.touchableSection}
// // //           >
// // //             <View style={styles.receptionGroup}>
// // //               <View style={styles.receptionArea}>
// // //                 <Text style={styles.receptionText}>Reception Area</Text>
// // //               </View>
// // //               <View style={styles.blankArea}>
// // //                 <View style={styles.blankInnerArea} />
// // //               </View>
// // //             </View>
// // //           </TouchableOpacity>
// // //         </View>
// // //       </ScrollView>

// // //       {/* Modal for Sections */}
// // //       <Modal
// // //         transparent={true}
// // //         visible={visibleModal === "firstSection"}
// // //         onRequestClose={handleCloseModal}
// // //       >
// // //         <View style={styles.modalOverlay}>
// // //           <View style={styles.modalContent}>
// // //             <Text style={styles.modalText}>First Section Popup</Text>
// // //             <TouchableOpacity onPress={handleCloseModal}>
// // //               <Text style={styles.closeButton}>Close</Text>
// // //             </TouchableOpacity>
// // //           </View>
// // //         </View>
// // //       </Modal>

// // //       <Modal
// // //         transparent={true}
// // //         visible={visibleModal === "secondSection"}
// // //         onRequestClose={handleCloseModal}
// // //       >
// // //         <View style={styles.modalOverlay}>
// // //           <View style={styles.modalContent}>
// // //             <Text style={styles.modalText}>Second Section Popup</Text>
// // //             <TouchableOpacity onPress={handleCloseModal}>
// // //               <Text style={styles.closeButton}>Close</Text>
// // //             </TouchableOpacity>
// // //           </View>
// // //         </View>
// // //       </Modal>

// // //       <Modal
// // //         transparent={true}
// // //         visible={visibleModal === "reception"}
// // //         onRequestClose={handleCloseModal}
// // //       >
// // //         <View style={styles.modalOverlay}>
// // //           <View style={styles.modalContent}>
// // //             <Text style={styles.modalText}>Reception Area Popup</Text>
// // //             <TouchableOpacity onPress={handleCloseModal}>
// // //               <Text style={styles.closeButton}>Close</Text>
// // //             </TouchableOpacity>
// // //           </View>
// // //         </View>
// // //       </Modal>
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   mainContainer: {
// // //     flex: 1,
// // //     borderWidth: 1.5,
// // //     borderColor: "#747373",
// // //     margin: 10,
// // //     borderRadius: 10,
// // //     overflow: "hidden",
// // //   },
// // //   scrollViewContainer: {
// // //     flexGrow: 1,
// // //   },
// // //   innerContainer: {
// // //     padding: 10,
// // //   },
// // //   touchableSection: {
// // //     marginBottom: 16,
// // //   },
// // //   sectionContainer: {
// // //     backgroundColor: "#dae2f5",
// // //     paddingHorizontal: 8,
// // //     paddingVertical: 16,
// // //     flexDirection: "row",
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //   },
// // //   verticalChairGroup: {
// // //     flexDirection: "column",
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     gap: 16,
// // //   },
// // //   horizontalChairGroup: {
// // //     flexDirection: "row",
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     gap: 10,
// // //   },
// // //   grid: {
// // //     flexDirection: "row",
// // //     flexWrap: "wrap",
// // //     gap: 2,
// // //   },
// // //   chairHorizontal: {
// // //     height: 20,
// // //     width: 24,
// // //     backgroundColor: "#a8a4eb",
// // //     borderWidth: 1.5,
// // //     borderColor: "#70707c",
// // //     margin: 1,
// // //   },
// // //   chairVertical: {
// // //     height: 24,
// // //     width: 20,
// // //     backgroundColor: "#a8a4eb",
// // //     borderWidth: 1.5,
// // //     borderColor: "#70707c",
// // //     marginVertical: 2,
// // //   },
// // //   receptionGroup: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     gap: 12,
// // //   },
// // //   receptionArea: {
// // //     backgroundColor: "#f5d4a4",
// // //     paddingHorizontal: 20,
// // //     paddingVertical: 10,
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //     height: 95,
// // //     flex: 1,
// // //   },
// // //   receptionText: {
// // //     fontWeight: "600",
// // //     fontSize: 14,
// // //     textAlign: "center",
// // //   },
// // //   blankArea: {
// // //     backgroundColor: "#88d8a2",
// // //     paddingHorizontal: 24,
// // //     paddingVertical: 20,
// // //   },
// // //   blankInnerArea: {
// // //     backgroundColor: "#fff",
// // //     borderWidth: 1,
// // //     borderColor: "#000",
// // //     height: 60,
// // //     width: 60,
// // //   },
// // //   modalOverlay: {
// // //     flex: 1,
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     backgroundColor: "rgba(0, 0, 0, 0.5)",
// // //   },
// // //   modalContent: {
// // //     backgroundColor: "#fff",
// // //     padding: 20,
// // //     borderRadius: 10,
// // //     alignItems: "center",
// // //   },
// // //   modalText: {
// // //     fontSize: 16,
// // //     fontWeight: "bold",
// // //     marginBottom: 10,
// // //   },
// // //   closeButton: {
// // //     color: "blue",
// // //     fontSize: 14,
// // //   },
// // // });

// // // export default Layout;

// // import React, { useState } from "react";
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   ScrollView,
// //   TouchableOpacity,
// //   Modal,
// // } from "react-native";

// // const Layout = () => {
// //   const [visibleModal, setVisibleModal] = useState(null); // Tracks which modal is open
// //   const [chairList, setChairList] = useState([]); // Stores the list of chair IDs

// //   const handleOpenModal = (section, chairIds) => {
// //     setVisibleModal(section);
// //     setChairList(chairIds); // Update the chair list for the clicked section
// //   };

// //   const handleCloseModal = () => {
// //     setVisibleModal(null);
// //     setChairList([]); // Clear the chair list when the modal is closed
// //   };

// //   // Example chair IDs for each section
// //   const sections = {
// //     firstSection: ["chair1", "chair2", "chair3", "chair4", "chair5", "chair6", "chair7", "chair8"],
// //     secondSection: ["second-chair-horizontal-0", "second-chair-horizontal-1", "second-chair-horizontal-2", "second-chair-horizontal-3"],
// //     reception: ["receptionArea", "blankInnerArea"],
// //   };

// //   return (
// //     <View style={styles.mainContainer}>
// //       <ScrollView contentContainerStyle={styles.scrollViewContainer}>
// //         <View style={styles.innerContainer}>
// //           {/* First Section */}
// //           <TouchableOpacity
// //             id="firstSection"
// //             onPress={() => handleOpenModal("firstSection", sections.firstSection)}
// //             style={styles.touchableSection}
// //           >
// //             <View style={styles.sectionContainer}>
// //               <View style={styles.verticalChairGroup}>
// //                 <View id="chair1" style={styles.chairVertical} />
// //                 <View id="chair2" style={styles.chairVertical} />
// //               </View>
// //               <View style={styles.horizontalChairGroup}>
// //                 <View style={styles.verticalChairSubGroup}>
// //                   <View id="chair3" style={styles.chairVertical} />
// //                   <View id="chair4" style={styles.chairVertical} />
// //                 </View>
// //                 <View style={styles.grid}>
// //                   {[...Array(14)].map((_, index) => (
// //                     <View
// //                       key={`chair-horizontal-${index}`}
// //                       id={`chair-horizontal-${index}`}
// //                       style={styles.chairHorizontal}
// //                     />
// //                   ))}
// //                 </View>
// //                 <View>
// //                   <View id="chair5" style={styles.chairVertical} />
// //                 </View>
// //               </View>
// //               <View style={styles.verticalChairGroup}>
// //                 <View id="chair6" style={styles.chairVertical} />
// //                 <View id="chair7" style={styles.chairVertical} />
// //                 <View id="chair8" style={styles.chairVertical} />
// //               </View>
// //             </View>
// //           </TouchableOpacity>

// //           {/* Second Section */}
// //           <TouchableOpacity
// //             id="secondSection"
// //             onPress={() => handleOpenModal("secondSection", sections.secondSection)}
// //             style={styles.touchableSection}
// //           >
// //             <View style={[styles.sectionContainer, { paddingVertical: 20 }]}>
// //               <View style={styles.verticalChairGroup}>
// //                 <View style={styles.horizontalChairRow}>
// //                   {[...Array(4)].map((_, index) => (
// //                     <View
// //                       key={`second-chair-horizontal-${index}`}
// //                       id={`second-chair-horizontal-${index}`}
// //                       style={styles.chairHorizontal}
// //                     />
// //                   ))}
// //                 </View>
// //               </View>
// //             </View>
// //           </TouchableOpacity>

// //           {/* Reception Area */}
// //           <TouchableOpacity
// //             id="reception"
// //             onPress={() => handleOpenModal("reception", sections.reception)}
// //             style={styles.touchableSection}
// //           >
// //             <View style={styles.receptionGroup}>
// //               <View id="receptionArea" style={styles.receptionArea}>
// //                 <Text style={styles.receptionText}>Reception Area</Text>
// //               </View>
// //               <View id="blankArea" style={styles.blankArea}>
// //                 <View id="blankInnerArea" style={styles.blankInnerArea} />
// //               </View>
// //             </View>
// //           </TouchableOpacity>
// //         </View>
// //       </ScrollView>

// //       {/* Modal for Sections */}
// //       <Modal
// //         transparent={true}
// //         visible={!!visibleModal}
// //         onRequestClose={handleCloseModal}
// //       >
// //         <View style={styles.modalOverlay}>
// //           <View style={styles.modalContent}>
// //             <Text style={styles.modalText}>
// //               {visibleModal} Popup
// //             </Text>
// //             <Text style={styles.modalText}>Chairs in this section:</Text>
// //             {chairList.map((chairId, index) => (
// //               <Text key={index} style={styles.chairText}>
// //                 {chairId}
// //               </Text>
// //             ))}
// //             <TouchableOpacity onPress={handleCloseModal}>
// //               <Text style={styles.closeButton}>Close</Text>
// //             </TouchableOpacity>
// //           </View>
// //         </View>
// //       </Modal>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   mainContainer: {
// //     flex: 1,
// //     borderWidth: 1.5,
// //     borderColor: "#747373",
// //     margin: 10,
// //     borderRadius: 10,
// //     overflow: "hidden",
// //   },
// //   scrollViewContainer: {
// //     flexGrow: 1,
// //   },
// //   innerContainer: {
// //     padding: 10,
// //   },
// //   touchableSection: {
// //     marginBottom: 16,
// //   },
// //   sectionContainer: {
// //     backgroundColor: "#dae2f5",
// //     paddingHorizontal: 8,
// //     paddingVertical: 16,
// //     flexDirection: "row",
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   verticalChairGroup: {
// //     flexDirection: "column",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     gap: 16,
// //   },
// //   chairVertical: {
// //     height: 24,
// //     width: 20,
// //     backgroundColor: "#a8a4eb",
// //     borderWidth: 1.5,
// //     borderColor: "#70707c",
// //     marginVertical: 2,
// //   },
// //   modalOverlay: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     backgroundColor: "rgba(0, 0, 0, 0.5)",
// //   },
// //   modalContent: {
// //     backgroundColor: "#fff",
// //     padding: 20,
// //     borderRadius: 10,
// //     alignItems: "center",
// //   },
// //   modalText: {
// //     fontSize: 16,
// //     fontWeight: "bold",
// //     marginBottom: 10,
// //   },
// //   chairText: {
// //     fontSize: 14,
// //     color: "#333",
// //   },
// //   closeButton: {
// //     color: "blue",
// //     fontSize: 14,
// //   },
// // });

// // export default Layout;

// // import React, { useState } from "react";
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   ScrollView,
// //   TouchableOpacity,
// //   Modal,
// // } from "react-native";

// // const Layout = () => {
// //   const [visibleModal, setVisibleModal] = useState(null);
// //   const [chairList, setChairList] = useState([]);

// //   const sections = {
// //     firstSection: ["chair1", "chair2", "chair3", "chair4", "chair5", "chair6", "chair7", "chair8"],
// //     secondSection: ["chair9", "chair10", "chair11", "chair12"],
// //     reception: ["receptionChair1", "receptionChair2"],
// //   };

// //   const handleOpenModal = (section, chairIds) => {
// //     setVisibleModal(section);
// //     setChairList(chairIds);
// //   };

// //   const handleCloseModal = () => {
// //     setVisibleModal(null);
// //     setChairList([]);
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <ScrollView contentContainerStyle={styles.scrollView}>
// //         {/* First Section */}
// //         <TouchableOpacity
// //           style={styles.section}
// //           onPress={() => handleOpenModal("First Section", sections.firstSection)}
// //         >
// //           <Text style={styles.sectionLabel}>First Section</Text>
// //           <View style={styles.chairContainer}>
// //             {sections.firstSection.map((chairId, index) => (
// //               <View key={chairId} style={styles.chair} />
// //             ))}
// //           </View>
// //         </TouchableOpacity>

// //         {/* Second Section */}
// //         <TouchableOpacity
// //           style={styles.section}
// //           onPress={() => handleOpenModal("Second Section", sections.secondSection)}
// //         >
// //           <Text style={styles.sectionLabel}>Second Section</Text>
// //           <View style={styles.chairContainer}>
// //             {sections.secondSection.map((chairId, index) => (
// //               <View key={chairId} style={styles.chair} />
// //             ))}
// //           </View>
// //         </TouchableOpacity>

// //         {/* Reception */}
// //         <TouchableOpacity
// //           style={styles.section}
// //           onPress={() => handleOpenModal("Reception", sections.reception)}
// //         >
// //           <Text style={styles.sectionLabel}>Reception</Text>
// //           <View style={styles.chairContainer}>
// //             {sections.reception.map((chairId, index) => (
// //               <View key={chairId} style={styles.chair} />
// //             ))}
// //           </View>
// //         </TouchableOpacity>
// //       </ScrollView>

// //       {/* Modal */}
// //       <Modal transparent visible={!!visibleModal} onRequestClose={handleCloseModal}>
// //         <View style={styles.modalOverlay}>
// //           <View style={styles.modalContent}>
// //             <Text style={styles.modalTitle}>{visibleModal} Chairs</Text>
// //             {chairList.map((chairId, index) => (
// //               <Text key={index} style={styles.modalChairText}>
// //                 {chairId}
// //               </Text>
// //             ))}
// //             <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
// //               <Text style={styles.closeButtonText}>Close</Text>
// //             </TouchableOpacity>
// //           </View>
// //         </View>
// //       </Modal>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 16,
// //     backgroundColor: "#f9f9f9",
// //   },
// //   scrollView: {
// //     flexGrow: 1,
// //   },
// //   section: {
// //     backgroundColor: "#e0e7ff",
// //     padding: 16,
// //     borderRadius: 8,
// //     marginBottom: 16,
// //     borderWidth: 1,
// //     borderColor: "#a0aec0",
// //   },
// //   sectionLabel: {
// //     fontSize: 18,
// //     fontWeight: "600",
// //     marginBottom: 12,
// //     color: "#4a5568",
// //   },
// //   chairContainer: {
// //     flexDirection: "row",
// //     flexWrap: "wrap",
// //     gap: 10,
// //     justifyContent: "flex-start",
// //   },
// //   chair: {
// //     width: 40,
// //     height: 40,
// //     backgroundColor: "#718096",
// //     borderRadius: 4,
// //     borderWidth: 1,
// //     borderColor: "#4a5568",
// //   },
// //   modalOverlay: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     backgroundColor: "rgba(0, 0, 0, 0.5)",
// //   },
// //   modalContent: {
// //     backgroundColor: "#fff",
// //     padding: 20,
// //     borderRadius: 8,
// //     width: "80%",
// //     alignItems: "center",
// //   },
// //   modalTitle: {
// //     fontSize: 20,
// //     fontWeight: "700",
// //     marginBottom: 16,
// //   },
// //   modalChairText: {
// //     fontSize: 16,
// //     color: "#2d3748",
// //     marginBottom: 8,
// //   },
// //   closeButton: {
// //     marginTop: 16,
// //     padding: 10,
// //     backgroundColor: "#4299e1",
// //     borderRadius: 4,
// //   },
// //   closeButtonText: {
// //     color: "#fff",
// //     fontSize: 16,
// //     fontWeight: "600",
// //   },
// // });

// // export default Layout;

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Modal,
// } from "react-native";

// const Layout = () => {
//   const [visibleModal, setVisibleModal] = useState(null);
//   const [chairList, setChairList] = useState([]);
//   const [selectedChair, setSelectedChair] = useState(null); // Track selected chair

//   const sections = {
//     firstSection: ["chair1", "chair2", "chair3", "chair4", "chair5", "chair6", "chair7", "chair8"],
//     secondSection: ["chair9", "chair10", "chair11", "chair12"],
//     reception: ["receptionChair1", "receptionChair2"],
//   };

//   const handleOpenModal = (section, chairIds) => {
//     setVisibleModal(section);
//     setChairList(chairIds);
//     setSelectedChair(null); // Reset selected chair when opening a new modal
//   };

//   const handleCloseModal = () => {
//     setVisibleModal(null);
//     setChairList([]);
//     setSelectedChair(null); // Clear the selected chair when closing the modal
//   };

//   const handleChairSelect = (chairId) => {
//     setSelectedChair(chairId); // Update the selected chair
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollView}>
//         {/* First Section */}
//         <TouchableOpacity
//           style={styles.section}
//           onPress={() => handleOpenModal("First Section", sections.firstSection)}
//         >
//           <Text style={styles.sectionLabel}>First Section</Text>
//           <View style={styles.chairContainer}>
//             {sections.firstSection.map((chairId) => (
//               <TouchableOpacity
//                 key={chairId}
//                 style={[
//                   styles.chair,
//                   selectedChair === chairId ? styles.selectedChair : {},
//                 ]}
//                 onPress={() => handleChairSelect(chairId)} // Handle chair selection
//               >
//                 <Text style={styles.chairText}>{chairId}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </TouchableOpacity>

//         {/* Second Section */}
//         <TouchableOpacity
//           style={styles.section}
//           onPress={() => handleOpenModal("Second Section", sections.secondSection)}
//         >
//           <Text style={styles.sectionLabel}>Second Section</Text>
//           <View style={styles.chairContainer}>
//             {sections.secondSection.map((chairId) => (
//               <TouchableOpacity
//                 key={chairId}
//                 style={[
//                   styles.chair,
//                   selectedChair === chairId ? styles.selectedChair : {},
//                 ]}
//                 onPress={() => handleChairSelect(chairId)} // Handle chair selection
//               >
//                 <Text style={styles.chairText}>{chairId}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </TouchableOpacity>

//         {/* Reception */}
//         <TouchableOpacity
//           style={styles.section}
//           onPress={() => handleOpenModal("Reception", sections.reception)}
//         >
//           <Text style={styles.sectionLabel}>Reception</Text>
//           <View style={styles.chairContainer}>
//             {sections.reception.map((chairId) => (
//               <TouchableOpacity
//                 key={chairId}
//                 style={[
//                   styles.chair,
//                   selectedChair === chairId ? styles.selectedChair : {},
//                 ]}
//                 onPress={() => handleChairSelect(chairId)} // Handle chair selection
//               >
//                 <Text style={styles.chairText}>{chairId}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </TouchableOpacity>
//       </ScrollView>

//       {/* Modal */}
//       <Modal transparent visible={!!visibleModal} onRequestClose={handleCloseModal}>
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>{visibleModal} Chairs</Text>
//             {chairList.map((chairId, index) => (
//               <Text key={index} style={styles.modalChairText}>
//                 {chairId}
//               </Text>
//             ))}
//             <Text style={styles.modalChairText}>
//               Selected Chair: {selectedChair || "None"}
//             </Text>
//             <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
//               <Text style={styles.closeButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#f9f9f9",
//   },
//   scrollView: {
//     flexGrow: 1,
//   },
//   section: {
//     backgroundColor: "#e0e7ff",
//     padding: 16,
//     borderRadius: 8,
//     marginBottom: 16,
//     borderWidth: 1,
//     borderColor: "#a0aec0",
//   },
//   sectionLabel: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginBottom: 12,
//     color: "#4a5568",
//   },
//   chairContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     gap: 10,
//     justifyContent: "flex-start",
//   },
//   chair: {
//     width: 40,
//     height: 40,
//     backgroundColor: "#718096",
//     borderRadius: 4,
//     borderWidth: 1,
//     borderColor: "#4a5568",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   chairText: {
//     color: "#fff",
//     fontSize: 10,
//   },
//   selectedChair: {
//     backgroundColor: "#48bb78", // Change background when selected
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   modalContent: {
//     backgroundColor: "#fff",
//     padding: 20,
//     borderRadius: 8,
//     width: "80%",
//     alignItems: "center",
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: "700",
//     marginBottom: 16,
//   },
//   modalChairText: {
//     fontSize: 16,
//     color: "#2d3748",
//     marginBottom: 8,
//   },
//   closeButton: {
//     marginTop: 16,
//     padding: 10,
//     backgroundColor: "#4299e1",
//     borderRadius: 4,
//   },
//   closeButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
// });

// export default Layout;

// import React, { useState } from "react";
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from "react-native";

// const Layout = () => {
//   const [visibleModal, setVisibleModal] = useState(null);
//   const [chairList, setChairList] = useState([]);

//   const sections = {
//     firstSection: ["chair1", "chair2", "chair3", "chair4", "chair5", "chair6", "chair7", "chair8"],
//     secondSection: ["chair9", "chair10", "chair11", "chair12"],
//     reception: ["receptionChair1", "receptionChair2"],
//   };

//   const handleOpenModal = (section, chairIds) => {
//     setVisibleModal(section);
//     setChairList(chairIds);
//   };

//   const handleCloseModal = () => {
//     setVisibleModal(null);
//     setChairList([]);
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollView}>
//         {/* First Section */}
//         <TouchableOpacity
//           style={styles.section}
//           onPress={() => handleOpenModal("First Section", sections.firstSection)}
//         >
//           <Text style={styles.sectionLabel}>First Section</Text>
//           <View style={styles.chairContainer}>
//             {sections.firstSection.map((chairId) => (
//               <View key={chairId} style={styles.chair} />
//             ))}
//           </View>
//         </TouchableOpacity>

//         {/* Second Section */}
//         <TouchableOpacity
//           style={styles.section}
//           onPress={() => handleOpenModal("Second Section", sections.secondSection)}
//         >
//           <Text style={styles.sectionLabel}>Second Section</Text>
//           <View style={styles.chairContainer}>
//             {sections.secondSection.map((chairId) => (
//               <View key={chairId} style={styles.chair} />
//             ))}
//           </View>
//         </TouchableOpacity>

//         {/* Reception */}
//         <TouchableOpacity
//           style={styles.section}
//           onPress={() => handleOpenModal("Reception", sections.reception)}
//         >
//           <Text style={styles.sectionLabel}>Reception</Text>
//           <View style={styles.chairContainer}>
//             {sections.reception.map((chairId) => (
//               <View key={chairId} style={styles.chair} />
//             ))}
//           </View>
//         </TouchableOpacity>
//       </ScrollView>

//       {/* Modal */}
//       <Modal transparent visible={!!visibleModal} onRequestClose={handleCloseModal}>
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>{visibleModal} Chairs</Text>
//             {chairList.map((chairId, index) => (
//               <Text key={index} style={styles.modalChairText}>
//                 {chairId}
//               </Text>
//             ))}
//             <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
//               <Text style={styles.closeButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#f9f9f9",
//   },
//   scrollView: {
//     flexGrow: 1,
//   },
//   section: {
//     backgroundColor: "#e0e7ff",
//     padding: 16,
//     borderRadius: 8,
//     marginBottom: 16,
//     borderWidth: 1,
//     borderColor: "#a0aec0",
//   },
//   sectionLabel: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginBottom: 12,
//     color: "#4a5568",
//   },
//   chairContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-evenly", // Distribute items evenly
//     gap: 10, // Space between chairs
//   },
//   chair: {
//     width: 60, // Adjusted chair size
//     height: 60, // Adjusted chair size
//     backgroundColor: "#718096",
//     borderRadius: 4,
//     borderWidth: 1,
//     borderColor: "#4a5568",
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   modalContent: {
//     backgroundColor: "#fff",
//     padding: 20,
//     borderRadius: 8,
//     width: "80%",
//     alignItems: "center",
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: "700",
//     marginBottom: 16,
//   },
//   modalChairText: {
//     fontSize: 16,
//     color: "#2d3748",
//     marginBottom: 8,
//   },
//   closeButton: {
//     marginTop: 16,
//     padding: 10,
//     backgroundColor: "#4299e1",
//     borderRadius: 4,
//   },
//   closeButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
// });

// export default Layout;

import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from "react-native";

const Layout = () => {
  const [visibleModal, setVisibleModal] = useState(null);
  const [chairList, setChairList] = useState([]);

  const sections = {
    firstSection: ["chair1", "chair2", "chair3", "chair4", "chair5", "chair6", "chair7", "chair8"],
    secondSection: ["chair9", "chair10", "chair11", "chair12"],
    reception: ["receptionChair1", "receptionChair2"],
  };

  const handleOpenModal = (section, chairIds) => {
    setVisibleModal(section);
    setChairList(chairIds);
  };

  const handleCloseModal = () => {
    setVisibleModal(null);
    setChairList([]);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* First Section */}
        <TouchableOpacity
          style={styles.section}
          onPress={() => handleOpenModal("First Section", sections.firstSection)}
        >
          <Text style={styles.sectionLabel}>First Section</Text>
          <View style={styles.chairContainer}>
            {sections.firstSection.map((chairId) => (
              <View key={chairId} style={[styles.chair, styles.chairHorizontal]} />
            ))}
          </View>
        </TouchableOpacity>

        {/* Second Section */}
        <TouchableOpacity
          style={styles.section}
          onPress={() => handleOpenModal("Second Section", sections.secondSection)}
        >
          <Text style={styles.sectionLabel}>Second Section</Text>
          <View style={styles.chairContainer}>
            {sections.secondSection.map((chairId) => (
              <View key={chairId} style={[styles.chair, styles.chairHorizontal]} />
            ))}
          </View>
        </TouchableOpacity>

        {/* Reception */}
        <TouchableOpacity
          style={styles.section}
          onPress={() => handleOpenModal("Reception", sections.reception)}
        >
          <Text style={styles.sectionLabel}>Reception</Text>
          <View style={styles.chairContainer}>
            {sections.reception.map((chairId) => (
              <View key={chairId} style={[styles.chair, styles.chairVertical]} />
            ))}
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal */}
      <Modal transparent visible={!!visibleModal} onRequestClose={handleCloseModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{visibleModal} Chairs</Text>
            {chairList.map((chairId, index) => (
              <Text key={index} style={styles.modalChairText}>
                {chairId}
              </Text>
            ))}
            <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  scrollView: {
    flexGrow: 1,
  },
  section: {
    backgroundColor: "#dae2f5",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1.5,
    borderColor: "#747373",
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: "#4a5568",
  },
  chairContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: 10,
  },
  chair: {
    backgroundColor: "#a8a4eb",
    borderWidth: 1.5,
    borderColor: "#70707c",
  },
  chairHorizontal: {
    width: 60,
    height: 20,
  },
  chairVertical: {
    width: 20,
    height: 24,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
  },
  modalChairText: {
    fontSize: 16,
    color: "#2d3748",
    marginBottom: 8,
  },
  closeButton: {
    marginTop: 16,
    padding: 10,
    backgroundColor: "#4299e1",
    borderRadius: 4,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Layout;
