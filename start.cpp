#include <cstdlib>
#include <iostream>
#include <string>
#include <sched.h>
#include <type_traits>
#include <fstream>

using namespace std;

int main()
{
  short option;
  cout << "                           _              _____           _        _ _           \n     /\\                   (_)            |_   _|         | |      | | |          \n    /  \\    _____   _ ____ _ _ __   ___    | |  _ __  ___| |_ ____| | | ___ ____ \n   / /\\ \\  |_  / | | |  __| |  _ \\ / _ \\   | | |  _ \\/ __| __/ _  | | |/ _ \\  __|\n  / ____ \\  / /| |_| | |  | | | | |  __/  _| |_| | | \\__ \\ || (_| | | |  __/ |   \n /_/    \\_\\/___|\\____|_|  |_|_| |_|\\___| |_____|_| |_|___/\\__\\____|_|_|\\___|_|\n\n\n\n\n\n        Installation [1]\n        Launch SelfBot [2]\n        Update Selfbot [3]\n        Quit [Control-C]\n\n\nChoose an option > ";
  cin >> option;


  switch (option) {
    case 1:
    {
      const string info[5] {"token", "User ID", "prefix", "blague token from blagues-api.fr", "tenor app key"};
      const string info1[6] {"token", "prefix", "ownerid", "blague_token", "tenor_key"};
      string config[7];
      string config1 = "{";

      //create JSON file
      for (int i=0; i != 5; i++)
      {
        cout << "Please insert your " << info[i] << " > ";
        cin >> config[i];
        config1 += "\n    \"" + info1[i] + "\": \"" + config[i] + "\",";
      }

      cout << "Do you wan't auto delete message when using command ? (Y/N) > ";
      cin >> config[6];
      //if (config[6] == "n" or config[6] == "N") config1 += "\n    \"autodelete\": false\n}";
      config1 += "\n    \"autodelete\": ";
      config1 += (config[6] == "n" or config[6] == "N") ? "false" : "true";
      config1 += "\n}";

      //put the JSON to config.json
      remove ("./src/util/config.json");
      ofstream json;
      json.open("./src/util/config.json", ios::app);
      json << config1;
      json.close();

      cout << "\n\n.---------------------------------------------------------------------.\n|                   Ready to launch the SelfBot !                     |\n|---------------------------------------------------------------------|\n| Here we go !                                                        |\n| You can download NodeJS (https://nodejs.org/) and run the selfbot ! |\n| Thank's for using my SelfBot made with <3 !                         |\n'---------------------------------------------------------------------'";
      break;
    }

    case 2:
    {
      system ("node .");
      break;
    }

    case 3:
    {
      system ("git init && git reset --hard && git clean -fd && git pull && g++ start.cpp -o start");
      break;
    }
    
    default:
    {
      cout << "Invalid option, please try again.";
      break;
    }
  }
}
