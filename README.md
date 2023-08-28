## Cloning Project 
Step 1: You may click on Code Button, then click on download Zip File.
![image](https://github.com/cl3mentch/innovus/assets/31813377/2b437249-ae4e-4125-aa13-55d1a6e10164)

Step 2: Open Visual Studio Code
First go to Download and unzip the folder. Then open Visual Studio Code Go to File -> Open Folder -> Go to Download and find the downloaded project.




## Setting Up
Once you've open the project and you need to open your terminal first install this  `npm install` to start a development server.

```bash
npm install //install this first
npm run dev // Once installation is finished then run this
```

Click on `http://localhost:5173/` to view your website.
![image](https://github.com/cl3mentch/innovus/assets/31813377/7ee25007-c035-4474-bb39-ccac7d6abcab)


## Svelte Basic
In Svelte project, you would see `+page.svelte` inside of every folder of routes. The `+page.svelte` is for you to write your content of your website. Click here to learn more about [+page.svelte](https://learn.svelte.dev/tutorial/pages)


As for `+layout.svelte` is the layout of the website for you to implement repetitive UI components. For example, navigation bars and footer is existed in every page. Instead of repeating it in each +page.svelte component, we can use a +layout.svelte component that applies to all routes in the same directory. Click here to learn more about [+layout.svelte](https://learn.svelte.dev/tutorial/layouts)

At the heart of SvelteKit is a filesystem-based router. The routes of your app — i.e. the URL paths that users can access — are defined by the directories in your codebase.
For more information about routing, read here -> https://kit.svelte.dev/docs/routing


For Example :
- src/routes is the root route
* src/routes/about creates an /about route

```
<h1>Hello and welcome to my site!</h1>
<a href="/about">About my site</a>
```
![image](https://github.com/cl3mentch/innovus/assets/31813377/4199ffcc-0709-489f-ba10-af3533ee092d)


## Editing images or portfolios
To edit images or portfolios, you will need to find `src/routes/image.js` and `src/routes/portfolio/portfolio.js`. Once relocated, you would see an image or portfolio object:


```
//To add image, add this but please remember to change the parameter
       {
		number: 'next number',
		src: 'your src of image'
	},
```


```
//To add portfolio, add this but please remember to change the parameters
    {
        title: 'Title of your portfolio',
        img: 'your src of image',
        catergory: 'Your Catergory',
    },
```




## Configuring Theme Color 
Go to `tailwind.config.js`, you may find theme configurations under `daisyui` and `themes`

You may define css class inside of the theme object such as `Light` and `Dark`
![image](https://github.com/cl3mentch/innovus/assets/31813377/2c092f75-613e-4401-be86-74f4ac8a5a83)


Once css class is defined you may use it in html like this :


![image](https://github.com/cl3mentch/innovus/assets/31813377/de903ff9-9908-4fc2-8327-87603ca3098e)


If you would like to change the theme color, you may look through [DaisyUI themes](https://daisyui.com/docs/themes/)




