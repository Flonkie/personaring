export default {
  match: 'host',
  value: location.host,
  
  defaultWidget: `
      <div class="center">
      <img src="https://flonkie.neocities.org/nekoimages/personawbr/Who.png" class="size" style="margin: 3px auto; height: 17px;">
      <div>
      <img src="https://flonkie.neocities.org/nekoimages/personawbr/thou.png" class="size">
      <a href="https://flonkie.nekoweb.org/other/persona"><img src="https://flonkie.neocities.org/nekoimages/personawbr/webr.png" class="size"></a></div>
      </div>
  `,

  widget: `
    <div class="blabord" >
        <div class="redbord">
            <div class="whiboard maincard">
            <img style="width:130px; height:auto; margin: 5px auto; filter: drop-shadow(0px -1px 0 #eceff1) drop-shadow(1px 0px 0 #eceff1) drop-shadow(0px 1px 0 #eceff1) drop-shadow(-1px 0px 0 #eceff1) drop-shadow(0px -1px 0 #eceff1) drop-shadow(1px 0px 0 #eceff1) drop-shadow(0px 1px 0 #eceff1) drop-shadow(-1px 0px 0 #eceff1);"src="https://flonkie.neocities.org/nekoimages/personawbr/PTL1.gif">
            <img style="width:150px; height:auto; margin: 5px auto;"src="https://flonkie.neocities.org/nekoimages/personawbr/PTL.png">
                <div class="directions">
                    <a class="sml" href="https://{prev.host}"><img src="https://flonkie.neocities.org/nekoimages/personawbr/x.png" style="height:25px; width: auto;vertical-align: middle;"> {prev.username}</a>
                    <a class="sml" href="https://flonkie.nekoweb.org/other/persona"><img src="https://flonkie.neocities.org/nekoimages/personawbr/Menu.png" style="height:25px; width: auto;vertical-align: middle;"></a>
                    <a class="sml" href="https://{next.host}">{next.username} <img src="https://flonkie.neocities.org/nekoimages/personawbr/o.png" style="height:25px; width: auto;vertical-align: middle;"></a>
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
      
    .directions{display:flex; flex-direction: row; justify-content: space-between; margin: 0 5px;}
    .sml{width:fit-content; height:fit-content; margin:0; padding:0; font-family: "Arial"; color: #FFFFFF;font-weight:bolder!important; font-size: 16px;text-decoration:none;}
    .size{height:15px; margin:3px 0;width: max-content; overflow: visible; filter: drop-shadow(0px -1px 0 #000) drop-shadow(1px 0px 0 #000) drop-shadow(0px 1px 0 #000) drop-shadow(-1px 0px 0 #000) drop-shadow(0px -1px 0 #000) drop-shadow(1px 0px 0 #000) drop-shadow(0px 1px 0 #000) drop-shadow(-1px 0px 0 #000);}
    
    .maincard{
    padding:3px;
     background-image: url(https://flonkie.neocities.org/nekoimages/personawbr/base.png);
     background-size: cover;
     display: flex;
     flex-direction: column;
     justify-content: center;
     
      }
     .blabord,.redbord,.whiboard{border:5px solid #ffffff}
     .blabord{border-color: #000000}
     .redbord{border-color: #ff0000}
        
    }
    .center{ display: flex; flex-wrap: wrap; flex-direction: column; justify-content: center; width: 300px; max-width: 300px;}
  `
}