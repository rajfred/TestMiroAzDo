const icon = '<rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />'

miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'Add Card Rect',
        svgIcon: icon,
        onClick: async () => {

          // Show modal and wait for user choice
          let blnAddCard = confirm('Hey! This will add a card?')

          if (blnAddCard) {
            // Get all board objects
            //let objects = await miro.board.widgets.get()

            // Create new card
          await miro.board.widgets.create
          (
            {
                "type": 'CARD',
                "bounds": {
                    "width": 100,
                    "height": 60
                },
                "x": 100,
                "y": 100,
                "scale": 100,
                "style": {
                    "backgroundColor": #608bd1
                },
                "title": "Story Title",
                "description": "Story Description",                
                "card": {
                         "customFields": [
                             {"value": "Custom Value 1"},
                             ]
                         ,
                        "logo":{iconUrl: ""} //maybe subject to CORS restrictions
                   }
                 ,
                "metadata": {
                    [miroAppClientId]: {
                        "key 1": "value 1",
                        "key 2": "value 2",
                        "key 3": "value 3",
                    }
                }
                                          
            }
          )

            // Display success
            miro.showNotification('Card has been added')
          }
          else
          {
            miro.showNotification('Alright, not adding a card')
          }
        }
      }
    }
  })
})

