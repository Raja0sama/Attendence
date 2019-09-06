const ZKLib = require('zklib');
 
ZK = new ZKLib({
  ip: '110.37.224.158',
  port: 4370,
  inport: 5200,
  timeout: 5000,
});
 
// // connect to access control device
ZK.connect(function(err) {
  if (err) throw err;
 
  // read the time info from th device
  ZK.getAttendance(function(err, t) {
    // disconnect from the device
    ZK.disconnect();
 
    if (err) throw err;
 
    console.log(t);
  });
});
// connect to access control device
// ZK.connect(function(err) {
//     if (err) throw err;
   
//     // read the time info from th device
//     ZK.getUser(function(err, t) {
//       // disconnect from the device
//       ZK.disconnect();
   
//       if (err) throw err;
   
//       console.log(t);
//     });
//   });
