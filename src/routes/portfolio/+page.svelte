<script>
	import { scale } from 'svelte/transition';
	import { expoInOut } from 'svelte/easing';
	import { portfolios } from './portfolio';

	let y = 0;
	let innerHeight;

	function calculate(y, startY, endY, startValue, endValue) {
		const diffY = endY - startY;
		const diffValue = endValue - startValue;
		if (y < startY) {
			return startValue;
		} else if (startY <= y && y <= endY) {
			const progress = (y - startY) / diffY;
			return startValue + diffValue * progress;
		} else if (endY < y) {
			return endValue;
		}
	}

	let selectedCategory = '';

	let filterPortfolios = portfolios;

	$: if (selectedCategory) getCatergory();

	const getCatergory = () => {
		if (selectedCategory === 'All') {
			return (filterPortfolios = portfolios);
		}
		return (filterPortfolios = portfolios.filter((portfolio) => {
			return portfolio.catergory === selectedCategory;
		}));
	};
</script>

<svelte:window bind:scrollY={y} bind:innerHeight />

<body class=" bg-color">
	<div class="sticky top-0 h-[220vh] overflow-hidden">
		<div
			class="flex justify-center"
			style:transform="scale({calculate(y, 0, 1 * innerHeight, 1, 1.5)})"
			style:opacity={calculate(y, 0.7 * innerHeight, 1.8 * innerHeight, 1, 0)}
		>
			<div class="absolute text-center z-10 top-[40%] text-white">
				<p class="mb-5 text-5xl font-semibold">Our Portfolio</p>
				<p class="font-semibold max-w-[600px]">
					Discover our diverse portfolio, a showcase of creativity and innovation. From captivating
					designs to seamless functionality, our projects reflect excellence in web development,
					digital marketing, and more.
				</p>
			</div>
			<!-- svelte-ignore a11y-media-has-caption -->
			<video autoplay loop playsinline muted class="w-full h-[100vh] object-cover"
				><source
					src="https://firebasestorage.googleapis.com/v0/b/innovus-cd769.appspot.com/o/portfolio%20banner%20(1)%20(1).mp4?alt=media&token=1e66a30f-ea86-41c8-b0bf-f894bf931952"
				/></video
			>
			<!-- <div
				id="img-container"
				class="flex items-center justify-center"
				style:transform="scale({calculate(y, 0, 1 * innerHeight, 1, 1.5)})"
				style:opacity={calculate(y, 0.7 * innerHeight, 1.8 * innerHeight, 1, 0)}
			>
			</div> -->
		</div>
	</div>
	<div class="subbg-color min-h-[400px] w-full flex items-center relative">
		<div class="lg:max-w-[1300px] m-auto lg:flex">
			<div
				class="lg:w-1/2 text-left bg-gradient-to-r from-[#E63A33] via-purple-500 to-[#38C5E7] bg-clip-text text-transparent text-4xl font-bold"
			>
				<p class="mb-3">INNOVUS CREATIVE</p>
				<p>CRAFT</p>
			</div>
			<div class="text-lg lg:w-1/2 lg:ml-10">
				<div class="">
					<p>
						Innovus provides a comprehensive range of creative services that are strategically
						designed to help clients achieve their goals and stand out in their respective
						industries.
					</p>
					<p class="mt-5">
						We partner with companies, both large and small, to develop captivating and meaningful
						communications. Our approach blends strategic insights with creative flair, giving
						narratives a vibrant and relatable essence.
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="relative mt-5 text-white">
		<div class="lg:max-w-[1300px] m-auto pb-20">
			<div
				class="nav flex flex-wrap justify-between m-auto lg:max-w-[600px] max-w-[400px] my-20 px-6 py-5 bg-[#16171A] rounded-full uppercase text-xs font-semibold tracking-wider"
			>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<p
					class="cursor-pointer hover:text-red-500"
					on:click={() => {
						selectedCategory = 'All';
					}}
				>
					All
				</p>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<p
					class="cursor-pointer hover:text-red-500"
					on:click={() => {
						selectedCategory = 'Web Development';
					}}
				>
					Web Development
				</p>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<p
					class="cursor-pointer hover:text-red-500"
					on:click={() => {
						selectedCategory = 'Digital Marketing';
					}}
				>
					Digital Marketing
				</p>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<p
					class="cursor-pointer hover:text-red-500"
					on:click={() => {
						selectedCategory = 'Creative Media';
					}}
				>
					Creative Media
				</p>
			</div>
			<div class="grid w-full grid-cols-2 gap-4 lg:grid-cols-3 lg:gaps-8">
				{#each filterPortfolios as portfolio}
					<div
						class="mb-6 text-center uppercase"
						transition:scale={{ duration: 1000, easing: expoInOut }}
					>
						<div class="overflow-hidden lg:h-[250px]">
							<img
								class="hover:scale-[1.1] w-full h-full object-cover transition cursor-pointer"
								src={portfolio.img}
								alt=""
							/>
						</div>
						<p class="mt-5 font-bold leading-loose lg:text-xl text-color">{portfolio.title}</p>
						<p class="text-sm tracking-widest text-[#909095]">{portfolio.catergory}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</body>
