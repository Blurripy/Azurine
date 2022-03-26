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
  cout << "                           _              _____           _        _ _           \n     /\\                   (_)            |_   _|         | |      | | |          \n    /  \\    _____   _ ____ _ _ __   ___    | |  _ __  ___| |_ ____| | | ___ ____ \n   / /\\ \\  |_  / | | |  __| |  _ \\ / _ \\   | | |  _ \\/ __| __/ _  | | |/ _ \\  __|\n  / ____ \\  / /| |_| | |  | | | | |  __/  _| |_| | | \\__ \\ || (_| | | |  __/ |   \n /_/    \\_\\/___|\\____|_|  |_|_| |_|\\___| |_____|_| |_|___/\\__\\____|_|_|\\___|_|\n\n\n\n\n\n        Installation [1]\n        Launch SelfBot [2]\n        New Command [3]\n        Reset Settings [4]\n        Quit [Control-C]\n\n\nChoose an option > ";
  cin >> option;


  switch (option) {
    case 1:
    {
      const string info[5] {"token", "User ID", "prefix", "blague token from blagues-api.fr", "tenor app key"};
      const string info1[6] {"token", "prefix", "ownerid", "blague_token", "tenor_key"};
      string config[7];
      config[6] = "null";
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
      if (config[6] == "n" or config[6] == "N")
      {
        config1 += "\n    \"autodelete\": false\n}";
      }
      else
      {
        config1 += "\n    \"autodelete\": true\n}";
      }

      //put the JSON to config.json
      remove ("./src/util/config.json");
      ofstream json;
      json.open("./src/util/config.json", ios::app);
      json << config1;
      json.close();

      cout << "\n\nHere we go ! You can download nodejs (https://nodejs.org/) and run via the installer of the selfbot ! Thank's for using my selfbot made with <3 !";
      break;
    }
    case 2:
    {
      system ("npm i");
      system ("node .");
      break;
    }
    case 3: cout << "In developpement !"; break;
    case 4: cout << "In developpement !"; break;

    case 5:
    {
      while (option > 3)
      {
        cout << "Please enter a valid value > ";
        cin >> option;
      }
    }
  }
}