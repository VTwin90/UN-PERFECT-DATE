# **Milestone 2: (UN)PERFECT DATE**

### **Project - Interactive Frontend Development - Code Institute.**
This is the second milestone project from CI with a focus on HTML, CSS and JavaScript. The project is a fun and interactive game, with a visual novel to showcase the developers learning and skills with JavaScript.  

A deployed link to the website can be found **[here](https://vtwin90.github.io/UN-PERFECT-DATE/)**.

![Mockup](assets/images/mockup.png)
## **Contents**
***
- [**User Experience (UX)**](<#user-experience-(ux)>)
  - [Project Goals](<#project-goals>)
  - [Importance and Feasibility chart](<#importance-and-feasibility-chart>)
  - [User Stories](<#user-stories>)
  - [Website Structure](<#website-structure>)
  - [Design Choices from UXD](<#design-choices-from-uxd>)
    - [Color Scheme](<#color-scheme>)
    - [Images](<#images>)
    - [Typography](<#typography>)
  - [Wireframes](<#wireframes>)
  - [Design Changes](<#design-changes>)

- [**Features**](<#features>)
  - [Existing Features](<#existing-features>)
  - [Features left to implement](<#features-left-to-implement>)

- [**Technologies**](<#technologies>)

- [**Testing**](<#testing>)

- [**Deployment**](<#deployment>)

- [**Credits**](<#credits>)

## **User Experience** (UX)
***

### **Project Goals**
The idea is to create a game that showcases the developers knowledge of HTML, CSS and JavaScript. To provide users with some entertainment. The game should be easy to understand, fun, simple to interact with and give feedback to the user on all inputs.

### **Importance and Feasibility chart**

**Opportunity/Problem** | **Importance** | **Viability/Feasibility**
| :--- | ---: | :---:
A. Creation of a interactive and fun JavaScript game  | 5 | 5
B. Game instructions | 5 | 5
C. Game start button  | 5 | 5
D. Try again button after game completion  | 5 | 5
E. Creation of Contact button, form, response and sending email. | 5 | 4
F. Head banner | 3 | 5
G. Characters | 4 | 5
H. Logo and developers name | 4 | 5
I. Hidden Score | 3 | 4
J. Mobile/Text message interaction | 2 | 4
K. Ending page | 5 | 5
L. 404 page| 2 | 4

#### [Back to top](<#contents>)

### **User stories**

#### **First Time Visitor Goals**
* As a **first time user** I want to be able to navigate through the whole site smoothly.
* As a **first time user** I want to understand the purpose of the site upon loading it.
* As a **first time user** I want to be able to easily play the game on any device and view content clearly.
* As a **first time user** I want to easily be able to contact the developer for more information, feedback, issues or queries.
* As a **first time user** I want to have instructions on how to play the game so that I can easily understand the rules.
* As a **first time user** I want to be able to start a game when I am ready.
* As a **first time user** I want a way to start a new game when the current game has ended. 
* As a **first time user** I want to be able to access the games external social accounts.
* As a **first time user** I want to be able to enjoy an interactive game that is fun and is replayable.

#### **Site Owner Goals**
* As a **site owner** I want to showcase the skills I have learnt in HTML, CSS and JavaScript.
* As a **site owner** I want to provide users with an interactive game to play.
* As a **site owner** I want to create an enjoyable, interactive game that makes the user want to stay and play again.
* As a **site owner** I want to create a game that makes the user want to return to the website.
* As a **site owner** I want to make a game that I would enjoy playing.
* As a **site owner** I want users to be able to contact the developer for collaboration, queries, feedback and network.

#### [Back to top](<#contents>)

### **What is needed now and in the future?**

* The developer wants an aesthetically pleasing and fun game to reinforce the experience and to showcase their potential and growth. There will be a landing page/home page to grab attention, with options to start the game, how to play, and contacting the developer. A second page will be  game page which will then be changing throughout the game. A third page will be for the ending page, where it will change based on the ending. 

* The owner could have their needs and more fulfilled by using a mobile first approach to a fully responsive website which would allow for easy navigation, use and no diminished experiences on all viewport sizes.

* Other features further down the line will allow the website to provide a more complete user experience by incorporating more content, characters, music and other elements(text animation) to liven up the project even more. 

#### [Back to top](<#contents>)

### **Website Structure**

This website will use three pages, one for landing page, second for the game itself, and third for the ending page. This is all due to javascript being able to change content and layout easily. This game will also focus on mobile first design. 

Upon loading the page the user will be directed to the home page (index.html) where they will get options to start the game, how to play and contacting the developer. Then a game page(game.html) that takes you through the game itself, with text boxes, and options buttons, as well as characters and backgrounds to set an atmosphere. At last an ending page (end.html) which will give users different endings based on scores, as well as a try again button and contact button. For simplistic use and user experience.  

#### [Back to top](<#contents>)

### **Design Choices from UXD**
***

The style is based on a minimalistic, fun, readable, contrasting design for easy flow and navigation, as well as maintaining a consistency to allow the user to easily familiarise themselves with the game efficiently and intuitively.

The theme is a playful visual novel game, with animated characters of the game with real life backgrounds to add to the contrast. With an option to try the game again for a different ending and character. This game is meant to be played multiply times, and in the future add more content, characters and storylines. 

#### [Back to top](<#contents>)

### **Color Scheme**

The general color scheme is different color shades of blue and white. With some color details consistent of yellow, green and black. These colors will create a consistent style for the game. There are also other colors; from the characters and image backgrounds for the game.

![Color Scheme](assets/images/readme/colorscheme.png)

### **Images**

The images is consistent of: 
1. Characters, which the developer has created through Pixton.
2. Backgrounds, which is taken from Unsplash.
3. Mobile, which the developer has created through Figma.

### **Typography**

To keep a consistent, playful and modern style, and for easy readability, the fonts used are Play(for logo and ending headlines), Montserrat (the general text and heading), and Sacramento for the developers name. These are taken from Google Fonts library. 

#### [Back to top](<#contents>)

### **Wireframes**
|Sketches|Wireframes & Designs|                        
|:-----:|:----:|
|[Sketches](assets/images/readme/sketches.pdf)| [Wireframes & Designs](assets/images/readme/wireframes&designs.pdf)

### **Design changes**

#### General:
* Changed from having two colors on the landing page and ending page to one color. 
* Kept the endings similar in design.

#### Buttons:
* Add linear-gradient on button hover over all buttons on the game (135deg, #0A6CA3 5%, #0C81C2 15%, #2FE3FE 50%, #FFFFFF 100%);
* Decided to use the same color palette on all buttons.

#### Socials:
* Add linear-gradient on when you hover over the socials, and made them similar to the button stylings as well as rounded. 
 
#### Game:  
* Moved characters to the center, and further in the front.
* No arrow on text-box. 
* Moved buttons further down on layout to get more background image for atmosphere experience. 
* Changed layout on mobile animation, and some design. As well as having it more on the top corner on bigger devices. Also having a continue button so users get a choice to see the full animation or skip it. 

#### [Back to top](<#contents>)

## **Features**
***

### **Existing Features**

Included in the **game** is:

* **Head banner:** Which alerts the user that there are new stories and characters coming soon. 
* **Characters:** A group of six avatars. Two which will be mainly used in this game, with some different emotions and positures. 
* **Logo and developers name:** A logo telling the name of the game "(UN)PERFECT DATE" and who it is by.  
* **Start a game button:** To begin the game.  
* **How To Play button:** Where the user can click and a modal shows up explaining the way to interact with the game.
* **Contact button:** Where the user can click and a modal pops up with a contact form and socials(leads to external sites). The user can then fill out the form with email and message query (with validation, “@” and “.” etc.) and submitted to contact the developer.
* **Modal:** A modal that lets the user know they have been successful in sending the message.
* **Text boxes:** To showcase the story and dialogue, and in some parts the name of a character.  
* **Backgrounds:** Three images to give a scenery for the game as the user plays along. 
* **Option buttons:** To give the user options and make use of their decision making skills. 
* **Try Again button:** In the end there will be an option to try the game again for a different outcome.
* **Hidden Score:** To add points as one goes along the story to be added for different endings. 
* **Mobile/Text message interaction:** A mobile call/text message interactive part of the storyline comes up.
* **Ending page:** Based on the hidden score there will be a couple of different endings based on the users choices, as well as a try again and contact button. 
* **404 page:** A message telling the user they have accessed a page which does not exist. Including a button which is linked to index.html that prompts them to return to the site.


### **Features Left to Implement**

* Add music for user experience.
* Add text animation to make the text give an experience as well. 
* Add more content, storylines, characters and scenes. 
* Add more different endings, as well as design. 
* Add a more designed successful sent message when sending a message from the modal form. 

#### [Back to top](<#contents>)

## **Technologies**
***

### **Languages**

* [HTML5](https://en.wikipedia.org/wiki/HTML5 "HTML5") - provides the content and structure for the game.
* [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets "CSS3") - provides the styling.
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) -provides the interactivity and functionality throughout the game.

### **Frameworks, Libraries & Programs**

* [Bootstrap](https://getbootstrap.com/ "Bootstrap") - used to create the layout of the project.
* [Figma](https://www.figma.com/ "Figma") - used to create the projects wireframes, designs and logo.
* [Gitpod](https://www.gitpod.io/ "Gitpod") - used to develop the website.
* [GitHub](https://github.com/ "GitHub") - used to host the project.
* [Git](https://git-scm.com/) -used for version control.
* [Git Pages](https://pages.github.com/) - used to deploy the live site. 
* [Trello ](https://trello.com/ "Trello ") - used for time and project management.
* [Ilovepdf](https://www.ilovepdf.com/compress_pdf "Ilovepdf") - used for compressing pdf files.
* [TinyJPG](https://tinyjpg.com/) - used to reduce image file sizes. 
* [Google Fonts](https://fonts.google.com/) - used for typography.
* [Font Awesome](https://fontawesome.com/) - used for icons.
* [FavIcon](https://favicon.io/) -used for compressing logo into favIcons.
* [Pixton](https://app.pixton.com/) -used for creating characters.
* [Google Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools) -used to inspect page elements, test different CSS styles, debug issues and responsiveness.

## **Testing**
***

#### [Back to top](<#contents>)

## **Deployment**
***

### Project Creation
Navigate to the **[template](https://github.com/Code-Institute-Org/gitpod-full-template)** and click 'Use this template'. Put in Repository name ((UN)PERFECT DATE) and check the Include all branches checkbox. Then navigate to the new **[repository](https://github.com/VTwin90/-UN-PERFECT-DATE)**.

The following commands were used for version control throughout the project:
+ ```git status``` (checks which files have been modified or added, and ready to be committed)
+ ```git add . ``` or ```git add <filename>``` (add all changed files, or specific files within the project directory to be committed)
+ ```git commit -m "[TYPE] Reason"``` (commit changes to the local repository)
+ ```git push``` (push all committed changes to the GitHub repository)

### **Deployment to Github pages**

1. Push project to GitHub. Navigate and log into the GitHub site.
2. Go to repositories and select the one associated to this project: **[(UN)PERFECT DATE](https://github.com/VTwin90/UN-PERFECT-DATE)**.
3. On the main repository, click "Settings" and scroll to "Github Pages".
4. Under "Source" select "Master Branch" and click "Save".
5. Click on the link to go to the live deployed page.

The live link for the site is here: **[https://vtwin90.github.io/UN-PERFECT-DATE/](https://vtwin90.github.io/UN-PERFECT-DATE/)**

### **Create a local clone**

1. Open GitHub and navigate to repository **[here](https://github.com/VTwin90/UN-PERFECT-DATE)**.
2. Click the Code drop down menu. 
3. Options: 
* Download the ZIP file, unpack locally and open with IDE.  
* Copy git URL from HTTPS dialogue box. 
4. Open your chosen IDE and open terminal in a directory. 
5. Use ```git clone``` command with the copied git URL after.
6. Clone of the project is created locally on your machine.

### **Fork Project**

1. Navigate to the GitHub Repository you want to **[fork](https://github.com/VTwin90/UN-PERFECT-DATE)**.
2. On the top right of the page under the header, click the fork button.
3. Creates a duplicate of the full project in your GitHub Repository.

#### [Back to top](<#contents>)

## **Credits**
***

### **Code**

### **Media & Content**
**Characters:** Created with Pixton avatar generator and characterised by developer. 
* https://app.pixton.com/  
<br>

**Background images:** Taken from Unsplash. 
* https://unsplash.com/photos/8oc7EtRZEL8
* https://unsplash.com/photos/wz8dawTTRJo
* https://unsplash.com/photos/H7xTpvBjJS4

Storyline, idea and all other content are owned by the site owner.

### **Acknowledgments**

#### [Back to top](<#contents>)