## Azurine Selfbot

### A selfbot made for stealth and tree structure organization

- Installation
    
    Open PowerShell or a terminal on Windows or a terminal for Linux/MacOS and execute these commands (You must install git, NodeJS (NPM for Linux/MacOS) and G++).
    ![](https://cdn.discordapp.com/attachments/879450736243642429/960241896175841410/installation.png)
    
- Languages

    JavaScript and soon TypeScript

- Make config.json
  
  The path of config.json is "Azurine/src/util/config.json"
  
  ![](https://cdn.discordapp.com/attachments/879450736243642429/960237548473565274/makeConfig.png)

- Make Commands

    The path must be "Azurine/src/commands/{Category of the command}/{command}.js"

    Example of command:
      ![](https://cdn.discordapp.com/attachments/903002196013101056/955861860148736050/makeCommand.png)

- Make Events

    ⚠️ The filename MUST be the name of the event
    
    The path must be "Azurine/src/events/events/{Category: example: client, message etc...}/{eventName}.js"
    
    Example of event:
      ![](https://cdn.discordapp.com/attachments/903002196013101056/955863549429809252/makeEvents.png)
