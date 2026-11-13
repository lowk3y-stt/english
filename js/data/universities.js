/* Университеты и колледжи США.
   Одна строка: название|город|штат (код)|широта|долгота|тип (Государственный или Частный)|категория|э
   Категории: Лига плюща, Топ-вуз, Технический, Свободные искусства, Флагман штата, Другой.
   Последнее поле «э» необязательно: оно значит, что у вуза известная программа по экономике.
   Координаты приблизительные, до района города. Чтобы добавить вуз, допишите строку в конец. */
window.LK = window.LK || {};
LK.UNIS = `Harvard University|Cambridge|MA|42.377|-71.117|Частный|Лига плюща|э
Yale University|New Haven|CT|41.311|-72.926|Частный|Лига плюща|э
Princeton University|Princeton|NJ|40.344|-74.651|Частный|Лига плюща|э
Columbia University|New York|NY|40.808|-73.962|Частный|Лига плюща|э
University of Pennsylvania|Philadelphia|PA|39.952|-75.193|Частный|Лига плюща|э
Brown University|Providence|RI|41.826|-71.403|Частный|Лига плюща|э
Cornell University|Ithaca|NY|42.453|-76.474|Частный|Лига плюща|э
Dartmouth College|Hanover|NH|43.704|-72.289|Частный|Лига плюща|э
Massachusetts Institute of Technology|Cambridge|MA|42.360|-71.094|Частный|Технический|э
Stanford University|Stanford|CA|37.427|-122.170|Частный|Топ-вуз|э
California Institute of Technology|Pasadena|CA|34.137|-118.125|Частный|Технический
University of Chicago|Chicago|IL|41.789|-87.599|Частный|Топ-вуз|э
Northwestern University|Evanston|IL|42.056|-87.676|Частный|Топ-вуз|э
Duke University|Durham|NC|36.001|-78.938|Частный|Топ-вуз|э
Johns Hopkins University|Baltimore|MD|39.329|-76.620|Частный|Топ-вуз|э
Vanderbilt University|Nashville|TN|36.144|-86.803|Частный|Топ-вуз|э
Rice University|Houston|TX|29.717|-95.402|Частный|Топ-вуз
Washington University in St. Louis|St. Louis|MO|38.648|-90.305|Частный|Топ-вуз|э
Emory University|Atlanta|GA|33.792|-84.324|Частный|Топ-вуз|э
University of Notre Dame|Notre Dame|IN|41.705|-86.235|Частный|Топ-вуз|э
Georgetown University|Washington|DC|38.907|-77.072|Частный|Топ-вуз|э
Carnegie Mellon University|Pittsburgh|PA|40.444|-79.943|Частный|Технический|э
University of Southern California|Los Angeles|CA|34.022|-118.285|Частный|Топ-вуз|э
New York University|New York|NY|40.730|-73.997|Частный|Топ-вуз|э
Tufts University|Medford|MA|42.407|-71.120|Частный|Топ-вуз|э
Boston College|Chestnut Hill|MA|42.335|-71.168|Частный|Топ-вуз
Boston University|Boston|MA|42.350|-71.105|Частный|Другой
Brandeis University|Waltham|MA|42.366|-71.259|Частный|Другой
Northeastern University|Boston|MA|42.340|-71.089|Частный|Другой
Case Western Reserve University|Cleveland|OH|41.504|-81.608|Частный|Другой
University of Rochester|Rochester|NY|43.128|-77.630|Частный|Топ-вуз|э
Tulane University|New Orleans|LA|29.941|-90.121|Частный|Другой
Wake Forest University|Winston-Salem|NC|36.134|-80.277|Частный|Другой
Villanova University|Villanova|PA|40.037|-75.343|Частный|Другой
Southern Methodist University|Dallas|TX|32.841|-96.784|Частный|Другой
Texas Christian University|Fort Worth|TX|32.710|-97.363|Частный|Другой
Lehigh University|Bethlehem|PA|40.607|-75.378|Частный|Другой
Rensselaer Polytechnic Institute|Troy|NY|42.730|-73.677|Частный|Технический
Syracuse University|Syracuse|NY|43.038|-76.135|Частный|Другой
Fordham University|New York|NY|40.862|-73.886|Частный|Другой
George Washington University|Washington|DC|38.899|-77.049|Частный|Другой|э
American University|Washington|DC|38.937|-77.089|Частный|Другой
University of Miami|Coral Gables|FL|25.721|-80.279|Частный|Другой
Baylor University|Waco|TX|31.548|-97.119|Частный|Другой
Santa Clara University|Santa Clara|CA|37.349|-121.939|Частный|Другой
Pepperdine University|Malibu|CA|34.041|-118.709|Частный|Другой
Drexel University|Philadelphia|PA|39.957|-75.189|Частный|Другой
Stevens Institute of Technology|Hoboken|NJ|40.745|-74.025|Частный|Технический
Worcester Polytechnic Institute|Worcester|MA|42.274|-71.808|Частный|Технический
Rose-Hulman Institute of Technology|Terre Haute|IN|39.483|-87.322|Частный|Технический
Cooper Union|New York|NY|40.729|-73.991|Частный|Технический
Colorado School of Mines|Golden|CO|39.751|-105.222|Государственный|Технический
Georgia Institute of Technology|Atlanta|GA|33.776|-84.399|Государственный|Технический
Virginia Tech|Blacksburg|VA|37.230|-80.424|Государственный|Технический
Texas A&M University|College Station|TX|30.616|-96.341|Государственный|Технический
Purdue University|West Lafayette|IN|40.424|-86.921|Государственный|Технический
Michigan Technological University|Houghton|MI|47.119|-88.546|Государственный|Технический
Illinois Institute of Technology|Chicago|IL|41.836|-87.627|Частный|Технический
University of California, Berkeley|Berkeley|CA|37.872|-122.259|Государственный|Флагман штата|э
University of California, Los Angeles|Los Angeles|CA|34.069|-118.445|Государственный|Флагман штата|э
University of California, San Diego|La Jolla|CA|32.880|-117.234|Государственный|Флагман штата|э
University of California, Davis|Davis|CA|38.539|-121.751|Государственный|Другой
University of California, Irvine|Irvine|CA|33.646|-117.842|Государственный|Другой
University of California, Santa Barbara|Santa Barbara|CA|34.414|-119.849|Государственный|Другой|э
University of California, Santa Cruz|Santa Cruz|CA|36.991|-122.058|Государственный|Другой
University of California, Riverside|Riverside|CA|33.973|-117.328|Государственный|Другой
University of California, Merced|Merced|CA|37.366|-120.425|Государственный|Другой
University of Michigan|Ann Arbor|MI|42.278|-83.738|Государственный|Флагман штата|э
University of Virginia|Charlottesville|VA|38.036|-78.503|Государственный|Флагман штата|э
University of North Carolina at Chapel Hill|Chapel Hill|NC|35.905|-79.047|Государственный|Флагман штата|э
University of Wisconsin-Madison|Madison|WI|43.076|-89.412|Государственный|Флагман штата|э
University of Illinois Urbana-Champaign|Champaign|IL|40.102|-88.227|Государственный|Флагман штата|э
University of Texas at Austin|Austin|TX|30.285|-97.734|Государственный|Флагман штата|э
University of Washington|Seattle|WA|47.655|-122.304|Государственный|Флагман штата|э
University of Florida|Gainesville|FL|29.644|-82.355|Государственный|Флагман штата|э
University of Georgia|Athens|GA|33.948|-83.377|Государственный|Флагман штата
University of Maryland, College Park|College Park|MD|38.986|-76.943|Государственный|Флагман штата|э
University of Minnesota Twin Cities|Minneapolis|MN|44.974|-93.228|Государственный|Флагман штата|э
Ohio State University|Columbus|OH|40.007|-83.030|Государственный|Флагман штата|э
Pennsylvania State University|University Park|PA|40.798|-77.860|Государственный|Флагман штата|э
Indiana University Bloomington|Bloomington|IN|39.168|-86.523|Государственный|Флагман штата
University of Iowa|Iowa City|IA|41.661|-91.536|Государственный|Флагман штата
Michigan State University|East Lansing|MI|42.701|-84.482|Государственный|Другой
Rutgers University|New Brunswick|NJ|40.500|-74.447|Государственный|Флагман штата
College of William & Mary|Williamsburg|VA|37.271|-76.713|Государственный|Другой
North Carolina State University|Raleigh|NC|35.787|-78.668|Государственный|Другой
Florida State University|Tallahassee|FL|30.442|-84.298|Государственный|Другой
Clemson University|Clemson|SC|34.678|-82.837|Государственный|Другой
University of South Carolina|Columbia|SC|33.996|-81.027|Государственный|Флагман штата
University of Alabama|Tuscaloosa|AL|33.212|-87.545|Государственный|Флагман штата
Auburn University|Auburn|AL|32.603|-85.488|Государственный|Другой
Louisiana State University|Baton Rouge|LA|30.413|-91.180|Государственный|Флагман штата
University of Mississippi|Oxford|MS|34.365|-89.538|Государственный|Флагман штата
Mississippi State University|Starkville|MS|33.456|-88.789|Государственный|Другой
University of Arkansas|Fayetteville|AR|36.068|-94.173|Государственный|Флагман штата
University of Oklahoma|Norman|OK|35.206|-97.445|Государственный|Флагман штата
Oklahoma State University|Stillwater|OK|36.127|-97.071|Государственный|Другой
University of Kansas|Lawrence|KS|38.954|-95.254|Государственный|Флагман штата
Kansas State University|Manhattan|KS|39.191|-96.581|Государственный|Другой
University of Nebraska-Lincoln|Lincoln|NE|40.820|-96.700|Государственный|Флагман штата
University of Missouri|Columbia|MO|38.941|-92.328|Государственный|Флагман штата
University of Colorado Boulder|Boulder|CO|40.007|-105.266|Государственный|Флагман штата|э
Colorado State University|Fort Collins|CO|40.573|-105.085|Государственный|Другой
University of Utah|Salt Lake City|UT|40.765|-111.845|Государственный|Флагман штата
Brigham Young University|Provo|UT|40.252|-111.649|Частный|Другой
University of Arizona|Tucson|AZ|32.232|-110.953|Государственный|Флагман штата
Arizona State University|Tempe|AZ|33.419|-111.932|Государственный|Другой
Northern Arizona University|Flagstaff|AZ|35.188|-111.653|Государственный|Другой
University of New Mexico|Albuquerque|NM|35.084|-106.619|Государственный|Флагман штата
University of Nevada, Reno|Reno|NV|39.544|-119.816|Государственный|Флагман штата
University of Nevada, Las Vegas|Las Vegas|NV|36.108|-115.143|Государственный|Другой
University of Oregon|Eugene|OR|44.045|-123.072|Государственный|Флагман штата
Oregon State University|Corvallis|OR|44.564|-123.279|Государственный|Другой
Portland State University|Portland|OR|45.512|-122.685|Государственный|Другой
Washington State University|Pullman|WA|46.732|-117.154|Государственный|Другой
University of Idaho|Moscow|ID|46.727|-117.014|Государственный|Флагман штата
Boise State University|Boise|ID|43.603|-116.203|Государственный|Другой
University of Montana|Missoula|MT|46.860|-113.985|Государственный|Флагман штата
Montana State University|Bozeman|MT|45.666|-111.050|Государственный|Другой
University of Wyoming|Laramie|WY|41.314|-105.567|Государственный|Флагман штата
University of North Dakota|Grand Forks|ND|47.923|-97.075|Государственный|Флагман штата
University of South Dakota|Vermillion|SD|42.787|-96.925|Государственный|Флагман штата
Texas Tech University|Lubbock|TX|33.585|-101.875|Государственный|Другой
University of Houston|Houston|TX|29.720|-95.343|Государственный|Другой
University of Texas at Dallas|Richardson|TX|32.986|-96.750|Государственный|Другой|э
University of Connecticut|Storrs|CT|41.808|-72.254|Государственный|Флагман штата
University of Massachusetts Amherst|Amherst|MA|42.390|-72.526|Государственный|Флагман штата|э
University of Vermont|Burlington|VT|44.478|-73.196|Государственный|Флагман штата
University of New Hampshire|Durham|NH|43.134|-70.927|Государственный|Флагман штата
University of Rhode Island|Kingston|RI|41.486|-71.528|Государственный|Флагман штата
University of Maine|Orono|ME|44.901|-68.667|Государственный|Флагман штата
University of Delaware|Newark|DE|39.681|-75.754|Государственный|Флагман штата
West Virginia University|Morgantown|WV|39.636|-79.955|Государственный|Флагман штата
University of Kentucky|Lexington|KY|38.031|-84.504|Государственный|Флагман штата
University of Louisville|Louisville|KY|38.213|-85.759|Государственный|Другой
University of Tennessee, Knoxville|Knoxville|TN|35.955|-83.925|Государственный|Флагман штата
University of Alaska Fairbanks|Fairbanks|AK|64.857|-147.833|Государственный|Флагман штата
University of Hawaii at Manoa|Honolulu|HI|21.297|-157.817|Государственный|Флагман штата
Binghamton University (SUNY)|Binghamton|NY|42.089|-75.970|Государственный|Другой
University at Buffalo (SUNY)|Buffalo|NY|43.002|-78.789|Государственный|Другой
Stony Brook University (SUNY)|Stony Brook|NY|40.912|-73.123|Государственный|Другой
University at Albany (SUNY)|Albany|NY|42.686|-73.824|Государственный|Другой
Baruch College (CUNY)|New York|NY|40.740|-73.983|Государственный|Другой|э
Hunter College (CUNY)|New York|NY|40.769|-73.965|Государственный|Другой
City College of New York (CUNY)|New York|NY|40.820|-73.949|Государственный|Другой
University of Pittsburgh|Pittsburgh|PA|40.444|-79.961|Государственный|Другой|э
Temple University|Philadelphia|PA|39.981|-75.155|Государственный|Другой
Virginia Commonwealth University|Richmond|VA|37.549|-77.452|Государственный|Другой
George Mason University|Fairfax|VA|38.830|-77.308|Государственный|Другой|э
University of Cincinnati|Cincinnati|OH|39.132|-84.515|Государственный|Другой
Kent State University|Kent|OH|41.150|-81.341|Государственный|Другой
Miami University|Oxford|OH|39.509|-84.735|Государственный|Другой
University of Central Florida|Orlando|FL|28.602|-81.200|Государственный|Другой
University of South Florida|Tampa|FL|28.060|-82.413|Государственный|Другой
Florida International University|Miami|FL|25.756|-80.373|Государственный|Другой
Georgia State University|Atlanta|GA|33.753|-84.386|Государственный|Другой
Wayne State University|Detroit|MI|42.359|-83.070|Государственный|Другой
San Diego State University|San Diego|CA|32.775|-117.071|Государственный|Другой
California Polytechnic State University|San Luis Obispo|CA|35.300|-120.662|Государственный|Технический
San Jose State University|San Jose|CA|37.335|-121.881|Государственный|Другой
University of Maryland, Baltimore County|Baltimore|MD|39.254|-76.711|Государственный|Другой
Williams College|Williamstown|MA|42.713|-73.204|Частный|Свободные искусства|э
Amherst College|Amherst|MA|42.371|-72.516|Частный|Свободные искусства|э
Swarthmore College|Swarthmore|PA|39.905|-75.354|Частный|Свободные искусства|э
Wellesley College|Wellesley|MA|42.294|-71.306|Частный|Свободные искусства|э
Pomona College|Claremont|CA|34.098|-117.713|Частный|Свободные искусства|э
Middlebury College|Middlebury|VT|44.009|-73.176|Частный|Свободные искусства|э
Bowdoin College|Brunswick|ME|43.907|-69.963|Частный|Свободные искусства
Carleton College|Northfield|MN|44.461|-93.154|Частный|Свободные искусства|э
Haverford College|Haverford|PA|40.011|-75.304|Частный|Свободные искусства
Claremont McKenna College|Claremont|CA|34.102|-117.707|Частный|Свободные искусства|э
Vassar College|Poughkeepsie|NY|41.687|-73.896|Частный|Свободные искусства
Colby College|Waterville|ME|44.565|-69.664|Частный|Свободные искусства
Colgate University|Hamilton|NY|42.819|-75.534|Частный|Свободные искусства
Hamilton College|Clinton|NY|43.052|-75.405|Частный|Свободные искусства|э
Davidson College|Davidson|NC|35.500|-80.847|Частный|Свободные искусства
Grinnell College|Grinnell|IA|41.749|-92.719|Частный|Свободные искусства|э
Barnard College|New York|NY|40.810|-73.964|Частный|Свободные искусства
Bates College|Lewiston|ME|44.106|-70.205|Частный|Свободные искусства
Oberlin College|Oberlin|OH|41.294|-82.220|Частный|Свободные искусства
Washington and Lee University|Lexington|VA|37.786|-79.443|Частный|Свободные искусства|э
Smith College|Northampton|MA|42.318|-72.639|Частный|Свободные искусства
Wesleyan University|Middletown|CT|41.557|-72.659|Частный|Свободные искусства|э
Bryn Mawr College|Bryn Mawr|PA|40.027|-75.314|Частный|Свободные искусства
Harvey Mudd College|Claremont|CA|34.106|-117.710|Частный|Технический
Kenyon College|Gambier|OH|40.375|-82.397|Частный|Свободные искусства|э
Macalester College|Saint Paul|MN|44.939|-93.168|Частный|Свободные искусства|э
Reed College|Portland|OR|45.481|-122.631|Частный|Свободные искусства
Occidental College|Los Angeles|CA|34.127|-118.210|Частный|Свободные искусства
Scripps College|Claremont|CA|34.103|-117.710|Частный|Свободные искусства
Trinity College|Hartford|CT|41.748|-72.691|Частный|Свободные искусства
Union College|Schenectady|NY|42.817|-73.930|Частный|Свободные искусства
Bucknell University|Lewisburg|PA|40.955|-76.883|Частный|Свободные искусства
Lafayette College|Easton|PA|40.699|-75.210|Частный|Свободные искусства|э
Skidmore College|Saratoga Springs|NY|43.098|-73.775|Частный|Свободные искусства
Wheaton College|Wheaton|IL|41.868|-88.103|Частный|Свободные искусства
Berea College|Berea|KY|37.571|-84.296|Частный|Свободные искусства
Sewanee: The University of the South|Sewanee|TN|35.205|-85.921|Частный|Свободные искусства
Rhodes College|Memphis|TN|35.155|-89.987|Частный|Свободные искусства
Furman University|Greenville|SC|34.925|-82.440|Частный|Свободные искусства
Centre College|Danville|KY|37.645|-84.773|Частный|Свободные искусства
Denison University|Granville|OH|40.072|-82.521|Частный|Свободные искусства
College of Wooster|Wooster|OH|40.809|-81.940|Частный|Свободные искусства
Dickinson College|Carlisle|PA|40.203|-77.200|Частный|Свободные искусства
Gettysburg College|Gettysburg|PA|39.835|-77.239|Частный|Свободные искусства
Franklin & Marshall College|Lancaster|PA|40.047|-76.320|Частный|Свободные искусства
Connecticut College|New London|CT|41.378|-72.105|Частный|Свободные искусства
Bard College|Annandale-on-Hudson|NY|42.022|-73.907|Частный|Свободные искусства
St. Olaf College|Northfield|MN|44.462|-93.183|Частный|Свободные искусства
Lawrence University|Appleton|WI|44.261|-88.399|Частный|Свободные искусства
Beloit College|Beloit|WI|42.504|-89.033|Частный|Свободные искусства
Whitman College|Walla Walla|WA|46.071|-118.329|Частный|Свободные искусства
Colorado College|Colorado Springs|CO|38.848|-104.826|Частный|Свободные искусства
Pitzer College|Claremont|CA|34.103|-117.705|Частный|Свободные искусства
University of Richmond|Richmond|VA|37.575|-77.540|Частный|Другой|э
Marquette University|Milwaukee|WI|43.038|-87.931|Частный|Другой
Loyola University Chicago|Chicago|IL|42.000|-87.658|Частный|Другой
DePaul University|Chicago|IL|41.924|-87.655|Частный|Другой
Saint Louis University|St. Louis|MO|38.637|-90.231|Частный|Другой
University of Denver|Denver|CO|39.677|-104.961|Частный|Другой
Gonzaga University|Spokane|WA|47.667|-117.402|Частный|Другой
Seattle University|Seattle|WA|47.610|-122.317|Частный|Другой
University of San Diego|San Diego|CA|32.771|-117.189|Частный|Другой
Loyola Marymount University|Los Angeles|CA|33.970|-118.418|Частный|Другой
University of San Francisco|San Francisco|CA|37.777|-122.451|Частный|Другой
Chapman University|Orange|CA|33.793|-117.851|Частный|Другой
Fairfield University|Fairfield|CT|41.161|-73.255|Частный|Другой
Providence College|Providence|RI|41.842|-71.434|Частный|Другой
Quinnipiac University|Hamden|CT|41.419|-72.896|Частный|Другой
Clark University|Worcester|MA|42.251|-71.823|Частный|Другой
College of the Holy Cross|Worcester|MA|42.238|-71.809|Частный|Свободные искусства
Babson College|Wellesley|MA|42.297|-71.267|Частный|Другой|э
Bentley University|Waltham|MA|42.386|-71.220|Частный|Другой|э
Emerson College|Boston|MA|42.352|-71.065|Частный|Другой
Pace University|New York|NY|40.711|-74.005|Частный|Другой
Rochester Institute of Technology|Rochester|NY|43.084|-77.675|Частный|Технический
Clarkson University|Potsdam|NY|44.665|-74.998|Частный|Технический
Hofstra University|Hempstead|NY|40.714|-73.600|Частный|Другой
St. John's University|Queens|NY|40.723|-73.795|Частный|Другой
Yeshiva University|New York|NY|40.850|-73.930|Частный|Другой
Howard University|Washington|DC|38.922|-77.019|Частный|Другой
Catholic University of America|Washington|DC|38.934|-76.999|Частный|Другой
University of Dayton|Dayton|OH|39.739|-84.179|Частный|Другой
Xavier University|Cincinnati|OH|39.150|-84.474|Частный|Другой
Butler University|Indianapolis|IN|39.840|-86.170|Частный|Другой
Creighton University|Omaha|NE|41.265|-95.949|Частный|Другой
Drake University|Des Moines|IA|41.603|-93.652|Частный|Другой
Texas Southern University|Houston|TX|29.724|-95.360|Государственный|Другой
Trinity University|San Antonio|TX|29.461|-98.482|Частный|Свободные искусства
University of Tulsa|Tulsa|OK|36.152|-95.946|Частный|Другой
Spelman College|Atlanta|GA|33.746|-84.413|Частный|Свободные искусства
Morehouse College|Atlanta|GA|33.746|-84.413|Частный|Свободные искусства
Florida A&M University|Tallahassee|FL|30.424|-84.285|Государственный|Другой
North Carolina A&T State University|Greensboro|NC|36.077|-79.774|Государственный|Другой
Hampton University|Hampton|VA|37.020|-76.337|Частный|Другой
Virginia Military Institute|Lexington|VA|37.790|-79.441|Государственный|Другой
United States Military Academy (West Point)|West Point|NY|41.391|-73.956|Государственный|Другой
United States Naval Academy|Annapolis|MD|38.984|-76.485|Государственный|Другой
United States Air Force Academy|Colorado Springs|CO|38.997|-104.862|Государственный|Другой
Juilliard School|New York|NY|40.773|-73.984|Частный|Другой
Parsons School of Design|New York|NY|40.735|-73.994|Частный|Другой
Rhode Island School of Design|Providence|RI|41.826|-71.408|Частный|Другой
School of the Art Institute of Chicago|Chicago|IL|41.880|-87.624|Частный|Другой
Berklee College of Music|Boston|MA|42.347|-71.087|Частный|Другой
Full Sail University|Winter Park|FL|28.596|-81.304|Частный|Другой
Montclair State University|Montclair|NJ|40.864|-74.197|Государственный|Другой
Rowan University|Glassboro|NJ|39.709|-75.119|Государственный|Другой
New Jersey Institute of Technology|Newark|NJ|40.742|-74.178|Государственный|Технический
Towson University|Towson|MD|39.393|-76.610|Государственный|Другой
James Madison University|Harrisonburg|VA|38.436|-78.875|Государственный|Другой
Old Dominion University|Norfolk|VA|36.886|-76.305|Государственный|Другой
University of North Carolina Wilmington|Wilmington|NC|34.226|-77.871|Государственный|Другой
East Carolina University|Greenville|NC|35.607|-77.366|Государственный|Другой
Appalachian State University|Boone|NC|36.214|-81.684|Государственный|Другой
University of Memphis|Memphis|TN|35.119|-89.937|Государственный|Другой
Middle Tennessee State University|Murfreesboro|TN|35.849|-86.362|Государственный|Другой
University of Alabama at Birmingham|Birmingham|AL|33.502|-86.806|Государственный|Другой
University of Southern Mississippi|Hattiesburg|MS|31.329|-89.335|Государственный|Другой
University of Louisiana at Lafayette|Lafayette|LA|30.215|-92.020|Государственный|Другой
University of North Texas|Denton|TX|33.210|-97.147|Государственный|Другой
Texas State University|San Marcos|TX|29.888|-97.942|Государственный|Другой
University of Texas at San Antonio|San Antonio|TX|29.582|-98.620|Государственный|Другой
University of Texas at Arlington|Arlington|TX|32.730|-97.115|Государственный|Другой
University of Texas Rio Grande Valley|Edinburg|TX|26.306|-98.172|Государственный|Другой
University of Wisconsin-Milwaukee|Milwaukee|WI|43.077|-87.881|Государственный|Другой
Iowa State University|Ames|IA|42.027|-93.646|Государственный|Другой
Illinois State University|Normal|IL|40.510|-88.995|Государственный|Другой
Northern Illinois University|DeKalb|IL|41.935|-88.771|Государственный|Другой
Ball State University|Muncie|IN|40.205|-85.409|Государственный|Другой
Ohio University|Athens|OH|39.325|-82.101|Государственный|Другой
Bowling Green State University|Bowling Green|OH|41.378|-83.627|Государственный|Другой
Western Michigan University|Kalamazoo|MI|42.283|-85.614|Государственный|Другой
University of Michigan-Dearborn|Dearborn|MI|42.319|-83.231|Государственный|Другой
University of Minnesota Duluth|Duluth|MN|46.818|-92.082|Государственный|Другой
University of Wisconsin-Eau Claire|Eau Claire|WI|44.798|-91.499|Государственный|Другой
University of Nebraska Omaha|Omaha|NE|41.257|-96.011|Государственный|Другой
University of Colorado Denver|Denver|CO|39.745|-105.002|Государственный|Другой
Utah State University|Logan|UT|41.745|-111.810|Государственный|Другой
University of Alaska Anchorage|Anchorage|AK|61.190|-149.828|Государственный|Другой
University of Hawaii at Hilo|Hilo|HI|19.701|-155.081|Государственный|Другой
University of Guam|Mangilao|GU|13.427|144.800|Государственный|Другой`;
