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
        title: 'Raj: Card npm API call env 23/10@11:42pm',
        svgIcon: icon,
        onClick: async () => {

          // Show modal and wait for user choice
          let needToClear = confirm('Hey! This will add card?')

          if (needToClear) {
            // Get all board objects
            //let objects = await miro.board.widgets.get()

            // Delete all board objects
            //await miro.board.widgets.deleteById(objects.map(object => object.id))

            /*

            //call AzDo
            console.log('Before call')

            axios.defaults.baseURL = 'https://dev.azure.com';
            axios.defaults.headers.common['Authorization'] = "Basic " + btoa('Basic' + ":" + "'cdyvvwbq4cfno5qhnl6wmt25pl4vhomfx36g2mvszuycluvbpwta'");

            axios.get('/TeamFred/_apis/wit/workItems/98498')
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log('There was an error call')
              console.log(error);
            });
            */

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

            console.log('After call')
            console.log(response);          
  */          

 var data;
 var request = new XMLHttpRequest()
 
            request.open('GET', 'https://dev.azure.com/TeamFred/_apis/wit/workItems/98498', true)
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8;');
            request.setRequestHeader ("Authorization", "Basic " + btoa('Basic' + ":" + 'ysx3szzwfxjimwpxlua62bja5itgmc5zu2nrmwgq2ibgbsegqdoq'));
            request.responseType = 'json';

            request.onload = function() {
              // Begin accessing JSON data here
              if (request.status >= 200 && request.status < 400) {
                  console.log(this.response);
                  data =  this.response;
                  console.log(this.response.id);
                  console.log(this.response.fields["System.Title"]);
                  console.log(data.id);
                  console.log(data.fields["System.Title"]);

                  // Create new card
                  //TODO: change icon image
                  //TODO: Tags are not working yet
                  let wTestCard = miro.board.widgets.create
                  (
                    {
                      "type":'card', 
                        "title": data.fields["System.Title"],
                        "description": data.fields["System.Description"],                        
                        card: {
                          customFields: [
                            {
                              value: `Backlog Item`,
                              iconUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
                            },    
                            {
                              value: data.fields["System.IterationPath"],
                              iconUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
                            } ,                       
                          ]
                        }
                    }
                  );
                  //TODO: why is this not working
                  miro.board.tags.create({title: data.fields["System.BoardLane"], color: '#F24726', widgetIds: wTestCard})

                } else {
                console.log('error')
                  }
            }

            console.log("call for data")
            request.send()
            console.log("send called for data")

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

console.log('Plugin installed 23/10@11:42pm')