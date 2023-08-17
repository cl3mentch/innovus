<script>
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
</script>

<svelte:window bind:scrollY={y} bind:innerHeight />

<div id="content" class="bg-black">
	<div id="home" class="sticky top-0">
		<div
			class="flex justify-center"
			style:transform="scale({calculate(y, 0, 1 * innerHeight, 1, 1.5)})"
			style:opacity={calculate(y, 0.7 * innerHeight, 1.8 * innerHeight, 1, 0)}
		>
			<div class="absolute text-center z-10 top-[40%] text-white">
				<p class="text-5xl font-semibold mb-5">Our Portfolio</p>
				<p class="font-semibold max-w-[460px]">
					We delivered excellent web solutions to great brands, take a look at some of our work
					portfolios and the great words of our clients.
				</p>
			</div>
			<!-- svelte-ignore a11y-media-has-caption -->
			<video autoplay loop playsinline muted class="w-full h-[100vh] object-cover"
				><source
					src="https://v1.cdnpk.net/videvo_files/video/premium/video0293/large_watermarked/_Urban15_FPpreview.mp4"
				/></video
			>
		</div>
		<!-- <div
			id="img-container"
			class="flex justify-center items-center"
			style:transform="scale({calculate(y, 0, 1 * innerHeight, 1, 1.5)})"
			style:opacity={calculate(y, 0.7 * innerHeight, 1.8 * innerHeight, 1, 0)}
		>
		</div> -->
	</div>
	<div class="bg-[#1E1E1E] min-h-[400px] w-full text-white flex items-center absolute">
		<div class="max-w-[1300px] m-auto flex">
			<div
				class="w-1/2 text-left bg-gradient-to-r from-[#E63A33] via-purple-500 to-[#38C5E7] bg-clip-text text-transparent text-4xl font-bold"
			>
				<p class="mb-3">INNOVUS CREATIVE</p>
				<p>CRAFT</p>
			</div>
			<div class="w-1/2 text-lg ml-10">
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
</div>

<style>
	#content {
		height: 500vh;
	}
	#home {
		height: 260vh;
	}
	/* #img-container {
		position: sticky;
		top: 0;
		width: 100%;
		height: 100vh;
		background-image: linear-gradient(rgba(49, 47, 47, 0.5), rgba(35, 34, 34, 0.5)),
			url('https://img.freepik.com/free-photo/digital-tablet-photography-design-studio-editing-concept_53876-146880.jpg?w=1380&t=st=1692176915~exp=1692177515~hmac=a900e0d7aea07ae956eb0275fcf9ac7bd6a4c43e809f9355629cb63c79c21001');
		background-position: 50% 50%;
		background-size: cover;
		background-repeat: no-repeat;
	} */
</style>
