var user_id = 0; //positive counter
var pass_id = 0; //negative counter
var logged_in = 0;
var maximum = 10000;

function register()
{
  let i = document.getElementById("user-login").value;
  let j = document.getElementById("pass-login").value;
  var user_exist = 0;

  if (i != "" && j != "")
  {
    user_id++;
    pass_id--;

    for (user_id = 1; user_id <= maximum; user_id++)
    {
      if (localStorage.getItem(user_id) == null)
      {
        for (var x = 1; x < maximum; x++)
        {
          if (i == localStorage.getItem(x))
          {
            document.getElementById("error-check").innerHTML = "Username already exist";
            x = maximum;
            user_id = maximum;
            user_exist = 1;
          }
        }

        if (user_exist == 0)
        {
          pass_id = user_id - user_id - user_id;
          localStorage.setItem(user_id, i);
          localStorage.setItem(pass_id, j);
          user_id = maximum;
          document.getElementById("user-login").value = "";
          document.getElementById("pass-login").value = "";
        }
      }
    }
  }
}

function login()
{
  let i = document.getElementById("user-login").value;
  let j = document.getElementById("pass-login").value;

  if (logged_in == 0)
  {
    for (var x = 1; x <= maximum; x++)
    {
      if (i == localStorage.getItem(x))
      {
        if (j == localStorage.getItem(x - x - x))
        {
          document.getElementById("error-check").innerHTML = "Tada";
          logged_in = 1;
          document.getElementById("login-btn").disabled = true;
          document.getElementById("logout-btn").disabled = false;
          document.getElementById("register-btn").disabled = true;
          document.getElementById("user-login").value = "";
          document.getElementById("pass-login").value = "";
        }
        else
        {
          document.getElementById("error-check").innerHTML = "Wrong password";
        }
        x = maximum;
      }
      else
      {
        document.getElementById("error-check").innerHTML = "No username found";
      }
    }
  }
}

function logout()
{

  if (logged_in == 1)
  {
    document.getElementById("login-btn").disabled = false;
    document.getElementById("logout-btn").disabled = true;
    document.getElementById("register-btn").disabled = false;
    logged_in = 0;
  }
}

function show_users()
{
  document.getElementById("all-users").innerHTML = "";
  for (var x = 1; x <= maximum; x++)
  {
    if (localStorage.getItem(x) != null)
    {
      var y = x - x - x;
      document.getElementById("all-users").innerHTML = "User: " + localStorage.getItem(x) + "<br>" + "Pass: " + localStorage.getItem(y) + "<br>" + document.getElementById("all-users").innerHTML;
    }
  }
}

function reset()
{
  localStorage.clear();
}
