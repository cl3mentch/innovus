<script>
	import Particles from 'svelte-particles';
	// import { loadFull } from 'tsparticles';
	import { loadSlim } from 'tsparticles-slim';
	import TypedJs from '@loscrackitos/svelte-typed-js';
	import Slide from '../lib/slide.svelte';
	import { fade } from 'svelte/transition';
	import { images } from './image';
	import { goto } from '$app/navigation';

	let particlesConfig = {
		particles: {
			color: {
				value: '#DDA92F'
			},
			links: {
				enable: true,
				color: '#DDA92F'
			},
			move: {
				enable: true
			},
			shape: {
				type: 'circle'
			},
			number: {
				value: 200
			},
			size: {
				value: {
					min: 1,
					max: 3
				}
			}
		},
		interactivity: {
			events: {
				onClick: {
					enable: true,
					mode: 'push'
				},
				onHover: {
					enable: true,
					mode: 'repulse'
				}
			}
		},
		fullScreen: {
			enable: false
		}
	};

	let onParticlesLoaded = (event) => {
		const particlesContainer = event.detail.particles;

		// you can use particlesContainer to call all the Container class
		// (from the core library) methods like play, pause, refresh, start, stop
	};

	let particlesInit = async (engine) => {
		// you can use main to customize the tsParticles instance adding presets or custom shapes
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		// await loadFull(engine);
		await loadSlim(engine);
	};

	let selectedNumber = '1';

	let currentImage =
		'https://firebasestorage.googleapis.com/v0/b/innovus-cd769.appspot.com/o/rsz_2programming-background-with-person-working-with-codes-computer_2_1.jpg?alt=media&token=741a4180-53a8-4523-8d56-ecb46cbff00f';

	$: if (selectedNumber) getImage();
	const getImage = () => {
		for (let image of images) {
			if (image.number === selectedNumber) {
				return (currentImage = image.src);
			}
		}
	};
	// function changeImage(x) {
	// 	if (x == 1) {
	// 		return (image =
	// 			'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=1380&t=st=1692063922~exp=1692064522~hmac=228e84393c07417e4acd017a56cf185d5a93cad64b641765fd2fd41b39de12bc');
	// 	}
	// 	if (x == 2) {
	// 		return (image =
	// 			'https://s40424.pcdn.co/in/wp-content/uploads/2023/04/SEO-Specialist.png.webp');
	// 	}
	// 	if (x == 3) {
	// 		return (image =
	// 			'https://img.freepik.com/free-photo/african-american-people-analyzing-business-charts-diagrams-laptop-create-startup-presentation-paperwork-report-doing-teamwork-collaboration-plan-research-information_482257-50114.jpg?w=740&t=st=1692341694~exp=1692342294~hmac=8569be9688421c77f5c2b15b1bab505ec57ab8eade348aeb6e47da157fa7ad4a');
	// 	}
	// 	if (x == 4) {
	// 		return (image =
	// 			'https://img.freepik.com/free-photo/photographer-taking-photo-male-model-studio_23-2148532613.jpg?w=740&t=st=1692341379~exp=1692341979~hmac=46df8538d25d251f16b938e31fb9927dff82975309814f2ebefbb721de7a1793');
	// 	}
	// 	if (x == 5) {
	// 		return (image =
	// 			'https://img.freepik.com/free-photo/businesswoman-using-tablet-analysis-graph-company-finance-strategy-statistics-success-concept-planning-future-office-room_74952-1410.jpg?w=1380&t=st=1692338712~exp=1692339312~hmac=8dcd879dc44f74d7ab462432f669f81ab5ec4d32a96cb86f095abebacd49f452');
	// 	}
	// }
</script>

<div class="bg-color transition h-[90vh] relative p-5 lg:p-0">
	<Particles
		id="tsparticles"
		class="foo bar absolute lg:w-full h-full "
		style=""
		options={particlesConfig}
		on:particlesLoaded={onParticlesLoaded}
		{particlesInit}
	/>
	<!-- <img
		src="https://e7.pngegg.com/pngimages/841/592/png-clipart-blue-smoke-illustration-smoke-transparency-and-translucency-youtube-background-light-smoke-blue-hand-thumbnail.png"
		alt=""
		class="absolute lg:w-full h-full"
	/> -->
	<div
		class="font-extrabold lg:max-w-[1300px] m-auto text-color py-10 pt-20 relative flex flex-col lg:flex-row justify-between"
	>
		<div class="text-3xl lg:text-5xl">
			<div class="py-6">Where Technology</div>
			<div>Meets</div>
			<div class="glow text-white py-6">Innovation</div>
		</div>
		<TypedJs
			strings={[
				'Web Development',
				'Search Engine Optimization',
				'Digital Marketing',
				'Creative Media',
				'Data &amp; Business Analysis'
			]}
			loop={true}
			typeSpeed={50}
			backSpeed={10}
			showCursor={false}
		>
			<div
				class="text-3xl lg:text-6xl mt-28 lg:max-w-[800px] leading-normal lg:leading-relaxed lg:text-right"
			>
				<p><span class="typing bg-[#F9BC23] p-0 lg:p-4" /></p>
			</div>
		</TypedJs>
	</div>
</div>
<div class="lg:flex text-color icon-color">
	<div class="lg:flex subbg-color w-full">
		<div class="lg:w-2/5 lg:h-[1000px]">
			<!-- svelte-ignore a11y-img-redundant-alt -->

			<img
				transition:fade={{ duration: 300 }}
				src={currentImage}
				alt="image"
				class="mt-10 lg:mt-0 object-cover object-center w-full h-full"
			/>
		</div>
		<div class="lg:w-3/5 px-5 pb-12">
			<div class="lg:flex items-center lg:my-32">
				<p
					class="lg:-rotate-90 before:content-[''] before:bg-[#707070] before:w-[50px] before:h-[1px] before:inline-block before:align-middle before:mr-[1rem] font-medium text-2xl lg:mx-20"
				>
					Our Services
				</p>
				<p class="lg:max-w-[400px] text-xl my-5">
					We immerse ourselves in the intricacies of our tasks, meticulously refining every pixel to
					achieve perfection.
				</p>
			</div>
			<ul class="text-3xl lg:text-4xl font-black lg:mb-32">
				<li class="lg:flex items-center mt-10">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1"
						stroke="currentColor"
						class="w-14 h-16 hidden lg:block"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
						/>
					</svg>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
					<p
						class="lg:ml-3 cursor-pointer hover:underline"
						on:mouseenter={() => {
							selectedNumber = '1';
						}}
						on:click={() => {
							goto('/services/webdevelopment');
						}}
					>
						Web Development
					</p>
				</li>
				<li class="lg:flex items-center lg:mt-5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1"
						stroke="currentColor"
						class="w-14 h-16 hidden lg:block"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
						/>
					</svg>

					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
					<p
						class="lg:ml-3 cursor-pointer hover:underline"
						on:mouseenter={() => {
							selectedNumber = '2';
						}}
						on:click={() => {
							goto('/services/SEO');
						}}
					>
						Search Engine Optimization
					</p>
				</li>
				<li class="lg:flex items-center mt-5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						version="1.0"
						stroke="1"
						class="w-14 h-16 hidden lg:block"
						viewBox="0 0 512.000000 512.000000"
						preserveAspectRatio="xMidYMid meet"
					>
						<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
							<path
								d="M2020 5026 c-269 -58 -487 -263 -557 -526 -28 -103 -23 -293 9 -392 39 -119 92 -204 182 -294 129 -129 278 -198 454 -210 435 -31 797 329 768 764 -6 107 -43 228 -97 320 -49 82 -180 211 -262 257 -148 82 -343 113 -497 81z m246 -157 c96 -17 213 -79 286 -152 112 -112 163 -235 163 -397 0 -160 -51 -285 -161 -394 -109 -110 -234 -161 -394 -161 -162 0 -285 51 -397 163 -237 237 -207 646 63 838 139 99 279 132 440 103z"
							/>
							<path
								d="M1945 4615 l-25 -24 0 -271 0 -271 25 -24 c14 -15 35 -25 52 -25 15 1 145 60 288 133 221 112 261 136 269 160 22 63 12 72 -269 214 -143 73 -273 132 -288 133 -17 0 -38 -10 -52 -25z m345 -295 c0 -3 -47 -29 -105 -58 l-105 -52 0 110 0 110 105 -52 c58 -29 105 -55 105 -58z"
							/>
							<path
								d="M3680 4947 c-49 -16 -133 -102 -148 -153 -7 -23 -12 -92 -12 -153 0 -105 1 -113 25 -136 15 -16 36 -25 55 -25 19 0 40 9 55 25 24 23 25 31 25 135 0 104 1 112 25 135 l24 25 511 0 511 0 24 -25 25 -24 0 -511 0 -511 -25 -24 -24 -25 -511 0 -511 0 -24 25 -25 24 0 271 0 271 -25 24 c-15 16 -36 25 -55 25 -19 0 -40 -9 -55 -25 l-25 -24 0 -272 c0 -184 4 -285 12 -313 16 -55 99 -138 154 -154 30 -9 181 -12 556 -12 590 0 578 -2 651 80 24 26 49 66 55 88 17 56 17 1048 0 1104 -6 22 -31 62 -55 88 -73 82 -60 80 -657 79 -349 -1 -533 -5 -556 -12z"
							/>
							<path
								d="M4240 4627 c-49 -16 -133 -102 -148 -153 -7 -23 -12 -67 -12 -98 l0 -56 -55 0 c-67 0 -105 -29 -105 -80 0 -51 38 -80 105 -80 l55 0 0 -135 c0 -131 1 -137 25 -160 15 -16 36 -25 55 -25 19 0 40 9 55 25 24 23 25 29 25 160 l0 135 55 0 c67 0 105 29 105 80 0 51 -38 80 -105 80 l-55 0 0 55 c0 46 4 60 25 80 23 24 31 25 135 25 104 0 112 1 135 25 16 15 25 36 25 55 0 19 -9 40 -25 55 -23 24 -29 25 -142 24 -65 -1 -134 -6 -153 -12z"
							/>
							<path
								d="M185 4215 l-25 -24 0 -671 0 -671 25 -24 24 -25 511 0 511 0 24 25 25 24 0 671 0 671 -25 24 -24 25 -511 0 -511 0 -24 -25z m935 -695 l0 -560 -400 0 -400 0 0 560 0 560 400 0 400 0 0 -560z"
							/>
							<path
								d="M665 3895 c-16 -15 -25 -36 -25 -55 0 -19 9 -40 25 -55 23 -24 31 -25 135 -25 104 0 112 1 135 25 16 15 25 36 25 55 0 19 -9 40 -25 55 -23 24 -31 25 -135 25 -104 0 -112 -1 -135 -25z"
							/>
							<path
								d="M505 3575 c-16 -15 -25 -36 -25 -55 0 -19 9 -40 25 -55 24 -25 26 -25 215 -25 189 0 191 0 215 25 16 15 25 36 25 55 0 19 -9 40 -25 55 -24 25 -26 25 -215 25 -189 0 -191 0 -215 -25z"
							/>
							<path
								d="M505 3255 c-16 -15 -25 -36 -25 -55 0 -19 9 -40 25 -55 24 -25 26 -25 215 -25 189 0 191 0 215 25 16 15 25 36 25 55 0 19 -9 40 -25 55 -24 25 -26 25 -215 25 -189 0 -191 0 -215 -25z"
							/>
							<path
								d="M3157 3748 c-9 -7 -75 -91 -147 -187 -141 -190 -150 -211 -105 -256 26 -27 71 -33 98 -12 9 6 75 90 147 186 141 190 150 211 105 256 -26 27 -71 33 -98 13z"
							/>
							<path
								d="M3319 3230 c-96 -72 -180 -138 -186 -147 -21 -27 -15 -72 12 -98 45 -45 66 -36 256 105 96 72 180 138 187 147 20 27 14 72 -13 98 -45 45 -66 36 -256 -105z"
							/>
							<path
								d="M2545 3268 c-11 -6 -270 -218 -577 -471 -552 -455 -558 -459 -740 -564 -202 -116 -246 -152 -286 -233 -23 -47 -27 -67 -27 -140 l1 -86 -59 -34 c-102 -60 -153 -166 -128 -265 29 -115 119 -185 237 -185 52 0 73 6 128 35 l66 35 41 -29 c100 -73 224 -80 339 -20 36 19 68 35 72 37 3 2 41 -59 85 -135 43 -76 94 -156 113 -177 93 -104 257 -104 351 1 47 52 62 100 57 177 -3 55 -12 75 -86 205 -45 79 -80 146 -78 149 3 2 274 105 603 229 615 230 643 243 643 295 0 20 -369 672 -417 736 -20 26 -31 32 -63 32 -30 0 -43 -6 -59 -26 -38 -49 -49 -25 176 -413 90 -155 163 -285 160 -287 -2 -2 -298 -114 -657 -249 -646 -242 -655 -246 -824 -344 -94 -54 -185 -102 -203 -105 -46 -10 -104 9 -139 46 -17 18 -68 98 -114 178 -91 158 -106 210 -77 266 23 45 52 66 201 153 l139 80 106 -182 c115 -198 133 -216 190 -196 35 12 51 35 51 74 0 15 -44 102 -105 207 -58 100 -104 185 -103 189 2 4 147 125 323 271 176 145 398 327 493 406 163 134 192 155 192 133 0 -22 68 -81 94 -81 36 0 76 41 76 77 0 32 -80 179 -111 206 -24 20 -55 22 -84 5z m-1513 -1706 l37 -68 -42 -22 c-58 -30 -100 -29 -126 4 -37 46 -24 88 37 129 20 13 42 24 47 24 6 1 27 -30 47 -67z m947 -202 c97 -168 103 -210 32 -240 -53 -22 -77 0 -168 155 -45 77 -82 145 -82 150 -1 11 106 74 125 75 7 0 48 -63 93 -140z"
							/>
							<path
								d="M3605 2836 c-110 -23 -207 -46 -217 -50 -22 -10 -41 -60 -33 -86 10 -31 45 -60 74 -60 14 0 120 19 236 42 170 34 214 46 232 64 49 49 11 135 -59 133 -18 -1 -123 -20 -233 -43z"
							/>
							<path
								d="M425 2535 l-25 -24 0 -856 0 -855 -95 0 c-90 0 -98 -2 -122 -26 -25 -25 -25 -26 -21 -167 3 -134 5 -146 35 -209 44 -93 100 -151 191 -196 l76 -37 1136 0 1136 0 76 37 c91 45 147 103 191 196 30 63 32 75 35 209 4 141 4 142 -21 167 -24 24 -32 26 -122 26 l-95 0 0 404 c0 393 -1 404 -21 430 -29 37 -89 37 -118 0 -20 -26 -21 -37 -21 -430 l0 -404 -1040 0 -1040 0 0 800 0 800 344 0 345 0 27 23 c20 17 27 33 27 57 0 24 -7 40 -27 57 l-27 23 -400 0 -400 0 -24 -25z m2455 -1951 c0 -87 -18 -133 -75 -189 -61 -62 -101 -75 -229 -75 l-96 0 0 55 c0 67 -29 105 -80 105 -51 0 -80 -38 -80 -105 l0 -55 -720 0 -720 0 0 55 c0 67 -29 105 -80 105 -51 0 -80 -38 -80 -105 l0 -55 -96 0 c-128 0 -168 13 -229 75 -57 56 -75 102 -75 189 l0 56 1280 0 1280 0 0 -56z"
							/>
							<path
								d="M3680 2467 c-49 -16 -133 -102 -148 -153 -17 -59 -17 -1049 0 -1108 16 -55 99 -138 154 -154 30 -9 181 -12 556 -12 590 0 578 -2 651 80 56 62 67 102 67 239 0 105 -1 113 -25 136 -32 33 -78 33 -110 0 -24 -23 -25 -31 -25 -135 0 -104 -1 -112 -25 -135 l-24 -25 -511 0 -511 0 -24 25 -25 24 0 511 0 511 25 24 24 25 511 0 511 0 24 -25 25 -24 0 -271 0 -271 25 -24 c15 -16 36 -25 55 -25 19 0 40 9 55 25 l25 24 0 272 c0 181 -4 285 -12 311 -6 22 -31 62 -55 88 -73 82 -60 80 -657 79 -349 -1 -533 -5 -556 -12z"
							/>
							<path
								d="M4165 2071 c-92 -24 -173 -90 -215 -176 -35 -73 -35 -199 0 -270 31 -64 91 -124 155 -155 71 -35 197 -35 270 0 64 31 124 91 155 155 35 73 35 199 0 270 -32 64 -92 124 -155 154 -54 25 -156 36 -210 22z m138 -165 c103 -43 128 -177 48 -257 -65 -65 -157 -65 -222 0 -124 123 13 325 174 257z"
							/>
						</g>
					</svg>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
					<p
						class="lg:ml-3 cursor-pointer hover:underline"
						on:mouseenter={() => {
							selectedNumber = '3';
						}}
						on:click={() => {
							goto('/services/digitalmarketing');
						}}
					>
						Digital Marketing
					</p>
				</li>
				<li class="lg:flex items-center mt-5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						version="1.0"
						class="w-14 h-16 hidden lg:block"
						viewBox="0 0 512.000000 512.000000"
						preserveAspectRatio="xMidYMid meet"
					>
						<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
							<path
								d="M287 5109 c-103 -24 -206 -111 -254 -214 l-28 -60 0 -645 0 -645 33 -67 c41 -83 119 -158 200 -189 53 -22 75 -24 300 -27 l242 -4 0 -698 0 -698 -242 -4 c-225 -3 -247 -5 -300 -27 -81 -31 -159 -106 -200 -189 l-33 -67 0 -645 0 -645 28 -60 c37 -79 114 -156 191 -192 l61 -28 854 -3 c760 -2 860 -1 910 14 109 31 195 105 243 210 21 46 23 66 28 299 l5 250 235 0 235 0 5 -250 c5 -233 7 -253 28 -299 48 -105 134 -179 243 -210 50 -15 150 -16 910 -14 l854 3 65 31 c82 39 144 101 184 184 l31 65 0 645 0 645 -33 67 c-41 83 -119 158 -200 189 -53 22 -75 24 -299 27 l-243 4 0 308 0 309 -26 20 c-30 24 -43 26 -77 10 -44 -20 -47 -43 -47 -354 l0 -295 -23 0 c-13 0 -47 15 -77 33 l-55 32 0 635 0 635 55 32 c30 18 64 33 77 33 l22 0 3 -251 c3 -250 3 -251 27 -270 30 -25 76 -24 101 1 19 19 20 33 20 269 l0 249 243 4 c224 3 246 5 299 27 81 31 159 106 200 189 l33 67 0 645 0 645 -28 61 c-36 77 -113 154 -192 191 l-60 28 -854 3 c-942 3 -912 5 -1013 -60 -61 -39 -105 -89 -137 -158 -25 -54 -26 -62 -31 -305 l-5 -250 -235 0 -235 0 -5 250 c-5 232 -7 254 -27 298 -48 104 -128 175 -235 209 -55 16 -101 18 -537 18 l-478 0 -21 -23 c-31 -33 -29 -80 4 -106 26 -21 36 -21 499 -21 l473 0 53 -28 c34 -17 65 -44 84 -71 l30 -43 3 -625 2 -624 -26 -49 c-29 -53 -80 -94 -135 -110 -19 -6 -127 -10 -242 -10 -222 0 -254 -6 -306 -53 -34 -31 -61 -95 -61 -144 0 -24 -2 -43 -5 -43 -3 0 -73 45 -157 101 -83 56 -167 109 -187 118 -30 13 -90 17 -386 21 -338 5 -351 6 -392 27 -51 27 -96 82 -112 132 -15 53 -16 1189 0 1246 15 53 91 129 144 144 23 6 124 11 238 11 109 0 206 4 216 10 10 5 24 22 30 39 10 24 10 34 -3 59 -8 16 -23 32 -31 36 -25 9 -425 5 -468 -5z m4574 -174 c24 -17 57 -50 74 -74 l30 -43 3 -601 c2 -430 0 -614 -9 -643 -14 -54 -60 -109 -112 -137 -41 -21 -54 -22 -392 -27 -296 -4 -356 -8 -386 -21 -20 -9 -104 -62 -187 -118 -84 -56 -154 -101 -157 -101 -3 0 -5 18 -5 40 0 79 -44 148 -115 181 -35 16 -67 19 -250 19 -116 0 -225 4 -244 10 -55 16 -106 57 -135 110 l-26 49 2 624 3 625 30 43 c19 27 50 54 84 71 l54 28 848 -2 847 -3 43 -30z m-2063 -822 l-3 -78 -235 0 -235 0 -3 78 -3 77 241 0 241 0 -3 -77z m4 -405 c3 -163 5 -176 30 -230 35 -75 104 -142 186 -181 l67 -32 230 -3 c129 -2 235 -8 242 -13 7 -7 13 -56 15 -135 3 -118 4 -127 27 -145 13 -10 34 -19 46 -19 13 0 71 31 129 70 l106 70 0 -530 0 -530 -106 70 c-58 39 -116 70 -129 70 -12 0 -33 -9 -46 -19 -23 -18 -24 -27 -27 -145 -2 -79 -8 -128 -15 -135 -7 -5 -113 -11 -242 -13 l-230 -3 -67 -32 c-82 -39 -151 -106 -186 -181 -25 -54 -27 -67 -30 -229 l-3 -173 -239 0 -239 0 -3 172 c-3 163 -5 176 -30 230 -35 75 -104 142 -186 181 l-67 32 -230 3 c-129 2 -235 8 -242 13 -7 7 -13 56 -15 135 -3 118 -4 127 -27 145 -13 10 -34 19 -46 19 -13 0 -71 -31 -129 -70 l-106 -70 0 530 0 530 106 -70 c58 -39 116 -70 129 -70 12 0 33 9 46 19 23 18 24 27 27 145 2 79 8 128 15 135 7 5 113 11 242 13 l230 3 67 32 c82 39 151 106 186 181 25 54 27 67 30 230 l3 172 239 0 239 0 3 -172z m-1772 -481 l55 -32 0 -635 0 -635 -55 -32 c-30 -18 -64 -33 -77 -33 l-23 0 0 700 0 700 23 0 c13 0 47 -15 77 -33z m370 -1317 c0 -79 44 -148 115 -181 35 -16 67 -19 250 -19 116 0 225 -4 244 -10 55 -16 106 -57 135 -110 l26 -49 -2 -624 -3 -625 -30 -43 c-19 -27 -50 -54 -84 -71 l-53 -28 -827 0 c-552 0 -839 4 -864 11 -53 14 -132 93 -146 144 -16 57 -15 1194 0 1246 16 50 61 105 112 132 41 21 54 22 392 27 409 6 360 -6 580 143 77 53 143 96 148 96 4 1 7 -17 7 -39z m2482 -61 c83 -56 167 -109 187 -118 30 -13 90 -17 386 -21 338 -5 351 -6 392 -27 51 -27 96 -82 112 -132 16 -56 16 -1188 -1 -1245 -16 -54 -90 -128 -144 -144 -31 -9 -245 -12 -867 -12 l-825 0 -53 28 c-34 17 -65 44 -84 71 l-30 43 -3 625 -2 624 26 49 c29 53 80 94 135 110 19 6 128 10 244 10 183 0 215 3 250 19 71 33 115 102 115 181 0 22 2 40 5 40 3 0 73 -45 157 -101z m-1084 -841 l3 -78 -241 0 -240 0 0 73 c0 41 3 77 7 81 4 3 110 5 237 4 l231 -3 3 -77z"
							/>
							<path
								d="M3561 4795 c-333 -94 -442 -505 -198 -743 29 -27 162 -145 295 -261 261 -225 278 -236 343 -208 37 16 510 421 572 490 84 94 127 236 108 357 -51 320 -415 483 -683 305 l-39 -26 -48 30 c-103 63 -244 86 -350 56z m230 -163 c24 -11 68 -41 98 -66 64 -56 84 -55 146 4 66 63 118 85 205 85 123 0 215 -56 266 -161 47 -97 33 -223 -34 -309 -11 -13 -131 -121 -267 -240 l-248 -215 -71 63 c-39 35 -156 136 -259 226 -207 180 -235 216 -244 321 -9 93 17 162 86 231 41 41 72 62 107 73 63 20 156 15 215 -12z"
							/>
							<path
								d="M2208 3080 c-20 -11 -47 -36 -60 -57 l-23 -38 0 -425 0 -425 24 -38 c42 -68 135 -96 204 -61 108 55 658 392 684 419 35 37 49 86 39 141 -4 20 -21 50 -39 69 -26 27 -576 364 -684 419 -42 21 -99 20 -145 -4z m406 -325 c174 -104 316 -192 316 -195 0 -10 -642 -390 -651 -384 -10 6 -13 757 -2 768 9 9 -18 24 337 -189z"
							/>
							<path
								d="M1118 1529 c-20 -18 -41 -71 -88 -214 -45 -138 -69 -196 -86 -213 -24 -21 -32 -22 -230 -22 -255 0 -244 6 -244 -139 0 -96 1 -100 26 -120 59 -46 124 -2 124 85 0 23 2 24 80 24 l80 0 0 -235 0 -235 -80 0 -80 0 0 29 c0 93 -71 144 -128 91 -20 -19 -22 -31 -22 -125 0 -100 1 -104 26 -124 25 -19 40 -21 200 -21 95 0 180 3 189 6 23 9 45 57 45 99 0 19 4 35 8 35 5 0 37 -25 72 -55 92 -79 117 -85 385 -85 271 0 303 7 379 83 82 82 88 114 84 404 l-3 238 -31 55 c-56 99 -151 150 -281 150 l-63 0 6 58 c5 47 2 68 -15 108 -45 101 -103 136 -237 142 -84 4 -92 3 -116 -19z m176 -139 c48 -18 53 -50 23 -145 -43 -140 -28 -155 160 -155 147 0 183 -12 215 -71 16 -30 18 -59 18 -244 0 -319 4 -315 -312 -315 -117 0 -218 4 -234 10 -14 6 -49 30 -75 54 -27 24 -74 54 -104 67 l-55 23 0 162 0 162 36 6 c42 8 108 65 133 115 10 20 40 101 66 181 26 80 50 148 52 153 6 10 47 9 77 -3z"
							/>
							<path
								d="M3475 1541 c-78 -20 -145 -73 -183 -145 l-27 -51 0 -260 c0 -254 1 -261 24 -305 55 -106 131 -151 264 -158 l87 -4 -6 -49 c-10 -74 11 -135 65 -189 55 -54 100 -70 204 -70 109 0 112 4 187 235 34 105 71 199 81 210 18 18 36 20 235 25 199 5 217 7 230 24 11 16 14 83 14 362 l0 343 -26 20 c-25 19 -40 21 -195 21 -102 0 -178 -4 -192 -11 -30 -14 -47 -48 -47 -94 0 -19 -4 -35 -10 -35 -5 0 -32 20 -60 45 -100 89 -103 90 -375 92 -132 1 -253 -2 -270 -6z m478 -150 c13 -5 50 -32 81 -60 34 -29 79 -57 107 -66 l49 -17 0 -164 c0 -141 -2 -164 -15 -164 -26 0 -88 -36 -119 -69 -22 -23 -46 -78 -90 -208 l-61 -178 -37 -3 c-29 -3 -43 2 -63 22 -31 31 -31 42 -1 135 26 81 22 122 -14 141 -10 6 -76 10 -147 10 -148 0 -187 13 -215 70 -15 30 -18 65 -18 245 0 318 -3 315 312 315 114 0 218 -4 231 -9z m547 -226 l0 -235 -80 0 -80 0 0 235 0 235 80 0 80 0 0 -235z"
							/>
							<path
								d="M462 4407 c-55 -21 -103 -67 -129 -125 -85 -185 108 -382 295 -302 171 74 191 294 35 403 -32 23 -54 30 -104 33 -37 2 -78 -2 -97 -9z m133 -162 c16 -15 25 -36 25 -55 0 -36 -38 -80 -69 -80 -50 0 -91 41 -91 91 0 31 44 69 80 69 19 0 40 -9 55 -25z"
							/>
							<path
								d="M1059 4393 c-62 -32 -113 -98 -124 -163 -30 -176 150 -320 313 -250 90 39 142 117 142 212 -1 172 -177 278 -331 201z m156 -148 c16 -15 25 -36 25 -55 0 -36 -38 -80 -69 -80 -62 0 -103 56 -81 110 23 55 83 68 125 25z"
							/>
							<path
								d="M1681 4394 c-100 -50 -148 -159 -117 -266 35 -121 160 -192 280 -158 57 16 123 72 147 124 24 53 24 139 0 191 -56 120 -191 168 -310 109z m153 -145 c35 -28 36 -80 1 -114 -33 -33 -70 -32 -106 4 -31 32 -35 50 -17 84 26 50 77 61 122 26z"
							/>
						</g>
					</svg>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
					<p
						class="lg:ml-3 cursor-pointer hover:underline"
						on:mouseenter={() => {
							selectedNumber = '4';
						}}
						on:click={() => {
							goto('/services/creativemedia');
						}}
					>
						Creative Media
					</p>
				</li>
				<li class="lg:flex items-center mt-5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						class="w-14 h-16 hidden lg:block"
						version="1.1"
						viewBox="0 0 101.38 101.379"
						xml:space="preserve"
					>
						<g>
							<g>
								<path
									d="M100.622,70.318L80.839,50.535c6.242-8.051,5.687-19.706-1.703-27.095c-8.01-8.01-21.044-8.01-29.054,0    c-8.01,8.011-8.01,21.044,0,29.055c7.389,7.389,19.043,7.944,27.095,1.703L96.96,73.98c1.013,1.012,2.651,1.012,3.662,0.001    C101.633,72.969,101.633,71.331,100.622,70.318z M75.473,48.832c-5.99,5.991-15.738,5.992-21.729,0    c-5.991-5.99-5.991-15.738,0-21.729c5.99-5.99,15.738-5.992,21.729,0C81.464,33.093,81.464,42.841,75.473,48.832z"
								/>
								<path
									d="M5,66.071V12.403h89v48.086l5,5V11.903c0-2.48-2.02-4.5-4.5-4.5h-90c-2.481,0-4.5,2.02-4.5,4.5v54.668    c0,2.48,2.019,4.5,4.5,4.5h36.012v14.254c0,1.721,1.398,3.119,3.117,3.119h9.741c1.719,0,3.116-1.398,3.116-3.119V71.071H91.6    l-5-5H5z M43.629,85.325V71.071h9.741l0.002,14.256L43.629,85.325z"
								/>
								<path
									d="M64.49,82.077v3c-0.213,0-0.387-0.174-0.387-0.387v6.287H32.896V84.69c0,0.213-0.174,0.387-0.387,0.387v-3    c-1.441,0-2.613,1.172-2.613,2.613v6.674c0,1.441,1.172,2.613,2.613,2.613H64.49c1.441,0,2.613-1.172,2.613-2.613V84.69    C67.104,83.249,65.932,82.077,64.49,82.077z"
								/>
								<path
									d="M38.279,60.799h7.656c0.312,0,0.564-0.252,0.564-0.563v-9.399c-1.578-2.267-2.687-4.754-3.337-7.341l-5.448,5.67v11.071    C37.714,60.547,37.967,60.799,38.279,60.799z"
								/>
								<path
									d="M59.613,60.799c0.312,0,0.565-0.252,0.565-0.563v-0.264c-3.19-0.687-6.173-2.064-8.785-4.048v4.312    c0,0.312,0.253,0.563,0.564,0.563H59.613z"
								/>
								<path
									d="M59.613,47.749h-3.711c1.26,1.172,2.707,2.076,4.276,2.68v-2.114C60.179,48.002,59.926,47.749,59.613,47.749z"
								/>
								<path
									d="M72.541,60.799c0.312,0,0.564-0.252,0.564-0.563v-1.269c-2.582,0.996-5.349,1.524-8.142,1.524    c-0.2,0-0.396-0.022-0.593-0.028c0.088,0.197,0.283,0.336,0.514,0.336H72.541z"
								/>
								<path
									d="M72.061,36.082c-0.48,0-0.949-0.17-1.317-0.478l-1.392-1.163L64.32,39.93v11.363c0.222,0.011,0.441,0.031,0.666,0.031    c2.98,0,5.801-0.978,8.119-2.758V35.791c-0.031,0.019-0.06,0.04-0.092,0.058C72.721,36.001,72.391,36.082,72.061,36.082z"
								/>
								<path
									d="M57.697,44.815l11.611-12.667l2.717,2.271c0.133,0.11,0.319,0.131,0.473,0.051c0.152-0.08,0.242-0.244,0.229-0.417    l-0.59-6.585c-0.021-0.235-0.229-0.409-0.463-0.388l-6.585,0.589c-0.172,0.016-0.317,0.133-0.37,0.298    c-0.017,0.055-0.021,0.11-0.018,0.166c0.01,0.11,0.062,0.216,0.152,0.289l2.721,2.275L56.544,42.73L52,41.058    c0.227,0.96,0.557,1.888,0.986,2.77l3.488,1.283C56.906,45.269,57.389,45.153,57.697,44.815z"
								/>
								<path
									d="M42.486,38.646l-7.456,7.76c-0.433,0.45-0.418,1.165,0.032,1.597c0.219,0.211,0.501,0.315,0.782,0.315    c0.297,0,0.593-0.116,0.814-0.347l6.112-6.36C42.61,40.628,42.516,39.638,42.486,38.646z"
								/>
							</g>
						</g>
					</svg>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
					<p
						class="lg:ml-3 cursor-pointer hover:underline"
						on:mouseenter={() => {
							selectedNumber = '5';
						}}
						on:click={() => {
							goto('/services/data');
						}}
					>
						Data & Business Analysis
					</p>
				</li>
			</ul>
		</div>
	</div>
</div>
<div class="h-[500px] flex items-center justify-center py-20 text-color">
	<p class="font-black lg:text-7xl text-5xl">What We Do</p>
</div>
<div class="subbg-color">
	<Slide />
</div>
<div class="text-color p-5 lg:py-40">
	<div class="lg:max-w-[1300px] lg:flex justify-center m-auto">
		<div class="lg:w-2/4">
			<p class="font-black text-3xl lg:text-7xl">Our Values</p>
		</div>
		<div class="lg:w-2/4 py-10 lg:py-0">
			<div class="flex items-center mb-5">
				<div class="number min-w-[40px]">1</div>
				<div class="ml-5">
					<p class="font-bold text-lg lg:text-xl">Creativity Unleashed</p>
					<p class="text-[#838383] text-sm">
						Imagination is our playground. We relish the challenge of turning unique concepts into
						tangible, visually stunning realities.
					</p>
				</div>
			</div>
			<div class="flex items-center mb-5">
				<div class="number min-w-[40px]">2</div>
				<div class="ml-5">
					<p class="font-bold text-lg lg:text-xl">Code Craftsmanship</p>
					<p class="text-[#838383] text-sm">
						Imagination is our playground. We relish the challenge of turning unique concepts into
						tangible, visually stunning realities.
					</p>
				</div>
			</div>
			<div class="flex items-center mb-5">
				<div class="number min-w-[40px]">3</div>
				<div class="ml-5">
					<p class="font-bold text-lg lg:text-xl">User-Centric Design</p>
					<p class="text-[#838383] text-sm">
						Users are at the heart of everything we do. Our designs are rooted in empathy, ensuring
						seamless and engaging user experiences.
					</p>
				</div>
			</div>
			<div class="flex items-center">
				<div class="number min-w-[40px]">4</div>
				<div class="ml-5">
					<p class="font-bold text-lg lg:text-xl">Reliability and Trust</p>
					<p class="text-[#838383] text-sm">
						Building long-lasting relationships is our priority. We are committed to transparency,
						integrity, and delivering on our promises.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.number {
		border-radius: 50%;
		background: #fbbd23;
		width: 40px;
		height: 40px;
		line-height: 27px;
		text-align: center;
		margin: 0;
		padding: 5px;
		font-weight: bold;
		color: #fff;
		font-size: 1.2em;
		font-family: sans-serif;
		text-shadow: 0 1px 1px #555;
		box-shadow: inset 0 0 2px #ccc;
		transition: all 300ms ease;
	}

	.glow {
		text-shadow: 0 0 20px #fff, 0 0 30px #39c3e4, 0 0 40px #39c3e4, 0 0 50px #39c3e4,
			0 0 60px #39c3e4, 0 0 70px #39c3e4, 0 0 80px #39c3e4;
		/* animation: glow 1s ease-in-out infinite alternate; */
	}
	@keyframes glow {
		from {
			text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #223c79, 0 0 40px #223c79,
				0 0 50px #223c79, 0 0 60px #223c79, 0 0 70px #223c79;
		}

		to {
			text-shadow: 0 0 20px #fff, 0 0 30px #39c3e4, 0 0 40px #39c3e4, 0 0 50px #39c3e4,
				0 0 60px #39c3e4, 0 0 70px #39c3e4, 0 0 80px #39c3e4;
		}
	}

	li::before {
		content: '';
		-ms-flex: 0 0 24.6%;
		flex: 0 0 24.6%;
		background-color: #fb0;
		height: 2px;
		margin-left: 2%;
		margin-right: 2%;
		opacity: 0;
		transition: opacity 0.3s;
		-webkit-transition: opacity 0.3s;
	}
	li:hover:before {
		opacity: 1;
	}
</style>
