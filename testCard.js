//require('dotenv-safe').config()
const axios = require('axios')

//const { default: Axios } = require("axios")

const icon = '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="4"></circle>'

miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'Raj: Card npm axios response retry 10:26',
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
            /*const response = await axios.get
            ('https://dev.azure.com/TeamFred/_apis/wit/workItems/98498', 
              {
                headers: 
                {
                  Authorization: `token abcd`, 
                  'User-Agent': 'Miro Importer',
                },
              }
            )

            console.log(response);*/

            var request = new XMLHttpRequest()

            request.open('GET', 'https://dev.azure.com/TeamFred/_apis/wit/workItems/98498', true)
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8;');
            request.setRequestHeader ("Authorization", "Basic " + btoa('Basic' + ":" + 'cxdfzxfkdrpfdcurbfb22i6k3m5esccwfpimzsglusosxe4krivq'));

            request.onload = function() {
              // Begin accessing JSON data here

              var data = JSON.parse(this.response)

              if (request.status >= 200 && request.status < 400) {
                console.log(data)
                } else {
                console.log('error')
                  }
            }

            request.send()

            // Create new card
            await miro.board.widgets.create
            (
              {
                "type":'card', 
                  "title": "Story Title",
                  "description": "Some discription"
                  
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