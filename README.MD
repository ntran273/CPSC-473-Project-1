PSC-473-Project-1
Christian Medina christian.medina@csu.fullerton.edu
Erik Lienhard elienhard@csu.fullerton.edu
Ruth Madrid ruthm11@csu.fullerton.edu
Nguyen Tran ntran272@csu.fullerton.edu

//assuming someone received these files and has not done any set up and has minimal understanding of what is happening
//this is before Prof Avery emailed me back, I just feel the need to do something

#Assume user is using Debian-based Linux system
For installation and configuration:
1.  Install Node.js
- Go to nodejs.org and download the installer.
- Double click installer and follow prompts
2.  Install browser-sync
- Open the command console
- Use the command: npm install -g browser-sync
- If you need superuser privileges use: sudo npm install -g browser-sync
3.  Install MongoDB and Deployd
- Use the following commands to install MongoDB and Deployd:
$sudo apt update
$sudo apt install -y mongodb nodejs nodejs-legacy npm
$sudo systemcl stop mongodb
$sudo systemcl disable mongodb
$sudo npm install deployd-cli -g
4. Use the following commands to create a Deployd application and open the dashboard:
$dpd create LawMakers
$cd LawMakers
$dpd -d
For Users:
The Home page is able to access the About Us page, the Ask A Question page, and the Contact page.
The About Us page has information about all the lawyers that use the application and can be asked questions.
The Contact Us page
The Question page has areas to ask a question, give any additional details, choose a legal topic, choose a state or province, provide an email, and give the users full name.


