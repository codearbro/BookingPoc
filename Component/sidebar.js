// // // {/* <script>
 
// // // setTimeout(function() {



// // // const desks = ${desksJSON};

// // //  const container = document.getElementById('workstationContainer');
// // //           desks.forEach((desk, index) => {
// // //               const h1 = document.createElement('h1');
// // //               h1.textContent = 'Welcome, ' + desk.WorkstationId + '!';
// // //               container.appendChild(h1);

// // //               for(let i=0;i<=12;i++)
// // //   {
// // //   var chair = document.getElementById('WORK'+i);
// // //   window.ReactNativeWebView.postMessage("chairid - 9184000001391028");
// // //   if('WORK'+i == desk.WorkstationId)
// // //   {
// // //   // Set the background color of the selected element
// // //   if (Booking_Status == 'Booked') {
// // //       chair.style.backgroundColor = 'lightblue';
// // //   }
// // //   }
  
// // //   }
// // //           });
// // //   /////////for background color///
  
// // //   var chairs = document.querySelectorAll('.chair_h');
// // //   for (var i = 0; i < chairs.length; i++) {
// // //     (function(index) {
// // //       chairs[index].addEventListener('click', function() {
// // //         if (window.ReactNativeWebView) {
// // //           window.ReactNativeWebView.postMessage('WORK' + (index + 1) + ' clicked');
// // //           alert("DESK "+(index+1)+' clicked');
          
// // //         } else {
// // //           console.log('ReactNativeWebView is not defined');
// // //         }
// // //       });
// // //     })(i);
// // //   }
// // // }, 100);
// // // </script> */}






// // // <script>
// // //     setTimeout(function () {
// // //         const desks = ${desksJSON};

// // //         // Container for dynamically generated headings
// // //         const container = document.getElementById('workstationContainer');
// // //         desks.forEach((desk) => {
// // //             const h1 = document.createElement('h1');
// // //             h1.textContent = 'Welcome, ' + desk.WorkstationId + '!';
// // //             container.appendChild(h1);

// // //             // Loop to match chair ID and apply background color if conditions match
// // //             for (let i = 0; i <= 12; i++) {
// // //                 const chair = document.getElementById('WORK' + i);

// // //                 if (chair && 'WORK' + i === desk.WorkstationId) {
// // //                     // Assuming Booking_Status is a property of desk
// // //                     if (desk.Booking_Status === 'Booked') {
// // //                         chair.style.backgroundColor = 'red';
// // //                     }
// // //                         else
// // //                          if (desk.Booking_Status === 'Open') {
// // //                         chair.style.backgroundColor = 'Green';
// // //                     }
// // //                         else
// // //                          if (desk.Booking_Status === 'Blocked') {
// // //                         chair.style.backgroundColor = 'black';
// // //                     }
// // //                 }
// // //             }
// // //         });

// // //         ////////for popup///
// // //         function showPopup(workstationId, status) {
// // //                         const popup = document.getElementById('popup');
// // //                         const popupMessage = document.getElementById('popup-message');
// // //                         const popupAction = document.getElementById('popup-action');
// // //                         const popupClose = document.getElementById('popup-close');

// // //                         // Set popup message and button text based on status
// // //                         popupMessage.textContent = \`Workstation \${workstationId} is currently \${status}.\`;

// // //                         if (status === 'Booked') {
// // //                             popupAction.textContent = 'Cancel';
// // //                             popupAction.onclick = function () {
// // //                                 window.ReactNativeWebView.postMessage(\`Cancelled booking for \${workstationId}\`);
// // //                                 popup.style.display = 'none';
// // //                             };
// // //                         } else if (status === 'Blocked') {
// // //                             popupAction.textContent = 'Open';
// // //                             popupAction.onclick = function () {
// // //                                 window.ReactNativeWebView.postMessage(\`Opened \${workstationId}\`);
// // //                                 popup.style.display = 'none';
// // //                             };
// // //                         } else if (status === 'Open') {
// // //                             popupAction.textContent = 'Book';
// // //                             popupAction.onclick = function () {
// // //                                 window.ReactNativeWebView.postMessage(\`Booked \${workstationId}\`);
// // //                                 popup.style.display = 'none';
// // //                             };
// // //                         }

// // //                         // Show popup
// // //                         popup.style.display = 'block';

// // //                         // Close popup
// // //                         popupClose.onclick = function () {
// // //                             popup.style.display = 'none';
// // //                         };
// // //                     }

// // //         /////////////
// // //     }, 100);
// // // </script>


   
// // <script>
// //     setTimeout(function () {
// //         const desks = ${desksJSON};

// //         desks.forEach((desk) => {
            

// //             // Loop to match chair ID and apply background color if conditions match
// //             for (let i = 0; i <= 12; i++) {
// //                 const chair = document.getElementById('WORK' + i);

// //                 if (chair && 'WORK' + i === desk.WorkstationId) {
// //                     // Assuming Booking_Status is a property of desk
// //                     if (desk.Booking_Status === 'Booked') {
// //                         chair.style.backgroundColor = 'red';
// //                     }
// //                         else
// //                          if (desk.Booking_Status === 'Open') {
// //                         chair.style.backgroundColor = 'Green';
// //                     }
// //                         else
// //                          if (desk.Booking_Status === 'Blocked') {
// //                         chair.style.backgroundColor = 'black';
// //                     }
// //                         // Add the onclick event handler to each chair
// //                     chair.onclick = function() {
// //                         alert('Chair ID: '+(desk.WorkstationId)+' is '+(desk.Booking_Status)+'and id id'+(desk.ID)+'.');
// //                         // You can replace this with your own function or logic
// //                     };
// //                 }
// //             }
// //         });

// //     }, 100);
// // </script>












// <script>
//     setTimeout(function () {
//         const desks = ${desksJSON};

//         desks.forEach((desk) => {
//             // Loop to match chair ID and apply background color if conditions match
//             for (let i = 0; i <= 12; i++) {
//                 const chair = document.getElementById('WORK' + i);

//                 if (chair && 'WORK' + i === desk.WorkstationId) {
//                     // Apply background color based on Booking_Status
//                     if (desk.Booking_Status === 'Booked') {
//                         chair.style.backgroundColor = 'red';
//                     }
//                     else if (desk.Booking_Status === 'Open') {
//                         chair.style.backgroundColor = 'green';
//                     }
//                     else if (desk.Booking_Status === 'Blocked') {
//                         chair.style.backgroundColor = 'black';
//                     }

//                     // Add the onclick event handler to each chair
//                     chair.onclick = function() {
//                         // Get a reference to your popup
//                         const popup = document.getElementById('popup');  // Adjust the popup element ID
                        
//                         // Clear previous buttons if any
//                         const buttonsContainer = popup.querySelector('.popup-buttons');
//                         buttonsContainer.innerHTML = '';

//                         // Display the booking details in the popup (You can adjust the content of the popup as needed)
//                         const popupContent = popup.querySelector('.popup-content');
//                         popupContent.innerHTML = 'Chair ID: '+(desk.WorkstationId)+' is '+(desk.Booking_Status)+' and ID is '+(desk.ID)+'.';

//                         // Conditionally create and display buttons based on Booking_Status
//                         if (desk.Booking_Status === 'Booked') {
//                             const cancelButton = document.createElement('button');
//                             cancelButton.textContent = 'Cancel Booking';
//                             cancelButton.onclick = function() {
//                                 alert('Canceling booking for chair ID: '+(desk.WorkstationId)+'.');
//                                 // Add logic to handle booking cancellation
//                             };
//                             buttonsContainer.appendChild(cancelButton);
//                         } 
//                         else if (desk.Booking_Status === 'Open') {
//                             const bookButton = document.createElement('button');
//                             bookButton.textContent = 'Book Now';
//                             bookButton.onclick = function() {
//                                 alert('Booking chair ID: '+(desk.WorkstationId)+'.');
//                                 // Add logic to handle booking the chair
//                             };
//                             buttonsContainer.appendChild(bookButton);
//                         } 
//                         else if (desk.Booking_Status === 'Blocked') {
//                             const openButton = document.createElement('button');
//                             openButton.textContent = 'Open Chair';
//                             openButton.onclick = function() {
//                                 alert('Opening chair ID: '+(desk.WorkstationId)+'.');
//                                 // Add logic to handle unblocking the chair
//                             };
//                             buttonsContainer.appendChild(openButton);
//                         }

//                         // Show the popup (assuming you have a way to display it)
//                         popup.style.display = 'block';
//                     };
//                 }
//             }
//         });

//     }, 100);
// </script>

