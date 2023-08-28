## Cloning Project 
Step 1: You may click on Code Button, then click on download Zip File.
![image](https://github.com/cl3mentch/innovus/assets/31813377/2b437249-ae4e-4125-aa13-55d1a6e10164)

Step 2: Open Visual Studio Code
First go to Download and unzip the folder. Then open Visual Studio Code Go to File -> Open Folder -> Go to Download and find the downloaded project.

## Developing
Once you've open the project and you need to open your terminal first install this  `npm install` to start a development server.

```bash
npm install //install this first
npm run dev // Once installation is finished then run this
```

Click on `http://localhost:5173/` to view your website.
![image](https://github.com/cl3mentch/innovus/assets/31813377/7ee25007-c035-4474-bb39-ccac7d6abcab)


## Routing
At the heart of SvelteKit is a filesystem-based router. The routes of your app — i.e. the URL paths that users can access — are defined by the directories in your codebase:
For Example -
*src/routes is the root route
*src/routes/about creates an /about route

```
<h1>Hello and welcome to my site!</h1>
<a href="/about">About my site</a>
```
![image](https://github.com/cl3mentch/innovus/assets/31813377/4199ffcc-0709-489f-ba10-af3533ee092d)

