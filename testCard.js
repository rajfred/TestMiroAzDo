//require('dotenv-safe').config()
//const axios = require('axios')
//require('dotenv').config();  

//const { default: Axios } = require("axios")

const icon = '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="4"></circle>'
var responsedata;

miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'Raj: Card npm API call env 19/10@9:36',
        svgIcon: icon,
        onClick: async () => {

          // Show modal and wait for user choice
          let needToClear = confirm('Hey! This will add card?')

          if (needToClear) {
            // Get all board objects
            //let objects = await miro.board.widgets.get()

            // Delete all board objects
            //await miro.board.widgets.deleteById(objects.map(object => object.id))


            //call AzDo
            console.log('Before call')

            axios.defaults.baseURL = 'https://dev.azure.com';
            axios.defaults.headers.common['Authorization'] = "Basic " + btoa('Basic' + ":" + "'cdyvvwbq4cfno5qhnl6wmt25pl4vhomfx36g2mvszuycluvbpwta'");

            axios.get('/TeamFred/_apis/wit/workItems/98498')
            .then(function (response) {

              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });

            /*
            const response = await axios.get
            ('https://dev.azure.com/TeamFred/_apis/wit/workItems/98498', 
              {
                headers: 
                {
                  Authorization: `token cdyvvwbq4cfno5qhnl6wmt25pl4vhomfx36g2mvszuycluvbpwta`,                   
                },
              }
            )
*/
            console.log('After call')
            console.log(response);          

            /*
            var request = new XMLHttpRequest()            

            request.open('GET', 'https://dev.azure.com/TeamFred/_apis/wit/workItems/98498', true)
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8;');
            request.setRequestHeader ("Authorization", "Basic " + btoa('Basic' + ":" + "'cdyvvwbq4cfno5qhnl6wmt25pl4vhomfx36g2mvszuycluvbpwta'"));
            request.setRequestHeader ("User-Agent", "Miro");
            request.responseType = 'json';

            request.onload = function() {
              // Begin accessing JSON data here

              var data = JSON.parse(this.response)

              if (request.status >= 200 && request.status < 400) {
                  console.log(data);
                  responsedata = data;
                } else {
                console.log('error')
                  }
            }

            request.send()

            */

            /*
            Microsoft.VSTS.Scheduling.Effort: 2
            System.AreaPath: "Pharmacy\Program\Dracarys"
            System.AssignedTo: {displayName: "Pradeep Vajrapu"
            System.Description: "<div>When a pharmacist dispenses a script th
            System.IterationPath: "Pharmacy\PI 7\Sprint 1"
            System.Title: "V2 scripts must be initiated via Flow"
            System.WorkItemType: "Product Backlog Item"
            */


            // Create new card
            await miro.board.widgets.create
            (
              {
                "type":'card', 
                  "title": "Story Title",
                  "description": response.data                
              }
            )

            // Display success
            miro.showNotification('Card has been added 2000')
          }
          else
          {
            miro.showNotification('Alright, canceled the action')
          }
        }
      }
    }
  })
})

console.log('Plugin installed 4:22')