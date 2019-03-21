git status
git add .
git commit -m "update"
git pull origin master
git push origin master
Set WshShell = WScript.CreateObject("WScript.Shell")
WshShell.Run "C:\Windows\System32\cmd.exe"
WshShell.AppActivate "C:\Windows\System32\cmd.exe"
WshShell.SendKeys"spjm -s "IP" -user admin -quiet -t"
WshShell.SendKeys "{ENTER}"
:wq