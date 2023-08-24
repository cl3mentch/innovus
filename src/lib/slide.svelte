<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css/sea-green';
	const options = {
		type: 'slide',
		rewind: true,
		perPage: 1,
		mediaQuery: 'max',
		breakpoints: {
			768: {
				destroy: true
			}
		},
		gap: '6rem',
		height: '',
		padding: '4rem',
		autoplay: true,
		interval: 2000
		// arrows: false
	};
</script>

<Splide
	{options}
	aria-label="Svelte Splide Example"
	class="text-color p-5 lg:max-w-[1500px] lg:m-auto"
>
	<SplideSlide>
		<div class="lg:flex justify-center items-center">
			<div class="lg:flex">
				<div class="lg:mt-28">
					<p class="text-3xl lg:text-5xl font-bold">Web Development</p>
					<p class="text-md lg:text-lg my-10">
						Elevate your online presence with our web development expertise. We craft responsive and
						dynamic websites that captivate audiences, seamlessly combining aesthetics and
						functionality for an exceptional user experience. Embrace innovation and create a
						digital footprint that stands out.
					</p>
					<div class="btn btn-outline btn-warning text-xs">Discover More</div>
				</div>
				<div class="mt-10 lg:mt-0">
					<p class="text-[#CCCCCC] text-7xl mx-3 mb-7 hidden lg:block">01</p>
					<div class="bg-[#FBBD23] p-2 lg:p-5 rounded-lg">
						<div class="overflow-hidden lg:w-[600px] lg:h-[400px] rounded-lg drop-shadow-2xl">
							<img
								src="/database-programer-writing-code-terminal-window-using-multiple-monitors-it-agency-office-system-software-developer-typing-database-information-computing-big-data-script (2).jpg"
								alt="img"
								class="object-cover w-full h-full rounded"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</SplideSlide>
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<SplideSlide>
		<div class="lg:flex justify-center items-center">
			<div class="lg:flex">
				<div class="mt-28">
					<p class="text-3xl lg:text-5xl font-bold">Search Engine <br />Optimization</p>
					<p class="text-md lg:text-lg my-10">
						Unlock unparalleled online visibility with our SEO service. We optimize your digital
						presence, employing proven strategies to enhance search engine rankings and drive
						organic traffic. Elevate your brand's reach and dominate search results with our expert
						SEO solutions.
					</p>
					<div class="btn btn-outline btn-warning text-xs">Discover More</div>
				</div>
				<div class="mt-10 lg:mt-0">
					<p class="text-[#CCCCCC] text-7xl mx-3 mb-7 hidden lg:block">02</p>
					<div class="bg-[#FBBD23] p-2 lg:p-5 rounded-lg">
						<div class="overflow-hidden lg:w-[600px] lg:h-[400px] rounded-lg drop-shadow-2xl">
							<img
								src="/homepage-concept-with-search-bar.jpg"
								alt="img"
								class="object-cover w-full h-full rounded"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</SplideSlide>
	<SplideSlide>
		<div class="lg:flex justify-center items-center">
			<div class="lg:flex">
				<div class="mt-28">
					<p class="text-3xl lg:text-5xl font-bold">Digital Marketing</p>
					<p class="text-md lg:text-lg my-10">
						Amplify your brand's impact through our dynamic digital marketing services. We curate
						data-driven strategies, harnessing the power of social media, SEO, and content to
						engage, convert, and retain customers. Elevate your online presence and achieve
						measurable success with our comprehensive digital marketing solutions.
					</p>
					<div class="btn btn-outline btn-warning text-xs">Discover More</div>
				</div>
				<div class="mt-10 lg:mt-0">
					<p class="text-[#CCCCCC] text-7xl mx-3 mb-7 hidden lg:block">03</p>
					<div class="bg-[#FBBD23] p-2 lg:p-5 rounded-lg">
						<div class="overflow-hidden lg:w-[600px] lg:h-[400px] rounded-lg drop-shadow-2xl">
							<img
								src="/social-media-marketing-concept-marketing-with-applications.jpg"
								alt="img"
								class="object-cover w-full h-full rounded"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</SplideSlide>
	<SplideSlide>
		<div class="lg:flex justify-center items-center">
			<div class="lg:flex">
				<div class="mt-28">
					<p class="text-3xl lg:text-5xl font-bold">Creative Media</p>
					<p class="text-md lg:text-lg my-10">
						Ignite your brand's essence with our creative media solutions. We blend innovation and
						artistic finesse to produce captivating visuals and engaging content that resonate. From
						striking graphics to compelling videos, we transform ideas into captivating narratives
						that leave a lasting impression. Elevate your brand story with our imaginative creative
						media services.
					</p>
					<div class="btn btn-outline btn-warning text-xs">Discover More</div>
				</div>
				<div class="mt-10 lg:mt-0">
					<p class="text-[#CCCCCC] text-7xl mx-3 mb-7 hidden lg:block">04</p>
					<div class="bg-[#FBBD23] p-2 lg:p-5 rounded-lg">
						<div class="overflow-hidden lg:w-[600px] lg:h-[400px] rounded-lg drop-shadow-2xl">
							<img
								src="/social-media-concept-composition.jpg"
								alt="img"
								class="object-cover w-full h-full rounded"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</SplideSlide>
	<SplideSlide>
		<div class="lg:flex justify-center items-center">
			<div class="lg:flex">
				<div class="mt-28">
					<p class="text-3xl lg:text-5xl font-bold">Data & <br />Business Analysis</p>
					<p class="text-md lg:text-lg my-10">
						Navigate success with our data-driven business analysis services. We decode intricate
						datasets, uncovering invaluable insights that steer informed decisions. Through
						meticulous analysis, we empower you to optimize operations, identify growth
						opportunities, and drive sustainable success. Elevate your business strategy with our
						precise data and analysis expertise.
					</p>
					<div class="btn btn-outline btn-warning text-xs">Discover More</div>
				</div>
				<div class="mt-10 lg:mt-0">
					<p class="text-[#CCCCCC] text-7xl mx-3 mb-7 hidden lg:block">05</p>
					<div class="bg-[#FBBD23] p-2 lg:p-5 rounded-lg">
						<div class="overflow-hidden lg:w-[600px] lg:h-[400px] rounded-lg drop-shadow-2xl">
							<img
								src="/analyzing-statistical-data-with-colleagues.jpg"
								alt="img"
								class="object-cover w-full h-full rounded"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</SplideSlide>
</Splide>
