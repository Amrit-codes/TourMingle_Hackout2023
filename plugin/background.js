// The array of words you want to trigger the popup
const words = ["Abohar", "Adilabad", "Agartala", "Agra", "Ahmadnagar", "Ahmedabad",
               "Aizawl", "Ajmer", "Akola", "Alappuzha", "Aligarh", "Alipurduar", "Allahabad",
               "Alwar", "Ambala", "Amaravati", "Amritsar", "Asansol", "Aurangabad", "Aurangabad", "Bakshpur", "Bamanpuri", "Baramula", "Barddhaman", "Bareilly", "Belgaum", "Bellary", "Bengaluru", "Bhagalpur", "Bharatpur", "Bharauri", "Bhatpara", "Bhavnagar", "Bhilai", "Bhilwara", "Bhiwandi", "Bhiwani", "Bhopal", "Bhubaneshwar", "Bhuj", "Bhusaval", "Bidar", "Bijapur", "Bikaner", "Bilaspur", "Brahmapur", "Budaun", "Bulandshahr", "Calicut", "Chanda", "Chandigarh", "Chennai", "Chikka Mandya", "Chirala", "Coimbatore", "Cuddalore", "Cuttack", "Daman", "Davangere", "DehraDun", "Delhi", "Dhanbad", "Dibrugarh", "Dindigul", "Dispur", "Diu", "Faridabad", "Firozabad", "Fyzabad", "Gangtok", "Gaya", "Ghandinagar", "Ghaziabad", "Gopalpur", "Gulbarga", "Guntur", "Gurugram", "Guwahati", "Gwalior", "Haldia", "Haora", "Hapur", "Haripur", "Hata", "Hindupur", "Hisar", "Hospet", "Hubli", "Hyderabad", "Imphal", "Indore", "Itanagar", "Jabalpur", "Jaipur", "Jammu", "Jamshedpur", "Jhansi", "Jodhpur", "Jorhat", "Kagaznagar", "Kakinada", "Kalyan", "Karimnagar", "Karnal", "Karur", "Kavaratti", "Khammam", "Khanapur", "Kochi", "Kohima", "Kolar", "Kolhapur", "Kolkata", "Kollam", "Kota", "Krishnanagar", "Krishnapuram", "Kumbakonam", "Kurnool", "Latur", "Lucknow", "Ludhiana", "Machilipatnam", "Madurai", "Mahabubnagar", "Malegaon Camp", "Mangalore", "Mathura", "Meerut", "Mirzapur", "Moradabad", "Mumbai", "Muzaffarnagar", "Muzaffarpur", "Mysore", "Nagercoil", "Nalgonda", "Nanded", "Nandyal", "Nasik", "Navsari", "Nellore", "New Delhi", "Nizamabad", "Ongole", "Pali", "Panaji", "Panchkula", "Panipat", "Parbhani", "Pathankot", "Patiala", "Patna", "Pilibhit", "Porbandar", "Port Blair", "Proddatur", "Puducherry", "Pune", "Puri", "Purnea", "Raichur", "Raipur", "Rajahmundry", "Rajapalaiyam", "Rajkot", "Ramagundam", "Rampura", "Ranchi", "Ratlam", "Raurkela", "Rohtak", "Saharanpur", "Saidapur", "Saidpur", "Salem", "Samlaipadar", "Sangli", "Saugor", "Shahbazpur", "Shiliguri", "Shillong", "Shimla", "Shimoga", "Sikar", "Silchar", "Silvassa", "Sirsa", "Sonipat", "Srinagar", "Surat", "Tezpur", "Thanjavur", "Tharati", "Thiruvananthapuram", "Tiruchchirappalli", "Tirunelveli", "Tirupati", "Tiruvannamalai", "Tonk", "Tuticorin", "Udaipur", "Ujjain", "Vadodara", "Valparai", "Varanasi", "Vellore", "Vishakhapatnam", "Vizianagaram", "Warangal", "Jorapokhar", "Brajrajnagar", "Talcher"
               ,"Adventure",  "Airport",  "Backpacking",  "Beach",  "Bed and Breakfast",  "Budget travel",  "Camping",  "Car rental",  "Cruise",  "Cultural immersion",  "Destination",  "Ecotourism",  "Exploration",  "Family vacation",  "Foodie travel",  "Foreign exchange",  "Free attractions",  "Getaway",  "Glamping",  "Hiking",  "Historical sites",  "Hostel",  "Hotel",  "Island hopping",  "Itinerary",  "Jet lag",  "Language barrier",  "Local cuisine",  "Luggage",  "Maps",  "Mountain trekking",  "National parks",  "Off the beaten path",  "Packing list",  "Passport",  "Photography",  "Public transportation",  "Resort",  "Road trip",  "Safari",  "Scenic views",  "Self-guided tour",  "Sightseeing",  "Solo travel",  "Souvenirs",  "Spa retreat",  "Theme parks",  "Tourist attractions",  "Train travel",  "Travel agency",  "Travel blog",  "Travel essentials",  "Travel guide",  "Travel insurance",  "Travel photography",  "UNESCO World Heritage Sites",  "Urban exploration",  "Vacation rental",  "Volunteer travel",  "Wildlife",  "Youth hostel",  "Adventure sports",  "Airfare",  "Amusement parks",  "Art galleries",  "Backpacker",  "Botanical gardens",  "Bus travel",  "Cultural festivals",  "Cycling",  "Diving",  "ECO-friendly travel",  "Farm stays",  "Foreign culture",  "Golf resorts",  "Health and wellness",  "Hidden gems",  "Horseback riding",  "Hot air ballooning",  "International cuisine",  "Island paradise",  "Language learning",  "Luxury travel",  "Marketplaces",  "Mountain biking",  "Museums",  "Nature reserves",  "Overland travel",  "Rainforest exploration",  "Religious pilgrimages",  "River cruises",  "Roadside attractions",  "Scuba diving",  "Ski resorts",  "Snorkeling",  "Spa treatments",  "Surfing",  "Sustainable travel",  "Vineyard tours",  "Volcano hiking"
               ,"Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia",
               "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
               "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
               "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Brazzaville)", "Congo (Kinshasa)",
               "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor",
               "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (formerly Swaziland)", "Ethiopia", "Fiji", "Finland",
               "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
               "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan",
               "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
               "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
               "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia",
               "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
               "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
               "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
               "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain",
               "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago",
               "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
               "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe",
               "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
               "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
               "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
               "Uttar Pradesh", "Uttarakhand", "West Bengal",
               "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep",
               "Delhi (National Capital Territory of Delhi)", "Puducherry", "Ladakh", "Jammu and Kashmir"];

// The function that creates the popup window
function createPopup() {
  chrome.windows.create({
    url: "popup.html",
    width: 600,
    height: 400,
    type: "popup"
  });
}

// The function that checks if the current tab is a google search page
function isGoogleSearch(tab) {
  return tab.url.startsWith("https://www.google.com/search?");
}

// The function that extracts the query parameter from the URL
function getQuery(url) {
  const params = new URLSearchParams(url.split("?")[1]);
  return params.get("q");
}

// The function that checks if the query contains any of the words
function hasWord(query) {
  // Convert the query to lowercase
  query = query.toLowerCase();
  // Loop over the words array
  for (let word of words) {
    // Convert the word to lowercase
    word = word.toLowerCase();
    // Check if the word is in the query
    if (query.includes(word)) {
      // Return true if found
      return true;
    }
  }
  // Return false if none of the words are found
  return false;
}

// The listener that handles the web navigation events
chrome.webNavigation.onCommitted.addListener((details) => {
  chrome.tabs.get(details.tabId, (tab) => {
    if (isGoogleSearch(tab)) {
      const query = getQuery(tab.url);
      if (hasWord(query)) {
        createPopup();
      }
    }
  });
});

// var popupUrl = chrome.runtime.getURL('/popup.html');
// chrome.tabs.query({url:popupUrl},function(tabs){
//     if(tabs.length > -1){
//         //The popup exists
//     }
// });