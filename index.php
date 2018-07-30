<!DOCTYPE html>
<html lang="en-us">
<head>
  <meta charset="UTF-8">
  <title>Bob Kwiencien </title>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
 <link rel="stylesheet" type="text/css" href="assets/css/style.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
 <div class="navbar navbar-default navbar-fixed-top" role="navigation">
   <p id="headername" class="navbar-brand"><strong>Bob Kwiencien</strong></p>
<div class="container">
  <div class="dropdown">
      <ul>
        <li class="dropdown">
        <a href="#" data-toggle="dropdown" id="drop1" class="dropdown-toggle">
          MENU:<span class="caret"></span>
        </a>
      <ul class="dropdown-menu multi-level" role="menu">
        <li class="dropdown-submenu">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Javascript<span class="caret"></span></a>
         <ul class="dropdown-menu"> 
        <li><a  href="Monty/index.html">Monty Hall Paradox exploration</a></li>
        <li><a  href="CoinFlips/index.html">Unexpected waiting times in coin flips</a></li> 
        <li><a  href="Stock/index.html">Chart Dow Performance</a></li>
        <li><a  href="connect4/index.html">Connect 4 (in development)</a></li>
        <li><a  href="fft/index.html">FFT(in development)</a></li>
        <li><a  href="Giphy/index.html">Fun with gifs</a></li>
       <li><a   href="Gem-Game/index.html">A Game in Javacript</a></li>
      </ul>
      <li class="dropdown-submenu">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Django <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li><a href="#">WIP</a></li>
          <li class="divider"></li>
        </ul>
    </li>
    </li>
  </ul>
</li></ul>
   </div>
 </div>
</li>
<?php date_default_timezone_set('UTC');
  echo "<p id='dateo'>";
  echo date("M/d/Y");
  echo '</p>'; ?>

 </div>
 <br><br>
  <div class="container" align="center">
  <div class="jumbotron">
   <div class="row" id="main-bio">
       <div class="col-md-6">
       <h2>Technical Summary:</h2>
      <p>
A seasoned IT professional with expertise in the design, implementation and administration of production databases.
Skilled in data analysis and data visualization techniques allowing for web-based presentations of critical data. A polyglot who has produced production quality code in a wide variety of languages and frameworks. Conversant with modern web development techniques and languages. Experienced in relational technology and query optimization across multiple DB technologies including NoSQL databases.
</p>
       </div>
           <div class="row">
            <div class="col-md-6">
          <h3>Skills:</h3>
          </div>
          <div class="row">
            <div class="col-md-6">
             <table>
              <tr><td> <strong>Databases:</strong> Oracle (versions 8 through 12c), PostgreSQL V8, 9,MySQL, NoSQL: MongoDB, Google - FireBase (Google's cloud-based real-time database), Oracle Enterprise Manager, Solar Winds <td></tr>
              <tr> <td><strong>Cloud/Operating Systems/Servers:</strong> AWS-Could, Linux, Linux Servers, Apache, Windows, Heroku, OpenVZ Virtualized Servers, MACOS </td></tr>
              <tr><td> <strong>Programming Languages:</strong> C, Java, PL/SQL, shell scripting, perl,  JavaScript, Python, R</td></tr>
              <tr><td> <strong>Methodologies/Processes:</strong> Agile, SDLC, SOA, Continuous Integration, Data Governance, MDM, Data Movement Architecture - ETL, BI, PCI Compliance</td> </tr>
              <tr><td> <strong>Business Continuance:</strong> Oracle Streams, PostgreSQL Replication, Standby Database, Oracle RAC</td></tr>
              <tr><td> <strong>Web technologies:</strong> JavaScript, Ajax, JQuery, Node.js, HTML5, CSS, Bootstrap, express.js</td></tr>
              <tr><td> <strong>Source Control/utilities:</strong> git/github, subversion, Jenkins</td> </tr>
              <tr><td> <strong>Development Tools:</strong> eclipse, jdeveloper, sqldeveloper, TOAD </td></tr>
              <tr><td><strong>Package management:</strong> npm, conda </td></tr>
              <tr><td><strong>Incident tracking:</strong>Jira</td></tr>
              <tr><td><strong>Data Visualization:</strong>plotly,matplotlib,seaborn,Google Charts</td></tr>
            </table>
              <!--<ul>
               <a href="https://linkedin.com/in/bobkwiencien">
               <li><img src="assets/images/linkedin-128.png" height="70" width="70"> </li> </a>
              </ul>  -->
      </div>
    </div>
   </div>
 </div>
      <h2 id="contacto-info">Contact Info</h2>
      <ul>
        <li><strong>Email Me:</strong><a href="mailto:bkwiencien@gmail.com">Email:</a></li>
       <!-- <li><strong>Github:</strong> <a href="#">sampleName</a></li> -->
       <!-- <li><strong>Portfolio:</strong> <a href="#">coming soon</a></li> -->
         <li><strong>Download My Resume:</strong><a href="assets/RES/Kwiencien_Bob_dev_exp1.docx">Resume:</a></li>
         <a href="https://linkedin.com/in/bobkwiencien">
        <li><img src="assets/images/linkedin-128.png" height="30" width="30"> </li> </a>
      </ul>
  </div>
  <footer>&#64; Copyright 2018 Bob Kwiencien</footer>
  <script src="https://www.gstatic.com/firebasejs/5.2.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDxIUvbbJu2958f5iQBZCNgBATfpGVd3qg",
    authDomain: "hit-tracking.firebaseapp.com",
    databaseURL: "https://hit-tracking.firebaseio.com",
    projectId: "hit-tracking",
    storageBucket: "hit-tracking.appspot.com",
    messagingSenderId: "348143804899"
  };
  firebase.initializeApp(config);
</script>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
</div>
</body>

</html>
