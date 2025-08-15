export default {
  match: 'host',
  value: location.host,
  
  defaultWidget: `
      <div class="p5center">
      <img src="https://flonkie.neocities.org/nekoimages/personawbr/Who.png" class="p5size" style="margin: 3px auto; height: 17px;">
      <div>
      <img src="https://flonkie.neocities.org/nekoimages/personawbr/thou.png" class="p5size">
      <a href="https://flonkie.nekoweb.org/other/persona"><img src="https://flonkie.neocities.org/nekoimages/personawbr/webr.png" class="p5size"></a></div>
      </div>
  `,

  widget: `
    <div class="p5blabord" >
        <div class="p5redbord">
            <div class="p5whiboard p5maincard">
            <img style="width:130px; height:auto; margin: 5px auto; filter: drop-shadow(0px -1px 0 #eceff1) drop-shadow(1px 0px 0 #eceff1) drop-shadow(0px 1px 0 #eceff1) drop-shadow(-1px 0px 0 #eceff1) drop-shadow(0px -1px 0 #eceff1) drop-shadow(1px 0px 0 #eceff1) drop-shadow(0px 1px 0 #eceff1) drop-shadow(-1px 0px 0 #eceff1);"src="https://flonkie.neocities.org/nekoimages/personawbr/PTL1.gif">
            <img style="width:150px; height:auto; margin: 5px auto;"src="https://flonkie.neocities.org/nekoimages/personawbr/PTL.png">
                <div class="p5directions">
                    <a class="p5sml p5leftsidenav" href="https://{prev.host}"><img src="https://flonkie.neocities.org/nekoimages/personawbr/x.png" style="height:25px; margin: 0 2px; width: auto;vertical-align: middle;"> <p class="p5sidenavp">{prev.username}</p></a>
                    <a class="p5sml" href="https://flonkie.nekoweb.org/other/persona"><img src="https://flonkie.neocities.org/nekoimages/personawbr/Menu.png" style="height:25px; width: auto;vertical-align: middle;"></a>
                    <a class="p5sml p5rightsidenav" href="https://{next.host}"> <img src="https://flonkie.neocities.org/nekoimages/personawbr/o.png" style="height:25px; margin: 0 2px; width: auto;vertical-align: middle;"><p class="p5sidenavp">{next.username}</p></a>
                </div>
            </div>
        </div>
    </div>
  `,

  style: `
    :webring {
      margin:0.5vw;
      position:relative;
      font-family: Arial, sans-serif;
      background: #00000050;
      display:flex;
      flex-direction:column;
      justify-content: center;
      flex-wrap:wrap;
     width: 300px;
     max-width: 300px;
       text-decoration: none !important;
      
    .p5directions{display:flex; flex-direction: row; justify-content: center; margin: 0 5px;max-width: 258px;}
    .p5sml{width:fit-content; height:fit-content; margin:0; padding:0; font-family: "Arial"; color: #FFFFFF;font-weight:bolder!important; font-size: 16px;text-decoration:none;}
    .p5size{height:15px; margin:3px 0;width: max-content; overflow: visible; filter: drop-shadow(0px -1px 0 #000) drop-shadow(1px 0px 0 #000) drop-shadow(0px 1px 0 #000) drop-shadow(-1px 0px 0 #000) drop-shadow(0px -1px 0 #000) drop-shadow(1px 0px 0 #000) drop-shadow(0px 1px 0 #000) drop-shadow(-1px 0px 0 #000);}
    
    .p5sml:hover{background:#00000080}

    .p5leftsidenav{max-width:45%; width:45%; display:flex; overflow: hidden; text-overflow: ellipsis;}
    .p5rightsidenav{max-width:45%; width:45%; display:flex; overflow: hidden; text-overflow: ellipsis;flex-direction: row-reverse;}

    .p5sidenavp{margin: auto 3px;  overflow: hidden; text-overflow: ellipsis;}


    .p5maincard{
    padding:3px;
     background-image: url(https://flonkie.neocities.org/nekoimages/personawbr/base.png);
     background-size: cover;
     display: flex;
     flex-direction: column;
     justify-content: center;
     
      }
     .p5blabord,.p5redbord,.p5whiboard{border:5px solid #ffffff}
     .p5blabord{border-color: #000000}
     .p5redbord{border-color: #ff0000}
        
    }
    .p5center{ display: flex; flex-wrap: wrap; flex-direction: column; justify-content: center; width: 300px; max-width: 300px;}
  `
}