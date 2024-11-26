import React,{ useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Alert, Button, StyleSheet, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';
import { WebView } from 'react-native-webview';
import DateTimePicker from '@react-native-community/datetimepicker';
import AvailableSlotsPopup from './Component/AvailableSlotsPopup'

const App = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [workstations, setWorkstations] = useState([]);
    const [layoutId, setLayoutId] = useState(null);
    const [data, setData] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const clientId = '1000.5V2JD5O0NSFV6PJ2I27YH7Y56YPH7Y';
    const clientSecret = 'f19efce90b5d48556bfe75ee45b598539a93996315';
    const refreshToken = '1000.946ad993f27b2363dacd7d43155af671.9ce094a4408eb8b60ab16961671961a9';
  

    const handleOpenPopup = () => {
        setIsPopupVisible(true);
      };
    
      const handleClosePopup = () => {
        setIsPopupVisible(false);
      };

      

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
          console.log("access token generated")
          
          
        } catch (err) {
          const errorMessage = err.message || 'An unknown error occurred while fetching access token';
          setError(errorMessage);
          Alert.alert('Error', errorMessage);
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
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

      const fetchWorkstations = async () => {
        if (!accessToken) {
          Alert.alert('Access token is missing', 'Please fetch the access token first.');
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
                Authorization: `Zoho-oauthtoken ${accessToken}`,
              },
            }
          );
      
          if (!response.ok) {
            throw new Error('Failed to fetch workstation data');
          }
          console.log("Workstation fetched")
          const result = await response.json();
          setWorkstations(result.data);
        } catch (err) {
          const errorMessage = err.message || 'An unknown error occurred while fetching workstation data';
          setError(errorMessage);
          Alert.alert('Error', errorMessage);
        } finally {
          setLoading(false);
        }
      };

      useEffect(() => {
        if (accessToken) {
          fetchLayoutData();
        }
      }, [accessToken]);


      const onDateChange = (event, selectedDate) => {
        setShowDatePicker(false);
        if (selectedDate) {
          const formattedDate = new Intl.DateTimeFormat('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          }).format(new Date(selectedDate));
          setSelectedDate(formattedDate);
        }
      };

    const htmlContent = (desk)=>
    {
        const desksJSON = JSON.stringify(desk);
    
        return `
   <!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport"  initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>


  <style>
    .chair_h {
    /* height: 20px;
    width: 24px; */
    height: 20px;
    width: 100%;
    min-width: 30px;
    max-width: 30px;
    background: #a8a4eb;
    border: 1.5px solid #70707c;
}
.chair_h_large{
    height: 25px;
    /* width: 35px;  */
    min-width: 35px;
}

.chair_vh {
    height: 100%;
    min-height: 30px;
    max-height: 30px;
    width: 20px;
    background: #a8a4eb;
    border: 1.5px solid #70707c;
}
.chair_vh_large{
    width: 25px;
    min-height: 35px;
}
.section_container {
    background: #dae2f5;
    padding: 20px 15px;
}
.main_container {
    padding: 20px 20px 20px 20px;
    width:1200px;
    
}
.reception_area {
    background-color: #f9deb8;
    padding: 20px 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin-top: 38px; */
    height: 100%;
}
.circle{
    position: absolute;
    top: 50%;
    z-index: 1;
    margin-top: 35px;
}
     #popup {
        display: none; /* Hidden by default */
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 20px;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        width: 80%;
        max-width: 400px;
        z-index: 9999;
    }

    .popup-buttons button {
        padding: 10px;
        margin: 5px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
    }

    .popup-buttons button:hover {
        background-color: #f0f0f0;
    }

    /* Optional: Close button style */
    #popup button {
        background-color: blue;
        color: white;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        border: none;
    }
  </style>

</head>
<body>
<div id="workstationContainer"></div>
   
    <div class="main_container">
        <div class="container flex gap-2 px-2 py-2 ">
            <!-- this is for the first row box -->
            <div class="first_box flex flex-row gap-x-1.5 items-start w-full">
                <div class="first_part_content w-full">
                      <!-- first section -->
                 <div class="flex gap-2">
                    <section class="section_container flex flex-row justify-center items-center gap-x-4 w-full px-5">
                        <div class="flex flex-col justify-center items-center gap-y-9">
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                        </div>
                        <div class="flex flex-row justify-center items-center gap-x-1">
                            <div class="flex flex-col justify-center items-center gap-y-2">
                                <div class="chair_vh chair_vh_large" id=""></div>
                                <div class="chair_vh chair_vh_large" id=""></div>
                            </div>
                            <div class="grid grid-cols-7 gap-x-0.5 gap-y-1.5 min-w-[230px]">
                                <div class="chair_h" id=""></div>
                                <div class="chair_h" id=""></div>
                                <div class="chair_h" id=""></div>
                                <div class="chair_h" id=""></div>
                                <div class="chair_h" id=""></div>
                                <div class="chair_h" id=""></div>
                                <div class="chair_h" id=""></div>
                                <div class="chair_h" id=""></div>
                                <div class="chair_h" id=""></div>
                                <div class="chair_h" id=""></div>
                                <div class="chair_h" id=""></div>
                                <div class="chair_h" id=""></div>
                                <div class="chair_h" id=""></div>
                                <div class="chair_h" id=""></div>
                            </div>
                            <div>
                                <div class="chair_vh"></div>
                            </div>
                        </div>
                        <div class="flex flex-col justify-center items-center gap-y-1">
                            <div class="chair_vh chair_vh_large" id=""></div>
                            <div class="chair_vh chair_vh_large" id=""></div>
                            <div class="chair_vh chair_vh_large" id=""></div>
                        </div>
                    </section>
        
                     <!-- second section -->
                    <section class="section_container py-6 w-full">
                        <div class="flex flex-col justify-center items-end gap-y-9">
                            <div class="flex flex-row justify-center items-center gap-x-1">
                                <div class="chair_h chair_h_large" id=""></div>
                                <div class="chair_h chair_h_large" id=""></div>
                                <div class="chair_h chair_h_large" id=""></div>
                                <div class="chair_h chair_h_large" id=""></div>
                            </div>
                            <div class="flex flex-row justify-center items-center gap-x-1">
                                <div class="chair_h chair_h_large" id=""></div>
                                <div class="chair_h chair_h_large" id=""></div>
                                <div class="chair_h chair_h_large" id=""></div>
                            </div>
                        </div>
                       
                    </section>
                </div>

                <!-- second row box -->
            <div class="second_box flex">
                <div class="flex flex-col gap-2 mr-[10px] mt-[20px]">

                    <div class="flex flex-col w-[fit-content] gap-[10px]">
                <!-- Washrooms -->
                <div class="px-[20px] py-[30px] bg-fuchsia-100 mb-[-15px] h-auto mr-[10px]" id="locked_area">
                    <p class="font-bold text-[25px] text-center rotate-[-90deg]">Wash <br>rooms</p>
                 </div>

                 <!-- booking area -->
                 
                 <section class="section_container mr-[8px] pb-2 pt-3 px-1 flex flex-row justify-center gap-[15px] w-auto mt-[20px]">
                    <div class="flex flex-col gap-y-1 mt-[8px]">
                        <div class="chair_vh" id=""></div>
                        <div class="chair_vh" id=""></div>
                    </div>
                    <div class="flex flex-row gap-x-1">
                        <div class="chair_h" id=""></div>
                        <div class="chair_h" id=""></div>
                    </div>

                 </section>

                 <section class="section_container pb-2 mr-[8px] pt-3 px-1 flex flex-row justify-center gap-[15px] w-auto">
                    <div class="flex flex-col gap-y-1 mb-[8px]">
                        <div class="chair_vh" id=""></div>
                        <div class="chair_vh" id=""></div>
                    </div>
                    <div class="flex flex-row gap-x-1 items-end">
                        <div class="chair_h" id=""></div>
                        <div class="chair_h" id=""></div>
                    </div>

                 </section>
                 
                 <section class="section_container pb-3 pt-3 px-4 flex flex-row justify-end gap-2 w-auto mr-[8px]">
                    <div class="chair_h" id=""></div>
                 </section>

                 <section class="section_container pb-2 mr-[8px] pt-3 px-1 flex flex-row justify-center gap-[15px] w-auto">
                    <div class="flex flex-col gap-y-1 mb-[8px]">
                        <div class="chair_vh" id=""></div>
                        <div class="chair_vh" id=""></div>
                    </div>
                    <div class="flex flex-row gap-x-1 items-end">
                        <div class="chair_h" id=""></div>
                        <div class="chair_h" id=""></div>
                    </div>

                 </section>
                </div>

                 <!-- RA -->
                  <div class="flex gap-[15px] items-end relative">

                  
                 <div class="px-[15px] py-[12px] bg-[#cda34c] h-[fit-content] w-full" id="locked_area">
                    <p class="font-bold text-[25px] text-center">RA</p>
                 </div>

                 <div class="flex items-end gap-[20px] absolute left-[112%]">
                    <div class="flex gap-2">
                        <section class="section_container py-[15px] px-[10px] flex justify-center items-center h-[fit-content]">
                            <div class="flex flex-col-reverse justify-center items-center gap-y-2">
                                <div class="chair_h" id=""></div>
                                <div class="flex flex-row justify-center items-center gap-x-1">
                                    <div class="chair_h" id=""></div>
                                    <div class="chair_h" id=""></div>
                                </div>
                            </div>
                         </section>
        
                         <section class="section_container py-[15px] px-[10px] flex justify-center items-center h-[fit-content]">
                            <div class="flex flex-col-reverse justify-center items-center gap-y-2">
                                <div class="chair_h" id=""></div>
                                <div class="flex flex-row justify-center items-center gap-x-1">
                                    <div class="chair_h" id=""></div>
                                    <div class="chair_h" id=""></div>
                                </div>
                            </div>
                         </section>
        
                         <section class="section_container py-[15px] px-[10px] flex justify-center items-center h-[fit-content]">
                            <div class="flex flex-col-reverse justify-center items-center gap-y-2">
                                <div class="chair_h" id=""></div>
                                <div class="flex flex-row justify-center items-center gap-x-1">
                                    <div class="chair_h" id=""></div>
                                    <div class="chair_h" id=""></div>
                                </div>
                            </div>
                         </section>
        
                    </div>
                                <!-- server, recreation and fire exit -->
        
                                <div class="flex flex-row items-center gap-3">
                                    <div class="flex gap-2" id="locked_area">
                                        <div class="flex flex-col gap-2">

                                        <div class="bg-[#a8a4eb] px-[20px] py-[10px] w-[200px]">
                                            <p class="font-bold text-[25px] text-center">Server <br>Room</p>
                                         </div>

                                         <div class="px-[20px] py-[10px] bg-[#cda34c] w-[200px]">
                                            <p class="font-bold text-[25px] text-center">Recreation <br>Area</p>
                                         </div>
                                        </div>

                                        <div class="px-[20px] py-[10px] bg-[#ffd2e2] flex justify-center items-center w-[250px]" bis_skin_checked="1">
                                            <p class="font-bold text-[25px] text-center">Fire Exit</p>
                                         </div>
                                        
                                         
                                    </div>
                    
                                </div>
                                </div>

                 </div>

                </div>
                
                    <div class="flex flex-col gap-[15px] mt-[12px]">
                        <div class="flex flex-col gap-3">
                            <section class="section_container flex justify-center items-center h-full">
                               <div class="flex flex-col justify-center items-center gap-y-1 rotate-[-90deg]">
                                   <div class="chair_h" id=""></div>
                                   <div class="flex flex-row justify-center items-center gap-x-1">
                                       <div class="chair_h" id=""></div>
                                       <div class="chair_h" id=""></div>
                                   </div>
                               </div>
                            </section>
           
                            <section class="section_container flex justify-center items-center h-full">
                               <div class="flex flex-col justify-center items-center gap-y-1 rotate-[-90deg]">
                                   <div class="chair_h" id=""></div>
                                   <div class="flex flex-row justify-center items-center gap-x-1">
                                       <div class="chair_h" id=""></div>
                                       <div class="chair_h" id=""></div>
                                   </div>
                               </div>
                            </section>
           
                            </div>
                        <div class="flex items-center justify-center">
                            <div class="grid grid-cols-2 gap-y-[3px] gap-x-[3px]">
                                <div class="chair_vh" id=""></div>
                                <div class="chair_vh" id=""></div>
                                <div class="chair_vh" id=""></div>
                                <div class="chair_vh" id=""></div>
                                <div class="chair_vh" id=""></div>
                                <div class="chair_vh" id=""></div>
                                <div class="chair_vh" id=""></div>
                                <div class="chair_vh" id=""></div>
                                <div class="chair_vh" id=""></div>
                                <div class="chair_vh" id=""></div>
                                <div class="chair_vh" id=""></div>
                                <div class="chair_vh" id=""></div>
                                <div class="chair_vh" id=""></div>
                                <div class="chair_vh" id=""></div>
                            </div>
                        </div>
                    </div>


                    <div class="flex items-end flex-col mt-[20px] ml-[30px] gap-[55px]">
                        <div class="grid grid-cols-2 gap-y-[3px] gap-x-[3px]">
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                        </div>
                        <section class=" section_container flex justify-center items-center ml-[15px]">
                            <div class="grid grid-cols-3 gap-y-[3px] gap-x-[5px]">
                                <div class="chair_h" id=""></div>
                                <div class="chair_h" id=""></div>
                                <div class="chair_h" id=""></div>
                                <div class="chair_h" id=""></div>
                                <div class="chair_h" id=""></div>
                                <div class="chair_h" id=""></div>
                            </div>

                        </section>
                        
                    </div>

                    <div class="flex items-start flex-col mt-[20px] ml-[30px] gap-[55px]">
                        <div class="grid grid-cols-2 gap-y-[3px] gap-x-[3px]">
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh opacity-0" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                            <div class="chair_vh" id=""></div>
                        </div>
                        
                        <div class="flex gap-2">
                            <section class="section_container py-[15px] px-[10px] flex justify-center items-center h-[fit-content]">
                                <div class="flex flex-col-reverse justify-center items-center gap-y-2">
                                    <div class="chair_h" id=""></div>
                                    <div class="flex flex-row justify-center items-center gap-x-1">
                                        <div class="chair_h" id=""></div>
                                        <div class="chair_h" id=""></div>
                                    </div>
                                </div>
                             </section>
            
                             <section class="section_container py-[15px] px-[10px] flex justify-center items-center h-[fit-content]">
                                <div class="flex flex-col-reverse justify-center items-center gap-y-2">
                                    <div class="chair_h" id=""></div>
                                    <div class="flex flex-row justify-center items-center gap-x-1">
                                        <div class="chair_h" id=""></div>
                                        <div class="chair_h" id=""></div>
                                    </div>
                                </div>
                             </section>
            
                        </div>
                    </div>
            </div>
                </div>

            </div>
            <div class="flex flex-col gap-2 w-full items-end mt-[38px]">


            
            <section class="flex flex-row items-start gap-3 w-full">
                <!-- Reception area -->
                 <div class="flex flex-col h-full relative">
                    <div class="flex flex-col gap-[50px] items-end">
                <div class="reception_area" id="locked_area">
                    <p class="font-bold text-[25px] text-center">Reception <br>Area</p>
                 </div>
                 <div class="circle w-[150px] h-[180px] border-[35px] border-[#e9e7e7] rotate-[345deg] rounded-[100%]" id="locked_area">

                 </div>
                </div>
                </div>
                 <!-- blank area -->
                  <div class="flex flex-col gap-2">
                    <div class="px-[30px] py-5 bg-green-200 h-[130px]" id="locked_area">
                        <div class="bg-white border border-black px-[50px] py-7 h-full"></div>

                     </div>

                     <section class="section_container py-2.5 px-2 flex justify-center items-center h-full">
                        <div class="flex flex-row-reverse justify-center items-center gap-x-2">
                            <div class="chair_vh chair_vh_large" id=""></div>
                            <div class="flex flex-col justify-center items-center gap-y-1">
                                <div class="chair_vh chair_vh_large" id=""></div>
                                <div class="chair_vh chair_vh_large" id=""></div>
                            </div>
                        </div>
                     </section>

                  </div>
                 
                 <!-- common seating -->
                  <div class="flex flex-col w-full">
                    <div class="px-[30px] py-[45px] bg-[#cda34c] mb-[-15px] flex justify-center items-center mb-[20px]" id="locked_area">
                        <p class="font-bold text-[25px] text-center">Common <br>Seating</p>
    
                     </div>
                     <div class="flex justify-between items-end">
                        <section class=" section_container flex justify-center items-center w-[65%]">
                            <div class="grid grid-cols-3 gap-y-[15px] gap-x-[5px]">
                                <div class="chair_h chair_h_large" id=""></div>
                                <div class="chair_h chair_h_large" id=""></div>
                                <div class="chair_h chair_h_large" id=""></div>
                                <div class="chair_h chair_h_large" id=""></div>
                                <div class="chair_h chair_h_large" id=""></div>
                                <div class="chair_h chair_h_large" id=""></div>
                            </div>
    
                        </section>

                       
                            <div class="grid grid-cols-1 gap-y-[10px] gap-x-[5px]">
                                <div class="chair_vh chair_vh_large" id=""></div>
                            </div>
    
                       
                     </div>
                
                  </div>
               

             </section>


                <div class="flex flex-row justify-center items-center gap-x-2 mt-[15px] mb-[15px]">
                    <div class="grid grid-cols-8 gap-x-[5px] gap-y-1.5 min-w-56">
                        <div class="chair_h h-[25px] min-w-[40px] max-w-[40px] m" id=""></div>
                        <div class="chair_h h-[25px] min-w-[40px] max-w-[40px]" id=""></div>
                        <div class="chair_h h-[25px] min-w-[40px] max-w-[40px]" id=""></div>
                        <div class="chair_h h-[25px] min-w-[40px] max-w-[40px]" id=""></div>
                        <div class="chair_h h-[25px] min-w-[40px] max-w-[40px]" id=""></div>
                        <div class="chair_h h-[25px] min-w-[40px] max-w-[40px]" id=""></div>
                        <div class="chair_h h-[25px] min-w-[40px] max-w-[40px]" id=""></div>
                        <div class="chair_h h-[25px] min-w-[40px] max-w-[40px]" id=""></div>
                        <div class="chair_h h-[25px] min-w-[40px] max-w-[40px]" id=""></div>
                        <div class="chair_h h-[25px] min-w-[40px] max-w-[40px]" id=""></div>
                        <div class="chair_h h-[25px] min-w-[40px] max-w-[40px]" id=""></div>
                        <div class="chair_h h-[25px] min-w-[40px] max-w-[40px]" id=""></div>
                        <div class="chair_h h-[25px] min-w-[40px] max-w-[40px]" id=""></div>
                        <div class="chair_h h-[25px] min-w-[40px] max-w-[40px]" id=""></div>
                        <div class="chair_h h-[25px] min-w-[40px] max-w-[40px]" id=""></div>
                        <div class="chair_h h-[25px] min-w-[40px] max-w-[40px]" id=""></div>
                    </div>
                </div>

                <div class="flex w-[45%] justify-between">
                    <div class="px-[40px] py-[20px] bg-green-200 h-full" id="locked_area">
                        <div class="bg-white border border-black px-[60px] py-7 h-full"></div>

                     </div>
                    <div class="chair_vh chair_vh_large" id=""></div>
                </div>

                <div class="flex flex-row justify-center items-center gap-x-2 mt-[10px]">
                    <div class="grid grid-cols-6 gap-x-[4px] gap-y-[4px]">
                        <div class="chair_h chair_h_large" id=""></div>
                        <div class="chair_h chair_h_large" id=""></div>
                        <div class="chair_h chair_h_large" id=""></div>
                        <div class="chair_h chair_h_large" id=""></div>
                        <div class="chair_h chair_h_large" id=""></div>
                        <div class="chair_h chair_h_large" id=""></div>
                        <div class="chair_h chair_h_large" id=""></div>
                        <div class="chair_h chair_h_large" id=""></div>
                        <div class="chair_h chair_h_large" id=""></div>
                        <div class="chair_h chair_h_large" id=""></div>
                        <div class="chair_h chair_h_large" id=""></div>
                        <div class="chair_h chair_h_large" id=""></div>
                    </div>
                </div>
                <div class="flex flex-row justify-center items-center gap-x-2 mt-[10px]">
                    <div class="grid grid-cols-6 gap-x-[4px] gap-y-[4px]">
        <div class="chair_h chair_h_large" id="WORK1"></div>
        <div class="chair_h chair_h_large" id="WORK2"></div>
        <div class="chair_h chair_h_large" id="WORK3"></div>
        <div class="chair_h chair_h_large" id="WORK4"></div>
        <div class="chair_h chair_h_large" id="WORK5"></div>
        <div class="chair_h chair_h_large" id="WORK6"></div>
        <div class="chair_h chair_h_large" id="WORK7"></div>
        <div class="chair_h chair_h_large" id="WORK8"></div>
        <div class="chair_h chair_h_large" id="WORK9"></div>
        <div class="chair_h chair_h_large" id="WORK10"></div>
        <div class="chair_h chair_h_large" id="WORK11"></div>
        <div class="chair_h chair_h_large" id="WORK12"></div>
                    </div>
                </div>   
             </div>         
        </div>
    </div>
    
<div id="popup" style="display: none;">
    <div class="popup-content"></div>
    <div class="popup-buttons"></div>
    <button onclick="closePopup()">Close</button>
</div>

<script>
    function closePopup() {
        const popup = document.getElementById('popup');
        popup.style.display = 'none';
    }
</script>

<script>
    setTimeout(function () {
        const desks = ${desksJSON}; // Assuming this JSON is passed from your server or injected by WebView

        desks.forEach((desk) => {
            // Loop to match chair ID and apply background color if conditions match
            for (let i = 0; i <= 12; i++) {
                const chair = document.getElementById('WORK' + i);

                if (chair && 'WORK' + i === desk.WorkstationId) {
                    // Apply background color based on Booking_Status
                    if (desk.Booking_Status === 'Booked') {
                        chair.style.backgroundColor = 'red';
                    }
                    else if (desk.Booking_Status === 'Open') {
                        chair.style.backgroundColor = 'green';
                    }
                    else if (desk.Booking_Status === 'Blocked') {
                        chair.style.backgroundColor = 'black';
                    }

                    // Add the onclick event handler to each chair
                    chair.onclick = function() {
                        // Get a reference to your popup
                        const popup = document.getElementById('popup');  // Adjust the popup element ID
                        
                        // Clear previous buttons if any
                        const buttonsContainer = popup.querySelector('.popup-buttons');
                        buttonsContainer.innerHTML = '';

                        // Display the booking details in the popup (You can adjust the content of the popup as needed)
                        const popupContent = popup.querySelector('.popup-content');
                        popupContent.innerHTML = 'Chair ID: '+(desk.WorkstationId)+' is '+(desk.Booking_Status)+' and ID is '+(desk.ID)+'.';

                        // Conditionally create and display buttons based on Booking_Status
                        if (desk.Booking_Status === 'Booked') {
                            const cancelButton = document.createElement('button');
                            cancelButton.textContent = 'Cancel Booking';
                            cancelButton.onclick = function() {
                                // Logic to handle booking cancellation (API call for cancel)
                                refreshTokenAndCancelBooking(desk.ID);
                            };
                            buttonsContainer.appendChild(cancelButton);
                        } 
                        else if (desk.Booking_Status === 'Open') {
                            const bookButton = document.createElement('button');
                            bookButton.textContent = 'Book Now';
                            bookButton.onclick = function() {
                                // Logic to handle booking the chair (API call for booking)
                                refreshTokenAndBookNow(desk.ID);
                            };
                            buttonsContainer.appendChild(bookButton);
                        } 
                        else if (desk.Booking_Status === 'Blocked') {
                            const openButton = document.createElement('button');
                            openButton.textContent = 'Open Chair';
                            openButton.onclick = function() {
                                // Logic to handle unblocking the chair (API call for unblocking)
                                refreshTokenAndOpenChair(desk.ID);
                            };
                            buttonsContainer.appendChild(openButton);
                        }

                        // Show the popup (assuming you have a way to display it)
                        popup.style.display = 'block';
                    };
                }
            }
        });

    }, 100);

    // Function to refresh the token and then cancel the booking
    function refreshTokenAndCancelBooking(workstationId) {
        fetch('https://accounts.zoho.in/oauth/v2/token?refresh_token=1000.fd67d1aca88f397ffca45bd71465efd6.e266c29229ef2713d4d855e24750963b&client_id=1000.5V2JD5O0NSFV6PJ2I27YH7Y56YPH7Y&client_secret=f19efce90b5d48556bfe75ee45b598539a93996315&grant_type=refresh_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then(response => response.json())
        .then(data => {
            // Call to cancel booking API
            patchBookingStatus(workstationId, 'Open');
        })
        .catch(error => {
            console.error('Error refreshing token:', error);
        });
    }

    // Function to refresh the token and then book the chair
    function refreshTokenAndBookNow(workstationId) {
        fetch('https://accounts.zoho.in/oauth/v2/token?refresh_token=1000.fd67d1aca88f397ffca45bd71465efd6.e266c29229ef2713d4d855e24750963b&client_id=1000.5V2JD5O0NSFV6PJ2I27YH7Y56YPH7Y&client_secret=f19efce90b5d48556bfe75ee45b598539a93996315&grant_type=refresh_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then(response => response.json())
        .then(data => {
            // Call to book chair API
            patchBookingStatus(workstationId, 'Booked');
        })
        .catch(error => {
            console.error('Error refreshing token:', error);
        });
    }

    // Function to refresh the token and then unblock the chair
    function refreshTokenAndOpenChair(workstationId) {
        fetch('https://accounts.zoho.in/oauth/v2/token?refresh_token=1000.fd67d1aca88f397ffca45bd71465efd6.e266c29229ef2713d4d855e24750963b&client_id=1000.5V2JD5O0NSFV6PJ2I27YH7Y56YPH7Y&client_secret=f19efce90b5d48556bfe75ee45b598539a93996315&grant_type=refresh_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then(response => response.json())
        .then(data => {
            // Call to unblock chair API
            patchBookingStatus(workstationId, 'Open');
        })
        .catch(error => {
            console.error('Error refreshing token:', error);
        });
    }

    // Function to update the booking status via PATCH request
    function patchBookingStatus(workstationId, status) {
        fetch('https://creator.zoho.in/api/v2/crmmasterssupport/nucleuscbs/report/All_Workstations/'+(workstationId), {
            method: 'PATCH',
            headers: {
                'Authorization': 'Zoho-oauthtoken 1000.1b574779880d2a3020e96e4ffdd1855a.23fc5a668624d21b651e0a783473bc00',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: {
                    "Booking_Status": status,
                }
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Booking status updated successfully:', data);
            alert('Booking status for Chair ID '+(workstationId)+' has been updated to '+(status)+'.');
        })
        .catch(error => {
            console.error('Error updating booking status:', error);
        });
    }
</script>
</body>
</html>
        `};

    return (
        <>
      
        {/* Date Picker */}
        <View >
      <Button title="Select Date" onPress={() => setShowDatePicker(true)} />
      {selectedDate && <Text style={styles.dateText}>Selected Date: {selectedDate}</Text>}
      {showDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onDateChange}
        />
      )}
    </View>
      <Button title="Load Data" onPress={fetchAccessToken} />
      {loading && <ActivityIndicator size="small" color="#0000ff" />}
      {error && <Text style={styles.errorText}>Error: {error}</Text>}
        <WebView style={styles.WebView}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ html: htmlContent(workstations) }}
        onMessage={(event) => {
            console.log('Message from WebView:', event.nativeEvent.data);
        }}
        onError={(error) => console.error('WebView error:', error.nativeEvent)}
        onLoadEnd={() => console.log('WebView loaded')}
    />
    <View style={styles.container}>
      <Button title="Check Available Slots" onPress={handleOpenPopup} />
      <AvailableSlotsPopup
        isVisible={isPopupVisible}
        onClose={handleClosePopup}
        serviceId="69184000001391022"
        resourceId="69184000001391030"
        selectedDate={selectedDate}
      />
    </View>
    </>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    WebView:{
        backgroundColor:'white',
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
    errorText: {
      color: 'red',
    },
  });
  
export default App;
