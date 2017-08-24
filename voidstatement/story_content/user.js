function ExecuteScript(strId)
{
  switch (strId)
  {
      case "68Vf3KQZILw":
        Script1();
        break;
  }
}

function Script1()
{
  var lrs;

try {
    lrs = new TinCan.LRS(
   {
            endpoint: player.GetVar("endPoint"),
            username: player.GetVar("userName"),
            password: player.GetVar("passWord"),
            allowFail: false
        }
    );
}
catch (ex) {
    console.log("Failed to setup LRS object: " + ex);
    alert("Failed to setup LRS object: " + ex);
    // TODO: do something with error, can't communicate with LRS
}
var statement = new TinCan.Statement(
    {
    "actor": {
        "objectType": "Agent",
        "name": player.GetVar("newName"),
        "account": {
                "name": player.GetVar("studentID"),
                "homePage": player.GetVar("homePage"),
        },
        
    },
    "verb": {
        "id": "http://adlnet.gov/expapi/verbs/voided",
        "display": {
            "en-US": "voided"
        }
    },
     "object": {
        "id": player.GetVar("statementRef"),
        "objectType": "StatementRef"
    }
}
);
lrs.saveStatement(
    statement,
    {
        callback: function (err, xhr) {
            if (err !== null) {
                if (xhr !== null) {
                    console.log("Failed to save statement: " + xhr.responseText + " (" + xhr.status + ")");
                    alert("Failed to save statement: " + xhr.responseText + " (" + xhr.status + ")");
                    
                    // TODO: do something with error, didn't save statement
                    return;
                }

                console.log("Failed to save statement: " + err);
                alert("Failed to save statement: " + err);
                // TODO: do something with error, didn't save statement
                return;
            }

            console.log("Statement saved");
            alert("Statement saved");
            // TOOO: do something with success (possibly ignore)
        }
    }
);
}

