## Azurine Selfot

### A selfbot made for stealth and tree structure organization

- Installation
    ```bash
    git clone https://github.com/Blurripy/Azurine
    cd Azurine
    npm i
    node .
    ```
    
    You must provide some informations like your token on "Azurine/src/util/config.json" 

- Languages

    JavaScript and soon TypeScript

- Make Commands

    The path must be "Azurine/src/commands/{Category of the command}/{command}.js"

    Example of command:
      ![](https://cdn.discordapp.com/attachments/903002196013101056/955861860148736050/makeCommand.png)

- Make Events

    ⚠️ The filename MUST be the name of the event
    
    The path must be "Azurine/src/events/events/{Category: example: client, message etc...}/{eventName}.js"
    
    Example of event:
      ![](https://cdn.discordapp.com/attachments/903002196013101056/955863549429809252/makeEvents.png)
