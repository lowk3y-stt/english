/* Университеты и колледжи США.
   Одна строка: название|город|штат (код)|широта|долгота|тип (Государственный или Частный)|категория|э
   Категории: Лига плюща, Топ-вуз, Технический, Свободные искусства, Флагман штата, Другой.
   Последнее поле «э» необязательно: оно значит, что у вуза известная программа по экономике.
   Координаты приблизительные, до района города. Подборка составлена вручную, это не официальный рейтинг. Чтобы добавить вуз, допишите строку в конец. */
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
University of Guam|Mangilao|GU|13.427|144.800|Государственный|Другой
Samford University|Birmingham|AL|33.464|-86.791|Частный|Другой
University of South Alabama|Mobile|AL|30.695|-88.178|Государственный|Другой
University of Alabama in Huntsville|Huntsville|AL|34.723|-86.640|Государственный|Технический
Arkansas State University|Jonesboro|AR|35.842|-90.675|Государственный|Другой
University of Central Arkansas|Conway|AR|35.079|-92.459|Государственный|Другой
University of Arkansas at Little Rock|Little Rock|AR|34.723|-92.339|Государственный|Другой
Grand Canyon University|Phoenix|AZ|33.511|-112.129|Частный|Другой
California State University, Long Beach|Long Beach|CA|33.783|-118.114|Государственный|Другой
California State University, Fullerton|Fullerton|CA|33.883|-117.886|Государственный|Другой
California State University, Northridge|Northridge|CA|34.240|-118.529|Государственный|Другой
California State University, Sacramento|Sacramento|CA|38.559|-121.424|Государственный|Другой
California State Polytechnic University, Pomona|Pomona|CA|34.057|-117.821|Государственный|Технический
San Francisco State University|San Francisco|CA|37.722|-122.479|Государственный|Другой
California State University, Chico|Chico|CA|39.729|-121.848|Государственный|Другой
California State University, Fresno|Fresno|CA|36.812|-119.745|Государственный|Другой
Humboldt State University (Cal Poly Humboldt)|Arcata|CA|40.875|-124.079|Государственный|Другой
University of the Pacific|Stockton|CA|37.980|-121.312|Частный|Другой
University of La Verne|La Verne|CA|34.100|-117.771|Частный|Другой
Azusa Pacific University|Azusa|CA|34.130|-117.889|Частный|Другой
Biola University|La Mirada|CA|33.906|-118.019|Частный|Другой
California Baptist University|Riverside|CA|33.929|-117.426|Частный|Другой
Saint Mary's College of California|Moraga|CA|37.842|-122.109|Частный|Другой
Westmont College|Santa Barbara|CA|34.449|-119.665|Частный|Свободные искусства
Whittier College|Whittier|CA|33.970|-118.025|Частный|Свободные искусства
University of Redlands|Redlands|CA|34.062|-117.164|Частный|Другой
Colorado Mesa University|Grand Junction|CO|39.081|-108.552|Государственный|Другой
University of Colorado Colorado Springs|Colorado Springs|CO|38.893|-104.801|Государственный|Другой
University of Northern Colorado|Greeley|CO|40.403|-104.697|Государственный|Другой
Regis University|Denver|CO|39.790|-105.036|Частный|Другой
Central Connecticut State University|New Britain|CT|41.689|-72.766|Государственный|Другой
Sacred Heart University|Fairfield|CT|41.221|-73.243|Частный|Другой
University of Hartford|West Hartford|CT|41.795|-72.708|Частный|Другой
University of New Haven|West Haven|CT|41.292|-72.964|Частный|Другой
Western Connecticut State University|Danbury|CT|41.401|-73.443|Государственный|Другой
Delaware State University|Dover|DE|39.185|-75.543|Государственный|Другой
Gallaudet University|Washington|DC|38.907|-76.994|Частный|Другой
University of the District of Columbia|Washington|DC|38.944|-77.064|Государственный|Другой
Barry University|Miami Shores|FL|25.884|-80.166|Частный|Другой
Embry-Riddle Aeronautical University|Daytona Beach|FL|29.188|-81.049|Частный|Технический
Florida Atlantic University|Boca Raton|FL|26.372|-80.101|Государственный|Другой
Florida Gulf Coast University|Fort Myers|FL|26.464|-81.774|Государственный|Другой
Florida Institute of Technology|Melbourne|FL|28.062|-80.623|Частный|Технический
Nova Southeastern University|Fort Lauderdale|FL|26.081|-80.250|Частный|Другой
Rollins College|Winter Park|FL|28.595|-81.349|Частный|Свободные искусства
Stetson University|DeLand|FL|29.037|-81.304|Частный|Другой
University of North Florida|Jacksonville|FL|30.272|-81.508|Государственный|Другой
University of West Florida|Pensacola|FL|30.549|-87.217|Государственный|Другой
Augusta University|Augusta|GA|33.469|-81.987|Государственный|Другой
Georgia Southern University|Statesboro|GA|32.420|-81.784|Государственный|Другой
Kennesaw State University|Kennesaw|GA|34.038|-84.583|Государственный|Другой
Mercer University|Macon|GA|32.829|-83.650|Частный|Другой
University of North Georgia|Dahlonega|GA|34.526|-83.985|Государственный|Другой
University of West Georgia|Carrollton|GA|33.575|-85.099|Государственный|Другой
Valdosta State University|Valdosta|GA|30.850|-83.289|Государственный|Другой
Brigham Young University-Hawaii|Laie|HI|21.640|-157.924|Частный|Другой
Hawaii Pacific University|Honolulu|HI|21.307|-157.862|Частный|Другой
Idaho State University|Pocatello|ID|42.862|-112.431|Государственный|Другой
Bradley University|Peoria|IL|40.698|-89.617|Частный|Другой
Elmhurst University|Elmhurst|IL|41.890|-87.943|Частный|Другой
Illinois Wesleyan University|Bloomington|IL|40.485|-88.987|Частный|Свободные искусства
Knox College|Galesburg|IL|40.948|-90.372|Частный|Свободные искусства
Lake Forest College|Lake Forest|IL|42.236|-87.842|Частный|Свободные искусства
North Central College|Naperville|IL|41.775|-88.146|Частный|Другой
Southern Illinois University Carbondale|Carbondale|IL|37.711|-89.221|Государственный|Другой
University of Illinois Chicago|Chicago|IL|41.872|-87.648|Государственный|Другой|э
Western Illinois University|Macomb|IL|40.470|-90.682|Государственный|Другой
DePauw University|Greencastle|IN|39.640|-86.862|Частный|Свободные искусства
Earlham College|Richmond|IN|39.823|-84.909|Частный|Свободные искусства
Indiana State University|Terre Haute|IN|39.470|-87.405|Государственный|Другой
Indiana University-Purdue University Indianapolis|Indianapolis|IN|39.774|-86.175|Государственный|Другой
University of Evansville|Evansville|IN|37.975|-87.534|Частный|Другой
University of Indianapolis|Indianapolis|IN|39.697|-86.126|Частный|Другой
Valparaiso University|Valparaiso|IN|41.463|-87.042|Частный|Другой
Coe College|Cedar Rapids|IA|41.987|-91.652|Частный|Свободные искусства
Cornell College|Mount Vernon|IA|41.923|-91.426|Частный|Свободные искусства
University of Northern Iowa|Cedar Falls|IA|42.514|-92.463|Государственный|Другой
Emporia State University|Emporia|KS|38.405|-96.181|Государственный|Другой
Wichita State University|Wichita|KS|37.718|-97.294|Государственный|Другой
Western Kentucky University|Bowling Green|KY|36.985|-86.455|Государственный|Другой
Eastern Kentucky University|Richmond|KY|37.739|-84.295|Государственный|Другой
Northern Kentucky University|Highland Heights|KY|39.032|-84.465|Государственный|Другой
Murray State University|Murray|KY|36.614|-88.320|Государственный|Другой
Louisiana Tech University|Ruston|LA|32.526|-92.649|Государственный|Технический
Loyola University New Orleans|New Orleans|LA|29.935|-90.121|Частный|Другой
McNeese State University|Lake Charles|LA|30.178|-93.215|Государственный|Другой
University of New Orleans|New Orleans|LA|30.029|-90.067|Государственный|Другой
University of Louisiana at Monroe|Monroe|LA|32.528|-92.074|Государственный|Другой
University of Southern Maine|Portland|ME|43.668|-70.267|Государственный|Другой
Bowie State University|Bowie|MD|39.021|-76.947|Государственный|Другой
Loyola University Maryland|Baltimore|MD|39.346|-76.623|Частный|Другой
McDaniel College|Westminster|MD|39.570|-76.998|Частный|Свободные искусства
Morgan State University|Baltimore|MD|39.343|-76.583|Государственный|Другой
Salisbury University|Salisbury|MD|38.343|-75.607|Государственный|Другой
St. John's College|Annapolis|MD|38.980|-76.490|Частный|Свободные искусства
Stevenson University|Owings Mills|MD|39.411|-76.774|Частный|Другой
University of Baltimore|Baltimore|MD|39.307|-76.617|Государственный|Другой
Assumption University|Worcester|MA|42.294|-71.826|Частный|Другой
Bridgewater State University|Bridgewater|MA|41.989|-70.969|Государственный|Другой
Salem State University|Salem|MA|42.502|-70.896|Государственный|Другой
Simmons University|Boston|MA|42.337|-71.100|Частный|Другой
Suffolk University|Boston|MA|42.359|-71.062|Частный|Другой
University of Massachusetts Boston|Boston|MA|42.314|-71.038|Государственный|Другой
University of Massachusetts Lowell|Lowell|MA|42.654|-71.326|Государственный|Другой
University of Massachusetts Dartmouth|North Dartmouth|MA|41.629|-71.005|Государственный|Другой
Wentworth Institute of Technology|Boston|MA|42.336|-71.096|Частный|Технический
Western New England University|Springfield|MA|42.114|-72.510|Частный|Другой
Central Michigan University|Mount Pleasant|MI|43.590|-84.775|Государственный|Другой
Eastern Michigan University|Ypsilanti|MI|42.250|-83.624|Государственный|Другой
Ferris State University|Big Rapids|MI|43.688|-85.487|Государственный|Другой
Grand Valley State University|Allendale|MI|42.964|-85.888|Государственный|Другой
Hope College|Holland|MI|42.788|-86.103|Частный|Свободные искусства
Kalamazoo College|Kalamazoo|MI|42.283|-85.597|Частный|Свободные искусства
Oakland University|Rochester|MI|42.671|-83.215|Государственный|Другой
University of Detroit Mercy|Detroit|MI|42.421|-83.139|Частный|Другой
Augsburg University|Minneapolis|MN|44.967|-93.243|Частный|Другой
Bethel University|Arden Hills|MN|45.054|-93.167|Частный|Другой
Gustavus Adolphus College|Saint Peter|MN|44.322|-93.972|Частный|Свободные искусства
Minnesota State University, Mankato|Mankato|MN|44.146|-94.000|Государственный|Другой
St. Cloud State University|St. Cloud|MN|45.552|-94.151|Государственный|Другой
University of St. Thomas|Saint Paul|MN|44.942|-93.190|Частный|Другой
Jackson State University|Jackson|MS|32.296|-90.208|Государственный|Другой
Millsaps College|Jackson|MS|32.323|-90.178|Частный|Свободные искусства
University of Missouri-Kansas City|Kansas City|MO|39.034|-94.576|Государственный|Другой
Missouri University of Science and Technology|Rolla|MO|37.955|-91.775|Государственный|Технический
University of Missouri-St. Louis|St. Louis|MO|38.710|-90.307|Государственный|Другой
Missouri State University|Springfield|MO|37.200|-93.282|Государственный|Другой
Truman State University|Kirksville|MO|40.187|-92.581|Государственный|Другой
Webster University|Webster Groves|MO|38.594|-90.340|Частный|Другой
Rockhurst University|Kansas City|MO|39.034|-94.575|Частный|Другой
Carroll College|Helena|MT|46.598|-112.016|Частный|Другой
Fort Lewis College|Durango|CO|37.275|-107.883|Государственный|Другой
Chadron State College|Chadron|NE|42.827|-102.995|Государственный|Другой
University of Nebraska at Kearney|Kearney|NE|40.703|-99.081|Государственный|Другой
Nevada State University|Henderson|NV|36.035|-114.972|Государственный|Другой
Southern New Hampshire University|Manchester|NH|43.039|-71.452|Частный|Другой
Keene State College|Keene|NH|42.928|-72.282|Государственный|Другой
Rider University|Lawrenceville|NJ|40.280|-74.743|Частный|Другой
Seton Hall University|South Orange|NJ|40.745|-74.246|Частный|Другой
Fairleigh Dickinson University|Teaneck|NJ|40.894|-74.014|Частный|Другой
Kean University|Union|NJ|40.679|-74.234|Государственный|Другой
Monmouth University|West Long Branch|NJ|40.278|-74.006|Частный|Другой
Ramapo College of New Jersey|Mahwah|NJ|41.082|-74.173|Государственный|Другой
Rutgers University-Newark|Newark|NJ|40.741|-74.174|Государственный|Другой
Stockton University|Galloway|NJ|39.494|-74.531|Государственный|Другой
The College of New Jersey|Ewing|NJ|40.268|-74.780|Государственный|Другой
William Paterson University|Wayne|NJ|40.947|-74.198|Государственный|Другой
New Mexico State University|Las Cruces|NM|32.280|-106.746|Государственный|Другой
New Mexico Institute of Mining and Technology|Socorro|NM|34.066|-106.907|Государственный|Технический
Adelphi University|Garden City|NY|40.720|-73.652|Частный|Другой
Alfred University|Alfred|NY|42.254|-77.790|Частный|Другой
Canisius University|Buffalo|NY|42.926|-78.856|Частный|Другой
College of Saint Rose|Albany|NY|42.656|-73.782|Частный|Другой
Iona University|New Rochelle|NY|40.926|-73.785|Частный|Другой
Ithaca College|Ithaca|NY|42.422|-76.495|Частный|Другой
Manhattan University|Bronx|NY|40.889|-73.903|Частный|Другой
Marist University|Poughkeepsie|NY|41.723|-73.935|Частный|Другой
Molloy University|Rockville Centre|NY|40.657|-73.640|Частный|Другой
New York Institute of Technology|Old Westbury|NY|40.798|-73.600|Частный|Технический
Niagara University|Lewiston|NY|43.138|-79.034|Частный|Другой
Pratt Institute|Brooklyn|NY|40.691|-73.964|Частный|Другой
Sarah Lawrence College|Bronxville|NY|40.909|-73.826|Частный|Свободные искусства
Siena University|Loudonville|NY|42.718|-73.753|Частный|Другой
St. Lawrence University|Canton|NY|44.590|-75.162|Частный|Свободные искусства
SUNY Geneseo|Geneseo|NY|42.796|-77.817|Государственный|Другой
SUNY New Paltz|New Paltz|NY|41.744|-74.083|Государственный|Другой
SUNY Oswego|Oswego|NY|43.454|-76.540|Государственный|Другой
SUNY Purchase|Purchase|NY|41.049|-73.703|Государственный|Другой
SUNY College of Environmental Science and Forestry|Syracuse|NY|43.034|-76.133|Государственный|Технический
Campbell University|Buies Creek|NC|35.411|-78.738|Частный|Другой
Elon University|Elon|NC|36.102|-79.502|Частный|Другой
High Point University|High Point|NC|35.971|-79.998|Частный|Другой
North Carolina Central University|Durham|NC|35.974|-78.899|Государственный|Другой
University of North Carolina at Charlotte|Charlotte|NC|35.307|-80.735|Государственный|Другой|э
University of North Carolina at Greensboro|Greensboro|NC|36.068|-79.810|Государственный|Другой
Western Carolina University|Cullowhee|NC|35.309|-83.182|Государственный|Другой
Winthrop University|Rock Hill|SC|34.940|-81.032|Государственный|Другой
North Dakota State University|Fargo|ND|46.897|-96.801|Государственный|Другой
Baldwin Wallace University|Berea|OH|41.368|-81.855|Частный|Другой
Cleveland State University|Cleveland|OH|41.502|-81.675|Государственный|Другой
John Carroll University|University Heights|OH|41.496|-81.538|Частный|Другой
Ohio Wesleyan University|Delaware|OH|40.298|-83.067|Частный|Свободные искусства
University of Akron|Akron|OH|41.076|-81.512|Государственный|Другой
University of Toledo|Toledo|OH|41.657|-83.607|Государственный|Другой
Wright State University|Dayton|OH|39.783|-84.064|Государственный|Другой
Youngstown State University|Youngstown|OH|41.104|-80.646|Государственный|Другой
Northeastern State University|Tahlequah|OK|35.909|-94.973|Государственный|Другой
Oral Roberts University|Tulsa|OK|36.051|-95.943|Частный|Другой
University of Central Oklahoma|Edmond|OK|35.655|-97.470|Государственный|Другой
George Fox University|Newberg|OR|45.304|-122.969|Частный|Другой
Lewis & Clark College|Portland|OR|45.449|-122.673|Частный|Свободные искусства
Linfield University|McMinnville|OR|45.210|-123.194|Частный|Свободные искусства
Southern Oregon University|Ashland|OR|42.186|-122.690|Государственный|Другой
University of Portland|Portland|OR|45.572|-122.727|Частный|Другой
Willamette University|Salem|OR|44.935|-123.031|Частный|Свободные искусства
Bloomsburg University of Pennsylvania|Bloomsburg|PA|41.007|-76.447|Государственный|Другой
California University of Pennsylvania|California|PA|40.066|-79.894|Государственный|Другой
Duquesne University|Pittsburgh|PA|40.436|-79.992|Частный|Другой
Indiana University of Pennsylvania|Indiana|PA|40.616|-79.160|Государственный|Другой
La Salle University|Philadelphia|PA|40.037|-75.152|Частный|Другой
Lebanon Valley College|Annville|PA|40.329|-76.521|Частный|Другой
Messiah University|Mechanicsburg|PA|40.157|-76.996|Частный|Другой
Muhlenberg College|Allentown|PA|40.597|-75.508|Частный|Свободные искусства
Saint Joseph's University|Philadelphia|PA|39.995|-75.240|Частный|Другой
Slippery Rock University|Slippery Rock|PA|41.063|-80.040|Государственный|Другой
Susquehanna University|Selinsgrove|PA|40.797|-76.870|Частный|Свободные искусства
University of Scranton|Scranton|PA|41.404|-75.656|Частный|Другой
West Chester University|West Chester|PA|39.951|-75.597|Государственный|Другой
Bryant University|Smithfield|RI|41.923|-71.545|Частный|Другой|э
Johnson & Wales University|Providence|RI|41.816|-71.416|Частный|Другой
Rhode Island College|Providence|RI|41.842|-71.456|Государственный|Другой
Roger Williams University|Bristol|RI|41.650|-71.263|Частный|Другой
Charleston Southern University|North Charleston|SC|32.983|-80.055|Частный|Другой
College of Charleston|Charleston|SC|32.784|-79.937|Государственный|Другой
Coastal Carolina University|Conway|SC|33.793|-79.016|Государственный|Другой
The Citadel|Charleston|SC|32.798|-79.961|Государственный|Другой
Black Hills State University|Spearfish|SD|44.490|-103.867|Государственный|Другой
South Dakota State University|Brookings|SD|44.318|-96.784|Государственный|Другой
Belmont University|Nashville|TN|36.133|-86.794|Частный|Другой
East Tennessee State University|Johnson City|TN|36.303|-82.369|Государственный|Другой
Lipscomb University|Nashville|TN|36.100|-86.795|Частный|Другой
Tennessee Technological University|Cookeville|TN|36.175|-85.507|Государственный|Технический
University of Tennessee at Chattanooga|Chattanooga|TN|35.047|-85.301|Государственный|Другой
Abilene Christian University|Abilene|TX|32.468|-99.708|Частный|Другой
Austin College|Sherman|TX|33.652|-96.670|Частный|Свободные искусства
Houston Christian University|Houston|TX|29.683|-95.563|Частный|Другой
Lamar University|Beaumont|TX|30.043|-94.073|Государственный|Другой
Sam Houston State University|Huntsville|TX|30.714|-95.549|Государственный|Другой
Southwestern University|Georgetown|TX|30.636|-97.678|Частный|Свободные искусства
St. Edward's University|Austin|TX|30.228|-97.756|Частный|Другой
Stephen F. Austin State University|Nacogdoches|TX|31.619|-94.648|Государственный|Другой
Texas A&M University-Corpus Christi|Corpus Christi|TX|27.713|-97.325|Государственный|Другой
Texas A&M University-Commerce|Commerce|TX|33.241|-95.909|Государственный|Другой
Texas Woman's University|Denton|TX|33.226|-97.126|Государственный|Другой
University of Dallas|Irving|TX|32.846|-96.918|Частный|Другой
University of Texas at El Paso|El Paso|TX|31.771|-106.504|Государственный|Другой
University of the Incarnate Word|San Antonio|TX|29.468|-98.465|Частный|Другой
Southern Utah University|Cedar City|UT|37.676|-113.066|Государственный|Другой
Utah Valley University|Orem|UT|40.279|-111.714|Государственный|Другой
Weber State University|Ogden|UT|41.193|-111.944|Государственный|Другой
Champlain College|Burlington|VT|44.472|-73.206|Частный|Другой
Norwich University|Northfield|VT|44.153|-72.656|Частный|Другой
Saint Michael's College|Colchester|VT|44.518|-73.182|Частный|Другой
Christopher Newport University|Newport News|VA|37.066|-76.494|Государственный|Другой
Hampden-Sydney College|Hampden-Sydney|VA|37.241|-78.463|Частный|Свободные искусства
Liberty University|Lynchburg|VA|37.352|-79.179|Частный|Другой
Longwood University|Farmville|VA|37.299|-78.395|Государственный|Другой
Radford University|Radford|VA|37.134|-80.554|Государственный|Другой
Regent University|Virginia Beach|VA|36.800|-76.157|Частный|Другой
Roanoke College|Salem|VA|37.298|-80.054|Частный|Свободные искусства
University of Mary Washington|Fredericksburg|VA|38.302|-77.476|Государственный|Другой
Virginia State University|Petersburg|VA|37.236|-77.425|Государственный|Другой
Central Washington University|Ellensburg|WA|47.002|-120.540|Государственный|Другой
Eastern Washington University|Cheney|WA|47.489|-117.581|Государственный|Другой
Pacific Lutheran University|Tacoma|WA|47.145|-122.443|Частный|Другой
University of Puget Sound|Tacoma|WA|47.262|-122.482|Частный|Свободные искусства
Western Washington University|Bellingham|WA|48.733|-122.486|Государственный|Другой
Marshall University|Huntington|WV|38.424|-82.426|Государственный|Другой
West Virginia Wesleyan College|Buckhannon|WV|38.994|-80.232|Частный|Другой
Carroll University|Waukesha|WI|43.013|-88.230|Частный|Другой
Ripon College|Ripon|WI|43.841|-88.835|Частный|Свободные искусства
University of Wisconsin-La Crosse|La Crosse|WI|43.815|-91.230|Государственный|Другой
University of Wisconsin-Oshkosh|Oshkosh|WI|44.022|-88.553|Государственный|Другой
University of Wisconsin-Stout|Menomonie|WI|44.879|-91.926|Государственный|Другой
University of Wisconsin-Whitewater|Whitewater|WI|42.842|-88.743|Государственный|Другой
Dillard University|New Orleans|LA|30.030|-90.060|Частный|Другой
Xavier University of Louisiana|New Orleans|LA|29.964|-90.108|Частный|Другой
Southern University and A&M College|Baton Rouge|LA|30.526|-91.193|Государственный|Другой
Tuskegee University|Tuskegee|AL|32.430|-85.707|Частный|Другой
Alabama A&M University|Normal|AL|34.783|-86.569|Государственный|Другой
Tennessee State University|Nashville|TN|36.168|-86.832|Государственный|Другой
Fisk University|Nashville|TN|36.168|-86.804|Частный|Другой
Clark Atlanta University|Atlanta|GA|33.753|-84.413|Частный|Другой
Prairie View A&M University|Prairie View|TX|30.093|-95.989|Государственный|Другой
Florida Polytechnic University|Lakeland|FL|28.150|-81.849|Государственный|Технический
Oregon Institute of Technology|Klamath Falls|OR|42.250|-121.783|Государственный|Технический
South Dakota School of Mines and Technology|Rapid City|SD|44.074|-103.208|Государственный|Технический
Montana Technological University|Butte|MT|46.016|-112.527|Государственный|Технический
Kettering University|Flint|MI|43.012|-83.714|Частный|Технический
Milwaukee School of Engineering|Milwaukee|WI|43.044|-87.904|Частный|Технический
Franklin W. Olin College of Engineering|Needham|MA|42.293|-71.264|Частный|Технический
Webb Institute|Glen Cove|NY|40.855|-73.639|Частный|Технический
Embry-Riddle Aeronautical University, Prescott|Prescott|AZ|34.616|-112.451|Частный|Технический`;
